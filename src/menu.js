
export function menu() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Im the HEADING";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for greenBeanCass
    const greenBeasCass = document.createElement("img");
    greenBeasCass.classList.add("image");
    greenBeasCass.src = "/images/muzzarella.jpg";
    greenBeasCass.alt = "Image of Muzzarella Pizza";
    contentDiv.appendChild(greenBeasCass);

    // DOM for p tag greenBeanCass
    const para1GreenBeanCass = document.createElement("p");
    para1GreenBeanCass.classList.add("menu-copy");
    para1GreenBeanCass.textContent = "An amazing and tasty Muzzarella Pizza";
    contentDiv.appendChild(para1GreenBeanCass);

    // DOM for macnCheese
    const macnCheese = document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src = "/images/pepperoni.jpg"
    macnCheese.alt = "Image of a Pepperoni Pizza";
    contentDiv.appendChild(macnCheese);

    // DOM for p tag macnCheese
    const para1macnCheese = document.createElement("p");
    para1macnCheese.classList.add("menu-copy");
    para1macnCheese.textContent = "Great Pepperoni Pizza";
    contentDiv.appendChild(para1macnCheese);    

}