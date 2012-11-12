var ZG = ZG || {};

ZG.base = {};

/** 基本種 **/

ZG.base['小烏丸'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0: 	{ hp: 26, strength: 13, skill: 14, speed: 13, defense: 11, wisdom:  9, luck:  9 },
	lv1Min: { hp: 27, strength: 14, skill: 15, speed: 14, defense: 12, wisdom: 10, luck:  9 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['天狗'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  0, wisdom:  1, luck:  0 },
	lv0:    { hp: 24, strength:  9, skill: 13, speed: 13, defense: 11, wisdom: 13, luck: 10 },
	lv1Min: { hp: 25, strength: 10, skill: 14, speed: 14, defense: 11, wisdom: 14, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['天女'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  0, wisdom:  1, luck:  0 },
	lv0: 	{ hp: 24, strength: 10, skill: 11, speed: 11, defense: 12, wisdom: 13, luck: 12 },
	lv1Min: { hp: 25, strength: 11, skill: 12, speed: 12, defense: 12, wisdom: 14, luck: 12 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['白兔'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 25, strength: 12, skill: 14, speed: 14, defense: 10, wisdom: 10, luck:  9 },
	lv1Min: { hp: 26, strength: 13, skill: 15, speed: 15, defense: 11, wisdom: 11, luck:  9 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['惡鬼'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 26, strength: 14, skill: 13, speed: 12, defense: 11, wisdom:  9, luck: 10 },
	lv1Min: { hp: 27, strength: 15, skill: 14, speed: 13, defense: 12, wisdom: 10, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['狛犬'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 28, strength: 13, skill: 13, speed: 13, defense: 10, wisdom:  8, luck:  9 },
	lv1Min: { hp: 29, strength: 14, skill: 14, speed: 14, defense: 11, wisdom:  9, luck:  9 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

/** 基本亞種 **/

ZG.base['蜥蝪丸'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 28, strength: 14, skill: 15, speed: 14, defense: 12, wisdom:  9, luck: 10 },
	lv1Min: { hp: 29, strength: 15, skill: 16, speed: 15, defense: 13, wisdom: 10, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['織姬'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 26, strength:  9, skill: 13, speed: 12, defense: 11, wisdom: 15, luck: 13 },
	lv1Min: { hp: 27, strength: 10, skill: 14, speed: 13, defense: 12, wisdom: 16, luck: 13 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['黒兎'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 27, strength: 14, skill: 14, speed: 15, defense: 10, wisdom: 11, luck: 10 },
	lv1Min: { hp: 28, strength: 15, skill: 15, speed: 16, defense: 11, wisdom: 12, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['狗賓'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0: 	{ hp: 28, strength:  9, skill: 15, speed: 15, defense: 10, wisdom: 14, luck: 10 },
	lv1Min: { hp: 29, strength: 10, skill: 16, speed: 16, defense: 11, wisdom: 15, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}
ZG.base['希瑟'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 29, strength: 14, skill: 14, speed: 12, defense: 11, wisdom:  9, luck: 11 },
	lv1Min: { hp: 30, strength: 15, skill: 15, speed: 13, defense: 12, wisdom: 10, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['邪鬼'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 29, strength: 14, skill: 14, speed: 14, defense: 12, wisdom: 10, luck: 10 },
	lv1Min: { hp: 30, strength: 15, skill: 15, speed: 15, defense: 13, wisdom: 11, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

/** 上位種 **/

ZG.base['小狐丸'] = {
    cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 27, strength: 15, skill: 16, speed: 14, defense: 12, wisdom: 11, luck: 11 },
	lv1Min: { hp: 28, strength: 16, skill: 17, speed: 15, defense: 13, wisdom: 10, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['吉祥天'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  0 },
	lv0:    { hp: 28, strength: 14, skill: 14, speed: 12, defense: 12, wisdom: 14, luck: 11 },
	lv1Min: { hp: 29, strength: 15, skill: 15, speed: 13, defense: 13, wisdom: 15, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['飯綱'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0: 	{ hp: 27, strength: 15, skill: 15, speed: 16, defense: 11, wisdom: 14, luck: 10 },
	lv1Min: { hp: 28, strength: 16, skill: 16, speed: 17, defense: 12, wisdom: 13, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}
ZG.base['烏天狗'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 28, strength:  9, skill: 16, speed: 15, defense: 11, wisdom: 16, luck: 11 },
	lv1Min: { hp: 29, strength: 10, skill: 17, speed: 16, defense: 12, wisdom: 17, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['貓又'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 29, strength: 15, skill: 15, speed: 13, defense: 12, wisdom: 11, luck: 10 },
	lv1Min: { hp: 30, strength: 16, skill: 16, speed: 14, defense: 13, wisdom: 12, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['羅剎'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 27, strength: 16, skill: 15, speed: 14, defense: 13, wisdom: 10, luck: 11 },
	lv1Min: { hp: 28, strength: 17, skill: 16, speed: 15, defense: 14, wisdom: 11, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

/** 上位亞種 **/

ZG.base['座敷童子'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 28, strength: 14, skill: 15, speed: 14, defense: 12, wisdom:  9, luck: 10 },
	lv1Min: { hp: 29, strength: 15, skill: 16, speed: 15, defense: 13, wisdom: 10, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['雪女'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 29, strength: 14, skill: 14, speed: 14, defense: 12, wisdom: 10, luck: 10 },
	lv1Min: { hp: 30, strength: 15, skill: 15, speed: 15, defense: 13, wisdom: 11, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['地精'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0: 	{ hp: 28, strength:  9, skill: 15, speed: 15, defense: 10, wisdom: 14, luck: 10 },
	lv1Min: { hp: 29, strength: 10, skill: 16, speed: 16, defense: 11, wisdom: 15, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}
ZG.base['古椿'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 29, strength: 14, skill: 14, speed: 12, defense: 11, wisdom:  9, luck: 11 },
	lv1Min: { hp: 30, strength: 15, skill: 15, speed: 13, defense: 12, wisdom: 10, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['仙狸'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 27, strength: 14, skill: 14, speed: 15, defense: 10, wisdom: 11, luck: 10 },
	lv1Min: { hp: 28, strength: 15, skill: 15, speed: 16, defense: 11, wisdom: 12, luck: 10 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

ZG.base['茨木童子'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 26, strength:  9, skill: 13, speed: 12, defense: 11, wisdom: 15, luck: 13 },
	lv1Min: { hp: 27, strength: 10, skill: 14, speed: 13, defense: 12, wisdom: 16, luck: 13 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
}

/** 最上級種 **/

ZG.base['髭切'] = {}
ZG.base['九尾'] = {}
ZG.base['閻魔'] = {}
ZG.base['鳳凰'] = {}

/** 舶來種 **/

ZG.base['吸血姬'] = {}
ZG.base['戰乙女'] = {}
ZG.base['獅子女'] = {
	cap:    { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	growth: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
	lv0:    { hp: 30, strength: 14, skill: 16, speed: 16, defense: 15, wisdom: 17, luck: 10 },
	lv1Min: { hp: 32, strength: 16, skill: 17, speed: 17, defense: 15, wisdom: 18, luck: 11 },
	lv0Cap: { hp:  1, strength:  1, skill:  1, speed:  1, defense:  1, wisdom:  1, luck:  1 },
};
ZG.base['死神'] = {}
ZG.base['墮天使'] = {}
ZG.base['齊天大聖'] = {}

/** 神話 **/

ZG.base['月讀'] = {}
ZG.base['火之迦具土'] = {}
ZG.base['建御雷'] = {}
ZG.base['素戔鳴'] = {}
ZG.base['思兼'] = {}
ZG.base['天照'] = {}













