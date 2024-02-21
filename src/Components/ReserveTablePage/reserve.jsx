import React, { useState } from "react";
import "./style/reserve.css";
import FormInput from "./formInput";
import { Select } from "@chakra-ui/react";
import tableImg1 from '../assets/resTable1.png'
import tableImg2 from '../assets/resTable2.png'


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
      pattern: "^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$",
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
      pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
    },
    {
      id: 3,
      name: "date&time",
      type: "date",
      placeholder: "Username",
      label: "Date & Time:",
      required: true,
      errorMessage:
        "You should select a date time to your reservation",
    },
    {
      id: 4,
      name: "Telephone",
      type: "text",
      placeholder: "123-45-678",
      label: "Telephone:",
      pattern: "^[0-9]+$",
      required: true,
      errorMessage:
        "You should provide a valid phone number",
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

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="reserve-container">
        <div className="reserve-form">
            <img className='tableImg' src={tableImg1} alt="" />
            <img className='tableImg' src={tableImg2} alt="" />

          </div>
          <div className=" restaurantTable">
            <form onSubmit={handeleSubmit}>
              <h1 className="  sm:(p-5 my-5 text-xl )    font-bold ">
                Reserve a Table
              </h1>
             

             {inputs.map((input) => (
               <>
                  {input.type === "select" ? (
                    <div className="w-10/12">
                        <label htmlFor={input.id} className=" text-sm font-medium">{input.label}</label>
                    
                    <Select
                      className="w-full rounded my-5 p-4"
                      placeholder={input.label}
                      value={values[input.name]}
                      onChange={onChange}
                      name={input.name}
                    >
                      {input.options.map((option) => (
                        <option key={option.value} value={option.value}>
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

              <button className="  text-black p-3 my-5  text-xl  font-bold   bg-yellow-300 w-10/12   rounded ">
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </>
  );
}
