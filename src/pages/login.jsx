import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  const goSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div className="w-3/4">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-6">Login</h2>
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" text="Login" style={{ marginRight: "10px" }} onClick={(e) => handleSubmit(e)} />
        <Button
          type="button"
          text="Sign up"
          className="bg-green-500 hover:bg-green-600"
          onClick={() => goSignupPage()}
          style={{ marginLeft: "10px" }}
        />
      </form>
    </div>
  );
};
