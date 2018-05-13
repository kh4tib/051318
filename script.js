let formDetails = document.querySelector(".details__p");
let formButton = document.querySelector(".form__button");

formButton.addEventListener("click", function(){
    formDetails.classList.toggle("js-collapse");
    
    if(formDetails.classList.contains("js-collapse")){
        formButton.innerHTML = "see more";
    } else {
        formButton.innerHTML = "see less";
    }
});