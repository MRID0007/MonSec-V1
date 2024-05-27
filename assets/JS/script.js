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
    /*             COPY TO CLIPBOARD                */
    /* ============================================ */
    window.copyToClipboard = function(button) {
        const codeBlock = button.nextElementSibling.textContent;
        navigator.clipboard.writeText(codeBlock).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
});
