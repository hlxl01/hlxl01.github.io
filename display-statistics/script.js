document.addEventListener("DOMContentLoaded", function () {
    const selectBtn = document.querySelector(".select-btn");
    const sBtnText = document.querySelector(".sBtn-text");
    const options = document.querySelectorAll(".option");
    const contents = document.querySelectorAll(".content");

    // Set default active content
    let activeContent = document.getElementById("counter"); // Default
    sBtnText.innerText = "Counter"; // Update button text
    activeContent.style.display = "block";

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

            sBtnText.innerText = option.innerText;
        });
    });
});
