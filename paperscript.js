$(document).ready(function() {
    $("#header-placeholder").load("header.html", function() {
        // Mobile menu toggling
        $(document).on('click', '#menu-toggle', function() {
            $('.mobile-menu').addClass('open');
        });

        $(document).on('click', '#menu-close', function() {
            $('.mobile-menu').removeClass('open');
        });
    });
    $("#footer-placeholder").load("footer.html");

    // Handle image click to change source
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.addEventListener('click', () => {
            if (aboutImage.src.includes('CUTM.jpg')) {
                aboutImage.src = 'cutm1.jpg';
            } else {
                aboutImage.src = 'CUTM.jpg';
            }
        });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});

function handleResize() {
    const aboutContainer = document.querySelector('.about-container');
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (window.innerWidth <= 650) {
        aboutContainer.style.flexDirection = 'column';
        aboutContainer.style.alignItems = 'center';
        aboutText.style.textAlign = 'center';
        aboutImage.style.marginRight = '0';
        aboutImage.style.marginBottom = '20px';
        aboutImage.style.width = '100%';
        aboutImage.style.height = 'auto';
    } else {
        aboutContainer.style.flexDirection = 'row';
        aboutContainer.style.alignItems = 'flex-start';
        aboutText.style.textAlign = 'left';
        aboutImage.style.marginRight = '20px';
        aboutImage.style.marginBottom = '0';
        aboutImage.style.width = '40%';
        aboutImage.style.height = '300px';
    }
}
