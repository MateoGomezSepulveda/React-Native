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

  