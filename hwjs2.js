//button, input, ra task halne thau lai variable ma haley for easy access
let addbutton = document.getElementById('add_task');
let input = document.getElementById('enter_task');
let tasklist = document.getElementById('task_list');
let c = 0;

//function haley event listener ko form ma
addbutton.addEventListener('click',function(){
    if(input.value.length!=0){
        let today = new Date();
        c++;
        document.getElementById('count').innerHTML = c;
    //naya element banaye to store the tasks
    var paragraph = document.createElement('p');

    //each naya element lai same class diye for design
    paragraph.classList.add('task_style');

    //value nikaley input box bata
    paragraph.innerText = input.value + " ( " + today.toLocaleDateString() + " )";

    //append garera p tag haru thapidiye
    tasklist.appendChild(paragraph);
    }else if(input.value.length==0){
        alert('FUCK YOU');
    }
});