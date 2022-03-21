import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './fallback-error.module.css';

function FallbackError(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header/>
      <main>
        <div className={styles.textContainer}>
          <b>Oops, something went wrong...</b>
          <p>please refresh the page or try again later</p>
        </div>
        <Link className={styles.link} to='/'>
          <span
            className={styles.span}
            onClick={() => window.location.reload()}
          >Refresh
          </span>
        </Link>
      </main>
      <Footer/>
    </div>
  );
}

export default FallbackError;
