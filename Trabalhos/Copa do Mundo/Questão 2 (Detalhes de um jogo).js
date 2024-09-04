const matches = 'https://worldcupjson.net/matches';
fetch(matches)
  .then(response => response.json())
  .then(matches => list_matches(matches));

function list_matches(matches) {
  let select = document.getElementById('match');
  for (let match of matches) {
    let option = new Option(match.home_team.name + " VS " + match.away_team.name , match.id);
    select.options[select.options.length] = option;
  }
}

function mostrar_matches() {
let id = document.getElementById('match').value;
let match = `https://worldcupjson.net/matches/${id}`;

fetch(match)
    .then(response => response.json())
    .then(matches => displayMatches(matches))

function displayMatches(matches){
    const matchesList = document.getElementById("match-details")
    matchesList.innerHTML = ""
    
    matches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.innerHTML = `
                <p>id: ${match.id}</p>
                <p>"venue": ${match.venue}</p>
                <p>"location": ${match.location}</p>
                <p>"status": ${match.status}</p>
                <p>"attendance": ${match.attendance}</p>
                <p>"stage_name": ${match.stage_name}</p>
                <p>"home_team_country": ${match.home_team_country}</p>
                <p>"away_team_country": ${match.away_team_contry}</p>
                <p>"datetime": ${match.datetime}</p>
                <p>"winner": ${match.winner}</p>
                <p>"winner_code": ${match.winner_code}</p>
            `
        matchesList.appendChild(matchElement);
        }
    )
}
}