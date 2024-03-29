import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("sidebar");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="sidebar">go to sidebar page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
};

export default Home;
