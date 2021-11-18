import { getData } from "../src/utils/getData.js";
const directorio = await getData();
console.log("data", directorio);

export const users = async () => {
  const renders = document.getElementById("root");
  const directorio = await getData();
  let render = (element) => {
    const { title, first, last } = element.name;
    const name = `${title} ${last} ${first} `;
    const { city, state, country } = element.location;
    const location = `${city} ${state} ${country} `;
    return `
      <article class='column item__data column__3'>
        <div class= "content">
                <picture>
                    <img class="imgDeta-option" src="${element.picture.large}" />
                </picture>
                <ul class="poster-detail__data">
                    <li><h5>Name</h5> <span>${name}</span></li>
                    <li><h5>Gender</h5> <span>${element.gender}</span></li>
                    <li><h5>Email</h5> <span>${element.email}</span></li>
                    <li><h5>Date</h5> <span>${element.dob.date}</span></li>
                    <li><h5>Phone</h5> <span>${element.phone}</span></li>
                    <li><h5>Location</h5> <span>${location}</span></li>
                </ul>
         </div>
     </article>`;
  };
  let elements = [];
  directorio.forEach(element => elements.push(render(element)));
  renders.innerHTML = elements.join("");
};
users();
