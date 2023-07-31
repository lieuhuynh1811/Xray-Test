import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "8b39425c-07be-403b-9911-761631ac8a67",
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
        id: "71d79b63-83ae-467d-a33a-77c5b1fdc9c3",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "6ba324c7-d494-43eb-925e-682264650dd5",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
  });
  await web.doubleClick(
    {
      type: "Web",
      id: "8b39425c-07be-403b-9911-761631ac8a67",
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
          id: "71d79b63-83ae-467d-a33a-77c5b1fdc9c3",
          type: "CSS",
          value: "#btn-make-appointment",
          isDefault: true,
        },
        {
          id: "6ba324c7-d494-43eb-925e-682264650dd5",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "a",
      text: "Make Appointment",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    },
    ""
  );
  await web.closeBrowser();
});