import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime }) => {
    // console.log(bookmarks)
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 pt-4 mt-4 p'>
            <h2 className='font-black ml-2'>Reading Time: {readingTime} min</h2>
            <h2 className='font-black ml-2'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array
    // readingTime: PropTypes.number
}
export default Bookmarks;