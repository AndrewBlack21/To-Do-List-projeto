const localStorageKey = 'Projeto To-Do-list'

function validateIfExistNewTask()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue =  document.getElementById('input-new-task').value
    let exist = values.find(x => x.name == inputValue)
    return !exist? false : true

}

function newTask()
{
   let input =  document.getElementById('input-new-task')
   input.style.border = ''
    // validacao

    if(!input.value)
    {
        input.style.border = '1px solid red'
        alert("Digite algo para inserir em na lista");
    }
    else if(validateIfExistNewTask())
    {
        alert('Ja existe uma tarefa na sua lista')
    }   
    else
    {
        //incrementacao para localstorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
     input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey)  ||  "[]")
    let list = document.getElementById('To-Do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id= 'btn-ok' onclick='removeItem("${values[i]['name']}")'>Ok</button></li>`
    }
}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey)  ||  "[]")
    let index = values.find(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))

}
showValues()