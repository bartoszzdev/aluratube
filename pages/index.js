import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline playlists={config.playlists} searchValue={valorDoFiltro} />
      </div>
    </>
  );
}

export default HomePage;

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
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  /* background-image: url(${config.bg}); */
  background-image: url(${ ({ bg }) => bg });
  height: 230px;
`

function Header() {
  return (
    <StyledHeader>
      {/* <img src="" alt="" /> BANNER   */}
      <StyledBanner bg={config.bg} />

      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="Foto de perfil do github"
        />

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

/* TIMELINE COMPONENT */
function Timeline({ searchValue, ...props }) {
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];

        return (
          <section key={index}>
            <h2>{playlistName}</h2>

            <div>
              {videos
                .filter((video) => {
                  const videoTitleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()
                  return videoTitleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a href={video.url} key={index}>
                      <img src={video.thumb} alt={video.title} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
