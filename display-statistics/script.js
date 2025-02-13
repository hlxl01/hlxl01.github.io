document.addEventListener("DOMContentLoaded", function () {
    const selectMenu = document.querySelector(".select-menu");
    const selectBtn = document.querySelector(".select-btn");
    const sBtnText = document.querySelector(".sBtn-text");
    const options = document.querySelectorAll(".option");
    const contents = document.querySelectorAll(".content");

    // Set default active content
    let defaultContent = document.getElementById("counter"); // Default content
    sBtnText.innerText = "Counter"; // Set default dropdown text
    defaultContent.style.display = "block"; // Show default content

    options.forEach(option => {
        option.addEventListener("click", () => {
            let selected = option.getAttribute("data-content");

            // Hide all contents
            contents.forEach(content => {
                content.style.display = "none";
            });

            // Show selected content
            let selectedContent = document.getElementById(selected);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }

            // Update dropdown text
            sBtnText.innerText = option.innerText;

            // Close dropdown menu after selecting
            selectMenu.classList.remove("active");
        });
    });

    // Toggle dropdown menu
    selectBtn.addEventListener("click", () => {
        selectMenu.classList.toggle("active");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (event) => {
        if (!selectMenu.contains(event.target) && selectMenu.classList.contains("active")) {
            selectMenu.classList.remove("active");
        }
    });
});
