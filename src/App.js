
import './index.css';
import { useSelector } from "react-redux";
import Menu from './components/menu';
import Customers from './components/customers';
function App() {
  const value = useSelector(state => state);
  // console.log(value.dashBoard.customers
  //   )
  return (
   <div className="app">
<Menu/>
<div>
<img src="Hello Evano 👋🏼,.png" className='heloIvano__img'/>
<Customers/>
</div>

   </div>
  );
}

export default App;
