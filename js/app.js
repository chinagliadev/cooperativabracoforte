const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("aparecer");
        }
    });
});

elementos.forEach(el => observer.observe(el));