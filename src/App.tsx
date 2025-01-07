import Navbar from "./components/Layout/Navbar";
import { Button } from "./components/ui/button";
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
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default App
