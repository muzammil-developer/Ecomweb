const shoes = [
  {
    id: 1,
    brand: "Adidas",
    name: "Men Galaxy 7",
    size: "Large",
    category: "Sneakers",
    price: 250.0,
    inStock: true,
    color: "Black",
    imageUrl:
      "https://d16aymak0y9zsb.cloudfront.net/Sportsplus/product/1080x1080/01112024/ID8760_1_1730454331-1372998727772.jpg",
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Mens Adipista Sneakers",
    size: "Medium",
    category: "Sneakers",
    price: 500.0,
    inStock: true,
    color: "Black",
    imageUrl:
      "https://tekkietown.co.za/cdn/shop/files/95089bedff495a62ac4f55dce3cd43fc.jpg?v=1777974934&width=1445",
  },
  {
    id: 3,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: "Large",
    category: "Skate",
    price: 400.0,
    inStock: true,
    color: "Blue",
    imageUrl:
      "https://my.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BWU00NMO20_PM2_Front%20view.jpg",
    
  },
  {
    id: 4,
    brand: "Louis Vuitton",
    name: "Trainer Collection for Men",
    size: "Medium",
    category: "Lifestyle",
    price: 100.70,
    inStock: true,
    color: "Brown",
    imageUrl:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BWU07MSC92_PM2_Front%20view.jpg",
  },
  {
    id: 5,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: "Small",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    color: "Blue",
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
  },
  {
    id: 6,
    brand: "New Balance",
    name: "Running Shoe",
    size: "Medium",
    category: "Lifestyle",
    price: 120.00,
    inStock: true,
    color: "Brown",
    imageUrl:
      "https://nb.scene7.com/is/image/NB/w32714q_nb_02_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 7,
    brand: "New Balance",
    name: "Men's Causal Shoe & Sneaker",
    size: "Large",
    category: "Lifestyle",
    price: 320.23,
    inStock: true,
    color: "White",
    imageUrl:
      "https://nb.scene7.com/is/image/NB/u90605gn_nb_02_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 8,
    brand: "Nike",
    name: "Air Force 1 Retro Premium Women's Shoe",
    size: "Medium",
    category: "Lifestyle",
    price: 400.0,
    inStock: true,
    color: "Pink",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1760d08e-9799-4ede-a408-1d08ba0e9f33/W++AIR+FORCE+1+RETRO+PRM.png",
  },
  {
    id: 9,
    brand: "Nike",
    name: "Vomero Plus Women's Road Running Shoe",
    size: "Small",
    category: "Lifestyle",
    price: 300.45,
    inStock: true,
    color: "Green",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/51a1af5c-3bc3-473e-b52a-debf664a2e02/W+NIKE+VOMERO+PLUS.png",
  },
  {
    id: 10,
    brand: "Nike",
    name: "Nike x Hyperice Hyperboot",
    category: "Lifestyle",
    size: "Small",
    price: 500.0,
    inStock: true,
    color: "White",
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8ce3f2f5-ecf7-44ed-999c-49fdbd3b434e/HYPERBOOT+BY+NIKE+X+HYPERICE.png",
  },
  {
    id: 11,
    brand: "Nike",
    name: "Moon Shoe OG",
    size: "Large",
    category: "Lifestyle",
    price: 340.79,
    inStock: true,
    color: "Green",
    imageUrl:
      "https://images.vegnonveg.com/resized/1020X1200/15555/nike-moon-shoe-og-malachitesoft-pearl-gum-light-brown-6a4b9fa53bcfb.jpg?format=webp",
  },
  {
    id: 12,
    brand: "Adidas",
    name: "Pokemon SuperStar Vintage Sneakers",
    size: "Large",
    category: "Sports",
    price: 300.45,
    inStock: true,
    color: "Orange",
    imageUrl:
      "https://assets.adidas.com/images/w_500,f_auto,q_auto/b97ad18a202d41b98e84c41267aff2a3_9366/ADIDAS_Pokemon_SUPERSTAR_VINTAGE_SHOES_Orange_KI2861_00_plp_standard.jpg",
  },
  {
    id: 13,
    brand: "Adidas",
    name: "UltraBoost 22 Shoes",
    size: "Medium",
    category: "Running Shoe",
    price: 180.09,
    inStock: true,
    color: "Grey",
    imageUrl:
      "https://thumblr.uniid.it/product/262094/c6054f18f4cd.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 14,
    brand: "Adidas",
    name: "Men's Shoes Superstar Ftw",
    size: "Small",
    category: "Sneakers",
    price: 299.99,
    inStock: true,
    color: "White",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jSLFXKPfUOAQbztlTW6wemo_OIoKqn1GAb4VwzFM9qfwVmJbiYNsn9ul&s=10",
  },
  {
    id: 15,
    brand: "Adidas",
    name: "Ballerina Sneaker Shoe ",
    size: "Medium",
    category: "Sneakers",
    price: 600.00,
    inStock: true,
    color: "Yellow",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizBgj97n9Repd1CMY5c8kSsa2tG7-5m3iBCMLJVs7hBVKpfnt_JaNv0s&s=10",
  },
  {
    id: 16,
    brand: "Adidas",
    name: "Samba ADV Dusky Bronze",
    size: "Large",
    category: "Skate",
    price: 250.12,
    inStock: true,
    color: "Brown",
    imageUrl:
      "https://scene7.zumiez.com/is/image/zumiez/product_main_medium/adidas-Samba-ADV-Dusky-Bronze%2C-Core-Black%2C-%26-Gum-Skate-Shoes-_404023-front-US.jpg",
  },
  {
    id: 17,
    brand: "Adidas",
    name: "Galazy 7 Road Running Shoe",
    size: "Medium",
    category: "Running Shoe",
    price: 349.29,
    inStock: true,
    color: "Pink",
    imageUrl:
      "https://assets.adidas.com/images/w_500,f_auto,q_auto/a614e90eaab24b93aab8edc7952bf63d_faec/Galaxy_7_Running_Shoes_Pink_JP6592_db01_00_standard.jpg",
  },
   {
    id: 18,
    brand: "Adidas",
    name: "Bille Jean King",
    size: "Small",
    category: "Tennis Shoe",
    price: 249.00,
    inStock: true,
    color: "Blue",
    imageUrl:
      "https://assets.adidas.com/images/w_500,f_auto,q_auto/2148ba93c43741bdb47c8d14aab001f6_9366/BILLIE_JEAN_KING_SHOES_Blue_KH9856_01_02_hover_standard.jpg",
  },
    {
    id: 19,
    brand: "Adidas",
    name: "Superstar ADV",
    size: "Large",
    category: "Sneakers",
    price: 280.20,
    inStock: true,
    color: "Purple",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/23/49/04/37/23490437_53422452_600.jpg",
  },
    {
    id: 20,
    brand: "Adidas",
    name: "Campus 00s Shoes",
    size: "Medium",
    category: "Sneakers",
    price: 190.90,
    inStock: true,
    color: "Green",
    imageUrl:
      "https://assets.adidas.com/images/w_500,f_auto,q_auto/94f21e1e039b43efb1f0af870086924c_9366/Campus_00s_Shoes_Green_H03472.jpg",
  },
];

