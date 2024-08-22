const Card = () => {
  return (
    <div className="relative rounded-lg w-[625px] h-64 bg-[#a5978b] flex flex-row justify-left items-center">
      {/* LEFT DIVISION */}
      <div className="w-60 h-full text-center flex justify-center items-center bg-slate-100 rounded-l-lg text-sm">
        <div className="size-48">
          <img
            className="rounded-md"
            src="https://content.imageresizer.com/images/memes/War-Cat-meme-88f6yf.jpg"
          />
        </div>
      </div>
      {/* RIGHT DIVISION */}
      <div className="flex-grow flex-col bg-slate-600 rounded-r-md h-full">
        <h1>Artist Name</h1>
        <div>Links</div>
        <p>Description</p>
        <p>Etc.</p>
      </div>
    </div>
  )
}

export default Card
