export const getExercises = async () => {

    const exercises = await fetch('http://127.0.0.1:8000/api/exercises');
    return exercises.json();
}