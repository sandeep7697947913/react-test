import React, { useContext } from "react";
import { Card, CardContent, TextField, CardActions, Button, Grid } from "@material-ui/core";
import {Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup';

export default function Add() {

  return (
        <Formik initialValues = {{
            email : "",
            username : ""
        }}
        validationSchema = {
            Yup.object().shape({
                email : Yup.string().required("Email is required").email("Email is invalid").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid e-mail"),
                username : Yup.string().required("Name is required").matches(/^[a-zA-Z0-9]+$/,"Name must contain Number and characters")
            })
            
        }
        onSubmit={fields => {
            alert(JSON.stringify(fields))
        }}
        render={({ errors, status, touched }) => (
           <div className="container d-flex justify-content-center bg-light p-5 rounded">
                <Form component="div" className="col-6" >
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                        <ErrorMessage name="username" type="text" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">submit</button>
                    </div>
                </Form>
           </div>
        )}
         />
  );
}
