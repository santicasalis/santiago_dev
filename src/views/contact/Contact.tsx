import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import styles from "../contact/contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
            title: "Tu formulario se envío correctamente",
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
    <div>
      <h1>Formulario</h1>
      {isSubmitted && <p>Formulario enviado correctamente</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form ref={form} onSubmit={sendEmail} className={styles.formResponsive}>
          <label htmlFor="nombre">Nombre:</label>
          <Field name="nombre" id="nombre" />
          <ErrorMessage
            name="nombre"
            component="div"
            className={styles.error}
          />

          <label htmlFor="email">Email:</label>
          <Field name="email" id="email" type="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <label htmlFor="mensaje">Mensaje:</label>
          <Field name="mensaje" id="mensaje" as="textarea" />
          <ErrorMessage
            name="mensaje"
            component="div"
            className={styles.error}
          />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
