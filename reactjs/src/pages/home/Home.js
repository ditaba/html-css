import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/sidebar">go to sidebar page</Link>
      </p>
    </>
  );
};

export default Home;
