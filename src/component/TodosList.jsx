import {TodosItem} from "./TodosItem"
export function TodosList({ todosList,handleDelete , handleToggle,handleComplete}) {
    if (todosList.length < 1) {
        return <h1>No item</h1>
     }
    return <>{todosList.map(el=><TodosItem handleComplete={handleComplete} handleToggle={ handleToggle} handleDelete={handleDelete} key={el.id} item={el}/>)}</>
    
}