
 import Blog from "./Components/Blog/Blog"
 import Main from "./Main";
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  function App() {
    return (
      <>
      <Router>
     <Routes>
     <Route path="/Blog"  element={<Blog />}/>
     <Route path="/"  element={<Main />}/>
     </Routes>
     </Router>
      </>
    );
  }

  export default App;
