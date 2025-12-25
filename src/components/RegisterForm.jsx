import {Formik, Form, Field} from "formik"
import * as Yup from "yup"
//import axios from "axios"
import {Button, TextField, Box, Stack,} from "@mui/material"
import api from "../axiosConfig"

function RegisterForm() {

    // YUP Used to validate form inputs
    const schema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required*"),
        password: Yup.string().matches(/\d/, "Password must contain at least one number").min(6, "Password must be at least 6 characters").max(16, "Password must not exceed 16 characters").required("Required*"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Required*")
    })

    // Register Form UI and validation
    return (
        <Formik
            initialValues={{
                email: "",
                password:"",
                confirmPassword:"",
            }}
            validationSchema={schema}
            onSubmit={async (values, {resetForm}) => {
                try {
                //console.log("Form values", values)
                    await api.post("/register", values)
                    resetForm()

                } catch(error) {
                    console.log(error)
                }
            }}
            >
            {({values, errors, touched, ...methods}) => {
                console.log("Values", values)
                console.log("Errors", errors)
                console.log("Touched", touched)
                console.log(methods)
                return (
                    <Form>
                        <Box sx={{
                            display:"flex",
                            flexDirection: "column",
                            gap: 2,
                            width: 300,
                        }}>
                            <Field as={TextField} 
                                label="Email" 
                                type="email" 
                                name="email" 
                                error={touched.email && Boolean(errors.email)} // Shows as an error if email has been touched and the email is incorrect or not filled
                                helperText={touched.email && errors.email}
                            />

                            <Field as={TextField} 
                                label="Password" 
                                type="password" 
                                name="password"
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                
                            />

                            <Field as={TextField} 
                                label="Confirm Password" 
                                type="password" 
                                name="confirmPassword"
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                            />

                            <Button 
                                type="submit" 
                                variant="contained"
                            >Register
                            </Button>
                    </Box>
                </Form>
            )
            }}
        </Formik>
    )
}
export default RegisterForm