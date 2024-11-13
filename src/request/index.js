import { BASE_URL } from "@/constants";
// refresh token
export const refreshToken = async () => {
  let token = JSON.parse(localStorage.getItem("user"));
  const res = await fetch(BASE_URL + "/auth/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: token?.access_token }),
  });

  if (res.status === 200 || res.status === 201) {
    return await res.json();
  } else if (res.status == 403) {
    throw new Error(403);
  } else {
    throw new Error("Nimadir hatolik bo'ldi");
  }
};

// register
export async function register(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("already registered");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
// login
export async function login(data) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else {
      throw new Error("Something went wrong.");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}

// get admin
export async function getAdmin() {
  let token = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.access_token}`,
      },
      body: JSON.stringify(),
    });

    if (res.ok) {
      return await res.json();
    } else if (res.status === 400) {
      throw new Error("Check your password or username.");
    } else if (res.status === 403) {
      throw new Error(403);
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
