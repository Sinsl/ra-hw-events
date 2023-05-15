import './App.css'
import Task from './tasks/Task.jsx'
import Portfolio from './filter/Porfolio.jsx'
import Store from './layouts/Store.jsx'
import Dropdown from './dropdown/Dropdown.jsx'

function App() {

  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;События и состояния&quot;</h1>
      </header>
      <Task title={"Задача 1"} component={<Portfolio />}/>
      <Task title={"Задача 2"} component={<Store />}/>
      <Task title={"Задача 3"} component={<Dropdown />}/>
    </div>
  )
}

export default App;
