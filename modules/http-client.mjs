import https from "https";

const endPoint =
  "https://www.toptal.com/developers/postbin/1712989280676-3170465303119";
const request = https.request(
  endPoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Marwan",
  lastName: "Hadid",
});

request.write(body);
request.end();
