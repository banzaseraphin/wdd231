// =======================
// 1. SET TIMESTAMP
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.querySelector("#timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});

// =======================
// 2. OPEN MODALS
// =======================
const benefitLinks = document.querySelectorAll("[data-modal]");

benefitLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = link.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

// =======================
// 3. CLOSE MODALS
// =======================
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest("dialog");
        if (dialog) dialog.close();
    });
});
