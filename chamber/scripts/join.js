// join.js

window.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Set the hidden timestamp to current date/time
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // 2️⃣ Animate membership cards on initial load
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200); // staggered effect: 0ms, 200ms, 400ms, 600ms
    });

    // 3️⃣ Modal functionality
    const modalLinks = document.querySelectorAll(".membership-cards a[data-modal]");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = link.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) modal.showModal();
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) modal.close();
        });
    });

    // Optional: close modal when clicking outside dialog content
    const dialogs = document.querySelectorAll("dialog");
    dialogs.forEach(dialog => {
        dialog.addEventListener("click", (e) => {
            const rect = dialog.getBoundingClientRect();
            if (
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom
            ) {
                dialog.close();
            }
        });
    });
});
