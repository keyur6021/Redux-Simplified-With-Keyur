import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// ! future use
// const validationSearch = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().required("password is required"),
// });

const FileForm = () => {
    const [file, setFile] = useState(0);
    const [showImage, setShowImage] = useState();
    const navigate = useNavigate()
    const getBase64 = async (file) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(file);
        });
        return promise;
    };

    const OneHandleChange = async (e) => {
        const file = e.target.files[0];
        const base64 = await getBase64(file);
        setFile(base64);
    };

    return (
        <div className="parent">
            <div className="parent-class">
                <Formik
                    initialValues={{ file: {} }}
                    // validationSchema={validationSearch}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log("values===", values);
                        setShowImage(values?.file)
                        setTimeout(() => {
                            navigate("/all")
                        }, 1000);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <div style={{ fontSize: "30px", color: "blue", textAlign: 'center', padding: '1rem', textDecoration: 'underLine' }}>
                                Add Product
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <input type="file" name="file" onChange={(e) => {
                                    OneHandleChange(e)
                                    // setFieldValue("file", e.currentTarget.files[0]);
                                }}
                                    style={{ border: '1px solid gray', padding: '10px', width: '100%' }} />
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <Button variant="outlined" size="sm" type="submit">
                                    Submit
                                </Button>
                                <div style={{ color: 'red' }}> *Site is under-progress </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                {showImage &&
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: '15px' }}>
                        <img src={file} alt='new file' width={400} height={400} />
                    </div>
                }
            </div>
        </div>
    );
};

export default FileForm;
