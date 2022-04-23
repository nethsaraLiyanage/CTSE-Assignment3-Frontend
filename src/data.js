import { nanoid } from "nanoid";

export const sliderItems = [
  {
    id: 1,
    img: 'https://as2.ftcdn.net/v2/jpg/02/86/07/01/1000_F_286070151_pB0Y6qy8kAk0IZIsYfXPpS4eCPQyvXtb.jpg',
    alt: 'slider1'
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-vector/new-arrival-banner-template_1361-1246.jpg?w=996&t=st=1648534525~exp=1648535125~hmac=3e58f0ce7b6c6c5f892e94e3a44ad96f492cc45b997284831b5687de30cd90f9",
    alt: 'slider2'
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-psd/modern-minimalist-3d-glass-look-podium-promotion_125755-710.jpg?w=1060",
    alt: 'slider3'
  },
];
export const categoriesData = [
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/electronics.png',
    name: "Electronics",
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/electric-appliance.png',
    name: "Home Appliances",
    numProducts: 50,
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/clothes.png',
    name: "Fashion",
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/cosmetics.png',
    name: "Health & Beauty",
    numProducts: 10,
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/sport.png',
    name: "Sporting Goods",
    numProducts: 10,
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/puppy.png',
    name: "Pet Supplies",
    numProducts: 100,
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/food.png',
    name: "Supermarket",
    numProducts: 50,
  },
  {
    id: nanoid(),
    image: process.env.PUBLIC_URL + '/images/audio-book.png',
    name: "Books, Music & Movies",
    numProducts: 10,
  }
];
export const productsData = [
  {
    id: nanoid(),
    name: "MacBook Air",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/61RHsomZZTS._AC_SX679_.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 4,
    reviews: 10
  },
  {
    id: nanoid(),
    name: "Smart TV",
    price: 1000,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/71xvCVFFOQL._AC_SX679_.jpg"
  }, {
    id: nanoid(),
    name: "Headphone",
    price: 200,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg"
  }
];
export const offers = [{
  id: 1,
  image: "https://img.ltwebstatic.com/images3_ach/2022/03/11/164698698613f0a2a60395b53a861bcedf897ae20e.webp",
  name: "Buy 1 Get 1 Free",
},
{
  id: 2,
  image: "https://img.ltwebstatic.com/images3_acp/2021/12/14/1639479970c0399dfabf9767242e08407039ffecc2.webp",
  name: "Buy 1 Get 1 Free",
}
]
export const popularProducts = [
  {
    id: 10,
    name: "Clear Acrylic Frame Glasses",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
    price: 30.99,
    rating: 5,
    discount: 30,
    offer: "Free Shipping",
  },
  {
    id: 20,
    name: "3pcs Shell Decor Necklace",
    image: "https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
    price: 35.99,
    discount: 20,
    rating: 4,
    reviews: 20,
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: 30,
    name: "1pc Woven Wall Hanging",
    image: "https://img.ltwebstatic.com/images3_pi/2021/11/09/163642242502c5f090319808879f0d146ed4aa5a87_thumbnail_900x.webp",
    price: 15.99,
    discount: 20,
    rating: 5,
    reviews: 20,
    offer: "Free Shipping",
  },
  {
    id: 40,
    name: "Graphic Airpods Case",
    image: "https://img.ltwebstatic.com/images3_pi/2020/09/15/16001441248e5bf2a96326e4a2fe3bd72c2ec9cb60_thumbnail_900x.webp",
    price: 30.99,
    discount: 60,
    rating: 4,
    reviews: 200,
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: 50,
    name: "Toddler Girls Striped Puff Sleeve Belted Dress",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/18/1613616545700f279547cf14d9843d6e0aee6a88ba_thumbnail_900x.webp",
    price: 30.99,
    discount: 60,
    rating: 5,
    reviews: 200,
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: 60,
    name: "1pc Facial Roller Massager & 1pc Gua Sha Board",
    image: "https://img.ltwebstatic.com/images3_pi/2021/08/09/16285024847ff83d6f1d46bd428b24cb77461c2e5a_thumbnail_900x.webp",
    price: 30.99,
    discount: 60,
    rating: 5,
    reviews: 200,
    offer: "Buy 1 Get 1 Free",
  }
]
export const newProducts = [
  {
    id: "Bo1C7io0BTJowXAgNjS9",
    name: "Clear Acrylic Frame Glasses",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
    price: 30.99,
    rating:  5 ,
    discount: 0,
    reviews: 10,
    offer: "",
    category: "accessories",
  },
  {
    id: "adAjk9kL-HimX7-Pb337",
    name: "3pcs Shell Decor Necklace",
    image: "https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
    price: 35.99,
    discount: 0,
    rating: 4,
    reviews: 20,
    offer: "",
    category: "accessories",
  },
  {
    id: "dGVDPQWwQAw1l1xZkBSe2",
    name: "1pc Woven Wall Hanging",
    image: "https://img.ltwebstatic.com/images3_pi/2021/11/09/163642242502c5f090319808879f0d146ed4aa5a87_thumbnail_900x.webp",
    price: 15,
    discount: 0,
    rating: 5,
    reviews: 20,
    offer: "",
    category: "home decor",
  },
  {
    id: "QvmDvGEnraVHMUrgqRgcQ",
    name: "Graphic Airpods Case",
    image: "https://img.ltwebstatic.com/images3_pi/2020/09/15/16001441248e5bf2a96326e4a2fe3bd72c2ec9cb60_thumbnail_900x.webp",
    price: 30,
    discount: 0,
    rating: 4,
    reviews: 10,
    offer: "",
  },
  {
    id: "asgghuhufghbjnjkjh",
    name: "Toddler Girls Striped Puff Sleeve Belted Dress",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/18/1613616545700f279547cf14d9843d6e0aee6a88ba_thumbnail_900x.webp",
    price: 30,
    discount: 0,
    rating: 5,
    reviews: 8,
    offer: "",
    category: "fashion",
  },
  {
    id: "QvmDvGEnraVHMUrbqRgcQ",
    name: "1pc Facial Roller Massager & 1pc Gua Sha Board",
    image: "https://img.ltwebstatic.com/images3_pi/2021/08/09/16285024847ff83d6f1d46bd428b24cb77461c2e5a_thumbnail_900x.webp",
    price: 30,
    discount: 0,
    rating: 5,
    reviews: 6,
    offer: "",
    category: "health & beauty",
  }
]
export const fixedPrices = [
  {
    id: 0,
    name: "Any",
    array: []
  },
  {
    id: 1,
    name: "$0 - $9",
    array: [0, 9]
  },
  {
    id: 2,
    name: "$10 - $19",
    array: [10, 19]
  },
  {
    id: 3,
    name: "$20 - $29",
    array: [20, 29]
  },
  {
    id: 4,
    name: "$30 - $39",
    array: [30, 39]
  },
  {
    id: 5,
    name: "more than $40",
    array: [40, 99]
  },
]
export const cartItems = [
  {
    id: nanoid(),
    name: "Clear Acrylic Frame Glasses",
    image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
    price: 30.99,
    category: "accessories",
    quantity: 1,
  }, {
    id: nanoid(),
    name: "3pcs Shell Decor Necklace",
    image: "https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
    price: 35.99,
    category: "accessories",
    quantity: 2,
  }
]
