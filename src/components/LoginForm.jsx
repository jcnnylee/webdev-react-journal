import {Formik, Field, Form,} from "formik"
import * as Yup from "yup"
//import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import {TextField, Box,Button, Stack} from "@mui/material"
import api from "../axiosConfig"



function LoginForm() {
    const navigate = useNavigate()
    const schema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required*"),
        password: Yup.string().required("Required*"),
    })

    return ( 
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={schema}
            onSubmit={async (values) => {
                try {
                    const res = await api.post("/login", values)

                    const token = res.data.token
                    if (token) {
                        localStorage.setItem("token", token)
                        navigate("/entries")
                    }

                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({touched, errors}) => {
                return (
                <Form>
                    <Box sx = {{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: 300,
                    }}>
                        <Field 
                            as={TextField}
                            type="email"
                            label="Email"
                            name="email"
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email} 
                        />
                        <Field 
                            as={TextField}
                            label="Password" 
                            type="password" 
                            name="password"
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                                    
                        />
                        <Button type="submit" variant="contained">Login</Button>
                        
                    </Box>
                </Form>
            )}}
        </Formik>
        
        )
}
export default LoginForm