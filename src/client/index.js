
import "./public/style/style.scss"

import { handleSubmit } from "./script/handleForm";
import { getRdays } from "./script/getRdays";


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js")
        .then((reg) => console.log(" Service Worker Registered!", reg))
        .catch((err) => console.log(" Service Worker Registration Failed", err));
    });
  }
  
export {
    getRdays,
    handleSubmit
}