import { getToken } from "../../utils/getToken";

export async function fetchPaymentLink(setPaymentLink,setLoader){
    const url = `${import.meta.env.VITE_API_URL}/create-order`;
    const PayLink = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getToken(),
        "Content-Type": "application/json",
      },
    });
    const data = await PayLink.json();
    setPaymentLink(data.link_pay);
    setLoader(false);
  };