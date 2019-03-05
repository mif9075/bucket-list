// Global variables ftw

let isStack = true;
let heading = '';
let bucketList = [];

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
            .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    displayItem(newItem);

    // Now comes your part: add the item to the list.
    bucketList.push(newItem);
    console.log(bucketList);

    // Display it in next-item if it's the first item:
    if(false) { // definitely change that condition!
        document.querySelector('#next-item').innerText = ''; // Replace that empty string with the actual item!
    } 

    document.querySelector('#newest-item').innerText = '' // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = bucketList.length; // Replace that with the number of items!
}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault()

    if(isStack === true) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        bucketList.pop();
        bucketList = bucketList - 1;

    } else {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        bucketList.shift();
        bucketList = bucketList - 1;
    }
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()

    // How can we toggle whether it's a stack or a queue?
    // Your code below!

    if(isStack === false) {
        isStack= true;
        heading = 'The Bucket List - Stack';        


    } else {
        isStack = false;
        heading = 'The Bucket List - Queue';

    }
    changeHeading();


}

// Heading for the different Apps.
function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}



/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}
