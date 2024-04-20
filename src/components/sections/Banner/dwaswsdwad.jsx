import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as buffer from "buffer";
import { Button } from "@/components/ui/button";
window.Buffer = buffer.Buffer;

export const SendSolForm = ({userInput}) => {
  
  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  // console.log(publicKey);

  const link = () => (txSig ? `https://solscan.io/tx/${txSig}` : "");

  const sendSol = (event) => {
    event.preventDefault();

    if (!connection || !publicKey) {
      return;
    }

    const amount = parseFloat(userInput);
    

    const transaction = new web3.Transaction();
    const recipientPubKey = new web3.PublicKey("4zxutAXCnfDBBxmvbEX4bNGYSDU96JEP1Hqnt8rjz6m7");

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: LAMPORTS_PER_SOL * amount,
    });

    transaction.add(sendSolInstruction);

    sendTransaction(transaction, connection)
      .then((sig) => {
        setTxSig(sig);
      })
      .catch((error) => {
        console.error("Error sending transaction:", error);
        // Handle the error, show a message to the user, etc.
      });
  };

  return (
    <div>
      {publicKey ? (
        <form onSubmit={sendSol} className="form">
          {/* <input type="number" name="amount" placeholder="Enter amount" required /> */}
          <Button className="w-full bg-[#02B81C] ] border border-[#40FE5B] text-[18px] rounded-[10px] px-12 py-6 mt-6" type="submit">
            BUY
          </Button>
        </form>
      ) : (
        <WalletMultiButton
          style={{
            backgroundColor: "#02b81c",
            marginTop: "10%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            fontWeight: 500, // Assuming "font-medium" refers to a medium font weight
            outline: "none",
            boxShadow: "0 0 0 2px rgba(2, 184, 28, 0.73)", // Assuming ring-offset-background is a shadow color
            fontSize: 18,
          }}
        >CONNECT WALLET </WalletMultiButton>
      )}
      {txSig ? (
        <div>
          <p style={{ fontSize: "20px" }}>
            Successfully bought $SAT.<a href={link()}> <br /> Check your transaction here.</a>
          </p>
        </div>
      ) : null}
    </div>
  );
};
