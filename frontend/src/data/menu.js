const menu = [
    {
        id: 1,
        category: 'BEGINNINGS',
        image: "https://i.pinimg.com/originals/d1/42/bc/d142bcfe0a1bf0e131cd2fe7b4cca0a8.jpg",
        title: 'Chimi Cha Cha',
        text: 'Chicken breast wrapped in Chinese phyllo, Mexican beans, cumin, roasted peppers, corn, onions, mozzarella cheese, Parmesan cheese, served with grated lettuce and salsa sauce.',
        price: '$19.99'
    },
    {
        id: 2,
        category: 'BEGINNINGS',
        image: "https://alhallabtr.com/wp-content/uploads/2020/12/Shrimp-pane_tn-600x400.jpg",
        title: 'Shrimp Pane',
        text: 'Shrimp coated with cornmeal, French fries, arugula, served with lemon and tartar sauce.',
        price: '$25.50'
    },
    {
        id: 3,
        category: 'BEGINNINGS',
        image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/09/buffalo-wings-yemekcom.jpg",
        title: 'Buffalo Wings',
        text: '6 pieces of fried chicken in a deep fryer, covered with louisiana sauce (hot sauce) and served with roquefort.',
        price: '$15.50'
    },
    {
        id: 4,
        category: 'BEGINNINGS',
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/mozzarella-sticks-tarifi.jpg",
        title: 'Mozzarella Sticks',
        text: 'Mozzarella sticks served with salsa sauce.',
        price: '$19.99'
    },
    {
        id: 5,
        category: 'BEGINNINGS',
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/guacamole-sos-tarifi.jpg",
        title: 'Guacamole Doritos',
        text: 'It is served with fried doritos and cheddar cheese, guacamole sauce, sour cream and salsa sauce.',
        price: '$23.00'
    },
    {
        id: 6,
        category: 'DINNER',
        image: "https://images.squarespace-cdn.com/content/v1/58001662d482e9484a9ed25d/1584565133354-F6IM2XUYI3ENDL7RCM49/wander_photowalk-27.jpg",
        title: 'Canyon Road',
        text: 'Grilled steak, served with special sauce, potatoes and baked seasonal vegetables',
        price: '$23.80'
    },
    {
        id: 7,
        category: 'DINNER',
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/22/0/TISP02H_New-York-Strip-Steak_s4x3.jpg.rend.hgtvcom.616.462.suffix/1600379670481.jpeg",
        title: 'New York Steak',
        text: 'We presented it to your liking with 250 gr grilled steak, baked seasonal vegetables and demi glace sauce.',
        price: '$23.80'
    },
    {
        id: 8,
        category: 'DINNER',
        image: "https://www.gustissimo.it/articoli/ricette/carne-di-vitello/filetto-ai-funghi.jpg",
        title: 'Filetto al Funghi',
        text: 'Grilled tenderloin, Creamy mushroom sauce, potatoes and seasonal baked vegetables',
        price: '$23.00'
    },
    {
        id: 9,
        category: 'DINNER',
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/08/Easy-Chicken-Curry-square-FS-117.jpg",
        title: 'Chicken with Curry Sauce',
        text: 'Chicken breast with creamy and curry sauce, served with almonds, pineapple, currants and rice',
        price: '$15.50'
    },
    {
        id: 10,
        category: 'DINNER',
        image: "https://www.recipetineats.com/wp-content/uploads/2016/10/Baked-BBQ-Chicken-with-Barbecue-Sauce_2-SQ.jpg",
        title: 'Chicken with BBQ Sauce',
        text: 'Grilled chicken cutlet dipped in barbecue sauce, served with rice and mediterranean greens',
        price: '$19.99'
    },
    {
        id: 11,
        category: 'BREAKFAST',
        image: "https://atisbutikrestaurant.com.tr/wp-content/uploads/2021/06/2021-atis-serpme-kahvalti-1.jpg",
        title: 'Mixed BREAKFAST (for 2 people)',
        text: 'Tulum cheese, cheddar cheese, feta cheese, halloumi cheese, cheddar cheese, mienyu menemen, salami, ham, sausage, soudjouk, green olives, black olives, cherry jam, apricot jam, nutella, honey, butter, spring rolls, mince pies, Served with tomatoes, cucumbers, greens, boiled eggs, tahini, molasses, French fries and unlimited tea.',
        price: '$23.80'
    },
    {
        id: 12,
        category: 'BREAKFAST',
        image: "https://data.thefeedfeed.com/recommended/15259852155af4afbf83ffe.jpg",
        title: 'BREAKFAST Plate',
        text: 'Served with feta cheese, cheddar cheese, tulum cheese, boiled egg, green olives, black olives, honey, butter, tomatoes, cucumbers, greens and unlimited brewed tea.',
        price: '$15.50'
    },
    {
        id: 13,
        category: 'BREAKFAST',
        image: "https://i4.hurimg.com/i/hurriyet/75/0x0/5c10b7430f254418d86cee28.jpg",
        title: 'Crep',
        text: 'Served with chocolate, banana and strawberry.',
        price: '$35.50'
    },
    {
        id: 14,
        category: 'BREAKFAST',
        image: "https://www.jessicagavin.com/wp-content/uploads/2020/09/how-to-fry-an-egg-3-1200.jpg",
        title: 'Fried Eggs',
        text: 'It is served with eggs, roasting, salt and thyme.',
        price: '$19.99'
    },
    {
        id: 15,
        category: 'BREAKFAST',
        image: "http://4.bp.blogspot.com/_vbIhnhWcBzg/TRuRjcZVM1I/AAAAAAAAAYo/7Wf_hdx73fU/s1600/Sucuklu%2BYumurta%2B007.jpg",
        title: 'Fried Egg with Sausage',
        text: 'Served with egg, sausage, chili pepper, salt and thyme.',
        price: '$23.00'
    },
    {
        id: 16,
        category: 'SANDWICHES',
        image: "https://assets.epicurious.com/photos/578e746c95824bf90525e568/master/pass/michaels-famous-philly-cheese-steak-sandwich.jpg",
        title: 'Cheddar Steak Sandwich',
        text: 'It is served with steak meat, Mexican pepper, mushrooms, onions, cheddar cheese, lettuce and French fries between sandwich bread.',
        price: '$15.50'
    },
    {
        id: 17,
        category: 'SANDWICHES',
        image: "https://i.lezzet.com.tr/images-xxlarge-recipe/club-sandwinch-fcf2625a-2869-43bb-9350-6a1f6a8cd686.jpg",
        title: 'Club Sandwich',
        text: 'Served with toast bread, grilled chicken, salami, ham, pickles, cheddar cheese, tomatoes and French fries.',
        price: '$35.50'
    },
    {
        id: 18,
        category: 'SANDWICHES',
        image: "https://static.toiimg.com/thumb/60256016.cms?width=1200&height=900",
        title: 'Cheese Sandwich',
        text: 'It is served with feta cheese, tomato, cucumber, curly curly and French fries between sandwich bread.',
        price: '$23.00'
    },
    {
        id: 19,
        category: 'SANDWICHES',
        image: "https://bakingmischief.com/wp-content/uploads/2017/10/meatball-sandwich-image-square.jpg",
        title: 'Meatball Sandwich',
        text: 'Served with sandwich bread, meatballs, tomatoes, pickles, lettuce, special sauce and french fries.',
        price: '$19.99'
    },
    {
        id: 20,
        category: 'SANDWICHES',
        image: "https://images-gmi-pmc.edge-generalmills.com/7eb09e32-fb06-4a34-97e6-def91b62164f.jpg",
        title: 'Tuna Sandwich',
        text: 'It is served with sandwich bread, tuna fish, caper pickles, onions, tomatoes, curly fries and French fries.',
        price: '$23.80'
    },
]

export default menu;