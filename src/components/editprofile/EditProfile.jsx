import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@radix-ui/react-avatar";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import { getAdmin, refreshToken } from "../../request/index";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/userSlice";

function EditProfile() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);
  const [value, setValue] = useState(user.username);
  console.log(admin);
  const [shortBio, setShortBio] = useState("");
  useEffect(() => {
    getAdmin()
      .then((admin) => {
        setAdmin(admin);
      })
      .catch(({ message }) => {
        if (message === 403) {
          refreshToken()
            .then(({ access_token }) => {
              dispatch(setUser({ ...user, access_token }));
            })
            .catch(() => {
              setUser(null);
            });
        }
      });
  }, [user]);
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center gap-1  opacity-60 hover:opacity-100">
          Edit Profile <Pencil1Icon />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 text-center">
            Profile information
          </DialogTitle>
          <div className="flex gap-4">
            <DialogDescription className={"flex  items-start "}>
              <Avatar className={"w-[55px] h-[55px]"}>
                <span className="">Photo</span>
                <AvatarImage
                  src={user && user.avatar ? user.avatar : ""}
                  alt={user && user.username ? user.username : "Avatar"}
                />
                <AvatarFallback className="uppercase text-2xl text-primaryColor">
                  {user && user.username ? user.username.charAt(0) : ""}
                </AvatarFallback>
              </Avatar>
            </DialogDescription>
            <DialogDescription className={"flex flex-col items-start gap-4"}>
              <span className="flex items-start gap-4">
                <span className="text-primaryColor font-medium">Update </span>
                <span className="text-red-500 font-medium">Remove </span>
              </span>
              <span>
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </span>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogDescription>
          <Label htmlFor={"name"}>
            user name
            <Input
              id={"name"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Label>
          <Label htmlFor={"name"}>
            short bio
            <Input
              id={"name"}
              name="name"
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
            />
          </Label>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default EditProfile;
