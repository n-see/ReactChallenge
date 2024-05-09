import { useState } from "react";

const Content = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter((prevCount) => prevCount + 1)
    }
    const handleDecrease = () => {
        if(counter < 1){
            return alert("Can't go below zero (╯°□°)╯︵ ┻━┻");
        }
        setCounter((prevCount) => prevCount - 1)
    }
    const handleReset = () => {
        setCounter(0);
    }

  return (
    <>
    <main className="d-flex justify-content-center">
        <div className="row">
        <div  className="d-flex justify-content-center">
        <h2>The Counter is: {counter}</h2>
        </div>
        <div className="btnGroup">
            <button className="btn btn-success" onClick={handleIncrease}>+</button>
            <button className="btn btn-danger" onClick={handleDecrease}>-</button>
            <button className="btn btn-warning" onClick={handleReset}>Reset</button>
        </div>
        </div>
    </main>
    </>
  )
}

export default Content