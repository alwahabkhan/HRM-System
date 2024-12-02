import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, TextField, FormGroup, Box } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Register from "../../Assets/signup.jpg"
import "@fontsource/outfit";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "14px",
                    height: "36px",

                },
                input: {
                    fontSize: "14px",
                    padding: "6px 12px",

                },
            },
        },
    },
});

function Index() {
    const [data, setData] = useState({
        email: "",
        password: "",
        dateOfBirth: null,
    });
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = axios.post("http://localhost:8000/api/user/login", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                data
            })
            console.log(response);

            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.log(error.message);

        }

    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }))
    }
    return (

        <Grid
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                display: "flex",
                justifyContent: "space-between",
                minHeight: "100vh",
                marginX: "100px"
            }}
        >



            <Grid
                xs="6"
                sm="6"
                md="6"
                lg="6"
                sx={{
                    minWidth: "500px",
                    maxHeight: "630px",
                    marginTop: "20px",
                    padding: "30px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                }}
            >
                <div>
                    <ThemeProvider theme={theme}>
                        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
                            <Typography
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    color: "#176CC7",
                                    textAlign: "center",
                                    marginBottom: "20px",
                                    fontFamily: "outfit",
                                }}
                            >
                                Register Yourself
                            </Typography>

                            <FormGroup className="mb-4">
                                <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                    Full Name
                                </Typography>
                                <TextField
                                    type="fullname"

                                    placeholder="Enter Full Name"
                                    onChange={onChangeHandler}
                                    size='small'
                                    sx={{
                                        marginY: "10px",
                                        fontFamily: "outfit",
                                        "& .MuiInputBase-input": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                    Email address
                                </Typography>
                                <TextField
                                    type="email"

                                    placeholder="Enter email"
                                    onChange={onChangeHandler}
                                    size='small'
                                    sx={{
                                        marginY: "10px",
                                        fontFamily: "outfit",
                                        "& .MuiInputBase-input": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                    }}
                                />
                            </FormGroup>


                            <FormGroup className="mb-4">
                                <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                    Password
                                </Typography>
                                <TextField
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={onChangeHandler}
                                    size='small'
                                    sx={{
                                        marginY: "10px",
                                        fontFamily: "outfit",
                                        "& .MuiInputBase-input": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: "14px",
                                        },
                                    }}
                                />

                            </FormGroup>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between"

                            }}>

                                <FormGroup className="mb-4" sx={
                                    {
                                        marginRight: "10px",
                                    }
                                }>
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Age
                                    </Typography>
                                    <TextField
                                        type="age"
                                        placeholder="Enter Age"
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{
                                            marginY: "10px",
                                            fontFamily: "outfit",

                                            "& .MuiInputBase-input": {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: "14px",
                                            },
                                            "& .MuiInputLabel-root": {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-4" sx={{
                                    marginLeft: "10px",
                                }}>
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Gender
                                    </Typography>
                                    <TextField
                                        type="gender"
                                        placeholder="Enter Gender"
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{

                                            marginY: "10px",
                                            fontFamily: "outfit",
                                            "& .MuiInputBase-input": {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: "14px",
                                            },
                                            "& .MuiInputLabel-root": {
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                </FormGroup>
                            </Box>
                            <FormGroup className="mb-4">
                                <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit" }}>
                                    Date of Birth
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={data.dateOfBirth || null}
                                        onChange={(newValue) => setData((prev) => ({ ...prev, dateOfBirth: newValue }))}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                size="small"
                                                sx={{
                                                    marginY: "10px",
                                                    "& .MuiInputBase-root": {
                                                        fontSize: "14px !important",
                                                        height: "36px !important", // Force smaller height
                                                    },
                                                    "& .MuiOutlinedInput-root": {
                                                        fontSize: "14px !important",
                                                        height: "36px !important", // Enforce smaller size
                                                        padding: "0 !important", // Remove default padding
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        fontSize: "14px !important",
                                                        padding: "6px 12px !important", // Adjust for smaller input
                                                    },
                                                    "& .MuiInputLabel-root": {
                                                        fontSize: "14px !important",
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </FormGroup>


                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    marginTop: "10px",
                                    width: "100%",
                                    fontFamily: "outfit",
                                }}
                            >
                                Register
                            </Button>

                            <hr />
                            <div className="text-center">
                                <p
                                    style={{
                                        display: "inline-block",
                                        marginRight: "10px",
                                        color: "#666",
                                        fontFamily: "outfit",
                                    }}
                                >
                                    Already have an account?
                                </p>
                                <Button
                                    onClick={() => navigate("/login")}
                                    type="button"
                                    variant="text"
                                    sx={{
                                        fontFamily: "outfit",
                                    }}
                                >
                                    Login
                                </Button>
                            </div>
                        </form>
                    </ThemeProvider>
                </div>
            </Grid>
            <Grid
                xs="6"
                sm="6"
                md="6"
                lg="6"
            >
                <img src={Register} alt='login Image' style={{
                    width: "675px"
                }} />
            </Grid>
        </Grid>
    )
}

export default Index
