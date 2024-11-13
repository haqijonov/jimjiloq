import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LoginImg from "../img/Login.svg";
import { getFormData } from "../utils/index";
import { login } from "../request/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../feature/userSlice";
import { UpdateIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userNmae, setUserName] = useState("");
  const [userNmaeValidation, setUserNameValidation] = useState(null);
  const [userPassword, setUserNamePassword] = useState("");
  const [userPasswordValidation, setUserPasswordValidation] = useState(null);

  const handleUserNameValidation = (e) => {
    const value = e.target.value;
    setUserName(value);
    setUserNameValidation(value.length > 3);
  };
  const handleUserPasswordValidation = (e) => {
    const value = e.target.value;
    setUserNamePassword(value);
    setUserPasswordValidation(value.length >= 6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = getFormData(e.target);
    if (!userNmaeValidation) {
      toast.warning(`Username should be at least 3 characters long`);
      setLoading(false);
      return;
    }
    if (!userPasswordValidation) {
      toast.warning("User password should be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      await login(result).then((user) => {
        dispatch(setUser(user));
        toast.success(
          `Welcome ${
            user.username.charAt().toUpperCase() + user.username.slice(1)
          }`
        );
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-lvh items-center justify-around ">
      <div className="hidden md:block md:w-1/2 mx-auto ">
        <img src={LoginImg} className="w-full lg:w-[400px] mx-auto" alt="img" />
      </div>
      <div className="w-[95%] md:w-1/2">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="md:shadow-none w-full shadow-md md:w-[85%] lg:w-[55%] p-5  flex flex-col gap-3 mx-auto"
        >
          <div className="w-[70px] block md:hidden p-2 border mx-auto h-[70px] rounded-full overflow-hidden">
            <img
              src={LoginImg}
              className="w-full  h-full object-cover"
              alt=""
            />
          </div>
          <h3 className="text-center font-bold text-2xl text-primaryColor">
            If you have an Account
          </h3>
          <div>
            {" "}
            <Label htmlFor="username">username</Label>
            <Input
              className={
                userNmaeValidation === null
                  ? ""
                  : userNmaeValidation
                  ? "focus-visible:ring-0 border-green-500"
                  : "focus-visible:ring-0 border-red-500"
              }
              onChange={handleUserNameValidation}
              value={userNmae}
              id="username"
              name="username"
              placeholder="user name"
            />
          </div>
          <div>
            <Label htmlFor="password">password</Label>
            <Input
              id="password"
              name="password"
              onChange={handleUserPasswordValidation}
              value={userPassword}
              placeholder="password"
              className={
                userPasswordValidation === null
                  ? ""
                  : userPasswordValidation
                  ? "focus-visible:ring-0 border-green-500"
                  : "focus-visible:ring-0 border-red-500"
              }
            />
          </div>
          <Link
            to={"/register"}
            className="hover:underline text-primaryColor opacity-80 "
          >
            if you haven't an acount{" "}
          </Link>
          <Button disabled={loading}>
            {loading ? (
              <>
                loading <UpdateIcon className={"animate-spin"} />
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
