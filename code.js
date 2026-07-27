// stores the timer id so we can stop the same timer later
let moveTimer = null;

// runs when the user clicks the Start button
function startMeme() {
    // Gets the Start button from the page.
    let startButton = document.getElementById("startButton");
    // Gets the Stop button from the page.
    let stopButton = document.getElementById("stopButton");
    // Gets the status message area from the page.
    let statusMessage = document.getElementById("statusMessage");

    // Turns the Start button off so it cannot be clicked again.
    startButton.disabled = true;
    // Turns the Stop button back on.
    stopButton.disabled = false;
    // Updates the message shown to the user.
    statusMessage.innerHTML = "Status: Moving";

    // Calls the function that starts the repeated movement.
    beginMoving();
}

// starts the timer that keeps moving the meme
function beginMoving() {
    // Checks if a timer is already running.
    if (moveTimer !== null) {
        // Leaves early so we do not create another timer.
        return;
    }

    // Starts a timer that calls moveMeme every 500 milliseconds.
    moveTimer = setInterval(moveMeme, 500);
}

// runs when the user clicks the Stop button
function stopMeme() {
    // Gets the Start button from the page.
    let startButton = document.getElementById("startButton");
    // Gets the Stop button from the page.
    let stopButton = document.getElementById("stopButton");
    // Gets the status message area from the page.
    let statusMessage = document.getElementById("statusMessage");

    // Turns the Stop button off after stopping.
    stopButton.disabled = true;
    // Turns the Start button back on.
    startButton.disabled = false;
    // Updates the message shown to the user.
    statusMessage.innerHTML = "Status: Stopped";

    // Calls the function that stops the repeated movement.
    stopMoving();
}

// Stops the timer that moves the image.
function stopMoving() {
    // Checks if there is a timer to stop.
    if (moveTimer !== null) {
        // Clears the timer so the meme stops moving.
        clearInterval(moveTimer);
        // Resets the timer variable so Start can make a new one later.
        moveTimer = null;
    }
}

// Moves the meme to a new spot inside the movement area.
function moveMeme() {
    // Gets the meme image from the page.
    let memeImage = document.getElementById("PolarImage");
    // Gets the box the meme is allowed to move inside.
    let memeArea = document.getElementById("memeArea");

    // Reads how wide the movement area is.
    let areaWidth = memeArea.clientWidth;
    // Reads how tall the movement area is.
    let areaHeight = memeArea.clientHeight;
    // Reads how wide the meme image is.
    let imageWidth = memeImage.offsetWidth;
    // Reads how tall the meme image is.
    let imageHeight = memeImage.offsetHeight;

    // Finds the farthest right the meme can go and stay visible.
    let maxLeft = areaWidth - imageWidth;
    // Finds the farthest down the meme can go and stay visible.
    let maxTop = areaHeight - imageHeight;

    // Keeps max left from going below zero.
    if (maxLeft < 0) {
        // Sets max left to 0 if the area is too small.
        maxLeft = 0;
    }

    // Keeps max top from going below zero.
    if (maxTop < 0) {
        // Sets max top to 0 if the area is too small.
        maxTop = 0;
    }

    // Picks a random horizontal position.
    let newLeft = Math.floor(Math.random() * (maxLeft + 1));
    // Picks a random vertical position.
    let newTop = Math.floor(Math.random() * (maxTop + 1));

    // Moves the meme left and right by changing the left style.
    memeImage.style.left = newLeft + "px";
    // Moves the meme up and down by changing the top style.
    memeImage.style.top = newTop + "px";
}

// Used by game.html when the Change Text button is clicked.
function updateText() {
    // Gets the heading on the game page by its id.
    let heading = document.getElementById("heading");
    // Changes the heading text using innerHTML.
    heading.innerHTML = "JavaScript is awesome!";
}
