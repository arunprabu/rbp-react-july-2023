import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  console.log("Program Started");
  const [isLoading, setIsLoding] = useState(true);
  const [isError, setIsError] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // will be After Initial Rendering
    // this is an alternative to life cycle hook -- componentDidMount
    // ideal place for you to connect to REST API using axios or fetch
    // 1. Connecting to the back end.
    // 1.1 What's the REST API URL? https://jsonplaceholder.typicode.com/posts?_limit=10
    // 1.2 What's the HTTP Method? GET
    // 1.3 What's the Http Client Tool / REST API Client Tool? axios ---- npm i axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        // for successful response
        console.log(res.data);
        // 2. upon successful api call can update the state here
        setPostList(res.data);
        setIsLoding(false);
        setIsError(false);
        // you can check here for 404
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoding(false);
      })
      .finally(() => {
        console.log("It is over!");
      });
  }, []);

  console.log("Program Ended");

  if (isLoading) {
    return <div className="spinner-border text-success" role="status"></div>;
  }

  if (isError) {
    return(
      <div className="alert alert-danger">
        Some Error Occured! Try agin later;
      </div>
    )
  }

  return (
    <div>
      
      <h3>My Blog App</h3>

      <div className="row mb-2">
        {
          postList && postList.length === 0 ? 
            <div className="alert alert-danger">
              No Posts Found!
            </div>
          :
          ""
        }

        {
          // lists and keys
          postList.map((post, index) => {
            return (
              <div className="col-md-6" key={post.id}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">
                      Post Id: {post.id}
                    </strong>
                    <h3 className="mb-0">{post.title}</h3>
                    <p className="card-text mb-auto">{post.body}</p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Blog;
