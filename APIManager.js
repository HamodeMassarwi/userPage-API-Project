//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    randomAbout = async () => {
        const randomFetch = await (await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')).json()
        loadRandomAbout.unshift(randomFetch)
    }

    randomPokemon = async () => {
        let randomNum = Math.floor(Math.random() * 898) + 1
        const randomFetch = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)).json()
        loadRandomPokemon.unshift(randomFetch)
    }
    randomQuoteGenerator = async () => {
        const randomFetch = await (await fetch('https://api.kanye.rest')).json()
        loadRandomQuote.unshift(randomFetch)

    }
    randomUserGenerator = async () => {
        const randomFetch = await (await fetch('https://randomuser.me/api')).json()
        loadRandomUser.unshift(randomFetch)
    }
    randomFriendGenerator = async () => {
        for (let i = 0; i < 7; i++) {
            const randomFetch = await (await fetch('https://randomuser.me/api')).json()
            loadRandomFreinds.unshift(randomFetch)
        }
    }
}

const randomEverything = new APIManager();
