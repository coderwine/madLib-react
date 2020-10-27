
import './App.css';
import 'fontsource-roboto'
import Navbar from './components/navbar/Nav.component';
import ColorBtn from './components/colors/colors.component';

function App() {
  return (
    <div className="App">
      <ColorBtn/>
      
      <Navbar/>
    </div>
  );
}

export default App;
