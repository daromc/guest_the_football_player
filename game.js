/*******************************************************
 * PLAYER DATA
 * -----------------------------------------------------
 * This array contains all players used in the game.
 * Each object represents ONE player and includes:
 *
 * - firstName : Player’s first name
 * - lastName  : Player’s last name
 * - country   : National team
 * - clubs     : Array of clubs the player has played for
 * - position  : Playing position (Forward, Midfielder, etc.)
 *
 * This structure allows:
 * - Flexible hint generation
 * - Easy filtering and expansion
 * - Clean name comparison logic
 *******************************************************/

var players = [
    { firstName: "Lionel", lastName: "Messi", country: "Argentina", clubs: ["Barcelona", "PSG", "Inter Miami"], position: "Forward" },
    { firstName: "Cristiano", lastName: "Ronaldo", country: "Portugal", clubs: ["Manchester United", "Real Madrid", "Juventus", "Al-Nassr"], position: "Forward" },
    { firstName: "Neymar", lastName: "Jr", country: "Brazil", clubs: ["Santos", "Barcelona", "PSG", "Al-Hilal"], position: "Forward" },
    { firstName: "Kylian", lastName: "Mbappe", country: "France", clubs: ["Monaco", "PSG", "Real Madrid"], position: "Forward" },
    { firstName: "Erling", lastName: "Haaland", country: "Norway", clubs: ["RB Salzburg", "Borussia Dortmund", "Manchester City"], position: "Forward" },

    { firstName: "Kevin", lastName: "De Bruyne", country: "Belgium", clubs: ["Genk", "Chelsea", "Wolfsburg", "Manchester City"], position: "Midfielder" },
    { firstName: "Luka", lastName: "Modric", country: "Croatia", clubs: ["Dinamo Zagreb", "Tottenham", "Real Madrid"], position: "Midfielder" },
    { firstName: "Toni", lastName: "Kroos", country: "Germany", clubs: ["Bayern Munich", "Real Madrid"], position: "Midfielder" },
    { firstName: "Andres", lastName: "Iniesta", country: "Spain", clubs: ["Barcelona", "Vissel Kobe"], position: "Midfielder" },
    { firstName: "Xavi", lastName: "Hernandez", country: "Spain", clubs: ["Barcelona", "Al-Sadd"], position: "Midfielder" },

    { firstName: "Robert", lastName: "Lewandowski", country: "Poland", clubs: ["Lech Poznan", "Dortmund", "Bayern Munich", "Barcelona"], position: "Forward" },
    { firstName: "Karim", lastName: "Benzema", country: "France", clubs: ["Lyon", "Real Madrid", "Al-Ittihad"], position: "Forward" },
    { firstName: "Harry", lastName: "Kane", country: "England", clubs: ["Tottenham", "Bayern Munich"], position: "Forward" },
    { firstName: "Luis", lastName: "Suarez", country: "Uruguay", clubs: ["Ajax", "Liverpool", "Barcelona", "Inter Miami"], position: "Forward" },
    { firstName: "Zlatan", lastName: "Ibrahimovic", country: "Sweden", clubs: ["Ajax", "Juventus", "Inter", "Barcelona", "PSG", "AC Milan"], position: "Forward" },

    { firstName: "Mohamed", lastName: "Salah", country: "Egypt", clubs: ["Basel", "Chelsea", "Roma", "Liverpool"], position: "Forward" },
    { firstName: "Sadio", lastName: "Mane", country: "Senegal", clubs: ["Southampton", "Liverpool", "Bayern Munich", "Al-Nassr"], position: "Forward" },
    { firstName: "Eden", lastName: "Hazard", country: "Belgium", clubs: ["Lille", "Chelsea", "Real Madrid"], position: "Forward" },
    { firstName: "Antoine", lastName: "Griezmann", country: "France", clubs: ["Real Sociedad", "Atletico Madrid", "Barcelona"], position: "Forward" },
    { firstName: "Ronaldinho", lastName: "Gaucho", country: "Brazil", clubs: ["PSG", "Barcelona", "AC Milan"], position: "Forward" },

    { firstName: "Virgil", lastName: "van Dijk", country: "Netherlands", clubs: ["Celtic", "Southampton", "Liverpool"], position: "Defender" },
    { firstName: "Sergio", lastName: "Ramos", country: "Spain", clubs: ["Sevilla", "Real Madrid", "PSG"], position: "Defender" },
    { firstName: "Paolo", lastName: "Maldini", country: "Italy", clubs: ["AC Milan"], position: "Defender" },
    { firstName: "Fabio", lastName: "Cannavaro", country: "Italy", clubs: ["Parma", "Juventus", "Real Madrid"], position: "Defender" },
    { firstName: "Carles", lastName: "Puyol", country: "Spain", clubs: ["Barcelona"], position: "Defender" },

    { firstName: "Joshua", lastName: "Kimmich", country: "Germany", clubs: ["RB Leipzig", "Bayern Munich"], position: "Midfielder" },
    { firstName: "Paul", lastName: "Pogba", country: "France", clubs: ["Juventus", "Manchester United"], position: "Midfielder" },
    { firstName: "Frank", lastName: "Lampard", country: "England", clubs: ["Chelsea", "Manchester City"], position: "Midfielder" },
    { firstName: "Steven", lastName: "Gerrard", country: "England", clubs: ["Liverpool", "LA Galaxy"], position: "Midfielder" },
    { firstName: "Andrea", lastName: "Pirlo", country: "Italy", clubs: ["AC Milan", "Juventus"], position: "Midfielder" },

    { firstName: "Manuel", lastName: "Neuer", country: "Germany", clubs: ["Schalke 04", "Bayern Munich"], position: "Goalkeeper" },
    { firstName: "Gianluigi", lastName: "Buffon", country: "Italy", clubs: ["Parma", "Juventus", "PSG"], position: "Goalkeeper" },
    { firstName: "Iker", lastName: "Casillas", country: "Spain", clubs: ["Real Madrid", "Porto"], position: "Goalkeeper" },
    { firstName: "Thibaut", lastName: "Courtois", country: "Belgium", clubs: ["Atletico Madrid", "Chelsea", "Real Madrid"], position: "Goalkeeper" },
    { firstName: "Alisson", lastName: "Becker", country: "Brazil", clubs: ["Roma", "Liverpool"], position: "Goalkeeper" },

    { firstName: "Rodri", lastName: "Hernandez", country: "Spain", clubs: ["Atletico Madrid", "Manchester City"], position: "Midfielder" },
    { firstName: "Jude", lastName: "Bellingham", country: "England", clubs: ["Borussia Dortmund", "Real Madrid"], position: "Midfielder" },
    { firstName: "Pedri", lastName: "Gonzalez", country: "Spain", clubs: ["Barcelona"], position: "Midfielder" },
    { firstName: "Vinicius", lastName: "Junior", country: "Brazil", clubs: ["Real Madrid"], position: "Forward" },
    { firstName: "Rafael", lastName: "Leao", country: "Portugal", clubs: ["AC Milan"], position: "Forward" },

    { firstName: "Didier", lastName: "Drogba", country: "Ivory Coast", clubs: ["Chelsea", "Galatasaray", "Marseille"], position: "Forward" },
    { firstName: "Samuel", lastName: "Eto'o", country: "Cameroon", clubs: ["Barcelona", "Inter", "Chelsea"], position: "Forward" },
    { firstName: "Wayne", lastName: "Rooney", country: "England", clubs: ["Manchester United", "Everton", "DC United"], position: "Forward" },
    { firstName: "Thierry", lastName: "Henry", country: "France", clubs: ["Arsenal", "Barcelona", "New York Red Bulls"], position: "Forward" },
    { firstName: "Fernando", lastName: "Torres", country: "Spain", clubs: ["Atletico Madrid", "Liverpool", "Chelsea"], position: "Forward" },

    { firstName: "Marco", lastName: "van Basten", country: "Netherlands", clubs: ["Ajax", "AC Milan"], position: "Forward" },
    { firstName: "Ronaldo", lastName: "Nazario", country: "Brazil", clubs: ["PSV", "Barcelona", "Inter", "Real Madrid"], position: "Forward" },
    { firstName: "George", lastName: "Weah", country: "Liberia", clubs: ["PSG", "AC Milan", "Chelsea"], position: "Forward" },
    { firstName: "Dennis", lastName: "Bergkamp", country: "Netherlands", clubs: ["Ajax", "Inter", "Arsenal"], position: "Forward" },
    { firstName: "Hristo", lastName: "Stoichkov", country: "Bulgaria", clubs: ["CSKA Sofia", "Barcelona"], position: "Forward" },

    { firstName: "Clarence", lastName: "Seedorf", country: "Netherlands", clubs: ["Ajax", "Real Madrid", "Inter", "AC Milan"], position: "Midfielder" },
    { firstName: "Zinedine", lastName: "Zidane", country: "France", clubs: ["Juventus", "Real Madrid"], position: "Midfielder" },
    { firstName: "Michael", lastName: "Ballack", country: "Germany", clubs: ["Bayer Leverkusen", "Chelsea", "Bayern Munich"], position: "Midfielder" },
    { firstName: "Xabi", lastName: "Alonso", country: "Spain", clubs: ["Liverpool", "Real Madrid", "Bayern Munich"], position: "Midfielder" },
    { firstName: "Bastian", lastName: "Schweinsteiger", country: "Germany", clubs: ["Bayern Munich", "Manchester United"], position: "Midfielder" },

    { firstName: "N'Golo", lastName: "Kante", country: "France", clubs: ["Leicester City", "Chelsea", "Al-Ittihad"], position: "Midfielder" },
    { firstName: "Mesut", lastName: "Ozil", country: "Germany", clubs: ["Werder Bremen", "Real Madrid", "Arsenal"], position: "Midfielder" },
    { firstName: "David", lastName: "Silva", country: "Spain", clubs: ["Valencia", "Manchester City", "Real Sociedad"], position: "Midfielder" },
    { firstName: "Yaya", lastName: "Toure", country: "Ivory Coast", clubs: ["Barcelona", "Manchester City"], position: "Midfielder" },
    { firstName: "Cesc", lastName: "Fabregas", country: "Spain", clubs: ["Arsenal", "Barcelona", "Chelsea"], position: "Midfielder" },

    { firstName: "Philipp", lastName: "Lahm", country: "Germany", clubs: ["Bayern Munich"], position: "Defender" },
    { firstName: "Roberto", lastName: "Carlos", country: "Brazil", clubs: ["Inter", "Real Madrid"], position: "Defender" },
    { firstName: "Cafu", lastName: "Silva", country: "Brazil", clubs: ["Roma", "AC Milan"], position: "Defender" },
    { firstName: "Nemanja", lastName: "Vidic", country: "Serbia", clubs: ["Manchester United"], position: "Defender" },
    { firstName: "Rio", lastName: "Ferdinand", country: "England", clubs: ["Leeds United", "Manchester United"], position: "Defender" },

    { firstName: "Gerard", lastName: "Pique", country: "Spain", clubs: ["Manchester United", "Barcelona"], position: "Defender" },
    { firstName: "Alessandro", lastName: "Nesta", country: "Italy", clubs: ["Lazio", "AC Milan"], position: "Defender" },
    { firstName: "Ashley", lastName: "Cole", country: "England", clubs: ["Arsenal", "Chelsea"], position: "Defender" },
    { firstName: "Marcelo", lastName: "Vieira", country: "Brazil", clubs: ["Fluminense","Real Madrid", "Olympiacos"], position: "Defender" },
    { firstName: "Leonardo", lastName: "Bonucci", country: "Italy", clubs: ["Juventus", "AC Milan"], position: "Defender" },

    { firstName: "Peter", lastName: "Schmeichel", country: "Denmark", clubs: ["Manchester United"], position: "Goalkeeper" },
    { firstName: "Edwin", lastName: "van der Sar", country: "Netherlands", clubs: ["Ajax", "Juventus", "Manchester United"], position: "Goalkeeper" },
    { firstName: "Oliver", lastName: "Kahn", country: "Germany", clubs: ["Bayern Munich"], position: "Goalkeeper" },
    { firstName: "Victor", lastName: "Valdes", country: "Spain", clubs: ["Barcelona", "Manchester United"], position: "Goalkeeper" },
    { firstName: "Keylor", lastName: "Navas", country: "Costa Rica", clubs: ["Levante", "Real Madrid", "PSG"], position: "Goalkeeper" },

    { firstName: "Jan", lastName: "Oblak", country: "Slovenia", clubs: ["Benfica", "Atletico Madrid"], position: "Goalkeeper" },
    { firstName: "Marc-Andre", lastName: "ter Stegen", country: "Germany", clubs: ["Borussia Monchengladbach", "Barcelona"], position: "Goalkeeper" },
    { firstName: "Hugo", lastName: "Lloris", country: "France", clubs: ["Lyon", "Tottenham", "Los Angeles FC"], position: "Goalkeeper" },
    { firstName: "Claudio", lastName: "Bravo", country: "Chile", clubs: ["Real Sociedad", "Barcelona", "Manchester City"], position: "Goalkeeper" },
    { firstName: "Emiliano", lastName: "Martinez", country: "Argentina", clubs: ["Arsenal", "Aston Villa"], position: "Goalkeeper" }

];


