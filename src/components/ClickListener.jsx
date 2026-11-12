

const ClickListener = () => {
  // Defining handleClick inside the ClickListener component.
  const handleClick = () => {
    console.log('click!');
  };

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
};

export default ClickListener;