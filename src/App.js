import './App.css';
import NavBar from './Components/NavBar';
import Forms from './Components/Forms';
import Agree from './Components/Agree';

function App() {
  return (
    <div className = 'App'>
      <NavBar/>
      <h1 >Create Signup Forms For any Website</h1>
      <h5>Convert more visitors to subscribers with a professional signup form embedded on your website.</h5>
      <Forms/>
      <Agree/>
    </div>
  );
}

export default App;
