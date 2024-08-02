import axios from "axios";
import qs from "qs";

export async function SignIn(email: string, password: string) {
  console.log(email, password);

  // Serialize data to application/x-www-form-urlencoded format
  const data = qs.stringify({
    email: email,
    password: password,
  });

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/logIn`, // Note: Ensure this URL is correct and includes the protocol (http/https)
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const responseData = response.data;

    return responseData.data;
  } catch (error) {
    alert("Error fetching the data");
  }
}
