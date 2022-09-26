import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ song, handlePause, handlePlay, activeSong, isPlaying }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  )
);

export default PlayPause;
