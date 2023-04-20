
import './App.css';
import { useSelector } from "react-redux";
import Menu from './components/menu';
function App() {
  const value = useSelector(state => state);
  console.log(value.dashBoard.customers
    )
  return (
   <div>
<Menu/>
   </div>
  );
}

export default App;
