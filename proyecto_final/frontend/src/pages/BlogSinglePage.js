import React, { useEffect, useState } from "react";
import axios from  'axios';
import '../styles/pages/Blog.css';
import { useParams } from "react-router-dom";

const BlogSinglePage = (props) => {

    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const cargarBlogs = async () => {
            const responseBlog = await axios.get(`http://localhost:3001/api/entradas?id=${id}`);
            console.log(responseBlog.data)
            setBlog(responseBlog.data);
        }

        cargarBlogs();

    }, [id]);

    return (
        <main>
            {
                blog ? (
                    <section className="blog">
                        <h1>{blog.titulo}</h1>
                        <div className="entrada">
                            <img src={blog.imagen} alt="imagen"></img>
                            <p>{blog.texto}</p>
                        </div>
                    </section>
                ) : (<p>La entrada no existe</p>)
            }
        </main>
    );
}

export default BlogSinglePage;