import './App.css';
import YJQ from './Components/YJQ';
import Intro from './Components/abstract';
import Navbar from './Components/Nav';
function App() {
  return (
    <div class="container">
      <section id="sec-1">
      <div>
        <YJQ value = 'iks'>
        </YJQ>
        </div>
      <div>
        <Intro>
          </Intro>
        </div>
       
        <a href="#sec-2">
        <div class = "scroll-down">
            </div>
        </a>
        </section>
        <section id = "sec-2">
          <Navbar/>
         
        </section>
      </div>
  );
}

export default App;
