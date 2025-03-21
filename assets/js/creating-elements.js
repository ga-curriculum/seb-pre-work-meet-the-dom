describe('adding a new element', () => {
  it('successfully adds the h4 to the page', () => {
    const h4Text = document.querySelector('h4').innerText;
    expect(h4Text).toEqual('Powered by JavaScript');
  });
});
