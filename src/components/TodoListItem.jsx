import { useState } from "react";
import Deleteicon from "./icon/Deleteicon";
import Editicon from "./icon/Editicon";


export default function TodoListItem ({todo ,deleteTodo, toggleTodoStatus ,editTodoTitle}){


    const [editMode , setEditMode ] = useState(false)

    const editTodoHandler = (event)=>{

        if(event.key == 'Enter'){
            // console.log(event.target.value)
            editTodoTitle(todo , event.target.value)
            setEditMode(false)
        }
        
    }


    return(

    <div>     
        <li className="relative flex items-center justify-between px-2 py-6 ">

    {
        editMode 
        ?   <div className=" w-full flex items-center">
                     <input type="text" onChange={() => {} } defaultValue={todo?.title} onKeyDown={editTodoHandler} className=" w-full py-2 px-4 border border-gray-300 rounded-md" />
                     <Deleteicon className=" mx-2 " onClick={() => setEditMode(false)}/>
                 </div>

        :   (
       
         <div className=" flex items-center">
            <div>
                <input type="checkbox" checked={todo?.status } onChange={() => toggleTodoStatus(todo)} className="" />
                <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.status ? 'line-through' : ''}`}>{todo?.title}</p>
            </div>
            <button type="button" className="absolute right-0 flex items-center cursor-pointer space-x-1">

                <Editicon onClick={() => setEditMode(true)}/>   
                <Deleteicon onClick={() => deleteTodo(todo)} />
                    
            </button> 
        </div>

        )

    }   

        
        </li>
        
    </div>
    )
}