import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "7f632ef6-eb9e-4f12-be3f-068772bc457d",
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
        id: "c7b067eb-7065-4d9c-8eaa-f33824f174ce",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "6ebef374-5f5e-4383-a8a7-1b376ca53de0",
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
    id: "258269c2-2a77-4405-831d-d488ea3efb74",
    attributes: {
      id: "menu-toggle",
      href: "#",
      class: "btn btn-dark btn-lg toggle",
    },
    childIndex: 1,
    hashes: { "md5.v1": "bd1a4d233fee02bdbcf85af89867c9de" },
    name: "a - btn btn-dark btn-lg toggle",
    selectors: [
      {
        id: "b3e4447b-42a3-403c-beda-270a14443a84",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "9ac4c0f5-da6a-4953-8e2d-3cceb2d2612c",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "94a945a0-a650-425e-b772-8e7919c8f145",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "6c193d93-54d8-461f-9fac-a10242873820",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "c765baac-e326-4d62-9c9e-d861215ea982",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});