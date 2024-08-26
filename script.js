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
});
