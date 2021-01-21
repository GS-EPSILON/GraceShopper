const usersSeed = [
  {
    // name: 'Dwayne Wayans',
    email: 'wayans1@gmail.com',
    password: '123'
  },
  {
    // name: 'Keenen Wayans',
    email: 'wayans2@gmail.com',
    password: '123'
  },
  {
    // name: 'Damon Wayans',
    email: 'wayans3@gmail.com',
    password: '123'
  },
  {
    // name: 'Kim Wayans',
    email: 'wayans4@gmail.com',
    password: '123'
  },
  {
    // name: 'Shawn Wayans',
    email: 'wayans5@gmail.com',
    password: '123'
  },
  {
    email: 'admin@admin.com',
    password: '12345',
    isAdmin: true
  }
]

const vehicles = [
  {
    name: 'Space Shuttle',
    quantity: 100,
    category: 'vehicle',
    description:
      'The Space Shuttle was a partially reusable low Earth orbital spacecraft system operated from 1981 to 2011 by the National Aeronautics and Space Administration (NASA) as part of the Space Shuttle program. Its official program name was Space Transportation System (STS), taken from a 1969 plan for a system of reusable spacecraft where it was the only item funded for development.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/220px-STS120LaunchHiRes-edit1.jpg',
    price: 50000
  },
  {
    name: 'Mars Rover',
    quantity: 100,
    category: 'vehicle',
    description:
      'A Mars rover is a motor vehicle that travels across the surface of the planet Mars upon arrival. Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg/300px-Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg',
    price: 5000
  },
  {
    name: 'International Space Station',
    quantity: 100,
    category: 'vehicle',
    description:
      'The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental treaties and agreements.[9] The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields. The ISS is suited for testing the spacecraft systems and equipment required for possible future long-duration missions to the Moon and Mars.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/300px-International_Space_Station_after_undocking_of_STS-132.jpg',
    price: 25000
  },
  {
    name: 'Death Star',
    quantity: 100,
    category: 'vehicle',
    description:
      'The Death Star a fictional mobile space station and galactic superweapon featured in the Star Wars space-opera franchise. The first version, which appears in the original 1977 film Star Wars, is stated to be more than 160 kilometers (99 mi) in diameter, and is crewed by an estimated 1.7 million military personnel and 400,000 droids.[1][2] The second Death Star appears in Return of the Jedi, and is significantly larger at 900 kilometres (560 mi) in diameter and while unfinished, is technologically more advanced than its predecessor. Built by the Galactic Empire to strengthen its control over the galaxy, both Death Stars are armed with kyber krystal-powered superlasers, which can destroy entire planets. The first Death Star requires significant time to fully recharge the laser.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png',
    price: 50000
  },
  {
    name: 'Starship Enterprise',
    quantity: 100,
    category: 'vehicle',
    description: `The USS Enterprise (NCC-1701) was a 23rd century Federation Constitution-class starship operated by Starfleet. It was also the first ship to bear the name Enterprise with this registry. Launched in 2245, the ship was commanded by Captain Robert April until 2250, when command of the ship was turned over to April's First Officer Christopher Pike. (TAS: "The Counter-Clock Incident"; DIS: "Brother")`,
    imageURL:
      'https://airandspace.si.edu/sites/default/files/styles/body_large/public/images/image-albums/A19740668000-NASM2016-02325.jpg?itok=i3lwweIk',
    price: 10000
  }
]

const apparel = [
  {
    name: 'Spacesuit',
    quantity: 100,
    category: 'apparel',
    description: `A space suit or spacesuit is a garment worn to keep a human alive in the harsh environment of outer space, vacuum and temperature extremes. Space suits are often worn inside spacecraft as a safety precaution in case of loss of cabin pressure, and are necessary for extravehicular activity (EVA), work done outside spacecraft. Space suits have been worn for such work in Earth orbit, on the surface of the Moon, and en route back to Earth from the Moon. Modern space suits augment the basic pressure garment with a complex system of equipment and environmental systems designed to keep the wearer comfortable, and to minimize the effort required to bend the limbs, resisting a soft pressure garment's natural tendency to stiffen against the vacuum. A self-contained oxygen supply and environmental control system is frequently employed to allow complete freedom of movement, independent of the spacecraft.`,
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aldrin_Apollo_11_cropped.jpg/170px-Aldrin_Apollo_11_cropped.jpg',
    price: 2199
  },
  {
    name: 'Helmet',
    quantity: 100,
    category: 'apparel',
    description: `A helmet. For space.`,
    imageURL:
      'https://luxurylaunches.com/wp-content/uploads/2020/09/Space-Helmet-Style-Face-Mask.jpg',
    price: 499
  },
  {
    name: 'Gloves',
    quantity: 100,
    category: 'apparel',
    description: `Gloves. Space gloves.`,
    imageURL:
      'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/kids-silver-astronaut-gloves~13824687',
    price: 95
  },
  {
    name: 'Boots',
    quantity: 100,
    category: 'apparel',
    description: `Protect your feet — from space.`,
    imageURL: 'https://www.spacekids.co.uk/images/source/GG_Boots_2.jpg',
    price: 399
  },
  {
    name: 'Oxygen Tank',
    quantity: 100,
    category: 'apparel',
    description: `So you can breath. In space!`,
    imageURL:
      'https://i.pinimg.com/originals/38/0e/f7/380ef7e0a3446ee5ad4d84d3e6ce4bda.jpg',
    price: 150
  }
]

