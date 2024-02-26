import React, { useState } from "react";
import "./style/reserve.css";
import FormInput from "./formInput";
import { Select } from "@chakra-ui/react";
import tableImg1 from "../assets/resTable1.png";
import tableImg2 from "../assets/resTable2.png";
import { useToast } from "@chakra-ui/react";

export default function reserve() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    time: "",
    seats: "",
    telephone: "",
    selectedOption: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username:",
      pattern: "^[a-zA-Z0-9_]{3,20}$",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email:",
      required: true,
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
    },
    {
      id: 3,
      name: "date&time",
      type: "date",
      placeholder: "Username",
      label: "Date & Time:",
      required: true,
      errorMessage: "You should select a date time to your reservation",
    },
    {
      id: 4,
      name: "Telephone",
      type: "text",
      placeholder: "123-45-678",
      label: "Telephone:",
      pattern: "^[0-9]+$",
      required: true,
      errorMessage: "You should provide a valid phone number",
    },
    {
      id: 5,
      name: "Seats",
      type: "text",
      placeholder: "Seats",
      label: "Seats:",
      pattern: "^[0-9]",
      required: true,
      errorMessage:
        "Username should be only numbers and shouldn't include any special character!",
    },
    {
      id: 7, // Choose a unique id for the dropdown
      name: "occation",
      type: "select",
      label: "occation (Optionel):",
      options: [
        { value: "Birthday", label: "Birthday" },
        { value: "Engagement", label: "Engagement" },
        { value: "Anniversary", label: "Anniversary" },
      ],
    },
  ];

  const toast = useToast();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    
    // Perform validation
    
    toast({
      title: 'Reservation added',
      description: "You will receive a confirmation email.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <section>
        <div className="reserve-container">
          <div className="reserve-form">
            <img className="tableImg" src={tableImg1} alt="" />
            <img className="tableImg" src={tableImg2} alt="" />
          </div>
          <div className=" restaurantTable">
            <form className='reserveForm' onSubmit={handeleSubmit}>
              <h1 className=" text-yellow-400  sm:(p-5 my-5 text-xl )    font-bold ">
                Reserve a Table
              </h1>

              {inputs.map((input) => (
                <>
                  {input.type === "select" ? (
                    <div className=" my-5 w-10/12">
                      <label
                        htmlFor={input.id}
                        className=" text-white text-base font-medium "
                      >
                        {input.label}
                      </label>

                      <Select
                        className=" mt-5  cursor-pointer w-full rounded "
                        placeholder={input.label}
                        value={values[input.name]}
                        onChange={onChange}
                        name={input.name}
                        bg='primary'
                      >
                        {input.options.map((option) => (
                          <option
                            className="cursor-pointer"
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </Select>
                    </div>
                  ) : (
                    <FormInput
                      {...input}
                      onChange={onChange}
                      value={values[input.name]}
                    />
                  )}
                </>
              ))}

              <button
                className=" submitBtn  text-black p-3 my-5  text-base   font-bold   bg-yellow-300 w-10/12   rounded "
              >
                Make reservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
