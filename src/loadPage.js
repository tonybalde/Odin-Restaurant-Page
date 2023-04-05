
export function initialLoad(){
  
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children
    contentDiv.replaceChildren();

    // Create the H1
    const h1Title = document.createElement("h1");
    h1Title.textContent = "Tony's Pizza"
    h1Title.classList.add("title");
    contentDiv.appendChild(h1Title);
    
    // Create the image
    const topImage = document.createElement("img");
    topImage.classList.add("home-img");
    topImage.src = "/images/pizza.jpg";
    topImage.alt = "Restaurant Image";
    contentDiv.appendChild(topImage);

    // Create the Paragraph
    const para = document.createElement("p");
    para.textContent = "Serving the best pizza in town since 1956!";
    para.classList.add("para-home");
    contentDiv.appendChild(para);

}