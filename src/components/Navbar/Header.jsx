import React from "react";
import logo from "../../assets/logo.png";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/chethan-jodidhar/about-us",
    },
    // {
    //   name: "Team",
    // },
    {
      name: "Projects",
    },
    {
      name: "Gallery",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <main className="">
      <header className="container mx-auto">
        <section className="flex items-center justify-between">
          {/* Logo */}
          <figure>
            <img src={logo} className="w-28" alt="chetan_cinemas_logo" />
          </figure>

          {/* Navigation Menu */}
          <nav>
            <ul className="flex gap-10 uppercase">
              {menuItems.map((item, index) => {
                return (
                  <Link to={item.link}>
                    <li
                      key={index}
                      className="cursor-pointer text-lg font-normal"
                    >
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </section>
      </header>
    </main>
  );
};

export default Header;
