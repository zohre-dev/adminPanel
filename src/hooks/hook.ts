import { useSelector } from "react-redux";
import { RootState, type AppDispatch } from "../store/store";

export const useAppSelector = useSelector.withTypes<RootState>();
