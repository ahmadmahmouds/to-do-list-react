import React , {useState}from 'react'

export const ToDoComponent = () => {
    const [toDoList, setToDoList]= useState([{name:"This is my first task", checked:false}, {name:"This is my second task", checked:false}]);

    const submitHandler=(e)=>{
    e.preventDefault();
    let newTask=document.getElementById("newTask");
    setToDoList(toDoList.concat({name:newTask.value, checked:false}))
    newTask.value="";
    }
    const changeStatus =(e, index)=>{
    let newArr=[...toDoList];
    newArr[index].checked=e.target.checked;
    setToDoList(newArr);
    }
    const deleteTask= index=>{
        let newArr=[...toDoList];
        newArr.splice(index,1);
        setToDoList(newArr);
    
    }
    return (
        
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" id="newTask" /> 
            <input type="submit" value="Add Task" /> 

            </form>

            {
                toDoList.map( (item, index) =>{
                    return (
                    <div key={index}>
                    <span style={item.checked?{textDecoration:'line-through'}:{color:'black'}}>{item.name}</span>
                    <input type="button" onClick={e=>deleteTask(index)} id={index} value="Delete"/>
                    <input type="checkbox" id={index} checked={item.checked} onClick={(e)=>changeStatus(e,index)}/>
                    </div>
                    )
                })
            }
            </div>
    )
}


export default ToDoComponent
