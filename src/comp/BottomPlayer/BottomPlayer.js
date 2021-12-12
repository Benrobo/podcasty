import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./style.css"

function BottomPlayer() {
    return (
        <div className="bottom-player">
            <div className="main-cont">
                <div className="right">
                    <small className="podcast-title">Some Dummy Title</small>
                    <AudioPlayer
                        onPlay={e => console.log("onPlay")}
                        className="audio"
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomPlayer
