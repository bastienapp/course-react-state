import { useState } from 'react';

function Counter(props) {
  const { init } = props;

  const [count, setCount] = useState(init);
  const [active, setActive] = useState(false);

  const addOne = () => {
    setCount(count + 1);
    setActive(!active);
  };

  console.log('render');

  // JSX
  return (
    <div className='Counter'>
      <p>Counter: {count}</p>
      <p>{active ? 'Enabled' : 'Disabled'}</p>
      <button type='button' onClick={addOne}>
        +1
      </button>
    </div>
  );
}

export default Counter;
