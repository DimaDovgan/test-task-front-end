import menuDashBort from '../../images/menuDashBort.svg';
import Products from "../../images/menuProduct.svg";
import Customers from "../../images/Customers.svg";
import Income from "../../images/income.svg";
import Promote from "../../images/promote.svg";
import Help from "../../images/help.svg";
import Arrow from "../../images/arrow.svg";
import styles from './menu.module.css';
import ArrowActive from '../../images/arrowActive.svg'
import Evano from "../../images/projectManager.png"
const Menu=()=>{
return <div className={styles.menu}>
<div>
    <div className={styles.logo__div}><img src="logoImg.png"className={styles.logo__img}/><p className={styles.logo__text}>Dashboard</p><p className={styles.logo__appversion}>v.01</p></div>
    <ul className={styles.menu__list}>
        <li className={styles.menu__list__element}>
        <div className={styles.menu__list__elementhelp}>
        <img src={menuDashBort} className={styles.menu__list__elementicone} />
        <p className={styles.menu__list__elementtext}>Dashboard</p>
        </div>
        </li>
        <li className={styles.menu__list__element}>
        <div className={styles.menu__list__elementhelp}>
        <img src={Products} className={styles.menu__list__elementicone}/><p className={styles.menu__list__elementtext}>Product</p></div>
         <img src={Arrow} className={styles.menu__list__elementarrow} /></li>
        <li className={styles.menu__list__elementActive}>
        <div className={styles.menu__list__elementhelp}>
        <img src={Customers} className={styles.menu__list__elementicone }/><p className={styles.menu__list__elementtextActive}>Customers</p>
        </div>
         <img src={ArrowActive} className={styles.menu__list__elementarrowActive}/></li>
        <li className={styles.menu__list__element}>
        <div className={styles.menu__list__elementhelp}>
        <img src={Income} className={styles.menu__list__elementicone}/><p className={styles.menu__list__elementtext}>Income</p>
        </div>
         <img src={Arrow} className={styles.menu__list__elementarrow}/></li>
        <li className={styles.menu__list__element}>
        <div className={styles.menu__list__elementhelp}>
        <img src={Promote} className={styles.menu__list__elementicone}/><p className={styles.menu__list__elementtext}>Promote</p>
        </div>
         <img src={Arrow} className={styles.menu__list__elementarrow}/></li>
        <li className={styles.menu__list__element}>
        <div className={styles.menu__list__elementhelp}><img src={Help} className={styles.menu__list__elementicone}/><p className={styles.menu__list__elementtext}>Help</p>
        </div>
         <img src={Arrow} className={styles.menu__list__elementarrow}/></li>
    </ul>
    </div>
    <div className={styles.mr__evano}>
        <img src={Evano }/><div>
            <p>Evano</p>
            <p>Project Manager</p>
        </div>
    </div>
</div>
}
export default Menu;