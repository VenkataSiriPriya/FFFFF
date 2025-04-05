export const scrollLeft = () => {
    document.querySelector(".projects").scrollBy({ left: -320, behavior: "smooth" });
};

export const scrollRight = () => {
    document.querySelector(".projects").scrollBy({ left: 320, behavior: "smooth" });
};
