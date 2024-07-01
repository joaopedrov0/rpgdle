const refProps = {
    gender: [
        "Homem", // 0
        "Mulher",  // 1
        "Indefinido", // 2
        "Neutro" // 3
    ],
    race: [
        "Humano", // 0
        "Divindade", // 1
        "Tiefling", // 2
        "Elfo", // 3
        "Meio-elfo", // 4
        "Draconato", // 5
    ],
    class: [
        "Guerreiro", // 0
        "Ladino", // 1
        "Paladino", // 2
        "Mago", // 3
        "Feiticeiro", // 4
        "Alquimista", // 5
        "Encantador", // 6
        "Druida", // 7
        "Monge", // 8
        "Bárbaro", // 9
        "Político", // 10
        "Bibliotecário", // 11
        "Taverneiro", // 12
        "Caçador", // 13
        "Pescador", // 14
        "Criatura", // 15
        "Pirata", // 16
        "Clérigo", // 17
        "Comerciante", // 18
        "Curandeiro", // 19
        "Entidade","" // 20
    ],
    local: [
        "Farron", // 0
        "Eagle", // 1
        "Vale dos Dolvys", // 2
        "LonLon", // 3
        "Local do Acidente", // 4
        "Sanctus", // 5
        "Montanha da Morte", // 6
        "Wezer", // 7
        "Titânia", // 8
        "Urgressus", // 9
        "Pípiltin", // 10
        "Haghnark", // 11
        "Mictlan", // 12
        "Metalurgis", // 13
        "Yharnam", // 14
        "Carvalho Negro", // 15
        "Piphet", // 16
        "Cadeia do Gigante", // 17
        "Monte Kali", // 18
        "Altus Plato", // 19
        "Kataha", // 20
    ],
    status: [
        "Vivo", // 0
        "Morto", // 1
        "Desconhecido", // 2
    ],
    classification: [
        "Player", // 0
        "NPC", // 1
        "Monstro", // 2
    ],
}

