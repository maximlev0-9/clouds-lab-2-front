const url = "http://localhost:7071/api/carrier";

export const post = async (input) => {

  await fetch(url, {
    method: "POST",
    headers: {  
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(input),
  })

}