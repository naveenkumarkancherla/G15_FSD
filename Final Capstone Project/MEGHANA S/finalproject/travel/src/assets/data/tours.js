import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "Somewhere",
    price: 200,
    maxGroupSize: 10,
    desc: "This is the description",
    reviews: [
     
      {
        name: "John Doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 400,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      
    ],
    
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 700,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 500,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Somewhere",
    price: 800,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 200,    
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 750,
    address: "Somewhere",
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      
    ],
    avgRating: 3.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 550,
    maxGroupSize: 8,
    desc: "This is the description",
    reviews: [
      
    ],
    avgRating: 3.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
