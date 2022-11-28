//functions for the calculator
var p = document.getElementById("calc").value;

function input(value)
{
    document.getElementById("calc").value += value;
}

function clearScr()
{
    document.getElementById("calc").value = "";
}

function calculate()
{
    var p = document.getElementById("calc").value;
    var q = eval(p);
    document.getElementById("calc").value = q;
}
function sine()
{
    p = document.getElementById("calc").value;
    r = p*(3.14159265358979323846264338327950288/180);
    var q = Math.sin(r);
    document.getElementById("calc").value = q;
}
function cos()
{
    p = document.getElementById("calc").value;
    r = p*(3.14159265358979323846264338327950288/180);
    var q = Math.cos(r);
    document.getElementById("calc").value = q;
}
function tan()
{
    p = document.getElementById("calc").value;
    r = p*(3.14159265358979323846264338327950288/180);
    var q = Math.tan(r);
    document.getElementById("calc").value = q;
}
function root()
{
    p = document.getElementById("calc").value;
    var q = Math.sqrt(p);
    document.getElementById("calc").value = q;
}
function ln()
{
    p = document.getElementById("calc").value;
    var q = Math.log(p);
    document.getElementById("calc").value = q;
}
function log()
{
    p = document.getElementById("calc").value;
    var q = (Math.log(p))/2.302585092994046;
    document.getElementById("calc").value = q;
}
function exp()
{
    p = document.getElementById("calc").value;
    var q = 2.718281828459045**p;
    document.getElementById("calc").value = q;
}
function inv()
{
    p = document.getElementById("calc").value;
    var q = 1/p;
    document.getElementById("calc").value = q;
}
function sqr()
{
    p = document.getElementById("calc").value;
    var q = p**2;
    document.getElementById("calc").value = q;
}
