let currentSectionId = null;

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
    console.log(`Updating to: ${sectionId}`); 
    const sectionNames = {
        "welcome": "welcome",
        "projects": "projects",
        "skills": "skills",
        "experience": "experience",
        "contact": "contact"
    };

    const sectionNameElement = document.querySelector('.section-name');
    if (sectionNames[sectionId]) {
        sectionNameElement.textContent = `#${sectionNames[sectionId]}`;
    } else {
        sectionNameElement.textContent = `...`;
    }
}

let linkClicked = false;

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');
    var links = dropdownContent.querySelectorAll('a');
    var currentSection = document.querySelector('.current-section');

    
    dropdown.addEventListener('click', function() {
        if (linkClicked) {
            linkClicked = false;
            return;
        }

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
            currentSection.classList.remove('underline');
        } else {
            dropdownContent.style.display = 'block';
            currentSection.classList.add('underline');
        }
    });


    links.forEach(function(link) {
        link.addEventListener('click', function() {
            linkClicked = true;
            var sectionName = link.textContent.trim();
            currentSection.textContent = sectionName;
            dropdownContent.style.display = 'none';
            currentSection.classList.remove('underline');
        });
    });
});



const contentWrap = document.querySelector("#content-wrap");

contentWrap.addEventListener('scroll', function() {
    const subHeader = document.querySelector('.sub-header');

    if (contentWrap.scrollTop === 0) {
        subHeader.classList.add('no-shadow');
    } else {
        subHeader.classList.remove('no-shadow');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const subHeader = document.querySelector('.sub-header');

    if (contentWrap.scrollTop === 0) {
        subHeader.classList.add('no-shadow');
    }
});


contentWrap.classList.add('inactive');
let timeout;
let fadingOut = false;
let fadingIn = false;
let alpha = 0.7; 

function fadeOut() {
    if (alpha > 0) {
        alpha -= 0.008; 
        document.documentElement.style.setProperty('--scrollbar-alpha', alpha);
        requestAnimationFrame(fadeOut);
    } else {
        fadingOut = false;
    }
}

function fadeIn() {
    if (alpha < 0.7) {
        alpha += 0.008; 
        document.documentElement.style.setProperty('--scrollbar-alpha', alpha);
        requestAnimationFrame(fadeIn);
    } else {
        fadingIn = false;
    }
}

function setActive() {
    if (fadingOut) return;
    if (fadingIn) return;  

    clearTimeout(timeout);

    if (alpha < 0.7) {
        fadingIn = true;
        fadeIn();
    }

    timeout = setTimeout(function() {
        if (alpha > 0) {
            fadingOut = true;
            fadeOut();
        }
    }, 500);
}

document.addEventListener('mousemove', setActive);
document.addEventListener('mouseover', setActive);


document.addEventListener('DOMContentLoaded', function() {
    const runBtn = document.querySelector('.run-btn');
    const terminalPopup = document.querySelector('.terminal-popup');
    const terminalCloseBtn = document.querySelector('.terminal-close-btn');

    runBtn.addEventListener('click', function() {
        terminalPopup.style.display = 'block';
    });

    terminalCloseBtn.addEventListener('click', function() {
        terminalPopup.style.display = 'none';
    });
});

