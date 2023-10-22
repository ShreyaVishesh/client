import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0xB4991C905e3FfF2fe2122D3f98f53bCAf1E9cee2");
  const { mutateAsync: purchaseElectricity, isLoading } = useContractWrite(contract, "purchaseElectricity")
  const _offerIndex = 10;
  const _quantityKWh = 20;

  const call = async () => {
    try {
      const data = await purchaseElectricity({ args: [_offerIndex, _quantityKWh] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}