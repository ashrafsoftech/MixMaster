import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error.message);
  return <div>{error.message}</div>;
};
export default SinglePageError;
