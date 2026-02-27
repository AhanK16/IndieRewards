const locations = [
    { name: "The Artisan Loaf", price: "££", dist: "0.3 mi", desc: "Bath's best organic sourdough bakery.", img: "https://via.placeholder.com/80/F9F4EB/C76D4D?text=Loaf" },
    { name: "Bath Brew House", price: "£", dist: "0.8 mi", desc: "Local coffee and freshly baked pastries.", img: "https://via.placeholder.com/80/F9F4EB/C76D4D?text=Brew" },
    { name: "The Golden Crust", price: "£££", dist: "1.2 mi", desc: "Premium pastries in the heart of Bath.", img: "https://via.placeholder.com/80/F9F4EB/C76D4D?text=Crust" }
];

function navigateTo(page) {
    document.getElementById('home-page').classList.toggle('hidden', page !== 'home');
    document.getElementById('explore-page').classList.toggle('hidden', page !== 'explore');
    document.getElementById('nav-home').classList.toggle('active', page === 'home');
    document.getElementById('nav-explore').classList.toggle('active', page === 'explore');
}

function setExploreView(type) {
    document.getElementById('list-container').classList.toggle('hidden', type !== 'list');
    document.getElementById('map-container').classList.toggle('hidden', type !== 'map');
    document.getElementById('list-toggle').classList.toggle('active', type === 'list');
    document.getElementById('map-toggle').classList.toggle('active', type === 'map');

    if (type === 'list') renderList();
}

function renderList() {
    const list = document.getElementById('location-list');
    list.innerHTML = locations.map(loc => `
        <div class="location-card">
            <img src="${loc.img}" class="loc-img">
            <div class="loc-info">
                <h4>${loc.name}</h4>
                <p class="loc-meta">${loc.price} • ${loc.dist}</p>
                <p class="loc-desc">${loc.desc}</p>
            </div>
        </div>
    `).join('');
}

// Initial Stamp Logic for Home Page
let currentStamps = 3;
function renderStamps() {
    const grid = document.getElementById('stampsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const s = document.createElement('div');
        s.className = i <= currentStamps ? 'stamp active' : 'stamp';
        s.innerText = i <= currentStamps ? '🥐' : i;
        grid.appendChild(s);
    }
}

document.getElementById('scanBtn')?.addEventListener('click', () => {
    if (currentStamps < 10) { currentStamps++; renderStamps(); }
    else { alert("Free treat unlocked!"); currentStamps = 0; renderStamps(); }
});

renderList();
renderStamps();
