import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Design, Home, NotFound, Products, Sales } from "./pages/";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <main className="flex relative overflow-hidden">
        <aside className="w-[20vw] hidden lg:block fixed">
          <Sidebar />
        </aside>
        <section className="relative left-0 lg:left-[20vw] overflow-y-auto w-screen lg:w-[80vw]">
          <Header />
          <main className="mt-[7vh] lg:mt-0">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products" exact element={<Products />} />
              <Route path="/design" element={<Design />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
