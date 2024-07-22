import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../assets/botimage.avif";

function AgentLogin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/AgentDashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const formData = {
      username,
      password,
    };

    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(formData, undefined, 2));
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }

    // Update state
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Container */}
      <div className="md:w-1/2 md:flex items-center justify-center bg-[#ffffff] overflow-hidden hidden md:block">
        <img src={image} alt="Logo" className="max-w-full h-auto" />
      </div>
      {/* Login Card Container */}
      <div className="flex items-center justify-center w-full md:w-1/2  bg-[#D5D8F2] p-4 h-screen md:h-auto">
        <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col w-full max-w-sm mx-auto">
          {" "}
          {/* Ensure max-w-sm for the card */}
          <h5 className="font-poppins text-xl text-center py-4 text-[#666ee2]">
            Login
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <div className="flex border border-[#a5a5a597] bg-white rounded">
                <input
                  value={username}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={handleChange}
                  className="w-full h-full rounded px-4 py-2 focus:outline-none"
                />
              </div>
              {errors.username && (
                <h6 className="text-left text-xs mb-3 text-red-500">
                  {errors.username}
                </h6>
              )}
              <div className="flex border border-[#a5a5a597] bg-white rounded relative">
                <input
                  value={password}
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  className="w-full h-full rounded px-4 py-2 focus:outline-none"
                />
                <div
                  onClick={() => setVisible(!visible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                >
                  {visible ? (
                    <FaEye className="text-gray-400 text-lg" />
                  ) : (
                    <FaEyeSlash className="text-gray-400 text-lg" />
                  )}
                </div>
              </div>
              {errors.password && (
                <h6 className="text-left text-xs mb-3 text-red-500">
                  {errors.password}
                </h6>
              )}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#666ee2] text-white rounded-md hover:bg-[#5058e5] transition duration-300"
                onClick={handleButtonClick}
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#666ee2] font-medium hover:underline"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgentLogin;
