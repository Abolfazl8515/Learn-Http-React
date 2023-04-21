import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Discussion from "./container/Discussion/Discussion";

const App = () => {
  return (
    <div className="App">
      <Discussion/>
      <ToastContainer/>
    </div>
  );
};

export default App;
