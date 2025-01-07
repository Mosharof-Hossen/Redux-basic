import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((count) => count.MyCounter.count);
  
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount))
  }
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  }


  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl font-bold">Counter with Redux</h1>
      <div className="space-x-2">
        <button onClick={() => handleIncrement(1)} className="border-2 p-2 rounded-md">Increment</button>
        <button className="text-xl">{value}</button>
        <button onClick={() => handleDecrement(1)} className="border-2 p-2 rounded-md">Decrement</button>
      </div>
    </div>
  )
}

export default App
