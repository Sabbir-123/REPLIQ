import React from 'react';
import Header from './Header/Header';
import Team from './Team/Team';
import Feature from './Feature/Feature';
import Searchbar from '../../Components/Navbar/Searchbar';


const Home = () => {

    return (
        <div>
            <Searchbar></Searchbar>
           <div className='violetColor'> 
           <Header></Header>
           </div>
           <div className='purple App'>
            <Team></Team>
           </div>
           <div className='violetColor'>
            <Feature></Feature>
           </div>
        </div>
    );
};

export default Home;