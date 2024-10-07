import React, { useContext } from "react";
import MyContext from "../../context/MyContext";

const Footer = () => {
  const dev = useContext(MyContext); // consumer

  return (
    <footer className="footer py-4 text-center">
      <p className="text-capitalize mb-0">powered by {dev}</p>
    </footer>
  );
};

export default Footer;
