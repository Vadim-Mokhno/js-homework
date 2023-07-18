const $divs = Array.from($('h3+div'));

$('h3').each(function () {
  if ($(this).next().is('div')) {
    $(this).before($divs.shift());
  }
});
