import { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const fetchImage = async () => {
    try {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization:
            "----------------------------------------------", //  Buraya kendi API Key'ini yazınız
        },
        params: {
          query: "vertical",
          per_page: 1,
          page: Math.floor(Math.random() * 1000),
          orientation: "portrait", // dikey resimler
        },
      });
      const photo = response.data.photos[0];
      if (photo) {
        setImageUrl(photo.src.large2x); 
      }
    } catch (err) {
      console.log("Hata:", err);
    }
  };

  return (
    <div className="container">
      <button onClick={fetchImage}>Pexels'tan Kaliteli Resim</button>
      {imageUrl && <img src={imageUrl} alt="Rastgele" />}
    </div>
  );
}

export default App;
