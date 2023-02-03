import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";

export default function NavbarModule() {
  const [toggle, setToggle] = useState(false);
  const handleCheck = () => {
    setToggle((prev) => !prev);
  };

  console.log(XYZ);

  return (
    <NavbarContainer color={switchTheme}>
      <nav className={styles.navbar}>
        <div className={styles.logoNav}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.navItems}>
          <Link href="#" className={styles.navItem}>
            Home
          </Link>
          <Link href="/todos" className={styles.navItem}>
            Todos
          </Link>
          <Link href="#" className={styles.navItem}>
            Services
          </Link>
          <Link href="#" className={styles.navItem}>
            About us
          </Link>
          <button
            className={styles.buttonSwitchTheme}
            onClick={handleSwitchTheme}
          >
            Change theme
          </button>
          <button
            className={styles.buttonSwitchTheme}
            onClick={handleSwitchTheme}
          >
            Switch Theme
          </button>
          <button className={styles.navContact}>Contact Us</button>
        </div>
        <button href="#" id={styles.navButton}>
          <IoClose size={45} color="#00796b" onClick={handleCheck} />
        </button>
      </nav>
    </NavbarContainer>
  );
}
export const NavbarContainer = styled.section`
  background-color: ${(props) => props.color};
`;
