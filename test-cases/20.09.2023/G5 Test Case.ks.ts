import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com/");
  await web.click({
    type: "Web",
    id: "a694ab38-f9e9-42db-85d7-6d0459e649ca",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "e66148a0-c684-4d26-afbd-84f206c35d16",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "6e10b943-7fc8-4f78-8a43-a4d8226abb15",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "8c4a76e8-d795-4d67-b881-ebcf9b42f27d",
    attributes: {
      class: "form-horizontal",
      action: "https://katalon-demo-cura.herokuapp.com/authenticate.php",
      method: "post",
    },
    childIndex: 1,
    hashes: { "md5.v1": "8ce522d403879fdd769a7addd1fed33c" },
    name: "form - Demo account",
    selectors: [
      {
        id: "89d963a5-b925-4c73-9aac-afbf7ec31743",
        type: "CSS",
        value: ".form-horizontal",
        isDefault: true,
      },
      {
        id: "ac267b3f-f534-44ea-a991-44fc3a215d47",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "form",
    text: "Demo account\n\t\n\t\nUsername\nPassword\nLogin",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "1c278def-61b4-41ea-a41c-7906e575063f",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "1ec6f204-042c-496d-a488-9580f71d59c9",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "5ae3385e-7868-40b3-8c14-df8ac89cd067",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "1c278def-61b4-41ea-a41c-7906e575063f",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "1ec6f204-042c-496d-a488-9580f71d59c9",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "5ae3385e-7868-40b3-8c14-df8ac89cd067",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.click({
    type: "Web",
    id: "cc691cf9-d4f7-4eed-89ac-4e5044d1d03e",
    attributes: {
      type: "password",
      class: "form-control",
      id: "txt-password",
      name: "password",
      placeholder: "Password",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
    name: "input - Password",
    selectors: [
      {
        id: "9bba309b-2352-40e8-8425-37da90e3c1a5",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "523aa1d2-6476-4d07-b5c9-38a68f21fb22",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "cc691cf9-d4f7-4eed-89ac-4e5044d1d03e",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "9bba309b-2352-40e8-8425-37da90e3c1a5",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "523aa1d2-6476-4d07-b5c9-38a68f21fb22",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "06c81e6ffca0da54dcdfa5d74c9f4a64-U2FsdGVkX1+V3Kd9V9jF0/KBMDADjV2uT0Vv3Cu3viY8S8SOzOx0kcHWawjsG/Gg"
  );
  await web.closeBrowser();
});