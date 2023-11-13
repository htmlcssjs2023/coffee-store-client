
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const LodedCoffess = useLoaderData();
  const [coffees, setCoffee] = useState(LodedCoffess);
 

  return (
    <div className="m-20">
      <h2 className="text-4xl text-center mb-8 text-blue-400">
        Show Coffee: {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffee={setCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App
