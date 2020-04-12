function validate_zero_empty(field) {	//Does not allow zero or empty
    var flag1;
    var i;
    var x;
    var ch;
    x = field.value.length;
    flag1 = "0";
    if (x == 0) {
        alert("This field can't be empty!");
        field.value = 1e-4;
        field.focus();
        return;
    }
    if (field.value == 0) {
        alert("This field can't be 0!");
        field.value = 1e-4;
        field.focus();
        return;
    }
}

function validate_empty(field) {	//Does not allow empty
    var flag1;
    var i;
    var x;
    var ch;
    x = field.value.length;
    flag1 = "0";
    if (x == 0) {
        alert("This field can't be empty!");
        field.value = 0;
        field.focus();
        return;
    }
}

function calculate(form) {
    var capRat = form.rating.value;
    var modRat = capRat * .85;
    var onms = form.wakedurationms.value * form.wakesperhour.value;
    if (onms > 36e5) {
        onms = 36e5;
    }
    var selfDischargemAh = form.dischargerate.value * capRat / 100;
	var selfDischargemA  = selfDischargemAh / 730	/* 730 hours per month */
    var onma = form.consump.value;
    var offms = 3600000 - onms;
    var offma = form.offconsump.value;
    var realma = (onma * onms + selfDischargemA * onms + offma * offms + selfDischargemA * offms) / 36e5;
    //var realma = (onma * onms + offma * offms) / 36e5;
    var lifeda = (capRat / realma) / 24;
	var lifemt = lifeda / 30.5;
    var lifeyr = lifeda / 365;
    alert("Estimated battery life is: " + ((Math.round(lifeda * 100)) / 100) + " days, or " + ((Math.round(lifemt * 100)) / 100) + " months, or " + ((Math.round(lifeyr * 100)) / 100) + " years.");
}