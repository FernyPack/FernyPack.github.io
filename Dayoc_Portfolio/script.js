const counterDisplay = document.getElementById('counterDisplay');

let clickCount = 0;

document.body.addEventListener('click', () => {
    clickCount++;

    counterDisplay.textContent = `Clicks: ${clickCount}`;
});


let cookiesCollected = 0;


const cookieCounter = document.getElementById('cookieCounter');


function createCookie() {
    const cookie = document.createElement('div');
    cookie.classList.add('cookie');
    

    const randomX = Math.random() * (window.innerWidth - 30);
    const randomY = Math.random() * (window.innerHeight - 30);

    cookie.style.left = `${randomX}px`;
    cookie.style.top = `${randomY}px`;

   
    cookie.style.zIndex = '9999'; 

    cookie.addEventListener('click', function () {
        cookiesCollected++;

        cookieCounter.textContent = `Cookies Collected: ${cookiesCollected}`;

        cookie.remove();
 
        setTimeout(createCookie, 5000);
    });

    document.getElementById('cookieContainer').appendChild(cookie);
}

window.onload = function() {
    createCookie();
};
