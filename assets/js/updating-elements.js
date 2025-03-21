describe('changing h1 text', () => {
  it('successfully changes the message', () => {
    const titleText = document.querySelector('#title').innerText;
    expect(titleText).toEqual('Come on in!');
  });
});
