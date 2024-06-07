
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './Components/AddBook';
import DeleteBook from './Components/DeleteBook';
import SearchBook from './Components/SearchBook';
import ViewAllBooks from './Components/ViewAllBooks';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddBook/>} />
    <Route path='/Search' element={<SearchBook/>} />
    <Route path='/Delete' element={<DeleteBook/>} />
    <Route path='/View' element={<ViewAllBooks/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