const showRow = document.getElementById("show-rows");

const renderShoes = (shoesToShow) => {
  showRow.innerHTML = "";

  shoesToShow.forEach((shoe) => {
    const shoeHTML = `<div class="col-md-3 col-sm-6 col-12">
    <div class="card h-100">

        <div class="d-flex align-items-center justify-content-center p-2"
             style="height: 200px;">
            <img src="${shoe.imageUrl}"
                 class="img-fluid h-100 w-100 object-fit-contain"
                 alt="${shoe.name}">
        </div>

        <div class="card-body d-flex flex-column">

            <h5 class="card-title" style="min-height: 3rem;">
                ${shoe.name}
            </h5>

            <p class="card-text">
                <strong>Brand:</strong> ${shoe.brand}
            </p>

            <p class="card-text">
                <strong>Size:</strong> ${shoe.size}
            </p>

            <p class="card-text">
                <strong>Price:</strong> $${shoe.price}
            </p>

            <p class="card-text">
                <strong>Color:</strong> ${shoe.color}
            </p>

            <a href="${shoe.imageUrl}"
               class="btn btn-primary mt-auto">
                Buy Now
            </a>

        </div>
    </div>
</div>`;
    showRow.innerHTML += shoeHTML;
  });
};


const filter = {
  brand: "",
  color: "",
  size: "",
  price: "",
};

const filterShoes = (event) => {
  filter[event.target.name] = event.target.value;
  console.log(filter.color)
  const filteredShoes = shoes.filter((shoe) => {
    const brand = filter.brand === "" || shoe.brand === filter.brand;
    const color = filter.color === "" || shoe.color === filter.color;
    const size = filter.size === "" || shoe.size === filter.size;
    const price = filter.price === "" || (shoe.price >= parseFloat(filter.price.split('-')[0].replace('$', '')) && shoe.price <= parseFloat(filter.price.split('-')[1].replace('$', '')));

    return brand && color && size && price;
  });

  renderShoes(filteredShoes);
};

renderShoes(shoes);
