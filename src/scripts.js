let product_title = "";
let product_name = "";
let product_description = "";
let product_pic = "";
let product_features = [];
let product_id = "";

const main = document.getElementById('main');
const boutons = document.querySelectorAll('.show-button');

boutons.forEach(function(bouton) {
    bouton.addEventListener('click', function() {
        const dataId = bouton.getAttribute('data-id');
        switch (dataId) {
        case "1":
            product_title = "Test Internet v2.0";
            product_name = "Test_Internet_v2.0_By_happy32x";
            product_description = "Test Internet v2.0 is a simple yet powerful tool designed to diagnose network problems. It allows users to assess the state of their Internet or LAN connection through a series of tests.";
            product_imgurl = "img\\Test_Internet_download.png";
            product_features = ["Simple, Robust, Reliable","Windows 8,10,11 compatible"];
            product_id = "1fndAj2dhelClK4X_LYwbwtt8T5IRN-0v";
            break;
        case "2":
            product_title = "FAST PC v2.0";
            product_name = "FAST_PC_v2.0_By_Happy32x";
            product_description = "FAST PC v2.0 is an intuitive, high-performance application designed to optimize and accelerate your computer's speed. Thanks to its simple algorithm, it identifies and eliminates the elements that slow down your system, while maintaining its performance over the long term.";
            product_imgurl = "img\\FAST_PC_Download.png";
            product_features = ["Simple, Robust, Reliable","Windows 8,10,11 compatible"];
            product_id = "1KTVaFTiXICsbIWDx0V5zTXqIWnlPGo1U";
            break;
        case "3":
            product_title = "HotSpot Persistence v3.0";
            product_name = "HotSpot_v3.0_By_Happy_32x";
            product_description = "HotSpot Persistence v3.0 is a powerful, simple and easy-to-use application that turns your device into a portable Wi-Fi hotspot and ensures network persistence. Ideal for securely sharing your Internet connection with other devices or friends and family.";
            product_imgurl = "img\\HotSpot_Happy_32x_Setup_Icon.png";
            product_features = ["Simple, Robust, Reliable","Windows 8,10,11 compatible"];
            product_id = "1BAM4kcqA0bRQySGPc2dZ_H2EtiUIj_9q";
            break;
        default:
            break;
        }

        Populate();
    });
});

function Populate() { 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.innerHTML = 
    ` 
    <div>
    <button id="returnButton" onclick="returnHome();"><< Return</button>
    <div class="sub_product">
        <h1>${product_title}</h1>
        <p><strong>Description :</strong> ${product_description} </p>
        <img src="${product_imgurl}" alt="${product_title}">
        <h2>Main Features :</h2>
        <ul>
            <li><strong>Qualities :</strong> ${product_features[0]}</li>
            <li><strong>Operating System :</strong> ${product_features[1]}</li>
        </ul>
                
        <h2>Download Available :</h2>
        <button class="download-button" onclick="downloadFile()">Download ${product_name} <img src="img\\windows_logo.png"></button>
        </div>
    </div>
    `;
}

function downloadFile() {
    const fileURL = "https://drive.google.com/uc?export=download&id="+product_id;
    window.open(fileURL, "_blank");
}

function returnHome() {
    window.location.href = "index.html";
}