import http from "./httpService";
import helpers from "./crypto";
import { jwtDecode } from "jwt-decode";
const tokenKey = "authToken";

const apiUrl = process.env.REACT_APP_API_URL;

export async function backEndCall(route) {
  updtk();
  const { data } = await http.post(apiUrl + route);
  return helpers.decryptObj(data);
}

export async function backEndCallObjNoEnc(route, obj) {
  updtk();
  const { data } = await http.post(apiUrl + route, obj);

  return helpers.decryptObj(data);
}

export async function backEndCallNoEnc(route) {
  updtk();
  const { data } = await http.post(apiUrl + route);
  return data;
}

export async function backEndCallObj(route, obj) {
  updtk();
  const drreqpob = await helpers.encryptObj(obj);
  const { data } = await http.post(apiUrl + route, {
    enc: drreqpob,
  });
  return helpers.decryptObj(data);
}

export async function getVersion(route, obj) {
  updtk();

  const { data } = await http.post(apiUrl + route);
  return helpers.decryptObj(data);
}
export async function getVersionObj(route, obj) {
  updtk();
  const drreqpob = await helpers.encryptObj(obj);
  const { data } = await http.post(apiUrl + route, {
    enc: drreqpob,
  });
  return helpers.decryptObj(data);
}

export async function updtk() {
  const token = getJwt();
  if (!token) {
    console.warn("No Token in header");
  }
  http.setJwt(getJwt());
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default function getCurrentUser() {
  try {
    const title = localStorage.getItem(tokenKey);
    if (title) {
      const jwt = helpers.decrypt(title);
      console.log(jwt, "eee");

      const decoded = jwtDecode(jwt);

      console.log(decoded, "decoded");
      if (decoded.exp >= Date.now() / 1000) {
        return decoded;
      } else {
        // logout();
      }
    } else {
      return null;
    }
  } catch (ex) {
    return null;
  }
}
