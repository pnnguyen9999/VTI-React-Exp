import { Question1, Question2a, Question2b, Question3, Question3WithClassName, Question3b, Question3c, Question4a, Question4c } from "./components/Bai1";
import { Question2q1, Question2q1Function } from "./components/Bai2";

function App() {
  return (
    <>
      <Question1 />
      <Question2a />
      <Question2b />
      <Question3 />
      <Question3WithClassName />
      <Question3b />
      <Question3c />
      <br />
      <Question4a />
      <br />
      <Question4c />
      <br />
      <div style={{ display: "flex", gap: 10 }}>
        <Question2q1 />
        <Question2q1 />
        <Question2q1 />
      </div>
      <br />
      <div style={{ display: "flex", gap: 10 }}>
        <Question2q1Function />
        <Question2q1Function />
        <Question2q1Function />
      </div>
    </>
  );
}

export default App;
