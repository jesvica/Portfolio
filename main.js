// First Project
const openOne = document.getElementById('openOne')
const modalContainerOne = document.getElementById('modalContainerOne')
const closeOne = document.getElementById('closeOne')

openOne.addEventListener('click', () => {
    modalContainerOne.classList.add('show');
})

closeOne.addEventListener('click', () => {
    modalContainerOne.classList.remove('show');
})

// Middle Project
const openTwo = document.getElementById('openTwo')
const modalContainerTwo = document.getElementById('modalContainerTwo')
const closeTwo = document.getElementById('closeTwo')

openTwo.addEventListener('click', () => {
    modalContainerTwo.classList.add('show');
})

closeTwo.addEventListener('click', () => {
    modalContainerTwo.classList.remove('show');
})

// End Project
const openThree = document.getElementById('openThree')
const modalContainerThree = document.getElementById('modalContainerThree')
const closeThree = document.getElementById('closeThree')

openThree.addEventListener('click', () => {
    modalContainerThree.classList.add('show');
})

closeThree.addEventListener('click', () => {
    modalContainerThree.classList.remove('show');
})