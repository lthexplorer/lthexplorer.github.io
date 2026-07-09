// ===================================
// 导航栏高亮（当前可见区块）
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.style.borderColor =
                    link.getAttribute('href') === `#${id}` ? '' : 'transparent';
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// --- 彩蛋 ---
console.log(
    '%c🌿 Gentiana · 从今天开始 %c不再只是想想',
    'font-size: 1.1em; font-weight: bold;',
    'color: #5b6e8a;'
);
