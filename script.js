function h1Substitute (str) {
    let h1Tag =document.getElementById("firstTitle")
    h1Tag.innerText = str;
    return h1Tag;
}

function changeColor (str) {
    let newBackgrond = document.getElementById ("container");
    document.body.style.backgroundColor ="lightGreen"

    return newBackgrond;
}

function address (str) {
    let myAddress = document.getElementById ("indirizzoFondo")
    myAddress.innerText = str;
    return myAddress;
}

//! let changeCssLink = document.getElementsByClassName("amazon");
//! changeCssLink.style.color = "red "
//! console.log(changeCssLink);

let changeImg = document.getElementsByClassName("picture");
    changeImg.style = " opacity 0.5";
    console.log(changeImg);


function randomColor (str) {
    let green = Math.round ( Math.random () * 255 );
    let red = Math.round ( Math.random() * 255 );
    let blue = Math.round ( Math.random() * 255 );

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}


let getRandomColor = document.getElementsByClassName("price");
for (let i = 0; i < getRandomColor.length; i++) {
    getRandomColor[i].style.color = randomColor();

}
console.log(getRandomColor);



 console.log(h1Substitute ('Tutto a 25$'), changeColor(), address("Indirizzo non conosciuto!!"),);

