import React, {useContext} from 'react';
import { VideoListContext } from '../contexts/VideoContext';
import './VideoItem.css';

const VideoItem = ({video}) => {
    const { onVideoSelect } = useContext(VideoListContext)
    return ( 
         <div onClick={() => onVideoSelect(video)} className="item video-item">
             <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="I am sohel"/>
             <div className="content">
                 <div className="header">
                    {video.snippet.title}
                 </div>
             </div>
             
        </div> 
    );
}
 
export default VideoItem;