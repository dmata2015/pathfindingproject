import './pathfinding.css/';


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let app = document.querySelector('#app');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);