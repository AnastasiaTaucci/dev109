// create function that adds new line with a new grocery item when you hit button

function addItem(text) {
    let list = document.getElementsByTagName('ul')[0];
    let newItem = document.createElement('li');
    let newText = document.createTextNode(text);
    newItem.appendChild(newText);
    list.appendChild(newItem);
}
