import { Link } from "react-router-dom";
import {
  SiApplemusic,
  SiSpotify,
  SiYoutubemusic,
  SiSoundcloud,
} from "react-icons/si";
import { MdEdit } from "react-icons/md";

const Card = ({
  fullName,
  apple_url,
  soundcloud_url,
  youtube_url,
  spotify_url,
  image,
  description,
  genre,
  artist_id,
}) => {
  return (
    <div className="rounded-lg w-[460px] h-48 flex flex-row justify-left items-center">
      {/* LEFT DIVISION */}
      <div className="w-48 h-full text-center flex justify-center items-center bg-slate-100 rounded-l-lg text-sm">
        <div className="rounded-l-md size-48 overflow-hidden flex justify-center items-center">
          <img className=" object-cover" src={image} />
        </div>
      </div>
      {/* RIGHT DIVISION */}
      <div className="relative flex-grow flex-col bg-[#a5978b] rounded-r-md h-full">
        <div className="absolute right-0 p-2">
          <Link to={`edit/${artist_id}`}>
            <MdEdit />
          </Link>
        </div>
        <Link to={`artists/${artist_id}`}>
          <h1 className="text-4xl p-2">{fullName} </h1>
        </Link>
        <div className="flex w-full h-10 justify-start items-center gap-2 p-2">
          <div className="relative size-6 flex justify-center items-center bg-black rounded-full">
            <div className="absolute rounded-full size-4 bg-[#a5978b] z-0"></div>
            <a href={apple_url} className="absolute">
              <SiApplemusic className="size-[1.15rem] z-10" />
            </a>
          </div>
          <a href={spotify_url}>
            <SiSpotify className="size-6" />
          </a>
          <div className="bg-black rounded-full">
            <a href={soundcloud_url}>
              <SiSoundcloud className="size-6 p-0.5 text-[#a5978b]" />
            </a>
          </div>
          <a href={youtube_url}>
            <SiYoutubemusic className="size-6" />
          </a>
          <div class="h-5 w-px bg-black mx-2"></div>
          <h5 className="max-w-40 max-h-7 overflow-hidden">{genre}</h5>
        </div>
        <p className="font-light p-2">{description} </p>
      </div>
    </div>
  );
};

export default Card;
