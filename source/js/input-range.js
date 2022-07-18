window.onload = () => {
  slideOne();
  slideTwo();
  onPriceMinChange();
  onPriceMaxChange();
}

let sliderOne = document.getElementById("range-price-min");
let sliderTwo = document.getElementById("range-price-max");
let displayValOne = document.getElementById("price-min");
let displayValTwo = document.getElementById("price-max");
let minGap = 0;
let sliderTrack = document.querySelector(".input-range__track--chosen");
let sliderMaxValue = document.getElementById("range-price-min").max;

let thumbMinValue = document.querySelector(".input-range__thumb-min");
let thumbMaxValue = document.querySelector(".input-range__thumb-max");

const slideOne = () => {
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value;
  fillColor();

  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  thumbMinValue.style.left = `${percent1}%`;
  thumbMinValue.style.transform = `translate(${-percent1}%)`;
}
const slideTwo = () => {
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();

  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  thumbMaxValue.style.left = `${percent2}%`;
  thumbMaxValue.style.transform = `translate(${-percent2}%)`;
}
const fillColor = () => {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;

  sliderTrack.style.background = `linear-gradient(to right, transparent ${percent1}% , #9070ec ${percent1}% , #9070ec ${percent2}%, transparent ${percent2}%)`;
}

const onPriceMinChange = () => {
  slideOne.value = displayValOne.value;
}

const onPriceMaxChange = () => {
  slideTwo.value = displayValTwo.value;
}

displayValOne.addEventListener('change', onPriceMinChange);
displayValTwo.addEventListener('change', onPriceMaxChange);
