export const BASE_URL = "https://json-api.uz/api/project/maqola";
// const accessToken = user.access_token;
//   const refreshToken = user.refresh_token;

//   function decodeToken(token) {
//     const payload = JSON.parse(atob(token.split(".")[1])); // Tokenning payload qismini decoding qiladi
//     return payload;
//   }

//   function isTokenExpired(token) {
//     const { exp } = decodeToken(token); // Tokenning `exp` qiymatini olamiz
//     const expiration = exp * 1000; // `exp` millisekundlarga aylantiriladi
//     const now = Date.now();
//     return now > expiration; // Hozirgi vaqtni tekshiradi
//   }

//   console.log("Access token expired:", isTokenExpired(accessToken));
//   console.log("Refresh token expired:", isTokenExpired(refreshToken));

//   console.log(isTokenExpired(accessToken));
