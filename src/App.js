import Banner from "components/banner";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
      </div>
    </Router>
  );
}

export default App;
