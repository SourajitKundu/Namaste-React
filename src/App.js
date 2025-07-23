import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//React.createElement => object => when rendered becomes an HTML element

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restuarant Container
 * -- Restuarant Card
 * --- Image
 * --- Name of Res, Star Rating, cuisines, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
