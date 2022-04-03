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
      id: 1,
      image:'https://cdn-icons.flaticon.com/png/512/3659/premium/3659899.png?token=exp=1648475380~hmac=b75aabd93f6f0ac8e1cec69e5d5a0d9b',
      name: "Electronics",
      products: [
        {
          id: 11,
          name: "MacBook Air",
          price: 2000,
          category: "Electronics",
          image: "https://m.media-amazon.com/images/I/61RHsomZZTS._AC_SX679_.jpg"
        },
        {
          id: 12,
          name: "Smart TV",
          price: 1000,
          category: "Electronics",
          image: "https://m.media-amazon.com/images/I/71xvCVFFOQL._AC_SX679_.jpg"
        },{
            id: 13,
            name: "Headphone",
            price: 200,
            category: "Electronics",
            image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg"
        }
      ],
    },
    {
      id: 2,
      image: "https://cdn-icons.flaticon.com/png/512/3362/premium/3362661.png?token=exp=1648475268~hmac=28a963ad57b65170963c68af33941584",
      name: "Home Appliances",
      numProducts: 50,
    },
    {
      id: 3,
      image:"https://cdn-icons-png.flaticon.com/512/1127/1127487.png",
      name: "Fashion",
      numProducts: 10,
    },
    {
      id: 4,
      image:"https://cdn-icons-png.flaticon.com/512/3163/3163195.png",
      name: "Health & Beauty",
      numProducts: 10,
    },
    // {
    //   id: 5,
    //   image:"https://cdn-icons-png.flaticon.com/512/1198/1198314.png",
    //   name: "Sporting Goods",
    //   numProducts: 10,
    // },
    {
      id: 6,
      image:'https://cdn-icons.flaticon.com/png/512/3737/premium/3737726.png?token=exp=1648534379~hmac=abbf97f6b0e5224211d81e84b0ffbc48',
      name: "Pet Supplies",
      numProducts: 100,
    },
    {
      id: 7,
      image: "https://cdn-icons.flaticon.com/png/512/3514/premium/3514242.png?token=exp=1648534447~hmac=00d309493193a3cfc8c1869b7749664f",
      name: "Supermarket",
      numProducts: 50,
    },
    {
      id: 8,
      image:"https://cdn-icons-png.flaticon.com/512/1575/1575247.png",
      name: "Books, Music & Movies",
      numProducts: 10,
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
      id:1,
      name: "Clear Acrylic Frame Glasses" ,
      image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
      price: 30.99,
      rating: 5,
      discount: 30,
      offer: "Free Shipping",
    },
    {
      id:2,
      name: "3pcs Shell Decor Necklace",
      image:"https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
      price: 35.99,
      discount: 20,
      rating: 4,
      reviews: 20,
      offer: "Buy 1 Get 1 Free",
    },
    {
      id:3,
      name: "1pc Woven Wall Hanging",
      image:"https://img.ltwebstatic.com/images3_pi/2021/11/09/163642242502c5f090319808879f0d146ed4aa5a87_thumbnail_900x.webp",
      price: 15.99,
      discount: 20,
      rating: 5,
      reviews: 20,
      offer: "Free Shipping",
    },
    {
      id:4,
      name: "Graphic Airpods Case",
      image:"https://img.ltwebstatic.com/images3_pi/2020/09/15/16001441248e5bf2a96326e4a2fe3bd72c2ec9cb60_thumbnail_900x.webp",
      price: 30.99,
      discount: 60,
      rating: 4,
      reviews: 200,
      offer: "Buy 1 Get 1 Free",
    },
    {
      id:5,
      name: "Toddler Girls Striped Puff Sleeve Belted Dress",
      image:"https://img.ltwebstatic.com/images3_pi/2021/02/18/1613616545700f279547cf14d9843d6e0aee6a88ba_thumbnail_900x.webp",
      price: 30.99,
      discount: 60,
      rating: 5,
      reviews: 200,
      offer: "Buy 1 Get 1 Free",
    },
    {
      id:6,
      name: "1pc Facial Roller Massager & 1pc Gua Sha Board",
      image:"https://img.ltwebstatic.com/images3_pi/2021/08/09/16285024847ff83d6f1d46bd428b24cb77461c2e5a_thumbnail_900x.webp",
      price: 30.99,
      discount: 60,
      rating: 5,
      reviews: 200,
      offer: "Buy 1 Get 1 Free",
    }
  ]
  export const newProducts = [
    {
      id:1,
      name: "Clear Acrylic Frame Glasses" ,
      image: "https://img.ltwebstatic.com/images3_pi/2021/02/05/161249415611eacd714290f50d7209d58f1f18efbe_thumbnail_900x.webp",
      price: 30.99,
      rating: 5,
      discount: 0,
      reviews: 10,
      offer: "",
    },
    {
      id:2,
      name: "3pcs Shell Decor Necklace",
      image:"https://img.ltwebstatic.com/images3_pi/2022/03/04/16463801071500c4d404d02d67cf13ecb4d0ea073f_thumbnail_900x.webp",
      price: 35.99,
      discount: 0,
      rating: 4,
      reviews: 20,
      offer: "",
    },
    {
      id:3,
      name: "1pc Woven Wall Hanging",
      image:"https://img.ltwebstatic.com/images3_pi/2021/11/09/163642242502c5f090319808879f0d146ed4aa5a87_thumbnail_900x.webp",
      price: 15.99,
      discount: 0,
      rating: 5,
      reviews: 20,
      offer: "",
    },
    {
      id:4,
      name: "Graphic Airpods Case",
      image:"https://img.ltwebstatic.com/images3_pi/2020/09/15/16001441248e5bf2a96326e4a2fe3bd72c2ec9cb60_thumbnail_900x.webp",
      price: 30.99,
      discount: 0,
      rating: 4,
      reviews: 10,
      offer: "",
    },
    {
      id:5,
      name: "Toddler Girls Striped Puff Sleeve Belted Dress",
      image:"https://img.ltwebstatic.com/images3_pi/2021/02/18/1613616545700f279547cf14d9843d6e0aee6a88ba_thumbnail_900x.webp",
      price: 30.99,
      discount: 0,
      rating: 5,
      reviews: 8,
      offer: "",
    },
    {
      id:6,
      name: "1pc Facial Roller Massager & 1pc Gua Sha Board",
      image:"https://img.ltwebstatic.com/images3_pi/2021/08/09/16285024847ff83d6f1d46bd428b24cb77461c2e5a_thumbnail_900x.webp",
      price: 30.99,
      discount: 0,
      rating: 5,
      reviews: 6,
      offer: "",
    }
  ]
  export const fixedPrices = [
    {
      id:0,
      name: "Any",
      array: []
    },
    {
      id:1,
      name: "$0 - $9",
      array: [0 , 9]
    },
    {
      id:2,
      name: "$10 - $19",
      array: [10 , 19]
    },
    {
      id:3,
      name: "$20 - $29",
      array: [20 , 29]
    },
    {
      id:4,
      name: "$30 - $39",
      array: [30 , 39]
    },
    {
      id:5,
      name: "more than $40",
      array: [40 , 99]
    },
  ]