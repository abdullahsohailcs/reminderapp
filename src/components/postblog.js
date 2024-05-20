import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./postblog.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { UserAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const BlogEditorWithToggle = () => {
  const { user,logOut } = UserAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [uid,setuid]=useState(user.uid);
  const [value, onChange] = useState(new Date());

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handleDateTimeChange = (date) => {
    setDateTime(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://reminderapp-74a9c-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json", {
        title: title,
        body: body,
        dateTime: value.toLocaleString(),
        uid:uid
      })
      .then(function (response) {
        console.log(response);
        toast("New Task Created!");
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Blog form submitted.", body);
    setBody("");
    setTitle("");
  };

  return (
    <>
      <br />
      <div className="blog-editor" style={{background: 'linear-gradient(135deg, #FCE4EC, #E0FFFF)'}}>
        { (
          <>
            <h2 className="blog-editor__title"><strong>Add New Task</strong></h2>
            <form onSubmit={handleSubmit} className="blog-editor__form">
              <div className="blog-editor__input">
                <label htmlFor="title" className="blog-editor__label">
                <strong>Title:</strong>
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="blog-editor__text-input"
                  required
                  style={{backgroundColor:"#F9EDF1"	}}
                />
              </div>
              <div className="blog-editor__input">
                <label htmlFor="body" className="blog-editor__label">
                <strong>Body:</strong>
                </label>
                <ReactQuill
                  value={body}
                  onChange={handleBodyChange}
                  modules={modules}
                  formats={formats}
                  className="blog-editor__quill-editor"
                  style={{backgroundColor:"#F9EDF1"	}}
                />
              </div>
              <div className="blog-editor__input">
                
                <label htmlFor="dateTime" className="blog-editor__label" style={{padding:"4px"}}><strong>
                  Date and Time:
                  </strong>
                </label>
                <DateTimePicker  onChange={onChange} value={value}/>
                
              </div>
              <button type="submit" className="blog-editor__submit-button">
                Publish
              </button>
            </form>
            
          </>
        )}
      </div>
    </>
  );
};

export default BlogEditorWithToggle;
