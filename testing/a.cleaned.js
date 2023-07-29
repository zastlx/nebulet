!(function (_0x30541a) {
  function _0x5d7ba7(_0x11ec9c) {
    for (
      var _0x45a1e0,
        _0xf30145,
        _0x300a40 = _0x11ec9c[0],
        _0x40b963 = _0x11ec9c[1],
        _0x49108e = _0x11ec9c[2],
        _0x159270 = 0,
        _0x2fa398 = [];
      _0x159270 < _0x300a40.length;
      _0x159270++
    ) {
      _0xf30145 = _0x300a40[_0x159270]
      Object.prototype.hasOwnProperty.call(_0x1a164f, _0xf30145) &&
        _0x1a164f[_0xf30145] &&
        _0x2fa398.push(_0x1a164f[_0xf30145][0])
      _0x1a164f[_0xf30145] = 0
    }
    for (_0x45a1e0 in _0x40b963)
      Object.prototype.hasOwnProperty.call(_0x40b963, _0x45a1e0) &&
        (_0x30541a[_0x45a1e0] = _0x40b963[_0x45a1e0])
    for (_0x4fd61b && _0x4fd61b(_0x11ec9c); _0x2fa398.length; ) {
      _0x2fa398.shift()()
    }
    return _0x5cc340.push.apply(_0x5cc340, _0x49108e || []), _0x16ce9e()
  }
  function _0x16ce9e() {
    for (var _0x2089d8, _0xa330a = 0; _0xa330a < _0x5cc340.length; _0xa330a++) {
      for (
        var _0x4c95a2 = _0x5cc340[_0xa330a], _0x4caf87 = true, _0x493168 = 1;
        _0x493168 < _0x4c95a2.length;
        _0x493168++
      ) {
        var _0x2d873f = _0x4c95a2[_0x493168]
        0 !== _0x1a164f[_0x2d873f] && (_0x4caf87 = false)
      }
      _0x4caf87 &&
        (_0x5cc340.splice(_0xa330a--, 1),
        (_0x2089d8 = _0x28f5d4((_0x28f5d4.s = _0x4c95a2[0]))))
    }
    return _0x2089d8
  }
  var _0x54d4af = {},
    _0x5cc340 = []
  function _0x28f5d4(_0x3d660a) {
    if (_0x54d4af[_0x3d660a]) {
      return _0x54d4af[_0x3d660a].exports
    }
    var _0xc0731 = (_0x54d4af[_0x3d660a] = {
      i: _0x3d660a,
      l: false,
      exports: {},
    })
    return (
      _0x30541a[_0x3d660a].call(
        _0xc0731.exports,
        _0xc0731,
        _0xc0731.exports,
        _0x28f5d4
      ),
      (_0xc0731.l = true),
      _0xc0731.exports
    )
  }
  _0x28f5d4.e = function (_0x9bb311) {
    var _0x48fb02 = [],
      _0x11457c = _0x1a164f[_0x9bb311]
    if (0 !== _0x11457c) {
      if (_0x11457c) {
        _0x48fb02.push(_0x11457c[2])
      } else {
        var _0x526918 = new Promise(function (_0x33298f, _0x3339cd) {
          _0x11457c = _0x1a164f[_0x9bb311] = [_0x33298f, _0x3339cd]
        })
        _0x48fb02.push((_0x11457c[2] = _0x526918))
        var _0x3f2555,
          _0x54c04b = document.createElement('script')
        _0x54c04b.charset = 'utf-8'
        _0x54c04b.timeout = 120
        _0x28f5d4.nc && _0x54c04b.setAttribute('nonce', _0x28f5d4.nc)
        _0x54c04b.src = (function (_0xf4f39e) {
          return (
            _0x28f5d4.p +
            '1d21d7f97bb5ebbea371.' +
            ({
              37: 'polyfills-dom~9aedfade',
              66: 'vendors~polyfills-core-js~34a2b07d',
            }[_0xf4f39e] || _0xf4f39e) +
            '.' +
            {
              37: '657f8f8b58bcc3577a08',
              66: 'fdba89fcdc17f2bcde1d',
              67: '968613edd7a9ca41f924',
            }[_0xf4f39e] +
            '.js'
          )
        })(_0x9bb311)
        var _0x1c2a6d = new Error()
        _0x3f2555 = function (_0x31611f) {
          _0x54c04b.onerror = _0x54c04b.onload = null
          clearTimeout(_0x24f0fe)
          var _0x378259 = _0x1a164f[_0x9bb311]
          if (0 !== _0x378259) {
            if (_0x378259) {
              var _0x72c3de =
                  _0x31611f &&
                  ('load' === _0x31611f.type ? 'missing' : _0x31611f.type),
                _0x1a141c =
                  _0x31611f && _0x31611f.target && _0x31611f.target.src
              _0x1c2a6d.message =
                'Loading chunk ' +
                _0x9bb311 +
                ' failed.\n(' +
                _0x72c3de +
                ': ' +
                _0x1a141c +
                ')'
              _0x1c2a6d.name = 'ChunkLoadError'
              _0x1c2a6d.type = _0x72c3de
              _0x1c2a6d.request = _0x1a141c
              _0x378259[1](_0x1c2a6d)
            }
            _0x1a164f[_0x9bb311] = void 0
          }
        }
        var _0x24f0fe = setTimeout(function () {
          _0x3f2555({
            type: 'timeout',
            target: _0x54c04b,
          })
        }, 120000)
        _0x54c04b.onerror = _0x54c04b.onload = _0x3f2555
        document.head.appendChild(_0x54c04b)
      }
    }
    return Promise.all(_0x48fb02)
  }
  _0x28f5d4.m = _0x30541a
  _0x28f5d4.c = _0x54d4af
  _0x28f5d4.d = function (_0x3b693a, _0xbf0a3e, _0x52fde1) {
    _0x28f5d4.o(_0x3b693a, _0xbf0a3e) ||
      Object.defineProperty(_0x3b693a, _0xbf0a3e, {
        enumerable: true,
        get: _0x52fde1,
      })
  }
  _0x28f5d4.r = function (_0x2a34b0) {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(_0x2a34b0, Symbol.toStringTag, { value: 'Module' })
    Object.defineProperty(_0x2a34b0, '__esModule', { value: true })
  }
  _0x28f5d4.t = function (_0x5d1c59, _0x40db1b) {
    if ((1 & _0x40db1b && (_0x5d1c59 = _0x28f5d4(_0x5d1c59)), 8 & _0x40db1b)) {
      return _0x5d1c59
    }
    if (
      4 & _0x40db1b &&
      'object' == typeof _0x5d1c59 &&
      _0x5d1c59 &&
      _0x5d1c59['__esModule']
    ) {
      return _0x5d1c59
    }
    var _0x5c5b69 = Object.create(null)
    if (
      (_0x28f5d4.r(_0x5c5b69),
      Object.defineProperty(_0x5c5b69, 'default', {
        enumerable: true,
        value: _0x5d1c59,
      }),
      2 & _0x40db1b && 'string' != typeof _0x5d1c59)
    ) {
      for (var _0x3a6c0e in _0x5d1c59)
        _0x28f5d4.d(
          _0x5c5b69,
          _0x3a6c0e,
          function (_0x367802) {
            return _0x5d1c59[_0x367802]
          }.bind(null, _0x3a6c0e)
        )
    }
    return _0x5c5b69
  }
  _0x28f5d4.n = function (_0x18b6b3) {
    var _0x5e72ea =
      _0x18b6b3 && _0x18b6b3['__esModule']
        ? function () {
            return _0x18b6b3.default
          }
        : function () {
            return _0x18b6b3
          }
    return _0x28f5d4.d(_0x5e72ea, 'a', _0x5e72ea), _0x5e72ea
  }
  _0x28f5d4.o = function (_0x54dd6b, _0x5c3386) {
    return Object.prototype.hasOwnProperty.call(_0x54dd6b, _0x5c3386)
  }
  _0x28f5d4.p = 'https://ac.blooket.com/dashboard/'
  _0x28f5d4.oe = function (_0x5634bc) {
    throw (console.error(_0x5634bc), _0x5634bc)
  }
  var _0x5e5375 = (window.webpackJsonp = window.webpackJsonp || []),
    _0x121715 = _0x5e5375.push.bind(_0x5e5375)
  _0x5e5375.push = _0x5d7ba7
  _0x5e5375 = _0x5e5375.slice()
  for (var _0x14cbe9 = 0; _0x14cbe9 < _0x5e5375.length; _0x14cbe9++) {
    _0x5d7ba7(_0x5e5375[_0x14cbe9])
  }
  var _0x4fd61b = _0x121715
  _0x5cc340.push([
    2, 41, 42, 59, 46, 56, 49, 54, 63, 52, 64, 53, 45, 50, 60, 43, 57, 62, 61,
    48, 44, 65, 58, 39, 40, 51, 38, 55, 47, 15, 28, 25, 23, 2, 24, 21, 36, 27,
    29, 14, 7, 18, 10, 1, 17, 9, 34, 32, 31, 13, 8, 30, 4, 6, 26, 12, 35, 0, 5,
    3, 16, 33, 22, 19, 20,
  ])
  _0x16ce9e()
})({
  '/9rF': function (_0x353c36, _0x2fa0ca, _0x3189a0) {
    'use strict'
    _0x2fa0ca.a = {
      Tiger: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681190/Blooks/tiger.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Brave Bengals',
        color: '#f18221',
      },
      Orangutan: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681188/Blooks/orangutan.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Hairy Hipsters',
        color: '#bc6234',
      },
      Cockatoo: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Not Chickens',
        color: '#7ca1d5',
      },
      Parrot: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: "Polly's People",
        color: '#ed1c24',
      },
      Anaconda: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681187/Blooks/anaconda.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Sneaky Snakes',
        color: '#8a9143',
      },
      Jaguar: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681188/Blooks/jaguar.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Super Spotters',
        color: '#fbb040',
      },
      Macaw: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'CA CAWWWW',
        color: '#00aeef',
      },
      Toucan: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681191/Blooks/toucan.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: "Toucan't Beat Us",
        color: '#ffca34',
      },
      Panther: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681189/Blooks/panther.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Wakanda Forever',
        color: '#2f2c38',
      },
      Capuchin: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566681187/Blooks/capuchinMonkey.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Monkey Madness',
        color: '#e0b0a6',
      },
      Gorilla: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/gorilla.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381967/Blooks/gorilla.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Great Gorillas',
        color: '#414042',
      },
      Hippo: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/hippo.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381968/Blooks/hippo.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Hip Hippos',
        color: '#95889e',
      },
      Rhino: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/rhino.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381967/Blooks/rhino.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Ready Rhinos',
        color: '#9da7a5',
      },
      Giraffe: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/giraffe.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381967/Blooks/giraffe.svg',
        set: 'Tropical Animal',
        rarity: 'Common',
        teamName: 'Tall Tutors',
        color: '#f0c649',
      },
    }
  },
  '1d8D': function (_0x1bc651, _0x536b3d, _0x50dfe8) {
    'use strict'
    _0x536b3d.a = {
      Toy: { name: "Santa's Workshop" },
      Defense2: { name: 'Tower Defense 2' },
      Brawl: { name: 'Monster Brawl' },
      Gold: { name: 'Gold Quest' },
      Hack: { name: 'Crypto Hack' },
      Fish: { name: 'Fishing Frenzy' },
      Dino: { name: 'Deceptive Dinos' },
      Rush: { name: 'Blook Rush' },
      Royale: { name: 'Battle Royale' },
      Defense: { name: 'Tower Defense' },
      Cafe: { name: 'Café' },
      Factory: { name: 'Factory' },
      Racing: { name: 'Racing' },
      Kingdom: { name: 'Crazy Kingdom' },
      Tower: { name: 'Tower of Doom' },
      Classic: { name: 'Classic' },
    }
  },
  '1u4q': function (_0x5aa74d, _0x4f9697, _0x2fd980) {
    'use strict'
    _0x4f9697.a = function (_0x5c84a9) {
      switch (_0x5c84a9) {
        case 'Lucky Hamster':
        case 'Chocolate Rabbit':
          return 300
        case 'Wise Owl':
          return 500
        case 'Elf':
        case 'Witch':
        case 'Wizard':
        case 'Fairy':
        case 'Slime Monster':
          return 5
        case 'Jester':
        case 'Dragon':
          return 20
        case 'Unicorn':
          return 75
        case 'Queen':
          return 20
        case 'King':
          return 200
        case 'Agent Owl':
          return 300
        case 'Party Pig':
        case 'Master Elf':
          return 350
        case 'Phantom King':
          return 1000
        case 'Snow Globe':
        case 'Holiday Gift':
        case 'Hot Chocolate':
        case 'Holiday Wreath':
        case 'Stocking':
          return 5
        case 'Gingerbread Man':
        case 'Gingerbread House':
        case 'Reindeer':
          return 20
        case 'Snowman':
          return 75
        case 'Santa Claus':
          return 200
        case 'Frost Wreath':
        case 'Tropical Globe':
        case 'New York Snow Globe':
        case 'London Snow Globe':
        case 'Japan Snow Globe':
        case 'Egypt Snow Globe':
        case 'Paris Snow Globe':
          return 300
        case 'Two of Spades':
        case 'Eat Me':
        case 'Drink Me':
        case 'Alice':
        case 'Queen of Hearts':
          return 5
        case 'Dormouse':
        case 'White Rabbit':
        case 'Cheshire Cat':
          return 20
        case 'Caterpillar':
        case 'Mad Hatter':
          return 75
        case 'King of Hearts':
          return 200
        case 'Toast':
        case 'Cereal':
        case 'Yogurt':
        case 'Breakfast Combo':
        case 'Orange Juice':
        case 'Milk':
          return 5
        case 'Waffle':
        case 'Pancakes':
          return 20
        case 'French Toast':
        case 'Pizza':
        case 'Sandwich':
          return 75
        case 'Pumpkin':
        case 'Swamp Monster':
        case 'Frankenstein':
        case 'Vampire':
          return 5
        case 'Zombie':
        case 'Mummy':
        case 'Caramel Apple':
          return 20
        case 'Werewolf':
          return 75
        case 'Ghost':
          return 200
        case 'Haunted Pumpkin':
        case 'Pumpkin Cookie':
        case 'Ghost Cookie':
        case 'Chick Chicken':
        case 'Chicken Chick':
        case 'Raccoon Bandit':
        case 'Owl Sheriff':
        case 'Vampire Frog':
        case 'Pumpkin King':
        case 'Anaconda Wizard':
        case 'Spooky Pumpkin':
          return 300
        case 'Spooky Mummy':
          return 350
        case 'Spooky Ghost':
          return 1000
        case 'Earth':
        case 'Meteor':
        case 'Stars':
        case 'Alien':
          return 5
        case 'Planet':
        case 'UFO':
          return 20
        case 'Spaceship':
          return 75
        case 'Astronaut':
          return 200
        case 'Red Astronaut':
        case 'Blue Astronaut':
        case 'Green Astronaut':
        case 'Pink Astronaut':
        case 'Orange Astronaut':
        case 'Yellow Astronaut':
        case 'Black Astronaut':
        case 'Purple Astronaut':
        case 'Brown Astronaut':
        case 'Cyan Astronaut':
        case 'Lime Astronaut':
        case 'Lovely Planet':
          return 300
        case 'Tim the Alien':
        case 'Rainbow Astronaut':
          return 1000
        case 'Lil Bot':
        case 'Lovely Bot':
        case 'Angry Bot':
        case 'Happy Bot':
          return 5
        case 'Watson':
        case 'Buddy Bot':
          return 20
        case 'Brainy Bot':
          return 75
        case 'Mega Bot':
          return 200
        case 'Old Boot':
        case 'Jellyfish':
        case 'Clownfish':
        case 'Frog':
        case 'Crab':
          return 5
        case 'Pufferfish':
        case 'Blobfish':
        case 'Octopus':
          return 20
        case 'Narwhal':
        case 'Dolphin':
          return 75
        case 'Baby Shark':
          return 200
        case 'Megalodon':
          return 250
        case 'Rainbow Jellyfish':
        case 'Blizzard Clownfish':
        case 'Lovely Frog':
        case 'Lucky Frog':
        case 'Spring Frog':
        case 'Poison Dart Frog':
        case 'Lemon Crab':
        case 'Pirate Pufferfish':
        case 'Donut Blobfish':
        case 'Crimson Octopus':
        case 'Rainbow Narwhal':
          return 300
        case 'Panda':
        case 'Sloth':
        case 'Tenrec':
        case 'Flamingo':
        case 'Zebra':
          return 5
        case 'Elephant':
        case 'Lemur':
        case 'Peacock':
          return 20
        case 'Chameleon':
          return 75
        case 'Lion':
          return 200
        case 'Rainbow Panda':
        case 'White Peacock':
        case 'Tiger Zebra':
          return 300
        case 'Amber':
        case 'Dino Egg':
        case 'Dino Fossil':
        case 'Stegosaurus':
          return 5
        case 'Velociraptor':
        case 'Brontosaurus':
          return 20
        case 'Triceratops':
          return 75
        case 'Tyrannosaurus Rex':
          return 200
        case 'Ice Bat':
        case 'Ice Bug':
        case 'Ice Elemental':
        case 'Rock Monster':
          return 5
        case 'Dink':
        case 'Donk':
          return 20
        case 'Bush Monster':
          return 75
        case 'Yeti':
          return 200
        case 'Ice Slime':
        case 'Frozen Fossil':
        case 'Ice Crab':
          return 300
        case 'Dingo':
        case 'Echidna':
        case 'Koala':
        case 'Kookaburra':
          return 5
        case 'Platypus':
        case 'Joey':
        case 'Kangaroo':
          return 20
        case 'Crocodile':
          return 75
        case 'Sugar Glider':
          return 200
        case 'Teal Platypus':
          return 300
        default:
          return 0
      }
    }
  },
  '4otK': function (_0x490feb, _0x34136a, _0x4ef7e9) {
    'use strict'
    _0x34136a.a = [
      'Lucky Hamster',
      'Chocolate Rabbit',
      'Wise Owl',
      'Snow Globe',
      'Holiday Gift',
      'Hot Chocolate',
      'Holiday Wreath',
      'Stocking',
      'Gingerbread Man',
      'Gingerbread House',
      'Reindeer',
      'Snowman',
      'Santa Claus',
      'Frost Wreath',
      'Tropical Globe',
      'New York Snow Globe',
      'London Snow Globe',
      'Japan Snow Globe',
      'Egypt Snow Globe',
      'Paris Snow Globe',
      'Sandwich',
      'Light Blue',
      'Black',
      'Red',
      'Purple',
      'Pink',
      'Orange',
      'Lime',
      'Green',
      'Teal',
      'Tan',
      'Maroon',
      'Gray',
      'Mint',
      'Salmon',
      'Burgandy',
      'Baby Blue',
      'Dust',
      'Brown',
      'Dull Blue',
      'Yellow',
      'Blue',
      'Pumpkin',
      'Swamp Monster',
      'Frankenstein',
      'Vampire',
      'Zombie',
      'Mummy',
      'Caramel Apple',
      'Werewolf',
      'Ghost',
      'Haunted Pumpkin',
      'Pumpkin Cookie',
      'Ghost Cookie',
      'Chick Chicken',
      'Chicken Chick',
      'Raccoon Bandit',
      'Owl Sheriff',
      'Vampire Frog',
      'Pumpkin King',
      'Anaconda Wizard',
      'Spooky Pumpkin',
      'Spooky Mummy',
      'Spooky Ghost',
      'Red Astronaut',
      'Blue Astronaut',
      'Green Astronaut',
      'Pink Astronaut',
      'Orange Astronaut',
      'Yellow Astronaut',
      'Black Astronaut',
      'Purple Astronaut',
      'Brown Astronaut',
      'Cyan Astronaut',
      'Lime Astronaut',
      'Lovely Planet',
      'Tim the Alien',
      'Rainbow Astronaut',
      'Rainbow Jellyfish',
      'Blizzard Clownfish',
      'Lovely Frog',
      'Lucky Frog',
      'Spring Frog',
      'Poison Dart Frog',
      'Lemon Crab',
      'Pirate Pufferfish',
      'Donut Blobfish',
      'Crimson Octopus',
      'Rainbow Narwhal',
      'Agent Owl',
      'Party Pig',
      'Master Elf',
      'Phantom King',
      'Rainbow Panda',
      'White Peacock',
      'Tiger Zebra',
      'Ice Slime',
      'Frozen Fossil',
      'Ice Crab',
      'Teal Platypus',
    ]
  },
  '5Kqo': function (_0x4c6ee5, _0x151544, _0x9f161b) {
    'use strict'
    _0x151544.a = {
      Witch: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg',
        set: 'Medieval',
        rarity: 'Uncommon',
        teamName: 'Cauldron City',
        color: '#4ab96d',
      },
      Wizard: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg',
        set: 'Medieval',
        rarity: 'Uncommon',
        teamName: 'Wiz Kids',
        color: '#5a459c',
      },
      Elf: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg',
        set: 'Medieval',
        rarity: 'Uncommon',
        teamName: 'Agile Archers',
        color: '#a7d054',
      },
      Fairy: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/fairy.svg',
        set: 'Medieval',
        rarity: 'Uncommon',
        teamName: 'Mighty Myths',
        color: '#df6d9c',
      },
      'Slime Monster': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg',
        set: 'Medieval',
        rarity: 'Uncommon',
        teamName: 'Slimy McSlimes',
        color: '#2fa04a',
      },
      Jester: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg',
        set: 'Medieval',
        rarity: 'Rare',
        teamName: 'Jolly Jokesters',
        color: '#be1e2d',
      },
      Dragon: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg',
        set: 'Medieval',
        rarity: 'Rare',
        teamName: 'Fire Hazards',
        color: '#2fa04a',
      },
      Queen: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/queen.svg',
        set: 'Medieval',
        rarity: 'Rare',
        teamName: 'Royal Rebels',
        color: '#9e1f63',
      },
      Unicorn: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg',
        set: 'Medieval',
        rarity: 'Epic',
        teamName: 'Land Narwhals',
        color: '#f6afce',
      },
      King: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg',
        set: 'Medieval',
        rarity: 'Legendary',
        teamName: 'THE SQUAD',
        color: '#ee2640',
      },
    }
  },
  '74sb': function (_0x5791cd, _0x35cbe7, _0x3b1aef) {
    'use strict'
    _0x3b1aef.d(_0x35cbe7, 'j', function () {
      return _0x2a1777
    })
    _0x3b1aef.d(_0x35cbe7, 'g', function () {
      return _0x25a4b4
    })
    _0x3b1aef.d(_0x35cbe7, 'p', function () {
      return _0x2be6f8
    })
    _0x3b1aef.d(_0x35cbe7, 'h', function () {
      return _0x3a4b5d
    })
    _0x3b1aef.d(_0x35cbe7, 'u', function () {
      return _0xc43d13
    })
    _0x3b1aef.d(_0x35cbe7, 'i', function () {
      return _0xb7a960
    })
    _0x3b1aef.d(_0x35cbe7, 'm', function () {
      return _0x57da18
    })
    _0x3b1aef.d(_0x35cbe7, 'l', function () {
      return _0x17ae41
    })
    _0x3b1aef.d(_0x35cbe7, 'k', function () {
      return _0x1626b1
    })
    _0x3b1aef.d(_0x35cbe7, 'n', function () {
      return _0x14a1b1
    })
    _0x3b1aef.d(_0x35cbe7, 'f', function () {
      return _0x330848
    })
    _0x3b1aef.d(_0x35cbe7, 'd', function () {
      return _0x49a143
    })
    _0x3b1aef.d(_0x35cbe7, 'e', function () {
      return _0x30f994
    })
    _0x3b1aef.d(_0x35cbe7, 'o', function () {
      return _0x1e96e1
    })
    _0x3b1aef.d(_0x35cbe7, 'q', function () {
      return _0xa89d7c
    })
    _0x3b1aef.d(_0x35cbe7, 't', function () {
      return _0x466748
    })
    _0x3b1aef.d(_0x35cbe7, 'b', function () {
      return 75
    })
    _0x3b1aef.d(_0x35cbe7, 's', function () {
      return _0x2d45f8
    })
    _0x3b1aef.d(_0x35cbe7, 'a', function () {
      return 300
    })
    _0x3b1aef.d(_0x35cbe7, 'r', function () {
      return _0x1e5328
    })
    _0x3b1aef.d(_0x35cbe7, 'c', function () {
      return _0x2fb32b
    })
    var _0x1f4372 = _0x3b1aef('N8Vf'),
      _0x3967f3 = _0x3b1aef('q1tI'),
      _0x509a93 = _0x3b1aef.n(_0x3967f3),
      _0x5e08db = _0x3b1aef('EDFO'),
      _0x3a2b8a = _0x3b1aef('eJB8'),
      _0x150bf9 = _0x3b1aef.n(_0x3a2b8a)
    Object(_0x5e08db.addStyles)()
    var _0x2a1777 = function (_0x5eb9d6) {
        return _0x5eb9d6 || 0 === _0x5eb9d6
          ? _0x5eb9d6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : ''
      },
      _0x117fbd = ['st', 'nd', 'rd', 'th'],
      _0x25a4b4 = function (_0x540824) {
        return _0x540824 % 100 < 11 || _0x540824 % 100 > 13
          ? _0x540824 % 10 == 1
            ? _0x117fbd[0]
            : _0x540824 % 10 == 2
            ? _0x117fbd[1]
            : _0x540824 % 10 == 3
            ? _0x117fbd[2]
            : _0x117fbd[3]
          : _0x117fbd[3]
      },
      mathNumbersTHINGY = [
        '\u2070',
        '\xB9',
        '\xB2',
        '\xB3',
        '\u2074',
        '\u2075',
        '\u2076',
        '\u2077',
        '\u2078',
        '\u2079',
      ],
      _0x2be6f8 = function (argPassedNUMBER) {
        var _0x555f5f = argPassedNUMBER
        if (argPassedNUMBER >= 1000) {
          var KMBT = ['', 'K', 'M', 'B', 'T'],
            numberPorb = Math.floor((argPassedNUMBER.toString().length - 1) / 3)
          if (numberPorb < KMBT.length) {
            for (
              var _0x490f62 = '', _0x58a493 = 3;
              _0x58a493 >= 1;
              _0x58a493--
            ) {
              if (
                (_0x490f62 = parseFloat(
                  (0 !== numberPorb
                    ? argPassedNUMBER / Math.pow(1000, numberPorb)
                    : argPassedNUMBER
                  ).toPrecision(_0x58a493)
                ))
                  .toString()
                  .replace(/[^a-zA-Z 0-9]+/g, '').length <= 3
              ) {
                break
              }
            }
            _0x490f62 % 1 != 0 && (_0x490f62 = _0x490f62.toFixed(1))
            _0x555f5f = _0x490f62 + KMBT[numberPorb]
          } else {
            for (var _0x516127 = argPassedNUMBER, _0x5c968d = 0; _0x516127 >= 100; ) {
              _0x516127 = Math.floor(_0x516127 / 10)
              _0x5c968d += 1
            }
            _0x555f5f = ''.concat(_0x516127 / 10, ' \xD7 10').concat(
              (function (_0x542ce5) {
                var _0x108138 = ''
                return (
                  _0x542ce5
                    .toString()
                    .split('')
                    .forEach(function (_0x1bd303) {
                      _0x108138 += mathNumbersTHINGY[Number(_0x1bd303)]
                    }),
                  _0x108138
                )
              })(_0x5c968d + 1)
            )
          }
        }
        return _0x555f5f
      },
      _0x3a4b5d = function (_0x113c5d) {
        for (
          var _0x1da1da = window.location.search.substring(1).split('&'),
            _0x4c17e8 = 0;
          _0x4c17e8 < _0x1da1da.length;
          _0x4c17e8++
        ) {
          var _0x3fccbb = _0x1da1da[_0x4c17e8].split('=')
          if (_0x3fccbb[0] === _0x113c5d) {
            return _0x3fccbb[1]
          }
        }
        return false
      },
      _0xc43d13 = function () {
        var _0x2b626f = window.document,
          _0x20b0c4 = _0x2b626f.documentElement,
          _0x15972a =
            _0x20b0c4.requestFullscreen ||
            _0x20b0c4.mozRequestFullScreen ||
            _0x20b0c4.webkitRequestFullScreen ||
            _0x20b0c4.msRequestFullscreen,
          _0x575238 =
            _0x2b626f.exitFullscreen ||
            _0x2b626f.mozCancelFullScreen ||
            _0x2b626f.webkitExitFullscreen ||
            _0x2b626f.msExitFullscreen
        return _0x2b626f.fullscreenElement ||
          _0x2b626f.mozFullScreenElement ||
          _0x2b626f.webkitFullscreenElement ||
          _0x2b626f.msFullscreenElement
          ? (_0x575238 && _0x575238.call(_0x2b626f), false)
          : (_0x15972a && _0x15972a.call(_0x20b0c4), true)
      },
      _0xb7a960 = function () {
        var _0x27d29c = window.document
        return !!(
          _0x27d29c.fullscreenElement ||
          _0x27d29c.mozFullScreenElement ||
          _0x27d29c.webkitFullscreenElement ||
          _0x27d29c.msFullscreenElement ||
          (window.screen.width === window.innerWidth &&
            window.screen.height === window.innerHeight)
        )
      },
      _0x57da18 = function (_0x132c7c, _0x25555d) {
        return Math.floor(Math.random() * (_0x25555d - _0x132c7c)) + _0x132c7c
      },
      _0x17ae41 = function (_0xbebf29, _0x1fbcf8) {
        return Math.random() * (_0x1fbcf8 - _0xbebf29) + _0xbebf29
      },
      _0x1626b1 = function (_0x40ed7f) {
        return _0x40ed7f[Math.floor(Math.random() * _0x40ed7f.length)]
      },
      _0x14a1b1 = {
        Common: '#ffffff',
        Uncommon: '#4bc22e',
        Rare: '#0a14fa',
        Epic: '#be0000',
        Legendary: '#ff910f',
        Chroma: '#00ccff',
        Unique: '#008080',
        Mystical: '#a335ee',
      },
      _0x330848 = function (_0x9fc1b4, _0x1f3552) {
        if (!_0x9fc1b4) {
          return _0x9fc1b4
        }
        var _0x4e8794 = _0x9fc1b4.indexOf('upload/')
        if (-1 === _0x4e8794 || _0x9fc1b4.includes('images.unsplash.com')) {
          return _0x9fc1b4
        }
        _0x4e8794 += 7
        var _0x31c968 = _0x1f3552
          ? 'f_auto'
          : 'c_limit,f_auto,h_250,fl_lossy,q_auto:low'
        return ''
          .concat(_0x9fc1b4.slice(0, _0x4e8794))
          .concat(_0x31c968)
          .concat(_0x9fc1b4.slice(_0x4e8794 - 1, _0x9fc1b4.length))
      },
      _0x49a143 = function (_0x4c8283) {
        if (!_0x4c8283) {
          return _0x4c8283
        }
        var _0x40678c = _0x4c8283.indexOf('upload/')
        if (-1 === _0x40678c) {
          return _0x4c8283
        }
        return (
          (_0x40678c += 7),
          ''
            .concat(_0x4c8283.slice(0, _0x40678c))
            .concat('f_auto,q_auto:best')
            .concat(_0x4c8283.slice(_0x40678c - 1, _0x4c8283.length))
        )
      },
      _0x30f994 = function (_0x5623de, _0x1bb598, _0x1069eb) {
        return _0x5623de.map(function (_0x14bca8, _0x4270f8) {
          return _0x509a93.a.createElement(
            'div',
            {
              className: _0x150bf9.a.correctContainer,
              key: _0x4270f8,
            },
            0 !== _0x4270f8
              ? _0x509a93.a.createElement(
                  'span',
                  { className: _0x150bf9.a.leftBack },
                  '&\xA0'
                )
              : null,
            2 === _0x14bca8.split('`~`').length
              ? _0x509a93.a.createElement('img', {
                  src: _0x330848(_0x14bca8.split('`~`')[1]),
                  alt: 'Answer',
                  draggable: false,
                  className: _0x150bf9.a.img,
                  style: {
                    maxWidth: 1.5 * (_0x1069eb || 20),
                    maxHeight: 1.5 * (_0x1069eb || 20),
                  },
                })
              : '`*`' === _0x14bca8.slice(0, 3)
              ? _0x509a93.a.createElement(
                  _0x5e08db.StaticMathField,
                  {
                    className: _0x150bf9.a.mathField,
                    style: {
                      color: _0x1bb598 || '#3a3a3a',
                      borderColor: _0x1bb598 || '#3a3a3a',
                      fontSize: ''.concat(_0x1069eb || 20, 'px'),
                    },
                  },
                  _0x14bca8.slice(3, _0x14bca8.length - 3)
                )
              : _0x509a93.a.createElement('span', null, _0x14bca8)
          )
        })
      },
      _0x165e4c = function (_0x3555f3) {
        var _0x4531d1 = _0x3555f3 || window.event
        return (
          _0x4531d1 &&
            (_0x4531d1.returnValue = 'Are you sure you want to leave?'),
          'Are you sure you want to leave?'
        )
      },
      _0x1e96e1 = function () {
        window.removeEventListener('beforeunload', _0x165e4c)
      },
      _0xa89d7c = function (_0x5978c3) {
        return _0x5978c3
          ? _0x5978c3.indexOf('"') >= 0
            ? "Emails can't have quotations."
            : (function (_0x4030dd) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                  String(_0x4030dd).toLowerCase()
                )
              })(_0x5978c3)
            ? _0x5978c3.length > 50
              ? 'Ok, that email is a little too long.'
              : null
            : "That's not a real email, silly."
          : "Where's the email?"
      },
      _0x466748 = function (_0x1ff366) {
        return _0x1ff366
          ? _0x1ff366.indexOf(' ') >= 0
            ? "Usernames can't have spaces."
            : _0x1ff366.indexOf('\t') >= 0
            ? "Usernames can't have tabs."
            : _0x1ff366.indexOf('"') >= 0
            ? "Usernames can't have quotations."
            : (function (_0x2b341e) {
                return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(_0x2b341e)
              })(_0x1ff366)
            ? "Usernames can't have extra special characters."
            : Object(_0x1f4372.a)().test(_0x1ff366)
            ? 'Sorry, no emojis allowed.'
            : _0x1ff366.length > 15
            ? 'Sorry, that name is too long.'
            : null
          : "Where's The Name?"
      },
      _0x2d45f8 = function (_0x4bad1d) {
        return _0x4bad1d
          ? _0x4bad1d.length > 75
            ? 'Sorry, that title is too long.'
            : null
          : "Where's The Title?"
      },
      _0x1e5328 = function (_0x155b24) {
        return _0x155b24.length > 300
          ? 'Sorry, that description is too long.'
          : null
      },
      _0x2fb32b = function (_0x439625) {
        var _0x4513bb = document.createElement('textarea')
        _0x4513bb.value = _0x439625
        _0x4513bb.setAttribute('readonly', '')
        _0x4513bb.style.position = 'absolute'
        _0x4513bb.style.left = '-9999px'
        document.body.appendChild(_0x4513bb)
        var _0x3251d9 =
          document.getSelection().rangeCount > 0 &&
          document.getSelection().getRangeAt(0)
        _0x4513bb.select()
        document.execCommand('copy')
        document.body.removeChild(_0x4513bb)
        _0x3251d9 &&
          (document.getSelection().removeAllRanges(),
          document.getSelection().addRange(_0x3251d9))
      }
  },
  '7yjp': function (_0x2cc307, _0x2edf86, _0x36646c) {
    'use strict'
    _0x36646c.d(_0x2edf86, 'a', function () {
      return _0x35c123
    })
    var _0x1b4300 = _0x36646c('H1WH'),
      _0x35c123 = {
        default: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#ffa31e',
            },
            {
              text: '#fff',
              background: '#3378ff',
            },
            {
              text: '#fff',
              background: '#00cf77',
            },
            {
              text: '#fff',
              background: '#ff462b',
            },
          ],
        },
        spooky: {
          background: '#292929',
          text: '#fff',
          answers: [
            {
              text: '#fff',
              background: '#e57e25',
            },
            {
              text: '#fff',
              background: '#f78000',
            },
            {
              text: '#fff',
              background: '#e17400',
            },
            {
              text: '#fff',
              background: '#d37612',
            },
          ],
        },
        shamrock: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#099441',
            },
            {
              text: '#fff',
              background: '#0aa949',
            },
            {
              text: '#fff',
              background: '#077834',
            },
            {
              text: '#fff',
              background: '#078b3d',
            },
          ],
        },
        merry: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#0cb04a',
            },
            {
              text: '#fff',
              background: '#f23941',
            },
            {
              text: '#fff',
              background: _0x1b4300.isMobile ? '#0cb04a' : '#f23941',
            },
            {
              text: '#fff',
              background: _0x1b4300.isMobile ? '#f23941' : '#0cb04a',
            },
          ],
        },
        freeze: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#4eb5e4',
            },
            {
              text: '#fff',
              background: '#21a2de',
            },
            {
              text: '#fff',
              background: '#37abe1',
            },
            {
              text: '#fff',
              background: '#64bee8',
            },
          ],
        },
        orange: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#e57e25',
            },
            {
              text: '#fff',
              background: '#f78000',
            },
            {
              text: '#fff',
              background: '#e17400',
            },
            {
              text: '#fff',
              background: '#d37612',
            },
          ],
        },
        purple: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#a14db3',
            },
            {
              text: '#fff',
              background: '#813d8f',
            },
            {
              text: '#fff',
              background: '#9145a1',
            },
            {
              text: '#fff',
              background: '#a95eba',
            },
          ],
        },
        red: {
          background: '#fff',
          text: '#3a3a3a',
          answers: [
            {
              text: '#fff',
              background: '#d4112b',
            },
            {
              text: '#fff',
              background: '#bd0f26',
            },
            {
              text: '#fff',
              background: '#a50d22',
            },
            {
              text: '#fff',
              background: '#ec1330',
            },
          ],
        },
        hacker: {
          background: '#000',
          text: '#fff',
          answers: [
            {
              text: '#000',
              background: 'rgba(128, 255, 128, 0.8)',
            },
            {
              text: '#000',
              background: 'rgba(128, 255, 128, 0.8)',
            },
            {
              text: '#000',
              background: 'rgba(128, 255, 128, 0.8)',
            },
            {
              text: '#000',
              background: 'rgba(128, 255, 128, 0.8)',
            },
          ],
        },
        tower: {
          background: '#292929',
          text: '#fff',
          answers: [
            {
              text: '#fff',
              background: '#404040',
            },
            {
              text: '#fff',
              background: '#404040',
            },
            {
              text: '#fff',
              background: '#404040',
            },
            {
              text: '#fff',
              background: '#404040',
            },
          ],
        },
      }
  },
  E8Bj: function (_0x2f322e, _0x4ec55e, _0x1da980) {
    'use strict'
    _0x1da980.d(_0x4ec55e, 'a', function () {
      return _0x2503b3
    })
    _0x1da980.d(_0x4ec55e, 'c', function () {
      return _0x2cfb23
    })
    var _0x1bf9b1 = _0x1da980('q1tI'),
      _0x4ff4a1 = _0x1da980.n(_0x1bf9b1),
      _0x4200dc = _0x1da980('qnYv')
    function _0x404680() {
      return (_0x404680 = Object.assign
        ? Object.assign.bind()
        : function (_0x19b568) {
            for (var _0x57f81b = 1; _0x57f81b < arguments.length; _0x57f81b++) {
              var _0x296511 = arguments[_0x57f81b]
              for (var _0x34fc4d in _0x296511)
                Object.prototype.hasOwnProperty.call(_0x296511, _0x34fc4d) &&
                  (_0x19b568[_0x34fc4d] = _0x296511[_0x34fc4d])
            }
            return _0x19b568
          }).apply(this, arguments)
    }
    function _0x565e18(_0x2bf628) {
      return (_0x565e18 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (_0x116a0b) {
              return typeof _0x116a0b
            }
          : function (_0x114d92) {
              return _0x114d92 &&
                'function' == typeof Symbol &&
                _0x114d92.constructor === Symbol &&
                _0x114d92 !== Symbol.prototype
                ? 'symbol'
                : typeof _0x114d92
            })(_0x2bf628)
    }
    function _0x1a9aff() {
      _0x1a9aff = function () {
        return _0x2a75ce
      }
      var _0x2a75ce = { wrap: _0x2b788a },
        _0x5203e2 = Object.prototype,
        _0xda5716 = _0x5203e2.hasOwnProperty,
        _0x4573e7 =
          Object.defineProperty ||
          function (_0x2bbdf8, _0x5921c0, _0x1e087a) {
            _0x2bbdf8[_0x5921c0] = _0x1e087a.value
          },
        _0x1bfe83 = 'function' == typeof Symbol ? Symbol : {},
        _0x2a7da4 = _0x1bfe83.iterator || '@@iterator',
        _0x3919ca = _0x1bfe83.asyncIterator || '@@asyncIterator',
        _0x50952d = _0x1bfe83.toStringTag || '@@toStringTag'
      function _0x5dd470(_0x1138f0, _0x5120f9, _0x861a2) {
        return (
          Object.defineProperty(_0x1138f0, _0x5120f9, {
            value: _0x861a2,
            enumerable: true,
            configurable: true,
            writable: true,
          }),
          _0x1138f0[_0x5120f9]
        )
      }
      try {
        _0x5dd470({}, '')
      } catch (_0xd297b7) {
        _0x5dd470 = function (_0x539bc6, _0x5605f8, _0x4c1f61) {
          return (_0x539bc6[_0x5605f8] = _0x4c1f61)
        }
      }
      function _0x2b788a(_0x165ec7, _0x118f11, _0x4a0f9a, _0x4a1bdd) {
        var _0x32c4c5 =
            _0x118f11 && _0x118f11.prototype instanceof _0x37ee42
              ? _0x118f11
              : _0x37ee42,
          _0x3c556b = Object.create(_0x32c4c5.prototype),
          _0x2e3e19 = new _0x869bb0(_0x4a1bdd || [])
        return (
          _0x4573e7(_0x3c556b, '_invoke', {
            value: _0x1057e6(_0x165ec7, _0x4a0f9a, _0x2e3e19),
          }),
          _0x3c556b
        )
      }
      function _0x39b4a2(_0x2b1c50, _0x1d3a07, _0x51b628) {
        try {
          return {
            type: 'normal',
            arg: _0x2b1c50.call(_0x1d3a07, _0x51b628),
          }
        } catch (_0x2692a6) {
          return {
            type: 'throw',
            arg: _0x2692a6,
          }
        }
      }
      var _0xf8a3d2 = {}
      function _0x37ee42() {}
      function _0x27b284() {}
      function _0x53d160() {}
      var _0x347f7d = {}
      _0x5dd470(_0x347f7d, _0x2a7da4, function () {
        return this
      })
      var _0x406e5a = Object.getPrototypeOf,
        _0x28b4c6 = _0x406e5a && _0x406e5a(_0x406e5a(_0x2b4886([])))
      _0x28b4c6 &&
        _0x28b4c6 !== _0x5203e2 &&
        _0xda5716.call(_0x28b4c6, _0x2a7da4) &&
        (_0x347f7d = _0x28b4c6)
      var _0x1ae1a4 =
        (_0x53d160.prototype =
        _0x37ee42.prototype =
          Object.create(_0x347f7d))
      function _0x243d1c(_0xdf9c2e) {
        ;['next', 'throw', 'return'].forEach(function (_0x9cfe25) {
          _0x5dd470(_0xdf9c2e, _0x9cfe25, function (_0x24e61a) {
            return this['_invoke'](_0x9cfe25, _0x24e61a)
          })
        })
      }
      function _0x5618f0(_0x4b340b, _0x49e2df) {
        var _0x293d1b
        _0x4573e7(this, '_invoke', {
          value: function (_0x561144, _0x225813) {
            function _0x44599f() {
              return new _0x49e2df(function (_0xd02794, _0x5c7da9) {
                !(function _0x57796d(
                  _0x622daa,
                  _0x1dfd53,
                  _0x37b5ff,
                  _0x4aa5b0
                ) {
                  var _0xc48ad1 = _0x39b4a2(
                    _0x4b340b[_0x622daa],
                    _0x4b340b,
                    _0x1dfd53
                  )
                  if ('throw' !== _0xc48ad1.type) {
                    var _0x5c6fcb = _0xc48ad1.arg,
                      _0xad5ec3 = _0x5c6fcb.value
                    return _0xad5ec3 &&
                      'object' == _0x565e18(_0xad5ec3) &&
                      _0xda5716.call(_0xad5ec3, '__await')
                      ? _0x49e2df.resolve(_0xad5ec3['__await']).then(
                          function (_0x4efd39) {
                            _0x57796d('next', _0x4efd39, _0x37b5ff, _0x4aa5b0)
                          },
                          function (_0x2c5882) {
                            _0x57796d('throw', _0x2c5882, _0x37b5ff, _0x4aa5b0)
                          }
                        )
                      : _0x49e2df.resolve(_0xad5ec3).then(
                          function (_0x25ebf4) {
                            _0x5c6fcb.value = _0x25ebf4
                            _0x37b5ff(_0x5c6fcb)
                          },
                          function (_0x3ec142) {
                            return _0x57796d(
                              'throw',
                              _0x3ec142,
                              _0x37b5ff,
                              _0x4aa5b0
                            )
                          }
                        )
                  }
                  _0x4aa5b0(_0xc48ad1.arg)
                })(_0x561144, _0x225813, _0xd02794, _0x5c7da9)
              })
            }
            return (_0x293d1b = _0x293d1b
              ? _0x293d1b.then(_0x44599f, _0x44599f)
              : _0x44599f())
          },
        })
      }
      function _0x1057e6(_0x51c478, _0x43c3d5, _0x3d45c8) {
        var _0x448e89 = 'suspendedStart'
        return function (_0xeee05, _0x32bb06) {
          if ('executing' === _0x448e89) {
            throw new Error('Generator is already running')
          }
          if ('completed' === _0x448e89) {
            if ('throw' === _0xeee05) {
              throw _0x32bb06
            }
            return _0xa4b4c2()
          }
          for (_0x3d45c8.method = _0xeee05, _0x3d45c8.arg = _0x32bb06; ; ) {
            var _0x4ac119 = _0x3d45c8.delegate
            if (_0x4ac119) {
              var _0xf0f6b3 = _0x3858b1(_0x4ac119, _0x3d45c8)
              if (_0xf0f6b3) {
                if (_0xf0f6b3 === _0xf8a3d2) {
                  continue
                }
                return _0xf0f6b3
              }
            }
            if ('next' === _0x3d45c8.method) {
              _0x3d45c8.sent = _0x3d45c8['_sent'] = _0x3d45c8.arg
            } else {
              if ('throw' === _0x3d45c8.method) {
                if ('suspendedStart' === _0x448e89) {
                  throw ((_0x448e89 = 'completed'), _0x3d45c8.arg)
                }
                _0x3d45c8.dispatchException(_0x3d45c8.arg)
              } else {
                'return' === _0x3d45c8.method &&
                  _0x3d45c8.abrupt('return', _0x3d45c8.arg)
              }
            }
            _0x448e89 = 'executing'
            var _0x5c2335 = _0x39b4a2(_0x51c478, _0x43c3d5, _0x3d45c8)
            if ('normal' === _0x5c2335.type) {
              if (
                ((_0x448e89 = _0x3d45c8.done ? 'completed' : 'suspendedYield'),
                _0x5c2335.arg === _0xf8a3d2)
              ) {
                continue
              }
              return {
                value: _0x5c2335.arg,
                done: _0x3d45c8.done,
              }
            }
            'throw' === _0x5c2335.type &&
              ((_0x448e89 = 'completed'),
              (_0x3d45c8.method = 'throw'),
              (_0x3d45c8.arg = _0x5c2335.arg))
          }
        }
      }
      function _0x3858b1(_0x487f63, _0x325303) {
        var _0x2ccd35 = _0x325303.method,
          _0x33edc7 = _0x487f63.iterator[_0x2ccd35]
        if (void 0 === _0x33edc7) {
          return (
            (_0x325303.delegate = null),
            ('throw' === _0x2ccd35 &&
              _0x487f63.iterator.return &&
              ((_0x325303.method = 'return'),
              (_0x325303.arg = void 0),
              _0x3858b1(_0x487f63, _0x325303),
              'throw' === _0x325303.method)) ||
              ('return' !== _0x2ccd35 &&
                ((_0x325303.method = 'throw'),
                (_0x325303.arg = new TypeError(
                  "The iterator does not provide a '" + _0x2ccd35 + "' method"
                )))),
            _0xf8a3d2
          )
        }
        var _0x12b289 = _0x39b4a2(_0x33edc7, _0x487f63.iterator, _0x325303.arg)
        if ('throw' === _0x12b289.type) {
          return (
            (_0x325303.method = 'throw'),
            (_0x325303.arg = _0x12b289.arg),
            (_0x325303.delegate = null),
            _0xf8a3d2
          )
        }
        var _0x5055d0 = _0x12b289.arg
        return _0x5055d0
          ? _0x5055d0.done
            ? ((_0x325303[_0x487f63.resultName] = _0x5055d0.value),
              (_0x325303.next = _0x487f63.nextLoc),
              'return' !== _0x325303.method &&
                ((_0x325303.method = 'next'), (_0x325303.arg = void 0)),
              (_0x325303.delegate = null),
              _0xf8a3d2)
            : _0x5055d0
          : ((_0x325303.method = 'throw'),
            (_0x325303.arg = new TypeError('iterator result is not an object')),
            (_0x325303.delegate = null),
            _0xf8a3d2)
      }
      function _0x499a3f(_0x31042e) {
        var _0x7b08d5 = { tryLoc: _0x31042e[0] }
        1 in _0x31042e && (_0x7b08d5.catchLoc = _0x31042e[1])
        2 in _0x31042e &&
          ((_0x7b08d5.finallyLoc = _0x31042e[2]),
          (_0x7b08d5.afterLoc = _0x31042e[3]))
        this.tryEntries.push(_0x7b08d5)
      }
      function _0x156325(_0x5a3454) {
        var _0x5ab570 = _0x5a3454.completion || {}
        _0x5ab570.type = 'normal'
        delete _0x5ab570.arg
        _0x5a3454.completion = _0x5ab570
      }
      function _0x869bb0(_0x48ca81) {
        this.tryEntries = [{ tryLoc: 'root' }]
        _0x48ca81.forEach(_0x499a3f, this)
        this.reset(true)
      }
      function _0x2b4886(_0x2e99c5) {
        if (_0x2e99c5) {
          var _0x172d26 = _0x2e99c5[_0x2a7da4]
          if (_0x172d26) {
            return _0x172d26.call(_0x2e99c5)
          }
          if ('function' == typeof _0x2e99c5.next) {
            return _0x2e99c5
          }
          if (!isNaN(_0x2e99c5.length)) {
            var _0x2e9bf9 = -1,
              _0x14231d = function _0xa6286d() {
                for (; ++_0x2e9bf9 < _0x2e99c5.length; ) {
                  if (_0xda5716.call(_0x2e99c5, _0x2e9bf9)) {
                    return (
                      (_0xa6286d.value = _0x2e99c5[_0x2e9bf9]),
                      (_0xa6286d.done = false),
                      _0xa6286d
                    )
                  }
                }
                return (
                  (_0xa6286d.value = void 0), (_0xa6286d.done = true), _0xa6286d
                )
              }
            return (_0x14231d.next = _0x14231d)
          }
        }
        return { next: _0xa4b4c2 }
      }
      function _0xa4b4c2() {
        return {
          value: void 0,
          done: true,
        }
      }
      return (
        (_0x27b284.prototype = _0x53d160),
        _0x4573e7(_0x1ae1a4, 'constructor', {
          value: _0x53d160,
          configurable: true,
        }),
        _0x4573e7(_0x53d160, 'constructor', {
          value: _0x27b284,
          configurable: true,
        }),
        (_0x27b284.displayName = _0x5dd470(
          _0x53d160,
          _0x50952d,
          'GeneratorFunction'
        )),
        (_0x2a75ce.isGeneratorFunction = function (_0x22a53c) {
          var _0x5718e0 =
            'function' == typeof _0x22a53c && _0x22a53c.constructor
          return (
            !!_0x5718e0 &&
            (_0x5718e0 === _0x27b284 ||
              'GeneratorFunction' === (_0x5718e0.displayName || _0x5718e0.name))
          )
        }),
        (_0x2a75ce.mark = function (_0x486f5c) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(_0x486f5c, _0x53d160)
              : ((_0x486f5c['__proto__'] = _0x53d160),
                _0x5dd470(_0x486f5c, _0x50952d, 'GeneratorFunction')),
            (_0x486f5c.prototype = Object.create(_0x1ae1a4)),
            _0x486f5c
          )
        }),
        (_0x2a75ce.awrap = function (_0x91fb0a) {
          return { __await: _0x91fb0a }
        }),
        _0x243d1c(_0x5618f0.prototype),
        _0x5dd470(_0x5618f0.prototype, _0x3919ca, function () {
          return this
        }),
        (_0x2a75ce.AsyncIterator = _0x5618f0),
        (_0x2a75ce.async = function (
          _0x8fd241,
          _0x45abc8,
          _0x56e136,
          _0x57596,
          _0x13b5a1
        ) {
          void 0 === _0x13b5a1 && (_0x13b5a1 = Promise)
          var _0xebaa10 = new _0x5618f0(
            _0x2b788a(_0x8fd241, _0x45abc8, _0x56e136, _0x57596),
            _0x13b5a1
          )
          return _0x2a75ce.isGeneratorFunction(_0x45abc8)
            ? _0xebaa10
            : _0xebaa10.next().then(function (_0x5e5594) {
                return _0x5e5594.done ? _0x5e5594.value : _0xebaa10.next()
              })
        }),
        _0x243d1c(_0x1ae1a4),
        _0x5dd470(_0x1ae1a4, _0x50952d, 'Generator'),
        _0x5dd470(_0x1ae1a4, _0x2a7da4, function () {
          return this
        }),
        _0x5dd470(_0x1ae1a4, 'toString', function () {
          return '[object Generator]'
        }),
        (_0x2a75ce.keys = function (_0x31a695) {
          var _0x5c4175 = Object(_0x31a695),
            _0x3a6e59 = []
          for (var _0x5d63e8 in _0x5c4175) _0x3a6e59.push(_0x5d63e8)
          return (
            _0x3a6e59.reverse(),
            function _0x50c1c0() {
              for (; _0x3a6e59.length; ) {
                var _0x44982f = _0x3a6e59.pop()
                if (_0x44982f in _0x5c4175) {
                  return (
                    (_0x50c1c0.value = _0x44982f),
                    (_0x50c1c0.done = false),
                    _0x50c1c0
                  )
                }
              }
              return (_0x50c1c0.done = true), _0x50c1c0
            }
          )
        }),
        (_0x2a75ce.values = _0x2b4886),
        (_0x869bb0.prototype = {
          constructor: _0x869bb0,
          reset: function (_0x96e1a0) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this['_sent'] = void 0),
              (this.done = false),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(_0x156325),
              !_0x96e1a0)
            ) {
              for (var _0x2be7d3 in this)
                't' === _0x2be7d3.charAt(0) &&
                  _0xda5716.call(this, _0x2be7d3) &&
                  !isNaN(+_0x2be7d3.slice(1)) &&
                  (this[_0x2be7d3] = void 0)
            }
          },
          stop: function () {
            this.done = true
            var _0x1fd28a = this.tryEntries[0].completion
            if ('throw' === _0x1fd28a.type) {
              throw _0x1fd28a.arg
            }
            return this.rval
          },
          dispatchException: function (_0x58ea37) {
            if (this.done) {
              throw _0x58ea37
            }
            var _0x3cc8c2 = this
            function _0x46e9df(_0x1e80f1, _0x120adc) {
              return (
                (_0xeb2af.type = 'throw'),
                (_0xeb2af.arg = _0x58ea37),
                (_0x3cc8c2.next = _0x1e80f1),
                _0x120adc &&
                  ((_0x3cc8c2.method = 'next'), (_0x3cc8c2.arg = void 0)),
                !!_0x120adc
              )
            }
            for (
              var _0xf80672 = this.tryEntries.length - 1;
              _0xf80672 >= 0;
              --_0xf80672
            ) {
              var _0x4da537 = this.tryEntries[_0xf80672],
                _0xeb2af = _0x4da537.completion
              if ('root' === _0x4da537.tryLoc) {
                return _0x46e9df('end')
              }
              if (_0x4da537.tryLoc <= this.prev) {
                var _0x1bf9c8 = _0xda5716.call(_0x4da537, 'catchLoc'),
                  _0x30cd1a = _0xda5716.call(_0x4da537, 'finallyLoc')
                if (_0x1bf9c8 && _0x30cd1a) {
                  if (this.prev < _0x4da537.catchLoc) {
                    return _0x46e9df(_0x4da537.catchLoc, true)
                  }
                  if (this.prev < _0x4da537.finallyLoc) {
                    return _0x46e9df(_0x4da537.finallyLoc)
                  }
                } else {
                  if (_0x1bf9c8) {
                    if (this.prev < _0x4da537.catchLoc) {
                      return _0x46e9df(_0x4da537.catchLoc, true)
                    }
                  } else {
                    if (!_0x30cd1a) {
                      throw new Error('try statement without catch or finally')
                    }
                    if (this.prev < _0x4da537.finallyLoc) {
                      return _0x46e9df(_0x4da537.finallyLoc)
                    }
                  }
                }
              }
            }
          },
          abrupt: function (_0xc55600, _0x193027) {
            for (
              var _0x359882 = this.tryEntries.length - 1;
              _0x359882 >= 0;
              --_0x359882
            ) {
              var _0x393cd9 = this.tryEntries[_0x359882]
              if (
                _0x393cd9.tryLoc <= this.prev &&
                _0xda5716.call(_0x393cd9, 'finallyLoc') &&
                this.prev < _0x393cd9.finallyLoc
              ) {
                var _0xa40d54 = _0x393cd9
                break
              }
            }
            _0xa40d54 &&
              ('break' === _0xc55600 || 'continue' === _0xc55600) &&
              _0xa40d54.tryLoc <= _0x193027 &&
              _0x193027 <= _0xa40d54.finallyLoc &&
              (_0xa40d54 = null)
            var _0x4a6b2d = _0xa40d54 ? _0xa40d54.completion : {}
            return (
              (_0x4a6b2d.type = _0xc55600),
              (_0x4a6b2d.arg = _0x193027),
              _0xa40d54
                ? ((this.method = 'next'),
                  (this.next = _0xa40d54.finallyLoc),
                  _0xf8a3d2)
                : this.complete(_0x4a6b2d)
            )
          },
          complete: function (_0xe1c31a, _0x4c3d98) {
            if ('throw' === _0xe1c31a.type) {
              throw _0xe1c31a.arg
            }
            return (
              'break' === _0xe1c31a.type || 'continue' === _0xe1c31a.type
                ? (this.next = _0xe1c31a.arg)
                : 'return' === _0xe1c31a.type
                ? ((this.rval = this.arg = _0xe1c31a.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === _0xe1c31a.type &&
                  _0x4c3d98 &&
                  (this.next = _0x4c3d98),
              _0xf8a3d2
            )
          },
          finish: function (_0x4cbd9f) {
            for (
              var _0xe3043c = this.tryEntries.length - 1;
              _0xe3043c >= 0;
              --_0xe3043c
            ) {
              var _0x38ad4e = this.tryEntries[_0xe3043c]
              if (_0x38ad4e.finallyLoc === _0x4cbd9f) {
                return (
                  this.complete(_0x38ad4e.completion, _0x38ad4e.afterLoc),
                  _0x156325(_0x38ad4e),
                  _0xf8a3d2
                )
              }
            }
          },
          catch: function (_0x4d141d) {
            for (
              var _0x41fad8 = this.tryEntries.length - 1;
              _0x41fad8 >= 0;
              --_0x41fad8
            ) {
              var _0x37847b = this.tryEntries[_0x41fad8]
              if (_0x37847b.tryLoc === _0x4d141d) {
                var _0x4e9b30 = _0x37847b.completion
                if ('throw' === _0x4e9b30.type) {
                  var _0x5d872d = _0x4e9b30.arg
                  _0x156325(_0x37847b)
                }
                return _0x5d872d
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (_0x13826b, _0x4f695a, _0x4488df) {
            return (
              (this.delegate = {
                iterator: _0x2b4886(_0x13826b),
                resultName: _0x4f695a,
                nextLoc: _0x4488df,
              }),
              'next' === this.method && (this.arg = void 0),
              _0xf8a3d2
            )
          },
        }),
        _0x2a75ce
      )
    }
    function _0x152d4d(
      _0x200440,
      _0x485999,
      _0x385017,
      _0xc5d1d7,
      _0x5bfe56,
      _0x3a05a0,
      _0x505bab
    ) {
      try {
        var _0x4822c7 = _0x200440[_0x3a05a0](_0x505bab),
          _0x550a43 = _0x4822c7.value
      } catch (_0x317fb4) {
        return void _0x385017(_0x317fb4)
      }
      _0x4822c7.done
        ? _0x485999(_0x550a43)
        : Promise.resolve(_0x550a43).then(_0xc5d1d7, _0x5bfe56)
    }
    function _0x1bdc3d(_0x426281) {
      return function () {
        var _0x188649 = this,
          _0x1b5088 = arguments
        return new Promise(function (_0x39b802, _0x188081) {
          var _0x4a6c59 = _0x426281.apply(_0x188649, _0x1b5088)
          function _0x81ff4f(_0x10b25a) {
            _0x152d4d(
              _0x4a6c59,
              _0x39b802,
              _0x188081,
              _0x81ff4f,
              _0x44ca25,
              'next',
              _0x10b25a
            )
          }
          function _0x44ca25(_0x3121cc) {
            _0x152d4d(
              _0x4a6c59,
              _0x39b802,
              _0x188081,
              _0x81ff4f,
              _0x44ca25,
              'throw',
              _0x3121cc
            )
          }
          _0x81ff4f(void 0)
        })
      }
    }
    function _0x340ea1(_0xefca06, _0x3cd910) {
      for (var _0x3ffd70 = 0; _0x3ffd70 < _0x3cd910.length; _0x3ffd70++) {
        var _0x51960f = _0x3cd910[_0x3ffd70]
        _0x51960f.enumerable = _0x51960f.enumerable || false
        _0x51960f.configurable = true
        'value' in _0x51960f && (_0x51960f.writable = true)
        Object.defineProperty(
          _0xefca06,
          ((_0x502772 = _0x51960f.key),
          (_0x1751dd = void 0),
          (_0x1751dd = (function (_0x42e2d2, _0x4f73c5) {
            if ('object' !== _0x565e18(_0x42e2d2) || null === _0x42e2d2) {
              return _0x42e2d2
            }
            var _0x38ca13 = _0x42e2d2[Symbol.toPrimitive]
            if (void 0 !== _0x38ca13) {
              var _0x113ec3 = _0x38ca13.call(_0x42e2d2, _0x4f73c5 || 'default')
              if ('object' !== _0x565e18(_0x113ec3)) {
                return _0x113ec3
              }
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === _0x4f73c5 ? String : Number)(_0x42e2d2)
          })(_0x502772, 'string')),
          'symbol' === _0x565e18(_0x1751dd) ? _0x1751dd : String(_0x1751dd)),
          _0x51960f
        )
      }
      var _0x502772, _0x1751dd
    }
    var _0x788f25 = (function () {
        function _0x3c59dd() {
          !(function (_0x2f1d36, _0x518c54) {
            if (!(_0x2f1d36 instanceof _0x518c54)) {
              throw new TypeError('Cannot call a class as a function')
            }
          })(this, _0x3c59dd)
          this.data = null
          this.loading = true
          this.getLoggedIn()
        }
        var _0x533093, _0x2748c5, _0x1e9f67, _0x40837c, _0x18b996
        return (
          (_0x533093 = _0x3c59dd),
          (_0x2748c5 = [
            {
              key: 'getData',
              value:
                ((_0x18b996 = _0x1bdc3d(
                  _0x1a9aff().mark(function _0xdb3abc() {
                    return _0x1a9aff().wrap(
                      function (_0x41b081) {
                        for (;;) {
                          switch ((_0x41b081.prev = _0x41b081.next)) {
                            case 0:
                              if (!this.loading) {
                                _0x41b081.next = 3
                                break
                              }
                              return (_0x41b081.next = 3), this.getLoggedIn()
                            case 3:
                              return _0x41b081.abrupt('return', this.data)
                            case 4:
                            case 'end':
                              return _0x41b081.stop()
                          }
                        }
                      },
                      _0xdb3abc,
                      this
                    )
                  })
                )),
                function () {
                  return _0x18b996.apply(this, arguments)
                }),
            },
            {
              key: 'getLoggedIn',
              value:
                ((_0x40837c = _0x1bdc3d(
                  _0x1a9aff().mark(function _0x35217c() {
                    var _0xd26540 = this
                    return _0x1a9aff().wrap(
                      function (_0x4c2fcf) {
                        for (;;) {
                          switch ((_0x4c2fcf.prev = _0x4c2fcf.next)) {
                            case 0:
                              if (
                                ((this.loading = true),
                                'undefined' == typeof window)
                              ) {
                                _0x4c2fcf.next = 3
                                break
                              }
                              return _0x4c2fcf.abrupt(
                                'return',
                                _0x4200dc.a
                                  .get('/api/users/me')
                                  .then(function (_0x4d26c4) {
                                    _0xd26540.data = _0x4d26c4.data
                                    _0xd26540.loading = false
                                  })
                                  .catch(function () {
                                    _0xd26540.data = null
                                    _0xd26540.loading = false
                                  })
                              )
                            case 3:
                              ;(this.data = null), (this.loading = false)
                            case 5:
                            case 'end':
                              return _0x4c2fcf.stop()
                          }
                        }
                      },
                      _0x35217c,
                      this
                    )
                  })
                )),
                function () {
                  return _0x40837c.apply(this, arguments)
                }),
            },
          ]) && _0x340ea1(_0x533093.prototype, _0x2748c5),
          _0x1e9f67 && _0x340ea1(_0x533093, _0x1e9f67),
          Object.defineProperty(_0x533093, 'prototype', { writable: false }),
          _0x3c59dd
        )
      })(),
      _0x2503b3 = Object(_0x1bf9b1.createContext)(null),
      _0x2cfb23 = function (_0x1df814) {
        return function (_0x34abbf) {
          return _0x4ff4a1.a.createElement(
            _0x2503b3.Consumer,
            null,
            function (_0x44333a) {
              return _0x4ff4a1.a.createElement(
                _0x1df814,
                _0x404680({}, _0x34abbf, { user: _0x44333a })
              )
            }
          )
        }
      }
    _0x4ec55e.b = _0x788f25
  },
  LAIx: function (_0x58bc4f, _0x2254af, _0x4ab2b4) {
    'use strict'
    var _0x3f72ac = _0x4ab2b4('MDrD')
    _0x2254af.a = function (_0x150e00) {
      return _0x150e00.includes('#') ? '#0bc2cf' : _0x3f72ac.a[_0x150e00].color
    }
  },
  MDrD: function (_0x45f7d6, _0x2d6d6a, _0x5a76ea) {
    'use strict'
    var _0x336dcf = _0x5a76ea('Y018'),
      _0x473943 = _0x5a76ea('liux'),
      _0x5da2d6 = _0x5a76ea('O+AO'),
      _0x2584bc = _0x5a76ea('5Kqo'),
      _0x811da5 = _0x5a76ea('cQOM'),
      _0x13469 = _0x5a76ea('/9rF')
    function _0x20e5f1(_0x584a97) {
      return (_0x20e5f1 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (_0x2ee875) {
              return typeof _0x2ee875
            }
          : function (_0x462126) {
              return _0x462126 &&
                'function' == typeof Symbol &&
                _0x462126.constructor === Symbol &&
                _0x462126 !== Symbol.prototype
                ? 'symbol'
                : typeof _0x462126
            })(_0x584a97)
    }
    function _0x28cbe0(_0x382984, _0x5e48f7) {
      var _0x19ec0c = Object.keys(_0x382984)
      if (Object.getOwnPropertySymbols) {
        var _0x39d22c = Object.getOwnPropertySymbols(_0x382984)
        _0x5e48f7 &&
          (_0x39d22c = _0x39d22c.filter(function (_0x52aa36) {
            return Object.getOwnPropertyDescriptor(
              _0x382984,
              _0x52aa36
            ).enumerable
          }))
        _0x19ec0c.push.apply(_0x19ec0c, _0x39d22c)
      }
      return _0x19ec0c
    }
    function _0x55ade3(_0x561900) {
      for (var _0x20a56d = 1; _0x20a56d < arguments.length; _0x20a56d++) {
        var _0x4a047a = null != arguments[_0x20a56d] ? arguments[_0x20a56d] : {}
        _0x20a56d % 2
          ? _0x28cbe0(Object(_0x4a047a), true).forEach(function (_0x45f471) {
              _0x244105(_0x561900, _0x45f471, _0x4a047a[_0x45f471])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              _0x561900,
              Object.getOwnPropertyDescriptors(_0x4a047a)
            )
          : _0x28cbe0(Object(_0x4a047a)).forEach(function (_0x4190c0) {
              Object.defineProperty(
                _0x561900,
                _0x4190c0,
                Object.getOwnPropertyDescriptor(_0x4a047a, _0x4190c0)
              )
            })
      }
      return _0x561900
    }
    function _0x244105(_0x277ae3, _0x56673a, _0x457c49) {
      return (
        (_0x56673a = (function (_0x2feee7) {
          var _0x1e15ae = (function (_0x14c49d, _0x5ceb13) {
            if ('object' !== _0x20e5f1(_0x14c49d) || null === _0x14c49d) {
              return _0x14c49d
            }
            var _0x3e7fe1 = _0x14c49d[Symbol.toPrimitive]
            if (void 0 !== _0x3e7fe1) {
              var _0x530ad = _0x3e7fe1.call(_0x14c49d, _0x5ceb13 || 'default')
              if ('object' !== _0x20e5f1(_0x530ad)) {
                return _0x530ad
              }
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === _0x5ceb13 ? String : Number)(_0x14c49d)
          })(_0x2feee7, 'string')
          return 'symbol' === _0x20e5f1(_0x1e15ae)
            ? _0x1e15ae
            : String(_0x1e15ae)
        })(_0x56673a)) in _0x277ae3
          ? Object.defineProperty(_0x277ae3, _0x56673a, {
              value: _0x457c49,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          : (_0x277ae3[_0x56673a] = _0x457c49),
        _0x277ae3
      )
    }
    var _0x2bc076 = _0x55ade3(
      _0x55ade3(
        _0x55ade3(
          _0x55ade3(
            _0x55ade3(
              _0x55ade3(
                _0x55ade3(
                  _0x55ade3(
                    _0x55ade3(
                      _0x55ade3(
                        _0x55ade3(
                          _0x55ade3(
                            _0x55ade3(
                              _0x55ade3(
                                _0x55ade3(
                                  _0x55ade3(
                                    _0x55ade3(
                                      _0x55ade3(
                                        _0x55ade3({}, _0x473943.a),
                                        _0x811da5.a
                                      ),
                                      _0x5da2d6.a
                                    ),
                                    _0x13469.a
                                  ),
                                  _0x336dcf.a
                                ),
                                _0x2584bc.a
                              ),
                              {
                                'Two of Spades': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080264/Blooks/twoOfSpades.svg',
                                  set: 'Wonderland',
                                  rarity: 'Uncommon',
                                  teamName: 'Dueling Deuces',
                                  color: '#414042',
                                },
                                'Eat Me': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1620676285/Blooks/eat.svg',
                                  set: 'Wonderland',
                                  rarity: 'Uncommon',
                                  teamName: 'Hungry Heroes',
                                  color: '#d58c55',
                                },
                                'Drink Me': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1620676285/Blooks/drink.svg',
                                  set: 'Wonderland',
                                  rarity: 'Uncommon',
                                  teamName: 'Potion Power',
                                  color: '#dd7399',
                                },
                                Alice: {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080264/Blooks/alice.svg',
                                  set: 'Wonderland',
                                  rarity: 'Uncommon',
                                  teamName: 'Wonderland',
                                  color: '#4cc9f5',
                                },
                                'Queen of Hearts': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080266/Blooks/queenOfHearts.svg',
                                  set: 'Wonderland',
                                  rarity: 'Uncommon',
                                  teamName: '\u2764️\u2764️\u2764️',
                                  color: '#d62027',
                                },
                                Dormouse: {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080264/Blooks/dormouse.svg',
                                  set: 'Wonderland',
                                  rarity: 'Rare',
                                  teamName: 'Short and Stout',
                                  color: '#89d6f8',
                                },
                                'White Rabbit': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080266/Blooks/whiteRabbit.svg',
                                  set: 'Wonderland',
                                  rarity: 'Rare',
                                  teamName: 'Classy Classmates',
                                  color: '#ffcd05',
                                },
                                'Cheshire Cat': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080264/Blooks/cheshireCat.svg',
                                  set: 'Wonderland',
                                  rarity: 'Rare',
                                  teamName: 'Cool Cats',
                                  color: '#dd7399',
                                },
                                Caterpillar: {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1581831553/Blooks/caterpillar.svg',
                                  set: 'Wonderland',
                                  rarity: 'Epic',
                                  teamName: 'Caterpillar Cuties',
                                  color: '#00c0f3',
                                },
                                'Mad Hatter': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg',
                                  set: 'Wonderland',
                                  rarity: 'Epic',
                                  teamName: 'Goofy Gurus',
                                  color: '#914f93',
                                },
                                'King of Hearts': {
                                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg',
                                  mediaUrl:
                                    'https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg',
                                  set: 'Wonderland',
                                  rarity: 'Legendary',
                                  teamName: 'The Royals',
                                  color: '#c62127',
                                },
                              }
                            ),
                            {
                              Toast: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/toast.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: 'Toasty Teammates',
                                color: '#e9a058',
                              },
                              Cereal: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/cereal.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: 'Fruity Friends',
                                color: '#2fa04a',
                              },
                              Yogurt: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/yogurt.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: 'Yogurt Youngins',
                                color: '#00aeef',
                              },
                              'Breakfast Combo': {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/breakfastCombo.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: 'Combo Cooks',
                                color: '#c3d8ea',
                              },
                              'Orange Juice': {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483099/Blooks/orangeJuice.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: "OJ OG's",
                                color: '#f7941d',
                              },
                              Milk: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/milk.svg',
                                set: 'Breakfast',
                                rarity: 'Uncommon',
                                teamName: 'Got Milk?',
                                color: '#77c6e2',
                              },
                              Waffle: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483099/Blooks/waffle.svg',
                                set: 'Breakfast',
                                rarity: 'Rare',
                                teamName: 'Holey Pancakes',
                                color: '#f9a241',
                              },
                              Pancakes: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483099/Blooks/pancakes.svg',
                                set: 'Breakfast',
                                rarity: 'Rare',
                                teamName: 'Flat Waffles',
                                color: '#f9a241',
                              },
                              'French Toast': {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1584483097/Blooks/frenchToast.svg',
                                set: 'Breakfast',
                                rarity: 'Epic',
                                teamName: 'Bonjour Boomers',
                                color: '#f9a241',
                              },
                              Pizza: {
                                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg',
                                mediaUrl:
                                  'https://media.blooket.com/image/upload/v1599952272/Blooks/pizza.svg',
                                set: 'Breakfast',
                                rarity: 'Epic',
                                teamName: 'Pizza Popstars',
                                color: '#fdb913',
                              },
                            }
                          ),
                          {
                            Earth: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003831/Blooks/earth.svg',
                              set: 'Space',
                              rarity: 'Uncommon',
                              teamName: 'Earthlings',
                              color: '#416eb5',
                            },
                            Meteor: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003835/Blooks/meteor.svg',
                              set: 'Space',
                              rarity: 'Uncommon',
                              teamName: 'Meteorites',
                              color: '#c68c3c',
                            },
                            Stars: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003833/Blooks/stars.svg',
                              set: 'Space',
                              rarity: 'Uncommon',
                              teamName: 'Shooting Stars',
                              color: '#19184d',
                            },
                            Alien: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613004231/Blooks/alien.svg',
                              set: 'Space',
                              rarity: 'Uncommon',
                              teamName: 'Awesome Aliens',
                              color: '#8dc63f',
                            },
                            Planet: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003832/Blooks/planet.svg',
                              set: 'Space',
                              rarity: 'Rare',
                              teamName: 'Galactic Warriors',
                              color: '#9dc6ea',
                            },
                            UFO: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613004088/Blooks/UFO.svg',
                              set: 'Space',
                              rarity: 'Rare',
                              teamName: 'Unidentified Students',
                              color: '#a15095',
                            },
                            Spaceship: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003833/Blooks/spaceship.svg',
                              set: 'Space',
                              rarity: 'Epic',
                              teamName: 'We Have a Problem',
                              color: '#ffcb29',
                            },
                            Astronaut: {
                              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg',
                              mediaUrl:
                                'https://media.blooket.com/image/upload/v1613003835/Blooks/astronaut.svg',
                              set: 'Space',
                              rarity: 'Legendary',
                              teamName: 'Astro Aviators',
                              color: '#9bd4ee',
                            },
                          }
                        ),
                        {
                          'Lil Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/lilBot.svg',
                            set: 'Bot',
                            rarity: 'Uncommon',
                            teamName: 'Lil Bots',
                            color: '#3e564a',
                          },
                          'Lovely Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/lovelyBot.svg',
                            set: 'Bot',
                            rarity: 'Uncommon',
                            teamName: 'Lovely Leaders',
                            color: '#f179af',
                          },
                          'Angry Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/angryBot.svg',
                            set: 'Bot',
                            rarity: 'Uncommon',
                            teamName: 'Evil Geniuses',
                            color: '#f1613a',
                          },
                          'Happy Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/happyBot.svg',
                            set: 'Bot',
                            rarity: 'Uncommon',
                            teamName: 'The Calculators',
                            color: '#51ba6b',
                          },
                          Watson: {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677388/Blooks/watson.svg',
                            set: 'Bot',
                            rarity: 'Rare',
                            teamName: 'Sophistication',
                            color: '#d69b5a',
                          },
                          'Buddy Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/buddyBot.svg',
                            set: 'Bot',
                            rarity: 'Rare',
                            teamName: 'Best Buddies',
                            color: '#9dc6ea',
                          },
                          'Brainy Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677386/Blooks/brainyBot.svg',
                            set: 'Bot',
                            rarity: 'Epic',
                            teamName: 'Big Brain Bots',
                            color: '#9ecf7a',
                          },
                          'Mega Bot': {
                            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg',
                            mediaUrl:
                              'https://media.blooket.com/image/upload/v1620677388/Blooks/megaBot.svg',
                            set: 'Bot',
                            rarity: 'Legendary',
                            teamName: 'THE MEGA BOTS',
                            color: '#d71f27',
                          },
                        }
                      ),
                      {
                        'Old Boot': {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956580/Blooks/oldBoot.svg',
                          set: 'Aquatic',
                          rarity: 'Uncommon',
                          teamName: 'Da Boots',
                          color: '#995b3c',
                        },
                        Jellyfish: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956578/Blooks/jellyfish.svg',
                          set: 'Aquatic',
                          rarity: 'Uncommon',
                          teamName: 'Jelly Jumpers',
                          color: '#c385b9',
                        },
                        Clownfish: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956576/Blooks/clownfish.svg',
                          set: 'Aquatic',
                          rarity: 'Uncommon',
                          teamName: 'Nemo Extras',
                          color: '#f7941d',
                        },
                        Frog: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956578/Blooks/frog.svg',
                          set: 'Aquatic',
                          rarity: 'Uncommon',
                          teamName: 'Hippity Hoppers',
                          color: '#a7d054',
                        },
                        Crab: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956578/Blooks/crab.svg',
                          set: 'Aquatic',
                          rarity: 'Uncommon',
                          teamName: 'Cool Claws',
                          color: '#cf1f3d',
                        },
                        Pufferfish: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956580/Blooks/pufferFish.svg',
                          set: 'Aquatic',
                          rarity: 'Rare',
                          teamName: 'TEAM BIG',
                          color: '#ddc4a6',
                        },
                        Blobfish: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956576/Blooks/blobfish.svg',
                          set: 'Aquatic',
                          rarity: 'Rare',
                          teamName: 'blob blob blob',
                          color: '#f3c1da',
                        },
                        Octopus: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956580/Blooks/octopus.svg',
                          set: 'Aquatic',
                          rarity: 'Rare',
                          teamName: 'Team 8',
                          color: '#a15095',
                        },
                        Narwhal: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956578/Blooks/narwhal.svg',
                          set: 'Aquatic',
                          rarity: 'Epic',
                          teamName: 'NARWHALLLLL',
                          color: '#dae6f5',
                        },
                        Dolphin: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/dolphin.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1675381971/Blooks/dolphin.svg',
                          set: 'Aquatic',
                          rarity: 'Epic',
                          teamName: 'Diving Dolphins',
                          color: '#4e7197',
                        },
                        'Baby Shark': {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956576/Blooks/babyShark.svg',
                          set: 'Aquatic',
                          rarity: 'Legendary',
                          teamName: 'BABY SHARK',
                          color: '#5588b7',
                        },
                        Megalodon: {
                          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg',
                          mediaUrl:
                            'https://media.blooket.com/image/upload/v1628956576/Blooks/megalodon.svg',
                          set: 'Aquatic',
                          rarity: 'Legendary',
                          teamName: "Megan's the Name",
                          color: '#3d5d80',
                        },
                      }
                    ),
                    {
                      Panda: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835595/Blooks/panda.svg',
                        set: 'Safari',
                        rarity: 'Uncommon',
                        teamName: 'Prime Pandas',
                        color: '#2f2c38',
                      },
                      Sloth: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835594/Blooks/sloth.svg',
                        set: 'Safari',
                        rarity: 'Uncommon',
                        teamName: 'Silly Sloths',
                        color: '#765b46',
                      },
                      Tenrec: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835594/Blooks/tenrec.svg',
                        set: 'Safari',
                        rarity: 'Uncommon',
                        teamName: 'Troubling Tenrecs',
                        color: '#ffcb29',
                      },
                      Flamingo: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835592/Blooks/flamingo.svg',
                        set: 'Safari',
                        rarity: 'Uncommon',
                        teamName: 'Pink And Proud',
                        color: '#f38db6',
                      },
                      Zebra: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835592/Blooks/zebra.svg',
                        set: 'Safari',
                        rarity: 'Uncommon',
                        teamName: 'Super Stripes',
                        color: '#2f2c38',
                      },
                      Elephant: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835592/Blooks/elephant.svg',
                        set: 'Safari',
                        rarity: 'Rare',
                        teamName: 'Erudite Elephants',
                        color: '#bac4e4',
                      },
                      Lemur: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835594/Blooks/lemur.svg',
                        set: 'Safari',
                        rarity: 'Rare',
                        teamName: 'Leaping Lemurs',
                        color: '#aeaba7',
                      },
                      Peacock: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835594/Blooks/peacock.svg',
                        set: 'Safari',
                        rarity: 'Rare',
                        teamName: 'Fearless Feathers',
                        color: '#2b3990',
                      },
                      Chameleon: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835592/Blooks/chameleon.svg',
                        set: 'Safari',
                        rarity: 'Epic',
                        teamName: 'Cool Chameleons',
                        color: '#8dc63f',
                      },
                      Lion: {
                        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg',
                        mediaUrl:
                          'https://media.blooket.com/image/upload/v1643835592/Blooks/lion.svg',
                        set: 'Safari',
                        rarity: 'Legendary',
                        teamName: 'The Pride',
                        color: '#f47e20',
                      },
                    }
                  ),
                  {
                    Amber: {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433846/Blooks/amber.svg',
                      set: 'Dino',
                      rarity: 'Uncommon',
                      teamName: 'Ambitious Ambers',
                      color: '#f7913f',
                    },
                    'Dino Egg': {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433846/Blooks/dinoEgg.svg',
                      set: 'Dino',
                      rarity: 'Uncommon',
                      teamName: 'Eggcellence',
                      color: '#d69b5a',
                    },
                    'Dino Fossil': {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433846/Blooks/dinoFossil.svg',
                      set: 'Dino',
                      rarity: 'Uncommon',
                      teamName: 'Fighting Fossils',
                      color: '#a46735',
                    },
                    Stegosaurus: {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433846/Blooks/stegosaurus.svg',
                      set: 'Dino',
                      rarity: 'Uncommon',
                      teamName: 'Hearty Herbivores',
                      color: '#6c9355',
                    },
                    Velociraptor: {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433848/Blooks/velociraptor.svg',
                      set: 'Dino',
                      rarity: 'Rare',
                      teamName: 'Prehistorics',
                      color: '#cf1f3d',
                    },
                    Brontosaurus: {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433846/Blooks/brontosaurus.svg',
                      set: 'Dino',
                      rarity: 'Rare',
                      teamName: 'Big Giraffes',
                      color: '#416eb5',
                    },
                    Triceratops: {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433848/Blooks/triceratops.svg',
                      set: 'Dino',
                      rarity: 'Epic',
                      teamName: 'Daring Dinos',
                      color: '#f1613a',
                    },
                    'Tyrannosaurus Rex': {
                      url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg',
                      mediaUrl:
                        'https://media.blooket.com/image/upload/v1650433848/Blooks/tyrannosaurusRex.svg',
                      set: 'Dino',
                      rarity: 'Legendary',
                      teamName: 'The Terror',
                      color: '#6c9355',
                    },
                  }
                ),
                {
                  'Ice Bat': {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBat.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061338/Blooks/iceBat.svg',
                    set: 'Ice Monster',
                    rarity: 'Uncommon',
                    teamName: 'Frozen Wings',
                    color: '#295eb6',
                  },
                  'Ice Bug': {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBug.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061339/Blooks/iceBug.svg',
                    set: 'Ice Monster',
                    rarity: 'Uncommon',
                    teamName: 'Bold Bugs',
                    color: '#337ae2',
                  },
                  'Ice Elemental': {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceElemental.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061336/Blooks/iceElemental.svg',
                    set: 'Ice Monster',
                    rarity: 'Uncommon',
                    teamName: 'ICED',
                    color: '#58c7f0',
                  },
                  'Rock Monster': {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/rockMonster.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061337/Blooks/rockMonster.svg',
                    set: 'Ice Monster',
                    rarity: 'Uncommon',
                    teamName: 'Ready Rocks',
                    color: '#5a617f',
                  },
                  Dink: {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/dink.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061338/Blooks/dink.svg',
                    set: 'Ice Monster',
                    rarity: 'Rare',
                    teamName: 'Dink Donk 1',
                    color: '#8f78a5',
                  },
                  Donk: {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/donk.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061338/Blooks/donk.svg',
                    set: 'Ice Monster',
                    rarity: 'Rare',
                    teamName: 'Dink Donk 2',
                    color: '#677c9e',
                  },
                  'Bush Monster': {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/bushMonster.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061336/Blooks/bushMonster.svg',
                    set: 'Ice Monster',
                    rarity: 'Epic',
                    teamName: 'Brave Bushes',
                    color: '#44c649',
                  },
                  Yeti: {
                    url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/yeti.svg',
                    mediaUrl:
                      'https://media.blooket.com/image/upload/v1663061336/Blooks/yeti.svg',
                    set: 'Ice Monster',
                    rarity: 'Legendary',
                    teamName: 'Everest',
                    color: '#5a81c5',
                  },
                }
              ),
              {
                Dingo: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/dingo.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381968/Blooks/dingo.svg',
                  set: 'Outback',
                  rarity: 'Uncommon',
                  teamName: 'Daring Dingos',
                  color: '#e38e4d',
                },
                Echidna: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/echidna.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381967/Blooks/echidna.svg',
                  set: 'Outback',
                  rarity: 'Uncommon',
                  teamName: 'Erudite Echidnas',
                  color: '#88766b',
                },
                Koala: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/koala.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381970/Blooks/koala.svg',
                  set: 'Outback',
                  rarity: 'Uncommon',
                  teamName: 'Kool Koalas',
                  color: '#827b8b',
                },
                Kookaburra: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/kookaburra.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381970/Blooks/kookaburra.svg',
                  set: 'Outback',
                  rarity: 'Uncommon',
                  teamName: 'Kind Kookaburras',
                  color: '#4d4d85',
                },
                Platypus: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/platypus.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381968/Blooks/platypus.svg',
                  set: 'Outback',
                  rarity: 'Rare',
                  teamName: 'Playful Platypus',
                  color: '#9d594e',
                },
                Joey: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/joey.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381968/Blooks/joey.svg',
                  set: 'Outback',
                  rarity: 'Rare',
                  teamName: 'Jumping Joeys',
                  color: '#9f693c',
                },
                Kangaroo: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/kangaroo.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381969/Blooks/kangaroo.svg',
                  set: 'Outback',
                  rarity: 'Rare',
                  teamName: 'Kicking Kangaroos',
                  color: '#b9853f',
                },
                Crocodile: {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/crocodile.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381968/Blooks/crocodile.svg',
                  set: 'Outback',
                  rarity: 'Epic',
                  teamName: 'The Crocs',
                  color: '#679b4f',
                },
                'Sugar Glider': {
                  url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/sugarGlider.svg',
                  mediaUrl:
                    'https://media.blooket.com/image/upload/v1675381967/Blooks/sugarGlider.svg',
                  set: 'Outback',
                  rarity: 'Legendary',
                  teamName: 'Fancy Flyers',
                  color: '#131f2b',
                },
              }
            ),
            {
              'Snow Globe': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575848338/Blooks/snowGlobe.svg',
                set: 'Blizzard',
                rarity: 'Uncommon',
                teamName: 'Globetrotters',
                color: '#10afd1',
              },
              'Holiday Gift': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575848338/Blooks/holidayGift.svg',
                set: 'Blizzard',
                rarity: 'Uncommon',
                teamName: 'Generous Givers',
                color: '#4ab96d',
              },
              'Hot Chocolate': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575848338/Blooks/hotChocolate.svg',
                set: 'Blizzard',
                rarity: 'Uncommon',
                teamName: 'Cocoa Coziness',
                color: '#663723',
              },
              'Holiday Wreath': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575848338/Blooks/holidayWreath.svg',
                set: 'Blizzard',
                rarity: 'Uncommon',
                teamName: 'Wreath Wreckers',
                color: '#6c9355',
              },
              Stocking: {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/stocking.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1670298616/Blooks/stocking.svg',
                set: 'Blizzard',
                rarity: 'Uncommon',
                teamName: 'Stocking Stuffers',
                color: '#e52a00',
              },
              'Gingerbread Man': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575604963/Blooks/gingerbreadMan.svg',
                set: 'Blizzard',
                rarity: 'Rare',
                teamName: 'Cookie Crunchers',
                color: '#995b3c',
              },
              'Gingerbread House': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575605860/Blooks/gingerbreadHouse.svg',
                set: 'Blizzard',
                rarity: 'Rare',
                teamName: 'Healthy Houses',
                color: '#995b3c',
              },
              Reindeer: {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/reindeer.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1670298616/Blooks/reindeer.svg',
                set: 'Blizzard',
                rarity: 'Rare',
                teamName: 'Ready Reindeer',
                color: '#9a5b3c',
              },
              Snowman: {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575604963/Blooks/snowman.svg',
                set: 'Blizzard',
                rarity: 'Epic',
                teamName: 'Summer Puddles',
                color: '#7ca1d5',
              },
              'Santa Claus': {
                url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg',
                mediaUrl:
                  'https://media.blooket.com/image/upload/v1575606016/Blooks/santaClaus.svg',
                set: 'Blizzard',
                rarity: 'Legendary',
                teamName: "Santa's Squad",
                color: '#d62027',
              },
            }
          ),
          {
            Pumpkin: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/pumpkin.svg',
              set: 'Spooky',
              rarity: 'Uncommon',
              teamName: 'Pumpkin Smashers',
              color: '#f7941d',
            },
            'Swamp Monster': {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/swampMonster.svg',
              set: 'Spooky',
              rarity: 'Uncommon',
              teamName: 'Swamp Things',
              color: '#2fa04a',
            },
            Frankenstein: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/frankenstein.svg',
              set: 'Spooky',
              rarity: 'Uncommon',
              teamName: 'The Monsters',
              color: '#56884b',
            },
            Vampire: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/vampire.svg',
              set: 'Spooky',
              rarity: 'Uncommon',
              teamName: 'Valiant Vampires',
              color: '#a15095',
            },
            Zombie: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168912/Blooks/zombie.svg',
              set: 'Spooky',
              rarity: 'Rare',
              teamName: 'Walking Dead',
              color: '#80a55d',
            },
            Mummy: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/mummy.svg',
              set: 'Spooky',
              rarity: 'Rare',
              teamName: 'Motivated Mummies',
              color: '#e8d8c7',
            },
            'Caramel Apple': {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/caramelApple.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1666248719/Blooks/caramelApple.svg',
              set: 'Spooky',
              rarity: 'Rare',
              teamName: 'Caring Caramels',
              color: '#8d432a',
            },
            Werewolf: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168912/Blooks/werewolf.svg',
              set: 'Spooky',
              rarity: 'Epic',
              teamName: 'Werewolf Warriors',
              color: '#594a42',
            },
            Ghost: {
              url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg',
              mediaUrl:
                'https://media.blooket.com/image/upload/v1601168910/Blooks/ghost.svg',
              set: 'Spooky',
              rarity: 'Legendary',
              teamName: 'BOO!',
              color: '#c2def4',
            },
          }
        ),
        {
          'Rainbow Jellyfish': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowJellyfish.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Underwater Disco',
            color: '#c9d6ed',
          },
          'Blizzard Clownfish': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956578/Blooks/blizzardClownfish.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Winter Circus',
            color: '#dae6f5',
          },
          'Lovely Frog': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956576/Blooks/lovelyFrog.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Cute Companions',
            color: '#f38db6',
          },
          'Lucky Frog': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1647451022/Blooks/luckyFrog.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Lucky Leapers',
            color: '#4eb151',
          },
          'Spring Frog': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1649909367/Blooks/springFrog.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Spring Spirit',
            color: '#f2bd8c',
          },
          'Poison Dart Frog': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956580/Blooks/poisonDartFrog.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'TOXIC HAZARD',
            color: '#ffcb29',
          },
          'Lucky Hamster': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/luckyHamster.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1679020768/Blooks/luckyHamster.svg',
            set: 'Hidden',
            realSet: 'Pet',
            rarity: 'Chroma',
            teamName: 'Little Luckies',
            color: '#17a34a',
          },
          'Chocolate Rabbit': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/chocolateRabbit.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1681031184/Blooks/chocolateRabbit.svg',
            set: 'Hidden',
            realSet: 'Pet',
            rarity: 'Chroma',
            teamName: 'Ready Rabbits',
            color: '#914b32',
          },
          'Lemon Crab': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956576/Blooks/lemonCrab.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Citrus Claws',
            color: '#f7d959',
          },
          'Pirate Pufferfish': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1641935517/Blooks/piratePufferfish.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Perfect Pirates',
            color: '#8b5aa5',
          },
          'Donut Blobfish': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1641935517/Blooks/donutBlobfish.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Donut Mess Up',
            color: '#f3c1da',
          },
          'Crimson Octopus': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956578/Blooks/crimsonOctopus.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Red Team 8',
            color: '#b3303b',
          },
          'Rainbow Narwhal': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowNarwhal.svg',
            set: 'Hidden',
            realSet: 'Aquatic',
            rarity: 'Chroma',
            teamName: 'Sea Unicorns',
            color: '#cfe8e9',
          },
          'Frost Wreath': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1607304954/Blooks/frostWreath.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'TEAM FREEZE',
            color: '#2086df',
          },
          'Tropical Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1607304954/Blooks/tropicalGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'WARM HUGS',
            color: '#fb7c2f',
          },
          'New York Snow Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/newYorkSnowGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670298616/Blooks/newYorkSnowGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'NY Tourists',
            color: '#4aa891',
          },
          'London Snow Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/londonSnowGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670298617/Blooks/londonSnowGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'London Tourists',
            color: '#c88829',
          },
          'Japan Snow Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/japanSnowGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670298616/Blooks/japanSnowGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'Japan Tourists',
            color: '#d62027',
          },
          'Egypt Snow Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/egyptSnowGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670298616/Blooks/egyptSnowGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'Egypt Tourists',
            color: '#d47630',
          },
          'Paris Snow Globe': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/parisSnowGlobe.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670298616/Blooks/parisSnowGlobe.svg',
            set: 'Hidden',
            realSet: 'Blizzard',
            rarity: 'Chroma',
            teamName: 'Paris Tourists',
            color: '#858585',
          },
          Sandwich: {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1599952272/Blooks/sandwich.svg',
            set: 'Hidden',
            realSet: 'Breakfast',
            rarity: 'Epic',
            teamName: 'Super Sandwiches',
            color: '#8cbd40',
          },
          'Ice Slime': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceSlime.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1663061336/Blooks/iceSlime.svg',
            set: 'Hidden',
            realSet: 'Ice Monster',
            rarity: 'Chroma',
            teamName: 'Slip n Slide',
            color: '#42b7ea',
          },
          'Frozen Fossil': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/frozenFossil.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1663061338/Blooks/frozenFossil.svg',
            set: 'Hidden',
            realSet: 'Ice Monster',
            rarity: 'Chroma',
            teamName: 'Ice Age',
            color: '#9ed2ef',
          },
          'Ice Crab': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceCrab.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1663061336/Blooks/iceCrab.svg',
            set: 'Hidden',
            realSet: 'Ice Monster',
            rarity: 'Chroma',
            teamName: 'ICE ICE BABY',
            color: '#3ea8cf',
          },
          'Rainbow Panda': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1643835594/Blooks/rainbowPanda.svg',
            set: 'Hidden',
            realSet: 'Safari',
            rarity: 'Chroma',
            teamName: 'The Rainbows',
            color: '#2f2c38',
          },
          'White Peacock': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1643835592/Blooks/whitePeacock.svg',
            set: 'Hidden',
            realSet: 'Safari',
            rarity: 'Chroma',
            teamName: 'Fast Feathers',
            color: '#69c1d3',
          },
          'Tiger Zebra': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1643835596/Blooks/tigerZebra.svg',
            set: 'Hidden',
            realSet: 'Safari',
            rarity: 'Chroma',
            teamName: 'Agent Zs',
            color: '#f18221',
          },
          'Teal Platypus': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/outback/tealPlatypus.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1675381970/Blooks/tealPlatypus.svg',
            set: 'Hidden',
            realSet: 'Outback',
            rarity: 'Chroma',
            teamName: 'Detectives',
            color: '#1fa49f',
          },
          'Red Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003832/Blooks/redAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Red Crewmates',
            color: '#ee2324',
          },
          'Orange Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003831/Blooks/orangeAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Orange Crewmates',
            color: '#f79320',
          },
          'Yellow Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003833/Blooks/yellowAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Yellow Crewmates',
            color: '#edcb1f',
          },
          'Lime Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003834/Blooks/limeAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Lime Crewmates',
            color: '#61b446',
          },
          'Green Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003832/Blooks/greenAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Green Crewmates',
            color: '#197b42',
          },
          'Cyan Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003831/Blooks/cyanAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Cyan Crewmates',
            color: '#74cbcb',
          },
          'Blue Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003835/Blooks/blueAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Blue Crewmates',
            color: '#2867b1',
          },
          'Pink Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003831/Blooks/pinkAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Pink Crewmates',
            color: '#e573ac',
          },
          'Purple Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Purple Crewmates',
            color: '#9068ad',
          },
          'Brown Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003831/Blooks/brownAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Brown Crewmates',
            color: '#9e5a3a',
          },
          'Black Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1613003835/Blooks/blackAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Black Crewmates',
            color: '#413f56',
          },
          'Lovely Planet': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/lovelyPlanet.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1678327690/Blooks/lovelyPlanet.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Chroma',
            teamName: 'Lovers',
            color: '#db302c',
          },
          'Haunted Pumpkin': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1641935071/Blooks/hauntedPumpkin.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Haunted Helpers',
            color: '#939385',
          },
          'Pumpkin Cookie': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/pumpkinCookie.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1666248719/Blooks/pumpkinCookie.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Cookie Monsters',
            color: '#f7941d',
          },
          'Ghost Cookie': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/ghostCookie.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1666248719/Blooks/ghostCookie.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'COOKIES',
            color: '#c2def4',
          },
          'Chick Chicken': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/chickChicken.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667010822/Blooks/chickChicken.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Tricky Chickens',
            color: '#eaa622',
          },
          'Chicken Chick': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/chickenChick.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667010822/Blooks/chickenChick.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Tricky Chicks',
            color: '#9dd7f4',
          },
          'Raccoon Bandit': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/raccoonBandit.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667011259/Blooks/raccoonBandit.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Bandits',
            color: '#bb2222',
          },
          'Owl Sheriff': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/owlSheriff.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667010822/Blooks/owlSheriff.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Sheriffs',
            color: '#84582b',
          },
          'Vampire Frog': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/vampireFrog.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667010822/Blooks/vampireFrog.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Fanged Frogs',
            color: '#312222',
          },
          'Pumpkin King': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/pumpkinKing.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1666681464/Blooks/pumpkinKing.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Halloween Kings',
            color: '#c1541e',
          },
          'Anaconda Wizard': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/chromas/anacondaWizard.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1667010822/Blooks/anacondaWizard.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Sneaky Wizards',
            color: '#252165',
          },
          'Spooky Pumpkin': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1603679635/Blooks/spookyPumpkin.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: 'Ghostly Geniuses',
            color: '#66f59b',
          },
          'Spooky Mummy': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1603679635/Blooks/spookyMummy.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Chroma',
            teamName: "Spooky 'n' Scary",
            color: '#66f59b',
          },
          'Agent Owl': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg',
            set: 'Hidden',
            realSet: 'Forest Animal',
            rarity: 'Chroma',
            teamName: 'Secret Agents',
            color: '#32da4e',
          },
          'Master Elf': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg',
            set: 'Hidden',
            realSet: 'Medieval',
            rarity: 'Chroma',
            teamName: 'The Masters',
            color: '#3a3a3a',
          },
          'Party Pig': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/partyPig.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1670544090/Blooks/partyPig.svg',
            set: 'Hidden',
            realSet: 'Farm Animal',
            rarity: 'Chroma',
            teamName: 'MODS',
            color: '#f6a9cb',
          },
          'Wise Owl': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/other/wiseOwl.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1688339287/Blooks/wiseOwl.svg',
            set: 'Hidden',
            realSet: 'Forest Animal',
            rarity: 'Unique',
            teamName: 'Wise Winners',
            color: '#a55a30',
          },
          'Spooky Ghost': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/mysticals/spookyGhost.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1681884681/Blooks/spookyGhost.svg',
            set: 'Hidden',
            realSet: 'Spooky',
            rarity: 'Mystical',
            teamName: 'Spooksters',
            color: '#66f59b',
          },
          'Phantom King': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/mysticals/phantomKing.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1681884681/Blooks/phantomKing.svg',
            set: 'Hidden',
            realSet: 'Medieval',
            rarity: 'Mystical',
            teamName: 'The True Kings',
            color: '#2cf4e1',
          },
          'Tim the Alien': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/mysticals/timTheAlien.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1681884681/Blooks/timTheAlien.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Mystical',
            teamName: "Tim's Friends",
            color: '#8dc63f',
          },
          'Rainbow Astronaut': {
            url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/mysticals/rainbowAstronaut.svg',
            mediaUrl:
              'https://media.blooket.com/image/upload/v1681884681/Blooks/rainbowAstronaut.svg',
            set: 'Hidden',
            realSet: 'Space',
            rarity: 'Mystical',
            teamName: 'RAINBOW',
            color: '#9068ad',
          },
        }
      ),
      {
        'Light Blue': {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Blooket Buds',
          color: '#0bc2cf',
        },
        Black: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Black Team',
          color: '#3a3a3a',
        },
        Red: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Red Team',
          color: '#d62728',
        },
        Purple: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Purple Team',
          color: '#9a49aa',
        },
        Pink: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Pink Team',
          color: '#e377c2',
        },
        Orange: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Orange Team',
          color: '#ff7f0f',
        },
        Lime: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Lime Team',
          color: '#b3dc23',
        },
        Green: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Green Team',
          color: '#2ca02c',
        },
        Teal: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135104/Blooks/colors/tealBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Teal Team',
          color: '#007788',
        },
        Tan: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135102/Blooks/colors/tanBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Tan Team',
          color: '#d2b48c',
        },
        Maroon: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135102/Blooks/colors/maroonBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Maroon Team',
          color: '#800000',
        },
        Gray: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135102/Blooks/colors/grayBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Gray Team',
          color: '#999999',
        },
        Mint: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135102/Blooks/colors/mintBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Mint Team',
          color: '#aaf0d1',
        },
        Salmon: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135102/Blooks/colors/salmonColorBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Salmon Team',
          color: '#fa8072',
        },
        Burgandy: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135101/Blooks/colors/burgandyBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Burgandy Team',
          color: '#99254d',
        },
        'Baby Blue': {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/babyBlueBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Baby Blue Team',
          color: '#99ccff',
        },
        Dust: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dustBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Dust Team',
          color: '#999966',
        },
        Brown: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/brownBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Brown Team',
          color: '#86592d',
        },
        'Dull Blue': {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dullBlueBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Dim Blue Team',
          color: '#666699',
        },
        Yellow: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/yellowBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Yellow Team',
          color: '#ffff4d',
        },
        Blue: {
          url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg',
          mediaUrl:
            'https://media.blooket.com/image/upload/v1594135100/Blooks/colors/blueBlook.svg',
          set: 'Color',
          rarity: 'Common',
          teamName: 'Blue Team',
          color: '#005ce6',
        },
      }
    )
    _0x2d6d6a.a = _0x2bc076
  },
  'O+AO': function (_0x3c6f2c, _0x299d76, _0x39daf0) {
    'use strict'
    _0x299d76.a = {
      Bear: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/bear.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Bear Necessities',
        color: '#995b3c',
      },
      Moose: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/moose.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Moose Caboose',
        color: '#995b3c',
      },
      Fox: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/fox.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Swifty Swipers',
        color: '#f49849',
      },
      Raccoon: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/raccoon.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Trash Pandas',
        color: '#6d6e71',
      },
      Squirrel: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Nutty Buddies',
        color: '#d25927',
      },
      Owl: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Hooooooooo',
        color: '#594a42',
      },
      Hedgehog: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556832316/Blooks/hedgehog.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Spikey Friends',
        color: '#3f312b',
      },
      Deer: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/deer.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381970/Blooks/deer.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Dashing Deer',
        color: '#c2541f',
      },
      Wolf: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/wolf.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381967/Blooks/wolf.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'The Pack',
        color: '#7b7c81',
      },
      Beaver: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/beaver.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381970/Blooks/beaver.svg',
        set: 'Forest Animal',
        rarity: 'Common',
        teamName: 'Building Beavers',
        color: '#bd6231',
      },
    }
  },
  Y018: function (_0x219df1, _0x33b59d, _0x1a7f77) {
    'use strict'
    _0x33b59d.a = {
      'Snowy Owl': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/snowyOwl.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Kool Kids',
        color: '#feda3f',
      },
      'Polar Bear': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Snowy Students',
        color: '#7ca1d5',
      },
      'Arctic Fox': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Chilly Chosen',
        color: '#7ca1d5',
      },
      'Baby Penguin': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Party Penguins',
        color: '#414042',
      },
      Penguin: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Better Birds',
        color: '#fb8640',
      },
      'Arctic Hare': {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Arctic Achievers',
        color: '#7ca1d5',
      },
      Seal: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Super Seals',
        color: '#7ca1d5',
      },
      Walrus: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1582775344/Blooks/walrus.svg',
        set: 'Arctic Animal',
        rarity: 'Common',
        teamName: 'Wordy Walruses',
        color: '#7d4f33',
      },
    }
  },
  cQOM: function (_0x57eb2e, _0x1ac812, _0x34eaec) {
    'use strict'
    _0x1ac812.a = {
      Dog: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/dog.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Diligent Doggos',
        color: '#995b3c',
      },
      Cat: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/cat.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Meow Mates',
        color: '#f49849',
      },
      Rabbit: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831935/Blooks/rabbit.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Fluffy Bunnies',
        color: '#e7bf9a',
      },
      Goldfish: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Pretty Fishies',
        color: '#f18221',
      },
      Hamster: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/hamster.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'HAMSTA TIME',
        color: '#ce9176',
      },
      Turtle: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831935/Blooks/turtle.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Shell Shocked',
        color: '#619a3c',
      },
      Kitten: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/kitten.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Purrfect People',
        color: '#58595b',
      },
      Puppy: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556831934/Blooks/puppy.svg',
        set: 'Pet',
        rarity: 'Common',
        teamName: 'Super Puppers',
        color: '#414042',
      },
    }
  },
  dBIF: function (_0x899e02, _0x48f7ac, _0x1d6b71) {
    'use strict'
    function _0x401a29(_0x147a41) {
      return (_0x401a29 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (_0x1681bf) {
              return typeof _0x1681bf
            }
          : function (_0x36aa57) {
              return _0x36aa57 &&
                'function' == typeof Symbol &&
                _0x36aa57.constructor === Symbol &&
                _0x36aa57 !== Symbol.prototype
                ? 'symbol'
                : typeof _0x36aa57
            })(_0x147a41)
    }
    function _0xee2c52() {
      _0xee2c52 = function () {
        return _0x483bb5
      }
      var _0x483bb5 = { wrap: _0x3baf82 },
        _0x192b07 = Object.prototype,
        _0xbbf25e = _0x192b07.hasOwnProperty,
        _0x3bf7f6 =
          Object.defineProperty ||
          function (_0x2e9be8, _0x508246, _0x2a3d29) {
            _0x2e9be8[_0x508246] = _0x2a3d29.value
          },
        _0x3445cb = 'function' == typeof Symbol ? Symbol : {},
        _0x273e43 = _0x3445cb.iterator || '@@iterator',
        _0x28fb77 = _0x3445cb.asyncIterator || '@@asyncIterator',
        _0x448b5c = _0x3445cb.toStringTag || '@@toStringTag'
      function _0xb7d7fe(_0x26407a, _0x4e2124, _0x328104) {
        return (
          Object.defineProperty(_0x26407a, _0x4e2124, {
            value: _0x328104,
            enumerable: true,
            configurable: true,
            writable: true,
          }),
          _0x26407a[_0x4e2124]
        )
      }
      try {
        _0xb7d7fe({}, '')
      } catch (_0x505e66) {
        _0xb7d7fe = function (_0x1c1f27, _0x21f498, _0x4fbdb2) {
          return (_0x1c1f27[_0x21f498] = _0x4fbdb2)
        }
      }
      function _0x3baf82(_0x2925a7, _0x591c20, _0x217eb7, _0x27df08) {
        var _0x29ac4a =
            _0x591c20 && _0x591c20.prototype instanceof _0x229238
              ? _0x591c20
              : _0x229238,
          _0x2361d3 = Object.create(_0x29ac4a.prototype),
          _0x274621 = new _0x1367a0(_0x27df08 || [])
        return (
          _0x3bf7f6(_0x2361d3, '_invoke', {
            value: _0x52ab08(_0x2925a7, _0x217eb7, _0x274621),
          }),
          _0x2361d3
        )
      }
      function _0x577ee9(_0x194783, _0x36b026, _0x4a02ec) {
        try {
          return {
            type: 'normal',
            arg: _0x194783.call(_0x36b026, _0x4a02ec),
          }
        } catch (_0x26722d) {
          return {
            type: 'throw',
            arg: _0x26722d,
          }
        }
      }
      var _0x11f724 = {}
      function _0x229238() {}
      function _0x6a448() {}
      function _0x590787() {}
      var _0x23b5cf = {}
      _0xb7d7fe(_0x23b5cf, _0x273e43, function () {
        return this
      })
      var _0x5d29e0 = Object.getPrototypeOf,
        _0x36d692 = _0x5d29e0 && _0x5d29e0(_0x5d29e0(_0xf815cc([])))
      _0x36d692 &&
        _0x36d692 !== _0x192b07 &&
        _0xbbf25e.call(_0x36d692, _0x273e43) &&
        (_0x23b5cf = _0x36d692)
      var _0x21b728 =
        (_0x590787.prototype =
        _0x229238.prototype =
          Object.create(_0x23b5cf))
      function _0x24db29(_0x5e91cc) {
        ;['next', 'throw', 'return'].forEach(function (_0x4e7e44) {
          _0xb7d7fe(_0x5e91cc, _0x4e7e44, function (_0x26c438) {
            return this['_invoke'](_0x4e7e44, _0x26c438)
          })
        })
      }
      function _0x50383d(_0x1d3219, _0x908fd1) {
        var _0x1fe1e5
        _0x3bf7f6(this, '_invoke', {
          value: function (_0x359791, _0x4241f7) {
            function _0x37c8a9() {
              return new _0x908fd1(function (_0x4f049b, _0x358bd0) {
                !(function _0x5f2129(
                  _0x2f2318,
                  _0x4d01cb,
                  _0xe6764e,
                  _0x1d9d63
                ) {
                  var _0xf0aaf7 = _0x577ee9(
                    _0x1d3219[_0x2f2318],
                    _0x1d3219,
                    _0x4d01cb
                  )
                  if ('throw' !== _0xf0aaf7.type) {
                    var _0x4ea354 = _0xf0aaf7.arg,
                      _0x5de688 = _0x4ea354.value
                    return _0x5de688 &&
                      'object' == _0x401a29(_0x5de688) &&
                      _0xbbf25e.call(_0x5de688, '__await')
                      ? _0x908fd1.resolve(_0x5de688['__await']).then(
                          function (_0x4fcb8f) {
                            _0x5f2129('next', _0x4fcb8f, _0xe6764e, _0x1d9d63)
                          },
                          function (_0x32e0eb) {
                            _0x5f2129('throw', _0x32e0eb, _0xe6764e, _0x1d9d63)
                          }
                        )
                      : _0x908fd1.resolve(_0x5de688).then(
                          function (_0x2c48dd) {
                            _0x4ea354.value = _0x2c48dd
                            _0xe6764e(_0x4ea354)
                          },
                          function (_0xd2fcfe) {
                            return _0x5f2129(
                              'throw',
                              _0xd2fcfe,
                              _0xe6764e,
                              _0x1d9d63
                            )
                          }
                        )
                  }
                  _0x1d9d63(_0xf0aaf7.arg)
                })(_0x359791, _0x4241f7, _0x4f049b, _0x358bd0)
              })
            }
            return (_0x1fe1e5 = _0x1fe1e5
              ? _0x1fe1e5.then(_0x37c8a9, _0x37c8a9)
              : _0x37c8a9())
          },
        })
      }
      function _0x52ab08(_0x2bd42a, _0x294fe6, _0x58d104) {
        var _0xa2c044 = 'suspendedStart'
        return function (_0x36114f, _0x15e619) {
          if ('executing' === _0xa2c044) {
            throw new Error('Generator is already running')
          }
          if ('completed' === _0xa2c044) {
            if ('throw' === _0x36114f) {
              throw _0x15e619
            }
            return _0x24faf7()
          }
          for (_0x58d104.method = _0x36114f, _0x58d104.arg = _0x15e619; ; ) {
            var _0x15e3d2 = _0x58d104.delegate
            if (_0x15e3d2) {
              var _0x43532f = _0x250394(_0x15e3d2, _0x58d104)
              if (_0x43532f) {
                if (_0x43532f === _0x11f724) {
                  continue
                }
                return _0x43532f
              }
            }
            if ('next' === _0x58d104.method) {
              _0x58d104.sent = _0x58d104['_sent'] = _0x58d104.arg
            } else {
              if ('throw' === _0x58d104.method) {
                if ('suspendedStart' === _0xa2c044) {
                  throw ((_0xa2c044 = 'completed'), _0x58d104.arg)
                }
                _0x58d104.dispatchException(_0x58d104.arg)
              } else {
                'return' === _0x58d104.method &&
                  _0x58d104.abrupt('return', _0x58d104.arg)
              }
            }
            _0xa2c044 = 'executing'
            var _0x4fe206 = _0x577ee9(_0x2bd42a, _0x294fe6, _0x58d104)
            if ('normal' === _0x4fe206.type) {
              if (
                ((_0xa2c044 = _0x58d104.done ? 'completed' : 'suspendedYield'),
                _0x4fe206.arg === _0x11f724)
              ) {
                continue
              }
              return {
                value: _0x4fe206.arg,
                done: _0x58d104.done,
              }
            }
            'throw' === _0x4fe206.type &&
              ((_0xa2c044 = 'completed'),
              (_0x58d104.method = 'throw'),
              (_0x58d104.arg = _0x4fe206.arg))
          }
        }
      }
      function _0x250394(_0xb8d867, _0x499df8) {
        var _0x43bc67 = _0x499df8.method,
          _0x2f0c0f = _0xb8d867.iterator[_0x43bc67]
        if (void 0 === _0x2f0c0f) {
          return (
            (_0x499df8.delegate = null),
            ('throw' === _0x43bc67 &&
              _0xb8d867.iterator.return &&
              ((_0x499df8.method = 'return'),
              (_0x499df8.arg = void 0),
              _0x250394(_0xb8d867, _0x499df8),
              'throw' === _0x499df8.method)) ||
              ('return' !== _0x43bc67 &&
                ((_0x499df8.method = 'throw'),
                (_0x499df8.arg = new TypeError(
                  "The iterator does not provide a '" + _0x43bc67 + "' method"
                )))),
            _0x11f724
          )
        }
        var _0x13575b = _0x577ee9(_0x2f0c0f, _0xb8d867.iterator, _0x499df8.arg)
        if ('throw' === _0x13575b.type) {
          return (
            (_0x499df8.method = 'throw'),
            (_0x499df8.arg = _0x13575b.arg),
            (_0x499df8.delegate = null),
            _0x11f724
          )
        }
        var _0x493054 = _0x13575b.arg
        return _0x493054
          ? _0x493054.done
            ? ((_0x499df8[_0xb8d867.resultName] = _0x493054.value),
              (_0x499df8.next = _0xb8d867.nextLoc),
              'return' !== _0x499df8.method &&
                ((_0x499df8.method = 'next'), (_0x499df8.arg = void 0)),
              (_0x499df8.delegate = null),
              _0x11f724)
            : _0x493054
          : ((_0x499df8.method = 'throw'),
            (_0x499df8.arg = new TypeError('iterator result is not an object')),
            (_0x499df8.delegate = null),
            _0x11f724)
      }
      function _0x345796(_0x25442b) {
        var _0x3c8e30 = { tryLoc: _0x25442b[0] }
        1 in _0x25442b && (_0x3c8e30.catchLoc = _0x25442b[1])
        2 in _0x25442b &&
          ((_0x3c8e30.finallyLoc = _0x25442b[2]),
          (_0x3c8e30.afterLoc = _0x25442b[3]))
        this.tryEntries.push(_0x3c8e30)
      }
      function _0x5a5e59(_0x3aa746) {
        var _0x2a689c = _0x3aa746.completion || {}
        _0x2a689c.type = 'normal'
        delete _0x2a689c.arg
        _0x3aa746.completion = _0x2a689c
      }
      function _0x1367a0(_0x5eeecd) {
        this.tryEntries = [{ tryLoc: 'root' }]
        _0x5eeecd.forEach(_0x345796, this)
        this.reset(true)
      }
      function _0xf815cc(_0x1e01e6) {
        if (_0x1e01e6) {
          var _0x29c648 = _0x1e01e6[_0x273e43]
          if (_0x29c648) {
            return _0x29c648.call(_0x1e01e6)
          }
          if ('function' == typeof _0x1e01e6.next) {
            return _0x1e01e6
          }
          if (!isNaN(_0x1e01e6.length)) {
            var _0xfe4097 = -1,
              _0x568152 = function _0x288b55() {
                for (; ++_0xfe4097 < _0x1e01e6.length; ) {
                  if (_0xbbf25e.call(_0x1e01e6, _0xfe4097)) {
                    return (
                      (_0x288b55.value = _0x1e01e6[_0xfe4097]),
                      (_0x288b55.done = false),
                      _0x288b55
                    )
                  }
                }
                return (
                  (_0x288b55.value = void 0), (_0x288b55.done = true), _0x288b55
                )
              }
            return (_0x568152.next = _0x568152)
          }
        }
        return { next: _0x24faf7 }
      }
      function _0x24faf7() {
        return {
          value: void 0,
          done: true,
        }
      }
      return (
        (_0x6a448.prototype = _0x590787),
        _0x3bf7f6(_0x21b728, 'constructor', {
          value: _0x590787,
          configurable: true,
        }),
        _0x3bf7f6(_0x590787, 'constructor', {
          value: _0x6a448,
          configurable: true,
        }),
        (_0x6a448.displayName = _0xb7d7fe(
          _0x590787,
          _0x448b5c,
          'GeneratorFunction'
        )),
        (_0x483bb5.isGeneratorFunction = function (_0x30306f) {
          var _0x53496f =
            'function' == typeof _0x30306f && _0x30306f.constructor
          return (
            !!_0x53496f &&
            (_0x53496f === _0x6a448 ||
              'GeneratorFunction' === (_0x53496f.displayName || _0x53496f.name))
          )
        }),
        (_0x483bb5.mark = function (_0x4edd84) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(_0x4edd84, _0x590787)
              : ((_0x4edd84['__proto__'] = _0x590787),
                _0xb7d7fe(_0x4edd84, _0x448b5c, 'GeneratorFunction')),
            (_0x4edd84.prototype = Object.create(_0x21b728)),
            _0x4edd84
          )
        }),
        (_0x483bb5.awrap = function (_0x4a6e69) {
          return { __await: _0x4a6e69 }
        }),
        _0x24db29(_0x50383d.prototype),
        _0xb7d7fe(_0x50383d.prototype, _0x28fb77, function () {
          return this
        }),
        (_0x483bb5.AsyncIterator = _0x50383d),
        (_0x483bb5.async = function (
          _0x4f1c28,
          _0xa67cfe,
          _0x5d3975,
          _0x2c6006,
          _0x3fa91f
        ) {
          void 0 === _0x3fa91f && (_0x3fa91f = Promise)
          var _0x3e2c2e = new _0x50383d(
            _0x3baf82(_0x4f1c28, _0xa67cfe, _0x5d3975, _0x2c6006),
            _0x3fa91f
          )
          return _0x483bb5.isGeneratorFunction(_0xa67cfe)
            ? _0x3e2c2e
            : _0x3e2c2e.next().then(function (_0x5f56c5) {
                return _0x5f56c5.done ? _0x5f56c5.value : _0x3e2c2e.next()
              })
        }),
        _0x24db29(_0x21b728),
        _0xb7d7fe(_0x21b728, _0x448b5c, 'Generator'),
        _0xb7d7fe(_0x21b728, _0x273e43, function () {
          return this
        }),
        _0xb7d7fe(_0x21b728, 'toString', function () {
          return '[object Generator]'
        }),
        (_0x483bb5.keys = function (_0x12e0b4) {
          var _0x141c01 = Object(_0x12e0b4),
            _0x449a21 = []
          for (var _0x484cd in _0x141c01) _0x449a21.push(_0x484cd)
          return (
            _0x449a21.reverse(),
            function _0x548a6a() {
              for (; _0x449a21.length; ) {
                var _0x84971a = _0x449a21.pop()
                if (_0x84971a in _0x141c01) {
                  return (
                    (_0x548a6a.value = _0x84971a),
                    (_0x548a6a.done = false),
                    _0x548a6a
                  )
                }
              }
              return (_0x548a6a.done = true), _0x548a6a
            }
          )
        }),
        (_0x483bb5.values = _0xf815cc),
        (_0x1367a0.prototype = {
          constructor: _0x1367a0,
          reset: function (_0x27fd9b) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this['_sent'] = void 0),
              (this.done = false),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(_0x5a5e59),
              !_0x27fd9b)
            ) {
              for (var _0x546ad3 in this)
                't' === _0x546ad3.charAt(0) &&
                  _0xbbf25e.call(this, _0x546ad3) &&
                  !isNaN(+_0x546ad3.slice(1)) &&
                  (this[_0x546ad3] = void 0)
            }
          },
          stop: function () {
            this.done = true
            var _0x13b626 = this.tryEntries[0].completion
            if ('throw' === _0x13b626.type) {
              throw _0x13b626.arg
            }
            return this.rval
          },
          dispatchException: function (_0xb51dec) {
            if (this.done) {
              throw _0xb51dec
            }
            var _0x2aa51c = this
            function _0x5021f3(_0x541089, _0x4da898) {
              return (
                (_0x454817.type = 'throw'),
                (_0x454817.arg = _0xb51dec),
                (_0x2aa51c.next = _0x541089),
                _0x4da898 &&
                  ((_0x2aa51c.method = 'next'), (_0x2aa51c.arg = void 0)),
                !!_0x4da898
              )
            }
            for (
              var _0x4942bc = this.tryEntries.length - 1;
              _0x4942bc >= 0;
              --_0x4942bc
            ) {
              var _0x517333 = this.tryEntries[_0x4942bc],
                _0x454817 = _0x517333.completion
              if ('root' === _0x517333.tryLoc) {
                return _0x5021f3('end')
              }
              if (_0x517333.tryLoc <= this.prev) {
                var _0x211518 = _0xbbf25e.call(_0x517333, 'catchLoc'),
                  _0xc8a57e = _0xbbf25e.call(_0x517333, 'finallyLoc')
                if (_0x211518 && _0xc8a57e) {
                  if (this.prev < _0x517333.catchLoc) {
                    return _0x5021f3(_0x517333.catchLoc, true)
                  }
                  if (this.prev < _0x517333.finallyLoc) {
                    return _0x5021f3(_0x517333.finallyLoc)
                  }
                } else {
                  if (_0x211518) {
                    if (this.prev < _0x517333.catchLoc) {
                      return _0x5021f3(_0x517333.catchLoc, true)
                    }
                  } else {
                    if (!_0xc8a57e) {
                      throw new Error('try statement without catch or finally')
                    }
                    if (this.prev < _0x517333.finallyLoc) {
                      return _0x5021f3(_0x517333.finallyLoc)
                    }
                  }
                }
              }
            }
          },
          abrupt: function (_0x10729b, _0x1e9f0a) {
            for (
              var _0x1d459e = this.tryEntries.length - 1;
              _0x1d459e >= 0;
              --_0x1d459e
            ) {
              var _0x5121c8 = this.tryEntries[_0x1d459e]
              if (
                _0x5121c8.tryLoc <= this.prev &&
                _0xbbf25e.call(_0x5121c8, 'finallyLoc') &&
                this.prev < _0x5121c8.finallyLoc
              ) {
                var _0x30c4fc = _0x5121c8
                break
              }
            }
            _0x30c4fc &&
              ('break' === _0x10729b || 'continue' === _0x10729b) &&
              _0x30c4fc.tryLoc <= _0x1e9f0a &&
              _0x1e9f0a <= _0x30c4fc.finallyLoc &&
              (_0x30c4fc = null)
            var _0x4fa128 = _0x30c4fc ? _0x30c4fc.completion : {}
            return (
              (_0x4fa128.type = _0x10729b),
              (_0x4fa128.arg = _0x1e9f0a),
              _0x30c4fc
                ? ((this.method = 'next'),
                  (this.next = _0x30c4fc.finallyLoc),
                  _0x11f724)
                : this.complete(_0x4fa128)
            )
          },
          complete: function (_0xc9dae2, _0x40a66a) {
            if ('throw' === _0xc9dae2.type) {
              throw _0xc9dae2.arg
            }
            return (
              'break' === _0xc9dae2.type || 'continue' === _0xc9dae2.type
                ? (this.next = _0xc9dae2.arg)
                : 'return' === _0xc9dae2.type
                ? ((this.rval = this.arg = _0xc9dae2.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === _0xc9dae2.type &&
                  _0x40a66a &&
                  (this.next = _0x40a66a),
              _0x11f724
            )
          },
          finish: function (_0x3284d8) {
            for (
              var _0x29d4bb = this.tryEntries.length - 1;
              _0x29d4bb >= 0;
              --_0x29d4bb
            ) {
              var _0x4f885f = this.tryEntries[_0x29d4bb]
              if (_0x4f885f.finallyLoc === _0x3284d8) {
                return (
                  this.complete(_0x4f885f.completion, _0x4f885f.afterLoc),
                  _0x5a5e59(_0x4f885f),
                  _0x11f724
                )
              }
            }
          },
          catch: function (_0x2737e3) {
            for (
              var _0x2ff9c2 = this.tryEntries.length - 1;
              _0x2ff9c2 >= 0;
              --_0x2ff9c2
            ) {
              var _0x17d198 = this.tryEntries[_0x2ff9c2]
              if (_0x17d198.tryLoc === _0x2737e3) {
                var _0x3fa860 = _0x17d198.completion
                if ('throw' === _0x3fa860.type) {
                  var _0x5bc951 = _0x3fa860.arg
                  _0x5a5e59(_0x17d198)
                }
                return _0x5bc951
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (_0x55b111, _0x3c213c, _0x775c80) {
            return (
              (this.delegate = {
                iterator: _0xf815cc(_0x55b111),
                resultName: _0x3c213c,
                nextLoc: _0x775c80,
              }),
              'next' === this.method && (this.arg = void 0),
              _0x11f724
            )
          },
        }),
        _0x483bb5
      )
    }
    function _0x277ec8(
      _0x41a3c3,
      _0x2bc607,
      _0x43415e,
      _0x34916b,
      _0x16367b,
      _0x39d8d1,
      _0x3e0dae
    ) {
      try {
        var _0x5dd796 = _0x41a3c3[_0x39d8d1](_0x3e0dae),
          _0x1f7c76 = _0x5dd796.value
      } catch (_0x5f3c2e) {
        return void _0x43415e(_0x5f3c2e)
      }
      _0x5dd796.done
        ? _0x2bc607(_0x1f7c76)
        : Promise.resolve(_0x1f7c76).then(_0x34916b, _0x16367b)
    }
    _0x1d6b71.d(_0x48f7ac, 'a', function () {
      return _0x1b8618
    })
    var _0x1b8618 = (function () {
      var _0x584807,
        _0x3ef3e8 =
          ((_0x584807 = _0xee2c52().mark(function _0x5aceb0() {
            return _0xee2c52().wrap(function (_0x35a732) {
              for (;;) {
                switch ((_0x35a732.prev = _0x35a732.next)) {
                  case 0:
                    window.location.href = ''.concat(
                      'https://id.blooket.com',
                      '/logout'
                    )
                  case 1:
                  case 'end':
                    return _0x35a732.stop()
                }
              }
            }, _0x5aceb0)
          })),
          function () {
            var _0x5546b4 = this,
              _0x18c170 = arguments
            return new Promise(function (_0x22ef0c, _0x5616dc) {
              var _0x52eecf = _0x584807.apply(_0x5546b4, _0x18c170)
              function _0x3ff217(_0x14d51a) {
                _0x277ec8(
                  _0x52eecf,
                  _0x22ef0c,
                  _0x5616dc,
                  _0x3ff217,
                  _0x53bdd7,
                  'next',
                  _0x14d51a
                )
              }
              function _0x53bdd7(_0x318a84) {
                _0x277ec8(
                  _0x52eecf,
                  _0x22ef0c,
                  _0x5616dc,
                  _0x3ff217,
                  _0x53bdd7,
                  'throw',
                  _0x318a84
                )
              }
              _0x3ff217(void 0)
            })
          })
      return function () {
        return _0x3ef3e8.apply(this, arguments)
      }
    })()
  },
  eJB8: function (_0x193d0d, _0xc27ef3, _0x5897b7) {
    var _0x5920d4 = _0x5897b7('oLQb')
    'string' == typeof _0x5920d4 && (_0x5920d4 = [[_0x193d0d.i, _0x5920d4, '']])
    var _0x149729 = {
      hmr: true,
      transform: void 0,
      insertInto: void 0,
    }
    _0x5897b7('aET+')(_0x5920d4, _0x149729)
    _0x5920d4.locals && (_0x193d0d.exports = _0x5920d4.locals)
  },
  fGzD: function (_0x17fba5, _0x4b64f2, _0x4b1d3b) {
    'use strict'
    _0x4b1d3b.d(_0x4b64f2, 'b', function () {
      return _0x4d8603
    })
    _0x4b1d3b.d(_0x4b64f2, 'a', function () {
      return _0x5f0de1
    })
    var _0x1f2da1 = _0x4b1d3b('wd/R'),
      _0x444e6f = _0x4b1d3b.n(_0x1f2da1),
      _0xae29cb = {
        Monday: 'Pink Astronaut',
        Tuesday: 'Yellow Astronaut',
        Wednesday: 'Black Astronaut',
        Thursday: 'Orange Astronaut',
        Friday: 'Red Astronaut',
        Saturday: 'Brown Astronaut',
        Sunday: 'Green Astronaut',
      },
      _0x23f8d9 = [
        'New York Snow Globe',
        'London Snow Globe',
        'Japan Snow Globe',
        'Egypt Snow Globe',
        'Paris Snow Globe',
      ],
      _0x4d8603 = function (_0x721583) {
        return 'Medieval' === _0x721583
          ? [
              ['Elf', 13.4],
              ['Witch', 13.4],
              ['Wizard', 13.4],
              ['Fairy', 13.4],
              ['Slime Monster', 13.4],
              ['Jester', 9],
              ['Dragon', 9],
              ['Queen', 9],
              ['Unicorn', 5],
              ['King', 1],
            ]
          : 'Blizzard' === _0x721583
          ? [
              ['Snow Globe', 14.5],
              ['Holiday Gift', 14.5],
              ['Hot Chocolate', 14.5],
              ['Holiday Wreath', 14.5],
              ['Stocking', 14.5],
              ['Gingerbread Man', 7.1],
              ['Gingerbread House', 7.1],
              ['Reindeer', 7.1],
              ['Snowman', 5.15],
              ['Santa Claus', 1],
              [_0x23f8d9[_0x444e6f.a.utc().date() % 5], 0.05],
            ]
          : 'Wonderland' === _0x721583
          ? [
              ['Two of Spades', 15.2],
              ['Eat Me', 15],
              ['Drink Me', 15],
              ['Alice', 15],
              ['Queen of Hearts', 15],
              ['Dormouse', 6.5],
              ['White Rabbit', 6.5],
              ['Cheshire Cat', 6.5],
              ['Caterpillar', 2.5],
              ['Mad Hatter', 2.5],
              ['King of Hearts', 0.3],
            ]
          : 'Breakfast' === _0x721583
          ? [
              ['Toast', 12.5],
              ['Cereal', 12.5],
              ['Yogurt', 12.5],
              ['Breakfast Combo', 12.5],
              ['Orange Juice', 12.5],
              ['Milk', 12.5],
              ['Waffle', 9],
              ['Pancakes', 9],
              ['French Toast', 5],
              ['Pizza', 2],
            ]
          : 'Spooky' === _0x721583
          ? [
              ['Pumpkin', 18.5],
              ['Swamp Monster', 18.5],
              ['Frankenstein', 18.5],
              ['Vampire', 18.5],
              ['Zombie', 6.7],
              ['Mummy', 6.7],
              ['Caramel Apple', 6.7],
              ['Werewolf', 5.2],
              ['Ghost', 0.65],
              ['Pumpkin Cookie', 0.03],
              ['Ghost Cookie', 0.02],
            ]
          : 'Space' === _0x721583
          ? [
              ['Earth', 18.75],
              ['Meteor', 18.75],
              ['Stars', 18.75],
              ['Alien', 18.75],
              ['Planet', 10],
              ['UFO', 10],
              ['Spaceship', 4.5],
              ['Astronaut', 0.45],
              [_0xae29cb[_0x444e6f.a.utc().format('dddd')], 0.05],
            ]
          : 'Bot' === _0x721583
          ? [
              ['Lil Bot', 19.5],
              ['Lovely Bot', 19.5],
              ['Angry Bot', 19.5],
              ['Happy Bot', 19.5],
              ['Watson', 9],
              ['Buddy Bot', 9],
              ['Brainy Bot', 3.7],
              ['Mega Bot', 0.3],
            ]
          : 'Aquatic' === _0x721583
          ? [
              ['Old Boot', 15],
              ['Jellyfish', 15],
              ['Clownfish', 15],
              ['Frog', 15],
              ['Crab', 15],
              ['Pufferfish', 6.1],
              ['Blobfish', 6.1],
              ['Octopus', 6.1],
              ['Narwhal', 3],
              ['Dolphin', 3],
              ['Baby Shark', 0.5],
              ['Megalodon', 0.2],
            ]
          : 'Safari' === _0x721583
          ? [
              ['Panda', 15],
              ['Sloth', 15],
              ['Tenrec', 15],
              ['Flamingo', 15],
              ['Zebra', 15],
              ['Elephant', 7],
              ['Lemur', 7],
              ['Peacock', 7],
              ['Chameleon', 3.48],
              ['Lion', 0.5],
              ['Rainbow Panda', 0.02],
            ]
          : 'Dino' === _0x721583
          ? [
              ['Amber', 19.5],
              ['Dino Egg', 19.5],
              ['Dino Fossil', 19.5],
              ['Stegosaurus', 19.5],
              ['Velociraptor', 9],
              ['Brontosaurus', 9],
              ['Triceratops', 3.7],
              ['Tyrannosaurus Rex', 0.3],
            ]
          : 'Ice Monster' === _0x721583
          ? [
              ['Ice Bat', 19.5],
              ['Ice Bug', 19.5],
              ['Ice Elemental', 19.5],
              ['Rock Monster', 19.5],
              ['Dink', 8.5],
              ['Donk', 8.5],
              ['Bush Monster', 4.5],
              ['Yeti', 0.35],
              ['Ice Slime', 0.08],
              ['Frozen Fossil', 0.05],
              ['Ice Crab', 0.02],
            ]
          : 'Outback' === _0x721583
          ? [
              ['Dingo', 18.75],
              ['Echidna', 18.75],
              ['Koala', 18.75],
              ['Kookaburra', 18.75],
              ['Platypus', 7],
              ['Joey', 7],
              ['Kangaroo', 7],
              ['Crocodile', 3.6],
              ['Sugar Glider', 0.37],
              ['Teal Platypus', 0.03],
            ]
          : []
      }
  },
  liux: function (_0x3cd7f9, _0x1e1e97, _0x5e1c9d) {
    'use strict'
    _0x1e1e97.a = {
      Chick: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Happy Hatchers',
        color: '#ffcd05',
      },
      Chicken: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Early Birds',
        color: '#ed1c24',
      },
      Cow: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829562/Blooks/cow.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Udder Chaos',
        color: '#58595b',
      },
      Goat: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829562/Blooks/goat.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: "Goatee OG's",
        color: '#c59a74',
      },
      Horse: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829562/Blooks/horse.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Radical Racers',
        color: '#995b3c',
      },
      Pig: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Orderly Oinkers',
        color: '#f6a9cb',
      },
      Sheep: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829564/Blooks/sheep.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Wool Winners',
        color: '#414042',
      },
      Duck: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Quirky Quackers',
        color: '#4ab96d',
      },
      Alpaca: {
        url: 'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/alpaca.svg',
        mediaUrl:
          'https://media.blooket.com/image/upload/v1675381970/Blooks/alpaca.svg',
        set: 'Farm Animal',
        rarity: 'Common',
        teamName: 'Fluffy Friends',
        color: '#d4803c',
      },
    }
  },
  oLQb: function (_0x2c20cd, _0x1c79a3, _0x28b0c5) {
    ;(_0x1c79a3 = _0x2c20cd.exports = _0x28b0c5('JPst')(false)).push([
      _0x2c20cd.i,
      '.styles__correctContainer___mv52a-camelCase{display:flex;align-items:center;margin:0 5px}.styles__leftBack___11axO-camelCase{margin-left:-5px}.styles__img___VcCm_-camelCase{-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__mathField___1eXkC-camelCase{cursor:default}',
      '',
    ])
    _0x1c79a3.locals = {
      correctContainer: 'styles__correctContainer___mv52a-camelCase',
      leftBack: 'styles__leftBack___11axO-camelCase',
      img: 'styles__img___VcCm_-camelCase',
      mathField: 'styles__mathField___1eXkC-camelCase',
    }
  },
  pMTK: function (_0x2b824c, _0x457904, _0x17b25a) {
    'use strict'
    var _0x1937cc = _0x17b25a('MDrD')
    _0x457904.a = function (_0xeb6a20) {
      return _0x1937cc.a[_0xeb6a20] ? _0x1937cc.a[_0xeb6a20].rarity : 'Common'
    }
  },
  qspi: function (_0x268fe1, _0x4c369b, _0x67f45e) {
    'use strict'
    var _0x5c2539,
      _0x37b9bc,
      _0x14c53c = _0x67f45e('74sb'),
      _0x2c21a9 = ['basil', 'gold', 'crypto'],
      _0x7553b6 = function (_0x592167) {
        var _0x5b4c6f = false
        _0x2c21a9.forEach(function (_0x26d4b7) {
          _0x592167.toLowerCase().includes(_0x26d4b7) && (_0x5b4c6f = true)
        })
        _0x5b4c6f &&
          (Object(_0x14c53c.o)(),
          (window.location.href = 'https://www.blooket.com'))
      }
    window.alert = _0x7553b6
    window.prompt = _0x7553b6
    window.confirm = _0x7553b6
    _0x5c2539 = new URL(window.location.href).hostname
    _0x37b9bc = false
    ;['blooket.com', 'packcomputing.com', 'localhost', '127.0.0.1'].forEach(
      function (_0x3b5a14) {
        _0x5c2539.endsWith(_0x3b5a14) && (_0x37b9bc = true)
      }
    )
    _0x37b9bc ||
      (window.location.href = ''.concat('https://www.blooket.com', '/terms'))
    ;(function () {
      var _0x3999ad = false
      window.blooketUtility && (_0x3999ad = true)
      localStorage.getItem('blooket-utility') && (_0x3999ad = true)
      localStorage.removeItem('blooket-utility')
      _0x3999ad &&
        (window.location.href = ''.concat('https://www.blooket.com', '/terms'))
      delete window.blooketUtility
      delete window['_fetch']
      var _0x917a = document.createElement('iframe')
      _0x917a.style.display = 'none'
      document.body.appendChild(_0x917a)
      var _0x1ae8ae = _0x917a.contentWindow
      window.fetch = _0x1ae8ae.fetch
      XMLHttpRequest.prototype.open = _0x1ae8ae.XMLHttpRequest.prototype.open
      XMLHttpRequest.prototype.send = _0x1ae8ae.XMLHttpRequest.prototype.send
      String.prototype.concat = _0x1ae8ae.String.prototype.concat
      window.ontouchstart = null
      window.onkeydown = null
    })()
  },
  sfIM: function (_0x45f138, _0x164908, _0x3054f1) {
    'use strict'
    _0x164908.a = [
      'Chick',
      'Chicken',
      'Cow',
      'Goat',
      'Horse',
      'Pig',
      'Sheep',
      'Duck',
      'Alpaca',
      'Dog',
      'Cat',
      'Rabbit',
      'Goldfish',
      'Hamster',
      'Turtle',
      'Kitten',
      'Puppy',
      'Bear',
      'Moose',
      'Fox',
      'Raccoon',
      'Squirrel',
      'Owl',
      'Hedgehog',
      'Deer',
      'Wolf',
      'Beaver',
      'Tiger',
      'Orangutan',
      'Cockatoo',
      'Parrot',
      'Anaconda',
      'Jaguar',
      'Macaw',
      'Toucan',
      'Panther',
      'Capuchin',
      'Gorilla',
      'Hippo',
      'Rhino',
      'Giraffe',
      'Snowy Owl',
      'Polar Bear',
      'Arctic Fox',
      'Baby Penguin',
      'Penguin',
      'Arctic Hare',
      'Seal',
      'Walrus',
    ]
  },
})
