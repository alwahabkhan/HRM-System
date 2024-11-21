import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/Login/Index.jsx";
import { Grid, Typography, Button } from "@mui/material";
import landingimage from "../../Assets/landing_image.jpeg";
import "@fontsource/outfit";
function Index() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <Grid container>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Grid
          sx={{
            display: "flex",
            minWidth: "100%",
            paddingX: "150px",
            marginTop: "80px",
          }}
        >
          <Grid
            xs={6}
            sm={6}
            md={6}
            lg={6}
            sx={{
              paddingX: "50px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "outfit",
                fontSize: "40px",
                color: "#000080",
                fontWeight: "900",
              }}
            >
              Revolutionize Your Recruitment Journey
            </Typography>
            <Typography
              sx={{
                fontFamily: "outfit",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              Simplify every step of the hiring process with our powerful HR
              portal. From managing candidate details to scheduling assessments
              and reviewing results, we’ve got you covered. Ensure seamless
              communication, enhance productivity, and make data-driven
              decisions with ease. Empower your HR team to focus on what matters
              most – finding the perfect fit for your organization.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                backgroundColor: "#000080",
                borderRadius: "20px",
                fontFamily: "outfit",
              }}
            >
              Explore More
            </Button>
          </Grid>
          <Grid xs={6} sm={6} md={6} lg={6}>
            <img
              src={landingimage}
              alt="landing_image"
              style={{
                width: "600px",
              }}
            />
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

export default Index;
