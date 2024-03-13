import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const{title}=bookmark
    return (
        <div className=' p-4 bg-slate-200 rounded-xl 
        m-2'>
            <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
    
}
export default Bookmark;