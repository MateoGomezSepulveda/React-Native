// API PLAYERS
export async function GetMovies() {
    const API_LIST_MOVIES = "https://imdb188.p.rapidapi.com/api/v1/getFanFavorites";
    const API_KEY_LIST_MOVIES = "2da5074100mshdfdaf7cfe495298p1b2c08jsn4c32db5d6708";
  
    const headers = {
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
      "x-rapidapi-key": API_KEY_LIST_MOVIES,
    };
  
    try {
      const response = await fetch(API_LIST_MOVIES, { headers });
      const data = await response.json();
      
      console.log('Response data:', data);  

    //   Destructuramos los datos de la base de datos
  
      return data.list.map((movie) =>{s
        const { title, description, image, year} = movie;
        
        return {
           title,
           description,
           image,
           year
        }
      })
  
    } catch (error) {
      console.error("Error al obtener los juegos:", error);
      return [];  // Retornamos un arreglo vacío en caso de error
    }
  };


  