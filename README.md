✨ Canvas Mouse Trail
A lightweight and interactive Mouse Trail effect built with pure HTML, CSS & JavaScript using the HTML5 Canvas API.
The effect creates a smooth particle trail that follows the user's cursor while keeping performance in mind.
________________________________________
✨ Features
•	🎯 Smooth mouse-following particle effect
•	⚡ Lightweight and dependency-free
•	🧩 Built with Vanilla JavaScript
•	🎨 Rendered using HTML5 Canvas
•	📱 Automatically disabled on mobile devices
•	🚀 Limited particle count for better performance
•	♻️ Particles gradually fade and disappear
•	🖥️ Automatically adapts to window resizing
•	🔌 Easy to integrate into WordPress & Elementor
________________________________________
🛠️ Tech Stack
•	HTML5
•	CSS3
•	JavaScript (Vanilla JS)
•	Canvas API
No external libraries or frameworks are required.
________________________________________
📂 Project Structure
canvas-mouse-trail/
│
├── index.html
├── style.css
├── script.js
└── README.md
________________________________________
⚙️ How It Works
The effect uses the browser's Canvas API to draw particles behind the cursor.
Every time the mouse moves, a new particle is created:
particles.push({
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 5 + 2,
    life: 100
});
Each particle has:
•	x → horizontal position
•	y → vertical position
•	size → particle size
•	life → opacity/lifetime
During every animation frame, the particle gradually loses its life and moves upward:
p.life -= 2;
p.y -= 0.3;
Once its life reaches zero, the particle is removed from the array.
________________________________________
⚡ Performance Optimization
Performance was considered while building the effect.
Particle Limit
The number of particles is limited to prevent unnecessary memory usage:
const MAX_PARTICLES = 150;
Mobile Optimization
The animation is disabled on screens smaller than 768px:
if (window.innerWidth > 768) {
    // Mouse trail
}
This prevents unnecessary animation work on mobile devices.
Single Particle Per Mouse Event
Only one particle is created for each mouse movement instead of generating multiple particles.
This keeps the effect lightweight while maintaining a smooth visual result.
________________________________________
🎨 Customization
You can easily customize the effect.
Particle Color
Change:
ctx.fillStyle = `rgba(59,130,246,${p.life / 100})`;
For example:
ctx.fillStyle = `rgba(139,92,246,${p.life / 100})`;
Particle Size
Change:
size: Math.random() * 5 + 2
Particle Lifetime
Change:
life: 100
Maximum Particles
Change:
const MAX_PARTICLES = 150;
________________________________________
🌐 WordPress / Elementor
You can also use this effect inside a WordPress + Elementor website.
1. Add the Canvas
Add an HTML widget and insert:
<canvas id="trail-canvas"></canvas>
2. Add the CSS
Add the CSS to your custom CSS section:
#trail-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}
3. Add the JavaScript
Add the JavaScript through an HTML widget, custom code, or your preferred script-loading method.
________________________________________
📱 Responsive Behavior
Device	Effect
🖥️ Desktop	✅ Enabled
💻 Laptop	✅ Enabled
📱 Tablet	❌ Disabled
📱 Mobile	❌ Disabled
The breakpoint can be customized depending on your project.
________________________________________
💡 Use Cases
This effect works especially well for:
•	Portfolio websites
•	Creative agency websites
•	Developer portfolios
•	Landing pages
•	Interactive websites
•	Modern SaaS websites
•	Experimental UI projects
For production websites, use it selectively so the interaction supports the design rather than distracting from the content.
________________________________________
📸 Preview

![Canvas Mouse Trail Preview](./preview.gif)
________________________________________
📄 License
This project is open source and available for personal and commercial use.
Feel free to modify and customize it for your own projects.
________________________________________
👩🏻‍💻 Author
Samanta Dev
Web Designer & Front-End Developer
Building modern, interactive and performance-focused websites.
•	🌐 Website: https://samantadev.ir/
•	📸 Instagram: https://instagram.com/samantadev.ir
________________________________________
⭐ If you found this project useful, consider giving the repository a star!

