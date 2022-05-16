import {Transaction} from "types";

export const getNFTTransactionsByAddress = async (
  address: string
): Promise<Transaction[]> => {
  const url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const response = await fetch(url);
  // console.log("response", response);
  const json = await response.json();
  // console.log("json", json);
  return json?.result;
};
