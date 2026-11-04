import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColorCursor from "@/components/ColorCursor";
import Index from "@/pages/Index";

const App = () => (
  <BrowserRouter>
    <ColorCursor />
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;