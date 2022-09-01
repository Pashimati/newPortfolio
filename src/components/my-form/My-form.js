import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

import './My-form.scss'

const MyForm = () => {
    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                subject: '',
                text: '',
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .min(2, 'At least 2 characters')
                    .required('required field!'),
                email: Yup.string()
                    .email('invalid email address')
                    .required('required field!'),
                text: Yup.string()
                    .min(10, 'at least 10 characters'),
            })}

            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>

            <Form className="form">
                <label htmlFor="name">Your Full Name (Required)</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className='error' name="name" component="div"/>

                <label htmlFor="email">Your Email (Required)</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name="email" component="div"/>

                <label htmlFor="subject">Subject</label>
                <Field
                    id="subject"
                    name="subject"
                    type="subject"
                />

                <label htmlFor="text">Your Message</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name="text" component="div"/>
                <button className="form__button" type="submit">Send message</button>
            </Form>

        </Formik>
    );
};

export default MyForm;