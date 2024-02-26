import React, { useState, useEffect } from 'react';
import './User.css';
import { Link, useParams } from 'react-router-dom';
import Repo from '../../ui/Repo';

const User = () => {
    const { login } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userResponse = await fetch(`https://api.github.com/users/${login}`);
                const reposResponse = await fetch(`https://api.github.com/users/${login}/repos`);

                if (!userResponse.ok || !reposResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await userResponse.json();
                const reposData = await reposResponse.json();

                setUserInfo(userData);
                setRepos(reposData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInfo();
    }, [login]);

    return (
        <div className='container'>
            <Link to='/' className='back'>Back</Link>
            <div className='user-information'>
                <div className='image'>
                    <img src={userInfo.avatar_url} alt={userInfo.login} />
                </div>
                <div className='user-content'>
                    <h3>{userInfo.name}</h3>
                    <p>{userInfo.bio}</p>
                    <div className='more-data'>
                        <p>{userInfo.followers} Followers. Following {userInfo.following}</p>
                        {userInfo.location && <p>{userInfo.location}</p>}
                        {userInfo.blog && <p>{userInfo.blog}</p>}
                        <p><a href={userInfo.html_url}>View GitHub Profile</a></p>
                    </div>
                </div>
                <div className='user-repos'>
                    {repos.length > 0 ? (
                        repos.map(repo => {
                            return <Repo repo={repo} key={repo.id} />
                        })
                    ) : (
                        <h2>No repos for this user...</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default User;