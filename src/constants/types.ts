export type Location = {
  name: string;
  price: string;
  image: any;
  tickets: LocationTicket[];
};

export type LocationTicket = {
  from: string;
  to: string;
  price: number;
  provider: {
    name: string;
    logo?: any;
  };
  length: string;
  start: {
    time: string;
    day: string;
  };
  end: {
    time: string;
    day: string;
  };
};
