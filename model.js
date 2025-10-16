const model = {
    app: {
        page: [
            'loginPage',
            'mainFeed',
            'addPlaces',
            'placePage',
        ]
    },

    viewState: {
        login: {
            userName: '',
            password: '',
            loggedIn: false,
            isSpooky: true, // finnes en måte å gjøre det her på cleanere (spooky er anonym)
        },

        addPlace: {
            id: null,
            title: '',
            address: '',
            city: '',
            category: [],
            image: '',
            rateCoffee: null,
            rateFood: null,
            description: '',
            submit: false,
        },
    },

    data: {
        category: ['cafe', 'bakeri', 'restaurant'],

        placesList: [
            {
                id: 0,
                title: 'GLH Glutenfrihuset Tøyen',
                address: 'Ålebergveien 50A',
                city: 'Oslo',
                category: ['cafe', 'bakeri'],
                image: 'imgLink',
                rateCoffee: 5,
                rateFood: 5,
                description: 'Velkommen til GLH Glutenfrihuset - ditt glutenfrie bakeri i OSlo',
                submit: true,
            },
            {
                id: 1,
                title: 'En restaurant',
                address: 'En adresse - Veien10B',
                city: 'Bergen',
                category: ['restaurant', 'cafe'],
                image: 'imgLink',
                rateCoffee: 2,
                rateFood: 4,
                description: 'SKIKKELIG dårlig kaffe, men ok bra mat',
                submit: true,
            }
        ],
    },
}

