import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import posts from '../../constants/data';
import "./BlogPost.css"
import { Link } from 'react-router-dom';

const BlogPost = () => {
  // const BlogPost = posts[postName];
  
  const { shortName } = useParams();
  const post = posts[shortName];

  if (!post) {
    return <div className='error'>404 Post not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [shortName]);

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }

  return (
    <div className='blogPost'>
      {post.map((item, index) => {
        switch (item.type) {
          case "margin":
            return <div className="margin" key={index}></div>;
          case "header-img":
            return <img className='header-img' src={item.src}/>;
          case "header":
            switch (item.level) {
              case 1:
                return (
                  <div className="header"  key={index}>
                    <h1>{item.text}</h1>
                    <img src={item.src} alt={item.text} />
                  </div>
                );
              case 2:
                return (
                  <div className="sub-text-container">
                    <h2 key={index}>{item.text}</h2>
                    {item.src ? <img src={item.src} alt={item.text} /> : ""}
                  </div>
                );
              case 3:
                return <h3 key={index}>{item.text}</h3>;
              default:
                return null;
            }
          case "bigger":
            return <p className="bigger" key={index}>{item.text}</p>;
          case "point":
            return <p key={index}>{item.text}</p>;
          case "break":
            return <br />;
          case "end":
            return(
              <div className="btn-container">
                <Link onClick={scrollToTop} to={"/blog/"} className='cta'>Böngésszen tovább!</Link>
              </div>
            )
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogPost;
