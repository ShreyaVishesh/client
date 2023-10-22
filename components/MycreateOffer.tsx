import React, { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
export default function Component() {
  const { contract } = useContract("0xB4991C905e3FfF2fe2122D3f98f53bCAf1E9cee2");

  const { mutateAsync: createOffer, isLoading } = useContractWrite(contract, "createOffer")
  const _pricePerKWh = 10;
  const _quantityKWh = 20;
  const _isRenewable = true;


  const call = async () => {
    try {
      const data = await createOffer({ args: [_pricePerKWh, _quantityKWh, _isRenewable] });
      console.info("Offer created successfully!", data);
    } catch (err) {
      console.error("Failed to create offer:", err);
    }
  }

  return (
    <div>
      <button disabled={isLoading} onClick={call}>Create Offer</button>
    </div>
  );
}