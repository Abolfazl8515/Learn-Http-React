import axios from "axios";
import { useState } from "react";

const NewComment = () => {
  const [NewComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setNewComment({ ...NewComment, [e.target.name]: e.target.value });
  };
  const createCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", NewComment)
      .then((res) => console.log(res.data));
  };
  return (
    <section>
      <form onSubmit={createCommentHandler}>
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
