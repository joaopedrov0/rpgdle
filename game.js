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
        "Dragão", // 6
        "Desconhecido", // 7
        "Demônio", // 8
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
        "Entidade", // 20
        "Bardo", // 21
        "Arqueólogo", // 22
        "Bruxo", // 23
        "Desconhecido", // 24
        "Ferreiro", // 25
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
        "Desconhecido", // 21
    ],
    status: [
        "Vivo", // 0
        "Morto", // 1
        "Desconhecido", // 2
        "Não se aplica", // 3
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
        class: [19],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Irene.png",
        code: "1-0-19-10-0-1"
    },
    Isabelle: {
        name: "Isabelle",
        gender: 1,
        race: 6,
        class: [15, 21],
        local: 15,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Isabelle.png",
        code: "1-6-15.21-15-0-1"
    },
    Ivor: {
        name: "Ivor",
        gender: 0,
        race: 0,
        class: [3],
        local: 16,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Ivor.png",
        code: "0-0-3-16-0-0"
    },
    JackCooper: {
        name: "Jack Cooper",
        gender: 0,
        race: 0,
        class: [0, 23],
        local: 14,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Jack_Cooper.png",
        code: "0-0-3-16-0-0"
    },
    James: {
        name: "James",
        gender: 0,
        race: 0,
        class: [16],
        local: 11,
        age: "Desconhecido",
        status: 2,
        classification: 1,
        token: "James.png",
        code: "0-0-16-11-2-1"
    },
    Jane: {
        name: "Jane",
        gender: 1,
        race: 0,
        class: [1, 16],
        local: 11,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Jane.png",
        code: "1-0-1.16-11-0-1"
    },
    Lina: {
        name: "Lina",
        gender: 1,
        race: 0,
        class: [1],
        local: 14,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Lina.png",
        code: "1-0-1-14-0-0"
    },
    LordeDoSubmundo: {
        name: "Lorde do Submundo",
        gender: 0,
        race: 7,
        class: [24],
        local: 4,
        age: "Desconhecido",
        status: 2,
        classification: 1,
        token: "Lorde_do_submundo.png",
        code: "0-7-24-4-2-1"
    },
    Lucas: {
        name: "Lucas",
        gender: 0,
        race: 0,
        class: [13],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Lucas.png",
        code: "0-0-13-10-0-0"
    },
    Magnus: {
        name: "Magnus",
        gender: 0,
        race: 0,
        class: [0, 10],
        local: 9,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Magnus.png",
        code: "0-0-0.10-9-0-0"
    },
    Mary: {
        name: "Mary",
        gender: 1,
        race: 0,
        class: [1, 16],
        local: 11,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Mary.png",
        code: "1-0-1.16-11-0-1"
    },
    Matiza: {
        name: "Matiza",
        gender: 0,
        race: 0,
        class: [9, 25],
        local: 13,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Matiza.png",
        code: "0-0-9.25-13-0-0"
    },
    Rebeca: {
        name: "Rebeca",
        gender: 1,
        race: 0,
        class: [4],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Rebeca.png",
        code: "1-0-4-21-0-0"
    },
    Sabnock: {
        name: "Sabnock",
        gender: 0,
        race: 0,
        class: [24],
        local: 21,
        age: "Desconhecido",
        status: 2,
        classification: 0,
        token: "Sabnock.png",
        code: "0-0-24-21-2-0"
    },
    Spamton: {
        name: "Spamton",
        gender: 0,
        race: 7,
        class: [15],
        local: 12,
        age: "Desconhecido",
        status: 2,
        classification: 0,
        token: "Spamton.png",
        code: "0-7-15-12-2-0"
    },
    Spike: {
        name: "Spike (Uitstli)",
        gender: 2,
        race: 8,
        class: [15],
        local: 12,
        age: "Desconhecido",
        status: 3,
        classification: 2,
        token: "Spike.png",
        code: "2-8-15-12-3-2"
    },
    Tyrion: {
        name: "Tyrion",
        gender: 0,
        race: 0,
        class: [6, 7],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Tyrion.png",
        code: "0-0-6.7-10-0-0"
    },
    Willian: {
        name: "Willian",
        gender: 0,
        race: 0,
        class: [2],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Willian.png",
        code: "0-0-2-21-0-1"
    },
    Yareth: {
        name: "Yareth",
        gender: 0,
        race: 0,
        class: [3],
        local: 2,
        age: "27",
        status: 0,
        classification: 0,
        token: "Yareth.png",
        code: "0-0-3-2-0-0"
    },
    Zotikotita: {
        name: "Zotikotita",
        gender: 3,
        race: 1,
        class: [20],
        local: 21,
        age: "Desconhecido",
        status: 3,
        classification: 1,
        token: "Zotikotita.png",
        code: "3-1-20-21-3-1"
    },
    Avna: {
        name: "Avna",
        description: "Os dez braços direitos do Lorde",
        token: "Avna.png"
    },
    Bellus: { // ! token ta como .jpg
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