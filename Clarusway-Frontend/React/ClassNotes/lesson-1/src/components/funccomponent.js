function FuncComp({ old, color }) {
  // const old = myprops.old;
  // const { old } = myprops;
  return (
    <div>
      <h1>Welcome to React JS from functional component</h1>
      <p> Age: {old}</p>
      <p> Age: {old}</p>
      <p> Color: {color.toUpperCase()}</p>
      <p> Age: {old}</p>
    </div>
  );
}

export default FuncComp;
