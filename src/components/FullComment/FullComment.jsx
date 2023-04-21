const FullComment = ({fullComment}) => {
  return (
    <section>
      <p>Name is : {fullComment.name}</p>
      <p>Email is : {fullComment.email}</p>
      <p>body is : {fullComment.body}</p>
    </section>
  );
};

export default FullComment;
