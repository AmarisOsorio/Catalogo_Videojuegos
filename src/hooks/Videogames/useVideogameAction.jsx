import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useVideoGameAction = (getVideoGames) => {
  const navigate = useNavigate();

  const deleteVideoGame = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Videojuego eliminado exitosamente");
      console.log("Videogame deleted:", response);
      getVideoGames();
    } catch (error) {
      console.error("Error deleting videogame:", error);
      toast.error("Failed to delete videogame");
    } finally {
      getVideoGames();
    }
  };

  const handleUpdateVideoGame = (id) => {
    navigate(`/videogames/${id}`);
  };

  return {
    deleteVideoGame,
    handleUpdateVideoGame,
  };
};

export default useVideoGameAction;