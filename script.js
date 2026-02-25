const stampsGrid = document.getElementById('stampsGrid');
const scanBtn = document.getElementById('scanBtn');
let currentStamps = 3; // Starting number for demo

function renderStamps() {
    stampsGrid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const stamp = document.createElement('div');
        stamp.className = i <= currentStamps ? 'stamp active' : 'stamp';
        stamp.innerText = i <= currentStamps ? '☕' : i;
        stampsGrid.appendChild(stamp);
    }
}

scanBtn.addEventListener('click', () => {
    if (currentStamps < 10) {
        currentStamps++;
        renderStamps();
    } else {
        alert("Reward Unlocked! Visit a random local bakery for your free treat.");
        currentStamps = 0;
        renderStamps();
    }
});

renderStamps();
