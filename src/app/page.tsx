import { API_BASE_URL } from "@/constants";
import { log } from "console";

export default function Home() {
  log(API_BASE_URL)
  return (
    <h1>Home</h1>
  );
}
