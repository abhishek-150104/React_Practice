
import { StrictMode } from "react";

import { createRoot } from 'react-dom/client'
import Header from "./Header,jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <Header/>
    <Footer/>
  </StrictMode>
)
