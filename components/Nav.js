import Link from "next/link";
import {withRouter} from "next/router";
import styled from "styled-components";

const NavbarEnd = styled.div`
    justify-content: flex-end;
    margin-left: auto;
    align-items: stretch;
    display: flex;
    span {
        padding: 0 6px;
    }
`;

const NavbarItem = styled.a`
    align-items: center;
    display: flex;
`;

export default function Nav() {
    return (
        <nav
            className="has-shadow-small navbar has-background-white is-fixed-top is-flex"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <img src="/static/logo.png" />
                    </a>
                </Link>
            </div>
            <NavbarEnd>
                <NavbarItem
                    href="mailto:hola@godiego.me"
                    className="has-background-light navbar-item">
                    <span className="heading is-size-7">Contact Me!</span>
                    <span>
                        <i className="fas fa-at is-size-4" />
                    </span>
                </NavbarItem>
            </NavbarEnd>
        </nav>
    );
}
