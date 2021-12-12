import React, { useState } from 'react'
import { PlayIcon, DotsHorizontalIcon } from "@heroicons/react/solid"

import "./Card.css"
import { request } from '../../helpers';

function Card({
    id,
    name,
    smImg,
    genreName,
    bgImg,
    genres,
    feedUrl
}) {

    const [toggleInfo, setToggleInfo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);

    function handleToggle() {
        setToggleInfo(!toggleInfo)
    }

    async function handlePlay(e) {
        setLoading(true)
        let { url } = e.target.dataset
        let audioCont = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".bottom-player");

        let api = "http://localhost:5000/api/podcastAudio"
        let { req, res } = await request(api, "post", { url }, {
            "content-type": "application/json"
        })

        let audio = audioCont.querySelector("audio")

        if (req.status === 200 && res) {
            audio.src = res.audio;
            audio.play()
            setPlaying(true)
            setLoading(false);
        }

    }

    function handlePlaylist(e) {
        let { img, title, feedUrl } = e.target.dataset
        if (localStorage.getItem("Podcasty") === null || localStorage.getItem("Podcasty") === undefined) {
            let table = {
                playlist: [],
                recent: []
            }
            localStorage.setItem("Podcasty", JSON.stringify(table))
        }

        let storage = JSON.parse(localStorage.getItem("Podcasty"));

        if (storage.playlist.length === 0) {
            let tracks = 0;
            let ask = window.confirm("Playlist not found, would you like to create one")
            if (ask === true) {
                let playlistName = window.prompt("Playlist Name");

                let saveData = {
                    name: playlistName,
                    tracks: tracks++,
                    podcasts: [
                        {
                            title,
                            img,
                            feedUrl
                        }
                    ]
                }

                storage.playlist.push(saveData)

                localStorage.setItem("Podcasty", JSON.stringify(storage))
                alert("Playlist created")
            }
        }
        else {
            let storage = JSON.parse(localStorage.getItem("Podcasty"));
            let playlist = storage.playlist;

            playlist.map((list, i) => {
                let tracks = list.tracks
                let name = prompt(`
                    Available Playlist
                    ${i}. ${list.name}
                `);

                // check if that name exist
                if (list.name.toLowerCase() === name.toLowerCase()) {
                    let saveData = {
                        name,
                        tracks: tracks += 1,
                        podcasts: [
                            {
                                title,
                                img,
                                feedUrl
                            }
                        ]
                    }

                    storage.playlist.push(saveData)

                    localStorage.setItem("Podcasty", JSON.stringify(storage))
                    return alert("Playlist created")

                }
                else {
                    let ask = window.confirm("Playlist name not found, create new playlist")

                    if (ask === true) {
                        let playlistName = window.prompt("Playlist Name");

                        let saveData = {
                            name: playlistName,
                            tracks: tracks++,
                            podcasts: [
                                {
                                    title,
                                    img,
                                    feedUrl
                                }
                            ]
                        }

                        storage.playlist.push(saveData)

                        localStorage.setItem("Podcasty", JSON.stringify(storage))
                        alert("Playlist created")
                    }
                }
            })
        }
    }

    return (
        <>
            <div className="podcast-card" data-id={id}>
                <img
                    src={bgImg}
                    alt=""
                    className={loading === true ? "podcast-img loading" : "podcast-img"}
                />
                <div className="podcast-info">
                    {/* <PlayIcon className="play" data-url={feedUrl} onClick={handlePlay} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="play" data-url={feedUrl} onClick={handlePlay}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" data-url={feedUrl} />
                    </svg>
                    <DotsHorizontalIcon className="more" onClick={handleToggle} />
                    {/* <!-- more info --> */}
                    {toggleInfo && <div className="more-info">
                        <li onClick={handlePlaylist} data-img={bgImg} data-title={name} data-feedUrl={feedUrl}>Add to playlist</li>
                    </div>}
                </div>
                <br />
                <span className="title">{name}</span>
            </div>
        </>
    )
}

export default Card
