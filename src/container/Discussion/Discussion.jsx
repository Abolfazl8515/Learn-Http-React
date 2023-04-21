import axios from "axios";
import { useEffect, useState } from "react";
import "./Discussion.css";
import FullComment from "../../components/FullComment/FullComment";
import Comment from "../../components/Comment/Comment";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [fullComment, setFullComment] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  }, []);
  const clickHandler = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => setFullComment(res.data));
  };
  return (
    <div className="commentList">
      <section>
        {comments.length == 0 ? (
          <div>Loading...</div>
        ) : (
          comments.map((c) => {
            return <Comment c={c} clickHandler={clickHandler} />;
          })
        )}
      </section>
      <FullComment fullComment={fullComment} />
      <section>add comments</section>
    </div>
  );
};

export default Discussion;
