function add(inputId, elementsId) {
    var inp = document.getElementById(inputId);
    var ul = document.getElementById(elementsId);


    var li = document.createElement("li");
    li.innerHTML = inp.value + "<button onclick='remove(event)'>delete</button>";
    ul.append(li);
    inp.value = "";
}
function remove(event) { event.target.parentElement.remove() }