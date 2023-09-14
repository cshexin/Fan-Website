import React, { useState } from 'react';
import './InsertAlbum.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InsertAlbum() {
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    released_date: "",
    no: "0",
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append album data to formData
    formData.append("title", data.title);
    formData.append("released_date", data.released_date);

    // Append cover image to formData (if available)
    if (file) {
      formData.append("image", file);
    }

    // Send data to server
    try {
      await axios.post("http://localhost:3001/Album", formData, { 
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate("/");
    } catch (error) {
      console.error("Error uploading album:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    released_date: Yup.date().required(),
  });

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

          <input
            onChange={e => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          />

          <button type='submit'>Insert Album</button>
        </Form>
      </Formik>
    </div>
  );
}

export default InsertAlbum;
