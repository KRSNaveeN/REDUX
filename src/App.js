import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {
  const auth = useSelector((state)=> state.authdata.auth);
  return (
    <>
    <Header/>
    {!auth ? <Auth/>: <UserProfile/>}
    <Counter />
    </>
    
  );
}

export default App;
