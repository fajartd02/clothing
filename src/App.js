import Home from "./routes/home/home.component";
import { Route, Routes, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </>
  );
};

const Shop = () => {
  return <h1>This is Shop !</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
