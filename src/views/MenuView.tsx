import { Flame, Leaf, Fish, Cake, Coffee } from "lucide-react";

interface Dish {
  name: string;
  desc: string;
  price: string;
  icon: typeof Flame;
  color: string;
}

const categories: { title: string; dishes: Dish[] }[] = [
  {
    title: "Starters",
    dishes: [
      { name: "Samboosa Trio", desc: "Crispy pastry with meat, cheese & spinach fillings", price: "$8", icon: Leaf, color: "text-emerald-600 bg-emerald-50" },
      { name: "Hummus Beiruti", desc: "Creamy chickpea dip, olive oil, warm pita", price: "$7", icon: Leaf, color: "text-amber-600 bg-amber-50" },
      { name: "Grilled Halloumi", desc: "Served with tomato, mint & pomegranate", price: "$10", icon: Flame, color: "text-rose-600 bg-rose-50" },
    ],
  },
  {
    title: "Main Course",
    dishes: [
      { name: "Omani Shuwa", desc: "Slow-cooked marinated lamb with fragrant rice", price: "$26", icon: Flame, color: "text-rose-600 bg-rose-50" },
      { name: "Mixed Grill Platter", desc: "Kofta, shish tawook & lamb chops with flatbread", price: "$22", icon: Flame, color: "text-orange-600 bg-orange-50" },
      { name: "Seafood Basket", desc: "Grilled shrimp, calamari & seasonal fish", price: "$28", icon: Fish, color: "text-sky-600 bg-sky-50" },
      { name: "Vegetable Biryani", desc: "Saffron rice, seasonal veggies & raita", price: "$16", icon: Leaf, color: "text-emerald-600 bg-emerald-50" },
    ],
  },
  {
    title: "Desserts",
    dishes: [
      { name: "Kunafa", desc: "Crispy pastry, warm cheese & sweet syrup", price: "$9", icon: Cake, color: "text-amber-600 bg-amber-50" },
      { name: "Baklava Assortment", desc: "Pistachio, walnut & cashew layered pastry", price: "$8", icon: Cake, color: "text-yellow-600 bg-yellow-50" },
      { name: "Omani Coffee & Dates", desc: "Traditional cardamom coffee with premium dates", price: "$6", icon: Coffee, color: "text-amber-700 bg-amber-50" },
    ],
  },
];

export default function MenuView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">Our Menu</span>
        <h1 className="text-4xl font-bold text-stone-900 mt-2">Crafted with love</h1>
        <p className="text-stone-500 mt-3 max-w-xl mx-auto">From family recipes to modern favorites — every dish is a celebration of flavor.</p>
      </div>

      <div className="space-y-14">
        {categories.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-stone-900">{cat.title}</h2>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.dishes.map((d) => (
                <div key={d.name} className="bg-white rounded-xl border border-stone-200 p-5 hover:shadow-lg transition flex gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${d.color}`}>
                    <d.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-stone-900">{d.name}</h3>
                      <span className="text-amber-700 font-bold whitespace-nowrap">{d.price}</span>
                    </div>
                    <p className="text-sm text-stone-500 mt-1 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
