
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    keepPrice: number;
    image: string;
  }
  // find out how the products value is shaped and initialize a new array with that data.
  // {"endDate":"2023-08-31","fundraiserName":"blarg","location":"Dickson","products":[{"description":"Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop.","name":"Laundry Bundle"},{"description":"Shave Soap, Body Scrub, Shower Oil.","name":"Smooth Shave Bundle"},{"description":"Body Butter, Moisturizing Shea Soap Bar, Silicone Soap Dish.","name":"Moisturizing Body Butter Bundle"},{"description":"Epsom Salt, Bath Bomb, Wooden Scoop.","name":"Relaxing Bath Bundle"},{"description":"Buff’s 5 Best-Selling Soap Bars.","name":"Buff’s 5 Best Soap Bundle"},{"description":"Buff’s 5 Best-Selling Bath Bombs.","name":"Buff’s 5 Best Bath Bomb Bundle"},{"description":"{Narcissist | All Hail the Queen | Good Morning Sunshine | Island Nectar | Commando} Soap + Soap Sleeve.","name":"Single Shea Soap + Soap Sleeve"},{"description":"Custom description","name":"Custom Soap Name?"}]}
  const products: Product[] = [
    {
      id: 1,
      name: "Laundry Bundle",
      description: "Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop",
      price: 50,
      keepPrice: 12.5,
      image: ""
    },
    {
      id: 2,
      name: "Smooth Shave Bundle",
      description: "Shave Soap, Body Scrub, Shower Oil",
      price: 45,
      keepPrice: 11.25,
      image: "path_to_shave_bundle_image.jpg"
    },
    {
      id: 3,
      name: "Moisturizing Body Butter Bundle",
      description: "Body Butter, Moisturizing Shea Soap Bar, Silicone Soap Dish",
      price: 35,
      keepPrice: 8.75,
      image: "path_to_body_butter_bundle_image.jpg"
    },
    {
      id: 4,
      name: "Relaxing Bath Bundle",
      description: "Epsom Salt, Bath Bomb, Wooden Scoop",
      price: 35,
      keepPrice: 8.75,
      image: "path_to_bath_bundle_image.jpg"
    },
    {
      id: 5,
      name: "Buff’s 5 Best Soap Bundle",
      description: "Buff’s 5 Best-Selling Soap Bars",
      price: 35,
      keepPrice: 8.75,
      image: "path_to_soap_bundle_image.jpg"
    },
    {
      id: 6,
      name: "Buff’s 5 Best Bath Bomb Bundle",
      description: "Buff’s 5 Best-Selling Bath Bombs",
      price: 35,
      keepPrice: 8.75,
      image: "path_to_bath_bomb_bundle_image.jpg"
    },
    {
      id: 7,
      name: "Single Shea Soap + Soap Sleeve",
      description: "Choice of Narcissist, All Hail the Queen, Good Morning Sunshine, Island Nectar, or Commando + Soap Sleeve",
      price: 15,
      keepPrice: 3.75,
      image: "path_to_single_shea_soap_image.jpg"
    },
    {
      id: 8,
      name: "Custom Soap",
      description: "Show your Team Spirit with a custom soap! Pick your own scents and colors and design a one-of-a-kind soap for your organization!!",
      price: 10,
      keepPrice: 2.50,
      image: "path_to_custom_soap_image.jpg"
    }
  ];
  
  export default products;
  