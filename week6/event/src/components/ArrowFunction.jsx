const ArrowFunction = () => {

//   const handleClick = () => {
//     console.log("Button Clicked!");
//   };

  return (
    <>
      <h1>Arrow Function in React</h1>
      {/* <button onClick={handleClick}>Click me!</button> */}
      <button onClick={() => {console.log("Button Clicked")}}>Arrow Function Button</button>
    </>
  );
};

export default ArrowFunction;
