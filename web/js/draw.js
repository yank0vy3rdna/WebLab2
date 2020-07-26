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
    } catch (e) {
        R_text = '1'
    }
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    //Вертикальные черты
    ctx.fillText(-R_text / 2, Math.round((ctx.canvas.width / 2.05 + ctx.canvas.width / 40)), Math.round(ctx.canvas.height / 2 + R / 2 + 2))
    ctx.fillText(-R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 + R + 2))
    ctx.fillText(R_text / 2, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 - R / 2 + 2))
    ctx.fillText(R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 - R + 2))
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
        drawPointIfValid()
    } else {
        alert("You're using too old browser")
    }
}

function drawPoint(x, y, alpha) {
    draw()
    let ctx = $('#canvas')[0].getContext('2d')
    let r_val
    try {
        r_val = getRValue(true)
    } catch (e) {
        r_val = 1
        console.error(e)
    }
    let R = ctx.canvas.height / 4 / r_val

    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y);
    ctx.arc(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y, ctx.canvas.width / 300, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "rgba(255, 0, 0, " + alpha + ")";
    ctx.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
    ctx.fill();
    ctx.stroke();
}


// Add event listener for `click` events.
$('#canvas').click(function (event) {
    const ctx = $("#canvas")[0].getContext('2d')
    try {
        let r_val = getRValue(true)
        let kR = r_val / (ctx.canvas.height / 4)
        const x = event.offsetX,
            y = event.offsetY;
        const rly_x = (x - ctx.canvas.width / 2) * kR;
        const rly_y = (ctx.canvas.height / 2 - y) * kR;
        drawPoint(rly_x, rly_y, 1)
        const x_inp = $("#x_inp")
        x_inp.append(`<option value="${rly_x.toString()}">${rly_x.toString()}</option>`)
        x_inp[0].value = rly_x.toString()
        $("#y_inp")[0].value = rly_y.toString()
        $("#submit")[0].click()
    } catch (e) {
        alert("Невозможно определить координаты точки")
    }
});

function drawPointIfValid() {
    if (check(false)) {
        drawPoint(getXValue(), getYValue(), 1)
    }
}
function getBeforeValues() {
    var myRows = [];
    var $headers = $("th");
    $("tbody tr").each(function (index) {
        $cells = $(this).find("td");
        myRows[index] = {};
        $cells.each(function (cellIndex) {
            myRows[index][$($headers[cellIndex]).html()] = $(this).html();
        });
    });
    return myRows
}
function drawPoints() {
    const myRows = getBeforeValues()
    const alphastep = myRows.length<=5? 1. / (myRows.length) : 0.2
    draw()
    let ctx = $('#canvas')[0].getContext('2d')
    let r_val
    try {
        r_val = getRValue(true)
    } catch (e) {
        r_val = 1
        console.error(e)
    }
    let R = ctx.canvas.height / 4 / r_val
    for (let i = 0; i < myRows.length; i++) {
        const x = myRows[i]['X'],
            y = myRows[i]['Y'];
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y);
        ctx.arc(ctx.canvas.width / 2 + R * x, ctx.canvas.height / 2 - R * y, ctx.canvas.width / 300, 0, 2 * Math.PI);
        ctx.closePath();
        if (myRows[i]['Result']===' true '){
            ctx.strokeStyle = "rgba(0, 255, 0, " + (1. - alphastep * i) + ")";
            ctx.fillStyle = "rgba(0, 255, 0, " + (1. - alphastep * i) + ")";
        }else {
            ctx.strokeStyle = "rgba(255, 0, 0, " + (1. - alphastep * i) + ")";
            ctx.fillStyle = "rgba(255, 0, 0, " + (1. - alphastep * i) + ")";
        }
        ctx.fill();
        ctx.stroke();
    }
}
const r_inp = $("#r_inp")
r_inp[0].value = getBeforeValues()[0]['R']
$(window).resize(draw)
$(window).on("load", function () {
    draw()
    drawPoints()
})
r_inp.on("input", draw)
$("#x_inp").on("input", drawPointIfValid)
$("#y_inp").on("input", drawPointIfValid)