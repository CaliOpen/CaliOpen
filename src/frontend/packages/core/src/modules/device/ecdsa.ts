import { ec as EC } from "elliptic";

export const CURVE_TYPE = "p256";
export const CURVE_TYPE_ASSOC = {
  p256: "P-256",
};

// it depends on default props in curve p256 https://github.com/indutny/elliptic/blob/master/lib/elliptic/curves.js#L72-L79
export const HASH_NAME = "SHA256";

let ec: EC;

const getEC = () => {
  if (!ec) {
    ec = new EC(CURVE_TYPE);
  }

  return ec;
};

export const generateKeypair = () =>
  getEC().genKeyPair({
    // FIXME: temporary hardcoded string (fix «not yet implemented»)
    // cf. https://github.com/indutny/elliptic/issues/149#issuecomment-375078143
    // may be use https://www.npmjs.com/package/react-native-get-random-values
    entropy: "narusineusiensuinstuietldpéovjdépsxsyrsnlvjdvjdeinsrt",
  });
export const getKeypair = (priv: string) => getEC().keyFromPrivate(priv, "hex");
export const sign = (keypair: EC.KeyPair, hash: string) => keypair.sign(hash);
