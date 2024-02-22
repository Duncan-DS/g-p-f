import React, {useState} from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {

    const [query, setQuery] = useState("");

    const [users, setUsers] = useState([]);

    const [page, setPage] = useState(1);

    const [limit, setLimit] =useState(10);

    const handleQueryInput = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handlePrevPage = () => {
        setPage(page => {
            if(page === 1) return page;
            else return page - 1;
        })
    };

    const handleNextPage = () => {
        setPage(page => page + 1);
    };

    const handlePageLimit = () => {
        const value = e.target.value
        setLimit(parseInt(value));
    };

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get("/search/users?q=" + query);
            return data?.items;
        } catch (error) {
            console.error(error)
            return null;
        }
    };

    const handleSearchUsers = async (e) => {
        e.preventDefault();
        if(query) {
            const items = await fetchUsers();
            setUsers(items);
        }
        else {
            console.log("You're query is empty...")
        }
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
                <div className='more-options'>
                    <label>
                        <small>Per Page</small>
                        <select onChange={handlePageLimit}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                    <div className='pagination'>
                        <button onClick={handlePrevPage}>1</button>
                        <button onClick={handleNextPage}>2</button>
                    </div>
                </div>
                { users ? (
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