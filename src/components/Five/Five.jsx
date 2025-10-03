import "./five.css";
import React, { useState, useEffect } from "react";
import { getBlogs, getStrapiImageUrl } from "../../services/api";

// Fallback data in case API is not available
const fallbackBlogs = [
  { title: "Rainer Schönfelder", excerpt: "A website relaunch that goes deeper" },
  { title: "Thought leadership", excerpt: "Thought leadership through sustainable way" }
];

const Five = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await getBlogs(6); // Fetch 6 latest blogs
        
        if (data && data.length > 0) {
          // Transform Strapi data to component format
          const transformedBlogs = data.map(blogItem => ({
            title: blogItem.attributes.title,
            excerpt: blogItem.attributes.excerpt,
            image: getStrapiImageUrl(blogItem.attributes.featuredImage),
            slug: blogItem.attributes.slug,
            publishDate: blogItem.attributes.publishDate,
            author: blogItem.attributes.author
          }));
          setBlogs(transformedBlogs);
        } else {
          // Use fallback if no data from API
          setBlogs(fallbackBlogs);
        }
      } catch (err) {
        console.error("Error loading blogs:", err);
        // Use fallback data on error
        setBlogs(fallbackBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const cardClasses = ["cards", "cards-2", "cards-3", "cards-4", "cards-5", "cards-6"];
  const cardHeadClasses = ["card-head", "card-head-2", "card-head", "card-head-2", "card-head", "card-head-2"];

  return <div className="fi">
      <div className="blog-back">
          <div className="blog-head">Blog</div>
          <p className="blog-about">
          Many voices, one blog. A first impression of how we tick. Also: <br />
          Developments, trends and opinions that move us in digitalwerk, but also <br />
          beyond. And of course a look behind the scenes - about the development of our projects and <br />
          work come from.
          </p>
          {loading && <div className="loading-message">Loading blog posts...</div>}
          {blogs.slice(0, 6).map((blog, index) => (
            <div key={index} className={cardClasses[index]} style={blog.image ? {backgroundImage: `url(${blog.image})`} : {}}>
              <div className={cardHeadClasses[index]}>
                {blog.title}
                {blog.excerpt && ` - ${blog.excerpt}`}
              </div>
            </div>
          ))}
      </div>
      <div className="footer">
          <p className="digi">Let's get physical or keep it digital</p>
          <h1 className="get-in">Get in touch</h1>
      </div>
      <a href="https://instagram.com/wearepuredigital" className="credit" target="_blank" rel="noopener noreferrer">@wearepuredigital  &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;Instagram</a>
  </div>;
};

export default Five;
