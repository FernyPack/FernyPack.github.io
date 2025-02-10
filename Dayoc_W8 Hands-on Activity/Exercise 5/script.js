function generateQuote() {
    const quotes = [
        "The best way to predict the future is to create it.",
        "Do what you can, with what you have, where you are.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
    ];
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById("facebook-share").addEventListener("click", shareOnFacebook);
document.getElementById("twitter-share").addEventListener("click", shareOnTwitter);

function copyToClipboard() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => console.error("Failed to copy: ", err));
}

function shareOnTwitter() {
    const quote = document.getElementById("quote").innerText;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}

function shareOnFacebook() {
    const quote = document.getElementById("quote").innerText;
    const pageURL = encodeURIComponent("https://your-website.com"); // Replace with your website URL
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${pageURL}&quote=${encodeURIComponent(quote)}`;
    window.open(facebookURL, '_blank');
}
