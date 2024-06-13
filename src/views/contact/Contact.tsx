import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import styles from "../contact/contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Experience } from "../../components/experience/Experience";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    nombre: "",
    email: "",
    mensaje: "",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El email es obligatorio"),
    mensaje: Yup.string().required("El mensaje es obligatorio"),
  });

  const handleSubmit = (values) => {
    setIsSubmitted(true);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z2rj20r", "template_bu1w8c7", form.current, {
        publicKey: "PyBdXNdSyECQEKVgA",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your form has been sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.contactContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
        className={styles.title}
      >
        <MdOutlineMarkEmailRead style={{ marginRight: "8px" }} /> Contact me{" "}
      </div>
      {isSubmitted && <p>Formulario enviado correctamente</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form ref={form} onSubmit={sendEmail} className={styles.formResponsive}>
          <div className={styles.labelInput}>
            <label htmlFor="nombre">Name:</label>
            <Field className={styles.inputField} name="nombre" id="nombre" />
            <ErrorMessage
              name="nombre"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email">Email:</label>
            <Field
              name="email"
              id="email"
              type="email"
              className={styles.inputField}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label htmlFor="mensaje">Message:</label>
            <Field
              name="mensaje"
              id="mensaje"
              as="textarea"
              className={styles.textAreaField}
            />
            <ErrorMessage
              name="mensaje"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.buttonSubmit}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
