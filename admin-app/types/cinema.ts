export interface ICinemaContext {
  getCinema: () => Promise<void>;
  cinemas: ICinema[];
  setSelectedCinema: (id: any) => void;
  setSelectedBranch: (name: string) => void;
  deleteCinema: (branch: string) => Promise<void>;
  putCinema: (formData: any, cinemaId: string) => Promise<void>;
  selectedCinema: string;
  selectedBranch: string;
  loading: boolean;
}

interface IBranch {
  name: string;
  location: {
    address: {
      street: string;
      city: string;
      zipCode: number;
    };
  };
  opening: string;
  closing: string;
  image: string;
}

interface ICinema {
  location: {
    address: {
      street: string;
      city: string;
      zipCode: number;
    };
  };
  _id: string;
  cinemaName: string;
  icon: string;
  opening: string;
  closing: string;
  image: string;
  branches: IBranch[];
}
