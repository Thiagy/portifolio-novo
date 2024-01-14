const matrix = document.querySelector('main');

var canvas = document.createElement('canvas');

matrix.appendChild(canvas);

var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 3.1;
var texts = '1asd3fgh5jkb7gwazre9cds0thj8plk6cfd4asx2owm'.split('');

var fontSize = 14;
var columns = canvas.width / fontSize;
var drops = [];

for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = fontSize + 'px poppins';

    for (var i = 0; i < drops.length; i++) {

        ctx.fillStyle = '#0f0';

        var text = texts[Math.floor(Math.random() * texts.length)];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {

            drops[i] = 0;

        }

        drops[i]++;
    }
}

setInterval(draw, 100);
