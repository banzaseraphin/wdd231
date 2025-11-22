const membersContainer = document.getElementById("members-container");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

// Fetch members data
async function loadMembers() {
  try {
    const response = await fetch('./data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Display members in container
function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="./images/${member.image}" alt="${member.name}">
      <h4>${member.name}</h4>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${membershipText(member.membership)}</p>
      <p>${member.description}</p>
    `;
    membersContainer.appendChild(card);
  });
}

// Convert membership number to text
function membershipText(level) {
  switch(level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Member";
  }
}

// Toggle views
gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});

// Footer info: copyright year and last modified
const footerInfo = document.getElementById("footer-info");
const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified).toLocaleDateString();
footerInfo.textContent = `© ${currentYear} Chamber Nation. Last updated: ${lastModified}.`;

loadMembers();



