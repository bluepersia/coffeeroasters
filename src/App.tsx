import type { JSX } from "react/jsx-runtime";
import "./App.scss";

function App(): JSX.Element {
  return (
    <div className="container">
      <h1 className="text1">The quick brown fox jumps over the lazy dog.</h1>
      <p className="text2">The quick brown fox jumps over the lazy dog. 2</p>
      <p className="text3">The quick brown fox jumps over the lazy dog. 3</p>
      <p className="text4">The quick brown fox jumps over the lazy dog. 4</p>
      <p className="text5">The quick brown fox jumps over the lazy dog. 5 </p>
      <p className="text6">The quick brown fox jumps over the lazy dog. 6</p>
      <p className="text7">The quick brown fox jumps over the lazy dog. 7</p>
      <p className="text8">The quick brown fox jumps over the lazy dog. 8</p>
    </div>
  );
}

export default App;
