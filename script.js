const generateBtn = document.getElementById("generateBtn");
const codeOutput = document.getElementById("codeOutput");
const previewFrame = document.getElementById("preview");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const promptInput = document.getElementById("prompt");
const presetSelect = document.getElementById("preset");
const messageBox = document.getElementById("message");

const presets = {
  contact: "Create a contact form with name, email, message, and submit button.",
  registration: "Create a registration form with full name, email, password, and submit button.",
  login: "Create a login form with email and password.",
  survey: "Create a survey form with name, email, feedback, and submit button."
};

presetSelect.addEventListener("change", () => {
  const value = presetSelect.value;
  if (!value || value === "custom") return;
  promptInput.value = presets[value];
  generateBtn.click();
});

generateBtn.addEventListener("click", () => {
  messageBox.textContent = "";
  messageBox.className = "";

  const text = promptInput.value.trim();

  if (!text) {
    messageBox.textContent =
      "Please describe the form. Example: 'Create a contact form with email and message.'";
    messageBox.classList.add("error");
    return;
  }

  if (text.length < 10) {
    messageBox.textContent =
      "Description is too short. Try adding field names.";
    messageBox.classList.add("info");
    return;
  }

  const options = getOptions();
  const html = formatHTML(generateForm(text.toLowerCase(), options));

  codeOutput.textContent = html;
  Prism.highlightElement(codeOutput);
  previewFrame.srcdoc = html;
});

copyBtn.onclick = () => {
  navigator.clipboard.writeText(codeOutput.textContent);
  copyStatus.textContent = "Copied!";
  setTimeout(() => (copyStatus.textContent = ""), 2000);
};

document.getElementById("downloadHTML").onclick = () => {
  const blob = new Blob([codeOutput.textContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "generated-form.html";
  a.click();
  URL.revokeObjectURL(url);
};

document.getElementById("copyCSS").onclick = () => {
  const match = codeOutput.textContent.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) {
    messageBox.textContent = "No CSS found to copy.";
    messageBox.className = "info";
    return;
  }
  navigator.clipboard.writeText(match[1]);
  messageBox.textContent = "CSS copied.";
  messageBox.className = "info";
};

document.getElementById("exportCodePen").onclick = () => {
  const data = {
    title: "Generated HTML Form",
    html: codeOutput.textContent,
    css: "",
    js: ""
  };

  const form = document.createElement("form");
  form.action = "https://codepen.io/pen/define";
  form.method = "POST";
  form.target = "_blank";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "data";
  input.value = JSON.stringify(data);

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

function getOptions() {
  return {
    includeCSS: includeCSS.checked,
    validation: validation.checked,
    darkMode: darkMode.checked
  };
}

function generateForm(description, options) {
  const fields = [];

  const map = [
    ["name", "text", "Name"],
    ["email", "email", "Email"],
    ["password", "password", "Password"],
    ["message", "textarea", "Message"],
    ["feedback", "textarea", "Feedback"]
  ];

  map.forEach(([key, type, label]) => {
    if (description.includes(key)) {
      fields.push({ type, label });
    }
  });

  if (!fields.length) {
    fields.push({ type: "text", label: "Name" });
    fields.push({ type: "email", label: "Email" });
  }

  const css = options.includeCSS
  ? `<style>
* {
  box-sizing: border-box;
}

form {
  max-width: 420px;
  margin: 1.5rem auto;
  padding: 1.75rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  font-family: system-ui, sans-serif;
}

label {
  display: block;
  margin-bottom: 1.25rem;
  font-weight: 600;
  color: #0f172a;
}

input,
textarea {
  width: 100%;
  margin-top: 0.4rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  border: 1px solid #c7d2fe;
  font-size: 0.9rem;
}

textarea {
  min-height: 90px;
}

button {
  margin-top: 2.25rem;
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #5b5cff, #22d3ee);
  color: white;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}
</style>`
  : "";


  const theme = options.darkMode
    ? `<style>body{background:#111;color:#fff}</style>`
    : "";

  const inputs = fields
    .map(f =>
      f.type === "textarea"
        ? `<label>${f.label}<textarea ${options.validation ? "required" : ""}></textarea></label>`
        : `<label>${f.label}<input type="${f.type}" ${options.validation ? "required" : ""} /></label>`
    )
    .join("");

  return `
${css}
${theme}
<form aria-label="Generated Form">
  ${inputs}
  <button type="submit">Submit</button>
</form>`;
}

function formatHTML(html) {
  return html.replace(/></g, ">\n<").trim();
}
