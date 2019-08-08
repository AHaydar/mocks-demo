import * as md5 from "md5";
import * as constants from "./keys";

interface marvelApisArgs {
  ts : string;
  hash: string;
  apikey: string
}

export const generateAPIAuthorizationKeys = (): marvelApisArgs => {
  const date = new Date();
  const timestamp = date.getTime();
  const hash = md5(timestamp + constants.privateKey + constants.publicKey);
  return { 
    ts: timestamp.toString(),
    hash,
    apikey: constants.publicKey
  }
};