/*******************************************************
 * GAME STATE VARIABLES
 * -----------------------------------------------------
 * These variables track the current state of the game.
 *******************************************************/

// Player currently being guessed
var currentPlayer;

// Number of hints already used in this round
var usedHints = 0;

// Maximum hints allowed before losing
var maxHints = 6;

// Player's total score across rounds
var score = 0;

var clubHintIndex = 0;
/*******************************************************
 * AUTOCOMPLETE / SUGGESTIONS LOGIC
 * -----------------------------------------------------
 * Provides live suggestions while typing a name.
 *******************************************************/
// Reference to the suggestions <ul> element
var suggestionsBox = document.getElementById("suggestions");

// Listen to every keystroke inside the input field
document.getElementById("guessInput").addEventListener("input", function () {

    // Convert input to lowercase for case-insensitive matching
    var value = this.value.toLowerCase();

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    // If input is empty, do nothing
    if (!value) return;

    // Loop through all players
    players.forEach(p => {

        // Check if input matches first name OR last name
        if (
            p.firstName.toLowerCase().includes(value) ||
            p.lastName.toLowerCase().includes(value)
        ) {
            // Create a new suggestion item
            var li = document.createElement("li");
            li.textContent = p.firstName + " " + p.lastName;

            // Basic inline styling for usability
            li.style.padding = "10px";
            li.style.cursor = "pointer";

            // When user clicks a suggestion:
            li.onclick = function () {
                document.getElementById("guessInput").value = this.textContent;
                suggestionsBox.innerHTML = "";
            };

            // Add suggestion to the list
            suggestionsBox.appendChild(li);
        }
    });
});


/*******************************************************
 * GAME FLOW FUNCTIONS
 * -----------------------------------------------------
 * Controls round start, hints, guesses, and results.
 *******************************************************/

/**
 * Starts a new round:
 * - Randomly selects a player
 * - Resets hints and UI
 * - Shows game screen
 */

function startNewRound() {
    currentPlayer = players[Math.floor(Math.random() * players.length)];
    usedHints = 0;
    clubHintIndex = 0; // reset club order

    document.getElementById("hintsContainer").innerHTML = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("hintCounter").textContent = "Hints used: 0 / " + (maxHints - 1);

    document.getElementById("gameScreen").classList.remove("hidden");
    document.getElementById("resultScreen").classList.add("hidden");
}


/**
 * Reveals a hint based on requested type:
 * - country
 * - position
 * - club (random from club list)
 */

function showHint(type) {

    // If max hints reached, player loses automatically
    if (usedHints > maxHints) {
        showResult(false);
        return;
    }
    let text = "";

    if (type === "country") text = "Country: " + currentPlayer.country;
    if (type === "position") text = "Position: " + currentPlayer.position;
    if (type === "club") {
    // Always show clubs in order
    text = "Club: " + currentPlayer.clubs[clubHintIndex];

    // Move to next club, but never go out of bounds
    if (clubHintIndex < currentPlayer.clubs.length - 1) {
        clubHintIndex++;
    }
}

    // Create visual hint element
    let div = document.createElement("div");
    div.className = "hint";
    div.textContent = text;

    document.getElementById("hintsContainer").appendChild(div);

    // Update hint counter
    usedHints++;
    document.getElementById("hintCounter").textContent =
        "Hints used: " + usedHints + " / " + (maxHints - 1);

    // Auto-lose when last hint is used
    if (usedHints === maxHints)
        setTimeout(() => showResult(false), 500);
}


/**
 * Checks the player's guess:
 * - Accepts first name, last name, or full name
 * - Case-insensitive
 */
function submitGuess() {
    let guess = document.getElementById("guessInput").value.toLowerCase().trim();
    let fullName = (currentPlayer.firstName + " " + currentPlayer.lastName).toLowerCase();

    if (!guess){
        showResult(false);
    };

    if (
        guess === fullName ||
        guess === currentPlayer.firstName.toLowerCase() ||
        guess === currentPlayer.lastName.toLowerCase()
    ) {
        // Correct guess
        score++;
        document.getElementById("score").textContent = score;
        showResult(true);
    } else {
        // Wrong guess — clear input
        showResult(false);
        //document.getElementById("guessInput").value = "";
    }
}


/**
 * Displays the result screen:
 * - Win: celebration + name
 * - Loss: reveal correct player
 */
function showResult(won) {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    let fullName = currentPlayer.firstName + " " + currentPlayer.lastName;

    if (won) {
        resultEmoji.textContent = "🎉";
        resultTitle.textContent = "Correct!";
        resultTitle.className = "result-title win";
        resultText.innerHTML = `It was <span class="player-name">${fullName}</span>`;
        resultInfo.textContent = `Hints used: ${usedHints}`;
    } else {
        resultEmoji.textContent = "😔";
        resultTitle.textContent = "Out of Hints!";
        resultTitle.className = "result-title lose";
        resultText.innerHTML = `The player was <span class="player-name">${fullName}</span>`;
        resultInfo.textContent = "";
    }
}


/*******************************************************
 * INITIALIZATION
 * -----------------------------------------------------
 * Starts the first round automatically when page loads.
 *******************************************************/
startNewRound();
