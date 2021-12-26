const menu = [
    {
        id: 1,
        category: 'BAŞLANGIÇ',
        image: "https://i.pinimg.com/originals/d1/42/bc/d142bcfe0a1bf0e131cd2fe7b4cca0a8.jpg",
        title: 'Chimi Cha Cha',
        text: 'Çin yufkasına sarılmış tavuk göğsü, Meksika fasulyesi, kimyon, közlenmiş biber, mısır, soğan, mozzarella peyniri, Parmesan peyniri, rendelenmiş marul ve salsa sos ile servis edilir.',
        price: '19.99₺'
    },
    {
        id: 2,
        category: 'BAŞLANGIÇ',
        image: "https://alhallabtr.com/wp-content/uploads/2020/12/Shrimp-pane_tn-600x400.jpg",
        title: 'Karides Güveç',
        text: 'Tereyağ, soğan, sarımsak, domates, mantar, biber, karides, tavada sotelenip, üzerine kaşar peyniri konularak servis edilir.',
        price: '25.50₺'
    },
    {
        id: 3,
        category: 'BAŞLANGIÇ',
        image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/09/buffalo-wings-yemekcom.jpg",
        title: 'Buffalo Wings',
        text: 'Fritözde kızarmış 6 adet tavuk kaadı, louisiana sos (acı sos) bulanmış ve rokfor ile servis edilir.',
        price: '15.50₺'
    },
    {
        id: 4,
        category: 'BAŞLANGIÇ',
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/mozzarella-sticks-tarifi.jpg",
        title: 'Mozzarella Sticks',
        text: 'Mozzarella sticks, salsa sos ile servis edilir.',
        price: '19.99₺'
    },
    {
        id: 5,
        category: 'BAŞLANGIÇ',
        image: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/guacamole-sos-tarifi.jpg",
        title: 'Guacamole Doritos',
        text: 'Salamandırada kızarmış doritos ve kaşar peyniri, guacamole sos, sour cream, salsa sos ile servis edilir.',
        price: '23.00₺'
    },
    {
        id: 6,
        category: 'AKŞAM YEMEĞİ',
        image: "https://images.squarespace-cdn.com/content/v1/58001662d482e9484a9ed25d/1584565133354-F6IM2XUYI3ENDL7RCM49/wander_photowalk-27.jpg",
        title: 'Canyon Road',
        text: 'Izgarada pişrilmiş steak, yanında özel sos, patates ve fırınlanmış mevsim sebzeleri ile servis edilir',
        price: '23.80₺'
    },
    {
        id: 7,
        category: 'AKŞAM YEMEĞİ',
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/22/0/TISP02H_New-York-Strip-Steak_s4x3.jpg.rend.hgtvcom.616.462.suffix/1600379670481.jpeg",
        title: 'New York Steak',
        text: '250 gr ızgarada pişirilmiş steak, fırınlanmış mevsim sebzeleri, demi glace sos ile beğeninize sunduk',
        price: '23.80₺'
    },
    {
        id: 8,
        category: 'AKŞAM YEMEĞİ',
        image: "https://www.gustissimo.it/articoli/ricette/carne-di-vitello/filetto-ai-funghi.jpg",
        title: 'Filetto al Funghi',
        text: 'Izgarada pişrilmiş bonfile et, Kremalı mantar sos, patates ve fırınlanmış mevsim sebzeleri',
        price: '23.00₺'
    },
    {
        id: 9,
        category: 'AKŞAM YEMEĞİ',
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/08/Easy-Chicken-Curry-square-FS-117.jpg",
        title: 'Köri Soslu Tavuk',
        text: 'Kremalı ve köri soslu tavuk göğsü, file badem, ananas, kuş üzümü ve pilav ile servis edilir',
        price: '15.50₺'
    },
    {
        id: 10,
        category: 'AKŞAM YEMEĞİ',
        image: "https://www.recipetineats.com/wp-content/uploads/2016/10/Baked-BBQ-Chicken-with-Barbecue-Sauce_2-SQ.jpg",
        title: 'BBQ Soslu Tavuk',
        text: 'Izgarada pişirilmiş tavuk pirzola, barbelü sosuna bulanmış, pilav ve akdeniz yeşilliği ile servis edilir',
        price: '19.99₺'
    },
    {
        id: 11,
        category: 'KAHVALTI',
        image: "https://atisbutikrestaurant.com.tr/wp-content/uploads/2021/06/2021-atis-serpme-kahvalti-1.jpg",
        title: 'Serpme Kahvaltı (2 kişilik)',
        text: 'Tulum peyniri, kaşar peyniri, beyaz peynir, hellim peyniri, cheddar peynir, mienyu menemen, salam, jambon, sosis, sucuk, yeşil zeytin, siyah zeytin, vişne reçeli, kayısı reçeli, nutella, bal, tereyağ, sigara böreği, kıymalı börek, domates, salatalık, yeşillik, haşlanmış yumurta, tahin, pekmez, parmak patates ve sınırsız demleme çay ile servis edilir.',
        price: '23.80₺'
    },
    {
        id: 12,
        category: 'KAHVALTI',
        image: "https://data.thefeedfeed.com/recommended/15259852155af4afbf83ffe.jpg",
        title: 'Kahvaltı tabağı',
        text: 'Beyaz peynir, kaşar peyniri, tulum peyniri, haşlanmış yumurta, yeşil zeytin, siyah zeytin, bal, tereyağ, domates, salatalık, yeşillik ve sınırsız demleme çay ile servis edilir.',
        price: '15.50₺'
    },
    {
        id: 13,
        category: 'KAHVALTI',
        image: "https://i4.hurimg.com/i/hurriyet/75/0x0/5c10b7430f254418d86cee28.jpg",
        title: 'Crep',
        text: 'Çikolata, muz ve çilek ile servis edilir.',
        price: '35.50₺'
    },
    {
        id: 14,
        category: 'KAHVALTI',
        image: "https://www.jessicagavin.com/wp-content/uploads/2020/09/how-to-fry-an-egg-3-1200.jpg",
        title: 'Sahanda Yumurta',
        text: 'Yağ, tuz, pul biberi ie servis edilir.',
        price: '19.99₺'
    },
    {
        id: 15,
        category: 'KAHVALTI',
        image: "http://4.bp.blogspot.com/_vbIhnhWcBzg/TRuRjcZVM1I/AAAAAAAAAYo/7Wf_hdx73fU/s1600/Sucuklu%2BYumurta%2B007.jpg",
        title: 'Sahanda Sucuklu Yumurta',
        text: 'Yumurta, sucuk, pul biberi, tuz, kekik ile servis edilir.',
        price: '23.00₺'
    },
    {
        id: 16,
        category: 'SANDVİÇLER',
        image: "https://assets.epicurious.com/photos/578e746c95824bf90525e568/master/pass/michaels-famous-philly-cheese-steak-sandwich.jpg",
        title: 'Cheddarlı Steak Sandwich',
        text: 'Sandwich ekmeği arasına steak et, meksika biberi, mantar, soğan, cheddar peyniri, marul ve parmak patates ile servis edilir.',
        price: '15.50₺'
    },
    {
        id: 17,
        category: 'SANDVİÇLER',
        image: "https://i.lezzet.com.tr/images-xxlarge-recipe/club-sandwinch-fcf2625a-2869-43bb-9350-6a1f6a8cd686.jpg",
        title: 'Club Sandwich',
        text: 'Tost ekmeği, ızgara tavuk, salam, jambon, turşu, kaşar peyniri, domates ve parmak patates ile servis edilir.',
        price: '35.50₺'
    },
    {
        id: 18,
        category: 'SANDVİÇLER',
        image: "https://static.toiimg.com/thumb/60256016.cms?width=1200&height=900",
        title: 'Peynirli Sandwich',
        text: 'Sandvich ekmeği arasına beyaz peynir, domates, salatalık, kıvırcık ve parmak patates ile servis edilir.',
        price: '23.00₺'
    },
    {
        id: 19,
        category: 'SANDVİÇLER',
        image: "https://bakingmischief.com/wp-content/uploads/2017/10/meatball-sandwich-image-square.jpg",
        title: 'Köfte Sandwich',
        text: 'Sandvich ekmeği, köfte, domates, turşu, kıvırcık, özel sos ve parmak patates ile servis edilir.',
        price: '19.99₺'
    },
    {
        id: 20,
        category: 'SANDVİÇLER',
        image: "https://images-gmi-pmc.edge-generalmills.com/7eb09e32-fb06-4a34-97e6-def91b62164f.jpg",
        title: 'Ton Balıklı Sandwich',
        text: 'Sandvich ekmeği, ton balığı, kapari turşu, soğan, domates, kıvırcık ve parmak patates ile servis edilir.',
        price: '23.80₺'
    },
]

export default menu;