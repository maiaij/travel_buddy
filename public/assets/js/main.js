

const options = {
    type: 'carousel',
    perView: 2,
    breakpoints: {
        650: {
            perView: 1
        }
    }  
};

new Glide('#tokyog', options).mount();
new Glide('#portugalg', options).mount();
new Glide('#brazilg', options).mount();

const config = {
    animations: [    
      {
        range: [-1, window.innerWidth / 2],
        selector: '#buddy',
        type: 'change',
        style: 'color',
        to: '#ffe100',
      }
    ]
};

// var choreographer = new Choreographer(config);

// window.addEventListener('mousemove', function(e) {
//     choreographer.runAnimationsAt(e.clientX)
// });

var granimInstance = new Granim({
    element: '#bottom-gradient',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image : {
        source: '../assets/images/footer.jpg',
        blendingMode: 'screen'
    },
    states : {
        "default-state": {
            gradients: [
                ['#00a2ff', '#7b00ff'],
                ['#ff00ea', '#ff005d'],
                ['#00a2ff', '#7b00ff'],
                ['#ff00ea', '#ff005d']
            ],
            transitionSpeed: 7000
        }
    }
 });

 