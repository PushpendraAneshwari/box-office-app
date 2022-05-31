import React from "react";
import { SeasonList, SeasonsWrapper } from "./Seasons.styled";

const Seasons = ({ episodes }) => {
  return (
    <SeasonsWrapper>
      <p>
        Episodes in total: <span>{episodes.length}</span>
      </p>

      {/* <SeasonList>
        {episodes.map((episode) => {
          return (
            <div key={episode.id} className="season-item">
              <p>
                Episode :{" "}
                <span>
                  {episode.number}__
                  {episode.name}
                </span>
              </p>
            </div>
          );
        })}
      </SeasonList> */}
      {/* <p>
        Episodes in total:{" "}
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <div>
        {seasons.map((season) => (
          <div key={season.id}>
            <div>
              <p>Season {season.number}</p>
              <p>
                Episodes: <span>{season.episodeOrder}</span>
              </p>
            </div>
            <div>
              Aired:{" "}
              <span>
                {season.premiereDate} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </SeasonsWrapper>
  );
};

export default Seasons;
