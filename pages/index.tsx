import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContractWrite } from "@thirdweb-dev/react";
import createOffer from '../components/MycreateOffer';
import purchaseElectricity from '../components/MypurchaseElectricity'
const Home: NextPage = () => {
  const address = useAddress();

  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <h1>TRADE ENERGY</h1>
          <ConnectWallet />
        </div>{address && (
            <div className={styles.addressListContainer}>
              <div className={styles.addressListHeader}>
                <h3><button onClick={createOffer}>Create Offer</button></h3>
              </div>
              </div> 
          )}
       {address && (
            <div className={styles.addressListContainer}>
              <div className={styles.addressListHeader}>
                <h3><button onClick={purchaseElectricity}>Purchase Electricity</button></h3>
              </div>
              </div> 
          )}   
      </div>
    </div>
  );
};


export default Home;