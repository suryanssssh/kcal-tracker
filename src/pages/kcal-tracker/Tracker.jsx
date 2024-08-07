import React, { useContext, useEffect, useState } from "react";
import { useAddKcal } from "../../hooks/useAddKcal";
import { useGetKcal } from "../../hooks/useGetKcal";
import FoodBox from "./components/FoodBox";
import NavBar from "../../components/NavBar";
import SearchWithLiveResult from './SearchWithLiveResult';
import { FoodContext } from "../../context/FoodContext";
const Tracker = () => {
  const { addKcal } = useAddKcal();
  //getting value from getkcal hook,extracter from db
  const { kcalDb } = useGetKcal()
  //states for inputs
  const { foodName,
    setFoodName,
    kcal,
    setKcal,
    protein,
    setProtein,
    carbs,
    setCarbs,
    fibers,
    setFibers,
    fat,
    setFat,
    quantity,
    setQuantity,
    currentDate,
    setCurrentDate
  } = useContext(FoodContext)


  const onSubmit = (e) => {
    e.preventDefault()
    addKcal({
      foodName,
      kcal,
      protein,
      carbs,
      fibers,
      fat,
      quantity
    });
    setFoodName('')
    setKcal(0)
    setProtein(0)
    setCarbs(0)
    setFibers(0)
    setFat(0)
    setQuantity(1)
  };
  console.log(kcalDb)
  const data = kcalDb.map((element) => element)

  return (
    <div>
      {/* <NavBar /> */}
      <SearchWithLiveResult data={data} />
      <form >
        {/* {localStorage.getItem("auth")} */}
        <h1>ADD Custom Food</h1>
        <input
          type="text"
          placeholder="ENTER FOOD NAME"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER KCAL"
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
        <input
          type="number"

          placeholder="ENTER PROTEIN"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER CARBS"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER FIBERS"
          value={fibers}
          onChange={(e) => setFibers(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER FAT"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER QUANTITY"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit" onClick={(e) => onSubmit(e)}>ADD</button>
        {/* {
          useEffect(() => { */}
        <FoodBox kcalDb={kcalDb} />
        {/* }, [currentDate])

        } */}
      </form>

    </div>

  );
};

export default Tracker;
