import { Button, Form } from "react-bootstrap";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FormControlLabel, Switch, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function Header(props) {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkmode")
      ? localStorage.getItem("darkmode") === "true"
      : false
  );
  const handleDarkMode = () => {
    console.log(darkMode);
    localStorage.setItem("darkmode", !darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Pattaya",
            padding: "10px 5% ",
            fontStyle: "normal ",
            fontWeight: 400,
            fontSize: 30,
            color: darkMode ? "#ffffff" : "#333333",
          }}
        >
          Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex" style={{ width: 419, height: 43 }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  props.searchItem(e.target.value);
                }}
              />
            </Form>
            <Nav.Link
              href="#Explore"
              style={{
                marginLeft: "1rem",
                color: darkMode ? "#ffffff" : "#333333",
              }}
            >
              Explore
            </Nav.Link>
            <Nav.Link
              href="#Collection"
              style={{
                marginLeft: "1rem",
                color: darkMode ? "#ffffff" : "#333333",
              }}
            >
              Collection
            </Nav.Link>

            <Nav.Link
              href="#Community"
              style={{
                marginLeft: "1rem",
                color: darkMode ? "#ffffff" : "#333333",
              }}
            >
              {" "}
              Community
            </Nav.Link>
            <Nav style={{ marginLeft: "1rem" }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AntSwitch
                  checked={darkMode}
                  type="checkbox"
                  onChange={handleDarkMode}
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography style={{ color: darkMode ? "#ffffff" : "#333333" }}>
                  Dark mode
                </Typography>
              </Stack>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
