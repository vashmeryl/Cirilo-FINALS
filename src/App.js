import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/UIComponents/Header';
import Background from './Components/Pages/Background';
import { Footer } from './Components/UIComponents/Footer';
import Products from './Components/Pages/Products';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Background />
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
