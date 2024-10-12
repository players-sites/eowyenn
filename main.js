let areaDoTexto = `Qui nulla numquam aut architecto fuga nam voluptatum rerum aut unde quia et consequatur praesentium. Qui voluptatem ipsa qui doloribus minima sit placeat deserunt qui cumque dolores. Ut quasi nihil ut aliquam molestiae et illum nesciunt in tempore autem non quos neque At internos repellat. ─────<b style="color:#800000;"> aliquam cum veritatis voluptas </b>─────Eos corporis voluptatem ut neque nostrum est libero ratione? 33 quia nostrum eos doloribus aliquam cum veritatis voluptas eum vero reprehenderit. Ad quae voluptas qui soluta porro sit sint delectus.`;
char = {
  gif: "https://i.ibb.co/Qm00ZmS/ezgif-com-crop.gif",
  name: "SELVA BELACQUA",
  song: "https://i.postimg.cc/76wQZDYg/alucard.png",
  frase: "Promises broken, hearts on fire,Aching hunger, a wild desire.",
  charInfo:
    "At <b>seventeen</b> year old, Selva is an offspring of <b>Enyo</b>, the mockery of War. In her <b>First Summer</b>, she maintains a <b>Chaotic Neutral</b> alignment.",
  advantages:
    "BRIGUENTO I: São exímios guerreiros em quaisquer circunstâncias e não precisam de armas para se sobressair, se mostrando mais fortes e mais resistentes no combate corpo a corpo. Ao receber o primeiro golpe, adiciona permanentemente [1] sucesso em seus ataques.",
  color: "#800000",
};
// fala: `─────<b style="color:#800000;"> aliquam cum veritatis voluptas </b>─────`,
const baseHTML = `<center><br><div style="background:${char.color};border:${char.color} solid 8px;width:720px;color:#fff;font-family:verdana;font-size:12px;line-height:13px;padding:2px;text-align:center;" title="leonfamosinha"><center><div style="width:695px;background:#fff;border:#fff solid 1px;font-family:verdana;font-size:12px;color:#000;line-height:13px;padding:7px;text-align:justify;margin-top:2px;"><img src="${char.gif}" style="width:80px;float:right;border-width:0pt;border-style:solid;border-color:#000000;margin-left:8px;margin-top:2px;" alt="YYUEimwj_o.gif">ㅤㅤㅤㅤㅤㅤ${areaDoTexto}<br><br><br>────<br><br><span style="font-size: 11px;">${char.advantages}</span>    </div>

</center><table>

<tbody>

<tr>

  <td><div style="width:470px;font-family:verdana;font-size:12px;color:#ffff;line-height:16px;padding:7px;text-align:center;margin-top:5px;margin-left:-4px;"> <b style="font-size:30px;color:#ffff;text-align:center;">${char.name}</b><br>─── ${char.frase} <div style="background:#fff;border:#fff solid 10px;width:450px;color:${char.color};font-family:verdana;font-size:12px;line-height:12px;padding:2px;text-align:justify;margin-top:6px;"> ${char.charInfo}    <br></div>

</div>

</td>

<td><img src="${char.song}" style="border-width:3pt;margin-left:-2px;height:100px;width:235px;" alt="yulia"></td>

</tr>

</tbody>

</table>

</div>

</center><br> <br>`;

const updateBaseHTML = (currentChar) => {
  const areaDoTexto = ""; // Define areaDoTexto here or pass as a parameter

  return `
    <center><br>
    <div style="background:${currentChar.color};border:${currentChar.color} solid 8px;width:720px;color:#fff;font-family:verdana;font-size:12px;line-height:13px;padding:2px;text-align:center;" title="leonfamosinha">
      <center>
        <div style="width:695px;background:#fff;border:#fff solid 1px;font-family:verdana;font-size:12px;color:#000;line-height:13px;padding:7px;text-align:justify;margin-top:2px;">
          <img src="${currentChar.gif}" style="width:80px;float:right;border-width:0pt;border-style:solid;border-color:#000000;margin-left:8px;margin-top:2px;" alt="YYUEimwj_o.gif">
          ㅤㅤㅤㅤㅤㅤ${areaDoTexto}<br><br><br>
          ────<br><br>
          <span style="font-size: 11px;">${currentChar.advantages}</span>
        </div>
      </center>
      <table>
        <tbody>
          <tr>
            <td>
              <div style="width:470px;font-family:verdana;font-size:12px;color:#ffff;line-height:16px;padding:7px;text-align:center;margin-top:5px;margin-left:-4px;">
                <b style="font-size:30px;color:#ffff;text-align:center;">${currentChar.name}</b><br>
                ──── ${currentChar.frase}
                <div style="background:#fff;border:#fff solid 10px;width:450px;color:${currentChar.color};font-family:verdana;font-size:12px;line-height:12px;padding:2px;text-align:justify;margin-top:6px;">
                  ${currentChar.charInfo}<br>
                </div>
              </div>
            </td>
            <td>
              <img src="${currentChar.song}" style="border-width:3pt;margin-left:-2px;height:100px;width:235px;" alt="yulia">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </center><br><br>`;
};

