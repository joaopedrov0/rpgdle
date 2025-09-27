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
        "Gerity", // 22
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
        gender: 1,
        race: 7,
        class: [24],
        local: 4,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Avna.png",
        code: "1-7-24-4-0-1"
    },
    Bellus: { // ! token ta como .jpg
        name: "Bellus",
        gender: 1,
        race: 7,
        class: [24],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Bellus.jpg",
        code: "1-7-24-21-0-1"
    },
    Berriel: {
        name: "Berriel",
        gender: 0,
        race: 7,
        class: [24],
        local: 4,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Berriel.png",
        code: "0-7-24-4-0-1"
    },
    Boris: {
        name: "Boris",
        gender: 0,
        race: 0,
        class: [7],
        local: 0,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Boris.png",
        code: "0-0-7-0-0-1"
    },
    Luke: {
        name: "Luke",
        gender: 0,
        race: 0,
        class: [8],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Luke.png",
        code: "0-0-8-21-0-1"
    },
    Maria: {
        name: "Maria",
        gender: 1,
        race: 0,
        class: [1],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Maria.png",
        code: "1-0-1-21-0-1"
    },
    Niberius: {
        name: "Niberius",
        gender: 0,
        race: 5,
        class: [2],
        local: 4,
        age: "Desconhecido",
        status: 1,
        classification: 1,
        token: "Niberius.png",
        code: "0-5-2-4-1-1"
    },
    RhannyGallahar: {
        name: "Rhanny Gallahar",
        gender: 1,
        race: 0,
        class: [3, 5, 6],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Rhanny Gallahar.png",
        code: "1-0-3.5.6-10-0-1"
    },
    Sif: {
        name: "Sif",
        gender: 1,
        race: 0,
        class: [24],
        local: 10,
        age: "6",
        status: 0,
        classification: 1,
        token: "Sif.png",
        code: "1-0-24-10-0-1"
    },
    Callan: {
        name: "Callan",
        gender: 0,
        race: 0,
        class: [3, 22],
        local: 13,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Callan.png",
        code: "0-0-3.22-13-0-1"
    },
    Emma: {
        name: "Emma Ayers",
        gender: 1,
        race: 0,
        class: [3, 10],
        local: 13,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Emma.png",
        code: "1-0-3.10-13-0-1"
    },
    Volga: {
        name: "Volga",
        gender: 0,
        race: 6,
        class: [10, 15],
        local: 6,
        age: "Desconhecido",
        status: 1,
        classification: 1,
        token: "Volga.png",
        code: "0-6-10.15-6-1-1"
    },
    Alduim: {
        name: "Alduim",
        gender: 0,
        race: 6,
        class: [15],
        local: 10,
        age: "762",
        status: 0,
        classification: 1,
        token: "Alduim.png",
        code: "0-6-15-10-0-1"
    },
    Niti: {
        name: "Niti",
        gender: 1,
        race: 1,
        class: [20],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Niti.png",
        code: "1-1-20-10-0-1"
    },
    Nayahath: {
        name: "Nayahath",
        gender: 3,
        race: 1,
        class: [3, 4, 5, 6, 20],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Nayahath.png",
        code: "0-0-8-21-0-1"
    },
    Kataha: {
        name: "Kataha",
        gender: 1,
        race: 0,
        class: [0, 1, 10],
        local: 20,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Kataha.png",
        code: "1-0-0.1.10-20-0-1"
    },
    Parvatam: {
        name: "Parvatam",
        gender: 0,
        race: 1,
        class: [20],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Parvatam.png",
        code: "0-1-20-10-0-1"
    },
    Acalhueltecani: {
        name: "Acalhueltecani",
        gender: 2,
        race: 8,
        class: [15],
        local: 12,
        age: "Desconhecido",
        status: 3,
        classification: 2,
        token: "Acalhueltecani.png",
        code: "2-8-15-12-3-2"
    },
    Illidan: {
        name: "Illidan",
        gender: 0,
        race: 3,
        class: [0, 1],
        local: 22,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Illidan.png",
        code: "0-3-0.1-22-0-0"
    },
    Tyrania: {
        name: "Tyrania",
        gender: 2,
        race: 8,
        class: [15],
        local: 12,
        age: "Desconhecido",
        status: 3,
        classification: 2,
        token: "Tyrania.png",
        code: "2-8-15-12-3-2"
    },
    Laura: {
        name: "Laura",
        gender: 1,
        race: 0,
        class: [11],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Laura.png",
        code: "1-0-11-10-0-1"
    },
    Nosferato: {
        name: "Nosferato",
        gender: 0,
        race: 0,
        class: [5],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 0,
        token: "Nosferato.png",
        code: "0-0-5-10-0-0"
    },
    Syneidisis: {
        name: "Syneídisis",
        gender: 3,
        race: 1,
        class: [20],
        local: 21,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Syneídisis.png",
        code: "3-1-20-21-0-1"
    },
    Joana: {
        name: "Joana",
        gender: 1,
        race: 0,
        class: [19],
        local: 10,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Joana.png",
        code: "1-0-19-10-0-1"
    },
    Wallace: {
        name: "Wallace",
        gender: 0,
        race: 0,
        class: [1],
        local: 22,
        age: "Desconhecido",
        status: 0,
        classification: 1,
        token: "Wallace.png",
        code: "0-0-1-22-0-1"
    }
}


function GenerateCard(character){
    let cardArea = document.querySelector(".result-area")

    let charCard = character
    let charInfo = characters[charCard]

    let classList = ''

    console.log(charInfo)

    for(classes of charInfo.class){
        classList += `<span>${refProps.class[classes]}</span>`
    }
    

    cardArea.innerHTML += `
    <div class="card">
                
        <div class="picture">
            <div class="name">${charInfo.name}</div>
            <img src="./img/${charInfo.token}" alt="${charInfo.name} token">
        </div>
        <div class="gender"><span>${refProps.gender[charInfo.gender]}</span></div>
        <div class="race"><span>${refProps.race[charInfo.race]}</span></div>
        <div class="class">${classList}</div>
        <div class="local"><span>${refProps.local[charInfo.local]}</span></div>
        <div class="age"><span>${charInfo.age}</span></div>
        <div class="status"><span>${refProps.status[charInfo.status]}</span></div>
        <div class="classification"><span>${refProps.classification[charInfo.classification]}</span></div>
    </div>
    `
}

function GenerateList(){
    for(key in characters){
        console.log(`${key}: ${characters[key].name}`)
    }
}


// tasks

// gerar lista pro input
// criar mecânica de selecionar personagem aleatóriamente
// exibir comparativo do personagem escolido e o sortido