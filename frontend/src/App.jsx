import { Routes, Route } from 'react-router';
import Display from "./pages/Display";
import RecipePage from "./pages/Form";
import Update from './pages/Update';
import Delete from './pages/Delete';

const App = () => {

  return (
    <div>
      <h1>DEMONSTRATION PROJECT INTEGRATED WITH DJANGO </h1>

      <Routes>
        <Route path='/' element={<RecipePage />} />
        <Route path='/display-items' element={<Display />} />
        <Route path='/display-items/:id' element={<Update />} />
        <Route path='/display-items/delete/:id' element={<Delete />} />
      </Routes>
    </div>

  );
};

export default App;
