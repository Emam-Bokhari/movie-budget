import PropTypes from 'prop-types'
import Cart from '../Cart/Cart'
const Carts = ({ selectActor, totalCost, remaining }) => {
    console.log(totalCost)
    return (
        <div>
            <div className=" md:w-80 lg:w-96">
                <h2 className="bg-indigo-200 py-2 text-center text-2xl font-semibold">Cart</h2>
                <h3 className='mt-5 text-xl font-semibold text-center'>Total Actors: {selectActor.length}</h3>
                <div className="flex justify-evenly mt-5">
                    <p>Remaining: {remaining}</p>
                    <p>Total Cost: {totalCost}</p>
                </div>
                {selectActor.map((item, index) => <Cart key={index} data={item} />)}
            </div>
        </div>
    )
}


Carts.propTypes = {
    selectActor: PropTypes.array.isRequired
}

export default Carts



