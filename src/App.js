import './App.css';
import Menubar from './components/Menubar';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
  return (
    <>
    <Menubar/>
    <header>
    <Hero/>
    </header>
    <Main/>
    <Footer/>
   </>
  );
}
export default App;
