// localStorage.clear();
var firstss = document.getElementById('text1');
var button = document.getElementById('text2');
var hackings = document.getElementById('container');
var count = 0;
function deletefromlocal(valuing) {
    parseInt(valuing);
    localStorage.removeItem(valuing);
}
function showonscreen(values) {
    var _loop_1 = function (y) {
        var div = document.createElement('div');
        div.style.display = "flex";
        div.style.justifyContent = "between";
        div.style.border = "2px solid black";
        var text1 = document.createElement('h1');
        text1.style.color = "white";
        var text2 = document.createElement('h1');
        text2.style.color = "white";
        text2.style.marginLeft = "40px";
        var button45 = document.createElement('button');
        button45.onclick = function () {
            var parent = button45.parentElement;
            var first = parent.firstElementChild;
            parent.remove();
            deletefromlocal(first.innerText);
        };
        var div50 = document.createElement('div');
        div50.style.width = "100px";
        button45.style.backgroundColor = "red";
        button45.style.marginLeft = "40px";
        button45.style.width = "40px";
        button45.innerText = "Delete";
        div.style.overflowWrap = 'break-word';
        div.style.backgroundColor = "black";
        text1.innerText = "".concat(values[y].id);
        text2.innerText = "".concat(values[y].name);
        div.append(text1);
        div50.append(text2);
        div.appendChild(div50);
        div.append(button45);
        hackings.appendChild(div);
    };
    for (var y = 0; y < values.length; y++) {
        _loop_1(y);
    }
}
var last;
function cal() {
    var ero = [];
    for (var i = 0; i < localStorage.length; i++) {
        var qws = localStorage.key(i);
        ero.push(JSON.parse(localStorage.getItem(qws)));
    }
    showonscreen(ero);
}
button.onclick = function () {
    if (firstss.value != "") {
        var max = 0;
        for (var y = 0; y < localStorage.length; y++) {
            var fg = localStorage.key(y);
            var azs = JSON.parse(localStorage.getItem(fg));
            if (azs.id > max) {
                max = azs.id;
            }
        }
        count = max + 1;
        var test = firstss.value;
        var hack = { name: test, id: count };
        localStorage.setItem("".concat(count), JSON.stringify(hack));
        var ero = [];
        hackings.innerHTML = "";
        for (var i = 0; i < localStorage.length; i++) { // Adjusted loop to include last item
            var ml = localStorage.key(i);
            ero.push(JSON.parse(localStorage.getItem(ml)));
        }
        showonscreen(ero);
        firstss.value = "";
    }
};
document.addEventListener('DOMContentLoaded', cal);
