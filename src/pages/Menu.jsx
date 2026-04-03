import { useState } from 'react';

const menu = {
  'starters': [
    {
      name: 'Oscietra Caviar',
      description: 'Hand-blinis, crème fraîche infused with dill, chive oil, lemon zest.',
      prix: '1200da',
    },
    {
      name: 'Langoustine Ceviche',
      description: "Yuzu tiger's milk, cucumber water, Granny Smith, micro herbs.",
      prix: '1400da',
    },
    {
      name: 'Foie Gras Torchon',
      description: 'Sauternes gelée, Breton salt, toasted brioche, fig compote.',
      prix: '1600da',
    },
    {
      name: 'Truffle Velouté',
      description: 'Black Périgord truffle, Jerusalem artichoke cream, poached quail egg.',
      prix: '1300da',
    },
    {
      name: 'Burrata Royale',
      description: 'Creamy burrata, heirloom tomatoes, basil oil, aged balsamic reduction.',
      prix: '1100da',
    }
  ],
  'mains': [
    {
      name: 'Wagyu Beef Tenderloin',
      description: 'Charcoal grilled A5 wagyu, truffle jus, pomme purée, seasonal vegetables.',
      prix: '3200da',
    },
    {
      name: 'Roasted Sea Bass',
      description: 'Mediterranean sea bass, saffron beurre blanc, fennel, citrus segments.',
      prix: '2400da',
    },
    {
      name: 'Herb-Crusted Lamb Rack',
      description: 'Rosemary crust, garlic jus, dauphinoise potatoes, baby carrots.',
      prix: '2800da',
    },
    {
      name: 'Duck Breast à l’Orange',
      description: 'Pan-seared duck, orange reduction, caramelized endives.',
      prix: '2600da',
    },
  ],
  'desserts': [
    {
      name: 'Chocolate Fondant',
      description: 'Warm molten chocolate cake, vanilla bean ice cream.',
      prix: '900da',
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard, caramelized sugar crust.',
      prix: '800da',
    },
    {
      name: 'Tarte Tatin',
      description: 'Caramelized apple tart, puff pastry, crème fraîche.',
      prix: '850da',
    },
    {
      name: 'Pistachio Opera Cake',
      description: 'Layers of pistachio sponge, coffee buttercream, dark chocolate glaze.',
      prix: '950da',
    },
  ]
}


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <section className="menu-page" id='menu'>
      <p className='avl'>available ⸺</p>
      <div className="head-menu">
        <p className="menu-txt">Menu List</p>
        <div className="menu-sections">
          {Object.keys(menu).map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="menu-list">
        {menu[activeCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <p className='item-name'>{item.name}</p>
            <p className='item-price'>{item.prix}</p>
            <p className='item-desc'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu