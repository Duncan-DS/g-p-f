import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='search-from'>
                <h2>Github Search User</h2>
                <form>
                    <input type='text' />
                    <button>Search</button>
                </form>
            </div>
            <div className='search-results'>
                <div className='user'>
                    <div className='image'>
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <div className='user-info'>
                        <h3>Name of User</h3>
                        <small>ID34fj</small>
                        <a href=''>View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;