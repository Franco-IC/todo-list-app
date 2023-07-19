import axios from "axios";
import { API_BASE_URL, API_KEY } from "./config";

export async function getTasks(author) {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks/author/${author}`, {
      headers: {
        "Content-Type": "application/json",
        api_key: API_KEY,
      },
    });

    return response.data ? response.data : null;
  } catch (error) {
    console.log(error);
  }
}
