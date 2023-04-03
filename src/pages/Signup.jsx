import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUpSubmit = () => {
    console.log(`Email: ${email} Password: ${password}`);
    navigate("/login");
  };

  return (
    <div className="w-3/4 ">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-6">Sign up</h2>
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField label="Name" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="button"
          text="Sign up"
          className="bg-green-500 hover:bg-green-600"
          onClick={() => signUpSubmit()}
        />
      </form>
    </div>
  );
};
