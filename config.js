// Personalize com o link público da sua pasta do Google Drive.
const certificadosUrl = "";
const fotoUrl = ""; // Exemplo: "assets/minha-foto.jpg"
if (fotoUrl) document.querySelector(".avatar").src = fotoUrl;
document.querySelector("#certificados").addEventListener("click", () => {
  if (certificadosUrl) window.open(certificadosUrl, "_blank", "noopener,noreferrer");
  else document.querySelector("dialog").showModal();
});
document.querySelector("#fechar").addEventListener("click", () => document.querySelector("dialog").close());
