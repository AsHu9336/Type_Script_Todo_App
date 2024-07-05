import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import { TodoProvider } from './store/CreateContext';
export default function App() {

  //const [info, setinfo] = React.useState("");

  return (
    <>
      <h1 className='text-center'>Todo List</h1>
      <Navbar/>
      <Todo/>
      <List/>

    </>
  )
}
