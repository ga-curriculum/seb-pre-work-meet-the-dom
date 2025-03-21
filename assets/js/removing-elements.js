describe('removing an element', () => {
  it('successfully removes the h1 to the page', () => {
    const h1Nodes = document.querySelectorAll('h1');
    expect(h1Nodes.length).toEqual(0);
  });
});
