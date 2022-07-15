const APIEXT = process.env.REACT_APP_API;
const API_TOKEN=process.env.REACT_APP_API_TOKEN;


export function get(path) {
  // {console.log("9-El valor de API_TOKEN es."+API_TOKEN);}
  // {console.log("El valor de la variable APIEXT es:"+APIEXT);}
    return fetch(APIEXT + path, {
      headers: {
        Authorization:
        "Bearer " + API_TOKEN,
        "Content-Type": "application/json;charset=utf-8"
      },
    }).then((result) => result.json());
}