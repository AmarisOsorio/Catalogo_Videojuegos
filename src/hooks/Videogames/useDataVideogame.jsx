import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { useNavigate, useParams } from "react-router-dom";
import useFetchVideoGames from "./useFetchVideoGames";
import { toast } from "react-hot-toast";

const useDataVideoGame = (methods) => {
  const { id } = useParams();
  const { getVideoGames, getVideoGameById } = useFetchVideoGames();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const saveVideoGameForm = async (dataForm) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to add videogame");
        throw new Error("Failed to add videogame");
      }
      toast.success("Videojuego guardado exitosamente");
      getVideoGames();
      navigate("/home");
    } catch (error) {
      console.log("Error al enviar:", error);
    } finally {
      reset();
    }
  };

  const editVideoGame = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to update videogame");
        throw new Error("Failed to update videogame");
      }
      toast.success("Videojuego actualizado exitosamente");
      navigate("/home");
    } catch (error) {
      console.error("Error updating videogame:", error);
      toast.error("Failed to update videogame");
    } finally {
      reset();
      getVideoGames();
    }
  };

  const loadVideoGame = async () => {
    if (id) {
      const videoGame = await getVideoGameById(id);
      if (videoGame) {
        reset({
          titulo: videoGame?.titulo,
          genero: videoGame?.genero,
          plataforma: videoGame?.plataforma,
          dificultad: videoGame?.dificultad,
          fechaLanzamiento: videoGame?.fechaLanzamiento,
          precio: videoGame?.precio,
          desarrollador: videoGame?.desarrollador,
        });
      }
    }
  };

  const handleVideoGameAction = (dataForm) => {
    if (id) {
      editVideoGame(dataForm);
    } else {
      saveVideoGameForm(dataForm);
    }
  };

  useEffect(() => {
    loadVideoGame();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleVideoGameAction),
    reset,
    errors,
  };
};

export default useDataVideoGame;