export default async function sendMessage(
  clientEmail,
  clientName,
  clientMessage,
) {
  console.log("Sending message...");
  let data = {
    service_id: "service_0aduwf7",
    template_id: "template_fqx0t1p",
    user_id: "FjlT5ALyFZ9bwMptt",
    template_params: {
      title: "Portafolio - ArdaDev",
      email: clientEmail,
      name: clientName,
      message: clientMessage,
    },
  };

  await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      // let resJson = res.json();
      if (res.status === 200) {
        console.log("Mensaje enviado exitosamente!");
        // console.log(resJson);
      } else {
        console.error("Fallo el envio del mensaje.");
        // console.log(resJson);
      }
    })
    .catch((reason) => {
      console.log("Failed to send message:" + reason);
    });
}
