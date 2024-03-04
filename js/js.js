

// let cont = document.querySelector(".lines-container");
// let menu = document.querySelector(".menu");
// let pointer = document.querySelector(".pointer");
// let blog = document.querySelector(".blog");
// let contact = document.querySelector(".contact");
// let blogChild = document.querySelector(".blog-child");
// let contactChild = document.querySelector(".contact-child");
// cont.addEventListener("click", () => {
//     blog.classList.remove("content");
//     contact.classList.remove("content");
//      if(menu.style.maxHeight){
//         menu.style.maxHeight = null;
//         blogChild.style.maxHeight = null;
//         contactChild.style.maxHeight = null;
//         pointer.style.display = "none";
//         setTimeout(() => {
//             pointer.classList.remove("pointer-up");
//             pointer.style.display = "block";
//         }, 500);
        
//      }else{
//         menu.style.maxHeight = menu.scrollHeight + "px"; 
//         pointer.style.display = "none";
//         setTimeout(() => {
//             pointer.classList.toggle("pointer-up");
//             pointer.style.display = "block";
//         }, 500);
//      }    
// })
// pointer.addEventListener("click", () => {
//     blog.classList.remove("content");
//     contact.classList.remove("content");
//     if(menu.style.maxHeight){
//         menu.style.maxHeight = null;
//         blogChild.style.maxHeight = null;
//         contactChild.style.maxHeight = null;
//         pointer.style.display = "none";
//         setTimeout(() => {
//             pointer.classList.remove("pointer-up");
//             pointer.style.display = "block";
//         }, 500);
//      }else{
//         menu.style.maxHeight = menu.scrollHeight + "px"; 
//         pointer.style.display = "none";
//         setTimeout(() => {
//             pointer.classList.toggle("pointer-up");
//             pointer.style.display = "block";
//         }, 500);
//      }    
// })
// blog.addEventListener("click", () => {
//     if(blogChild.style.maxHeight){
//         blogChild.style.maxHeight = null;
//         blog.classList.add("btn-anime");
//         blog.classList.remove("content");
//         setTimeout(() => {
//             blog.classList.remove("btn-anime");   
//         }, 100);
//      }else{
//         blogChild.style.maxHeight = blogChild.scrollHeight + "px"; 
//         menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px"; 
//         blog.classList.add("btn-anime");
//         blog.classList.add("content");
//         setTimeout(() => {
//             blog.classList.remove("btn-anime");   
//         }, 100);
//      }    
// })
// contact.addEventListener("click", () => {
//     if(contactChild.style.maxHeight){
//         contactChild.style.maxHeight = null;
//         contact.classList.add("btn-anime");
//         contact.classList.remove("content");
//         setTimeout(() => {
//             contact.classList.remove("btn-anime");   
//         }, 100);
//      }else{
//         contactChild.style.maxHeight = contactChild.scrollHeight + "px"; 
//         menu.style.maxHeight = menu.scrollHeight + contactChild.scrollHeight + "px"; 
//         contact.classList.add("btn-anime");
//         contact.classList.add("content");
//         setTimeout(() => {
//             contact.classList.remove("btn-anime");   
//         }, 100);
//      }    
// })

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});


// window.addEventListener('resize', function() {
//     var menu = document.querySelector('.menu');
//     var button = document.querySelector('.button');

//     if (window.innerWidth <= 990) {
//         menu.style.display = 'none';
//         button.style.display = 'block';
//     } else {
//         menu.style.display = 'block';
//         button.style.display = 'none';
//     }
// });

// // Call the event listener function once to initialize
// window.dispatchEvent(new Event('resize'));

//get slider item array 
var sliderimage = Array.from(document.querySelectorAll('.slider-container .landing'))

// get number od slides
var sildercounter = sliderimage.length;

// set current
var curentslide = 1;

//slide n e s
var slidenumber = document.getElementById('slide-number');




//creat main ul li 

var indicatorselement = document.createElement('ul');
indicatorselement.setAttribute('id','indicator-ul');

for (let index = 1; index <= sildercounter ; index++) {
    var indicatorsitem = document.createElement('li');

    indicatorsitem.setAttribute('data-index', index );

    indicatorsitem.appendChild(document.createTextNode(index));

    indicatorselement.appendChild(indicatorsitem);
}
document.getElementById('indicators').appendChild(indicatorselement);

// creat the new ul 
var  indicatorseul = document.getElementById('indicator-ul');


//get   indicators slider item ul  
var  indicatorspoltes = Array.from(document.querySelectorAll('#indicator-ul li'))

