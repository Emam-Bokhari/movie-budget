import { useEffect } from "react"
import { useState } from "react"
import Movie from "../Movie/Movie"
import PropTypes from 'prop-types'


const Movies = ({select}) => {
    const [moviesData, setMoviesData] = useState([])
    useEffect(() => {
        fetch('moviesData.json')
            .then(res => res.json())
            .then(data => setMoviesData(data))
    }, [])


    return (
        <div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        moviesData.map(item => <Movie key={item.id} data={item} select={select}/>)
                    }
                </div>
                
        </div>
    )
}

Movies.propTypes={
    select:PropTypes.func.isRequired
}

export default Movies

     
    
  


