let rerender = () => {// заглушка для перерисовки
};

let state = [

    {
        id: 1,
        name: "Nilfgaard",
        image: "nilfgaard.jpg"
    },
    {
        id: 2,
        name: "Redania",
        image: "redania.jpg"
    },
    {
        id: 3,
        name: "Skellige",
        image: "skellige.jpg"
    },
    {
        id: 4,
        name: "Emhyr var Emreis",
        post: "Urcheon of Erlenwald",
        image: "emhyr.jpg",
        parent: 1
    },
    {
        id: 5,
        name: "Morvran Voorhis",
        post: "General Commander",
        image: "morvran.jpg",
        parent: 1
    },
    {
        id: 6,
        name: "Jan Calveit",
        post: "Magne Division",
        image: "calveit.jpg",
        parent: 1
    },
    {
        id: 7,
        name: "Ardal aep Dahy",
        post: "East Army Group",
        image: "ardal.jpg",
        parent: 4
    },
    {
        id: 8,
        name: "Ceallach Dyffryn",
        post: "Seneschal",
        image: "ceallach.jpg",
        parent: 4
    },
    {
        id: 9,
        name: "Joachim de Wett",
        post: "Prince",
        image: "joachim.jpg",
        parent: 4
    },
    {
        id: 10,
        name: "Shilard Fitz-Oesterlen",
        post: "Ambassador",
        image: "shilard.jpg",
        parent: 4
    },
    {
        id: 11,
        name: "Stefan Skellen",
        post: "Imperial coroner",
        image: "skellen.jpg",
        parent: 4
    },
    {
        id: 12,
        name: "Menno Coehoorn",
        post: "Governor of Cintra",
        image: "menno.jpg",
        parent: 4
    },
    {
        id: 13,
        name: "Vattier de Rideaux",
        post: "Spymaster",
        image: "vattier.jpg",
        parent: 4
    },
    {
        id: 14,
        name: "Letho of Gulet",
        post: "Witcher",
        image: "letho.jpg",
        parent: 5
    },
    {
        id: 15,
        name: "Cahir Dyffryn",
        image: "dyffryn.jpg",
        parent: 5
    },
    {
        id: 16,
        name: "Vilgefortz",
        post: "Mage",
        image: "vilgefortz.jpg",
        parent: 5
    },
    {
        id: 17,
        name: "Tibor Eggebracht",
        post: "Soldier",
        image: "tibor.jpg",
        parent: 6
    },
    {
        id: 18,
        name: "Xarthisius",
        post: "Mage",
        image: "xarthisius.jpg",
        parent: 6
    },
    {
        id: 19,
        name: "Albrich",
        post: "Mage",
        image: "albrich.jpg",
        parent: 7
    },
    {
        id: 20,
        name: "Peter Saar Gwynleve",
        post: "Soldier",
        image: "gwynleve.jpg",
        parent: 7
    },
    {
        id: 21,
        name: "Assire var Anahid",
        post: "Mage",
        image: "anahid.jpg",
        parent: 8
    },
    {
        id: 22,
        name: "Fringilla Vigo",
        post: "Mage",
        image: "fringilla.jpg",
        parent: 10
    },
    {
        id: 23,
        name: "Sweers",
        post: "Knight",
        image: "sweers.jpg",
        parent: 22
    },
    {
        id: 24,
        name: "Vanhemar",
        post: "Mage",
        image: "vanhemar.jpg",
        parent: 23
    },
    {
        id: 25,
        name: "Auckes",
        post: "Witcher",
        image: "auckes.jpg",
        parent: 18
    },
    {
        id: 26,
        name: "Radovid V",
        post: "King of Redania",
        image: "radovid.jpg",
        parent: 2
    },
    {
        id: 27,
        name: "Horst Borsodi",
        post: "Auctioneer",
        image: "horst.jpg",
        parent: 26
    },
    {
        id: 28,
        name: "Ewald Borsodi",
        post: "Assassin",
        image: "borsodi.jpg",
        parent: 27
    },

    {
        id: 29,
        name: "Iris von Everec",
        post: "Painter",
        image: "iris.jpg",
        parent: 26
    },
    {
        id: 30,
        name: "Olgierd von Everec",
        post: "Soldier",
        image: "olgierd.jpg",
        parent: 29
    },
    {
        id: 31,
        name: "Philippa Eilhart",
        post: "Mage",
        image: "philippa.jpg",
        parent: 26
    },
    {
        id: 32,
        name: "Sigismund Dijkstra",
        post: "Spymaster",
        image: "dijkstra.jpg",
        parent: 26
    },
    {
        id: 33,
        name: "Vlodimir von Everec",
        post: "Noble",
        image: "everec.jpg",
        parent: 26
    },
    {
        id: 34,
        name: "Vicovaro",
        post: "Novice",
        image: "vicovaro.jpg",
        parent: 31
    },
    {
        id: 35,
        name: "Bran Tuirseach",
        post: "The Conqueror",
        image: "bran.jpg",
        parent: 3
    }
];
// Добавляем в первоначальный стейт древо начальников чтобы потом использовать его как клю для подсчета подчиненх
let setInitialState = (state) => { // добавляем рекурсией новый ключ "древо начальников"
    const addAllCommanders = (parentId, state) => {
        let counter = parentId;
        let acc = [counter];
        let findParent = (state) => {
            if (counter === undefined) {
                return acc;
            }
            let currentItem = state.filter(person => person.id === counter);
            counter = currentItem[0].parent;
            if (counter === undefined) {
                return acc
            }
            acc.push(counter);
            return findParent(state);
        };
        return findParent(state)
    };
    let newState = state.map(person => ({
        id: person.id,
        name: person.name,
        image: person.image,
        post: person.post,
        parent: person.parent,
        commandTree: addAllCommanders(person.parent, state)
    }));
    return newState.map(person => ({ // С помощью ранее добавленного добавляем новый ключ "все подчиненные"
        id: person.id,
        name: person.name,
        image: person.image,
        post: person.post,
        parent: person.parent,
        subordinatesOfAllLevels: newState.filter(element => [person.id]
            .every(el => element.commandTree.includes(el))).length
    }))
};


