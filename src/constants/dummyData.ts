import { Location } from "./types";

const locations: Location[] = [
  {
    name: "Paris",
    price: "120",
    image: require("../../assets/img/locations/paris.jpg"),
    tickets: [
      {
        from: "New York",
        to: "Paris",
        price: 120,
        provider: {
          name: "KLM",
          logo: require("../../assets/img/logo/klm.png"),
        },
        length: "12h",
        start: {
          time: "10:00am",
          day: "Monday",
        },
        end: {
          time: "10:00pm",
          day: "Monday",
        },
      },
      {
        from: "New York",
        to: "Paris",
        price: 120,
        provider: {
          name: "American Airlines",
          logo: require("../../assets/img/logo/americanairlines.png"),
        },
        length: "12h",
        start: {
          time: "11:00am",
          day: "Monday",
        },
        end: {
          time: "11:00pm",
          day: "Monday",
        },
      },
    ],
  },
  {
    name: "Spain",
    price: "340",
    image: require("../../assets/img/locations/spain.jpg"),
    tickets: [
      {
        from: "New York",
        to: "Spain",
        price: 340,
        provider: {
          name: "KLM",
          logo: require("../../assets/img/logo/klm.png"),
        },
        length: "12h",
        start: {
          time: "10:00am",
          day: "Monday",
        },
        end: {
          time: "10:00pm",
          day: "Monday",
        },
      },
      {
        from: "New York",
        to: "Spain",
        price: 340,
        provider: {
          name: "American Airlines",
          logo: require("../../assets/img/logo/americanairlines.png"),
        },
        length: "12h",
        start: {
          time: "8:00am",
          day: "Tuesday",
        },
        end: {
          time: "8:00pm",
          day: "Tuesday",
        },
      },
    ],
  },
  {
    name: "England",
    image: require("../../assets/img/locations/england.jpg"),
    price: "200",
    tickets: [
      {
        from: "New York",
        to: "England",
        price: 200,
        provider: {
          name: "KLM",
          logo: require("../../assets/img/logo/klm.png"),
        },
        length: "12h",
        start: {
          time: "10:00am",
          day: "Monday",
        },
        end: {
          time: "10:00pm",
          day: "Monday",
        },
      },
      {
        from: "New York",
        to: "England",
        price: 340,
        provider: {
          name: "American Airlines",
          logo: require("../../assets/img/logo/americanairlines.png"),
        },
        length: "12h",
        start: {
          time: "8:00am",
          day: "Tuesday",
        },
        end: {
          time: "8:00pm",
          day: "Tuesday",
        },
      },
    ],
  },
  {
    name: "Bali",
    image: require("../../assets/img/locations/bali.jpg"),
    price: "500",
    tickets: [
      {
        from: "New York",
        to: "Bali",
        price: 500,
        provider: {
          name: "KLM",
          logo: require("../../assets/img/logo/klm.png"),
        },
        length: "12h",
        start: {
          time: "10:00am",
          day: "Monday",
        },
        end: {
          time: "10:00pm",
          day: "Monday",
        },
      },
      {
        from: "New York",
        to: "Bali",
        price: 340,
        provider: {
          name: "American Airlines",
          logo: require("../../assets/img/logo/americanairlines.png"),
        },
        length: "12h",
        start: {
          time: "8:00am",
          day: "Tuesday",
        },
        end: {
          time: "8:00pm",
          day: "Tuesday",
        },
      },
    ],
  },
];

export default { locations };
