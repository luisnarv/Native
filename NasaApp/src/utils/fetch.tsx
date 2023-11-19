const APIKEY = "0lJDnjBKi2GyXm4ScLaxeQWKE5byPwecTcAoAHUO";
const API = "https://api.nasa.gov/planetary/apod";

export default async (urlParams?: string) => {
  try {
    const data = await fetch(
      `${API}?api_key=${APIKEY}${urlParams ? urlParams : ""}`
    );
    const response = await data.json();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
