let id = 0;

document.getElementById('createRowButton').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('recipe-name').value;
    document.getElementById('recipe-name').value.replace('undefined', '');
    row.insertCell(1).innerHTML = document.getElementById('num-of-ingredients').value; 
    row.insertCell(2).innerHTML = document.getElementById('prep-time').value; 
    row.insertCell(3).innerHTML = document.getElementById('servings').value; 
    let editRecipe = row.insertCell(4);
    editRecipe.appendChild(createEditButton(id++));
    let openRecipe = row.insertCell(5);
    openRecipe.appendChild(createOpenButton(id++));
    document.getElementById('recipe-name').value = '';
});




function createEditButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-success'
    btn.id= id;
    btn.innerHTML = 'Edit';
    btn.onclick =()=>{
        $("#staticBackdrop").modal('show');  
    };
    return btn;
}

function createOpenButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-success'
    btn.id= id;
    btn.innerHTML = 'Open';
    btn.onclick =()=>{
        $("#staticBackdrop").modal('show');  
    };
    return btn;
}

