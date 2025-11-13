document.addEventListener("DOMContentLoaded", function() {
    const bouton = document.getElementById("valider");
    bouton.addEventListener("click", function() {
        let url = document.getElementById("url").value; // récupère l'URL de l'input
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }

      
        let hostname = url.split("://")[1];    
        hostname = hostname.split("/")[0];
        let nomSite = hostname;                

       
        const lien = document.createElement("a");
        lien.href = url;
        lien.textContent = nomSite;
        lien.target = "_blank"; 

      
        const resultat = document.getElementById("resultat");
        resultat.innerHTML = ""; 
        resultat.appendChild(lien);
    });
});
