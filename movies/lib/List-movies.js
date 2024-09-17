// API PLAYERS
export async function GetPlayers() {
    const API_LIST_MOVIES = "https://imdb-top-100-movies.p.rapidapi.com/";
    const API_KEY_LIST_MOVIES = "2da5074100mshdfdaf7cfe495298p1b2c08jsn4c32db5d6708";
  
    const headers = {
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      "x-rapidapi-key": API_KEY_LIST_MOVIES,
    };
  
    try {
      const response = await fetch(API_LIST_MOVIES, { headers });
      const data = await response.json();
      
      console.log('Response data:', data);  

    //   Destructuramos los datos de la base de datos
  
      return data.body.map((movie) =>{
        const {espnID, espnName,school,espnHeadshot } = movie;
        
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


  