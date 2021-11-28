//adding a new item to the list
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('Field cannot be empty');
    } else {
        $('#list').append(li);
    }

//Strikethrough an item
function strikeThrough() {
    li.toggleClass('strike');
    }

    li.on('dblclick', strikeThrough);

//Delete item button
let deleteButton = $('<button></button>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }
//sorting the list
    $('#list').sortable();
}
