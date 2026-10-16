const shoes = [
  {
    id: 1,
    brand: "Adidas",
    name: "Air Max Plus",
    category: "Sneakers",
    price: 200.0,
    inStock: true,
    colors: ["Black"],
    imageUrl:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/27d6452ca9f846d39058c68925624ecd_9366/SUPERNOVA_EASE_2_W_RUNNING_SHOES_Black_JQ4244_00_plp_standard.jpg",
    productUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/27d6452ca9f846d39058c68925624ecd_9366/SUPERNOVA_EASE_2_W_RUNNING_SHOES_Black_JQ4244_00_plp_standard.jpg",
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Campus 00s Sneakers",
    category: "Casual",
    price: 300.0,
    inStock: true,
    colors: ["Black"],
    imageUrl:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/11b1d1d9e78145369f394f843ebee8e3_9366/1609ER_RS_SHOES_Black_KI9855_00_plp_standard.jpg",
    productUrl: "https://www.adidas.com/us/campus-00s-shoes/HQ8708.html",
  },
  {
    id: 3,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    category: "Skate",
    price: 400.0,
    inStock: true,
    colors: ["Blue"],
    imageUrl:
      "https://my.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BWU00NMO20_PM2_Front%20view.jpg",
    productUrl:
      "https://www.vans.com/en-us/p/shoes/icons/old-skool-5205/old-skool-canvas-shoe-VN000D3HBKA",
  },
  {
    id: 4,
    brand: "Louis Vuitton",
    name: "Trainer Collection for Men",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Brown"],
    imageUrl:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BWU07MSC92_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 5,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Blue"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 6,
    brand: "New Balance",
    name: "Running Shoe",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Brown"],
    imageUrl:
      "https://nb.scene7.com/is/image/NB/w32714q_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 7,
    brand: "New Balance",
    name: "Men's Causal Shoe & Sneaker",
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["White"],
    imageUrl:
      "https://nb.scene7.com/is/image/NB/u90605gn_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 8,
    brand: "Nike",
    name: "Air Force 1 Retro Premium Women's Shoe",
    category: "Lifestyle",
    price: 400.0,
    inStock: true,
    colors: ["Pink"],
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1760d08e-9799-4ede-a408-1d08ba0e9f33/W++AIR+FORCE+1+RETRO+PRM.png",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 9,
    brand: "Nike",
    name: "Vomero Plus Women's Road Running Shoe",
    category: "Lifestyle",
    price: 300.45,
    inStock: true,
    colors: ["Green"],
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/51a1af5c-3bc3-473e-b52a-debf664a2e02/W+NIKE+VOMERO+PLUS.png",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 10,
    brand: "Nike",
    name: "Nike x Hyperice Hyperboot",
    category: "Lifestyle",
    price: 500.0,
    inStock: true,
    colors: ["White", "Grey", "Black"],
    imageUrl:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8ce3f2f5-ecf7-44ed-999c-49fdbd3b434e/HYPERBOOT+BY+NIKE+X+HYPERICE.png",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 11,
    brand: "Nike",
    name: "Moon Shoe OG",
    category: "Lifestyle",
    price: 340.79,
    inStock: true,
    colors: ["Green"],
    imageUrl:
      "https://images.vegnonveg.com/resized/1020X1200/15555/nike-moon-shoe-og-malachitesoft-pearl-gum-light-brown-6a4b9fa53bcfb.jpg?format=webp",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 12,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 40,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 13,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 41,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 14,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 42,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 15,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 43,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 16,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 44,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
   {
    id: 17,
    brand: "Louis Vuitton",
    name: "Trainer Sneaker Shoe",
    size: 40,
    category: "Lifestyle",
    price: 99.99,
    inStock: true,
    colors: ["Grey with White", "Black with White"],
    imageUrl:
      "https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BSUPN8GC20_PM2_Front%20view.jpg",
    productUrl: "https://www.newbalance.com/pd/574-core/ML574V3-40377.html",
  },
];

const showRow = document.getElementById("show-rows");

const renderShoes = (shoesToShow) => {
  showRow.innerHTML = "";

  shoesToShow.forEach((shoe) => {
    const shoeHTML = `<div class="col-md-3 col-12">
                    <div class="card" style="height: 100%;">
                        <img src=${shoe.imageUrl}
                            class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${shoe.name}</h5>
                            <p class="card-text">${shoe.brand}</p>
                            <p class="card-text">${shoe.size}</p>
                            <p class="card-text">$${shoe.price}</p>
                        </div>
                    </div>
                </div>`;
    showRow.innerHTML += shoeHTML;
  });
};


const filter = {
  brand: "",
  color: "",
};

const searchBrand = (event) => {
  const brand = document.getElementById("brand");

  filter.brand = event.target.value;

  const filteredShoes = !filter.brand
    ? shoes
    : shoes.filter((shoe) => shoe.brand === filter.brand);

    
  renderShoes(filteredShoes);
};

renderShoes(shoes);


const searchColor = (event) => {
  const color = document.getElementById("color");

  filter.color = event.target.value;

  if (event.target.value === "color") {
    filter.color = "";
  }

  const filteredShoes = !filter.color
    ? shoes
    : shoes.filter((shoe) => shoe.colors.includes(filter.color));

  renderShoes(filteredShoes);
};

renderShoes(shoes);
