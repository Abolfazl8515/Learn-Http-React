const Comment = ({ c, clickHandler }) => {
  return (
    <div key={c.id} onClick={() => clickHandler(c.id)}>
      <p>Name : {c.name}</p>
      <p>Email : {c.email}</p>
    </div>
  );
};

export default Comment;
