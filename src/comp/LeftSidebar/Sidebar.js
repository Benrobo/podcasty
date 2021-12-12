import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, MicrophoneIcon, CollectionIcon, MusicNoteIcon } from '@heroicons/react/solid'

import "./sidebar.css"

function Sidebar({ status }) {
    return (
        <div className={status === true ? "left-sidebar open" : "left-sidebar close"}>
            <div className="top-head">
                <MicrophoneIcon className="logo" />
                <h5>Podcasty</h5>
            </div>
            <div className="body">
                <ul className="list-item">
                    <Link to="/">
                        <HomeIcon className="icon" />
                        Home
                    </Link>
                    <Link to="/recent">
                        <MusicNoteIcon className="icon" />
                        Recently
                    </Link>
                    <Link to="/playlist">
                        <CollectionIcon className="icon" />
                        Playlist
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
