document.querySelector('.root').addEventListener('click', () => {
  document.querySelector('.ball').style.backgroundColor = 'red';
  document.querySelector('.lineafter').style.backgroundColor = 'red';
  document.querySelector('.lineafter').style.top = '4rem';
  document.querySelector('.root').style.animation = 'angry 0.1s infinite';
  let sheet = document.styleSheets[0];
  sheet.insertRule(
    '.ball::before {  transform: rotate(135deg); width: 2rem }',
    0
  );
  sheet.insertRule('.ball::after { transform: rotate(45deg); width: 2rem }', 1);
});
