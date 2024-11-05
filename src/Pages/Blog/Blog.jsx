import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogMain from '../../components/BlogMain/BlogMain';

import './Blog.scss';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog__container">
                <BlogHeader />
                <BlogMain/>
            </div>
        </section>
    )
}

export default Blog;