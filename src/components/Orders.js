import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders=()=>{
    const navigate=useNavigate();
    const orders=useSelector((state)=>state.orders);
    console.log(orders);

    const findTotal=(cartItems)=>{
       return cartItems.reduce((total, item) => total + item.product.price*item.quantity, 0);
    }

    return(
        <div  className="p-4 border">
            <button  className="px-2 py-1 mt-2 text-l text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={()=>navigate(-1)}>Back</button>
            <h2 className="mb-4 text-lg font-semibold">Orders</h2>
            <div>
       <ol className="list-decimal mx-5">
        {
            orders.map((order,idx)=>{

              return  <li key={idx} className="mt-6"><ul>
          {order.map((item) => (
            <li key={item.product.id} className="mb-2">
              <div>
                <span className="font-semibold">{item.product.title}</span> - $
                {item.product.price.toFixed(2)}
                <span className="mx-5">Qty - {item.quantity}</span>
              </div>
            </li>
          ))}
            <li className="mt-2">
            <div className="flex items-center ">
              <span className="font-semibold mr-5">Total:</span>
              <span>${findTotal(order).toFixed(2)}</span>
            </div>
          </li>
        </ul></li>
            })
        }
        </ol>
        </div>
        </div>
    )
}

export default Orders;