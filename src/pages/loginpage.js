import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import { Button, TextField, FormControl, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); //form validation

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onSubmit = () => {
        alert("I am logged in")
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                sx={{ backgroundColor: "grey" }}
            >
                <Card variant="outlined" sx={{
                    maxWidth: '400px',
                    height: "450px",
                    p: 2,
                    overflow: 'visible',
                    background: '#d0d0d0'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        p: 2,
                        color: 'blue',
                        
                    }}>
                        <Typography sx={{
                            fontWeight: '700',
                            textAlign: "center",
                            fontFamily: "arial",
                            fontSize: "20px",
                            marginBottom : "30px",
                        }}>
                            Sign In Into The System
                        </Typography>
                    </Box>
                    <Box>
                        <FormControl variant="standard" sx={{ width: 1, gap: 2 }}>
                            <TextField label="Email"
                                type="email"
                                value={values.email}
                                name="email"

                                {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                onChange={handleChange("email")}
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailRoundedIcon sx={{ mr: 1 }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {errors.email?.type === 'required' && <Typography sx={{ color: 'red' }}>Email is required</Typography>}
                            {errors.email?.type === 'pattern' && <Typography sx={{ color: 'red' }}>Invalid Email</Typography>}


                            <TextField label="Password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                {...register("password", { required: true, minLength: 6 })}
                                onChange={handleChange("password")}
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {errors.password?.type === 'required' && <Typography sx={{ color: 'red' }}>Password is required</Typography>}
                            {errors.password?.type === 'minLength' && <Typography sx={{ color: 'red' }}>Password must be more than 8 characters</Typography>}
                            <Button type="submit" onClick={handleSubmit(onSubmit)} variant="outlined" sx={{ width: "30%" }}>Sign In</Button>

                        </FormControl>
                        <Button sx={{
                            mt: "20px",
                            px: 1,
                            width: "100%",
                            color: "red",
                            p: 1
                        }}>I forgot my password</Button>

                        <Button sx={{
                            mt: "20px",
                            px: 1,
                            width: "100%",
                            color: "red",
                            p: 1
                        }}><Link to="/register">Don't Have An Account? </Link></Button>
                       
                    </Box>

                </Card>
            </Box>

        </>
    )
}