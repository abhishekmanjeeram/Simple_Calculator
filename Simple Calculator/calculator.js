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