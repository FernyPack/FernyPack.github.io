document.getElementById('get-cat').addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-image').src = data[0].url;
        })
        .catch(error => console.error('Error fetching cat image:', error));
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector(".slider");

    toggleSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode-active", this.checked);
    });
});
