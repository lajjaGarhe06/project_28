//app//
import "./style.css";
import Display from "./dispaly";

export default function app() {
  return (
    <div className="App">
      <h1> Hello Students </h1>
      <h2> Props Function Example </h2>
      <div className="list">
        <Display name="Lajja" class="BCA 2" />
        <Display name="preet" class="BCA 2" />
        <Display name="harshita" class="BCA 2" />
        <Display name="Pooja" class="BCA 2" />
        <Display name="Bhavesh" class="BCA 2" />
        <Display name="Rehan" class="BCA 2" />
      </div>
    </div>
  );
}
