import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../apis/fetchData';

interface Blog {
  blogId: string;
  blogTitle: string;
  blogContent: string;
  blogMedia: string;
}

function BlogDetails() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${baseUrl}/blogs/${blogId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogDetails(data.data);
      } catch (error: unknown) {
        setError('Failed to fetch blog details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogDetails) {
    return <div>No blog details found.</div>;
  }

  return (
    <div className="blogDetails">
      <div className="blogBodyDetails">
        <div className="blogDetailsHeader">
          <h1>{blogDetails.blogTitle}</h1>
        </div>
        <div className="blogDetailImg">
          <div className="blogImgCon">
            <img src={blogDetails.blogMedia} alt="" />
          </div>
        </div>
      </div>
      {/* ====================== */}
      <div className="blogDetailsPost">
        <p>{blogDetails.blogContent}</p>
      </div>
    </div>
  );
}

export default BlogDetails;