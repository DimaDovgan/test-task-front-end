import {Filter} from "./filter"
import CustomersList from "./customersList"
import { useSelector } from "react-redux";
import styles from "./customers.module.css"
import Pagination from "./Paagination"
const Customers=()=>{
    //const customersArr = useSelector(state => state.dashBoard.customers);
    const item = useSelector(state => {
        let filterArr = state.dashBoard.customers;
        return filterArr.filter(customer => customer.customersName.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase()) ||
        customer.company.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase())||
        customer.phoneNumber.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase())||
        customer.email.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase())||
        customer.country.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase())||
        customer.status.toLocaleLowerCase().includes(state.dashBoard.filter.toLocaleLowerCase())
        )
    })
    return <div className={styles.customers__component}>
    <span className={styles.header__bootonLine}></span>
       <div className={styles.customerslist__titleblok}>
       <div>
       <h2 className={styles.customerslist__title}>All Customers</h2>
        <a href="#" className={styles.active__link}>Active Members</a>
       </div>

       <Filter/>
       </div>
       <CustomersList arr={item}/>
       <div className={styles.customers__booton}>
       <p className={styles.bootomText}>Showing data 1 to 8 of  256K entries</p>
       <Pagination/>
       </div>
       
    </div>
}
export default Customers;