import cryptoJS from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";

// AES256 ENCRYPT
export function encryptAES(data: string, password: string) {
  return cryptoJS.encrypt(data, password).toString();
}

// AES256 DECRYPT
export function decryptAES(data: string, password: string) {
  return cryptoJS.decrypt(data, password).toString(encUtf8);
}
