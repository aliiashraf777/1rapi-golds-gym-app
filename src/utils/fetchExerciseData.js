

// const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises/targetList'
 
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_EXERCISE_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}
 

export const fetchExercisesData = async (url, options) => {

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            console.error('API Error: ', response.status);
            return []; //always return array, prevents app crash
        }

        const data = await response.json();

        console.log('fetchExercisesData', data);

        // return data;
        return Array.isArray(data) ? data : [];
    }
    catch (error) {
        // console.log(error);
        console.error('fetch failed: ', error);
        return []; //prevent app crash
    }

}