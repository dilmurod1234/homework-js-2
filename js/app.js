let elInput = document.getElementById("input");
let elImg1 = document.getElementsByClassName("hide-img");
let elLine = document.getElementById("line");
let elForm = document.querySelector(".form");
let elText = document.querySelector(".validation-text")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const inputVal = (elInput.value);
    if(inputVal.length === 1 || inputVal.length === 2 || inputVal.length === 3 || inputVal.length === 4){
        elLine.style.background = "linear-gradient(to right, red 20%, red 35%, gray 35%, gray 75%"; 
        elText.textContent = "Too weak";
        elText.classList.add("text");
    }else if(inputVal.length === 5 || inputVal.length === 6){
        elLine.style.background = "linear-gradient(to right, #E5A661 35%, #E5A661 75%, gray 75%, gray 35%";
        elText.textContent = "Not bad";
        elText.classList.add("text1");
    }else if(inputVal.length === 7 || inputVal.length === 8,9,10){
        elLine.style.background = "#52AD94";
        elText.textContent = "Strong!";
        elText.classList.add("text2");
    }
});

const typeFunction = () => {
    elInput = document.getElementById("input").getAttribute("type");
    if(elInput === "password"){
        document.getElementById("input").setAttribute("type", "text");
        document.getElementById("img1").classList.add("hide-img-1");
    }else{
        document.getElementById("input").setAttribute("type", "password");
    }
}

const hideFunction = () => {
    elInput = document.getElementById("input").getAttribute("type");
    if(elInput === "text"){
        document.getElementById("input").setAttribute("type", "password");
        document.getElementById("img1").classList.remove("hide-img-1");
    }else{
        document.getElementById("input").setAttribute("type", "text");
    }
}