import { Link } from "react-router-dom";
import "../../../../css/BlogCards.css";

import data from "../../../../JSON/InternationalBlogContent.json";
import { useMemo, useState } from "react";

const InternationalBlogCards = () => {
  const [blogData, setBlogData] = useState(data);

  useMemo(() => {
    setBlogData(data);
  }, []);

  return (
    <div className="localCardsWrapper">
      <div className="headline">
        <h5>International Stories</h5>
      </div>
      <div className="localCardsContent">
        {blogData.map((item) => (
          <div className="blog-card" key={item.key}>
            <Link to={`/blog/${item.key}`}>
              <div className="image_div">
                <img src={`${item.image}`} alt="blog image" />
                <div className="content">
                  <h6 className="title">{item.title}</h6>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              <div className="information">
                <p className="date">
                  Date: <span>{item.date}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalBlogCards;
