import { useState } from "react";
import supabase from "../utils/client.js";
import { useNavigate } from "react-router-dom";

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    image_url: "",
    youtube_url: "",
    soundcloud_url: "",
    spotify_url: "",
    apple_url: "",
    genre: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("userartists")
      .insert([formData]);

    if (error) {
      console.error("Error inserting artist:", error);
    } else {
      console.log("Artist added:", data);
      navigate("/");
      // Clear the form
      setFormData({
        full_name: "",
        image_url: "",
        youtube_url: "",
        soundcloud_url: "",
        spotify_url: "",
        apple_url: "",
        genre: "",
        description: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[850px] mx-auto my-10 px-20 py-4"
    >
      <div className="flex gap-2">
        {/* Name */}
        <div className="mb-4 flex-grow">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Genre */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      {/* Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          required
        ></textarea>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Youtube */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            YouTube URL
          </label>
          <input
            type="text"
            name="youtube_url"
            value={formData.youtube_url}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Soundcloud */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            SoundCloud URL
          </label>
          <input
            type="text"
            name="soundcloud_url"
            value={formData.soundcloud_url}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Spotify  */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Spotify URL
          </label>
          <input
            type="text"
            name="spotify_url"
            value={formData.spotify_url}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Apple Music */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Apple Music URL
          </label>
          <input
            type="text"
            name="apple_url"
            value={formData.apple_url}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#5C4742] text-white py-2 px-4 rounded-md hover:bg-[#382b28]"
      >
        Add Artist
      </button>
    </form>
  );
};

export default ArtistForm;
