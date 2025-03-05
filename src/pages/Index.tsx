/* eslint-disable react-hooks/exhaustive-deps */
import LoginComponent from "../components/LoginComponent";
import { useAuthContext } from "../providers/AuthContext";
import Order from "./Order";

const Index = () => {
  const { isAuth } = useAuthContext();
  return <>{isAuth ? <Order /> : <LoginComponent />}</>;
};

export default Index;
