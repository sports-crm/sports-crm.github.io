import * as React from "react";

import {Link} from "gatsby";
import {useState} from 'react';
import {Dropdown, useDropdownMenu, useDropdownToggle} from "react-overlays";

import Logo from "../../images/logo.png";
import styles from "./navbar.module.scss";

const Burger = () => {
    const [props, {show, toggle}] = useDropdownToggle();

    const burgerStyles = [styles.navbarBurger];
    if (show === true) {
        burgerStyles.push(styles.isActive);
    }

    const handleClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        toggle(!show, evt);
    }

    return <a id="navbar-burger" role="button" className={burgerStyles.join(' ')} {...props} aria-label="menu" aria-expanded={show} data-target="navbar-menu" onClick={handleClick}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

}

const Menu = () => {
    const { show, props: {style, ...props} } = useDropdownMenu({
        flip: true,
        offset: [0, 8],
    });
    const menuStyles = [styles.navbarMenu];
    if (show === true) {
        menuStyles.push(styles.isActive);
    }

    return <div id="navbar-menu" className={menuStyles.join(' ')} {...props}>
        <div className={styles.navbarEnd}>
            <Link to="/blog" className={styles.navbarItem}>Blog</Link>
            <Link to="/docs" className={styles.navbarItem}>Docs</Link>
        </div>
    </div>
}

export function Navbar() {
    const [show, setShow] = useState(false);

    const handleToggle = (nextShow: boolean) => {setShow(nextShow)};

    return <Dropdown show={show} onToggle={handleToggle}>
        {({props}) => (
            <nav {...props} className={[styles.navbar, styles.isLight].join(' ')} role="navigation" aria-label="main navigation">
                <div className={styles.navbarBrand}>
                    <Link to="/" className={[styles.logo].join(' ')} ><img src={Logo}/></Link>
                    <Burger/>
                </div>
                <Menu/>
            </nav>
        )}
    </Dropdown>
}