import styles from "./customers.module.css"

const OneCustomer=({customersName,company,phoneNumber,email,country,status,id})=>{
return <li key={id} className={styles.customerlist__li}>
<div style={{width:172}}><p className={styles.customerlist__customerstext}>{customersName}</p></div>
<div style={{width:131}}><p className={styles.customerlist__customerstext}>{company}</p></div>
<div style={{width:156}}><p className={styles.customerlist__customerstext}>{phoneNumber}</p></div>
<div style={{width:207}}><p className={styles.customerlist__customerstext}>{email}</p></div>
<div style={{width:140}}><p className={styles.customerlist__customerstext}>{country}</p></div>
<div style={{width:80}}><button className={status==="Active"?styles.customerlist__statusBtnActive:styles.customerlist__statusBtnInActive}>{status}</button></div>
</li>
}
export default OneCustomer