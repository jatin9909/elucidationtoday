const imgContainer = document.querySelector("#img-container");
console.log(imgContainer);
const imgUrl = [
    {
        src: "https://source.unsplash.com/dTRix5MpDR0",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/OQTjr9yl9xU",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/QerZtB_ufKs",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/e59Y6vqbL7Y",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/C6kSpxmKCWQ",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/RacQL72LxoM",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/RacQL72LxoM",
        alt: "hi",
    },
    {
        src: "https://source.unsplash.com/RacQL72LxoM",
        alt: "hi",
    },
];
imgUrl.forEach((element) => {
    let imgHtml = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <img
        class="img-fluid container-img"
        
        src="${element.src}"
        alt="${element.alt}"
    />
</div>
    `;
    imgContainer.insertAdjacentHTML("beforeend", imgHtml);
});
