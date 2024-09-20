export class CharacterDetails {
    biography: Biography;
    stats: Array<Stats>;
    skills: Array<Skills>;
    passifs: Array<Passifs>;
    constellations: Array<Constellations>;
    materials:Array<Materials>;
    weapons: Array<Weapons>;
    artefacts: Array<Artefacts>;
    teams: Array<Teams>;
}

export class Biography {
    name: string;
    rarety: string;
    region: string;
    weapon: string;
    description: string;
}

export class Stats {
    column: Column[];
    value: Array<Value>
}

export class Column {
   niveau: Number
   hp: number;
   atk: number;
   def: number;
   tc: string;
   dgc: string;
}

export class Value {
    level: Number
    hp: number;
    atk: number;
    def: number;
    tc: string;
    dgc: string; 
}

export class Skills {
    icon: string;
    type: string;
    name: string;
    description: string;
}

export class Passifs {
    icon: string;
    type: string;
    name: string;
    description: string;
}

export class Constellations {
    icon: string;
    type: string;
    name: string;
    description: string;
}

export class Materials {
    level: number;
    picture: Array<Picture>
}

export class Picture {
  path: string;
  alt: string;
}

export class Weapons {
   icon: string;
   name: string;
   description: string;
}

export class Artefacts {
    icon: string;
    name: string;
    description: string;
}

export class Teams {
    name: string;
    characters: Array<Characters>
}

export class Characters {
    path: string;
    alt: string;
}