import axios from "axios";
import qs from "qs";
import { NewLifecycle } from "react";

interface task {
  title: string;
  description: string;
  deadline: string;
  status: string;
  priority: string;
  userId: string | null;
}
export async function addTask(jwToken: string | null, task: task | null) {
  // Serialize data to application/x-www-form-urlencoded format
  if (jwToken == null) return;
  const data = qs.stringify(task);

  const token = `Bearer ${jwToken}`;

  try {
    const response = await axios.post(
      "http://localhost:4001/api/v1/addTask", // Note: Ensure this URL is correct and includes the protocol (http/https)
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: token,
        },
      }
    );
    const responseData = response.data;
    console.log(responseData);

    return responseData.data;
  } catch (error) {
    console.log(error);
    alert("Error fetching the data");
  }
}
