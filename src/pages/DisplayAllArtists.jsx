import { useEffect, useState } from "react";
import Card from "../components/Card";
import supabase from "../utils/client.js";

const DisplayAllArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const { data, error } = await supabase.from("userartists").select("*");

      if (error) {
        console.error("Error fetching artists:", error);
      } else {
        setArtists(data);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="my-20 w-8/12 grid grid-cols-2 gap-5 mx-auto place-items-center pb-10">
      {artists.map((artist) => (
        <Card
          fullName={artist.full_name}
          image={artist.image_url}
          artistId={artist.artist_id}
          youtube_url={artist.youtube_url}
          soundcloud_url={artist.soundcloud_url}
          spotify_url={artist.spotify_url}
          apple_url={artist.apple_url}
          genre={artist.genre}
          description={artist.description}
          artist_id={artist.artist_id}
        />
      ))}
    </div>
  );
};

export default DisplayAllArtists;
