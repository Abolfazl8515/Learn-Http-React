import { useEffect, useState } from "react";
import "./Discussion.css";
import FullComment from "../../components/FullComment/FullComment";
import Comment from "../../components/Comment/Comment";
import NewComment from "../../components/NewComment/NewComment";
import { deleteMethod, get, post } from "../../services/httpService";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState(null);
  useEffect(() => {
    get("/comments").then((res) => {
      setComments(res.data);
    });
  }, []);
  const clickHandler = (id) => {
    setCommentId(id);
  };
  const deleteHandler = async () => {
    await deleteMethod(`/comments/${commentId}`);
    const { data } = await get("/comments/");
    setComments(data);
    setCommentId(null);
  };
  const addNewCommentHandler = (e, newComment) => {
    e.preventDefault();
    post("/comments", newComment).then((res) => {
      setComments([...comments, res.data]);
      toast.success("Comment successfully added !");
    });
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
      <FullComment commentId={commentId} deleteHandler={deleteHandler} />
      <NewComment createCommentHandler={addNewCommentHandler} />
    </div>
  );
};

export default Discussion;
