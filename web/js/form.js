const validate_settings = {
    X: {
        max: 3,
        min: -5
    },
    Y: {
        max: 3,
        min: -5
    },
    R: {
        max: 4,
        min: 1
    }
}
function validate_range(value, range) {
    return (value <= range.max) && (value >= range.min)
}

function check_val(inp, settings) {
    if (inp[0].value === "")
        return false
    if (isNaN(inp[0].value))
        return false
    return validate_range(inp[0].value, settings)
}

function invalid_mark(inp, valid) {
    if (valid){
        inp.removeClass("is-invalid")
    }
    else{
        inp.addClass("is-invalid")
    }
}

function check(){
    const x_inp = $("#x_inp")
    const y_inp = $("#y_inp")
    const r_inp = $("#r_inp")
    const x_valid = check_val(x_inp, validate_settings.X);
    const y_valid = check_val(y_inp, validate_settings.Y);
    const r_valid = check_val(r_inp, validate_settings.R);
    invalid_mark(x_inp,x_valid)
    invalid_mark(y_inp,y_valid)
    invalid_mark(r_inp,r_valid)
    return x_valid && y_valid && r_valid
}
function setEventListener(checkFunc){
    $("#submit").on('click', function(event) {
        if (!checkFunc()){
            event.preventDefault();
        }
    })
}

setEventListener(check)