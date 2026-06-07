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
            <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
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

    // Update active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html#contact' && window.location.hash === '#contact')) {
            link.classList.add('active-link');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);
