// First Project
const openOne = document.getElementById('openOne')
const modalContainerOne = document.getElementById('modalContainerOne')
const closeOne = document.getElementById('closeOne')
// Listen for 'view' click
openOne.addEventListener('click', () => {
    modalContainerOne.classList.add('show');
})
// Listen for 'close' click
closeOne.addEventListener('click', () => {
    modalContainerOne.classList.remove('show');
})
// Listen for click outside of the modal
window.addEventListener('click', (e) => {
    if(e.target == modalContainerOne) {
        modalContainerOne.classList.remove('show')
    }
})



// The Middle Project
const openTwo = document.getElementById('openTwo')
const modalContainerTwo = document.getElementById('modalContainerTwo')
const closeTwo = document.getElementById('closeTwo')
// Listen for 'view' click
openTwo.addEventListener('click', () => {
    modalContainerTwo.classList.add('show');
})
// Listen for 'close' click
closeTwo.addEventListener('click', () => {
    modalContainerTwo.classList.remove('show');
})
// Listen for click outside of the modal
window.addEventListener('click', (e) => {
    if(e.target == modalContainerTwo) {
        modalContainerTwo.classList.remove('show')
    }
})


// End Project
const openThree = document.getElementById('openThree')
const modalContainerThree = document.getElementById('modalContainerThree')
const closeThree = document.getElementById('closeThree')
// Listen for 'view' click
openThree.addEventListener('click', () => {
    modalContainerThree.classList.add('show');
})
// Listen for 'close' click
closeThree.addEventListener('click', () => {
    modalContainerThree.classList.remove('show');
})
// Listen for click outside of the modal
window.addEventListener('click', (e) => {
    if(e.target == modalContainerThree) {
        modalContainerThree.classList.remove('show')
    }
})