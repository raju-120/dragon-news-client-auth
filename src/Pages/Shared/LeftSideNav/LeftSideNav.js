import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://dragon-news-server-flame-two.vercel.app/news-categories')
         .then( res => res.json())
         .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h3>All Category:  {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;