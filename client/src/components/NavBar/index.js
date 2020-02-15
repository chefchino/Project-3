import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navtabs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/electronics">Electronics</NavLink>
            </NavItem>
          </Nav>
              <NavLink href="/cart">Cart</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navtabs;


// import React from "react";
// import { Link } from "react-router-dom";



// function NavTabs() {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/electronics"
//           className={window.location.pathname === "/electronics" ? "nav-link active" : "nav-link"}
//         >
//           Electronics
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/cart"
//           className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
//         >
//           Cart
//         </Link>
//       </li>

//     </ul>
//   );
// }

// export default NavTabs;
