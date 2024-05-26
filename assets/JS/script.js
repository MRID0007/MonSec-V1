document.addEventListener('DOMContentLoaded', () => {
    /* ============================================ */
    /*               MENU TOGGLE                    */
    /* ============================================ */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    /* ============================================ */
    /*           SCROLL TO TOP BUTTON               */
    /* ============================================ */
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    /* ============================================ */
    /*           TABLE OF CONTENTS TOGGLE           */
    /* ============================================ */
    const tocHeader = document.querySelector('.toc-header');
    const toc = document.querySelector('.toc');

    tocHeader.addEventListener('click', () => {
        toc.classList.toggle('show');
    });
});
