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

function check_elem(elem, settings){
    const valid = check_val(elem, settings);
    invalid_mark(elem, valid)
    return valid
}

function check(){
    return check_elem($("#x_inp"), validate_settings.X) && check_elem($("#y_inp"),validate_settings.Y) && check_elem($("#r_inp"),validate_settings.R)
}
function setEventListener(checkFunc){
    $("#submit").on('click', function(event) {
        if (!checkFunc()){
            event.preventDefault();
        }
    })
}

setEventListener(check)