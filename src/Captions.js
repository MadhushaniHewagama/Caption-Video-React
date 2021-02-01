import React from "react";
import {captionData} from './data';
import '../node_modules/video-react/dist/video-react.css'
// import "node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';
import MIB2 from './MIB2.mp4'
import sub from './sub.en.vtt'
export const Captions = () => {
    return (
        // <div className="caption-container">
    

      <div className="caption-container">
      <Player videoId="video-1" autoPlay>
      <source
        src={MIB2}
        type="video/mp4"
      />
      <track
        kind="captions"
        src={sub}
        srcLang="en"
        label="English"
        default
      />
      <ControlBar autoHide={false}>
        <ClosedCaptionButton order={1} />
      </ControlBar>
      </Player>
    {/* this.player.addTextTrack({
        src: './sub.vtt',
        kind: 'subtitles',
        srclang: 'en',
        label: 'English'
      }) */}
        {/* {captionData.map((data, key) => {
          return (
            <div key={key}>
              {data.text +
                " , " +
                data.startTime +
                " ," +
                data.endTime }
            </div>
          );
        })} */}
        
      </div>


    
        // </div>
    );
}