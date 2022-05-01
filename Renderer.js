const loadRandomAbout = []
const loadRandomPokemon = []
const loadRandomQuote = []
const loadRandomUser = []
const loadRandomFreinds = []
class Renderer {

    renderAbout(loadRandomAbout) {
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({
            meat: loadRandomAbout[0]
        })
        $(".meat-container").append(someHTML)
    }
    renderPokemon(loadRandomPokemon) {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({
            pokemonIMG: loadRandomPokemon[0].sprites.back_default,
            pokeName: loadRandomPokemon[0].name
        })
        $(".pokemon-container").append(someHTML)
    }
    renderQuote(loadRandomQuote) {
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({ quote: loadRandomQuote[0].quote })
        $(".quote-container").append(someHTML)
    }
    renderUser(loadRandomUser) {
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({
            userFullName: loadRandomUser[0].results[0].name.first + " " + loadRandomUser[0].results[0].name.last,
            userIMG: loadRandomUser[0].results[0].picture.medium,
            location: loadRandomUser[0].results[0].location.city
        })
        $(".user-container").append(someHTML)
    }
    renderFriends(loadRandomFreinds) {
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({
            friend1: loadRandomFreinds[0].results[0].name.first,
            friend2: loadRandomFreinds[1].results[0].name.first,
            friend3: loadRandomFreinds[2].results[0].name.first,
            friend4: loadRandomFreinds[3].results[0].name.first,
            friend5: loadRandomFreinds[4].results[0].name.first,
            friend6: loadRandomFreinds[5].results[0].name.first,
            friend7: loadRandomFreinds[6].results[0].name.first
        })
        $(".friends-container").append(someHTML)
    }
}
const rend = new Renderer()
