window.STARLIT_DECOR_ANIMATIONS = {
  "version": 1,
  "items": [
    {
      "id": "hammock_bed",
      "base": "decor/hammock_bed",
      "width": 128,
      "height": 72,
      "anchor": {
        "x": 64.0,
        "y": 72
      },
      "fps": 3,
      "frames": [
        "decor/hammock_bed_sway_1",
        "decor/hammock_bed_sway_2",
        "decor/hammock_bed_sway_3",
        "decor/hammock_bed_sway_4",
        "decor/hammock_bed_sway_5",
        "decor/hammock_bed_sway_6",
        "decor/hammock_bed_sway_7",
        "decor/hammock_bed_sway_8"
      ],
      "layerMode": "replace",
      "phaseMode": "perItem",
      "sleepOffsets": [
        {
          "dx": 0.0,
          "dy": 0.0,
          "rotate": 0.0
        },
        {
          "dx": 0.354,
          "dy": 0.707,
          "rotate": 0.707
        },
        {
          "dx": 0.5,
          "dy": 1.0,
          "rotate": 1.0
        },
        {
          "dx": 0.354,
          "dy": 0.707,
          "rotate": 0.707
        },
        {
          "dx": 0.0,
          "dy": 0.0,
          "rotate": 0.0
        },
        {
          "dx": -0.354,
          "dy": -0.707,
          "rotate": -0.707
        },
        {
          "dx": -0.5,
          "dy": -1.0,
          "rotate": -1.0
        },
        {
          "dx": -0.354,
          "dy": -0.707,
          "rotate": -0.707
        }
      ],
      "activation": "occupied_or_settling"
    },
    {
      "id": "ceiling_fan",
      "base": "decor/ceiling_fan",
      "width": 72,
      "height": 32,
      "anchor": {
        "x": 36.0,
        "y": 32
      },
      "fps": 8,
      "frames": [
        "decor/ceiling_fan_spin_1",
        "decor/ceiling_fan_spin_2",
        "decor/ceiling_fan_spin_3",
        "decor/ceiling_fan_spin_4",
        "decor/ceiling_fan_spin_5",
        "decor/ceiling_fan_spin_6",
        "decor/ceiling_fan_spin_7",
        "decor/ceiling_fan_spin_8"
      ],
      "layerMode": "replace",
      "phaseMode": "perItem",
      "activation": "enabled"
    },
    {
      "id": "fireplace",
      "base": "decor/fireplace",
      "width": 88,
      "height": 88,
      "anchor": {
        "x": 44.0,
        "y": 88
      },
      "fps": 4,
      "frames": [
        "decor/fireplace_burn_1",
        "decor/fireplace_burn_2",
        "decor/fireplace_burn_3",
        "decor/fireplace_burn_4",
        "decor/fireplace_burn_5",
        "decor/fireplace_burn_6",
        "decor/fireplace_burn_7",
        "decor/fireplace_burn_8"
      ],
      "layerMode": "replace",
      "phaseMode": "perItem",
      "activation": "lit"
    },
    {
      "id": "rocking_chair",
      "base": "decor/rocking_chair",
      "width": 72,
      "height": 80,
      "anchor": {
        "x": 36.0,
        "y": 80
      },
      "frames": [
        "decor/rocking_chair_rock_1",
        "decor/rocking_chair_rock_2",
        "decor/rocking_chair_rock_3",
        "decor/rocking_chair_rock_4",
        "decor/rocking_chair_rock_5",
        "decor/rocking_chair_rock_6",
        "decor/rocking_chair_rock_7",
        "decor/rocking_chair_rock_8"
      ],
      "fps": 3,
      "layerMode": "replace",
      "phaseMode": "perItem",
      "activation": "occupied_or_settling"
    },
    {
      "id": "linen_curtains",
      "base": "decor/linen_curtains",
      "width": 96,
      "height": 104,
      "anchor": {
        "x": 48.0,
        "y": 104
      },
      "frames": [
        "decor/linen_curtains_flutter_1",
        "decor/linen_curtains_flutter_2",
        "decor/linen_curtains_flutter_3",
        "decor/linen_curtains_flutter_4",
        "decor/linen_curtains_flutter_5",
        "decor/linen_curtains_flutter_6",
        "decor/linen_curtains_flutter_7",
        "decor/linen_curtains_flutter_8"
      ],
      "fps": 3,
      "layerMode": "replace",
      "phaseMode": "perItem",
      "activation": "breeze"
    }
  ]
};
