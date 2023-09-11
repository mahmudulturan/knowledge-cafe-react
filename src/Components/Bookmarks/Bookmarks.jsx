import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3">
            <h3 className='py-2 px-4 bg-slate-500 text-blue-800 font-bold rounded-xl text-3xl my-3 mx-3'>Reading time: {readingTime}</h3>
            {
                bookmarks.map(blog => <Bookmark key={blog.id} blog={blog}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number,
}

export default Bookmarks;