/*
    ============================================================================
    SYSTEM: THE GRID 2.0 (LIGHT CYCLES & TABS)
    ============================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    initGridCycles();
    initTabSystem();
    initTypingEffect();
    initEmailDecrypt();
});

function scrollToSystem() {
    document.getElementById('main-system').scrollIntoView({ behavior: 'smooth' });
}

// --- Tab System (Folder Interface) ---
function initTabSystem() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.system-tab');
    const visualTabs = document.querySelectorAll('.tab-header');

    // Function to switch tab
    function switchTab(targetId) {
        // Remove active state from all
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active-tab'));
        visualTabs.forEach(vt => vt.classList.remove('active'));

        // Add active state to target
        const activeNav = document.querySelector(`.nav-tab[data-tab="${targetId}"]`);
        if (activeNav) activeNav.classList.add('active');

        const activeSection = document.getElementById(targetId);
        if (activeSection) activeSection.classList.add('active-tab');

        // Sync Visual Tabs (approximate mapping)
        // Sync Visual Tabs (approximate mapping)
        if (targetId === 'tab-about') visualTabs[0].classList.add('active');
        if (targetId === 'tab-projects') visualTabs[1].classList.add('active');
        if (targetId === 'tab-garage') visualTabs[2].classList.add('active');
        if (targetId === 'tab-newsletter') visualTabs[3].classList.add('active');
    }

    // Event Listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('data-tab');
            switchTab(targetId);
            scrollToSystem();
        });
    });
}

// --- Email Decryption ---
function initEmailDecrypt() {
    const revealBtn = document.getElementById('reveal-btn');
    const contactEmail = document.getElementById('contact-email');

    if (revealBtn && contactEmail) {
        revealBtn.addEventListener('click', () => {
            revealBtn.innerText = "DECRYPTING...";
            let originalText = contactEmail.innerText;
            contactEmail.classList.remove('hidden');

            // Hacker glitch effect
            let iterations = 0;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            const interval = setInterval(() => {
                contactEmail.innerText = contactEmail.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 36)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    revealBtn.style.display = 'none';
                }

                iterations += 1 / 2;
            }, 30);
        });
    }
}

// --- Grid & Light Cycles ---
function initGridCycles() {
    const canvas = document.getElementById('grid-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Grid Lines
    const horizonY = height * 0.4;
    let offset = 0;

    // Light Cycles
    class Cycle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = horizonY + Math.random() * (height - horizonY);
            this.z = (this.y - horizonY) / (height - horizonY); // Depth factor 0-1
            this.size = 2 + this.z * 3;
            this.speed = 2 + this.z * 10;

            this.color = Math.random() > 0.5 ? '#00f3ff' : '#ff9d00'; // Cyan or Orange
            this.trail = [];
            this.maxLength = 20 + this.z * 50;
        }

        update() {
            // Move horizontally
            this.x += this.speed;

            // Add trail point
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxLength) this.trail.shift();

            // Reset if off screen
            if (this.x > width + 100) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.lineWidth = this.size;
            ctx.lineCap = 'round';
            ctx.strokeStyle = this.color;

            // Draw trail
            for (let i = 0; i < this.trail.length - 1; i++) {
                ctx.moveTo(this.trail[i].x, this.trail[i].y);
                ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
            }
            ctx.stroke();

            // Glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }
    }

    const cycles = Array.from({ length: 8 }, () => new Cycle());

    function animate() {
        // Clear with fade for trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, 0, width, height);
        ctx.shadowBlur = 0; // Reset glow for grid

        // --- Draw Perspective Grid ---
        ctx.strokeStyle = 'rgba(0, 70, 100, 0.3)';
        ctx.lineWidth = 1;

        const centerX = width / 2;

        // Vertical
        for (let x = -width; x < width * 2; x += 100) {
            ctx.beginPath();
            ctx.moveTo(x, height);
            ctx.lineTo(centerX, horizonY);
            ctx.stroke();
        }

        // Horizontal Moving
        offset = (offset + 1) % 50;
        for (let y = horizonY; y < height; y += 2 + (y - horizonY) * 0.1) {
            let drawY = y + offset * ((y - horizonY) / 200);
            if (drawY > height) continue;

            ctx.beginPath();
            ctx.moveTo(0, drawY);
            ctx.lineTo(width, drawY);
            ctx.stroke();
        }

        // --- Draw Light Cycles ---
        cycles.forEach(cycle => {
            cycle.update();
            cycle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// --- Typing Effect ---
function initTypingEffect() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;
    const fullText = textElement.innerText;
    textElement.innerText = '';
    let i = 0;
    function type() { if (i < fullText.length) { textElement.innerText += fullText.charAt(i); i++; setTimeout(type, 30); } }
    setTimeout(type, 500);
}
