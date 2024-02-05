import React from "react";
import '../styles/pages/Blog.css';

const BlogPage = (props) => {
    return (
        <main>
            <section className="blog">
                <div className="item">
                    <div className="image">
                        <img src="/images/portfolio.jpg" alt="imagen blog" width="115px" />
                    </div>
                    <div className="texto-blog">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla
                        non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat
                        lacus
                        elementum, volutpat neque eget, porttitor ex.
                        <a href="blog-item.html">Leer más...</a>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src="/images/portfolio.jpg" alt="imagen blog" width="115px" />
                    </div>
                    <div className="texto-blog">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla
                        non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat
                        lacus
                        elementum, volutpat neque eget, porttitor ex.
                        <a href="blog-item.html">Leer más...</a>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src="/images/portfolio.jpg" alt="imagen blog" width="115px" />
                    </div>
                    <div className="texto-blog">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin nisl eu
                        accumsan. Etiam ornare augue vitae libero imperdiet laoreet. Phasellus nunc risus, fringilla
                        non
                        auctor eu, congue id mauris. Cras imperdiet porta lacinia. In ut enim sapien. Ut consequat
                        lacus
                        elementum, volutpat neque eget, porttitor ex.
                        <a href="blog-item.html">Leer más...</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default BlogPage;