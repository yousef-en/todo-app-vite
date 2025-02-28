import { useState } from "react";
import TodoList from "./TodoLiset";
import { v4 as uuidv4 } from 'uuid';


export default function Todo(){

    const [ todos ,settodos] = useState([

        {
            id: uuidv4(),
            title: " go to school and read book",
            status : true
        },
        {
            id : uuidv4(),
            title: "go to gym at 17:00",
            status : false
        }
    ])


    const [newtodotitle , setnewtodotitle ] = useState('')


    const onInputNewTodohandler =(event) =>{

        setnewtodotitle(event.target.value)
        console.log(todos)
    }


    const addNewInputhandler =(event) =>{

        if (event.key === 'Enter' && newtodotitle !== ''  ){

            settodos([
                ...todos,{

                    title: newtodotitle,
                    status : false,
                    id : uuidv4()
                }
            ])

            setnewtodotitle('')
        }
   
    }

    const deleteTodoHandler = (todo) => {   //Delete List
      
        let newTodo = todos.filter( (todoItem) => {
            return todo.id != todoItem.id ;
        })
       
        settodos(newTodo)
    }           


    const toggleTodoStatushandler =(todo)=>{         //edit list 
     
        let newTodos = todos.map((todoItem)=>{

            if(todo.id === todoItem.id ){
                todoItem.status =! todoItem.status;
            }

            return todoItem
        })

        settodos(newTodos)
    }

    const editTodotitleHandler =(todo, newTitleValue)=>{        
     
        let newTodos = todos.map((todoItem )=>{

            if(todo.id === todoItem.id ){
                todoItem.title =  newTitleValue
            }

            return todoItem
        })

        settodos(newTodos)
    }
    return(

        <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
            <div className="flex items-center mb-6">
                <h1 className="mr-6 text-4xl font-bold text-purple-600 "> TO DO APP</h1>
            </div>
            <div className="relative">
                <input type="text" placeholder="What needs to be done today?"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"

                 onKeyDown={addNewInputhandler} 
                 onChange={onInputNewTodohandler}
                 value={newtodotitle}
                 
                 />
            </div>
            <TodoList todos ={todos} deleteTodo ={deleteTodoHandler} toggleTodoStatus={toggleTodoStatushandler} editTodoTitle={editTodotitleHandler}  />
           
        </div>
    </div>

    )
}