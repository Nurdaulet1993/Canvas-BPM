let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = 500, height = 500;
canvas.width = width;
canvas.height = height;
let canvasWrap = document.querySelector('.canvas_wrapper');



makeCanvasSize(canvasWrap, canvas);