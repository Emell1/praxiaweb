export async function getToken(): Promise<string | null> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: import.meta.env.VITE_API_USER,
          password: import.meta.env.VITE_API_PASS,
        }),
        redirect: "follow" as RequestRedirect,
      });
  
      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return null;
      }
  
      const data = await response.json() as { token?: string };
      
      if (data.token) {
        console.log("Token:", data.token);
        return data.token;
      } else {
        console.warn("Token not found in response:", data);
        return null;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }
  