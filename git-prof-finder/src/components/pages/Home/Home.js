import React, {useState} from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {

    const [query, setQuery] = useState("");

    const [users, setUsers] = useState([]);

    const handleQueryInput = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get("/search/users?q=" + query);
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSearchUsers = async (e) => {
        e.preventDefault();
        await fetchUsers();
    };

    return (
        <div className='container'>
            <div className='search-from'>
                <h2>Github Search User</h2>
                <form>
                    <input value={query} onChange={handleQueryInput} type='text' />
                    <button onClick={handleSearchUsers}>Search</button>
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