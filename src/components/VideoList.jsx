import React, {useContext} from 'react';
import VideoItem from './VideoItem';
import { VideoListContext } from '../contexts/VideoContext';

const VideoList = () => {
    const { videos } = useContext(VideoListContext);
    let renderList;
    if(videos.length){
        renderList = videos.map(v => {
            return <VideoItem key={v.id.videoId} video= {v}/>
       })
    } 
   
    return ( <div className="ui relaxed divided list">{renderList}</div> );
}
 
export default VideoList;