var characters = [
    {
        name: '砂華姬',
        specie: '獅子女',
        skill: [],
        level: 25,
        attributes: {
            hp: 64,
            strength:  57, skill:   61, speed:  56,
            defense:   50, wisdom:  64, luck:   20
        }
    }, {
        name: '砂華姬',
        specie: '獅子女',
        skill: [],
        level: 1,
        attributes: {
            hp: 35,
            strength:  22, skill:   24, speed:  21,
            defense:   18, wisdom:  23, luck:   15
        }
    }, {
        name: '風車',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 56,
            strength:  49, skill:   50, speed:  51,
            defense:   52, wisdom:  44, luck:   20
        }
    }, {
        name: '霧',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength:  46, skill:   50, speed:  46,
            defense:   43, wisdom:  42, luck:   14
        }
    }, {
        name: '秋寵',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 54,
            strength:  48, skill:   48, speed:  53,
            defense:   46, wisdom:  42, luck:   20
        }
    }, {
        name: '花梨',
        id: '花梨00001',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 55,
            strength:  48, skill:   47, speed:  48,
            defense:   46, wisdom:  48, luck:   17
        }
    }, {
        name: '琉璃草',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 56,
            strength:  50, skill:   49, speed:  52,
            defense:   46, wisdom:  42, luck:   18
        }
    }, {
        name: '片栗',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 58,
            strength:  47, skill:   51, speed:  52,
            defense:   45, wisdom:  43, luck:   19
        }
    }, {
        name: '芝麻',
        specie: '小烏丸',
        skill: ['不反太刀．壹'],
        level: 1,
        attributes: {
            hp: 33,
            strength:  17, skill:   16, speed:  14,
            defense:   13, wisdom:  11, luck:   9
        }
    }, {
        name: '小尾',
        specie: '天狗',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength:  36, skill:   47, speed:  50,
            defense:   32, wisdom:  50, luck:   21
        }
    }, {
        name: '芝麻',
        specie: '天狗',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength:  37, skill:   48, speed:  50,
            defense:   30, wisdom:  50, luck:   16
        }
    }, {
        name: '雛菊',
        id: '雛菊00000001',
        specie: '天狗',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength:  38, skill:   47, speed:  50,
            defense:   33, wisdom:  51, luck:   19
        }
    }, {
        name: '雛菊',
        specie: '天狗',
        skill: ['法術增幅．壹'],
        combine: {
            count: 1,
            parents: {
                sun:  '雛菊00000001',
                moon: '花梨00001'
            }
        },
        element: 'fire',
        level: 1,
        attributes: {
            hp: 29,
            strength:  13, skill:   15, speed:  16,
            defense:   15, wisdom:  19, luck:   10
        }
    }, {
        name: '石楠',
        specie: '蜥蝪丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 62,
            strength:  53, skill:   50, speed:  52,
            defense:   48, wisdom:  47, luck:   16
        }
    }, {
        name: '金雀',
        specie: '白兔',
        skill: [],
        level: 25,
        attributes: {
            hp: 56,
            strength:  47, skill:   50, speed:  51,
            defense:   43, wisdom:  47, luck:   20
        }
    }, {
        name: '秋葵',
        specie: '天女',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength:  38, skill:   46, speed:  49,
            defense:   35, wisdom:  45, luck:   22
        }
    }, {
        name: '海凝',
        specie: '天女',
        skill: [],
        level: 25,
        attributes: {
            hp: 51,
            strength:  39, skill:   43, speed:  44,
            defense:   32, wisdom:  47, luck:   20
        }
    }, {
        name: '鐵蘭',
        specie: '天女',
        skill: [],
        level: 1,
        attributes: {
            hp: 25,
            strength:  12, skill:   12, speed:  13,
            defense:   13, wisdom:  15, luck:   13
        }
    }, {
        name: '山百合',
        specie: '織姬',
        skill: [],
        level: 25,
        attributes: {
            hp: 55,
            strength:  37, skill:   50, speed:  45,
            defense:   36, wisdom:  55, luck:   25
        }
    }, {
        name: '菲菲',
        specie: '織姬',
        skill: [],
        level: 25,
        attributes: {
            hp: 56,
            strength:  38, skill:   52, speed:  48,
            defense:   41, wisdom:  55, luck:   24
        }
    }, {
        name: '風車',
        specie: '邪鬼',
        skill: [],
        level: 25,
        attributes: {
            hp: 64,
            strength:  53, skill:   44, speed:  43,
            defense:   45, wisdom:  43, luck:   20
        }
    },
    //
    {
        name: '霧',
        specie: '小烏丸',
        skill: [],
        level: 25,
        attributes: {
            hp: 52,
            strength: 46,
            skill: 50,
            speed: 46,
            defense: 43,
            wisdom: 42,
            luck: 14
        }
    },
    {
        name: '金雀',
        specie: '白兔',
        skill: [],
        level: 25,
        attributes: {
            hp: 56,
            strength: 47,
            skill: 50,
            speed: 51,
            defense: 43,
            wisdom: 47,
            luck: 20
        }
    },
    {
        name: '鬼燈',
        specie: '天女',
        skill: ['弓閃避 皆傳'],
        level: 25,
        attributes: {
            hp: 56,
            strength: 47,
            skill: 50,
            speed: 51,
            defense: 43,
            wisdom: 47,
            luck: 20
        }
    }
];