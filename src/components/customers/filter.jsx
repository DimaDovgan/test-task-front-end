import styles from "./customers.module.css"
import {FilterValueState} from '../../redux/Acions/Actions'
import { useSelector,useDispatch } from "react-redux";
import serchimg from "../../images/search 1.svg"
export const Filter = () => {
    const filterValue = useSelector(state => state.dashBoard.filter);
    const dispatch = useDispatch();
    return <div className={styles.serch__blok}>
    <img src={serchimg}/>
    <input
        className={styles.input}
        type="text"
        name="filter"
        value={filterValue}
        placeholder="Search"
        required
        onChange={(event) => dispatch(FilterValueState(event.currentTarget.value))}
    />
    </div>
}