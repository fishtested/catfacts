// AI Disclosure: I used ChatGPT to help me write code to get image credits

let cat;

// Gets fact
document.addEventListener("DOMContentLoaded", function() {
    function getFact() {
    // Fetch the fact from the API
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            const fact = data.fact; // Store fact
            const length = fact.length; // Store length

            if (length > 82) { // If fact is longer than 82 characters
                getFact(); // Restart, get a new fact
            } else {
                document.getElementById("fact").textContent = fact;
                console.log(fact, length);
            }
        })
        
        .catch(error => {
            console.error("Error:", error);
        });
    }

    getFact(); // Gets a fact
    getImage().then(getCredit); // Gets image, then gets credit
});

// Gets background image
async function getImage() {
    cat = Math.floor(Math.random() * 6);
    document.body.style.backgroundImage = `url('images/${cat}.jpg')`;
}

// Gets image credit
let creditText;
async function getCredit() {
    if (cat === 0) {
        creditText = `<a href="https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/">Photo by Pixabay</a>`;
    } else if (cat === 1) {
        creditText = `<a href="https://www.pexels.com/photo/close-up-photo-of-cute-sleeping-cat-416160/">Photo by Pixabay</a>`;
    } else if (cat === 2) {
        creditText = `<a href="https://www.pexels.com/photo/close-up-photo-of-yellow-and-white-cat-57416/">Photo by Pixabay</a>`;
    } else if (cat === 3) {
        creditText = `<a href="https://www.pexels.com/photo/gray-cat-33537/">Photo by Pixabay</a>`;
    } else if (cat === 4) {
        creditText = `<a href="https://www.pexels.com/photo/low-angle-view-of-cat-on-tree-257532/">Photo by Pixabay</a>`;
    } else if (cat === 5) {
        creditText = `<a href="https://www.pexels.com/photo/assorted-color-kittens-45170/">Photo by Pixabay</a>`;
    } else {
        creditText = "Unknown Photographer";
    }

    document.getElementById("credit").innerHTML = creditText;
}
