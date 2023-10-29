"use client"
import { useAddress } from "./useAddress";

function ConnectAddress() {

    
  const address = useAddress();

  console.log("address: ", address);
  if (!address) return <div>No wallet connected</div>;
  
  return (
    <div>My wallet address is {address}</div>
  );
}

export default ConnectAddress;