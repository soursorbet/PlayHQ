/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function TopRatedGamesGroup({ gamesByMetacritic }) {
  const sortedGames = gamesByMetacritic.toSorted((a, b) => {
    return b.metacriticScore - a.metacriticScore;
  });
  sortedGames.splice(4);
  return (
    <>
      <h2>Top Rated Games</h2>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <Link className="card" key={game.gameID} to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
            <br />
            {game.title}
            <br />
            {game.metacriticScore}
            <br />
          </Link>
        ))}
      </div>
    </>
  );
}
