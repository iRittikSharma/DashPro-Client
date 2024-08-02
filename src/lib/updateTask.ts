import axios from "axios";

export async function updateTask(
  taskId: string,
  data: Partial<Todo>,
  jwtToken: string
) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/updateTask?id=${taskId}`;
  const token = `Bearer ${jwtToken}`;

  const config = {
    headers: {
      authorization: token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await axios.put(url, data, config);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
