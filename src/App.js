import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, useState, Suspense } from "react";
import data from "./data.js";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main";

// import Detail from './routes/Detail';
// import Event from './routes/Event';
// import Cart from './routes/Cart';
const Detail = lazy(() => import("./Routes/Detail.js"));
const Event = lazy(() => import("./Routes/Event.js"));
const Cart = lazy(() => import("./Routes/Cart.js"));

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route path="*" element={<div>404페이지</div>} />
          <Route path="/" element={<Main />} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>

          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