const characters = {
    Astaroth: {
        name: "Astaroth",
        gender: 0,
        race: 5,
        class: [0, 4],
        local: 4,
        age: "17",
        status: 0,
        classification: 0,
        token: "Astaroth.png",
        code: "0-5-0.4-4-0-0"
    },
    Baltazar: {
        name: "Baltazar",
        gender: 0,
        race: 2,
        class: [2],
        local: 8,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Baltazar.png",
        code: "0-2-2-8-0-0"
    },
    Cadman: {
        name: "Cadman",
        gender: 0,
        race: 0,
        class: [18],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Cadman.png",
        code: "0-0-18-10-0-1"
    },
    Diego: {
        name: "Diego",
        gender: 0,
        race: 0,
        class: [12],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Diego.png",
        code: "0-0-12-10-0-1"
    },
    Dorian: {
        name: "Dorian",
        gender: 0,
        race: 0,
        class: [7, 19],
        local: 10,
        age: "Desconhecido",
        status: 2,
        classification: 0,
        token: "Dorian.png",
        code: "0-0-7.19-10-2-0"
    },
    Hakon: {
        name: "Hakon",
        gender: 0,
        race: 0,
        class: [3, 5, 6],
        local: 10,
        age: "Desconhecido",
        status: 1,
        classification: 1,
        token: "Hakon.png",
        code: "0-0-3.5.6-10-1-1"
    },
    Henri: {
        name: "Henri",
        gender: 0,
        race: 0,
        class: [0, 16],
        local: 11,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Hakon.png",
        code: "0-0-0.16-11-0-1"
    },
    Irene: {
        name: "Irene",
        gender: 1,
        race: 0,
        class: [0, 16],
        local: 11,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Hakon.png",
        code: "0-0-0.16-11-0-1"
    },
    Isabelle: {
        name: "Isabelle",
        description: "A barda dracônica",
        token: "Isabelle.png"
    },
    Ivor: {
        name: "Ivor",
        description: "O mago de Piphet",
        token: "Ivor.png"
    },
    JackCooper: {
        name: "Jack Cooper",
        description: "O caçador de Yharnam",
        token: "Jack_Cooper.png"
    },
    James: {
        name: "James",
        description: "O capitão",
        token: "James.png"
    },
    Jane: {
        name: "Jane",
        description: "A pirata",
        token: "Jane.png"
    },
    Lina: {
        name: "Lina",
        description: "A ladina de ???",
        token: "Lina.png"
    },
    LordeDoSubmundo: {
        name: "Lorde do Submundo",
        description: "O Lorde do Submundo",
        token: "Lorde_do_submundo.png"
    },
    Lucas: {
        name: "Lucas",
        description: "O caçador de Pípiltin",
        token: "Lucas.png"
    },
    Magnus: {
        name: "Magnus",
        description: "O Rei de Urgressus",
        token: "Magnus.png"
    },
    Mary: {
        name: "Mary",
        description: "A pirata pistoleira",
        token: "Mary.png"
    },
    Matiza: {
        name: "Matiza",
        description: "O campeão da velha guarda",
        token: "Matiza.png"
    },
    Rebeca: {
        name: "Rebeca",
        description: "A feiticeira",
        token: "Rebeca.png"
    },
    Sabnock: {
        name: "Sabnock",
        description: "???",
        token: "Sabnock.png"
    },
    Spamton: {
        name: "Spamton",
        description: "O familiar de Jack Cooper",
        token: "Spamton.png"
    },
    Spike: {
        name: "Spike",
        description: "Demônio de Mictlan",
        token: "Spike.png"
    },
    Tyrion: {
        name: "Tyrion",
        description: "O encantador de Pípiltin",
        token: "Tyrion.png"
    },
    Willian: {
        name: "Willian",
        description: "O paladino misterioso",
        token: "Willian.png"
    },
    Yareth: {
        name: "Yareth",
        description: "O mago de sangue",
        token: "Yareth.png"
    },
    Zotikotita: {
        name: "Zotikotita",
        description: "A Entidade da Vida",
        token: "Zotikotita.png"
    },
    Avna: {
        name: "Avna",
        description: "Os dez braços direitos do Lorde",
        token: "Avna.png"
    },
    Bellus: {
        name: "Bellus",
        description: "A máscara de Celestia",
        token: "Bellus.jpg"
    },
    Berriel: {
        name: "Berriel",
        description: "O demônio brincalhão",
        token: "Berrial.png"
    },
    Boris: {
        name: "Boris",
        description: "O Capitão Brasil",
        token: "Boris.png"
    },
    Luke: {
        name: "Luke",
        description: "O homem que não faz flexão, ele empurra a terra para baixo",
        token: "Luke.png"
    },
    Maria: {
        name: "Maria",
        description: "A Ladina",
        token: "Maria.png"
    },
    Niberius: {
        name: "Niberius",
        description: "O paladino da vingança",
        token: "Pai_do_Arth.png"
    },
    RhannyGallahar: {
        name: "Rhanny Gallahar",
        description: "A prodígia de Pípiltin",
        token: "Rhanny Gallahar.png"
    },
    Sif: {
        name: "Sif",
        description: "???",
        token: "Sif.png"
    },
    Callan: {
        name: "Callan",
        description: "???",
        token: "Callan.png"
    },
    Emma: {
        name: "Emma",
        description: "A Mestra Arcana de Metalurgis",
        token: "Emma.png"
    },
    Volga: {
        name: "Volga",
        description: "O Rei dos Dragões",
        token: "Volga.png"
    },
    Alduim: {
        name: "Alduim",
        description: "O Dragão Branco Ancião",
        token: "Alduim.png"
    },
    Niti: {
        name: "Niti",
        description: "A Guardiã da Justiça",
        token: "Niti.png"
    },
    Nayahath: {
        name: "Nayahath",
        description: "A Entidade do Arcanismo",
        token: "Nayahath.png"
    },
    Kataha: {
        name: "Kataha",
        description: "A Mestra das Lâminas",
        token: "Kataha.png"
    },
    Parvatam: {
        name: "Parvatam",
        description: "O Guardião das Montanhas",
        token: "Parvatam.png"
    },
    Acalhueltecani: {
        name: "Acalhueltecani",
        description: "O Guia de Mictlan",
        token: "Acalhueltecani.png"
    },
    Illidan: {
        name: "Illidan",
        description: "O elfo que finalizou o Volga",
        token: "Illidan.png"
    },
    Tyrania: {
        name: "Tyrania",
        description: "O Demônio de Mictlan",
        token: "Tyrania.png"
    },
    Laura: {
        name: "Laura",
        description: "A bibliotecária de Pípiltin",
        token: "Laura.png"
    },
    Nosferato: {
        name: "Nosferato",
        description: "O alquimista de Pípiltin",
        token: "Nosferato.png"
    },
    Syneidisis: {
        name: "Syneídisis",
        description: "O Ego",
        token: "Syneídisis.png"
    },
    Joana: {
        name: "Joana",
        description: "A curandeira de Pípiltin",
        token: "Joana.png"
    },
    Wallace: {
        name: "Wallace",
        description: "???",
        token: "Wallace.png"
    }
}