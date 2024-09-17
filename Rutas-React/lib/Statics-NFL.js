// API PLAYERS
export async function GetPlayers() {
    const API_PLAYERS = "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList";
    const API_KEY_PLAYERS = "2da5074100mshdfdaf7cfe495298p1b2c08jsn4c32db5d6708";
  
    const headers = {
      "x-rapidapi-host": "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      "x-rapidapi-key": API_KEY_PLAYERS,
    };
  
    try {
      const response = await fetch(API_PLAYERS, { headers });
      const data = await response.json();
      
      console.log('Response data:', data);  

    //   Destructuramos los datos de la base de datos
  
      return data.body.map((player) =>{
        const {espnID, espnName,school,espnHeadshot } = player;
        
        return {
            espnID,
            espnName,
            school,
            espnHeadshot 
        }
      })
  
    } catch (error) {
      console.error("Error al obtener los juegos:", error);
      return [];  // Retornamos un arreglo vacío en caso de error
    }
  };

// API NFL TEAMS

export async function GetTeams() {
  const API_TEAMS = "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams";
  const API_KEY_TEAMS = "2da5074100mshdfdaf7cfe495298p1b2c08jsn4c32db5d6708";

  const headers = {
    "x-rapidapi-host": "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
    "x-rapidapi-key": API_KEY_TEAMS,
  };

  try {
    const response = await fetch(API_TEAMS, { headers });
    const data = await response.json();
    
    console.log('Response data:', data);  

  //   Destructuramos los datos de la base de datos

    return data.body.map((team) =>{
      const {teamAbv, teamCity,teamName,teamID, espnLogo1,topPerformers, teamStats, conference,conferenceAbv} = team;
      
      return {
        teamAbv,
        teamCity,
        teamName,
        teamID,
        espnLogo1,
        topPerformers,
        teamStats,
        conference,
        conferenceAbv
      }
    })

  } catch (error) {
    console.error("Error al obtener los equipos:", error);
    return [];  // Retornamos un arreglo vacío en caso de error
  }
};

  