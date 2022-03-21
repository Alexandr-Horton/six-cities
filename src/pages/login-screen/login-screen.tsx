import Header from '../../components/header/header';
import SignIn from '../../components/sign-in/sign-in';

function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <SignIn/>
    </div>
  );
}

export default Login;
