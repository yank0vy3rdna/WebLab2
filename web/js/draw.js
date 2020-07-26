function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}

function draw_coordinates(ctx) {
    let R = ctx.canvas.height / 4
    let R_text;
    try {
         R_text = getRValue(false)
    }catch (e) {
        R_text = '1'
    }
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    //Вертикальные черты
    ctx.fillText(-R_text / 2, Math.round((ctx.canvas.width / 2.05 + ctx.canvas.width/40)), Math.round(ctx.canvas.height / 2 + R / 2 + 2))
    ctx.fillText(-R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width/40), Math.round(ctx.canvas.height / 2 + R + 2))
    ctx.fillText(R_text / 2, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width/40), Math.round(ctx.canvas.height / 2 - R / 2 + 2))
    ctx.fillText(R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width/40), Math.round(ctx.canvas.height / 2 - R + 2))
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R)
    ctx.stroke()
    // Горизонтальные черты
    ctx.fillText(-R_text / 2, Math.round(ctx.canvas.width / 2 - R / 2 - 6), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(-R_text, Math.round(ctx.canvas.width / 2 - R - 3), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(R_text / 2, Math.round(ctx.canvas.width / 2 + R / 2 - 6), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(R_text, Math.round(ctx.canvas.width / 2 + R - 3), Math.round(ctx.canvas.height / 2.2))
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 1.9)
    ctx.stroke()
    // Стрелки

    canvas_arrow(ctx, ctx.canvas.width * 0.1, ctx.canvas.height / 2, ctx.canvas.width * 0.9, ctx.canvas.height / 2)
    ctx.fillText('X', ctx.canvas.width * 0.9, ctx.canvas.height / 2.1)
    canvas_arrow(ctx, ctx.canvas.width / 2, ctx.canvas.height * 0.9, ctx.canvas.width / 2, ctx.canvas.height * 0.1)
    ctx.fillText('Y', ctx.canvas.width / 2.2, ctx.canvas.height * 0.1)
}


function draw() {

    let ctx = $('#canvas')[0].getContext('2d')

    if (ctx) {
        ctx.canvas.width = ctx.canvas.offsetWidth
        ctx.canvas.height = ctx.canvas.offsetHeight

        let R = ctx.canvas.height / 4
        ctx.font = Math.round(ctx.canvas.width / 50) + 'px verdana';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)


        // Сектор

        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, R, -Math.PI, -Math.PI / 2, false);
        ctx.closePath();
        ctx.strokeStyle = "rgba(91,95,201,0.58)";
        ctx.fillStyle = "rgba(91,95,201,0.58)";
        ctx.fill();
        ctx.stroke();

        // Прямоугольник

        ctx.fillRect(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 2 + R, R / 2, -R)

        // Треугольник

        ctx.beginPath()
        ctx.moveTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 2)
        ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height / 2 - R)
        ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height / 2)
        ctx.lineTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 2)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Рисуем координатные оси

        draw_coordinates(ctx)

    } else {
        alert("You're using too old browser")
    }
}

function drawPoint(x, y) {
    draw()
    let ctx = $('#canvas')[0].getContext('2d')
    try {
        let r_val = getRValue(true)
        let R = ctx.canvas.height / 4 / r_val

        ctx.beginPath();
        console.log(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y)
        ctx.moveTo(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y);
        ctx.arc(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y, ctx.canvas.width / 300, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    } catch (e) {
        console.error(e)
    }
}


// Add event listener for `click` events.
$('#canvas').click(function (event) {
    const ctx = $("#canvas")[0].getContext('2d')
    try {
        let r_val = getRValue(true)
        let kR = r_val / (ctx.canvas.height / 4)
        const x = event.offsetX,
            y = event.offsetY;
        console.log(x, y)
        const rly_x = (x - ctx.canvas.width / 2) * kR;
        const rly_y = (ctx.canvas.height / 2 - y) * kR;
        console.log(rly_x, rly_y)
        drawPoint(rly_x, rly_y)
    } catch (e) {
        console.error(e)
    }
});

function drawPointIf() {
    if (check(false)) {
        drawPoint()
    }
}

$(window).resize(draw)
$(window).on("load", draw)
$("#r_inp").on("change", draw)