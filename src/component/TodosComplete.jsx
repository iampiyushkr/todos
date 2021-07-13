export function Complete({CompleteList}) {
    return <div>
       
        {CompleteList.map(e => <div style={{ color: e.color }}><h1>{e.Title} </h1>{e.status?"Done":"Not Done" }</div>)}
    </div>
}