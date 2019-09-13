$(function() {

  let degree = 90;
  $('.fa-plus').on('click', function() {
    $('input[type="text"]').fadeToggle();
  });

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });

  $('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    e.stopPropagation();
  });

  $('input[type="text"]').on('keypress', function(e) {
    if (e.which === 13) {
      let itemText = $(this).val();
      if (itemText === '') return;
      $(this).val('');
      $('ul').prepend('<li><span><i class="fa fa-trash"></i></span> ' + itemText + '</li>');
    }
  });

  $('.sortable').sortable();
  
});