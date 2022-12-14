import axios from "axios";
import { parseCookies } from "nookies";
import { QueryClient } from "react-query";

const cookies = parseCookies();

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // headers: {
  //   Authorization: cookies.ACCESS_TOKEN,
  // },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
