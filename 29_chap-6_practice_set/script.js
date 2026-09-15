// problem 1,2,3
let age = prompt("Enter you age")
age = Number.parseInt(age)
let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter you age")
    age = Number.parseInt(age)
    if (age<0){
        console.error("please enter a valid age");
        break;
    }


    if (canDrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("you cannot drive")
    }
    runAgain = confirm("Do you want to play again")
}

// problem 4
let number = prompt('Enter your number');
number = Number.parseInt(number)

if (number > 4) {
    location.href = "https://google.com"
}

// problem 5
let color = prompt("Enter the page background color")
document.body.style.background = color;