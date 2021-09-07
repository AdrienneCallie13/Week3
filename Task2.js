let counter = 0;

console.log("Loadding JS file")

// make button work
const goButton = document.querySelector('#clickme');
goButton.onclick = writeRandom;


// this function runs every time you click the button
function writeRandom() {
    console.log("Click Test")
        // get a new random number
    let num = Math.floor(Math.random() * 100);

    let message;

    // provide a result based on the random number that was created
    if (num > 66) {
        message = "The random number is in the top third.";
    } else if (num > 33) {
        message = "The random number is in the middle third.";
    } else {
        message = "The random number is in the bottom third.";
    }

    // keep count of how many times you have run this function
    counter++;

    // write the results into the HTML 
    document.querySelector("#theNumber").textContent = num;
    document.querySelector("#writeHere").textContent = message;
    document.querySelector("#count").textContent = counter;
}
