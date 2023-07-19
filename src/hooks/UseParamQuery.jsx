import { useLocation } from "react-router-dom";

const useParamQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default useParamQuery;