class Weapons {

 data ={
	"baseitem": [
		{
			"name": "Antimatter Rifle",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 10,
			"weaponCategory": "martial",
			"age": "futuristic",
			"property": [
				"AF",
				"RLD",
				"2H"
			],
			"range": "120/360",
			"reload": 2,
			"dmg1": "6d8",
			"dmgType": "N",
			"firearm": true,
			"weapon": true,
			"ammoType": "energy cell"
		},
		{
			"name": "Arrow",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 0.05,
			"value": 5
		},
		{
			"name": "Arrows (20)",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 1,
			"value": 100,
			"packContents": [
				{
					"item": "arrow|phb",
					"quantity": 20
				}
			]
		},
		{
			"name": "Automatic Pistol",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 3,
			"weaponCategory": "martial",
			"age": "modern",
			"property": [
				"AF",
				"RLD"
			],
			"range": "50/150",
			"reload": 15,
			"dmg1": "2d6",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "modern bullet"
		},
		{
			"name": "Automatic Rifle",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 8,
			"weaponCategory": "martial",
			"age": "modern",
			"property": [
				"AF",
				"BF",
				"RLD",
				"2H"
			],
			"range": "80/240",
			"reload": 30,
			"dmg1": "2d8",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "modern bullet"
		},
		{
			"name": "Battleaxe",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 4,
			"value": 1000,
			"weaponCategory": "martial",
			"property": [
				"V"
			],
			"dmg1": "1d8",
			"dmgType": "S",
			"dmg2": "1d10",
			"axe": true,
			"weapon": true
		},
		{
			"name": "Blowgun",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 1,
			"value": 1000,
			"weaponCategory": "martial",
			"property": [
				"A",
				"LD"
			],
			"range": "25/100",
			"dmg1": "1",
			"dmgType": "P",
			"weapon": true,
			"ammoType": "blowgun needle|phb"
		},
		{
			"name": "Blowgun Needle",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 0.02,
			"value": 2
		},
		{
			"name": "Blowgun Needles (50)",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 1,
			"value": 100,
			"packContents": [
				{
					"item": "blowgun needle|phb",
					"quantity": 50
				}
			]
		},
		{
			"name": "Breastplate",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "MA",
			"rarity": "none",
			"weight": 20,
			"value": 40000,
			"ac": 14,
			"armor": true,
			"entries": [
				"This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered."
			]
		},
		{
			"name": "Chain Mail",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "HA",
			"rarity": "none",
			"weight": 55,
			"value": 7500,
			"ac": 16,
			"strength": "13",
			"armor": true,
			"stealth": true,
			"entries": [
				"Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets."
			]
		},
		{
			"name": "Chain Shirt",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "MA",
			"rarity": "none",
			"weight": 20,
			"value": 5000,
			"ac": 13,
			"armor": true,
			"entries": [
				"Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers."
			]
		},
		{
			"name": "Club",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 10,
			"weaponCategory": "simple",
			"property": [
				"L"
			],
			"dmg1": "1d4",
			"dmgType": "B",
			"club": true,
			"weapon": true
		},
		{
			"name": "Crossbow Bolt",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 0.075,
			"value": 5
		},
		{
			"name": "Crossbow Bolts (20)",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 1.5,
			"value": 100,
			"packContents": [
				{
					"item": "crossbow bolt|phb",
					"quantity": 20
				}
			]
		},
		{
			"name": "Crystal",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "arcane",
			"rarity": "none",
			"weight": 1,
			"value": 1000
		},
		{
			"name": "Dagger",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 1,
			"value": 200,
			"weaponCategory": "simple",
			"property": [
				"F",
				"L",
				"T"
			],
			"range": "20/60",
			"dmg1": "1d4",
			"dmgType": "P",
			"dagger": true,
			"weapon": true
		},
		{
			"name": "Dart",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 0.25,
			"value": 5,
			"weaponCategory": "simple",
			"property": [
				"F",
				"T"
			],
			"range": "20/60",
			"dmg1": "1d4",
			"dmgType": "P",
			"weapon": true
		},
		{
			"name": "Double-Bladed Scimitar",
			"source": "ERLW",
			"page": 21,
			"otherSources": [
				{
					"source": "UAWGE",
					"page": 74
				}
			],
			"type": "M",
			"rarity": "none",
			"weight": 6,
			"value": 10000,
			"weaponCategory": "martial",
			"property": [
				"S",
				"2H"
			],
			"dmg1": "2d4",
			"dmgType": "S",
			"sword": true,
			"weapon": true,
			"entries": [
				{
					"type": "entries",
					"name": "Special",
					"entries": [
						"If you attack with a double-bladed scimitar as part of the {@action Attack} action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals {@dice 1d4} slashing damage on a hit, instead of {@dice 2d4}."
					]
				}
			],
			"hasFluff": true
		},
		{
			"name": "Energy Cell",
			"source": "DMG",
			"page": 268,
			"type": "AF",
			"rarity": "none",
			"weight": 0.3125,
			"age": "futuristic"
		},
		{
			"name": "Flail",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 1000,
			"weaponCategory": "martial",
			"dmg1": "1d8",
			"dmgType": "B",
			"weapon": true
		},
		{
			"name": "Glaive",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 6,
			"value": 2000,
			"weaponCategory": "martial",
			"property": [
				"H",
				"R",
				"2H"
			],
			"dmg1": "1d10",
			"dmgType": "S",
			"weapon": true
		},
		{
			"name": "Greataxe",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 7,
			"value": 3000,
			"weaponCategory": "martial",
			"property": [
				"H",
				"2H"
			],
			"dmg1": "1d12",
			"dmgType": "S",
			"axe": true,
			"weapon": true
		},
		{
			"name": "Greatclub",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 10,
			"value": 20,
			"weaponCategory": "simple",
			"property": [
				"2H"
			],
			"dmg1": "1d8",
			"dmgType": "B",
			"club": true,
			"weapon": true
		},
		{
			"name": "Greatsword",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 6,
			"value": 5000,
			"weaponCategory": "martial",
			"property": [
				"H",
				"2H"
			],
			"dmg1": "2d6",
			"dmgType": "S",
			"sword": true,
			"weapon": true
		},
		{
			"name": "Halberd",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 6,
			"value": 2000,
			"weaponCategory": "martial",
			"property": [
				"H",
				"R",
				"2H"
			],
			"dmg1": "1d10",
			"dmgType": "S",
			"weapon": true
		},
		{
			"name": "Half Plate Armor",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "MA",
			"rarity": "none",
			"weight": 40,
			"value": 75000,
			"ac": 15,
			"armor": true,
			"stealth": true,
			"entries": [
				"Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps."
			]
		},
		{
			"name": "Hand Crossbow",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 3,
			"value": 7500,
			"weaponCategory": "martial",
			"property": [
				"A",
				"L",
				"LD"
			],
			"range": "30/120",
			"dmg1": "1d6",
			"dmgType": "P",
			"crossbow": true,
			"weapon": true,
			"ammoType": "crossbow bolt|phb"
		},
		{
			"name": "Handaxe",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 500,
			"weaponCategory": "simple",
			"property": [
				"L",
				"T"
			],
			"range": "20/60",
			"dmg1": "1d6",
			"dmgType": "S",
			"axe": true,
			"weapon": true
		},
		{
			"name": "Heavy Crossbow",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 18,
			"value": 5000,
			"weaponCategory": "martial",
			"property": [
				"A",
				"H",
				"LD",
				"2H"
			],
			"range": "100/400",
			"dmg1": "1d10",
			"dmgType": "P",
			"crossbow": true,
			"weapon": true,
			"ammoType": "crossbow bolt|phb"
		},
		{
			"name": "Hide Armor",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "MA",
			"rarity": "none",
			"weight": 12,
			"value": 1000,
			"ac": 12,
			"armor": true,
			"entries": [
				"This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor."
			]
		},
		{
			"name": "Hooked Shortspear",
			"source": "OotA",
			"page": 224,
			"type": "M",
			"rarity": "unknown",
			"weight": 2,
			"weaponCategory": "martial",
			"property": [
				"L"
			],
			"dmg1": "1d4",
			"dmgType": "P",
			"weapon": true,
			"entries": [
				"On a hit with this weapon, the wielder can forgo dealing damage and attempt to trip the target, in which case the target must succeed on a Strength saving throw or fall {@condition prone}. The DC is 8 + the wielder's Strength modifier + the wielder's proficiency bonus."
			]
		},
		{
			"name": "Hoopak",
			"source": "DSotDQ",
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 10,
			"weaponCategory": "martial",
			"property": [
				"A",
				"F",
				"S",
				"2H"
			],
			"range": "40/160",
			"dmg1": "1d6",
			"dmgType": "P",
			"weapon": true,
			"entries": [
				"A hoopak is a sturdy stick with a sling at one end and a pointed tip at the other.",
				{
					"type": "entries",
					"name": "Special",
					"entries": [
						"When you make a melee attack with this weapon, you ignore its ammunition property. You can use the hoopak as a martial ranged weapon. If you do, it uses the ammunition property, uses sling bullets, and deals {@damage 1d4} bludgeoning damage on a hit."
					]
				}
			],
			"ammoType": "sling bullet|phb"
		},
		{
			"name": "Hunting Rifle",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 8,
			"weaponCategory": "martial",
			"age": "modern",
			"property": [
				"AF",
				"RLD",
				"2H"
			],
			"range": "80/240",
			"reload": 5,
			"dmg1": "2d10",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "modern bullet"
		},
		{
			"name": "Javelin",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 50,
			"weaponCategory": "simple",
			"property": [
				"T"
			],
			"range": "30/120",
			"dmg1": "1d6",
			"dmgType": "P",
			"spear": true,
			"weapon": true
		},
		{
			"name": "Lance",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 6,
			"value": 1000,
			"weaponCategory": "martial",
			"property": [
				"R",
				"S"
			],
			"dmg1": "1d12",
			"dmgType": "P",
			"weapon": true,
			"entries": [
				{
					"type": "entries",
					"name": "Special",
					"entries": [
						"You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
					]
				}
			]
		},
		{
			"name": "Laser Pistol",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 2,
			"weaponCategory": "martial",
			"age": "futuristic",
			"property": [
				"AF",
				"RLD"
			],
			"range": "30/120",
			"reload": 50,
			"dmg1": "3d6",
			"dmgType": "R",
			"firearm": true,
			"weapon": true,
			"ammoType": "energy cell"
		},
		{
			"name": "Laser Rifle",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 7,
			"weaponCategory": "martial",
			"age": "futuristic",
			"property": [
				"AF",
				"RLD",
				"2H"
			],
			"range": "100/300",
			"reload": 30,
			"dmg1": "3d8",
			"dmgType": "R",
			"firearm": true,
			"weapon": true,
			"ammoType": "energy cell"
		},
		{
			"name": "Leather Armor",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "LA",
			"rarity": "none",
			"weight": 10,
			"value": 1000,
			"ac": 11,
			"armor": true,
			"entries": [
				"The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials."
			]
		},
		{
			"name": "Light Crossbow",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 5,
			"value": 2500,
			"weaponCategory": "simple",
			"property": [
				"A",
				"LD",
				"2H"
			],
			"range": "80/320",
			"dmg1": "1d8",
			"dmgType": "P",
			"crossbow": true,
			"weapon": true,
			"ammoType": "crossbow bolt|phb"
		},
		{
			"name": "Light Hammer",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 200,
			"weaponCategory": "simple",
			"property": [
				"L",
				"T"
			],
			"range": "20/60",
			"dmg1": "1d4",
			"dmgType": "B",
			"hammer": true,
			"weapon": true
		},
		{
			"name": "Light Repeating Crossbow",
			"source": "OotA",
			"page": 224,
			"type": "R",
			"rarity": "unknown",
			"weight": 5,
			"weaponCategory": "simple",
			"property": [
				"A",
				"2H"
			],
			"range": "40/160",
			"dmg1": "1d8",
			"dmgType": "P",
			"crossbow": true,
			"weapon": true,
			"entries": [
				"This crossbow is fitted with a cartridge that can hold up to six crossbow bolts. It automatically reloads after firing until the cartridge runs out of ammunition. Reloading the cartridge takes an action."
			],
			"ammoType": "crossbow bolt|phb"
		},
		{
			"name": "Longbow",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 2,
			"value": 5000,
			"weaponCategory": "martial",
			"property": [
				"A",
				"H",
				"2H"
			],
			"range": "150/600",
			"dmg1": "1d8",
			"dmgType": "P",
			"bow": true,
			"weapon": true,
			"ammoType": "arrow|phb"
		},
		{
			"name": "Longsword",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 3,
			"value": 1500,
			"weaponCategory": "martial",
			"property": [
				"V"
			],
			"dmg1": "1d8",
			"dmgType": "S",
			"dmg2": "1d10",
			"sword": true,
			"weapon": true
		},
		{
			"name": "Mace",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 4,
			"value": 500,
			"weaponCategory": "simple",
			"dmg1": "1d6",
			"dmgType": "B",
			"mace": true,
			"weapon": true
		},
		{
			"name": "Maul",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 10,
			"value": 1000,
			"weaponCategory": "martial",
			"property": [
				"H",
				"2H"
			],
			"dmg1": "2d6",
			"dmgType": "B",
			"hammer": true,
			"weapon": true
		},
		{
			"name": "Modern Bullet",
			"source": "DMG",
			"page": 268,
			"type": "AF",
			"rarity": "none",
			"weight": 0.1,
			"age": "modern"
		},
		{
			"name": "Modern Bullets (10)",
			"source": "DMG",
			"page": 268,
			"type": "AF",
			"rarity": "none",
			"weight": 1,
			"age": "modern",
			"packContents": [
				{
					"item": "modern bullet",
					"quantity": 10
				}
			]
		},
		{
			"name": "Morningstar",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 4,
			"value": 1500,
			"weaponCategory": "martial",
			"dmg1": "1d8",
			"dmgType": "P",
			"mace": true,
			"weapon": true
		},
		{
			"name": "Musket",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 10,
			"value": 50000,
			"weaponCategory": "martial",
			"age": "renaissance",
			"property": [
				"AF",
				"LD",
				"2H"
			],
			"range": "40/120",
			"dmg1": "1d12",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "renaissance bullet"
		},
		{
			"name": "Net",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 3,
			"value": 100,
			"weaponCategory": "martial",
			"property": [
				"S",
				"T"
			],
			"range": "5/15",
			"net": true,
			"weapon": true,
			"entries": [
				{
					"type": "entries",
					"name": "Special",
					"entries": [
						"A Large or smaller creature hit by a net is {@condition restrained} until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make."
					]
				}
			]
		},
		{
			"name": "Orb",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "arcane",
			"rarity": "none",
			"weight": 3,
			"value": 2000
		},
		{
			"name": "Padded Armor",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "LA",
			"rarity": "none",
			"weight": 8,
			"value": 500,
			"ac": 11,
			"armor": true,
			"stealth": true,
			"entries": [
				"Padded armor consists of quilted layers of cloth and batting."
			]
		},
		{
			"name": "Pike",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 18,
			"value": 500,
			"weaponCategory": "martial",
			"property": [
				"H",
				"R",
				"2H"
			],
			"dmg1": "1d10",
			"dmgType": "P",
			"weapon": true
		},
		{
			"name": "Pistol",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 3,
			"value": 25000,
			"weaponCategory": "martial",
			"age": "renaissance",
			"property": [
				"AF",
				"LD"
			],
			"range": "30/90",
			"dmg1": "1d10",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "renaissance bullet"
		},
		{
			"name": "Plate Armor",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "HA",
			"rarity": "none",
			"weight": 65,
			"value": 150000,
			"ac": 18,
			"strength": "15",
			"armor": true,
			"stealth": true,
			"entries": [
				"Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body."
			]
		},
		{
			"name": "Quarterstaff",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 4,
			"value": 20,
			"weaponCategory": "simple",
			"property": [
				"V"
			],
			"dmg1": "1d6",
			"dmgType": "B",
			"dmg2": "1d8",
			"weapon": true
		},
		{
			"name": "Rapier",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 2500,
			"weaponCategory": "martial",
			"property": [
				"F"
			],
			"dmg1": "1d8",
			"dmgType": "P",
			"sword": true,
			"weapon": true
		},
		{
			"name": "Renaissance Bullet",
			"source": "DMG",
			"page": 268,
			"type": "AF",
			"rarity": "none",
			"weight": 0.2,
			"value": 30,
			"age": "renaissance"
		},
		{
			"name": "Renaissance Bullets (10)",
			"source": "DMG",
			"page": 268,
			"type": "AF",
			"rarity": "none",
			"weight": 2,
			"value": 300,
			"age": "renaissance",
			"packContents": [
				{
					"item": "renaissance bullet",
					"quantity": 10
				}
			]
		},
		{
			"name": "Revolver",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 3,
			"weaponCategory": "martial",
			"age": "modern",
			"property": [
				"AF",
				"RLD"
			],
			"range": "40/120",
			"reload": 6,
			"dmg1": "2d8",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "modern bullet"
		},
		{
			"name": "Ring Mail",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "HA",
			"rarity": "none",
			"weight": 40,
			"value": 3000,
			"ac": 14,
			"armor": true,
			"stealth": true,
			"entries": [
				"This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor."
			]
		},
		{
			"name": "Rod",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "arcane",
			"rarity": "none",
			"weight": 2,
			"value": 1000
		},
		{
			"name": "Scale Mail",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "MA",
			"rarity": "none",
			"weight": 45,
			"value": 5000,
			"ac": 14,
			"armor": true,
			"stealth": true,
			"entries": [
				"This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
			]
		},
		{
			"name": "Scimitar",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 3,
			"value": 2500,
			"weaponCategory": "martial",
			"property": [
				"F",
				"L"
			],
			"dmg1": "1d6",
			"dmgType": "S",
			"sword": true,
			"weapon": true
		},
		{
			"name": "Shield",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "S",
			"rarity": "none",
			"weight": 6,
			"value": 1000,
			"ac": 2,
			"entries": [
				"A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time."
			]
		},
		{
			"name": "Shortbow",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"weight": 2,
			"value": 2500,
			"weaponCategory": "simple",
			"property": [
				"A",
				"2H"
			],
			"range": "80/320",
			"dmg1": "1d6",
			"dmgType": "P",
			"bow": true,
			"weapon": true,
			"ammoType": "arrow|phb"
		},
		{
			"name": "Shortsword",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 1000,
			"weaponCategory": "martial",
			"property": [
				"F",
				"L"
			],
			"dmg1": "1d6",
			"dmgType": "P",
			"sword": true,
			"weapon": true
		},
		{
			"name": "Shotgun",
			"source": "DMG",
			"page": 268,
			"type": "R",
			"rarity": "none",
			"weight": 7,
			"weaponCategory": "martial",
			"age": "modern",
			"property": [
				"AF",
				"RLD",
				"2H"
			],
			"range": "30/90",
			"reload": 2,
			"dmg1": "2d8",
			"dmgType": "P",
			"firearm": true,
			"weapon": true,
			"ammoType": "modern bullet"
		},
		{
			"name": "Sickle",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 100,
			"weaponCategory": "simple",
			"property": [
				"L"
			],
			"dmg1": "1d4",
			"dmgType": "S",
			"weapon": true
		},
		{
			"name": "Sling",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "R",
			"rarity": "none",
			"value": 10,
			"weaponCategory": "simple",
			"property": [
				"A"
			],
			"range": "30/120",
			"dmg1": "1d4",
			"dmgType": "B",
			"weapon": true,
			"ammoType": "sling bullet|phb"
		},
		{
			"name": "Sling Bullet",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 0.075,
			"value": 0.2
		},
		{
			"name": "Sling Bullets (20)",
			"source": "PHB",
			"page": 150,
			"srd": true,
			"basicRules": true,
			"type": "A",
			"rarity": "none",
			"weight": 1.5,
			"value": 4,
			"packContents": [
				{
					"item": "sling bullet|phb",
					"quantity": 20
				}
			]
		},
		{
			"name": "Spear",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 3,
			"value": 100,
			"weaponCategory": "simple",
			"property": [
				"T",
				"V"
			],
			"range": "20/60",
			"dmg1": "1d6",
			"dmgType": "P",
			"dmg2": "1d8",
			"spear": true,
			"weapon": true
		},
		{
			"name": "Spiked Armor",
			"source": "SCAG",
			"page": 121,
			"type": "MA",
			"rarity": "unknown",
			"weight": 45,
			"value": 7500,
			"ac": 14,
			"armor": true,
			"stealth": true,
			"entries": [
				"Spiked armor is a rare type of medium armor made by dwarves. It consists of a leather coat and leggings covered with spikes that are usually made of metal."
			]
		},
		{
			"name": "Splint Armor",
			"source": "PHB",
			"page": 145,
			"srd": true,
			"basicRules": true,
			"type": "HA",
			"rarity": "none",
			"weight": 60,
			"value": 20000,
			"ac": 17,
			"strength": "15",
			"armor": true,
			"stealth": true,
			"entries": [
				"This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints."
			]
		},
		{
			"name": "Staff",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "arcane",
			"rarity": "none",
			"weight": 4,
			"value": 500,
			"weaponCategory": "simple",
			"property": [
				"V"
			],
			"dmg1": "1d6",
			"dmgType": "B",
			"dmg2": "1d8",
			"staff": true
		},
		{
			"name": "Studded Leather Armor",
			"source": "PHB",
			"page": 144,
			"srd": true,
			"basicRules": true,
			"type": "LA",
			"rarity": "none",
			"weight": 13,
			"value": 4500,
			"ac": 12,
			"armor": true,
			"entries": [
				"Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes."
			]
		},
		{
			"name": "Trident",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 4,
			"value": 500,
			"weaponCategory": "martial",
			"property": [
				"T",
				"V"
			],
			"range": "20/60",
			"dmg1": "1d6",
			"dmgType": "P",
			"dmg2": "1d8",
			"weapon": true
		},
		{
			"name": "Wand",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "arcane",
			"rarity": "none",
			"weight": 1,
			"value": 1000
		},
		{
			"name": "War Pick",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 500,
			"weaponCategory": "martial",
			"dmg1": "1d8",
			"dmgType": "P",
			"weapon": true
		},
		{
			"name": "Warhammer",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 2,
			"value": 1500,
			"weaponCategory": "martial",
			"property": [
				"V"
			],
			"dmg1": "1d8",
			"dmgType": "B",
			"dmg2": "1d10",
			"hammer": true,
			"weapon": true
		},
		{
			"name": "Whip",
			"source": "PHB",
			"page": 149,
			"srd": true,
			"basicRules": true,
			"type": "M",
			"rarity": "none",
			"weight": 3,
			"value": 200,
			"weaponCategory": "martial",
			"property": [
				"F",
				"R"
			],
			"dmg1": "1d4",
			"dmgType": "S",
			"weapon": true
		},
		{
			"name": "Wooden Staff",
			"source": "PHB",
			"page": 151,
			"srd": true,
			"basicRules": true,
			"type": "SCF",
			"scfType": "druid",
			"rarity": "none",
			"weight": 4,
			"value": 500,
			"weaponCategory": "simple",
			"property": [
				"V"
			],
			"dmg1": "1d6",
			"dmgType": "B",
			"dmg2": "1d8"
		},
		{
			"name": "Yklwa",
			"source": "ToA",
			"page": 32,
			"type": "M",
			"rarity": "none",
			"weight": 3,
			"value": 100,
			"weaponCategory": "simple",
			"property": [
				"T"
			],
			"range": "10/30",
			"dmg1": "1d8",
			"dmgType": "P",
			"weapon": true,
			"entries": [
				"A yklwa (pronounced YICK-ul-wah) is a simple melee weapon that is the traditional weapon of Chultan warriors. A yklwa consists of a 3-foot wooden shaft with a steel or stone blade up to 18 inches long. Although it has the thrown weapon property, the yklwa is not well balanced for throwing."
			]
		}
	],
	/*
	"itemProperty": [
		{
			"abbreviation": "A",
			"source": "PHB",
			"page": 146,
			"entries": [
				{
					"type": "entries",
					"name": "Ammunition",
					"entries": [
						"You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack. Loading a one-handed weapon requires a free hand. At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.",
						"If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon. A sling must be loaded to deal any damage when used in this way."
					]
				}
			],
			"template": "{{prop_name}} ({{item.range}} ft.)"
		},
		{
			"abbreviation": "AF",
			"source": "DMG",
			"page": 267,
			"entries": [
				{
					"type": "entries",
					"name": "Ammunition",
					"entries": [
						"You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack. Loading a one-handed weapon requires a free hand. The ammunition of a firearm is destroyed upon use.",
						"If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon. A sling must be loaded to deal any damage when used in this way."
					]
				}
			],
			"template": "{{prop_name}} ({{item.range}} ft.)"
		},
		{
			"abbreviation": "BF",
			"source": "DMG",
			"page": 267,
			"entries": [
				{
					"type": "entries",
					"name": "Burst Fire",
					"entries": [
						"A weapon that has the burst fire property can make a single-target attack, or it can spray a 10-foot-cube area within normal range with shots. Each creature in the area must succeed on a DC 15 Dexterity saving throw or take the weapon's normal damage. This action uses ten pieces of ammunition."
					]
				}
			]
		},
		{
			"abbreviation": "F",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Finesse",
					"entries": [
						"When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls."
					]
				}
			]
		},
		{
			"abbreviation": "H",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Heavy",
					"entries": [
						"Creatures that are Small or Tiny have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small or Tiny creature to use effectively."
					]
				}
			]
		},
		{
			"abbreviation": "L",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Light",
					"entries": [
						"A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons."
					]
				}
			]
		},
		{
			"abbreviation": "LD",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Loading",
					"entries": [
						"Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make."
					]
				}
			]
		},
		{
			"abbreviation": "R",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Reach",
					"entries": [
						"This weapon adds 5 feet to your reach when you attack with it. This property also determines your reach for opportunity attacks with a reach weapon."
					]
				}
			]
		},
		{
			"abbreviation": "RLD",
			"source": "DMG",
			"page": 267,
			"entries": [
				{
					"type": "entries",
					"name": "Reload",
					"entries": [
						"A limited number of shots can be made with a weapon that has the reload property. A character must then reload it using an action or a bonus action (the character's choice)."
					]
				}
			],
			"template": "{{prop_name}} ({{item.reload}} shots)"
		},
		{
			"abbreviation": "S",
			"source": "PHB",
			"page": 147,
			"name": "special"
		},
		{
			"abbreviation": "T",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Thrown",
					"entries": [
						"If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property."
					]
				}
			],
			"template": "{{prop_name}} ({{item.range}} ft.)"
		},
		{
			"abbreviation": "2H",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Two-Handed",
					"entries": [
						"This weapon requires two hands to use. This property is relevant only when you attack with the weapon, not when you simply hold it."
					]
				}
			]
		},
		{
			"abbreviation": "V",
			"source": "PHB",
			"page": 147,
			"entries": [
				{
					"type": "entries",
					"name": "Versatile",
					"entries": [
						"This weapon can be used with one or two hands. A damage value in parentheses appears with the property\u2014the damage when the weapon is used with two hands to make a melee attack."
					]
				}
			],
			"template": "{{prop_name}} ({{item.dmg2}})"
		}
	],
	"itemType": [
		{
			"abbreviation": "AT",
			"source": "PHB",
			"page": 154,
			"name": "Artisan's Tools",
			"entries": [
				"These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
			]
		},
		{
			"abbreviation": "GS",
			"source": "PHB",
			"page": 154,
			"name": "Gaming Set",
			"entries": [
				"If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
			]
		},
		{
			"abbreviation": "INS",
			"source": "PHB",
			"page": 154,
			"name": "Instrument",
			"entries": [
				"If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
			]
		},
		{
			"abbreviation": "R",
			"source": "PHB",
			"page": 146,
			"entries": [
				{
					"type": "entries",
					"name": "Range",
					"entries": [
						"A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second indicates the weapon's maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can't attack a target beyond the weapon's long range."
					]
				}
			]
		},
		{
			"abbreviation": "TG",
			"source": "PHB",
			"page": 146,
			"name": "Trade Good",
			"entries": [
				"Most wealth is not in coins. It is measured in livestock, grain, land, rights to collect taxes, or rights to resources (such as a mine or a forest).",
				"Guilds, nobles, and royalty regulate trade. Chartered companies are granted rights to conduct trade along certain routes, to send merchant ships to various ports, or to buy or sell specific goods. Guilds set prices for the goods or services that they control, and determine who may or may not offer those goods and services. Merchants commonly exchange trade goods without using currency."
			]
		},
		{
			"abbreviation": "SHP",
			"source": "DMG",
			"page": 119,
			"name": "Vehicle",
			"entries": [
				{
					"type": "entries",
					"name": "Crew",
					"entries": [
						"A ship needs a crew of skilled hirelings to function. As per the Player's Handbook, one skilled hireling costs at least 2 gp per day. The minimum number of skilled hirelings needed to crew a ship depends on the type of vessel.",
						"You can track the loyalty of individual crew members or the crew as a whole using the optional loyalty rules in chapter 4 of the Dungeon Master's Guide. If at least half the crew becomes disloyal during a voyage, the crew turns hostile and stages a mutiny. If the ship is berthed, disloyal crew members leave the ship and never return."
					]
				},
				{
					"type": "entries",
					"name": "Passengers",
					"entries": [
						"This indicates the number of Small and Medium passengers the ship can accommodate.",
						"Accommodations consist of shared hammocks in tight quarters. A ship outfitted with private accommodations can carry one-fifth as many passengers.",
						"A passenger is usually expected to pay 5 sp per day for a hammock, but prices can vary from ship to ship. A small private cabin usually costs 2 gp per day."
					]
				},
				{
					"type": "entries",
					"name": "Cargo",
					"entries": [
						"The maximum tonnage the ship can carry."
					]
				},
				{
					"type": "entries",
					"name": "Damage Threshold",
					"entries": [
						"If a ship has a Damage Threshold, it has immunity to all damage unless it takes an amount of damage equal to or greater than its damage threshold, in which case it takes damage as normal. Any damage that fails to meet or exceed the damage threshold is considered superficial and doesn't reduce the ship's hit points."
					]
				},
				{
					"type": "entries",
					"name": "Ship Repair",
					"entries": [
						"Repairs to a damaged ship can be made while the vessel is berthed. Repairing 1 hit point of damage requires 1 day and costs 20 gp for materials and labor."
					]
				}
			]
		}
	]
	
	"itemEntry": [
		{
			"name": "Ring of Resistance",
			"source": "DMG",
			"entriesTemplate": [
				"You have resistance to {{item.resist}} damage while wearing this ring. The ring is set with {{item.detail1}}."
			]
		},
		{
			"name": "Armor of Resistance",
			"source": "DMG",
			"entriesTemplate": [
				"You have resistance to {{item.resist}} damage while you wear this armor."
			]
		},
		{
			"name": "Potion of Resistance",
			"source": "DMG",
			"entriesTemplate": [
				"When you drink this potion, you gain resistance to {{item.resist}} damage for 1 hour."
			]
		},
		{
			"name": "Absorbing Tattoo",
			"source": "TCE",
			"entriesTemplate": [
				"Produced by a special needle, this magic tattoo features designs that emphasize one color ({{item.detail1}}).",
				{
					"type": "entries",
					"name": "Tattoo Attunement",
					"entries": [
						"To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
						"If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
					]
				},
				{
					"type": "entries",
					"name": "Damage Resistance",
					"entries": [
						"While the tattoo is on your skin, you have resistance to {{item.resist}} damage."
					]
				},
				{
					"type": "entries",
					"name": "Damage Absorption",
					"entries": [
						"When you take {{item.resist}} damage, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reaction is used, it can't be used again until the next dawn."
					]
				}
			]
		},
		{
			"name": "Chromatic Rose",
			"source": "WBtW",
			"entriesTemplate": [
				"While this rose is held, it {{item.detail1}} as a harmless visual effect.",
				"While holding the rose by its stem, you gain resistance to {{item.resist}} damage. If you would take more than 10 {{item.resist}} damage from a single source (after applying the resistance), the rose disintegrates, and you take no damage instead.",
				"As an action, you can blow the petals from the rose to produce a 20-foot cone of {{item.resist}}. Each creature in the cone must make a DC 15 Constitution saving throw, taking {@damage 3d10} {{item.resist}} damage on a failed save, or half as much damage on a successful one. Using this property destroys the rose."
			]
		}
	],
	"itemTypeAdditionalEntries": [
		{
			"appliesTo": "INS",
			"entries": [
				"Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.",
				{
					"type": "entries",
					"name": "History",
					"entries": [
						"Your expertise aids you in recalling lore related to your instrument."
					]
				},
				{
					"type": "entries",
					"name": "Performance",
					"entries": [
						"Your ability to put on a good show is improved when you incorporate an instrument into your act."
					]
				},
				{
					"type": "entries",
					"name": "Compose a Tune",
					"entries": [
						"As part of a long rest, you can compose a new tune and lyrics for your instrument. You might use this ability to impress a noble or spread scandalous rumors with a catchy tune."
					]
				},
				{
					"type": "table",
					"caption": "Musical Instrument",
					"colLabels": [
						"Activity",
						"DC"
					],
					"colStyles": [
						"col-10",
						"col-2 text-center"
					],
					"rows": [
						[
							"Identify a tune",
							"10"
						],
						[
							"Improvise a tune",
							"20"
						]
					]
				}
			]
		},
		{
			"appliesTo": "GS",
			"entries": [
				"Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice.",
				{
					"type": "entries",
					"name": "Components",
					"entries": [
						"A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens."
					]
				},
				{
					"type": "entries",
					"name": "History",
					"entries": [
						"Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it."
					]
				},
				{
					"type": "entries",
					"name": "Insight",
					"entries": [
						"Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood."
					]
				},
				{
					"type": "entries",
					"name": "Sleight of Hand",
					"entries": [
						"Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt."
					]
				},
				{
					"type": "table",
					"caption": "Gaming Set",
					"colLabels": [
						"Activity",
						"DC"
					],
					"colStyles": [
						"col-10",
						"col-2 text-center"
					],
					"rows": [
						[
							"Catch a player cheating",
							"15"
						],
						[
							"Gain insight into an opponent's personality",
							"15"
						]
					]
				}
			]
		}
	]*/
}
}
export default new Weapons();