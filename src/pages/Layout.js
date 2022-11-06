import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (props.data != null && props.data.record != null) {
            setRecords(props.data.record);
        }
    });

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Start</Nav.Link>
                        {records.map((record, index) => {
                            return <Nav.Link key={index} href={"/area/" + index}>Område {index + 1}</Nav.Link>
                        })}
                        <Nav.Link href="/Webservice">Webservice</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Outlet />
            </Container>
        </>
    )
};

export default Layout;