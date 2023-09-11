import PropTypes from 'prop-types'
const Bookmark = ({blog}) => {
    const {title} = blog;
    return (
        <div className='p-4 bg-slate-200 my-2 mx-2 rounded-xl'>
           <h2 className='text-2xl font-semibold'>{title}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    blog: PropTypes.object
}

export default Bookmark;