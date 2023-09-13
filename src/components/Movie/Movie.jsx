import PropTypes from 'prop-types'

const Movie = ({ data, select }) => {
    const { name, image, role, salary, description } = data

    const handleSelectActor=()=>{
        select(data)
    }
    return (
        <div>
           
                <div className='h-[420px] shadow-md px-5 mx-auto'>
                    <div className='mt-5'>
                        <img className=' mx-auto w-20 rounded-full ring-4 ring-indigo-200' src={image} />
                    </div>
                    <h2 className="text-xl font-semibold text-center mt-5">{name}</h2>
                    <div className="h-28 mt-5">
                        <small>{description}</small>
                    </div>
                    <div className="flex justify-evenly mt-5">
                        <h2 className="font-semibold">{role}</h2>
                        <h2 className="font-semibold">${salary}</h2>
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleSelectActor} className="bg-indigo-300 px-7 py-2 font-semibold text-lg rounded-md ">Select</button>
                    </div>
                </div>
            
        </div>
    )
}

Movie.propTypes = {
    data: PropTypes.object.isRequired,
    select:PropTypes.func.isRequired
}

export default Movie