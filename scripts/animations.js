
document.addEventListener("DOMContentLoaded", function () {
const projects = document.querySelectorAll(".project");
const titles = document.querySelectorAll("h4");

const observer = new IntersectionObserver(
    (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
        }
    });
    },
    {
    threshold: 0.1,
    }
);

projects.forEach((project) => {
    observer.observe(project);
});

titles.forEach((title) => {
    observer.observe(title);
});
});



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const box = document.querySelector('.box');
    const floatingCard = document.querySelector('.floating-card');
    const backgroundText = document.querySelector('.scrolling-background')

    const containerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                box.classList.add('animate');
                containerObserver.unobserve(backgroundText); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.1 });

    const floatingCardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wait for the box animation to complete before starting the fade-in
                box.addEventListener('animationend', () => {
                    floatingCard.classList.add('animate');
                }, { once: true });
                floatingCardObserver.unobserve(floatingCard); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.1 });

    containerObserver.observe(backgroundText);
    floatingCardObserver.observe(floatingCard);
});