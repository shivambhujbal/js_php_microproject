import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface Dish {
  name: string;
  description: string;
  price: string;
  type: 'veg' | 'non-veg';
  image: string;
}

interface MenuCategory {
  name: string;
  items: Dish[];
}

const FullMenuPage = () => {
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuCategories: MenuCategory[] = [
    {
      name: 'starters',
      items: [
        {
          name: "Paneer Tikka",
          description: "Marinated and grilled cottage cheese with spices",
          price: "₹120",
          type: "veg",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Chicken Seekh Kebab",
          description: "Minced chicken skewers with aromatic spices",
          price: "₹140",
          type: "non-veg",
          image: "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },

        {
          name: "Samosa",
          description: "Crispy pastry filled with spiced potatoes and peas",
          price: "₹60",
          type: "veg",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Fish Amritsari",
          description: "Battered and fried fish with Indian spices",
          price: "₹190",
          type: "non-veg",
          image: "https://images.unsplash.com/photo-1548704087-b11dab0fbec0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      name: 'main course',
      items: [
        {
          name: "Butter Chicken",
          description: "Classic creamy tomato-based curry with tender chicken",
          price: "₹180",
          type: "non-veg",
          image: "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg"
        },
        {
          name: "Dal Makhani",
          description: "Creamy black lentils cooked overnight",
          price: "₹140",
          type: "veg",
          image: "https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=1024x1024&w=is&k=20&c=FVifOSqCkW0GdMqUmgddvJ6xKd4F6touOC4gVfrVT5c="
        },
        {
          name: "Biryani",
          description: "Fragrant rice with choice of protein and spices",
          price: "₹150",
          type: "non-veg",
          image: "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Palak Paneer",
          description: "Cottage cheese in creamy spinach gravy",
          price: "₹160",
          type: "veg",
          image: "https://images.unsplash.com/photo-1678358082845-db9ccd4efaaa?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      name: 'breads',
      items: [
        {
          name: "Butter Naan",
          description: "Soft bread from tandoor with butter",
          price: "₹20",
          type: "veg",
          image: "https://images.unsplash.com/photo-1611107415406-1c12f8cda424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Garlic Roti",
          description: "Whole wheat bread with garlic",
          price: "₹25",
          type: "veg",
          image: "https://plus.unsplash.com/premium_photo-1667428304095-35b50b35566a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
    },
    {
      name: 'desserts',
      items: [
        {
          name: "Gulab Jamun",
          description: "Deep-fried milk solids in sugar syrup",
          price: "₹50",
          type: "veg",
          image: "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg"
        },
        {
          name: "Rasmalai",
          description: "Soft cottage cheese dumplings in sweet milk",
          price: "₹60",
          type: "veg",
          image: "https://i.pinimg.com/originals/f5/f8/42/f5f842cb91597146df97a40f962fa699.jpg"
        },
        {
          name: "Kheer",
          description: "Rice pudding with cardamom and nuts",
          price: "₹50",
          type: "veg",
          image: "https://www.whiskaffair.com/wp-content/uploads/2019/04/Rice-Kheer-2-3.jpg"
        }
      ]
    },
    {
      name: 'beverages',
      items: [
        {
          name: "Mango Lassi",
          description: "Sweet yogurt drink with mango",
          price: "₹40",
          type: "veg",
          image: "https://ik.imagekit.io/bhug69xts/mango-lassi-cocktail.png"
          },
        {
          name: "Masala Chai",
          description: "Spiced Indian tea with milk",
          price: "₹10",
          type: "veg",
          image: "https://carameltintedlife.com/wp-content/uploads/2020/08/How-to-Make-Masala-Chai-1-of-1-7.jpg"
        },
        {
          name: "Sweet Lassi",
          description: "Traditional yogurt-based sweet drink. direct visit to lord shiva!",
          price: "₹25",
          type: "veg",
          image: "https://www.alchimiaweb.com/blogen/wp-content/uploads/2018/01/bol.jpg"},
      ]
    }
  ];

  const filteredDishes = menuCategories
    .find(category => category.name === activeCategory)?.items
    .filter(dish => filter === 'all' ? true : dish.type === filter) || [];

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our Menu</h1>
          <div className="flex items-center gap-4 bg-purple-900/30 p-4 rounded-lg">
            <Filter className="w-6 h-6 text-purple-400" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'veg' | 'non-veg')}
              className="bg-transparent border-2 border-purple-400 text-white p-2 rounded-full focus:outline-none focus:border-purple-300"
            >
              <option value="all">All Dishes</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
            </select>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-4 mb-8 pb-4 scrollbar-hide">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDishes.map((dish, index) => (
            <div key={index} className="group">
              <div className="relative mb-4">
                <div className="aspect-square overflow-hidden rounded-full border-4 border-purple-400">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className={`absolute -bottom-2 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  dish.type === 'veg' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
                }`}>
                  {dish.type}
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{dish.description}</p>
                <p className="text-purple-400 font-bold mb-4">{dish.price}</p>
                <button className="w-full btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullMenuPage;