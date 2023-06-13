import { getToken } from "../../utils/getToken";
import { toast } from "react-hot-toast";
import { addCart } from "./addCart";

export async function addModalCart(dataModal){
    if (getToken()) {
      const message = await addCart(dataModal);
      console.log(dataModal.id);
      console.log(message);

      if (message.error != undefined) {
        toast.error(message.error);
        return;
      }
      toast.success(message.message);
    } else {
      toast.error("Need Login");
    }
  };