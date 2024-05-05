/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BlogEditor from "./postblog";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BlogItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;

function BlogsPage() {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:3001/api/blogs/" + id
      );

      console.log("Delete successful:", response);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div>
      {<div>
            <center>
            <button onClick={handleShowForm} type="button" className="btn btn-outline-secondary btn-block"
             style={{padding:"10px",backgroundColor:"#FBE5ED",background: "linear-gradient(135deg, #FCE4EC, #E0FFFF)"}}>
          Add New Task 
        </button></center>
        {showForm && <BlogEditor setShowForm={setShowForm} />}
      </div>}
      <BlogContainer>
      <center>
        <br></br>
        <h1 style={{ fontSize: 20, textAlign: "center" }}><b>Blogs</b></h1>
        <br></br>
        </center>
        {blogs.map((blog) => (
          <BlogItem key={blog._id}>
          <h3 style={{ fontSize: 25, textAlign: "center" }}>{blog.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          {/* Rest of your code */}
        </BlogItem>
        ))}
      </BlogContainer>
    </div>
  );
}

export default BlogsPage;
