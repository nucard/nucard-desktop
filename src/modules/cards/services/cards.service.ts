import { Injectable } from '@angular/core';

export class Card {
    name: string;
    rarity: string;
    cost: string[];
    types: string[];
    subtypes: string[];
    thumbnail: string;
    text?: string;
    printings?: CardPrinting[];
}

export class CardPrinting {
    artist?: string;
    collectorsNumber?: string;
    flavorText?: string;
    image: string;
    icon?: string;
    setCode?: string;
    viewOn?: ExternalInfoProvider[] = [];
    buyAt?: ExternalInfoProvider[] = [];
}

export class ExternalInfoProvider {
    url: string;
    icon: string;
    name: string;
    price?: string;
}

@Injectable({ providedIn: 'root' })
export class CardsService {
    async search(query: string): Promise<Card[]> {
        return new Promise<Card[]>((resolve, reject) => {
            if (!query || query.length < 2) {
                resolve([]);
                return;
            }
            setTimeout(() => {
                resolve([
                    {
                        name: "Geist of Saint Traft",
                        rarity: "Mythic Rare",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-w.png",
                            "./assets/images/cost-u.png",
                        ],
                        types: ["Legendary", "Creature"],
                        subtypes: ["Spirit", "Cleric"],
                        thumbnail: "./assets/images/geist.jpg",
                        text: `Hexproof _(This creature can't be the target of spells or abilities your opponents control.)_

Whenever Geist of Saint Traft attacks, put a 4/4 white Angel creature token with flying on the battlefield tapped and attacking.
Exile that token at the end of combat.`,
                        printings: [
                            {
                                artist: 'Igor Kieryluk',
                                collectorsNumber: "213",
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=247236&type=card',
                                icon: 'http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=ISD&size=medium&rarity=M',
                                setCode: 'ISD',
                                viewOn: [
                                    {
                                        name: 'Gatherer',
                                        icon: './assets/images/gatherer.ico',
                                        url: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=247236',
                                    },
                                    {
                                        name: 'magiccards.info',
                                        icon: './assets/images/magiccardsinfo.ico',
                                        url: 'https://magiccards.info/isd/en/213.html',
                                    }
                                ]
                            },
                            {
                                artist: 'Daarken',
                                collectorsNumber: "1",
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409577&type=card',
                                icon: 'http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=DDQ&size=medium&rarity=M',
                                setCode: 'DDQ',
                                viewOn: [
                                    {
                                        name: 'Gatherer',
                                        icon: './assets/images/gatherer.ico',
                                        url: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=409577',
                                    },
                                    {
                                        name: 'magiccards.info',
                                        icon: './assets/images/magiccardsinfo.ico',
                                        url: 'https://magiccards.info/ddq/en/1.html'
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        name: "Apothecary Geist",
                        rarity: "Common",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-w.png",
                        ],
                        types: ["Creature"],
                        subtypes: ["Spirit"],
                        thumbnail: "./assets/images/apothecary-geist.png",
                        printings: [
                            {
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409740&type=card',
                            }
                        ]
                    },
                    {
                        name: "Geist Snatch",
                        rarity: "Common",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-u.png",
                            "./assets/images/cost-u.png",
                        ],
                        types: ["Instant"],
                        subtypes: ["Spirit", "Cleric"],
                        thumbnail: "./assets/images/geist-snatch.jpg",
                        printings: [
                            {
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240021&type=card'
                            }
                        ]
                    },
                    {
                        name: "Howlgeist",
                        rarity: "Uncommon",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-g.png",
                        ],
                        types: ["Creature"],
                        subtypes: ["Spirit", "Wolf"],
                        thumbnail: "./assets/images/howlgeist.jpg",
                        text: `Creatures with power less than Howlgeist's power can't block it.

Undying _(When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield under its owner's control with a +1/+1 counter on it.)_`,
                        printings: [
                            {
                                artist: "David Rapoza",
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240102&type=card',
                            }
                        ]
                    },
                    {
                        name: "Geistcatcher's Rig",
                        rarity: "Rare",
                        cost: [
                            "./assets/images/cost-1.png"
                        ],
                        types: ["Artifact", "Creature"],
                        subtypes: ["Construct"],
                        thumbnail: "./assets/images/geistcatchers-rig.jpg",
                        printings: [
                            {
                                image: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=234445&type=card'
                            }
                        ]
                    },
                ].filter(c => c.name.indexOf(query) > -1));
            }, 1000);
        });
    }
}
