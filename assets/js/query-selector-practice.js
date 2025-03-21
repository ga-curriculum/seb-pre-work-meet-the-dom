describe('QuerySelector Practice', () => {
  it('should select the first h1 element', () => {
    expect(h1).toBeDefined();
    expect(h1.tagName.toLowerCase()).toBe('h1');
    expect(h1.innerText).toContain('Welcome to');
  });

  it('should select the element with the id of company-name', () => {
    expect(companyName).toBeDefined();
    expect(companyName.id).toBe('company-name');
    expect(companyName.innerText).toBe('BrightTech!');
  });

  it('should select the element with the class of description', () => {
    expect(description).toBeDefined();
    expect(description.className).toBe('description');
    expect(description.innerText).toContain('BrightTech creates tools');
  });

  it('should select all paragraph tags', () => {
    expect(allParagraphTags).toBeDefined();
    expect(allParagraphTags.length).toBe(2);
    expect(allParagraphTags[0].tagName.toLowerCase()).toBe('p');
  });
});
