//app//
import "./styles.css";
import Display from "./Display";

export default function app() {
  return (
    <div className="App">
      <h1>Hello Students</h1>
      <h2>Props Function Example</h2>
      <div className="list">
        <Display name="Lajja" class="BCA 2" />
        <Display name="preet" class="BCA 2" />
        <Display name="karan" class="BCA 2" />
        <Display name="bhavesh" class="BCA 2" />
        <Display name="harshita" class="BCA 2" />
        <Display name="pooja" class="BCA 2" />
        <Display name="Rehan" class="BCA 2" />
      </div>
    </div>
  );
}
