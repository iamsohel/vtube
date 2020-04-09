import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Navbar from './components/Navbar';

import VideoListContextProvider from './contexts/VideoContext';

const App = () => {
  
    return (
        <VideoListContextProvider>
          <React.Fragment>
              <Navbar/>
              <div className="ui container" style={{marginTop: '30px'}}>
                <SearchBar/>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail/>
                        </div>
                      <div className="five wide column">
                            <VideoList/>
                      </div>
                  </div>    
                </div>
              </div>
          </React.Fragment>
        </VideoListContextProvider>
    );
}

export default App;
