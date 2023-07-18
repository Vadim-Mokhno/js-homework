$('input[type="checkbox"]').on('change', function () {
  let checkedCheckboxes = 0;

  $('input[type="checkbox"]').each(function () {
    if (this.checked) {
      checkedCheckboxes++;
    }
  });

  if (checkedCheckboxes === 3) {
    $('input[type="checkbox"]').attr('disabled', 'disabled');
  }
});
