const { translate } = require("../src/piglatin");

describe("pig latin function", () => {
  test("Lowercases words. Also words that starts with single consonant", () => {
    const result = translate("HELLO");
    expect(result).toEqual("ellohay");
  });
  test("Words that start with A.", () => {
    const result = translate("Aloha");
    expect(result).toEqual("alohaway");
  });
  test("Words that start with E or I. Also translates each word in a string.", () => {
    const result = translate("enter the interior");
    expect(result).toEqual("enterway ethay interiorway");
  });
  test("Words that start with O or U", () => {
    const result = translate("Open until sundown");
    expect(result).toEqual("openway untilway undownsay");
  });
  test("Words that start with single consonants.", () => {
    const result = translate("Give Jim a dollar");
    expect(result).toEqual("ivegay imjay away ollarday");
  });
  test("Words that start with 2 consonants.", () => {
    const result = translate("Shamrock shakes are green");
    expect(result).toEqual("amrockshay akesshay areway eengray");
  });
  test("Words that start with 3 consonants.", () => {
    const result = translate("Scrap the splatter");
    expect(result).toEqual("apscray ethay attersplay");
  });
  test("Words with contractions.", () => {
    const result = translate("Can't you stay");
    expect(result).toEqual("an'tcay ouyay aystay");
  });
  test("Words with symbols and numbers aren't affected.", () => {
    const result = translate("My 2nd email isn't email@gmail.com");
    expect(result).toEqual("myay 2nd emailway isn'tway email@gmail.com");
  });
  test("Single letter words.", () => {
    const result = translate("I can't get a sweater");
    expect(result).toEqual("iway an'tcay etgay away eatersway");
  });
});
