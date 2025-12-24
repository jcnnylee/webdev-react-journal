import {Formik, Form, Field} from "formik"

import {Button, TextField, Box, Stack,} from "@mui/material"

function RegisterForm() {
  return <Formik
        initialValues={{
            email: "",
            password:"",
            confirmPassword:"",
        }}
        onSubmit={(values) => {
            console.log("Form values", values)
        }}
        >
        {() => {

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
                    />

                    <Field as={TextField} 
                        label="Password" 
                        type="password" 
                        name="password"
                    />

                    <Field as={TextField} 
                        label="Confirm Password" 
                        type="password" 
                        name="confirmPassword"
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
}
export default RegisterForm