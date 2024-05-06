import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./postblog.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { UserAuth } from '../context/AuthContext';


const BlogEditorWithToggle = () => {
  const { user,logOut } = UserAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [uid,setuid]=useState(user.uid);

  console.log({title: title,
    body: body,
    dateTime: dateTime,
    uid:uid})

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
        dateTime: dateTime.toString(),
        uid:uid
      })
      .then(function (response) {
        console.log(response);
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
                
                <label htmlFor="dateTime" className="blog-editor__label"><strong>
                  Date and Time:
                  </strong>
                </label>
                <input  style={{padding:"10px",backgroundColor:"rgba(249, 237, 241, 0)"}} 
                aria-label="Date and time" type="datetime-local" onChange={handleDateTimeChange}/>
                
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
