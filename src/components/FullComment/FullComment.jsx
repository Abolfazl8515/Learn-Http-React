import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({ commentId,deleteHandler }) => {
  const [fullComment, setFullComment] = useState({});
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3030/comments/${commentId}`)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);
  if (!commentId) return <div>Select one comment to see details</div>;
  return (
    <section>
      <p>Name is : {fullComment.name}</p>
      <p>Email is : {fullComment.email}</p>
      <p>body is : {fullComment.body}</p>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </section>
  );
};

export default FullComment;
