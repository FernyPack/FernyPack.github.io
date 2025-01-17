const countDisplay = document.getElementById("count-display");
const countUpBtn = document.getElementById("count-up-btn");

let count = 0;

countUpBtn.addEventListener("click", () => {
    count++; 
    countDisplay.textContent = `Count: ${count}`; 
});
