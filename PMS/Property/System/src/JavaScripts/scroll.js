export const scrollLeft = () => {
    document.querySelector(".project-slider").scrollBy({ left: -320, behavior: "smooth" });
};

export const scrollRight = () => {
    document.querySelector(".project-slider").scrollBy({ left: 320, behavior: "smooth" });
};
