describe('changing text color', () => {
  it('successfully turns the span blue', () => {
    const span = document.querySelector('.blue');
    const textColor = window.getComputedStyle(span).getPropertyValue('color');
    expect(textColor).toEqual('rgb(0, 0, 255)');
  });
});
