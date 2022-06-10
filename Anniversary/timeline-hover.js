$(".holder").toggle();

$(".sphere").hover(function () {
  const currSphereNum = $(this).attr("id"); //("class").split(" ")[1];
  console.log(currSphereNum);

  if ($(this).hasClass("rotate-sphere")) {
    $(this).addClass("unrotate-sphere");
    $("." + currSphereNum).fadeOut();
    setTimeout(() => {
      $(this).removeClass("rotate-sphere");
      $(this).removeClass("unrotate-sphere");
    }, 1001);
  } else {
    $(this).addClass("rotate-sphere");
    $("." + currSphereNum).fadeIn();
  }
});
