var mouse_event="empty";
var last_position_of_x, last_position_of_y;
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color="turquoise";
var line_width = 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if (mouse_event=="mouseDown")
{ctx.beginPath();
    ctx.lineWidth=line_width;
    ctx.strokeStyle=color;
    ctx.arc(200, 200, 40, 0, 2*Math.PI);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
}