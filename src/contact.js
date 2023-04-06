export function contact() {

    const contentDiv = document.querySelector("#content");

    // Remove
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Tony's Pizza Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for phoneImage
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image");
    phoneImage.src = "images/phone.jpg";
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    // DOM for P tag for phoneImage
    const para1PhoneImage = document.createElement("p");
    para1PhoneImage.classList.add("contact-copy");
    para1PhoneImage.textContent = "Call us!";
    contentDiv.appendChild(para1PhoneImage);

    // DOM for emailImage
    const emailImage = document.createElement("img");
    emailImage.classList.add("image");
    emailImage.src = "images/email.jpg";
    emailImage.alt = "Image of email";
    contentDiv.appendChild(emailImage);

    // DOM for P tag for emailImage
    const para1EmailImage = document.createElement("p");
    para1EmailImage.classList.add("contact-copy");
    para1EmailImage.textContent = "Email us at something@mail.com";
    contentDiv.appendChild(para1EmailImage);

    // DOM for addressImage
    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = "images/address.jpg";
    topImage.alt = "Image of mailing address";
    contentDiv.appendChild(topImage);

    // DOM for P tag for emailImage
    const para3AddressImage = document.createElement("p");
    para3AddressImage.classList.add("contact-copy");
    para3AddressImage.textContent = "Our address is 4321 Fake Street, Some Town, Some Country";
    contentDiv.appendChild(para3AddressImage);

}