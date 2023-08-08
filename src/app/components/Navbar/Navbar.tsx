import Link from "next/link";
import React from "react";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/signup",
    title: "Sign Up",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="lg:flex lg:items-center lg:justify-between px-8 py-2">
        <h2 className="text-2xl font-bold font-mono">FixYourMotoro</h2>
        <ul className="lg:flex lg:gap-5 lg:justify-around lg:items-center">
          {navLinks.map(({ path, title }) => (
            <li className="font-medium text-xl" key={path}>
              <Link href={path}> {title} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
