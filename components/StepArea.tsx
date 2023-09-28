"use client";

import { useState } from "react";
import Box from "./Box";
import StepTitle from "./StepTitle";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { decryptAES, encryptAES } from "@/util/aes";
interface Wallet {
  privateKey: string;
  address: string;
  encryptedPrivateKey?: string;
  decryptedPrivateKey?: string;
}

export default function StepArea() {
  const [account, setAccount] = useState<Wallet>({
    privateKey: "",
    address: "",
  });

  const createWallet = () => {
    const privateKey = generatePrivateKey();
    const account = privateKeyToAccount(privateKey);

    setAccount({
      privateKey,
      address: account.address,
    });
  };

  const encryptByPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const password = e.currentTarget.password.value;

    if (password === "") {
      alert("Please set password.");
      return;
    }

    // encrypt private key by password (AES)
    const encryptedPrivateKey = encryptAES(account.privateKey, password);

    setAccount({
      ...account,
      encryptedPrivateKey,
    });
  };

  const decryptByPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const password = e.currentTarget.password.value;

    if (password === "") {
      alert("Please set password.");
      return;
    }

    // decrypt private key by password (AES)

    const encryptedPrivateKey = account.encryptedPrivateKey;

    if (!encryptedPrivateKey) {
      alert("Error: encryptedPrivateKey is empty.");
      return;
    }

    const decryptedPrivateKey = decryptAES(encryptedPrivateKey, password);

    if (!decryptedPrivateKey) {
      alert("Error: Wrong password!");
      return;
    }

    const decryptedAccount = privateKeyToAccount(
      decryptedPrivateKey as `0x${string}`
    );

    console.log("decryptedAccount", decryptedAccount);

    if (decryptedAccount.address !== account.address) {
      alert("Error: decrypted account address is different.");
      return;
    }

    setAccount({
      ...account,
      decryptedPrivateKey,
    });
  };

  return (
    <>
      <Box type="client">
        <StepTitle>1. Press the button</StepTitle>
        <button
          disabled={account.privateKey !== ""}
          onClick={createWallet}
          className="rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 px-3 py-2 hover:to-blue-500"
        >
          <span className="font-bold text-white text-sm">
            Create My Wallet!
          </span>
        </button>
      </Box>
      {account.privateKey !== "" && (
        <Box type="server">
          <StepTitle>Create Private Key (System)</StepTitle>
          <dl className="px-4 flex flex-col gap-2">
            <div>
              <dt className="font-bold text-xs">Private Key</dt>
              <dd className="text-sm font-mono max-w-sm overflow-auto p-2 bg-gray-200 rounded-lg text-gray-700">
                {account.privateKey}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-xs">Address</dt>
              <dd className="text-sm font-mono max-w-sm overflow-auto p-2 bg-gray-200 rounded-lg text-gray-700">
                {account.address}
              </dd>
            </div>
          </dl>
        </Box>
      )}
      {account.privateKey && (
        <Box type="client">
          <StepTitle>2. Please Set Password</StepTitle>
          <form onSubmit={encryptByPassword} className="flex flex-col gap-1">
            <input
              name="password"
              type="password"
              className="px-3 py-2 rounded-lg border border-gray-400"
            />
            <button className="rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 px-3 py-2">
              <span className="font-bold text-white text-sm">
                Set Password!
              </span>
            </button>
          </form>
        </Box>
      )}
      {account.encryptedPrivateKey && (
        <Box type="server">
          <StepTitle>Store Encrypted Private Key</StepTitle>
          <dl className="px-4 flex flex-col gap-2">
            <div>
              <dt className="font-bold text-xs">AES encryption</dt>
              <dd className="text-sm font-mono max-w-sm overflow-auto p-2 bg-gray-200 rounded-lg text-gray-700">
                {account.encryptedPrivateKey}
              </dd>
            </div>
          </dl>
        </Box>
      )}
      {account.encryptedPrivateKey && (
        <Box type="server">
          <StepTitle>
            4. Please enter your password <br />
            if you want to use your wallet
          </StepTitle>
          <form onSubmit={decryptByPassword} className="flex flex-col gap-1">
            <input
              name="password"
              type="password"
              className="px-3 py-2 rounded-lg border border-gray-400"
            />
            <button className="rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 px-3 py-2">
              <span className="font-bold text-white text-sm">
                Use My Wallet!
              </span>
            </button>
          </form>
        </Box>
      )}
      {account.decryptedPrivateKey && (
        <Box type="server">
          <StepTitle>Server will decrypt</StepTitle>
          <dl className="px-4 flex flex-col gap-2">
            <div>
              <dt className="font-bold text-xs">Decrypted Private Key</dt>
              <dd className="text-sm font-mono max-w-sm overflow-auto p-2 bg-gray-200 rounded-lg text-gray-700">
                {account.decryptedPrivateKey}
              </dd>
            </div>
          </dl>
        </Box>
      )}
    </>
  );
}
