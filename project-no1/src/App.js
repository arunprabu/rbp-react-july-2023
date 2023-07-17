import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UnitTestingDemoPage from './pages/UnitTestingDemoPage/UnitTestingDemoPage';

function App () {
  return (
    <BrowserRouter>
      <Header />

      <main className="container mt-5 pt-2">
        <p>learn react</p>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/unit-testing-demo"
            element={<UnitTestingDemoPage />}
          ></Route>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
