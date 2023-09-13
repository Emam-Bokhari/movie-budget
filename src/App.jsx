import { useState } from 'react';
import Carts from './components/Carts/Carts';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

const App = () => {

  const [selectActor, setSelectActor] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [remaining, setRemaining] = useState(0)

  const select = (actor) => {
    let count = actor.salary
    const isExixt = selectActor.find(item => item.id === actor.id)

    if (isExixt) {
      return alert('Already included')
    }
    selectActor.forEach(item => {
      count = count + item.salary
    })
   
    if(count>20000){
      return alert ('Your balance is over')
    }

    setTotalCost(count)
    const totalRemaining = 20000 - count
    setRemaining(totalRemaining)
    const newSelectActor = [...selectActor, actor]
    setSelectActor(newSelectActor)
  }

  return (
    <div className='max-w-screen-xl mx-auto px-8 md:px-16'>
      <Header />
      <div className="flex flex-col md:flex-row gap-5">
        <Movies select={select} />
        <Carts selectActor={selectActor} totalCost={totalCost} remaining={remaining} />
      </div>
    </div>
  )
}
export default App




