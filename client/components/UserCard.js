import React, {useEffect, useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {logout} from '../store/user'
import axios from 'axios'
import '../css/UserCard.css'

const UserCard = props => {
  const [userInfo, setUserInfo] = useState({})
  const [orders, setOrders] = useState([])
  const [showOrders, setShowOrders] = useState(false)
  const [orderError, setOrderError] = useState(false)
  const {id} = props
  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(`/api/users/${id}`)
      setUserInfo(data)
      if (data.orders)
        setOrders(data.orders.filter(order => order.status === 'complete'))
    }
    fetch()
  }, [])

  const toggleOrders = () => {
    if (orders.length > 0) setShowOrders(!showOrders)
    else setOrderError(true)
  }
  const {email, imgUrl} = userInfo

  return !orders ? (
    <></>
  ) : (
    <div id="card-container">
      <div id="card">
        <img src={imgUrl} alt="" />
        <div id="card-info">
          <div>{email}</div>

          {!orderError ? <></> : <div id="err">No previous orders!</div>}
          <button type="button" onClick={toggleOrders}>
            ORDER HISTORY
          </button>
          <button
            type="button"
            className="red"
            onClick={() => dispatch(logout())}
          >
            LOG OUT
          </button>
        </div>
      </div>

      {!showOrders ? (
        <></>
      ) : (
        <div id="orders-container">
          <h1>Order History</h1>
          <div id="prev-orders">
            {orders.map(order => {
              const {products} = order
              return (
                <div id="prev-order" key={order.id}>
                  <div id="order-header">
                    <div className="order-header-text">
                      <div>ORDER PLACED</div>
                      <div>{order.date}</div>
                    </div>
                    <div className="order-header-text">
                      <div>ORDER #</div>
                      <div>{order.id}</div>
                    </div>
                    <div className="price">
                      <div>TOTAL</div>
                      <div>${order.totalPrice}</div>
                    </div>
                  </div>
                  <div id="order-products">
                    {products.map(product => {
                      return (
                        <div key={product.id} id="product">
                          <img src={product.imageURL} />
                          <div id="order-description">
                            <h4>{product.name}</h4>
                            <div className="product-description">
                              {product.description}
                            </div>
                          </div>
                          <div id="cost">
                            <div>Qty</div>
                            <div>Price</div>
                            <div>Total Price</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    id: state.user.id
  }
}

export default connect(mapState)(UserCard)

/**
 * PROP TYPES
 //  */
// UserHome.propTypes = {
//   email: PropTypes.string,
// }
