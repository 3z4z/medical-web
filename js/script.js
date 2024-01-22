var textMapping = {
  'review1': 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.I recently had to bring my child to ProHealth for a minor injury.',
  'review2': ' I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.',
  'review3': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur explicabo temporibus culpa adipisci numquam ut hic optio voluptate iste, id eligendi fuga, modi fugit aut pariatur veritatis maiores ratione aliquam!'
};
var rateMapping = {
  'review1': "<i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i>",
  'review2': "<i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i>",
  'review3': "<i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i><i class='ri-star-fill'></i>",
}

$('.click-me').on('click', function(){
  $(this).addClass('btn-primary text-white')
});

var offDays = [5]; // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
$("#datepicker").datepicker({
  beforeShowDay: function(date) {
    var day = date.getDay();
    // Highlight off days
    return [offDays.indexOf(day) === -1, ''];
  }
});
$('.department-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '.slider-next',
    prevArrow: '.slider-prev',
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4
          }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});
$('.reviewer-card').on('click', function(){
  
  var toggleReview = $(this).data('target');
  $('.reviewer-dot').removeClass('scale-up');
  $('#'+ toggleReview).toggleClass('scale-up');

  var reviewText = textMapping[toggleReview];
  $('.review-body-text').fadeOut(100, function(){
    $(this).text(reviewText).fadeIn(100);
  });
  var reviewRate = rateMapping[toggleReview];
  $('.review-body-rating').fadeOut(100, function(){
    $(this).html(reviewRate).fadeIn(100);
  });
})
$('.review-body-text').text(textMapping['review1']).fadeIn(100);
$('.review-body-rating').html(rateMapping['review1']).fadeIn(100);

$('#timepicker').on('click', function(){
  console.log('click');
  $('.timelist').toggleClass('toggle-timelist');
});
$(".timelist li").on('click', function () {
  var selectedValue = $(this).data("value");
  $("#timepicker").val(selectedValue);
  $(".timelist").removeClass('toggle-timelist');
});

$(document).on('click', (event) => {
  if (!$(event.target).closest('#timepicker').length) {
    $('.timelist').removeClass('toggle-timelist');
  }
});
