import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import CardInfo from './components/CardInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path=":cardId" element={<CardInfo />} />
      </Routes>
    </div>
  );
}

export default App;
