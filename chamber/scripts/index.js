// WEATHER API
const weatherContainer = document.getElementById("weather-container");
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // replace with your API key
const city = "Lubumbashi,CD";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${apiKey}`
    );
    const data = await response.json();

    const current = data.list[0];
    const forecast = data.list.filter((_, i) => i % 8 === 0).slice(1,4); // next 3 days

    let html = `
      <p>Current: ${current.main.temp.toFixed(1)}°C, ${current.weather[0].description}</p>
      <h3>3-Day Forecast</h3>
      <ul>
        ${forecast.map(f => `<li>${new Date(f.dt_txt).toLocaleDateString()}: ${f.main.temp.toFixed(1)}°C, ${f.weather[0].description}</li>`).join('')}
      </ul>
    `;
    weatherContainer.innerHTML = html;
  } catch (err) {
    weatherContainer.innerHTML = "<p>Unable to load weather data.</p>";
    console.error(err);
  }
}

// SPOTLIGHT MEMBERS
const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch('./data/members.json');
    const members = await response.json();

    const goldSilver = members.filter(m => m.membership >= 2);
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0,3);

    spotlightContainer.innerHTML = "";
    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="./images/${member.image}" alt="${member.name}">
        <h4>${member.name}</h4>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${membershipBadge(member.membership)}</p>
      `;
      spotlightContainer.appendChild(card);
    });
  } catch(err) {
    spotlightContainer.innerHTML = "<p>Unable to load spotlights.</p>";
    console.error(err);
  }
}

function membershipBadge(level) {
  switch(level) {
    case 2: return `<span class="badge silver">Silver</span>`;
    case 3: return `<span class="badge gold">Gold</span>`;
    default: return `<span class="badge bronze">Member</span>`;
  }
}

// Footer info
const footerInfo = document.getElementById("footer-info");
const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified).toLocaleDateString();
footerInfo.textContent = `© ${currentYear} Chamber Nation. Last updated: ${lastModified}.`;

// INIT
getWeather();
loadSpotlights();
