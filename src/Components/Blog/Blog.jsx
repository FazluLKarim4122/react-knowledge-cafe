import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags }= blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes ={
    Blog: PropTypes.object.isRequired
}
export default Blog;