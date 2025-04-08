import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";

const Orders = () => {
  const { currency } = useAppContext();

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-hidden">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map(
          ({
            items,
            address: {
              firstName,
              lastName,
              street,
              city,
              state,
              zipcode,
              country,
              phone,
            },
            amount,
            paymentType,
            createdAt,
            isPaid,
            _id,
          }) => (
            <div
              key={_id}
              className="flex flex-col md:items-center md:flex-row justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300"
            >
              <div className="flex gap-5 max-w-80">
                <img
                  className="w-12 h-12 object-cover"
                  src={assets.box_icon}
                  alt="boxIcon"
                />
                <div className="">
                  {items.map(({ product: { name }, quantity, _id }) => (
                    <div key={_id} className="flex flex-col">
                      <p className="font-medium">
                        {name}{" "}
                        <span className="text-primary">x {quantity}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm md:text-base text-black/60">
                <p className="text-black/80">
                  {firstName} {lastName}
                </p>
                <p>
                  {street}, {city}
                </p>
                <p>
                  {" "}
                  {state},{zipcode}, {country}
                </p>
                <p></p>
                <p>{phone}</p>
              </div>

              <p className="font-medium text-lg my-auto">
                {currency}
                {amount}
              </p>

              <div className="flex flex-col text-sm md:text-base text-black/60">
                <p>Method: {paymentType}</p>
                <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
                <p>Payment: {isPaid ? "Paid" : "Pending"}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Orders;