for (let index = 0; index < indicatorspoltes.length ; index++) {
    
    indicatorspoltes[index].onclick = function () {
        curentslide = parseInt(this.getAttribute('data-index'));
        check();
    }
}

check();

function nextslide(){

if(next.classList.contains('diabled')){
    return false

}else{
    curentslide++;

    check();
}
}
function prevslide(){
    if(prev.classList.contains('diabled')){
        return false
    
    }else{
        curentslide--;
    
        check();
    }
    
}
function check() {

    // slidenumber.textContent = 'Slide #' + (curentslide) + ' OF ' + (sildercounter) ;

    removeallactice();

    //SET ACTIVE CLASS of image 
    sliderimage[curentslide - 1].classList.add('active')

     //SET ACTIVE CLASS of number 
     indicatorseul.children[curentslide - 1].classList.add('active');

// check currentslide 

}

//remove all actice
function removeallactice(){
    sliderimage.forEach(function (img) {
        img.classList.remove('active');
    })
    indicatorspoltes.forEach(function (polt) {
        polt.classList.remove('active');
    })
}


///////////////////////
element = sliderimage ;
function toggleElement() {
    // var element = document.getElementById('element');

    if (element.style.display === 'none') {
        element.style.display = 'block';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.height = element.scrollHeight + 'px'; // Set the height to auto
    } else {
        element.style.opacity = '0';
        element.style.height = '0';
        element.style.visibility = 'hidden';
        setTimeout(function() {
            element.style.display = 'none';
        }, 500); // Adjust the delay to match the transition duration
    }
}

window.addEventListener('scroll', function() {
    var targetSection = document.getElementById('targetSection');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    var desiredScrollHeight = 580;

    if (scrollPosition >= desiredScrollHeight) {
        setTimeout(function() {
            targetSection.style.opacity = '1';
            

        }, 700); 
    }
});

//////////////////////////////
// //get slider item array 
var pointimage = Array.from(document.querySelectorAll('.point-container .mnb'))

// get number od slides
var pointcounter = pointimage.length;

// set current
var curentpoint = 1;

// //slide n e s
// var pointnumber = document.getElementById('point-number');

var prevbotton = document.getElementById('prevbotton');
var nextbotton = document.getElementById('nextbotton');

nextbotton.onclick = nextslidebutton;
prevbotton.onclick = prevslidebutton;


// //creat main ul li 

var indicatorspointelement = document.createElement('ul');
indicatorspointelement.setAttribute('id','point-ul');

for (let index = 1; index <= pointcounter ; index++) {
    var indicatorspointitem = document.createElement('li');

    indicatorspointitem.setAttribute('data-index', index );

    // indicatorspointitem.appendChild(document.createTextNode(index));

    indicatorspointelement.appendChild(indicatorspointitem);
}
document.getElementById('indicatorsbotton').appendChild(indicatorspointelement);

// creat the new ul 
var  indicatorulpoint = document.getElementById('point-ul');


//get   indicators slider item ul  
var  indicatorspoltespoint = Array.from(document.querySelectorAll('#point-ul li'));

for (let index = 0; index < indicatorspoltespoint.length ; index++) {
    
    indicatorspoltespoint[index].onclick = function () {
        curentpoint = parseInt(this.getAttribute('data-index'));
        checkbutton();
    }
}

checkbutton();

function nextslidebutton(){
if(nextbotton.classList.contains('diabled')){
    return false;
}else{
    curentpoint++;
    checkbutton();
}
}
function prevslidebutton(){
    if(prevbotton.classList.contains('diabled')){
        return false;
    
    }else{
        curentpoint--;
        checkbutton();
    }
    
}
function checkbutton() {

    // slidenumber.textContent = 'Slide #' + (curentslide) + ' OF ' + (sildercounter) ;

    removeallacticepoint();

    //SET ACTIVE CLASS of image 
    pointimage[curentpoint - 1].classList.add('active')

     //SET ACTIVE CLASS of number 
     indicatorulpoint.children[curentpoint - 1].classList.add('active');

// check currentslide 
if(curentpoint === 1){
    prevbotton.classList.add('diabled');
}else{
    prevbotton.classList.remove('diabled');
}

if(curentpoint === pointcounter){
    nextbotton.classList.add('diabled');
}else{
    nextbotton.classList.remove('diabled');
}
}

//remove all actice
function removeallacticepoint(){
    pointimage.forEach(function (img) {
        img.classList.remove('active');
    })
    indicatorspoltespoint.forEach(function (polt) {
        polt.classList.remove('active');
    })
}

setInterval(checkbutton, 1000);
