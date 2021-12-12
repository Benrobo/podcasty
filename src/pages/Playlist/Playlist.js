import React from 'react'
import "./playlist.css"
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'


function Playlist() {
    return (
        <>
            <div className="back">
                <Link to="/">
                    <ArrowLeftIcon className="icon" />
                </Link>
            </div>
            <div className="main-container">
                <div className="head">
                    <h3>Playlists</h3>
                </div>
                <hr />
                <div className="playlist-cards">
                    <div className="playlist-card">
                        <img
                            src="https://avatars.dicebear.com/api/jdenticon/cool.svg"
                            alt=""
                            className="img-fluid"
                        />
                        <br />
                        <span className="title">Playlist Title</span>
                        <span className="tracks">Tracks 200</span>
                        <br />
                        <br />
                    </div>
                    <div className="playlist-card">
                        <img
                            src="https://avatars.dicebear.com/api/jdenticon/test.svg"
                            alt=""
                            className="img-fluid"
                        />
                        <br />
                        <span className="title">Playlist Title</span>
                        <span className="tracks">Tracks 200</span>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist
