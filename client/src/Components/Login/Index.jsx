import { Typography, Grid, Button, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
const Index = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [token, setToken] = useState("");
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    dateofbirth: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = "http://localhost:8000";
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <Grid
      sx={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000090",
        display: "grid",
      }}
    >
      <Grid
        sx={{
          placeSelf: "center",
          color: "#808080",
          backgroundColor: "white",
          display: "flex",
          width: "550px",

          flexDirection: "column",
          gap: "25px",
          padding: "25px",
          borderRadius: "8px",
          fontSize: "14px",
          animation: "fadeIn 500",
        }}
      >
        <form onSubmit={onLogin}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "20px",
                color: "black",
              }}
            >
              <strong> {currState} </strong>
            </Typography>
            <Typography
              onClick={() => setShowLogin(false)}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              {" "}
              X{" "}
            </Typography>
          </Grid>
          <Grid>
            {currState === "Login" ? (
              <></>
            ) : (
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  placeholder="Enter Your Name"
                  name="fullName"
                  onChange={onChangeHandler}
                  value={data.fullName}
                  size="small"
                  autoFocus
                  sx={{
                    "& .MuiInputBase-input": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="age"
                  placeholder="Enter Your Age"
                  name="age"
                  onChange={onChangeHandler}
                  value={data.age}
                  size="small"
                  autoFocus
                  sx={{
                    "& .MuiInputBase-input": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="gender"
                  placeholder="Enter Your Gender"
                  name="gender"
                  onChange={onChangeHandler}
                  value={data.gender}
                  size="small"
                  autoFocus
                  sx={{
                    "& .MuiInputBase-input": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="dateofbirth"
                  placeholder="Enter Your Date of Birth"
                  name="dateofbirth"
                  onChange={onChangeHandler}
                  value={data.dateofbirth}
                  size="small"
                  autoFocus
                  sx={{
                    "& .MuiInputBase-input": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                    "& .MuiInputLabel-root": {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                    },
                  }}
                />
              </div>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              autoComplete="email"
              size="small"
              autoFocus
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
              }}
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              onChange={onChangeHandler}
              value={data.password}
              id="password"
              size="small"
              autoComplete="current-password"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
              }}
            />

            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              sx={{
                // backgroundColor: "#000080",
                fontSize: "12px",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {currState === "Login" ? "Login" : "Create account"}
            </Button>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              gap: "6px",
            }}
          >
            <Checkbox required />
            <Typography
              sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              By continuing, I agree to the terms and conditions of use &
              privacy policy.
            </Typography>
          </Grid>
          {currState === "Login" ? (
            <Typography
              sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              Create a new account ?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                style={{ cursor: "pointer", color: "#000080" }}
              >
                {" "}
                Register here
              </span>
            </Typography>
          ) : (
            <Typography
              sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              Already have an account ?{" "}
              <span
                onClick={() => setCurrState("Login")}
                style={{ cursor: "pointer", color: "#000080" }}
              >
                Login here
              </span>
            </Typography>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default Index;
