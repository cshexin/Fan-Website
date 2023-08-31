import React from 'react';
import './insertAlbum.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup'
import axios from 'axios';



function InsertAlbum() {

  const initialValues = {
    title: "",
    released_date: "",
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/albums", data).then((response)=>{
      console.log("IT WORKED")
    })
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    released_date: Yup.date().required(),
  })

  

  return (
    <div className="insertAlbum-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
     
      <Form>
        <label>Title: </label>
        <ErrorMessage name='title' component={"span"}/>
        <Field id="inputInsertAlbum" name="title" placeholder="专辑名称" />

        <label>Released Date: </label>
        <ErrorMessage name='released_date' component={"span"}/>

        <Field id="inputInsertAlbum" name="released_date" placeholder="发行时间" />

        <button type='submit'>Insert Album</button>
      </Form>
      
      </Formik>
    </div>
  );
}

export default InsertAlbum;
