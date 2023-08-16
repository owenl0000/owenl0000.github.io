
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInView(section)) {
            const sectionId = section.getAttribute('id');
            updateIcon(sectionId);
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

function updateIcon(sectionId) {
    const icons = document.querySelectorAll('.section-icons i');
    icons.forEach(icon => {
        icon.style.display = 'none'; 
    });
    const iconToShow = document.querySelector(`.section-icons i[data-section="#${sectionId}"]`);
    if (iconToShow) {
        iconToShow.style.display = 'inline-block'; 
    }
}
