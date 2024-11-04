import BlogHeader from '../../components/BlogHeader/BlogHeader';

import './Blog.scss';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog__container">
                <BlogHeader></BlogHeader>
            </div>
        </section>
    )
}

export default Blog;