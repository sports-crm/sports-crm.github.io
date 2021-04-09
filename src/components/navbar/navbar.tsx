import * as React from "react";

import {Link} from "gatsby";
import {useState} from 'react';
import {Dropdown, useDropdownMenu, useDropdownToggle} from "react-overlays";

import * as styles from './navbar.module.scss';
import Logo from "../../images/logo.png";

const Burger = () => {
    const [props, {show, toggle}] = useDropdownToggle();

    const burgerStyles = [styles.navbarBurger];
    if (show === true) {
        burgerStyles.push(styles.isActive);
    }

    const handleClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        toggle(!show, evt);
    }

    return <a id="navbar-burger" role="button" className={burgerStyles.join(' ')} aria-label="menu" aria-expanded={show} data-target="navbar-menu" onClick={handleClick}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

}

const Menu = () => {
    const [ props,  {show}] = useDropdownMenu({
        flip: true,
        offset: [0, 8],
    });
    const menuStyles = [styles.navbarMenu];
    if (show === true) {
        menuStyles.push(styles.isActive);
    }

    return <div id="navbar-menu" className={menuStyles.join(' ')}>
        <div className={styles.navbarEnd}>
            <Link to="/blog" className={styles.navbarItem}>Blog</Link>
            <Link to="/docs" className={styles.navbarItem}>Docs</Link>
        </div>
    </div>
}

export function Navbar() {
    const [show, setShow] = useState(false);

    const handleToggle = (nextShow: boolean) => {setShow(nextShow)};

    const DropDownContents = ({props}: any) => (
        <nav {...props} className={[styles.navbar, styles.isLight].join(' ')} role="navigation" aria-label="main navigation">
            <div className={styles.navbarBrand}>
                <Link to="/" className={styles.logo}><img src={Logo}/></Link>
                <Burger/>
            </div>
            <Menu/>
        </nav>
    );

    return <Dropdown show={show} onToggle={handleToggle}>
        <DropDownContents/>
    </Dropdown>
}