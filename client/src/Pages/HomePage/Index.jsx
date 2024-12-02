import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/Login/Index.jsx";
import { Grid, Typography, Button, TextField } from "@mui/material";
import landingimage from "../../Assets/landing_image.jpeg";
import whyImage from "../../Assets/whyus.jpg";
import aboutImage from "../../Assets/aboutus.jpg";
import "@fontsource/outfit";

function Index() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Grid container>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
        <Navbar setShowLogin={setShowLogin} />

        {/* Home Section */}
        <Grid
          sx={{
            display: "flex",
            minHeight: "60vh",
            paddingX: "150px",
            marginTop: "80px",
            alignItems: "center",
          }}
        >
          <Grid
            xs={12}
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
                color: "#176CC7",
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
              and reviewing results, we’ve got you covered.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                // backgroundColor: "#000080",
                borderRadius: "20px",
                fontFamily: "outfit",
              }}
            >
              Explore More
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <img
              src={landingimage}
              alt="landing_image"
              style={{
                width: "100%",
                maxWidth: "600px",
              }}
            />
          </Grid>
        </Grid>

        {/* Why Us Section */}
        <Grid
          id="why-us"
          sx={{
            display: "flex",
            minHeight: "70vh",
            paddingX: "150px",
            alignItems: "center",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              paddingX: "50px",
            }}
          >
            <img
              src={whyImage}
              alt="why_us_image"
              style={{
                width: "100%",
                maxWidth: "600px",
              }}
            />
          </Grid>
          <Grid
            xs={12}
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
                color: "#176CC7",
                fontWeight: "900",
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography
              sx={{
                fontFamily: "outfit",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              Our platform offers unique features that streamline your hiring
              process, saving you time and resources while ensuring accuracy.
            </Typography>
          </Grid>
        </Grid>

        {/* About Us Section */}
        <Grid
          id="about-us"
          sx={{
            display: "flex",
            minHeight: "70vh",
            paddingX: "150px",
            alignItems: "center",
          }}
        >
          <Grid
            xs={12}
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
                color: "#176CC7",
                fontWeight: "900",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "outfit",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              We are committed to revolutionizing recruitment processes by
              providing innovative tools that prioritize user experience and
              efficiency.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              paddingX: "50px",
            }}
          >
            <img
              src={aboutImage}
              alt="about_us_image"
              style={{
                width: "100%",
                maxWidth: "600px",
              }}
            />
          </Grid>
        </Grid>

        {/* Contact Us Section */}

        <Grid
          id="contact-us"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            minHeight: "70vh",
            paddingX: "150px",
            alignItems: "center",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              paddingX: "80px",
            }}
          >
            <form>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
                size="small"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "20px",

                  borderRadius: "20px",
                  fontFamily: "outfit",
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid
            xs={12}
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
                color: "#176CC7",
                fontWeight: "900",
                marginBottom: "20px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "outfit",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Got questions? We’re here to help. Reach out to us via email or
              phone, and our support team will assist you promptly.
            </Typography>
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    </div>
  );
}

export default Index;
