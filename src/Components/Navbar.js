import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../helpers/NavLinks";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="container p-8 flex  justify-between shadow-xl">
      {/* logo section */}
      <div className="flex text-2xl font-bold text-red-950">
        Farmar's portal
      </div>

      <div className="hiddern md:block">
        <ul className="flex items-center gap-10">
          {isLoggedIn ? (
            <>
              {NavbarMenu.map((item) => {
                return (
                  <Link
                    to={item.link}
                    className="font-semibold text-red-950 hover:underline cursor-pointer"
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="font-semibold ">
                Login
              </Link>
              {"|"}

              <Link to={"/register"} className="font-semibold ">
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
      {/* menu section */}
    </div>
  );
}

export default Navbar;
