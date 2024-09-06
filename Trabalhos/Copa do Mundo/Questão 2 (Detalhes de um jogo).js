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
    
        const matchElement = document.createElement('div');
        matchElement.innerHTML = `
                <p>id: ${matches.id}</p>
                <p>"venue": ${matches.venue}</p>
                <p>"location": ${matches.location}</p>
                <p>"status": ${matches.status}</p>
                <p>"attendance": ${matches.attendance}</p>
                <p>"stage_name": ${matches.stage_name}</p>
                <p>"home_team_country": ${matches.home_team_country}</p>
                <p>"away_team_country": ${matches.away_team_country}</p>
                <p>"datetime": ${matches.datetime}</p>
                <p>"winner": ${matches.winner}</p>
                <p>"winner_code": ${matches.winner_code}</p>
            `
        matchesList.appendChild(matchElement);
        }
      }

