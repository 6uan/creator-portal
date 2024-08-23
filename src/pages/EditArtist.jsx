import ArtistFormEdit from "../components/ArtistFormEdit";

const EditArtist = () => {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="rounded-lg w-auto h-auto bg-[#a5978b] flex justify-center items-center mt-20">
        <ArtistFormEdit />
      </div>
    </div>
  );
};

export default EditArtist;
