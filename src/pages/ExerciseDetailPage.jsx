import { useEffect, useState } from 'react'
import { ExerciseDetail, ExerciseVideos, SimilarExercises } from '../components'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchExercisesData } from '../utils/fetchExerciseData'

const ExerciseDetailPage = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const { exerciseId } = useParams()


    useEffect(() => {
        const fetchExerciseDetailData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailFetched = await fetchExercisesData(`${exerciseDbUrl}/exercises/exercise/${exerciseId}`, exerciseOptions);

            console.log('exerciseDetail', { exerciseDetailFetched })
            setExerciseDetail(exerciseDetailFetched);
        }

        fetchExerciseDetailData();
    }, [exerciseId])

    return (
        <div>
            <ExerciseDetail
                exerciseDetail={exerciseDetail}
            />

            <ExerciseVideos />

            <SimilarExercises />
        </div>
    )
}

export default ExerciseDetailPage
