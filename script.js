// GALLERY SECTION.
const galleryImages = [
    { src: "images/1.jpg", title: "Maldives – Tranquil Overwater Villas" },
    { src: "images/2.jpg", title: "Bali – Golden Sunset by the Beach" },
    { src: "images/3.jpg", title: "Paris – Eiffel Tower Under the Evening Glow" },
    { src: "images/4.jpg", title: "Tokyo – Buzzing Neon Streets" },
    { src: "images/5.jpg", title: "Dubai – Thrilling Desert Safari" },
    { src: "images/6.jpg", title: "Amsterdam – Bikes Along Serene Canals" }
];
const galleryContainer = document.getElementById("gallery-container");
galleryImages.forEach(function(image) {
    let cardHTML = `
        <div class="gallery-card">
            <img src="${image.src}" alt="${image.title}" />
            <h3>${image.title}</h3>
        </div>
    `;
    galleryContainer.innerHTML += cardHTML;
});

//TRAVEL TIPS INTERACTION
const viewMoreBtn = document.getElementById("view-more-btn");
const hiddenCards = document.querySelectorAll(".hidden");
viewMoreBtn.addEventListener("click", function() {
    hiddenCards.forEach(function(card) {
        card.classList.remove("hidden");
    });
    viewMoreBtn.style.display = "none";

});

//BUTTON FOR NAV MENU
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
