document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "date.html"; // Redirect to the date selection page
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    document.addEventListener("mousemove", moveButton);
});

function moveButton(event) {
    var button = document.getElementById("noBtn");
    var cursorX = event.clientX;
    var cursorY = event.clientY;
    var buttonRect = button.getBoundingClientRect();
    var buttonX = buttonRect.left + buttonRect.width / 2;
    var buttonY = buttonRect.top + buttonRect.height / 2;
    var dx = cursorX - buttonX;
    var dy = cursorY - buttonY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 150) { // Change this value to adjust the sensitivity
        var newX = buttonX - dx * 0.05;
        var newY = buttonY - dy * 0.05;
        button.style.left = newX + "px";
        button.style.top = newY + "px";
    }
}
