import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
export default function App() {

  //const [info, setinfo] = React.useState("");

  return (
    <>
      <h1 className='text-center'>Todo List</h1>
      <Navbar/>
      <Todo/>

    </>
  )
}
