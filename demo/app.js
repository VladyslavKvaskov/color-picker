for(const color_picker of document.querySelectorAll('color-picker')){
  color_picker.addEventListener('select', () => {
    console.log(color_picker.value);
  });

  color_picker.addEventListener('selecting', () => {
    console.log(color_picker.futureValue);
  });
}

for(const rangeSlider of document.querySelectorAll('range-slider')){
  rangeSlider.addEventListener('input', ()=>{
    console.log(rangeSlider.value.x);
  });
}
