// Global variables ftw

let isStack = true;
let heading = '';
let modes = '';
const bucketList = [];
const completed = [];
// let i = 0;

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
    if(bucketList.length > 1) { // definitely change that condition!
        document.querySelector('#next-item').innerText = 'Next Item: ' + bucketList[bucketList.length -1]; // Replace that empty string with the actual item!
    } 
        else{
            document.querySelector('#next-item').innerText = 'Next Item: ' + bucketList[0];
        }

    document.querySelector('#top-item').innerText = 'Top Item: ' + bucketList[0]; // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = 'Number of Items: ' + bucketList.length; // Replace that with the number of items! - Completed
}

// Completed removeItem
function removeItem(event) {
    // Prevent page reload.
    event.preventDefault()

    if(isStack === true) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        bucketList.pop();

        // Queue Removed From Top to Completed
    } else {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        completed.push(' ' + bucketList.shift());
        // completed[completed.length] = ' ' + bucketList.shift();
        console.log(completed);
    }

    document.querySelector('#completed-item').innerText = 'Completed: ' + completed;
    document.querySelector('#number-of-items').innerText = 'Number of Items: ' + bucketList.length;
    document.querySelector('#top-item').innerText = 'Top Item: ' + bucketList[0];
    
    
    if(bucketList.length > 1) { // definitely change that condition!
        document.querySelector('#next-item').innerText = 'Next Item: ' + bucketList[bucketList.length -1]; // Replace that empty string with the actual item!
    } 

        else if(bucketList.length === 0){
            document.querySelector('#next-item').innerText = 'Next Item: None';
            document.querySelector('#top-item').innerText = 'Top Item: None';
        }    

        else{
            document.querySelector('#next-item').innerText = 'Next Item: ' + bucketList[0];
        }

}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()

    // How can we toggle whether it's a stack or a queue?
    // Your code below!

    if(isStack === false) {
        isStack= true;
        heading = 'The Bucket List:\n Stack Mode';   
        modes = 'Stack Mode: Delete Item from the Bottom of the List.'     
        document.querySelector('#toggle').innerText = 'Toggle to Queue';
        document.querySelector('#remove').innerText = 'Delete Item';

    } else {
        isStack = false;
        heading = 'The Bucket List:\n Queue Mode';
        modes = 'Queue Mode: Send Top Completed Bucket Item to Completed Section.'
        document.querySelector('#toggle').innerText = 'Toggle to Stack';
        document.querySelector('#remove').innerText = 'Complete Top Bucket Item';
    }
    changeHeading();
}

// Heading for the different Apps.
function changeHeading() {
    document.querySelector('#heading').innerText = heading;
    document.querySelector('#modes').innerText = modes;
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
