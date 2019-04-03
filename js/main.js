var a = document.getElementById("heading");

function fontred() {
    a.style.color = "red";
}

function fontgreen() {
    a.style.color = "green";
}

function fontblue() {
    a.style.color = "blue";
}

function bgred() {
    a.style.backgroundColor = "red";
}

function bggreen() {
    a.style.backgroundColor = "green";
}

function bgblue() {
    a.style.backgroundColor = "blue";
}

function padtop() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingTop;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingTop = (x + 1) + 'px';
}

function padtopminus() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingTop;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingTop = (x - 1) + 'px';
}

function padright() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingRight;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingRight = (x + 1) + 'px';
}

function padrightminus() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingRight;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingRight = (x - 1) + 'px';
}

function padbot() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingBottom;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingBottom = (x + 1) + 'px';
}

function padbotminus() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingBottom;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingBottom = (x - 1) + 'px';
}

function padleft() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingLeft;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingLeft = (x + 1) + 'px';
}

function padleftminus() {
    var p = window.getComputedStyle(document.getElementById("heading")).paddingLeft;
    var x = parseFloat(p);
    console.log(x);
    a.style.paddingLeft = (x - 1) + 'px';
}

function padall() {
    var p = window.getComputedStyle(document.getElementById("heading")).padding;
    var x = parseFloat(p);
    console.log(x);
    a.style.padding = (x + 1) + 'px';
}

function padallminus() {
    var p = window.getComputedStyle(document.getElementById("heading")).padding;
    var x = parseFloat(p);
    console.log(x);
    a.style.padding = (x - 1) + 'px';
}

function marTop() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginTop;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginTop = (x + 1) + 'px';
}

function marTopminus() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginTop;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginTop = (x - 1) + 'px';
}

function marright() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginRight;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginRight = (x + 1) + 'px';
}

function marrightminus() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginRight;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginRight = (x - 1) + 'px';
}

function marbot() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginBottom;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginBottom = (x + 1) + 'px';
}

function marbotminus() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginBottom;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginBottom = (x - 1) + 'px';
}

function marleft() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginLeft;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginLeft = (x + 1) + 'px';
}

function marleftminus() {
    var m = window.getComputedStyle(document.getElementById("heading")).marginLeft;
    var x = parseFloat(m);
    console.log(x);
    a.style.marginLeft = (x - 1) + 'px';
}

function marginall() {
    var m = window.getComputedStyle(document.getElementById("heading")).margin;
    var x = parseFloat(m);
    console.log(x);
    a.style.margin = (x + 1) + 'px';
}

function marginallmin() {
    var m = window.getComputedStyle(document.getElementById("heading")).margin;
    var x = parseFloat(m);
    console.log(x);
    a.style.margin = (x - 1) + 'px';
}

function btr() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderTopRightRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderTopRightRadius = (x + 1) + 'px';
}

function btrmi() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderTopRightRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderTopRightRadius = (x - 1) + 'px';
}

function btl() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderTopLeftRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderTopLeftRadius = (x + 1) + 'px';
}

function btlmi() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderTopLeftRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderTopLeftRadius = (x - 1) + 'px';
}

function bbr() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderBottomRightRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderBottomRightRadius = (x + 1) + 'px';
}

function bbrmi() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderBottomRightRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderBottomRightRadius = (x - 1) + 'px';
}

function bbl() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderBottomLeftRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderBottomLeftRadius = (x + 1) + 'px';
}

function bblmi() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderBottomLeftRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderBottomLeftRadius = (x - 1) + 'px';
}

function bra() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderRadius = (x + 1) + 'px';
}

function brami() {
    var b = window.getComputedStyle(document.getElementById("heading")).borderRadius;
    var x = parseFloat(b);
    console.log(x);
    a.style.borderRadius = (x - 1) + 'px';
}

function fontsize() {
    var fs = window.getComputedStyle(document.getElementById("heading")).fontSize;
    var x = parseFloat(fs);
    console.log(x);
    var b = a.style.fontSize = (x + 1) + 'px';
    document.getElementById("constant").innerHTML = b;
}

function fontsizemi() {
    var fs = window.getComputedStyle(document.getElementById("heading")).fontSize;
    var x = parseFloat(fs);
    console.log(x);
    var b = a.style.fontSize = (x - 1) + 'px';
    document.getElementById("constant").innerHTML = b;
}

function text() {
    var t = document.getElementById("constant");
    t=t.innerHTML;
    a.style.fontSize = t;
}