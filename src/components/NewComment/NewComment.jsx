import { useState } from "react";

const NewComment = ({ createCommentHandler }) => {
  const [NewComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setNewComment({ ...NewComment, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <form onSubmit={(e) => createCommentHandler(e, NewComment)}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={changeHandler} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={changeHandler} />
        </div>
        <div>
          <label>body:</label>
          <input type="text" name="body" onChange={changeHandler} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};

export default NewComment;
