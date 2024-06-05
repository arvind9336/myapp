import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(50, 'Name is too long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message is too short')
      .required('Message is required')
  });

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log('Form data', values);
            resetForm();
            setSubmitting(false);
            alert('Form submitted successfully');
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;