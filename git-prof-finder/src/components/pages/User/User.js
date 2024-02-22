import React, { useState, useEffect } from 'react';
import './User.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import site from '../../../assets/site.png';
// import github from '../../../assets/site.png';
// import location from '../../../assets/site.png';
// import user from '../../../assets/site.png';

const User = () => {

    const { login }= useParams();

    const [userinfo, setUserInfo] = useState([]);

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUsersInformation = async () => {
         try {
            const response = await Promise.all([
                axios.get(`/user/${login}`),
                axios.get(`/user/${login}/repos`)
            ]);
            setUserInfo(response[0].data)
            setRepos(response[1].data)
         }  catch (error) {
            console.log(error);
         }
        };
        fetchUsersInformation();
    }, []);

    return (
        <div className='container'>
            <Link to='/' className='back'>
                Back
            </Link>
            <div className='user-information'>
                <div className='image'>
                    <img src={userinfo?.avatar_url} />
                </div>
                <div className='user-content'>
                    <h3>{userinfo?.name}</h3>
                    <p>
                        {userinfo?.bio}
                    </p>
                    <div className='more-data'>
                        <p>
                         <img src='' alt='' />
                         {userinfo?.followers}Followers. Following {userinfo?.following}
                        </p>
                        {userinfo?.lcoation && <p>
                         <img src='' alt='' />
                         {userinfo?.lcoation}
                        </p>}
                        {userinfo?.blog && <p>
                         <img src='' alt='' />
                         {userinfo?.blog}
                        </p>}
                        <p>
                         <img src='' alt='' />
                         <a href={userinfo?.html_url}>View GitHub Profile</a>
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