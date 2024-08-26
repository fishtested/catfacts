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
    cat = Math.floor(Math.random() * 21);
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
    } else if (cat === 6) {
        creditText = `<a href="https://www.pexels.com/photo/orange-tabby-cat-lying-on-green-cloth-416195/">Photo by Pixabay</a>`;
    } else if (cat === 7) {
        creditText = `<a href="https://www.pexels.com/photo/gray-cat-lying-on-bed-236606/">Photo by Pixabay</a>`;
    } else if (cat === 8) {
        creditText = `<a href="https://www.pexels.com/photo/low-angle-portrait-of-cat-on-tree-against-sky-248350/">Photo by Pixabay</a>`;
    } else if (cat === 9) {
        creditText = `<a href="https://www.pexels.com/photo/close-up-photography-of-sleeping-tabby-cat-1056251/">Photo by Ihsan Adityawarman</a>`;
    } else if (cat === 10) {
        creditText = `<a href="https://www.pexels.com/photo/short-coated-gray-cat-20787/">Photo by Krysten Merriman</a>`;
    } else if (cat === 11) {
        creditText = `<a href="https://www.pexels.com/photo/cute-gray-kitten-standing-on-a-wooden-flooring-774731/">Photo by Marko Blazevic</a>`;
    } else if (cat === 12) {
        creditText = `<a href="https://www.pexels.com/photo/european-shorthair-cat-on-a-woven-basket-1543793/">Photo by Cats Coming</a>`;
    } else if (cat === 13) {
        creditText = `<a href="https://www.pexels.com/photo/silver-tabby-cat-lying-on-brown-wooden-surface-126407/">Photo by Inge Wallumrød</a>`;
    } else if (cat === 14) {
        creditText = `<a href="https://www.pexels.com/photo/white-and-grey-kitten-smelling-white-daisy-flower-1472999/">Photo by Alex Bargain</a>`;
    } else if (cat === 15) {
        creditText = `<a href="https://www.pexels.com/photo/photo-of-grey-tabby-kitten-lying-down-2558605/">Photo by Chevon Rossouw</a>`;
    } else if (cat === 16) {
        creditText = `<a href="https://www.pexels.com/photo/playful-cat-lying-on-a-carpet-1276553/">Photo by Diana ✨</a>`;
    } else if (cat === 17) {
        creditText = `<a href="https://www.pexels.com/photo/calico-cat-on-focus-photo-1404819/">Photo by Cong H</a>`;
    } else if (cat === 18) {
        creditText = `<a href="https://www.pexels.com/photo/shallow-focus-of-cat-face-54632/">Photo by Pixabay</a>`;
    } else if (cat === 19) {
        creditText = `<a href="https://www.pexels.com/photo/close-up-photo-of-a-funny-cat-225406/">Photo by mali maeder</a>`;
    } else if (cat === 20) {
        creditText = `<a href="https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1735057/">Photo by Víctor Panadeiros</a>`;
    } else {
        creditText = "Error: Image credit not found";
    }

    document.getElementById("credit").innerHTML = creditText;
}
