import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";

const Orders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const { currency } = useAppContext();

  const fetchOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <span className="w-16 h-0.5 bg-primary rounded-full" />
      </div>
      {myOrders.map(
        ({ _id, paymentType, amount, items, status, createdAt }) => (
          <div
            key={_id}
            className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
          >
            <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
              <span>OrderId: {_id}</span>
              <span>Payment: {paymentType}</span>
              <span>
                Total Amount: {currency}
                {amount}
              </span>
            </p>
            {items.map(
              ({
                product: { image, name, category, offerPrice },
                quantity,
                _id,
                i,
              }) => (
                <div
                  key={_id}
                  className={`relative bg-white text-gray-500/70 ${
                    items.length !== i + 1 && "border-b"
                  } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={image[0]} alt="" className="w-16 h-16" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-medium text-gray-800">
                        {name}
                      </h2>
                      <p>Category: {category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                    <p>Quantity: {quantity || "1"}</p>
                    <p>Status: {status}</p>
                    <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="text-primary text-lg font-medium">
                    Amount : {currency}
                    {offerPrice * quantity}
                  </p>
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Orders;
