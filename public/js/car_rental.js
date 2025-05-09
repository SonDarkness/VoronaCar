const carsData = [
    { title: "Кабриолет", class: "cabriolet", price: 300, year: 2020, power: 180, image: "/public/img/mclaren_p1_gtr_mclaren_p1_mclaren_128793_3840x2160.jpg" },
    { title: "Мотоцикл", class: "motorcycle", price: 150, year: 2019, power: 120, image: "https://via.placeholder.com/300x200" },
    { title: "Внедорожник", class: "suv", price: 400, year: 2021, power: 220, image: "https://via.placeholder.com/300x200" },
    { title: "Премиум класс", class: "premium", price: 600, year: 2022, power: 300, image: "https://via.placeholder.com/300x200" }
];

function renderCars(cars) {
    const container = document.getElementById("carContainer");
    container.innerHTML = "";

    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-class", car.class);
        card.setAttribute("data-price", car.price);
        card.setAttribute("data-year", car.year);
        card.setAttribute("data-power", car.power);

        card.innerHTML = `
            <img src="${car.image}" alt="${car.title}">
            <div class="card-content">
                <h2 class="card-title">${car.title}</h2>
                <p class="card-info">Год выпуска: ${car.year}</p>
                <p class="card-info">Мощность: ${car.power} л.с.</p>
                <p class="card-price">Цена: ${car.price}$ за день</p>
                <button class="btn" onclick="openModal(this)">Забронировать</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function openModal(button) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleCardInput() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const cardInput = document.getElementById("cardInput");
    if (paymentMethod === "card") {
        cardInput.classList.remove("hidden");
    } else {
        cardInput.classList.add("hidden");
    }
}

function filterCars(carClass) {
    const buttons = document.querySelectorAll('.class-btn');
    buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('onclick').includes(carClass)));

    const filteredCars = carsData.filter(car => carClass === "all" || car.class === carClass);
    renderCars(filteredCars);
}

function sortCars() {
    const selectedSort = document.getElementById("priceSort").value;
    let sortedCars = [...carsData];

    if (selectedSort === "price") {
        sortedCars.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "year") {
        sortedCars.sort((a, b) => a.year - b.year);
    } else if (selectedSort === "power") {
        sortedCars.sort((a, b) => a.power - b.power);
    }

    renderCars(sortedCars);
}

// Initial render
renderCars(carsData);





const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
