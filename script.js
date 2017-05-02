
var ball;

window.addEventListener("gamepadconnected", function(e) {
    if(ball){
        ball2 = document.getElementById("ball2");
        ball2.style.backgroundColor = "purple";
        document.getElementsId("p2")[0].innerHTML = e.gamepad.id;
    }
    ball = document.getElementById("ball");
    ball.style.backgroundColor = "green";
    document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
    updateLoop();

});

function updateLoop() {

    var gp = navigator.getGamepads()[0];
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    var gp2 = navigator.getGamepads()[1];
    var left2 = (gp2.axes[0] + 1) / 2 * (window.innerWidth - ball2.offsetWidth);
    var right2 = (gp2.axes[1] + 1) / 2 * (window.innerHeight - ball2.offsetHeight);

    ball.style.left = left + "px";
    ball.style.top =  right + "px";

    ball2.style.left = left2 + "px";
    ball2.style.top =  right2 + "px";

    if (gp.buttons[0].pressed || gp2.buttons[0].pressed) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

    requestAnimationFrame(updateLoop);

}