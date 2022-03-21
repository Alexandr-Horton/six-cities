import { ClipLoader } from 'react-spinners';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './loading-screen.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.imageWrapper}>
        <ClipLoader
          color='black'
          size={60}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Loader;
