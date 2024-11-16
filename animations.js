
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
