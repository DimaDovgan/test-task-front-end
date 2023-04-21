import OneCustomer from "./oneCustomer";
import styles from "./customers.module.css"
const CustomersList=({arr})=>{
    
    return <ul className={styles.customerlist}>
    <li
      className={styles.customerlist__header}
     >
    <div style={{width:172}}><p className={styles.customerlist__headertext}>customersName</p></div>
<div style={{width:131}}><p className={styles.customerlist__headertext}>company</p></div>
<div style={{width:156}}><p className={styles.customerlist__headertext}>phoneNumber</p></div>
<div style={{width:207}}><p className={styles.customerlist__headertext}>email</p></div>
<div style={{width:155}}><p className={styles.customerlist__headertext}>country</p></div>
<div style={{width:45}}><p className={styles.customerlist__headertext}>status</p></div>
    </li>
        {arr.map(({customersName,company,phoneNumber,email,country,status,id})=><OneCustomer key={id} customersName={customersName}company={company}phoneNumber={phoneNumber}email={email}country={country}status={status}id={id}/>)

        }
    </ul>
}
export default CustomersList;