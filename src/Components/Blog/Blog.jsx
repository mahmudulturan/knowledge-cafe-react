import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    const {title,cover,author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='my-10'>
            <img className='w-full rounded-lg' src={cover} alt={`image of ${title}`} />
            <div className='flex justify-between items-center mt-8 mb-5'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt={`image of ${author}`} />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='font-semibold text-base '>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-medium'>{reading_time} min read</p>
                    {/* <button></button> */}
                </div>
            </div>
            <h3 className='text-4xl font-bold'>{title}</h3>
            { hashtags.map((hashtag,idx) => <a className='text-xl font-medium' key={idx}>#{hashtag} </a>)}
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;