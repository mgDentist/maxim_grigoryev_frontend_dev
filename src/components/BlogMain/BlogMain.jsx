import { blogCardsContent } from '../../DB/DB-blog';

import './BlogMain.scss';

const BlogMain = () => {
    return (
        <div
            className="blog__main"
        >
            <ul
                className='blog__card-list'
            >
                {blogCardsContent.map((item) => (
                    <li
                        key={item.id}
                        className='blog__card'
                    >
                        <h3
                            className='blog__card-title'
                        >
                            {item.title}
                        </h3>
                        <p
                            className='blog__card-content'
                        >
                            {item.content}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default BlogMain;