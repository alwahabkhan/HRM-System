import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../Assets/logo3.png";
import { useState } from "react";
import { Link } from "react-scroll";
import "@fontsource/outfit";
import { useNavigate } from "react-router-dom";

const Index = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (menuItem) => {
    if (menuItem === "home") {
      navigate("/");
    }
    setMenu(menuItem);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Grid container alignItems="center">
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 34,
                letterSpacing: ".3rem",
                color: "#e1711c",
                display: { xs: "block", sm: "block" },
                cursor: "pointer",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="logo"
                onClick={() => navigate("/")}
                style={{ width: "70px" }}
              />
            </Typography>
          </Grid>

          <Grid
            item
            xs={0}
            sm={4}
            md={5}
            lg={4}
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
            }}
          >
            {["home", "Why-us", "about-us", "contact-us"].map((item) => (
              <Typography
                key={item}
                sx={{
                  paddingX: "10px",
                  cursor: "pointer",
                  borderBottom: menu === item ? "2px solid #000080" : "none",
                  fontFamily: "Outfit, sans-serif",
                  color: "#000080",
                }}
              >
                <Link
                  to={item === "home" ? "/" : item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => setShowLogin(true)}
              sx={{
                backgroundColor: "#000080",
                border: "1px solid #000080",
                color: "white",
                borderRadius: "20px",
                fontFamily: "outfit",
                paddingX: "20px",
              }}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
