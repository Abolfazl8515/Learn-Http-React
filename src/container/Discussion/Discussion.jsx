import axios from "axios";
import { useEffect, useState } from "react";
import "./Discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [fullComment, setFullComment] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  }, []);
  const clickHandler = (id) => {
    const clickedComment = comments.find((c) => c.id === id);
    setFullComment(clickedComment);
  };
  return (
    <div className="commentList">
      <section>
        {comments.length == 0 ? (
          <div>Loading...</div>
        ) : (
          comments.map((c) => {
            return (
              <div key={c.id} onClick={() => clickHandler(c.id)}>
                <p>Name : {c.name}</p>
                <p>Email : {c.email}</p>
              </div>
            );
          })
        )}
      </section>
      <section>
        <p>Name is : {fullComment.name}</p>
        <p>Email is : {fullComment.email}</p>
        <p>body is : {fullComment.body}</p>
      </section>
      <section>add comments</section>
    </div>
  );
};

export default Discussion;
