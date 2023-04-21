import axios from "axios";
import { useEffect, useState } from "react";
import "./Discussion.css";
import FullComment from "../../components/FullComment/FullComment";
import Comment from "../../components/Comment/Comment";
import NewComment from "../../components/NewComment/NewComment";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  }, []);
  const clickHandler = (id) => {
    setCommentId(id);
  };
  return (
    <div className="commentList">
      <section>
        {comments.length == 0 ? (
          <div>Loading...</div>
        ) : (
          comments.map((c) => {
            return <Comment c={c} clickHandler={clickHandler} key={c.id} />;
          })
        )}
      </section>
      <FullComment commentId={commentId} />
      <NewComment />
    </div>
  );
};

export default Discussion;
