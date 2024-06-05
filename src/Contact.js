// import React from 'react'

// export default function Contact() {
//   const submit=(e)=>{
//     e.preventDefault();
//     console.log(e);
//   }
//   return (
//     <>
//       <h3>Contact Page</h3>
//       <form className='form' >
//         <label htmlFor='name' className='lab' id='n'>Name</label>
//         <input type='text' id='name' className='in' placeholder='Enter Your Name' autoFocus required/>
//         <label htmlFor='email' className='lab' id='e'>E-Mail</label>
//         <input type='email' id='email' className='in' placeholder='Enter Your email' required/>
//         <label htmlFor='add' className='lab' id='ad'>Address</label>
//         <input type='text' id='add' className='in' placeholder='Enter Your address' required/>
//         <label htmlFor='dob' className='lab' id='db'>Date of Birth</label>
//         <input type='date' id='dob' className='in' required/>
//         <label htmlFor='bio' className='lab' id='b'>Bio</label>
//         <input type='text' id='bio' className='in' placeholder='Enter Your bio' required/>
//         <label htmlFor='profile' className='lab' id='p'>Profile Photo</label>
//         <input type='file' id='profile' className='in' required/>
//         <label htmlFor='ban' className='lab' id='ba'>Banner</label>
//         <input type='file' id='ban' className='in' required />
//         <button type='submit' className='sub' onClick={submit}>Submit</button>
//       </form>
//     </>
//   )
// }

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    dob: Yup.date().required("Date of Birth is required"),
    bio: Yup.string().required("Bio is required"),
    profileImage: Yup.mixed().required("Profile Image is required"),
    bannerImage: Yup.mixed().required("Banner Image is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          dob: "",
          bio: "",
          profileImage: null,
          bannerImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="form">
            <div>
              <label htmlFor="name" id="n">
                Name
              </label>
              <br />
              <Field
                className="in"
                id="name"
                type="text"
                name="name"
                autoComplete="true"
                required
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email" id="e">
                Email
              </label>
              <br />
              <Field
                className="in"
                type="email"
                id="email"
                name="email"
                autoComplete={Field.toString()}
                required
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="address" id="ad">
                Address
              </label>
              <br />
              <Field
                className="in"
                type="text"
                id="address"
                name="address"
                autoComplete={Field.toString()}
                required
              />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <label htmlFor="dob" id="db">
                Date of Birth
              </label>
              <br />
              <Field className="in" type="date" id="dob" name="dob" required />
              <ErrorMessage name="dob" component="div" />
            </div>
            <div>
              <label htmlFor="bio" id="b">
                Bio
              </label>
              <br />
              <Field as="textarea" id="bio" name="bio" required />
              <ErrorMessage name="bio" component="div" />
            </div>
            <div>
              <label htmlFor="profileImage" id="p">
                Profile Image
              </label>
              <br />
              <input
                className="in"
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={(event) =>
                  setFieldValue("profileImage", event.currentTarget.files[0])
                }
                required
              />
              <ErrorMessage name="profileImage" component="div" />
            </div>
            <div>
              <label htmlFor="bannerImage" id="ba">
                Banner Image
              </label>
              <br />
              <input
                className="in"
                type="file"
                id="bannerImage"
                name="bannerImage"
                onChange={(event) =>
                  setFieldValue("bannerImage", event.currentTarget.files[0])
                }
                required
              />
              <ErrorMessage name="bannerImage" component="div" />
            </div>
            <button className="sub" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
