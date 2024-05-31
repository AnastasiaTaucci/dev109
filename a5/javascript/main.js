let myImages =["./images/artifact_1.png", "./images/artifact_2.png", "./images/artifact_3.png", "./images/artifact_4.png", "./images/artifact_5.png",];


let captionImages =["Resume","Chessboard","Rhombus","Form Validation","Slideshow"];
let descriptionImages = ["a webpage that uses standard HTML tags only",
    "an exercise that uses only divs with no tables",
    "a HTML page using Javascript function to create a rhombus",
    "a script made with JavaScript that validates all form inputs before submition",
    "a script made using JavaScript that allows two or more images to show up as a slideshow."
]
 let index=0; 

 function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
    document.getElementById("description").textContent = descriptionImages[index]; 
} 

function next(){
    if (myImages.length == index+1) {
        index=0;
    } else {
        index++;    
    }
    updateImage();
} 
 

function back(){
    if (index===0) {
        index=myImages.length-1;
    } else {
        index--;
    }
    updateImage();
} 

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next"); 
 
previousButton.addEventListener("click", back, false);
previousButton.addEventListener("click", reset, false);
nextButton.addEventListener("click", next, false);
nextButton.addEventListener("click", reset, false);


function autoSlide(){
    if (document.getElementById("auto").checked) {
        next(); 
    }
}

let myInterval = setInterval(autoSlide, 2000); // Next

function reset() {
    clearInterval(myInterval);
    myInterval = setInterval(autoSlide, 2000);
}