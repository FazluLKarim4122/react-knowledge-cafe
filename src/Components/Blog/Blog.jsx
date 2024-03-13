import PropTypes from 'prop-types';
import bookmark from '../../assets/images/bookmark.svg'


const Blog = ({blog,handleAddToBookmark}) => {
    console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags }= blog;
    return (
        <div className='mb-20'>
            <img className='rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-5'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full bg-gray-100
                    ' src={author_img} alt="" />
                    <div className='ml-5'>
                        <p>{author}</p>
                        <p className='text-base font-medium text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <span  className='text-[#11111199] font-medium text-xl mx-1'>{reading_time} min read</span>
                    <button><img src={bookmark} alt="" /> </button>
                </div>
            </div>
            <h2 className='text-4xl mt-4'>{title}</h2>
           
            <p className='text-xl font-medium text-[#11111199] mt-4'>
                {
                    hashtags.map(hash => <span key={blog.id}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button className='mt-4 '><a href="">Mark as Read</a></button>
            
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;