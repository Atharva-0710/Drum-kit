// alert(7);JUST FOR TESTING IF THE JS FILE IS LINKED OR NOT.
// document.querySelector("button").addEventListener("click", handleClick);

// We dont use handleClick() in above code as it will be immediately get carried out and hence without even clicking the button the alert mssg will be displayed.

//---------------to add event listener to all the buttons use the following code.------------


var numOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

//check for anaonymous function in the udemy notes section

// function handleClick() {

//     alert("I got clicked");

// }

// Detecting  button press

for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);

}

function playAudio() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    // var buttonInnerHtml = this.innerHTML;
    // switch (buttonInnerHtml) {
    //     case "w":
    //         var tom1 = new Audio("sounds/tom-1.mp3");
    //         tom1.play();
    //         break;

    //     case "a":
    //         var tom2 = new Audio("sounds/tom-2.mp3");
    //         tom2.play();
    //         break;

    //     case "s":
    //         var tom3 = new Audio("sounds/tom-3.mp3");
    //         tom3.play();
    //         break;

    //     case "d":
    //         var tom4 = new Audio("sounds/tom-4.mp3");
    //         tom4.play();
    //         break;

    //     case "j":
    //         var snare = new Audio("sounds/snare.mp3");
    //         snare.play();
    //         break;

    //     case "k":
    //         var crash = new Audio("sounds/crash.mp3");
    //         crash.play();
    //         break;

    //     case "l":
    //         var kick = new Audio("sounds/kick-bass.mp3");
    //         kick.play();
    //         break;
    //     default:
    //         console.log(buttonInnerHtml);

    // }

}

// Detecting  keyboard press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHtml);

    }
}

//animation 
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);   //This is bcoz our key's class is .w 

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)


}

