"use strict";

$(function () {
  // console.log('Hello Bootstrap5');
  // ckeditor
  ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
    console.log(editor);
  })["catch"](function (error) {
    console.error(error);
  }); // 左側選單 

  $(".nav li").click(function (e) {
    e.preventDefault(); // console.log($(this).siblings())

    $(this).children('a').addClass('active');
    $(this).siblings().children('a').removeClass('active');
  });
  $(".reply-btn").click(function (e) {
    e.preventDefault();
    $(".reply-footer").toggleClass("d-none");
  });
  $(".cancel-btn").click(function (e) {
    e.preventDefault();
    $(".reply-footer").toggleClass("d-none");
  });
});
//# sourceMappingURL=all.js.map
