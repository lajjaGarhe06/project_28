function Display() {
  return (
    <div>
      {" "}
      <h1>Display Function</h1>
    </div> // without using props//
  );
}
export default Display;

function Display(props) {
  return <h1> Display {props.name} </h1>; //using props//
}
