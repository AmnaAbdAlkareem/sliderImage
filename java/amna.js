//Get Slider Images
var selectImages = Array.from(document.querySelectorAll('.slider-images img'));


//Get Number Of Slider
var sliderCount = selectImages.length;

//set current slide
var currentSlide = 1;

//slide number element

var slideNumberElement = document.getElementById('images-num');

//next and previous button

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

//creat the main element ul
var paginationElement = document.createElement('ul');

//set id on created ul
paginationElement.setAttribute('id','paginationUl')

//creat lst items based on slider count

for (var i=1 ; i<=sliderCount ; i++) {
    //creat li 
    var paginationItem=document.createElement('li')

    //set custom attribute
    paginationItem.setAttribute("data-index" , i)

    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    //append items to the main ul list
    paginationElement.appendChild(paginationItem)

}
//set ul in the page
document.getElementById('indicators').appendChild(paginationElement);
//get the created ul
var paginationCreadedNew = document.getElementById('paginationUl');
//Get pagination items Array.from
var paginationBullets = Array.from(document.querySelectorAll('#paginationUl li'));
//loop throgh bagination item
for (var i = 0 ; i < paginationBullets.length ; i++) {
    paginationBullets[i].onclick = (function () {
     currentSlide = parseInt(this.getAttribute('data-index'));
     cheaker();
    });
}


//cheaker function


//next slide function 
function nextSlide () {
if (nextButton.classList.contains('desable')){
    return false;
}
else {
    currentSlide++;
    cheaker();
}
}
//prev slide function 
function prevSlide () {
    if (prevButton.classList.contains('desable')){
        return false;
    }
    else {
        currentSlide--;
        cheaker();
    }
}


//cheacer function

function cheaker () {
//set the slide number
    slideNumberElement.textContent = "Slide#" + (currentSlide) + " of " + (sliderCount);

//call remove class active
removeAllActive()
    //set active class on current slide
    selectImages[currentSlide -1].classList.add("active");
    //set active class on pagination item
     paginationCreadedNew.children[currentSlide -1].classList.add("active");

    //cheack if current slide is the first
    if (currentSlide == 1) {
    //add disable class to prev button
        prevButton.classList.add('desable')
    }
    else {
            //remove disable class to prev button
            prevButton.classList.remove('desable')
    }
    //cheack if current slide is the last
    if (currentSlide == sliderCount) {
        //add disable class to next button
            nextButton.classList.add('desable')
        }
        else {
                //remove disable class to next button
                nextButton.classList.remove('desable')
        }
}

//remove all active classas from img and pagination

function removeAllActive () {
    //loop throw img
  selectImages.forEach(function (img){
      img.classList.remove('active');
  });

  //loop throw pagination bullets

  paginationBullets.forEach(function (bullet){
     bullet.classList.remove('active');
  });
}
