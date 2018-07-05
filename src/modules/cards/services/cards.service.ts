import { Injectable } from '@angular/core';

export class Card {
    name: string;
    cost: string[];
    types: string[];
    subtypes: string[];
    thumbnail: string;
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
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-w.png",
                            "./assets/images/cost-u.png",
                        ],
                        types: ["Legendary", "Creature"],
                        subtypes: ["Spirit", "Cleric"],
                        thumbnail: "./assets/images/geist.jpg"
                    },
                    {
                        name: "Apothecary Geist",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-w.png",
                        ],
                        types: ["Creature"],
                        subtypes: ["Spirit"],
                        thumbnail: "./assets/images/apothecary-geist.png"
                    },
                    {
                        name: "Geist Snatch",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-u.png",
                            "./assets/images/cost-u.png",
                        ],
                        types: ["Instant"],
                        subtypes: ["Spirit", "Cleric"],
                        thumbnail: "./assets/images/geist-snatch.jpg"
                    },
                    {
                        name: "Howlgeist",
                        cost: [
                            "./assets/images/cost-1.png",
                            "./assets/images/cost-g.png",
                        ],
                        types: ["Creature"],
                        subtypes: ["Spirit", "Wolf"],
                        thumbnail: "./assets/images/howlgeist.jpg"
                    },
                    {
                        name: "Geistcatcher's Rig",
                        cost: [
                            "./assets/images/cost-1.png"
                        ],
                        types: ["Artifact", "Creature"],
                        subtypes: ["Construct"],
                        thumbnail: "./assets/images/geistcatchers-rig.jpg"
                    },
                ].filter(c => c.name.indexOf(query) > -1));
            }, 1000);
        });
    }
}
