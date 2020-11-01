import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import HomeScreen from './HomeScreen'
var db = require('./api/data.json')

export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Milk.lk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridcontainer}>
      <header className={styles.header}>
          <div className={styles.brand}>
            <button>
             <MenuIcon color="disabled" fontSize="large" />
            </button>
            <a>Milk.lk</a>
          </div>
          <div className={styles.headerlinks}>
            <a href="singin" >sign in </a>

            <a href="cart">cart</a>
          </div>
        </header>
        <main className="main">
          <div className="content">
           
            <HomeScreen/>

          </div>
        </main>
       
        </div>
      </div>
  )
}
