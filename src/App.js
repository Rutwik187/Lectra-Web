import './App.css';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import OurTeam from './components/our-team/OurTeam';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <OurTeam />
      <Join />

    </div>
  );
}

export default App;
