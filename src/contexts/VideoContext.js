import React, {createContext, useState, useEffect } from 'react';
import youtubeConfig from '../apis/youtube';

const KEY = '';

export const VideoListContext = createContext();

const VideoListContextProvider = (props) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onVideoSelect = video => {
        setSelectedVideo(video);
    }

    const onTermSubmit = async (term) => {
        try {
            const responses = await youtubeConfig.get('/search', {
                params: {
                  q: term,
                  part: "snippet",
                  maxResults: 10,
                  key: KEY,
                  type: 'video',
                }
            });
            setVideos(responses.data.items);
            setSelectedVideo(responses.data.items[0])
        } catch(error){
            console.log(error.message)
        }
    }


    return (
         <VideoListContext.Provider value={{videos, selectedVideo, onVideoSelect, onTermSubmit}}>{props.children}</VideoListContext.Provider>
    )
}

export default VideoListContextProvider;