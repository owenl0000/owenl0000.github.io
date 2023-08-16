let currentSectionId = null;

document.querySelector("#content-wrap").addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInView(section)) {
            const sectionId = section.getAttribute('id');
            console.log(`In view: ${sectionId}`); // Debugging line
            if (currentSectionId !== sectionId) {
                updateSectionName(sectionId);
                currentSectionId = sectionId;
            }
        }
    });
});

function getMostVisibleSection(sections) {
    let maxVisibleHeight = 0;
    let mostVisibleSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            mostVisibleSection = section;
        }
    });

    return mostVisibleSection;
}

document.querySelector("#content-wrap").addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const mostVisibleSection = getMostVisibleSection(sections);
    const sectionId = mostVisibleSection.getAttribute('id');
    if (currentSectionId !== sectionId) {
        updateSectionName(sectionId);
        currentSectionId = sectionId;
    }
});




function updateSectionName(sectionId) {
    console.log(`Updating to: ${sectionId}`); // Debugging line
    const sectionNames = {
        "welcome": "welcome",
        "projects": "projects",
        "skills": "skills",
        "experience": "experience",
        "contact": "contact"
    };

    const sectionNameElement = document.querySelector('.section-name');
    if (sectionNames[sectionId]) {
        sectionNameElement.textContent = `\u00A0#${sectionNames[sectionId]}`;
    } else {
        sectionNameElement.textContent = `...`;
    }
}
