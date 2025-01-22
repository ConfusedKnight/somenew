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
    var check_task = document.createElement('button');
    var end_task = doucument.createElement('button');

    //each naya element lai same class diye for design
    paragraph.classList.add('task_style');
    check_task.classList.add('comp_task');
    check_task.innerText = "X";

    //value nikaley input box bata
    paragraph.innerText = input.value + " ( " + today.toLocaleDateString() + " )";

    //append garera p tag haru thapidiye
    tasklist.appendChild(paragraph);
    paragraph.appendChild(check_task);

    check_task.addEventListener('click',function(){
        paragraph.classList.add('cutout');
    });

    }else if(input.value.length==0){
        alert('FUCK YOU');
    }
});

