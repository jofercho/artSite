window.onload = function() {
    fetch('assets/logo.svg')
        .then(response => response.text())
        .then(data => {
            document.getElementById('svgContainer').innerHTML = data;
        });

    fetch('components/gallery/gallery.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('gallery').innerHTML = data;
            var elements = document.querySelectorAll('.frame');
            console.log("frames ",elements);
            gallery(elements);
            const colorThief = new ColorThief();
            logo();
            setBackGrounds(colorThief, elements);
            

        });

    // var elements = document.querySelectorAll('.frame');
    // const colorThief = new ColorThief();
    // logo();
    // setBackGrounds(colorThief, elements);
    // gallery(elements);


    let test = document.getElementsByClassName("menuItem");
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener("mouseenter", event => onMouseEnter(event.target), false);
        // test[i].addEventListener("mouseover", event => onMouseHover(event.target), false);
        test[i].addEventListener("mouseleave", event => onMouseOut(event.target), false);
    }

}

var onMouseEnter = function(el) {
    animateMenuItem(el, 1.3, 700, 400, 0, '7px', '5px');
}

var onMouseHover = function(el) {
    console.log("on mouse hover");
}


var onMouseOut = function(el) {
    animateMenuItem(el, 1.0, 600, 300, 0, 0, '20px');
}

const colors = new Array();

function logo() {
    anime({
        targets: '#svgLogo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: function(el, i) { return i * 450 },
        direction: 'alternate',
        fill: '#f1f8f8',
        loop: true
    });
}

function gallery(elements) {
    let top = 0;
    let next = top + 1;
    let currentFrame = elements[0];
    anime({
        targets: currentFrame,
        opacity: 0,
        delay: 3000,
        loop: true,
        easing: 'easeInCubic',
        loopComplete: function(anim) {
            currentFrame.classList.remove('top');
            if (elements.length - 1 < ++top) {
                top = 0;
            }
            currentFrame = elements[top];
            currentFrame.classList.add('top');
            if (elements.length - 1 < ++next) {
                next = 0;
            }
            elements[next].style.opacity = 1;
            anim.animatables[0].target = elements[top];

            anime({
                targets: '.logo',
                targets: '.logo, .menuItems, .fab',
                // targets: '.logo, .menuItem a',
                delay: 3000,
                background: colors[next],
                opacity: [0.8, 0.9, 0.8],
                easing: 'easeInOutQuad',
            });
        },
    });
}

function setBackGrounds(colorThief, elements) {
    let backgrounds = new Array(elements.length);
    for (let i = 0; i < elements.length; i++) {
        let img = elements[i].children[0];

        // Ensure the image is fully loaded before processing
        img.onload = function () {
            if (img.width > 0 && img.height > 0) { // Check if the image has valid dimensions
                try {
                    let color = colorThief.getColor(img);
                    let radialGradient = 'radial-gradient(rgb(' +
                        color[0] + ', ' +
                        color[1] + ', ' +
                        color[2] + ') 20%, rgb(239, 233, 245) 100%)';

                    let frame = 'frame' + i;
                    document.getElementById(frame).style.background = radialGradient;
                    colors.push('rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')');
                } catch (error) {
                    console.error(`Error processing image in frame${i}:`, error);
                }
            } else {
                console.warn(`Image in frame${i} has invalid dimensions (width: ${img.width}, height: ${img.height}).`);
            }
        };

        // If the image is already loaded (cached), trigger the `onload` manually
        if (img.complete) {
            img.onload();
        }
    }
}

// function getAvgColor() {
//     let paintgContianer = document.querySelectorAll('.paintings');
//     fac.getColorAsync(paintgContianer.querySelector('img'))
//         .then(color => {
//             container.style.backgroundColor = color.rgba;
//             container.style.color = color.isDark ? '#fff' : '#000';
//         })
//         .catch(e => {
//             console.log(e);
//         });
// }

function animateMenuItem(el, scale, duration, elasticity, translateY, translateX, borderRadius) {
    anime.remove(el);
    anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
        translateX: translateX,
        translateY: translateY
    });
}