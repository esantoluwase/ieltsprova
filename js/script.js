// =========================================
// IELTSProva - Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // Smooth scrolling for navigation links
    // =========================================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                event.preventDefault();
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // =========================================
    // Simple scroll effect for navbar
    // =========================================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.style.boxShadow =
                "0 5px 25px rgba(17, 24, 39, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }

    });


    // =========================================
    // Animate progress bar when visible
    // =========================================

    const progressBar = document.querySelector(".progress-fill");

    if (progressBar) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        progressBar.style.transition =
                            "width 1.5s ease";

                        progressBar.style.width = "70%";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        observer.observe(progressBar);

    }


    // =========================================
    // Button interaction
    // =========================================

    const actionButtons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .signup-btn"
    );

    actionButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (href === "#") {

                event.preventDefault();

                alert(
                    "IELTSProva is currently under development. More features are coming soon!"
                );

            }

        });

    });

});
