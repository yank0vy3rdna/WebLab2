

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

function check_elem(elem, settings, mark){
    const valid = check_val(elem, settings);
    if (mark) {
        invalid_mark(elem, valid)
    }
    return valid
}

function check(mark){
    return check_elem($("#x_inp"), validate_settings.X, mark) && check_elem($("#y_inp"),validate_settings.Y, mark) && check_elem($("#r_inp"),validate_settings.R, mark)
}
function setEventListener(checkFunc){
    $("#submit").on('click', function(event) {
        if (!checkFunc(true)){
            event.preventDefault();
        }
    })
}

setEventListener(check)

function getXValue() {
    const elem = $("#x_inp")
    if (check_elem(elem,validate_settings.X, false)){
        return elem[0].value;
    }else{
        throw Error("Bad X")
    }
}
function getYValue() {
    const elem = $("#y_inp")
    if (check_elem(elem,validate_settings.Y, false)){
        return elem[0].value;
    }else{
        throw Error("Bad Y")
    }
}
function getRValue(mark) {
    const elem = $("#r_inp")
    if (check_elem(elem,validate_settings.R, mark)){
        return elem[0].value;
    }else{
        throw Error("Bad R")
    }
}