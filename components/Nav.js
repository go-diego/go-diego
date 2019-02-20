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

class Nav extends React.Component {
    state = {
        isNavbarOpen: false
    };

    // handleToggleNavbar = () => {
    //     const {isNavbarOpen} = this.state;
    //     this.setState({isNavbarOpen: !isNavbarOpen});
    // };

    render() {
        const {isNavbarOpen} = this.state;
        const {router} = this.props;
        return (
            <nav
                className="shadow-sm navbar has-background-white is-fixed-top is-flex"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="has-background-light navbar-item">
                            <img src="/static/logo.png" />
                        </a>
                    </Link>
                    {/* <a href={`mailto:${email}`} className="navbar-item">
                        <i
                            className={`fas fa-at ${
                                router.pathname === "/" ? "animated bounceIn delay-1s" : ""
                            }`}
                        />
                    </a> */}
                    {/* <a
                        onClick={this.handleToggleNavbar}
                        role="button"
                        className={`navbar-burger burger ${isNavbarOpen ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarItemsWrapper">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a> */}
                </div>

                {/* <div
                    id="navbarItemsWrapper"
                    className={`navbar-menu ${isNavbarOpen ? "is-active" : ""}`}>
                    <div className="navbar-start" />
                    <div className="navbar-end">
                        <Link href="/work">
                            <a
                                className={`is-family-secondary is-uppercase navbar-item ${
                                    router.pathname === "/work" ? "is-active" : ""
                                }`}>
                                Work
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a
                                className={`is-family-secondary is-uppercase navbar-item ${
                                    router.pathname === "/contact" ? "is-active" : ""
                                }`}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div> */}
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
}

export default withRouter(Nav);
