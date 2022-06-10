displayImgs("./Lilah/img", 72, "JPG");
function displayImgs(pathName, numImgs, fileType) {
  var targetElem = document.getElementById("img-section");
  for (let i = 1; i <= numImgs; i++) {
    targetElem.innerHTML +=
      '<img class="img-size" src="' + pathName + i + "." + fileType + '" />';
  }
}

$("img").click(function () {
  // Check each img for needing to be reset.
  $("img").each(function () {
    resetImg($(this));
  });
  // If the current img clicked does not have the
  // hover-ani class, then give it that css class.
  if (!resetImg($(this))) {
    $(this).addClass("hover-ani");
  }
});

// If elem has the hover-ani css class, give it the
// hover-ani2 class, then remove all classes.
function resetImg(elem) {
  if (elem.hasClass("hover-ani")) {
    elem.addClass("hover-ani2");
    setTimeout(function () {
      elem.removeClass("hover-ani");
      elem.removeClass("hover-ani2");
    }, 1001);
    return true;
  }
  return false;
}
