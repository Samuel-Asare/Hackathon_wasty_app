import "../../../css/BlogComponenetsContainer.css";
import BlogBanner from "../BlogPage/BlogComponents/BlogBanner";
import BlogCard from "../BlogPage/BlogComponents/BlogCard";
import HeaderBlogSection from "../BlogPage/BlogComponents/HeaderBlogSection";
import InternationalBlogCards from "../BlogPage/BlogComponents/InternationalBlogCard";

const BlogComponentsContainer = () => {
  return (
    <div className="main-content-wrapper">
      <HeaderBlogSection />
      <BlogCard />
      <BlogBanner />
      <InternationalBlogCards />
    </div>
  );
};

export default BlogComponentsContainer;
