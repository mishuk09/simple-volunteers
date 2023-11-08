import React from 'react';
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volanteers, setVolanteers] = useState([]);


    const[searchHandle,setSearchHandle]=useState([]);

    const handle=event=>{
        const searchText=event.target.value;
        const match=volanteers.filter(v=>v.title.includes(searchText));
        setSearchHandle(match)

    }

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolanteers(data));

    }, [])
    return (
        <div className='activity'>
            <h2>Volunteers:{volanteers.length}</h2>
            <input onChange={handle} type="text" placeholder='Search' />
            <div className="activity-container">
                {
                    searchHandle.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)

                }
            </div>

        </div>
    );
};

export default Main;