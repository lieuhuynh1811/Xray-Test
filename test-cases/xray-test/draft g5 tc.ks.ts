import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "88347747-a2b9-4d32-942a-878ce4d02c70",
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
        id: "3dcadd32-3880-43e7-99d9-c75b16d1cd4e",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "9325be05-5752-49b5-9cd4-5339c3a69e06",
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
    id: "797666d2-6a81-4b9b-bdd9-7d10bf9148cd",
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
        id: "a11392f0-0e43-4dcc-87bf-9680fe27d048",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "8673b041-0779-4c3c-880d-df07414269f5",
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
      id: "797666d2-6a81-4b9b-bdd9-7d10bf9148cd",
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
          id: "a11392f0-0e43-4dcc-87bf-9680fe27d048",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "8673b041-0779-4c3c-880d-df07414269f5",
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
  await web.setEncryptedText(
    {
      type: "Web",
      id: "bc2f8e05-d740-44b4-88da-7d289637a295",
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
          id: "b5618eca-d5c0-4a6c-a988-2a2490bccd45",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "885f4407-39e8-4050-8e16-bf870581ab1a",
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
    "68b00998e2fbf2f6fd73e61acdb92b01-U2FsdGVkX18K+aCfwReVQ3xmKpCRDCweId8qpNPEmQ45UBEOGweObtBIfmHvaipt"
  );
  await web.click({
    type: "Web",
    id: "6d98c1f3-ca33-4681-b21f-454fcf281a72",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "9b7b452d-af28-4adc-a0cd-7cb14629aab1",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "3f04472e-b74f-406d-82cb-702f8fe3338b",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});