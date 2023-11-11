
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
  const coffess = useLoaderData();
  console.log(coffess);

  return (
    <div className='m-20'>
      <h2 className='text-4xl text-center mb-8 text-blue-400'>Show Coffee: {coffess.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffess.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
