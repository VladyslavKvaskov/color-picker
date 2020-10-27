if (typeof color_picker !== 'undefined') {

  color_picker.addEventListener('select', () => {
    console.log(color_picker.value);
  });

  color_picker.addEventListener('selecting', () => {
    console.log(color_picker.futureValue);
  });
}