export let initialState = {// Хранилище данных
    state: setInitialState(state),
    person: null,
    subjects: null
};


export const subscribe = (observer) => {//Для уведомление о изменение данных
    rerender = observer;

};

export const findSubordinates = (person = initialState.person) => {//Основная функция отрисовки подчиненных и вызывающая
    // функцию перерисовки

    let parentsFilter = (person) => {
        if (person === null) {
            return initialState.subjects = initialState.state.filter(f => f.parent === undefined);
        } else {
            return initialState.subjects = initialState.state.filter(f => f.parent === person.id);
        }
    };
    initialState.subjects = parentsFilter(person)
    rerender()
};

export const currentPerson = (personn) => {// Функции отрисовки текущего персонажа
    initialState.person = initialState.state.filter(f => f.id === personn.id);
    findSubordinates(initialState.person[0])
};


export const switchPingPageNext = (person, parent) => {// Кнопка вперед
        const previous = (person) => {
            let levelFilter = initialState.state.filter(f => f.parent === parent);
            let indexSearch = levelFilter.indexOf(person[0]) + 1;
            let objectSearch = levelFilter[indexSearch];
            if (objectSearch === undefined) {// Условие что делать если дошел до края массива
                initialState.person = [levelFilter[0]]
            } else {
                initialState.person = [objectSearch]
            }
        };
        previous(person, parent);
        findSubordinates(initialState.person[0])
    }
;
export const switchPingPagePrevious = (person, parent) => {// Кнопка назад
    const previous = (person) => {
        let levelFilter = initialState.state.filter(f => f.parent === parent);
        let indexSearch = levelFilter.indexOf(person[0]) - 1;
        let objectSearch = levelFilter[indexSearch];
        if (objectSearch === undefined) {// Условие что делать если дошел до края массива
            initialState.person = [levelFilter[levelFilter.length - 1]]
        } else {
            initialState.person = [objectSearch]
        }
    };
    previous(person, parent);
    findSubordinates(initialState.person[0])
};
export const home = () => { //Логотип с функцией домой
    initialState.person = null;
    findSubordinates()
};
export const back = (person) => {//Кнопка назад
    if (person === undefined) {
        home();
    } else {
        initialState.person = initialState.state.filter(f => f.id === person)
        findSubordinates(initialState.person[0])
    }


};


