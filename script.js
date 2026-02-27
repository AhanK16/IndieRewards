const locations = [
    { name: "The Artisan Loaf", price: "££", dist: "0.3 miles", desc: "Award-winning sourdough and community vibes.", img: "https://via.placeholder.com/100" },
    { name: "Bath Brew House", price: "£", dist: "0.8 miles", desc: "Cozy local roastery with freshly baked treats.", img: "https://via.placeholder.com/100" },
    { name: "The Golden Crust", price: "£££", dist: "1.2 miles", desc: "Premium pastries and a curated local selection.", img: "https://via.placeholder.com/100" }
];

function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(`${viewName}-view`).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function toggleSubView(type) {
    document.getElementById('visual-map').classList.toggle('hidden', type === 'list');
    document.getElementById('visual-list').classList.toggle('hidden', type === 'map');
    
    if (type === 'list') {
        const container = document.getElementById('location-list');
        container.innerHTML = locations.map(loc => `
            <div class="location-card">
                <img src="${loc.img}" class="loc-img">
                <div class="loc-info">
                    <h4>${loc.name}</h4>
                    <div class="loc-meta">${loc.price} • ${loc.dist}</div>
                    <p class="loc-desc">${loc.desc}</p>
                </div>
            </div>
        `).join('');
    }
}

// Initial Stamp Logic
let currentStamps = 3;
function renderStamps() {
    const grid = document.getElementById('stampsGrid');
    if(!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const s = document.createElement('div');
        s.className = i <= currentStamps ? 'stamp active' : 'stamp';
        s.innerText = i <= currentStamps ? '🥐' : i;
        grid.appendChild(s);
    }
}
renderStamps();
