/*button_logic*/

const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  alert(`Размер экрана:\nШирина - ${window.screen.width}\nВысота - ${window.screen.height}.`)
});