import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import MainBtn from './components/MainBtn';
import DialogComp from './components/DialogComp';
import { useDispatch } from "react-redux";
import { dispatchUserData } from './redux/user/userSlice';
import { dispatchIsLoading } from './redux/loading/loadingSlice';

function App() {
const [error, setError] = useState(false)
const dispatch = useDispatch();

  const fetchRandomUser = async() =>{
    dispatch(dispatchIsLoading(true))
    try {
      const resp = await fetch('https://randomuser.me/api')
      const {results} = await resp.json()
   dispatch(dispatchUserData(results))
   dispatch(dispatchIsLoading(false))
    } catch (error) {
      dispatch(dispatchIsLoading(false))
      setError(true)
    }
  }

  return (
    <div className="App">
   <Header />
<User/>
<MainBtn fetchRandomUser={fetchRandomUser}/>
    {error && <DialogComp msg={'Error fetching user'} text={'Try to update the url or try again'}/>}
    </div>
  );
}

export default App;
