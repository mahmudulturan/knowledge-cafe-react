import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            <h3>Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map(blog => <Bookmark key={blog.id} blog={blog}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}

export default Bookmarks;