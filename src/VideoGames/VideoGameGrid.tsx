import { VideoGame } from "../models/video-game";
import GameItem from "./GameItem";

interface Props {
  games: VideoGame[];
}

const VideoGameGrid = ({ games }: Props) => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white font-bold">Featured Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameItem key={game.id} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGameGrid;
