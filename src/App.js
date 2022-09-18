import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return <h1>This is Shop !</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
