import { paginationButtons } from "../../DB/DB-blog";

const BlogHeader = () => {
    return (
        <div className="blog__header">
            <div className="blog__pagination">
                {paginationButtons.map((btn) => (
                    <button
                        key={btn.title}
                        className="btn blog__buttons"
                    >
                        {btn.title}
                    </button>
                ))}
            </div>
            <div className="blog__authorization">
                <button
                    className="btn blog__buttons--authorization"
                >Login</button>
                <button
                    className="btn blog__buttons--authorization"
                >Registration</button>
            </div>
        </div>
    )
};

export default BlogHeader;