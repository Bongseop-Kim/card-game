import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";
import axios from "axios";
import Cookies from "js-cookie";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    await axios
      .post("http://localhost:8000/api/users/login", JSON.stringify(form), {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
        Cookies.set("token", res.data.data.token);
        if (Cookies.get("token")) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };

  const goSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="w-3/4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-6">Login</h2>
        <InputField label="Email" type="email" id="email" name="email" value={email} onChange={onChange} />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Button type="submit" text="Login" onClick={handleLogin} style={{ marginRight: "10px" }} />
        <Button
          type="button"
          text="Sign up"
          className="bg-green-500 hover:bg-green-600"
          onClick={goSignup}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};
