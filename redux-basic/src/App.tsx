import {
  decrement,
  increment,
  incrementByFive,
} from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <section className="flex mt-5">
      <button
        onClick={() => dispatch(increment())}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ms-3 me-3"
      >
        increment
      </button>
      <button
        onClick={() => dispatch(incrementByFive(5))}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ms-3 me-3"
      >
        increment by five
      </button>
      <div className="me-3"> {count} </div>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        decrement
      </button>
    </section>
  );
}

export default App;
