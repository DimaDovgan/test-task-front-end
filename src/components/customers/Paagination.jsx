import PaginatiumPoint from "../../images/PaginatiumPoint.svg"
import styles from "./customers.module.css"
const Paagination=()=>{
    return <div>

<div class={styles.pagination}>
  <div class={styles.pagination__box}>«</div>
  <div class={`${styles.active} ${styles.pagination__box}`}>1</div>
  <div class={styles.pagination__box}>2</div>
  <div class={styles.pagination__box}>3</div>
  <div class={styles.pagination__box} >4</div>
  
  <img src={PaginatiumPoint} className={styles.pagination__points}/>
  
  
  <div class={styles.pagination__box}>40</div>
  <div class={styles.pagination__box}>»</div>
</div>
    </div>
}
export default Paagination;