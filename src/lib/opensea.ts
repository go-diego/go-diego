import {Collection} from "types";

export const getCollection = async (address: string): Promise<Collection> => {
  const url = `https://api.opensea.io/api/v1/asset_contract/${address}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
