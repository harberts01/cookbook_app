const storageInput = document.querySelector('#recipe-name');
const headerText = document.querySelector('#openRecipeHeader')
const button = document.querySelector('#createRowButton');

storageInput.addEventListener('input', letter => {
    openRecipeHeader.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('recipeName', headerText.textContent)
}

document.getElementById('createRowButton').addEventListener('click', saveToLocalStorage)


document.getElementById('p-button').addEventListener('click', () => {
    document.createElement('p');
    
});