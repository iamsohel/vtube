import React, { useContext, useState, useEffect} from 'react';
import { VideoListContext } from '../contexts/VideoContext';

const SearchBar = () => {

    const { onTermSubmit} = useContext(VideoListContext)
    const [term, setTerm] = useState('')

    const handleInput = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted')
        onTermSubmit(term);
    }

    useEffect(() => {
        onTermSubmit('holy quran recitation')
        }, []
    );
  
    return ( 
        <div className="search-bar ui segment">
            <form onSubmit = {handleSubmit} className="ui form">
                <div className="ui action input" style={{width:'90%'}}>
                    <input type="text" placeholder="Search" value={term} onChange={handleInput} />
                    <button className="ui icon button">
                        <i className="search icon"></i>
                    </button>
                </div>
            </form>
        </div>
    );
    
}
 
export default SearchBar;