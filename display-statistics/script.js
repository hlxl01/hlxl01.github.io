document.addEventListener("DOMContentLoaded", () => {
    const optionMenu = document.querySelector(".select-menu"),
          selectBtn = optionMenu.querySelector(".select-btn"),
          options = optionMenu.querySelectorAll(".option"),
          contents = document.querySelectorAll(".content");

    selectBtn.addEventListener("click", () => {
        console.log("Dropdown toggled");
        optionMenu.classList.toggle("active");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            const contentId = option.getAttribute("data-content");
            console.log(`Option clicked: ${contentId}`);

            contents.forEach(content => {
                if (content.id === contentId) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                    console.log(`Displaying: ${contentId}`);
                } else {
                    content.style.display = 'none';
                }
            });

            optionMenu.classList.remove("active");
        });
    });
});
