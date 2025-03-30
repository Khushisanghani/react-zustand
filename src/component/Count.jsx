import useCount from "../store/Count"
function Count(){
    const {count,increment,decrement,removecount} = useCount();
  // console.log(obj)
    return(
        <>
            <h1> Count :{count}</h1>
            <button onClick={() => increment()}>Increment</button>&nbsp;
            <button onClick={() => decrement()}>Decrement</button>&nbsp; 
            <button onClick={() => removecount()}>Remove</button>
        </>
    )
}
export default Count