import React,{useState} from 'react';
import Header from '../components/Header';
import User from '../components/User';
import MainBtn from '../components/MainBtn';
import DialogComp from '../components/DialogComp';
import FooterComp from '../components/FooterComp';
import { useDispatch } from "react-redux";
import { dispatchUserData } from '../redux/user/userSlice';
import { dispatchIsLoading } from '../redux/loading/loadingSlice';
const Home = () => {
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
    <section id='hero-container'>
    <div id='hero-text'>
    <h1>Random Users</h1>
    <p style={{maxWidth:'600px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lectus quam. Morbi vestibulum scelerisque velit non lobortis. Aenean consectetur pharetra mauris, lobortis bibendum ipsum elementum vitae.</p>
    <MainBtn fetchRandomUser={fetchRandomUser}/>
    <User/>
    </div>
    <div id='hero-image'>
      <img loading='lazy' alt='developer' style={{width:'100%',maxHeight:'500px'}} src='/assets/developer.png'/>
    </div>
    </section>

    <FooterComp />
    {error && <DialogComp msg={'Error fetching user'} text={'Try to update the url or try again'}/>}
    </div>
  )
}

export default Home