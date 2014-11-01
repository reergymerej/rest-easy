var service = '/bar';

$('#create').on('click', function () {
  
  $.post(service, {
    a: 'asdf',
    b: 'qwer',
    d: Date.now()
  });

  return false;
});

$('#read').attr('href', service);

$('#update').on('click', function () {
  
  $.ajax({
    type: 'PUT',
    url: service + '/' + $('#id').val(),
    data: {
      message: 'updated'
    }
  });

  return false;
});

$('#delete').on('click', function () {
  
  $.ajax({
    type: 'DELETE',
    url: service + '/' + $('#id').val()
  });

  return false;
});