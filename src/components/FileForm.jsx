import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { addProduct } from "../store/actions/productAction";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';


// ! future use
const validationSearch = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    description: Yup.string().required("Description is required"),
});

const AddProductForm = () => {
    const [file, setFile] = useState(0);
    const [showImage, setShowImage] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
                    initialValues={{
                        title: '',
                        description: ''
                    }}
                    validationSchema={validationSearch}
                    onSubmit={(values) => {
                        const finalValues = { ...values, image: file };
                        dispatch(addProduct(finalValues))
                        toast.success('Product add successfully.')
                        navigate('/all')
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
                            <div className="title-form">
                                <FaShoppingCart className="avatar-product" />   Add Product
                            </div>
                            <div>
                                <Field type="text"
                                    className='common-field'
                                    value={values.title}
                                    onChange={handleChange}
                                    name="title" placeholder="Enter the title" />
                                <ErrorMessage name='title' >
                                    {(msg) => <div className="error-msg">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div style={{ paddingTop: '15px' }}>
                                <Field as="textarea" id="desc"
                                    className='common-field'
                                    value={values.description}
                                    rows='5'
                                    onChange={handleChange}
                                    placeholder='Enter your description' name='description' />
                                <ErrorMessage name='description' >
                                    {(msg) => <div className="error-msg">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                                <input type="file" name="file" onChange={(e) => {
                                    OneHandleChange(e)
                                    // setFieldValue("file", e.currentTarget.files[0]);
                                }}
                                    className="common-field"
                                />
                            </div>
                            <div style={{ textAlign: "center", paddingTop: '15px' }}>
                                <Button type="submit" className="btn-submit" sx={{ color: '#fff', border: '1px solid white', fontWeight: 700 }} variant="outlined" size="sm" >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                {showImage &&
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: '15px' }}>
                        <img src={file} alt='new file' width={400} height={400} />
                    </div>
                }
                <Toaster />
            </div>
        </div >
    );
};

export default AddProductForm;
