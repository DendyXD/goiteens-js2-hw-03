const imgs = document.querySelectorAll("[data-src]");
const imageLoadingInput = document.querySelector('[name="image-loading-input"]')


imgs.forEach((img) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && imageLoadingInput.checked) {
                img.src = img.getAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });
        observer.observe(img)
})