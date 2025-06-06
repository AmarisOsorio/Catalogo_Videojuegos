import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import { levelOptions } from "../utils/apiUrl";
import useFetchVideoGames from "../hooks/Videogames/useFetchVideoGames";
import useVideoGameAction from "../hooks/Videogames/useVideogameAction";

const Home = () => {
  const { dataVideoGames, getVideoGames } = useFetchVideoGames();
  const { deleteVideoGame, handleUpdateVideoGame } = useVideoGameAction(getVideoGames);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/videogames"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar Videojuego
      </Link>

      <Titulo titulo="Gestión de Videojuegos" />

      <p className="mt-1 text-sm text-gray-600 mb-4">
        Lista de videojuegos registrados en la base de datos.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Juego</th>
              <th className="px-4 py-2 border-b">Género</th>
              <th className="px-4 py-2 border-b">Plataforma</th>
              <th className="px-4 py-2 border-b">Dificultad</th>
              <th className="px-4 py-2 border-b">Fecha Lanzamiento</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataVideoGames?.map((game) => (
              <tr
                key={game.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 font-medium">{game.juego}</td>
                <td className="px-4 py-2">{game.genero}</td>
                <td className="px-4 py-2">{game.plataforma}</td>
                <td className="px-4 py-2">
                  {levelOptions.find((opt) => opt.value === game.dificultad)?.label || "Sin Asignar"}
                </td>
                <td className="px-4 py-2">{game.fechaLanzamiento}</td>
                <td className="px-4 py-2 space-x-2">
                  <Button 
                    text="Editar"
                    onClick={() => {handleUpdateVideoGame(game.id)}} 
                  />
                  <ButtonDelete 
                    text="Eliminar" 
                    onClick={() => {deleteVideoGame(game.id)}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;