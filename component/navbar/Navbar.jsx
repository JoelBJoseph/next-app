"use client";

import styles from "./Navbar.module.css"
import NavLink from "./navLink/NavLink.jsx"
import Link from "next/link";
import {useState} from "react";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {

    const[open,setOpen] = useState(false)

    const session = false;
    const isAdmin = false;

    return (
        <nav className={styles.container}>
            <div>
                <Link className={styles.logo} href={"/"}>solidServe</Link>
            </div>
            <div>
                <ul className={styles.ul}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                    ))}
                    {
                        session ? (
                            <>
                                {isAdmin &&
                                    <NavLink item={{title: "Admin", url: "/admin"}}/>}
                                <button>Logout</button>
                            </>
                        ) : (
                            <NavLink item={{title: "Login", url: "/login"}}/>
                        )
                    }
                </ul>
            </div>
            <button onClick={() => setOpen(prev => !prev)} className={styles.menu}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                        ))}
                </div>
            }
        </nav>
    );
}
export default Navbar