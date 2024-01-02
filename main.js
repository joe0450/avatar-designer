import "./style.css";
import {createAvatar, optionValues} from "./avatar.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Avatar Designer</h1>
    <p>
      Upload your image or try one of the provided options.
    </p>
    <div class="avatar-container">
      <img class="avatar" id="app-avatar" value="/default-avatars/cat1.png" />
    </div>
    <div class="image-btns">
      <button id="btn-1" class="image-btn" value="/default-avatars/cat1.png">Image 1</button>
      <button id="btn-2" class="image-btn" value="/default-avatars/cat2.jpg">Image 2</button>
      <button id="btn-3" class="image-btn" value="/default-avatars/cat3.png">Image 3</button>
    </div>
    <div class="app-inputs">
      <label for="image-size">Adjust image size.</label><br />
      <input value="${optionValues["image-size"]}" class="avatar-options" id="image-size" type="range" /><br />

      <label for="border-thickness">Adjust border thickness.</label><br />
      <input value="${optionValues["border-thickness"]}" class="avatar-options" id="border-thickness" type="range" /><br />

      <label for="border-radius">Adjust border radius.</label><br />
      <input value="${optionValues["border-radius"]}" class="avatar-options" id="border-radius" type="range" /><br />

      <label for="border-color">Choose border color.</label><br />
      <input value="${optionValues["border-color"]}" class="avatar-options" id="border-color" type="color" />
    </div>
  </div>
`;

createAvatar();
