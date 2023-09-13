import PropTypes from 'prop-types'

const Cart =({data})=>{
    const {name}=data
    return (
        <div>
            <ul className="text-center my-5">
                <li>{name}</li>
            </ul>
        </div>
    )
}

Cart.propTypes={
    data:PropTypes.object.isRequired
}

export default Cart