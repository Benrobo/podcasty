import React from 'react'
import "./style.css"

function Playlist() {

    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9].slice(0, 5)

    return (
        <>
            {list.map((elm, i) => (
                <div class="playlist-card" key={i}>
                    <img
                        src="https://avatars.dicebear.com/api/jdenticon/cool.svg"
                        alt=""
                        class="img-fluid playlist-img"
                    />
                    <div class="info">
                        <h4>Vibes</h4>
                        <span class="count">1333 tracks</span>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Playlist
