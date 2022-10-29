let input = document.getElementById('task')
let button_add = document.getElementById('btn_add')
let main = document.getElementById('task_area')
let count = 0

function Add_User(){

    let input_value = input.value;

    if((input_value !== "") && (input_value !== undefined)){

        window.location.href = "http://localhost:3000/register";

    input.value = ""
    input.focus()
    }
    else{
        window.alert('Invalid Name, Try Again')
    }
}



function Mark_task(id_count){

    let task = document.getElementById(id_count)
    let get_class = task.getAttribute('class')
    console.log(get_class)

    if(get_class == "item"){
        task.classList.add('clicked')
    }
    else{
        task.classList.remove('clicked')
    }
}

function Delete_task(id_count){
    let task = document.getElementById(id_count)
    task.remove()
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        button_add.click()
    }
})