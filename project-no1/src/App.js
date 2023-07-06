import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div >
      <Header />
      
      <main className='container mt-5 pt-2'>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
