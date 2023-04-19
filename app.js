// create button that when clicked, GETs a pic and a random fact
    //create button element in HTML DONE
    //reference button element in JS
    //add event listener to button
        //within event listener
            //create GET request for fact
                //append to the DIV
            //createGET request for pic
                //append to the DIV
//upload this junk to host on SURGE

const picEl = document.querySelector('.pic')
const factEl = document.querySelector('.fact')
const button = document.querySelector('.button');
//button and listener
button.addEventListener('click', function () {
    //pic GET request
    $.get(`https://dog.ceo/api/breeds/image/random`, (data) => {
        picEl.innerHTML = '';
        let url = data.message;
        let image = new Image();
        image.src = url;
        picEl.appendChild(image);
    })//end of pic GET request
    //fact GET request
    $.get(`https://dog-api.kinduff.com/api/facts?raw=true`, (data) => {
        factEl.innerHTML = '';
        factEl.innerText = data
    })//end of fact GET request
});//end of listener
