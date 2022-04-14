import './style.css';

const onAndOffSwitch = document.getElementById('light-toggle');
const bulb = document.querySelector('.bulb');

onAndOffSwitch.addEventListener('change', () => {
  if (onAndOffSwitch.checked) {
    bulb.classList.add('bulb--on');
  } else {
    bulb.classList.remove('bulb--on');
  }
});
