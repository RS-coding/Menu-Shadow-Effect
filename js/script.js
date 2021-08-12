const hero = document.querySelector('.hero')
const container = document.querySelector('.container')
const text = hero.querySelector('h1')

//how far should the text shadow go
const walk = 100; //px

//function that moves the shadow by moving the mouse in the hero div
const shadow = function(e){
     //the measure differs if we resize the window of the browser -responsive element
    //offsetWidth gives the measurement in pixels of the element's CSS width
    //offsetHeight gives the measurement in pixels of the element's CSS height

    //measures of the hero div
    const width = this.offsetWidth;
    const height = this.offsetHeight;

    //the exact measure pixel in the hero where the mouse is moving (e -mousemove) in x and y
    let x = e.offsetX
    let y = e.offsetY
    //console.log(x,y)
        
    //we want  to update the values of x and y exaclty near by the text h1 top left, to start there.
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //Math.round() method returns  the value of a number rounder to the neareast integer

    const xWalk = Math.round(( x / width * walk) - (walk / 2))
    const yWalk = Math.round(( y /height * walk) - (walk / 2))

    //having  already the values of walk of x and y its time to add a style in our h1
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px  var(--shadow-color)`;
   
}



hero.addEventListener('mousemove', shadow)
