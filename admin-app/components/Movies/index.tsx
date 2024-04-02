import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { MovieCard } from "./movie-card";

const Movies = () => {
  return (
    <>
      <Breadcrumb pageName="Movies" />
      <div className="flex flex-wrap gap-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default Movies;
