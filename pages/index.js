import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"


function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage

/* MENU COMPONENT */
/* function Menu() {
    return (
        <div>Menu</div>
    )
} */

/* HEADER COMPONENT */
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        width: 100%;
        padding: 16px 32px;
        display: flex;
        align-items: center;
        gap: 16px;
    }
`

function Header() {
    return (
        <StyledHeader>
            {/* <img src="" alt="" /> BANNER   */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="Foto de perfil do github" />

                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

/* TIMELINE COMPONENT */
function Timeline(props) {
    console.log(props.playlists)
    const playlistsNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName, index) => {
                const videos = props.playlists[playlistName]
                console.log(playlistName, videos)

                return (
                    <section key={index}>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos.map((video, index) => {
                                return (
                                    <a href={video.url} key={index}>
                                        <img src={video.thumb} alt={video.title} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}