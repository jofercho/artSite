window.onload = function() {

    var elements = document.querySelectorAll('#bio');
    //var path = anime.path('#test path');

    // anime({
    //   targets: elements,
    //   translateX: 100,
    //   translateY: 100,
    //   //rotate: path('angle'),
    //   backgroundColor: '#FFF',
    //   easing: 'linear',
    //   duration: 2000,
    //   loop: true
    // });

    anime({
        targets: '#test path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        fill: `#cccece`,
        loop: false
    });
}