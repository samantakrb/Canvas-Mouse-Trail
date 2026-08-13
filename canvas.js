
const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const MAX_PARTICLES = 150;

// روی موبایل اجرا نشود
if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        // فقط ۱ ذره ساخته شود
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 2,
            life: 100
        });

        // محدود کردن تعداد ذرات
        if (particles.length > MAX_PARTICLES) {
            particles.shift();
        }

    });

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {

            let p = particles[i];

            // شفاف شدن تدریجی
            ctx.beginPath();
            ctx.fillStyle = `rgba(59,130,246,${p.life / 100})`;
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            p.life -= 2;
            p.y -= 0.3;

            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});