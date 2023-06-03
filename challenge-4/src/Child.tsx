import { useContext } from "react"
import { CounterContext } from "./Parent";

export const Child = () => {

    const context = useContext(CounterContext);
    const { handleIncrement, handleReset } = context;

    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}