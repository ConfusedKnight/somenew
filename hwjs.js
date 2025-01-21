let c = 0;
let i = 0;
let total_tasks = [];

//Task haru count hanna ko lai(plus cant add if textbox is empty)
function taskcounter(){
   let today = new Date();
    let tasklength = document.getElementById('task').value.length;

    if(tasklength!=0){
      let entered_task = document.getElementById('task').value;
      total_tasks.push(entered_task);
      c++;
  document.getElementById('taskcount').innerHTML = c;
      document.getElementById('tasklist').innerHTML += entered_task + "\n\n(" + today.toLocaleString() + ")<br>";
    }else if(tasklength == 0){
      alert("FUCK YOU");
    }
}





