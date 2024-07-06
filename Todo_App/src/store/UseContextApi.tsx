
import { useContext } from 'react'
import { TodoContextType } from './CreateContext'
import { TodoContext } from './CreateContext'

const UseContextApi = (): TodoContextType => {

  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
  
  
}
export default UseContextApi;
