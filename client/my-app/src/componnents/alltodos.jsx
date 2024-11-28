import { useReducer,  useRef , useState} from "react"
import Todo from './todo';

const Alltodos=()=>{
    const update=(state, action)=>{
        switch (action.type) {
            case "ADD":
                const newarr = state.map(a=>{return {id:a.id,name :a.name}})
                newarr.push(action.by)
                return newarr
            case "DELETE":
                return state.filter(a=>a.id!=action.by.id && a.name!=action.by.name )
                default: throw new Error()

           
        }



    }

   const intial = [{id:1,name:"clean the floor"},{id:2,name:"wash the dishes"},{id:3,name:"cooking"}]
   const [tasks, dispatch] = useReducer(update,intial)
   const refid=useRef(0)
   const refname = useRef("")
   return(
    <>
     
        <labal>id:</labal>
        <input type="number" ref={refid}/>
        <labal>name:</labal>
        <input type="text" ref={refname}/>
        <button onClick={()=>{dispatch({type:"ADD", by:{id:refid.current.value, name:refname.current.value}})}}>Add</button>
        {tasks.map((t)=>{return <Todo task={{id:t.id,name :t.name}} dispatch={dispatch}/>})}

    </>
);}
export default Alltodos

