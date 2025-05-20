import { VideoGame } from "../models/video-game";

const GameItem = (game: Omit<VideoGame, "id">) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black opacity-0 flex items-center justify-center hover:opacity-50 transition">
          <p className="text-4xl">🎮</p>
        </div>
      </div>

      <div className="p-6">
        <h3></h3>
        <h4></h4>
      </div>
    </div>
  );
};

export default GameItem;
