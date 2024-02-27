import React, { useState, useEffect } from 'react';
import './Home.css';
import User from '../../ui/User';

const Home = () => {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`);
            
            if (response.status === 403) {
                throw new Error('API rate limit exceeded. Please wait before making more requests.');
            }
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const data = await response.json();
            return data?.items;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

     const handleQueryInput = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleSearchUsers = async (e) => {
        e.preventDefault();
        if(query) {
            const items = await fetchUsers();
            setUsers(items);
        } else {
            console.log("Your query is empty...");
        }
    };

    useEffect(() => {
        const displayUserOnChange = async () => {
            if(query) {
                const items = await fetchUsers();
                setUsers(items);
            }
        }
        displayUserOnChange();
    }, [page, limit, query]);

    return (
        <div className='container'>
            <div className='search-form'>
                <h2>Github Search User</h2>
                <form onSubmit={handleSearchUsers}>
                    <input value={query} onChange={handleQueryInput} type='text' />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className='search-results'>
            { users && users.length > 0 ? (
                users.map((user) => {
                    return <User user={user} key={user.id} />
                })
                ) : (
                <h2>There is nothing to display...</h2>
            )}
            </div>
        </div>
    );
};

export default Home;