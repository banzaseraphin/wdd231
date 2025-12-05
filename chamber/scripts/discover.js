import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-cards");

// Load cards
places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("discover-card");
    card.style.gridArea = place.id;

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button class="learn-btn">Learn More</button>
    `;

    container.appendChild(card);
});

// Visitor message logic
const messageBox = document.querySelector("#visitor-message");

let lastVisit = localStorage.getItem("lastVisit");
let currentTime = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentTime);
