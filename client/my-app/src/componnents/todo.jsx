const Todo = (props) => {
    return (
        <>
           {console.log(props)}
            <h3 style={{ color: "red", background: "blue" }}>id={props.task.id} , name={props.task.name} </h3>
            <button onClick={()=>{props.dispatch({type:"DELETE", by:props.task})}}>Delete</button>
        </>
    )
}
export default Todo;