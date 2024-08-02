import axios from "axios";
import qs from "qs";
export async function getUserDetails(jwToken: string | null) {
  if (jwToken == null) return;

  const token = `Bearer ${jwToken}`;
  const data = qs.stringify({});

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/getUserDetails`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: token,
        },
      }
    );
    const responseData = response.data;

    return responseData.data;
  } catch (error) {
    console.log(error);
  }
}
