if (navigator.serviceWorker) {  //de esat forma o "seviceWorker" in navigator
   // console.log("si existe");
    navigator.serviceWorker.register("./sw.js")
}