import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchVideoGames = () => {
  const [dataVideoGames, setDataVideoGames] = useState([]);

  const getVideoGames = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Failed to fetch videogames");
        throw new Error("Failed to fetch videogames");
      }
      const data = await response.json();
      setDataVideoGames(data);
    } catch (error) {
      console.error("Error fetching videogames:", error);
      toast.error("Error fetching videogames");
    }
  };

  const getVideoGameById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch videogame");
        throw new Error("Failed to fetch videogame");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching videogame:", error);
      console.log("Failed to fetch videogame");
      return null;
    }
  };

  useEffect(() => {
    getVideoGames();
  }, []);

  return {
    dataVideoGames,
    setDataVideoGames,
    getVideoGames,
    getVideoGameById,
  };
};

export default useFetchVideoGames;