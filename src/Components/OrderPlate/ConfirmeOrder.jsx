import React from "react";
import { useMealContext } from "../Context/MealContext";
import "./styles/ConfirmeOrder.css";
import {
  Radio,
  RadioGroup,
  Stack,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


export default function ConfirmeOrder() {
  const { selectedMeal } = useMealContext();
  const [value, setValue] = React.useState("1");
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const toast = useToast();

  const handeleSubmit = (e) => {
    e.preventDefault();

    // Perform validation

    toast({
      title: "Order confirmed",
      description: "You will be redirect to the tracking page",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <div className="confirmeOrderContainer my-8   ">
        {selectedMeal && (
          <>
            <div className="imgContainer  h-full flex-1  ">
              <img
                className="  rounded-3xl object-cover h-full w-full"
                src={selectedMeal.mealImg}
                alt=""
              />
            </div>
            <div className="  flex  flex-col  justify-between   p-5 h-full flex-1">
              <div className=" mx-auto  flex  flex-col  justify-between  w-11/12 ">
                <h1 className="  text-xl  text-bold my-4 text-center ">
                  Start making your day with an amazing meal!{" "}
                </h1>
                <p className="my-3">Meal: {selectedMeal.mealName}</p>
                <p className="my-3">Price: {selectedMeal.price}</p>
                <form action="" onSubmit={handeleSubmit}>
                  <div className="my-3">
                    <label className="my-3" htmlFor="">
                      Quantity:
                    </label>
                    <div className="flex justify-center">
                      <HStack className="my-3 " maxW="150px">
                        <Button onClick={handleIncrement}>+</Button>
                        <Input className='text-center' value={quantity} readOnly />
                        <Button onClick={handleDecrement}>-</Button>
                      </HStack>
                    </div>
                  </div>
                  <div className="w-10/12">
                  <label className=" mino my-5" htmlFor="">
                      Location:
                    </label>
                    <Input className="  my-6 w-2/5" placeholder='insert location' />
                  </div>
                  <div className="my-3">
                    <label className="my-3" htmlFor="">
                      Delivery:
                    </label>
                    <div className="flex justify-center">
                      <RadioGroup
                        className="my-3"
                        onChange={setValue}
                        value={value}
                      >
                        <Stack direction="row">
                          <Radio value="1">Fast</Radio>
                          <Radio value="2">Very Fast</Radio>
                        </Stack>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className=" flex justify-center">
                    <button className="submitBtn  text-black p-3 my-5  text-base   font-bold   bg-yellow-300 w-10/12   rounded">
                      Confirme Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
