import React, { useState } from 'react';
import Headers from '../Header/Headers';
import BlogDetail from './BlogDetail/BlogDetail';

const blogInfo =[
    {
    img:"https://i.postimg.cc/hP46Py0Q/Blog1.png",
    title:"What I know about Javascript ……",
    description:"My Journey with the Javascript starts with writing code on the phone. I know about JavaScript from the Sololearn . when trying more and more after that I read a few books about the JavaScript and also watch many videos . After that, I do online training from the programming hero team also the training is running in the storytelling day. ", 
    link:"https://jahedhossen4358.medium.com/what-i-know-about-javascript-584eedb413c9"
},
{
    img:"https://i.postimg.cc/vHPj1rPq/Blog2.png",
    title:"A short story of JavaScript….",
    description:"JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. … Like server-side scripting languages, such as PHP and ASP, JavaScript code can be inserted anywhere within the HTML of a webpage. The short name of the JavaScript is JS. ", 
    link:"https://jahedhossen4358.medium.com/a-short-story-of-javascript-9944ebe3207c"
},



]

const Blog = () => {

    const [blog,setBlog] = useState(blogInfo);
  
    return (
        <div>
            <Headers> </Headers>
            <div className="row" style={{marginTop:"20px"}}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="row">
            {
              blog.map(info => <BlogDetail blogInfo={info}></BlogDetail>)
          }
            </div>
         
         </div>
        <div className="col-md-3"></div>

     </div> </div>
        
    );
};

export default Blog;