function getTextReady(char, color) {
  const text = document.getElementById("text").value;

  let isLineStart = true;
  const newText = [];

  for (let i = 0; i < text.length; i++) {
    if ((text[i] == "~" || text[i] == "—") && isLineStart) {
      char === "aspen"
        ? newText.push(`<b style="color: ${color}">&quot;`)
        : newText.push(`—<b style="color: ${color}">`);
      isLineStart = false;
    } else if ((text[i] == "~" || text[i] == "—") && isLineStart == false) {
      char === "aspen" ? newText.push(`&quot;</b>`) : newText.push("</b>—");
      isLineStart = true;
    } else newText.push(text[i]);
  }

  return newText.join("");
}

const getHTMLReady = () => {
  const selectedChar = localStorage.getItem("selectedChar");
  const currentChar = char;
  console.log("currentChar :>> ", currentChar);

  const completeHtml = updateBaseHTML(char);

  const previewHtml = document.getElementById("preview-html");
  previewHtml.innerHTML = completeHtml;

  // Referência ao botão que foi clicado
  const button = document.getElementById("get-html-button");
  console.log("button :>> ", button);

  navigator.clipboard
    .writeText(completeHtml)
    .then(() => {
      console.log("Text copied to clipboard successfully!"); // Mensagem de sucesso
      button.textContent = "Post copiado!";
      setTimeout(function () {
        button.textContent = "Copiar post"; // Reseta o texto do botão após o atraso
      }, 2000);
    })
    .catch((error) => {
      console.error("Unable to copy:", error); // Log completo do erro
    });

  return completeHtml;
};

const textarea = document.getElementById("text");
const previewHtml = document.getElementById("preview-html");
previewHtml.innerHTML = baseHTML;

textarea.addEventListener("input", function () {
  // Update the innerHTML of the div based on the value of the textarea
  postHTMLDiv.innerHTML = textarea.value;
});

// Function to open the modal
function openModal() {
  document.getElementById("modal").style.display = "block";

  document.getElementById("gif").value = char.gif;
  document.getElementById("name").value = char.name;
  document.getElementById("song").value = char.song;
  document.getElementById("frase").value = char.frase;
  document.getElementById("charInfo").value = char.charInfo;
  document.getElementById("advantages").value = char.advantages;
  document.getElementById("color").value = char.color;
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Function to load characters from localStorage
const loadChars = () => {
  const charsJSON = localStorage.getItem("chars");
  return charsJSON ? JSON.parse(charsJSON) : [];
};

// Function to populate the select options
const populateSelect = () => {
  const chars = loadChars(); // Load characters from localStorage
  const selectChar = document.getElementById("selectChar");
  selectChar.innerHTML = ""; // Clear existing options

  chars.forEach((char) => {
    const option = document.createElement("option");
    option.value = char.name; // Set the value to the char name
    option.textContent = char.name; // Set the displayed text to the char name
    selectChar.appendChild(option); // Add the option to the select element
  });

  // Add event listener for changes in the select element right after populating
  selectChar.addEventListener("change", saveSelectedChar);
};

// Function to save the selected character to localStorage
const saveSelectedChar = () => {
  const selectChar = document.getElementById("selectChar");
  const selectedChar = selectChar.value; // Get the selected character name

  // Save the selected character to localStorage
  localStorage.setItem("selectedChar", selectedChar);
};

// Function to get a character by name
const getCharByName = (name) => {
  const chars = loadChars(); // Load characters from localStorage
  return chars.find((char) => char.name === name) || null; // Return the character or null if not found
};

// Call the function to populate options when the page loads
document.addEventListener("DOMContentLoaded", populateSelect);

// Save characters to localStorage
const saveChars = (chars) => {
  localStorage.setItem("chars", JSON.stringify(chars));
};

// Handle form submission (add character logic)
const charForm = document.getElementById("charForm");
charForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Create the char object with the form data
  const char = {
    gif: document.getElementById("gif").value,
    name: document.getElementById("name").value,
    song: document.getElementById("song").value,
    frase: document.getElementById("frase").value,
    charInfo: document.getElementById("charInfo").value,
    advantages: document.getElementById("advantages").value,
  };

  const chars = loadChars();
  chars.push(char); // Add new character to the array
  saveChars(chars); // Save updated characters
  closeModal();
});

// Delete character
const deleteChar = (index) => {
  const chars = loadChars();
  chars.splice(index, 1); // Remove character at index
  saveChars(chars); // Save updated characters
};
