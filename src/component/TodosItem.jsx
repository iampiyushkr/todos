export function TodosItem({item,handleDelete, handleToggle,handleComplete}) {
    return <div>
        <h1 style={{ color: item.color}} onClick={() => {
            handleComplete(item.Title)
        }}>{item.Title}</h1>
        Status: {item.status ? "Done" : "Not Done"}
        <button onClick={() => {
            handleDelete(item.id)
        }}>Delete</button>
        <button onClick={() => {
            handleToggle(item.status,item.id)
        }}>Toggle</button>
    </div>
}