import React from "react";
import Link from "next/link";
import style from "@/app/_styles/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/shows">Shows</Link>
        </li>
        <li>
          <Link href="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
