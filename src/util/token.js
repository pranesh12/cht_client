import { currentUser } from "../Redux/store/store";

const token = currentUser?.token;
export const headers = { headers: { Authorization: `Bearer ${token}` } };
