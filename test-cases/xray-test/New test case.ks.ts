import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "5b12d565-cc81-4c67-b9ce-62b4a543b403",
    attributes: {
      id: "menu-toggle",
      href: "#",
      class: "btn btn-dark btn-lg toggle",
    },
    childIndex: 2,
    hashes: { "md5.v1": "bd1a4d233fee02bdbcf85af89867c9de" },
    name: "a - btn btn-dark btn-lg toggle",
    selectors: [
      {
        id: "90c959cd-a9b0-4eab-a5c4-914074bec011",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "0a7c1996-1d43-4747-9412-1bda93807e4f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "ef6dcb6f-362b-46b7-9d07-6643516a203e",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "9040c0bc-ac6c-4bf5-81a6-232d9c4f5743",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "c1ecb7d6-3163-481d-9589-5cbc7ef41ff6",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "3d51dcab-3d7d-4633-86a3-a191647aa503",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "4e2cd1725b0952f43013ef92c8b0a696" },
    name: "h1 - CURA Healthcare Service",
    selectors: [
      {
        id: "3ace5f00-05f8-4856-bd8c-3328e702cf7b",
        type: "CSS",
        value: "h1",
        isDefault: true,
      },
      {
        id: "5bab9d95-f6df-49c9-9fbf-bc8c4a9feb9f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h1",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "7257e40d-75a2-4e74-9538-31edc159f21a",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "fa42476c98e207a0c20728a418a3190f" },
    name: "h3 - We Care About Your Health",
    selectors: [
      {
        id: "714e9095-cd1e-43d9-af0d-a52dc200e072",
        type: "CSS",
        value: "h3",
        isDefault: true,
      },
      {
        id: "a3aaa8ef-aff1-4bd2-8ccf-9d5a57455d7d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h3",
    text: "We Care About Your Health",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "0ab01edd-32c8-44db-a27f-da2f970a1dad",
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
        id: "d804c00c-b407-4e80-a4d7-260e6aa0e62d",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "5a255d69-1df5-45a0-a7e0-bb1d0cc9b0ce",
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
  await web.closeBrowser();
});