const services = [
  {
    name: 'Trip to Mars',
    quantity: 100,
    category: 'service',
    description: `Once in a lifetime opportunity to visit the red planet!`,
    imageURL:
      'https://images.ctfassets.net/3s5io6mnxfqz/2VvogyEVZPpfXN8X8hqcwh/832e089800b2774ff722e89781796945/AdobeStock_214131404.jpeg',
    price: 300
  },
  {
    name: 'ISS: One Week Stay',
    quantity: 100,
    category: 'service',
    description: `Don't want to miss these views!`,
    imageURL:
      'https://www.sciencealert.com/images/2020-09/processed/010-nasa-iss_1024.jpg',
    price: 100
  },
  {
    name: 'Lunar Hotel',
    quantity: 100,
    category: 'service',
    description: `The perfect holiday getaway!`,
    imageURL: 'https://ychef.files.bbci.co.uk/976x549/p00vynyx.jpg',
    price: 200
  },
  {
    name: 'Explore a Black Hole',
    quantity: 100,
    category: 'service',
    description: `Like a weighted blanket, but heavier!`,
    imageURL:
      'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/Supermassive_blackhole_planet.jpg?itok=mrUROD80',
    price: 1000
  },
  {
    name: 'Stargazing',
    quantity: 100,
    category: 'service',
    description: `Check out the stars, man!`,
    imageURL:
      'https://www.universetoday.com/wp-content/uploads/2019/06/eso1911a.jpg',
    price: 500
  }
]

const misc = [
  {
    name: 'Space Mug',
    quantity: 100,
    category: 'misc',
    description: `Space coffee never tasted so good.`,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jhAhuuBubEwPW4vz_uIYIzCptLCAcQkcqVmYaw4ae-ygYMMT9QrokmKi2GarSWzjn3Pp6e8Y&usqp=CAc',
    price: 200
  },
  {
    name: 'Space Pencils',
    quantity: 100,
    category: 'misc',
    description: `They write upside down!`,
    imageURL: 'https://pbs.twimg.com/media/DHdMrw_W0AE87bS.jpg',
    price: 200
  },
  {
    name: 'Moon Rocks',
    quantity: 100,
    category: 'misc',
    description: `Rocks from the moon.`,
    imageURL:
      'https://globalnews.ca/wp-content/uploads/2019/06/21335746.jpg?quality=85&strip=all&w=1200',
    price: 200
  },
  {
    name: 'Space Postcards',
    quantity: 100,
    category: 'misc',
    description: `Don't forget to say hi to mom and dad, from space!`,
    imageURL:
      'https://static.vecteezy.com/system/resources/previews/000/190/735/non_2x/outer-space-postcard-vector.jpg',
    price: 200
  },
  {
    name: 'Space Fidge Spinner',
    quantity: 100,
    category: 'misc',
    description: `Fidget spinners are toys not unlike yo-yo or other skill toys, designed to spin with little effort. A basic fidget spinner usually consists of a two- or three-pronged design with a bearing in its center circular pad. However, the number of prongs may vary - some may have six or more. A person holds the center pad while the toy spins. They are made from various materials including brass, stainless steel, titanium, copper, aluminium, and plastic.[5][6] The bearings are generally ceramic, metal (stainless steel or chrome), and some are hybrids—such as ceramic balls with stainless races and cages. Each fidget spinner also has two or more weights on the outside that make it spin faster and stay balanced. Bearings can vary to adjust for the design's spin time, vibration, and noise, causing unique sensory feedback.`,
    imageURL:
      'https://i.pinimg.com/originals/11/8f/6a/118f6acdb2da95d643032b65291a0b33.jpg',
    price: 200
  }
]

const ordersSeed = [
  {
    userId: 1,
    date: '2021-01-05T12:00:00.000Z',
    status: 'complete',
    totalPrice: 100
  },
  {
    userId: 2,
    date: '2021-01-14T12:00:00.000Z',
    status: 'complete',
    totalPrice: 222
  },
  {
    userId: 2,
    date: '2021-01-13T02:51:25.898Z',
    status: 'complete',
    totalPrice: 44
  },
  {
    userId: 3,
    date: '2021-01-08T12:00:00.000Z',
    status: 'complete',
    totalPrice: 96
  },
  {
    userId: 4,
    date: '2021-01-09T12:00:00.000Z',
    status: 'complete',
    totalPrice: 453
  }
]

const productsSeed = vehicles
  .concat(apparel)
  .concat(services)
  .concat(misc)

module.exports = {
  usersSeed,
  productsSeed,
  ordersSeed
}
