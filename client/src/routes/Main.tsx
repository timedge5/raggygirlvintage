import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Quilts } from "../pages/Quilts";
import { Pillows } from "../pages/Pillows";
import { Bunting } from "../pages/Bunting";

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop/quilts" element={<Quilts />} />
      <Route path="/shop/pillows" element={<Pillows />} />
      <Route path="/shop/bunting" element={<Bunting />} />
    </Routes>
  );
};
