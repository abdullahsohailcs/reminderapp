import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BlogEditor from "./postblog";
import CountdownTimer from "./countdown";


const BlogContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
`;

const BlogItem = styled.div`
  background: linear-gradient(135deg, rgba(252, 228, 236, 0.6), rgba(224, 255, 255, 0.6));
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
        const response = await axios.get("https://reminderapp-74a9c-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json");
        // Convert object to array
        const blogsArray = Object.values(response.data);
        setBlogs(blogsArray);
        console.log(blogsArray);
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
        "https://reminderapp-74a9c-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json" + id
      );

      console.log("Delete successful:", response);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  // Assuming dateTimeString is the string representation of the date and time
const dateTimeString = blogs.dateTime;

// Parse the string into a Date object


console.log(dateTimeString); // Output: "Tue May 07 2024 03:14:51 GMT+5"



  return (
    <div>
      {<div>
            <center>
            <button onClick={handleShowForm} type="button" class="btn btn-outline-secondary btn-block"
             style={{padding:"10px",backgroundColor:"#FBE5ED",background: "linear-gradient(135deg, #FCE4EC, #E0FFFF)",width:"30%"}}>
          Add New Task 
        </button></center>
        {showForm && <BlogEditor setShowForm={setShowForm} />}
      </div>}
      <BlogContainer>
      <center>
        <br></br>
        <hr></hr>
        <br></br>
        
        <h1 style={{ fontSize: 25, textAlign: "center", color:"#333333" }}><b>Your TODO List</b></h1>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        </center>
        {blogs.map((blog) => (
          <BlogItem key={blog._id}>
            <h3 style={{ fontSize: 25, textAlign: "center" }}>{blog.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
            {/* Integrate the CountdownTimer component */}
            <CountdownTimer dateTime={blog.dateTime} />
            {/* Rest of your code */}
          </BlogItem>
        ))}
      </BlogContainer>
    </div>
  );
}

export default BlogsPage;
