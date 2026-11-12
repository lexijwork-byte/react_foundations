import { useState } from "react";

const CountDisplay = (props) => {
  return <h1>{props.count}</h1>;
};

const CountButton_inc = (props) => {
  const incrementCounter = () => {
    props.setCount(props.count + 1);
  };

  return <button onClick={incrementCounter}>Increment the counter</button>;
};

const CountButton_dec = (props) => {
  const decrementCounter = () => {
    props.setCount(props.count - 1);
  };

  return <button onClick={decrementCounter}>Decrement the counter</button>;
};


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountDisplay count={count} />
      <CountButton_inc setCount={setCount} count={count} />
      <CountButton_dec setCount={setCount} count={count} />
    </div>
  );
};

export default Counter;