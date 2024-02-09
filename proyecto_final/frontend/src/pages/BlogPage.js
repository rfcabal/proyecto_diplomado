import React, { useEffect, useState } from "react";
import axios from  'axios';
import '../styles/pages/Blog.css';

const BlogPage = (props) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const cargarBlogs = async () => {
            const responseBlogs = await axios.get('http://localhost:3001/api/entradas?tipo=blog');

            setBlogs(responseBlogs.data);
        }

        cargarBlogs();

    }, []);

    return (
        <main>
            <section className="blog">
                {   blogs.length > 0 ?
                    blogs.map( blog =>
                        <div className="item" key={blog.id}>
                            <div className="image">
                                <img src="/images/portfolio.jpg" alt="imagen blog" width="115px" />
                            </div>
                            <div className="texto-blog">
                                {blog.texto}
                                <a href={`blog/${blog.id}`}>Leer más...</a>
                            </div>
                        </div>
                    ) : <p>No hay nuevas entradas</p>
                }
            </section>
        </main>
    );
}

export default BlogPage;