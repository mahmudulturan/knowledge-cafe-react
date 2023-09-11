import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handlerBookmark, handlerMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handlerBookmark={handlerBookmark}
            handlerMarkAsRead={handlerMarkAsRead}
            blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handlerBookmark: PropTypes.func.isRequired,
  handlerMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
