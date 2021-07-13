// import { useState } from "react";
 import { useState } from "react";
import { TodosInput } from "./TodosInput";
import { TodosList } from "./TodosList"
 import {Complete} from "./TodosComplete"

export default function Todos({addTodos}) {
    const [Todos, setTodos] = useState([])
    const [isFilter, setIsFilter] = useState(false)
    const [completeTodos, setCompleteTodos] = useState([])
    const [isFilter1, setIsFilter1] = useState(true)
    
    const handleAddTodos = (item) => {
        setTodos([...Todos, item])
    };
    const handleFilter = () => {
        setIsFilter(!isFilter)
    }
    const handleDelete = (id) => {
        const completeTodos1 = Todos.filter(el => (el.id === id))
        const completeTodos2=completeTodos1[0]
        
        setCompleteTodos([...completeTodos,completeTodos2])
        const newTodos1 = Todos.filter(el => (el.id !== id))
        setTodos(newTodos1)
        console.log(completeTodos)
    }
    const handleToggle = (status, id) => {
        
        const newTodo = Todos.map(el => (
            el.id === id ? { ...el, status: !status } : el
      ))
        setTodos(newTodo)
        
    }
    const handleComplete = (title) => {
        const newTodos2 = Todos.map(e => (
            e.Title === title ? { ...e, color:"green"}:e
        ))
    
        setTodos(newTodos2)
    }
    const handleShow = () => {
        setIsFilter1(!isFilter1)
    }
    return <div>
        <TodosInput addTodos={handleAddTodos} />
        <TodosList  handleComplete={handleComplete}  handleToggle={ handleToggle} handleDelete={handleDelete} todosList={Todos.filter((e) => (isFilter ? e.status === true:e))} />
       
        <button onClick={handleFilter}>toggle</button>
        <button onClick={handleShow}>Show Complete Todo</button>
         <Complete CompleteList={completeTodos.filter(e=>(isFilter1?e.id===1:e))}/>
       
    </div>
}