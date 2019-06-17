$(document).ready(function(){
  /* 
    自定义校检规则
   */
	jQuery.validator.addMethod("isRightUserName", function(value, element) { // 是否是符合规则的用户名
    var reg = /^[a-zA-Z0-9_-]+$/;
	  return this.optional(element) || reg.test(value);
  }, "只能包含字母、数字、减号和下划线");
  jQuery.validator.addMethod("isRightPassword", function(value, element){ // 是否是符合规则的密码
    if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)){
      return this.optional(element) || true;
    } else{
      return this.optional(element) || false;
    }
  },"需同时包含数字和字母");
  // 注册表单校检
  $("#register_form").validate({
    submitHandler: function(form){/* 所有验证通过提交完表单发生的事情，校验通过后的回调，可用来提交表单 */
      alert("所有验证都通过了,我要跳转页面了");
      var register_username = $("#register_username").val();
      var register_password = $("#register_password").val();
      var email = $("[name=email]").val(); 
      $.ajax({
        type: "POST",
        url: "register",
        data: {
          "register_username": register_username,
          "register_password": register_password,
          "email": email
        },
        success: function( data ){
          if( data == "该用户名可以不存在"){
            window.location.href = "index";
          }
        }
      });
    },
    rules: { // 下面的名称都是name的值
      username: {
        required: true,
        minlength: 2,
        isRightUserName: true,
        remote: {
          type: "POST",
          url: "isRegister",
          data: {
            "register_username": function(){
              return $("#register_username").val();
            }
          }
        }
      },
      password: {
        required: true,
        minlength: 6,
        isRightPassword: true,
      },
      confirm_password: {
        required: true,
        minlength: 6,
        equalTo: "#register_password"
      },
      email: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "请输入用户名",
        minlength: "用户名最少由两个字符组成",
        remote: "该用户名已经被注册"
      },
      password: {
        required: "密码不能为空",
        minlength: "密码长度不能小于 6 个字符",
      },
      confirm_password: {
        required: "请确认密码",
        minlength: "密码长度不能小于 6 个字符",
        equalTo: "两次密码输入不一致"
      },
    },
    onkeyup: false, // 为了不让每次输入一个字符就发送一次远程验证请求，在失去焦点或点击提交时再验证，减少服务器资源消耗
    errorElement : 'em',  
    errorPlacement : function(error, element) { // 当校检错误的时候会发生什么？
			element.next().remove(); // 如果输入框后面有“×”或者“√”，就把他移掉
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
    },
    highlight : function(element) {  
			$(element).closest('.form-group').addClass('has-error has-feedback');
    },
    // 当单个校检成功的时候执行的函数
    success: function( label ){
      var element = label.closest('.form-group').find("input");
      element.next().remove();
      element.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
      label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
    }
  });
  $("#login_form").validate({ /* 登录表单校检 */
    submitHandler: function(form){ // 登录之后要做什么事情
      alert("所有验证都通过了,我要跳转页面了");
      window.location.href = "index";
    },
    onkeyup: false, // 为了不让每次输入一个字符就发送一次远程验证请求，在失去焦点或点击提交时再验证，减少服务器资源消耗
    rules: {
      username: {
        required: true,
        minlength: 2,
        isRightUserName: true,
        remote: {
          type: "POST",
          url: "login",
          data: {
            "login_username": function (){
              return $("#login_username").val();
            }
          }
        }
      },
      password: {
        required: true,
        minlength: 5,
        remote: {
          type: "POST",
          url: "login",
          data: {
            "login_username": function (){
              return $("#login_username").val();
            },
            "login_password": function(){
              return $("#login_password").val();
            }
          }
        }
      },
    },
    messages: {
      username: {
        required: "请输入用户名",
        minlength: "用户名必需由两个字母组成",
        remote: "用户名不存在"
      },
      password: {
        required: "请输入密码",
        minlength: "密码长度不能小于 5 个字母",
        remote: "密码错误，请重新输入"
      },
    },
    errorElement : 'em',  
    errorPlacement : function(error, element) { // 当校检错误的时候会发生什么？
			element.next().remove(); // 如果输入框后面有“×”或者“√”，就把他移掉
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
    },
    highlight : function(element) {  
			$(element).closest('.form-group').addClass('has-error has-feedback');
    },
    // 当单个校检成功的时候执行的函数
    success: function( label ){
      var element = label.closest('.form-group').find("input");
      element.next().remove();
      element.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
      label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
    },
  });
})