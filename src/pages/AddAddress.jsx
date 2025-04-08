import React, { useState } from "react";
import { assets } from "../assets/assets";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    className="w-full border border-gray-500/30 rounded px-2 focus:border-primary outline-none py-2.5 text-gray-500 transition duration-300"
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street Address"
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone Number"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition duration-300 cursor-pointer uppercase"
            >
              Save address
            </button>
          </form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt="add-address"
          className="md:mr-16 mb-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
