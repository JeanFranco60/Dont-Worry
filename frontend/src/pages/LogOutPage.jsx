import { useDispatch } from "react-redux";
import { removeToken } from "../redux/authReducer";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function LogOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeToken());
  }, [dispatch]);

  return <Navigate to="/" />;
}
