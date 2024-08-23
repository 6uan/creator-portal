import ArtistForm from "../components/ArtistsForm";

const AddArtist = () => {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="rounded-lg w-auto h-auto bg-[#a5978b] flex justify-center items-center mt-20">
        <ArtistForm />
      </div>
    </div>
  );
};

export default AddArtist;
