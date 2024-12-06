import React, { useState } from 'react';
import { Typography, Grid, Button, TextField, FormGroup, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "../../Assets/signup.jpg"
import "@fontsource/outfit";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from 'react-toastify';
import dayjs from 'dayjs';


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
        role: "",
        fullName: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        dateofbirth: null,
    });
    const navigate = useNavigate();
    const [secretkey, setSecretKey] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Request Data:", data);

        if (data.dateofbirth && dayjs(data.dateofbirth).isValid()) {
            data.dateofbirth = dayjs(data.dateofbirth).toISOString();
        } else {
            toast.error("Invalid date of birth");
            return;
        }


        if (data.role === "Admin" && secretkey !== "112233") {
            toast.error("Invalid Secret Key ")
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/user/register", data)
                .then((res) => {
                    console.log(res);
                    if (res.data.success === true) {
                        toast.success("Register Successfully")
                        navigate("/login");
                        localStorage.setItem("token", response.data.token);
                    } else {
                        toast.error(res.data.message)
                        console.log("Error: ", res.data.message);
                    }
                });
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };

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
                                    type="text"
                                    name='fullName'
                                    value={data.fullName}
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
                            <Box sx={{
                                display: "flex",
                                justifyContent: "",
                                gap: "20px"

                            }}>
                                <FormGroup className="mb-4">
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Email address
                                    </Typography>
                                    <TextField
                                        type="email"
                                        name='email'
                                        value={data.email}
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
                                        name='password'
                                        placeholder="Enter password"
                                        value={data.password}
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{
                                            marginY: "10px",
                                            width: "100%",
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
                            <Box sx={{
                                display: "flex",
                                gap: "20px"
                            }}>

                                <FormGroup className="mb-4">
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Age
                                    </Typography>
                                    <TextField
                                        type="age"
                                        value={data.age}
                                        name='age'
                                        placeholder="Enter Age"
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{
                                            marginY: "10px",
                                            fontFamily: "outfit",
                                            width: "100%",
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
                                <FormGroup className="mb-4" >
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Gender
                                    </Typography>
                                    <TextField
                                        type="text"
                                        name='gender'
                                        placeholder="Enter Gender"
                                        value={data.gender}
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{
                                            width: "100%",
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
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <FormGroup className="mb-4">
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", }}>
                                        Role
                                    </Typography>
                                    <TextField
                                        type="text"
                                        name='role'
                                        value={data.role}
                                        placeholder="Enter Role e.g(User or Admin)"
                                        onChange={onChangeHandler}
                                        size='small'
                                        sx={{
                                            marginY: "10px",
                                            width: "100%",
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
                                    <Typography style={{ fontSize: "14px", color: "#555", fontFamily: "outfit", marginBottom: "10px", }}>
                                        Date of Birth
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            value={data.dateofbirth ? dayjs(data.dateofbirth) : null}
                                            onChange={(newValue) =>
                                                setData((prev) => ({ ...prev, dateofbirth: newValue }))
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    size="small"
                                                    sx={{
                                                        marginY: "10px",
                                                        "& .MuiInputBase-root": {
                                                            fontSize: "14px",
                                                            height: "36px",
                                                        },
                                                    }}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>

                                </FormGroup>
                            </Box>
                            {data.role === "Admin" && (
                                <FormGroup sx={{ marginBottom: "10px" }}>
                                    <Typography
                                        style={{
                                            fontSize: "14px",
                                            color: "#555",
                                            fontFamily: "outfit",
                                        }}
                                    >
                                        Secret Key
                                    </Typography>
                                    <TextField
                                        type="text"
                                        name="secretKey"
                                        placeholder="Enter Secret Key"
                                        onChange={(e) => setSecretKey(e.target.value)}
                                        size="small"
                                        sx={{
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
                            )}

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
                                    variant="outlined"
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
                <img src={Register} alt='login logo' style={{
                    width: "675px"
                }} />
            </Grid>

        </Grid>
    )
}

export default Index
