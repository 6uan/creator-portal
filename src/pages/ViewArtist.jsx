import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  SiApplemusic,
  SiSpotify,
  SiYoutubemusic,
  SiSoundcloud,
} from "react-icons/si";
import supabase from "../utils/client.js";

const ViewArtist = () => {
  const { artist_id } = useParams();
  const [artist, setArtist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtist = async () => {
      const { data, error } = await supabase
        .from("userartists")
        .select("*")
        .eq("artist_id", artist_id)
        .single(); // Fetch a single record based on artist_id
      if (error) {
        console.error("Error fetching artist:", error);
      } else {
        setArtist(data);
      }
    };
    fetchArtist();
  }, [artist_id]);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("userartists")
      .delete()
      .eq("artist_id", artist_id);

    if (error) {
      console.error("Error deleting artist:", error);
    } else {
      navigate("/"); // Redirect to the home page
    }
  };

  if (!artist) {
    return;
    <div className="w-full flex justify-center items-center">
      <p className="text-7xl">Loading...</p>;
    </div>;
  }

  return (
    <div className="w-screen h-dvh flex justify-center items-center">
      <div className="rounded-lg w-[960px] h-[400px] flex flex-row justify-left items-center">
        {/* LEFT DIVISION */}
        <div className="w-80 h-full text-center flex justify-center items-center bg-slate-100 rounded-l-lg text-sm">
          <div className="h-full w-full rounded-l-md overflow-hidden flex justify-center items-center">
            <img
              className="h-full w-full object-cover"
              src={artist.image_url}
              alt={artist.full_name}
            />
          </div>
        </div>

        {/* RIGHT DIVISION */}
        <div className="relative flex-grow flex flex-col bg-[#a5978b] rounded-r-md h-full">
          {/* Artist Name */}
          <h1 className="text-4xl p-2">{artist.full_name}</h1>
          {/* Links and Genre */}
          <div className="flex w-full h-10 justify-start items-center gap-2 p-2">
            <div className="relative size-6 flex justify-center items-center bg-black rounded-full">
              <div className="absolute rounded-full size-4 bg-[#a5978b] z-0"></div>
              <a href={artist.apple_url} className="absolute">
                <SiApplemusic className="size-[1.15rem] z-10" />
              </a>
            </div>
            <a href={artist.spotify_url}>
              <SiSpotify className="size-6" />
            </a>
            <div className="bg-black rounded-full">
              <a href={artist.soundcloud_url}>
                <SiSoundcloud className="size-6 p-0.5 text-[#a5978b]" />
              </a>
            </div>
            <a href={artist.youtube_url}>
              <SiYoutubemusic className="size-6" />
            </a>
            <div className="h-5 w-px bg-black mx-2"></div>
            <h5 className="max-w-40 max-h-7 overflow-hidden">{artist.genre}</h5>
          </div>
          {/* Description */}
          <p className="font-light p-2">{artist.description}</p>
          {/* Buttons to Edit and Delete */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-5 p-4">
            <Link to={`/edit/${artist_id}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArtist;
