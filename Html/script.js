const images = document.querySelectorAll("figure");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

images.forEach(img => {
    img.style.opacity = 0;
    img.style.transform = "translateY(40px)";
    img.style.transition = "all 0.8s ease";
    observer.observe(img);
});



const figures = document.querySelectorAll("figure");

figures.forEach(fig => {


    fig.classList.add("collapsed");

    fig.addEventListener("click", () => {
        fig.classList.toggle("collapsed");
    });

});