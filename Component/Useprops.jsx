import React , {useState} from "react"
function usereactstate(){
    const [counter , setcounter ] =  usestate (0);
    function increasevalue(){
        setcounter (counter+5);
    }
    return(
        <div>
            <h2 style = {{color: 'green'}}> usereactstate</h2>
            <h1 style = {{color: 'red'}}> counter  =  {counter}</h1>
            

        </div>

    )
}
export default usereactstate