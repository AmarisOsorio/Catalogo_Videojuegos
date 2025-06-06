import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { levelOptions } from "../utils/apiUrl";
import useDataVideoGame from "../hooks/Videogames/useDataVideogame";

const Videogames = () => {
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataVideoGame(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/home"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Volver al Dashboard
      </Link>
      <form
        onSubmit={handleSubmit}
        className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4"
      >
        <Titulo titulo="Información del Videojuego" />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Juego */}
          <InputText
            type="text"
            name="juego"
            label="Juego"
            placeholder="Ingresa el título del videojuego"
            register={register}
            error={errors.titulo?.message}
          />

          {/* Fecha de Lanzamiento */}
          <InputText
            type="date"
            name="fechaLanzamiento"
            label="Fecha de Lanzamiento"
            register={register}
            error={errors.fechaLanzamiento?.message}
          />

          {/* Género */}
          <InputText
            type="text"
            name="genero"
            label="Genero"
            placeholder="Ingresa el género del videojuego"
            register={register}
            error={errors.genero?.message}
          />

          {/* Plataforma */}
          <InputText
            type="text"
            name="plataforma"
            label="Plataforma"
            placeholder="Ingresa la plataforma"
            register={register}
            error={errors.plataforma?.message}
          />

          {/* Dificultad */}
          <SelectInput
            label="Dificultad"
            name="dificultad"
            register={register}
            options={levelOptions}
            error={errors.dificultad?.message}
          />
        </div>
        <Button type="submit" text="Guardar Videojuego" />
      </form>
    </div>
  );
};

export default Videogames;