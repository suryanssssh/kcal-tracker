import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddKcal = () => {
  const kcalCollectionRefercence = collection(db, "kcal");
  const { userID } = useGetUserInfo();
  const addKcal = async ({
    foodName,
    kcal,
    protein,
    carbs,
    fibers,
    fat,
    quantity,
  }) => {
    let date = new Date().toLocaleDateString();
    await addDoc(kcalCollectionRefercence, {
      foodName,
      carbs,
      createdAt: serverTimestamp(),
      fat,
      fibers,
      protein,
      kcal,
      kcalDate: date,
      quantity,
      userID,
    });
  };
  return { addKcal };
};
