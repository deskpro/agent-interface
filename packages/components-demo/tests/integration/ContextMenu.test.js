describe("Button", () => {
  it("visually looks correct", async () => {
    /* global page */
    // APIs from jest-puppeteer
    await page.goto(
      "http://localhost:6006/iframe.html?selectedKind=Button&selectedStory=Buttons"
    );
    const image = await global.page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
