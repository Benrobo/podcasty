import React, { useState, useEffect } from 'react'
import BottomPlayer from '../../comp/BottomPlayer/BottomPlayer'
import Burger from '../../comp/Burger/Burger'
import Sidebar from '../../comp/LeftSidebar/Sidebar'
import Card from '../../comp/MusicCards/Card'
import Playlist from '../../comp/Playlist/Playlist'
import SearchBar from '../../comp/SearchBar/SearchBar'
import { getPodcast } from '../../helpers'
import "./home.css"

function Home() {

    const [toggleSidebar, setToggleSidebar] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [podcast, setPodcast] = useState([])

    useEffect(() => {
        setLoading(true)
        async function init() {
            let { req, res } = await getPodcast()


            if (req.status === 200) {
                setLoading(false);
                setPodcast([...res])
            }
            else {
                setLoading(false);
                setError("Something went wrong fetching podcast")
            }
        }

        init()
    }, [])

    console.log(podcast)

    function sidebarToggle() {
        setToggleSidebar(!toggleSidebar);
    }

    return (
        <>
            <Sidebar status={toggleSidebar} />
            <div className={`middle-cont ${toggleSidebar === true ? 'open' : 'closes'}`}>
                {/* search bar */}
                <SearchBar />
                <div className="favourites-cont mt-5">
                    <div className="head">
                        <h3>Top Podcast</h3>
                    </div>
                    <div className="podcast-cont mt-5">
                        {podcast.map((cast, i) => <Card {...cast} key={i} />)}
                    </div>
                </div>

                <div className="recent-cont mt-5">
                    <div className="head">
                        <h3>Resently Played</h3>
                        <small className="text-gray">Based on your last played</small>
                    </div>
                    <div className="podcast-cont mt-5">
                        {podcast.map((cast, i) => <Card {...cast} key={i} />)}
                    </div>
                </div>

                <div className="playlist-cont mt-5">
                    <div className="head">
                        <h3>Playlist</h3>
                    </div>
                    <br />
                    <div className="playlist-cards">
                        <Playlist />
                    </div>
                </div>

                <BottomPlayer />

                <Burger toggle={sidebarToggle} />
            </div>
        </>
    )
}

export default Home
