export interface IMovies {
  poster: {
    lands: {
      land1: string;
      land2: string;
    };
    vertical: string;
  };
  _id: string;
  title: string;
  movie_trailer: string;
  duration: number;
  releaseDate: Date;
  director: string;
  genre: string;
  synopsis: string;
  cinemas: [
    {
      location: {
        address: {
          street: string;
          city: string;
          zipCode: number;
        };
      };
      _id: string;
      name: string;
      icon: string;
      opening: string;
      closing: string;
      image: string;
    },
  ];
  movieType: string;
  ticketPrice: {
    adult: number;
    child: number;
  };
}
