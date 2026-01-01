import "./App.css";
import "./styles/utilities.css";
import "./styles/design-system.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout/Layout";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
