import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'

function Contactus() {
  return (
    <div>
        <h1>Contact Us</h1>
        <Formik 
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.email) {
                errors.email = "Required"
            } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
                 errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = "Required"
            }
            return errors
          }}

          onSubmit={(values, { setSubmitting }) => {
            axios
              .post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", values)
              .then((response) => {
                console.log(response);
                alert("Your message has been sent!");
                setSubmitting(false);
              })
              .catch((error) => {
                console.log(error);
                alert("An error occurred. Please try again later.");
                setSubmitting(false);
              });
          }}
          >
            {({ isSubmitting }) => (
          <Form>
             <label htmlFor='name'>Name</label>
             <Field type='text' name='name' />
             <ErrorMessage name='name' component="div"/>

             <label htmlFor='email'>Email</label>
             <Field type='text' name='email' />
             <ErrorMessage name='email' component="div"/>

             <label htmlFor='subject'>Subject</label>
             <Field type='text' name='subject' />
             <ErrorMessage name='subject' component="div"/>

             <label htmlFor='subject'>Message</label>
             <Field as='textarea' name='message' />
             <ErrorMessage name='subject' component="div"/>

             {isSubmitting ? (
              <progress max="100" />
            ) : (
              <button type="submit">Submit</button>
            )}
          </Form>
            )}
        </Formik>
    </div>
  )
}

export default Contactus