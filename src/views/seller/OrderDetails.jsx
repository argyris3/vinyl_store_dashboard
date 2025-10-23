import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  get_seller_order,
  messageClear,
  seller_order_status_update,
} from "../../store/reducers/OrderReducer";
import toast from "react-hot-toast";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");

  const { order, errorMessage, successMessage } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    setStatus(order?.delivery_status);
  }, [order]);

  useEffect(() => {
    dispatch(get_seller_order(orderId));
  }, [orderId]);

  const status_update = (e) => {
    dispatch(
      seller_order_status_update({ orderId, info: { status: e.target.value } })
    );
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-black rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
          <select
            onChange={status_update}
            value={status}
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="placed">placed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>

        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#{order._id}</h2>
            <span>{order.date}</span>
          </div>

          <div className="flex flex-wrap">
            <div className="w-[50%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <span>Price : ${order.price}</span>

                {order?.products?.map((p, i) => (
                  <div
                    key={i}
                    className="mt-4 flex flex-col gap-4 bg-gray-600 rounded-md"
                  >
                    <div className="text-[#d0d2d6]">
                      <div className="flex flex-col gap-2 text-md">
                        <img
                          className="w-[70px] h-[80px]"
                          src={p.images[0]}
                          alt=""
                        />

                        <div>
                          <h2>{p.name}</h2>
                          <p>
                            <span>Brand : </span>
                            <span>{p.brand}</span>
                          </p>
                          <span className="text-lg">
                            Quantity : {p.quantity}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
