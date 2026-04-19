const components = {
    header: `
        <nav class="container">
            <div class="logo"><a href="index.html" style="text-decoration: none; color: inherit;">PORT<span>FOLIO</span></a></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="index.html#contact">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    `,
    footer: `
        <div class="container">
            <p>&copy; 2026 | Sakkhar Saha | All Rights Reserved</p>
        </div>
    `
};

function loadComponents() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');

    if (headerElement) {
        headerElement.innerHTML = components.header;
    }
    if (footerElement) {
        footerElement.innerHTML = components.footer;
    }

    // Re-initialize menu toggle logic for the newly injected header
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Mobile menu feature will be added soon.');
        });
    }

    // Update active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-link');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);
