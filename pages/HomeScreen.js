import Link from "next/link";
var db = require('./api/data.json')
import styles from '../styles/Home.module.css'

function HomeScreen() {
    return (
    <ul className={styles.products}>
        
                <li>

                    <div className={styles.product}>
                        <a href={'/products/' + db._id}>
                            <img className={styles.productimg} src={db.image} alt="Product"/>
                        </a>
                        <div className={styles.productname}>
                            <a href={'/products/' + db._id}>{db.name}</a>
                        </div>
                        <div className={styles.productbrand}>{db.brand}</div>
                        <div className={styles.price}>${db.price}</div>

                    </div>

                </li>
        


    </ul>)
}

export default HomeScreen;