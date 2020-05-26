import * as CryptoJS from 'crypto-js';
import { ApiKeys } from '../constants/api-keys';

export class Crypt{
    public static encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), ApiKeys.encryptionKey).toString();
    } catch (e) {
      return "error";
    }
  }

  public static decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, ApiKeys.encryptionKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      return "error";
    }
  }
}