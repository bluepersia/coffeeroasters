import "./App.css";
import "./styles/utilities.css";
import "./styles/design-system.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout/Layout";
import Home from "./components/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
