import React, { useContext}  from 'react';
import { VideoListContext } from '../contexts/VideoContext';

const VideoDetail = ({video}) => {
    const { selectedVideo } = useContext(VideoListContext)
    if(!selectedVideo){
        return <div><button className="ui loading button">Loading</button></div>
    }
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
         <div>
             <div className="ui embed">
                 <iframe title="Vidoe player" src={videoSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                  />
             </div>
             <div className="ui segment">
                 <h4 className="ui header"> {selectedVideo.snippet.title}</h4>
                 <p>  {selectedVideo.snippet.description}</p>
             </div>
            
        </div> 
    );
}
 
export default VideoDetail;
