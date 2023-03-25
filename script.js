let inputdata=document.querySelector("#input_data");
let btn=document.getElementById("add_button");
var taskcontainer=document.querySelector(".taskscontainer");

inputdata.addEventListener('keyup',()=>{
  if(inputdata.value.trim() !== ''){
      btn.classList.add('active');
  }
  else{
      btn.classList.remove('active');
  }
})

btn.addEventListener('click',()=>{
    if(inputdata.value.trim() !== ''){
        
        let newlist=document.createElement('div');
        newlist.classList.add('add_list');
        newlist.innerHTML =`
        <span>${inputdata.value}</span>
        <div class="item_btn">
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
        `
        taskcontainer.appendChild(newlist);
       
        inputdata.value='';
    }
    else{
        alert("Please Enter Valid task");
    }
})

taskcontainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})

taskcontainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
