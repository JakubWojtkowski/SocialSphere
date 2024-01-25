import React, { useState } from "react";
import "./LoginPage.css";
import BeatLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../features/user/userSlice";

function LoginPage() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async () => {
    setIsLoading(true);

    await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/MainArea");
        }
        setIsLoading(false);
        return res.json();
      })
      .then((json) => {
        dispatch(
          setUserLogin({
            name: json.name,
            email: json.email,
            photo: json.userImage,
            password: json.password,
            posts: json.postsIds,
            followed: json.followedUsersIds,
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">SocialSphere</div>
        <div className="title">Poznawaj nowych ludzi i wchodź w dyskusje.</div>
      </div>
      <div className="loginContainer">
        <div className="logindetail">
          <input
            type="email"
            name="email"
            placeholder="Adres email"
            onChange={handleChange}
          />
          <br></br>
          <input
            type="Password"
            name="password"
            placeholder="Hasło"
            onChange={handleChange}
          />
          <br></br>
          <button className="btn" onClick={signIn}>
            {isLoading ? (
              <BeatLoader color="#ffffff" size={15} />
            ) : (
              "Zaloguj się"
            )}
          </button>
        </div>
        <div className="forget">
          <a href="forget">Zapomniałeś hasła?</a>
          <br></br>
        </div>
        <div className="create">
          <br></br>
          <button className="btns">Utwórz nowe konto</button>
        </div>
        <p></p>
        <br></br>
      </div>
    </div>
  );
}

export default LoginPage;
