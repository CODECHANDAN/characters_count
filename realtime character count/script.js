const textareaEl = document.getElementById("textarea");
const counterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})


function updateCounter(){
        counterEl.innerText = textareaEl.value.length;
        remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}