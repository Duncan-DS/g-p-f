import React from 'react';
import './User.css';
import site from '../../../assets/site.png';
import github from '../../../assets/site.png';
import location from '../../../assets/site.png';
import user from '../../../assets/site.png';

const User = () => {
    return (
        <div className='container'>
            <Link to='/' className='back'>Back</Link>
            <div className='user-information'>
                <div className='image'>
                    <img src='' alt='' />
                </div>
                <div className='user-content'>
                    <h3>Name of the User</h3>
                    <p>Lorem</p>
                    <div className='more-data'>
                        <p>
                         <img src={user} alt='' />Followers. Following
                        </p>
                        <p>
                         <img src={location} alt='' />South Afirca
                        </p>
                        <p>
                         <img src={site} alt='' />Portfolio.com
                        </p>
                        <p>
                         <img src={github} alt='' /><a href='#'>View GitHub Profile</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='user-repos'>
                <div className='repo'>
                    <h3>
                        <a href='#'>Name of Repo</a>
                    </h3>
                    <p>Lorem</p>
                    <small>Written in JS</small>
                </div>
            </div>
        </div>
    );
};

export default User;