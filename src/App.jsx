import "./App.css";
import FullComment from "./components/FullComment/FullComment";
import NewComment from "./components/NewComment/NewComment";
import Comment from "./container/comment/comment";

const App = () => {
  return (
    <div className="App">
      <Comment />
      <FullComment />
      <NewComment />
    </div>
  );
};

export default App;
