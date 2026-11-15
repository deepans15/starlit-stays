// Furniture catalogue additions for Starlit Stays.
// ChatGPT adds new furniture here (or changes the built-in pieces by reusing their id).
// Each item's picture goes in art/decor/<id>.svg and must also be listed in manifest.js as "decor/<id>".
//
// Fields:
//   id      lowercase letters, numbers and _ only (e.g. "beanbag_chair")
//   name    shown in the shop
//   zone    "floor" (stands on the floor), "wall" (hangs, player can move it up and down),
//           "ceiling" (hangs from the top), or "bed" (one per guest room; guests sleep in it)
//   width, height   the SVG's size in pixels (the game draws it at half size)
//   cost    price in coins
//   decor   decor points it adds to a room (bigger and fancier = more)
//   level   player level that unlocks it
//   rooms   optional: which rooms can use it, any of "guest", "amenity", "lobby"
//   back    optional: true for flat things drawn behind other furniture, like rugs
//
// Example:
window.STARLIT_ITEMS = [
  {
    "id": "bedside_table",
    "name": "Bedside Table",
    "zone": "floor",
    "width": 48,
    "height": 48,
    "cost": 100,
    "decor": 3,
    "level": 2
  },
  {
    "id": "flower_vase",
    "name": "Meadow Flower Vase",
    "zone": "floor",
    "width": 40,
    "height": 64,
    "cost": 140,
    "decor": 4,
    "level": 3
  },
  {
    "id": "moon_mobile",
    "name": "Moon & Stars Mobile",
    "zone": "ceiling",
    "width": 64,
    "height": 64,
    "cost": 420,
    "decor": 7,
    "level": 7
  },
  {
    "id": "beanbag_chair",
    "name": "Cloud Beanbag",
    "zone": "floor",
    "width": 64,
    "height": 48,
    "cost": 180,
    "decor": 5,
    "level": 3
  },
  {
    "id": "tea_cart",
    "name": "Afternoon Tea Cart",
    "zone": "floor",
    "width": 80,
    "height": 72,
    "cost": 420,
    "decor": 7,
    "level": 6
  },
  {
    "id": "star_mirror",
    "name": "Starlight Mirror",
    "zone": "wall",
    "width": 56,
    "height": 76,
    "cost": 720,
    "decor": 9,
    "level": 9
  },
  {
    "id": "love_bed",
    "name": "Sweetheart Bed",
    "zone": "bed",
    "width": 112,
    "height": 64,
    "cost": 420,
    "decor": 7,
    "level": 3,
    "rooms": [
      "guest"
    ]
  },
  {
    "id": "love_loveseat",
    "name": "Sweetheart Loveseat",
    "zone": "floor",
    "width": 96,
    "height": 64,
    "cost": 360,
    "decor": 6,
    "level": 4
  },
  {
    "id": "love_rug",
    "name": "Petal Pink Rug",
    "zone": "floor",
    "width": 120,
    "height": 14,
    "cost": 150,
    "decor": 4,
    "level": 2,
    "back": true
  },
  {
    "id": "love_roses",
    "name": "Sweetheart Rose Planter",
    "zone": "floor",
    "width": 48,
    "height": 60,
    "cost": 140,
    "decor": 4,
    "level": 2
  },
  {
    "id": "love_mirror",
    "name": "Sweetheart Mirror",
    "zone": "wall",
    "width": 60,
    "height": 64,
    "cost": 320,
    "decor": 5,
    "level": 5
  },
  {
    "id": "love_mobile",
    "name": "Floating Hearts Mobile",
    "zone": "ceiling",
    "width": 84,
    "height": 60,
    "cost": 480,
    "decor": 8,
    "level": 8
  },
  {
    "id": "halloween_bed",
    "name": "Moonlit Ghost Bed",
    "zone": "bed",
    "width": 112,
    "height": 64,
    "cost": 480,
    "decor": 8,
    "level": 4,
    "rooms": [
      "guest"
    ]
  },
  {
    "id": "halloween_pumpkin_lamp",
    "name": "Pumpkin Glow Lamp",
    "zone": "floor",
    "width": 44,
    "height": 80,
    "cost": 180,
    "decor": 5,
    "level": 3
  },
  {
    "id": "halloween_ghost_chair",
    "name": "Friendly Ghost Armchair",
    "zone": "floor",
    "width": 64,
    "height": 60,
    "cost": 280,
    "decor": 5,
    "level": 4
  },
  {
    "id": "halloween_rug",
    "name": "Moonshadow Rug",
    "zone": "floor",
    "width": 120,
    "height": 14,
    "cost": 160,
    "decor": 4,
    "level": 2,
    "back": true
  },
  {
    "id": "halloween_bat_art",
    "name": "Little Bat Moon Picture",
    "zone": "wall",
    "width": 60,
    "height": 44,
    "cost": 150,
    "decor": 4,
    "level": 3
  },
  {
    "id": "halloween_cauldron",
    "name": "Enchanted Flower Cauldron",
    "zone": "floor",
    "width": 48,
    "height": 60,
    "cost": 240,
    "decor": 5,
    "level": 5
  },
  {
    "id": "winter_bed",
    "name": "Snowfall Bed",
    "cost": 480,
    "level": 4,
    "zone": "bed",
    "decor": 8,
    "w": 112,
    "h": 64,
    "width": 112,
    "height": 64,
    "rooms": [
      "guest"
    ]
  },
  {
    "id": "winter_armchair",
    "name": "Frost Knit Armchair",
    "cost": 280,
    "level": 4,
    "zone": "floor",
    "decor": 5,
    "w": 64,
    "h": 60,
    "width": 64,
    "height": 60
  },
  {
    "id": "winter_pine",
    "name": "Snowcap Pine",
    "cost": 160,
    "level": 2,
    "zone": "floor",
    "decor": 4,
    "w": 48,
    "h": 60,
    "width": 48,
    "height": 60
  },
  {
    "id": "winter_snowglobe",
    "name": "Woodland Snow Globe",
    "cost": 320,
    "level": 5,
    "zone": "floor",
    "decor": 5,
    "w": 52,
    "h": 56,
    "width": 52,
    "height": 56
  },
  {
    "id": "winter_rug",
    "name": "Snowflake Rug",
    "cost": 180,
    "level": 3,
    "zone": "floor",
    "decor": 5,
    "w": 120,
    "h": 14,
    "width": 120,
    "height": 14,
    "back": true
  },
  {
    "id": "winter_mobile",
    "name": "Snowflake Mobile",
    "cost": 560,
    "level": 8,
    "zone": "ceiling",
    "decor": 8,
    "w": 84,
    "h": 60,
    "width": 84,
    "height": 60
  }
];
