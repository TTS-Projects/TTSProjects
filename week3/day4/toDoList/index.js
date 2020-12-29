
console.log("Hi Grader");

document.getElementById("newListItem").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;
    console.log(text);
    const list = document.querySelector("#listItem");
    var li = document.createElement("li");
    li.innerHTML = text;
    list.appendChild(li);
    //clear text from input
    document.getElementById('inputText').value = '';
    
    
});
var timerVariable;
function Timer(element){
    alert("NO! Don't Delete me! Please");
    element.remove();

}

function waitAndRemove(el){
    el.innerHTML = el.innerHTML.strike();
    console.log("NO! Don't Delete me! Please!");
    var timerVariable = setTimeout(Timer, 3000, el);
    //el.remove();
}
