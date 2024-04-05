
function login()
{	
	var form2=document.personForm;
	
	if (form2.typeid[0].checked == false  && form2.typeid[1].checked == false)
	{
		 alert("请选择会员类别！");
		 return(false);
	}
	
	
	if (form2.loginName.value =="") 
	{
		alert("请输入用户名!");
		form2.loginName.focus();
		return(false);
	}
	else if (form2.password.value=="")
	{
		alert("请输入密码!");
		form2.password.focus();
		return(false);
	}
	var url = location.href;
	var domain = ".job9988.com";
	
	if (form2.typeid[0].checked == true){
		form2.action="/person/act/person/login.do?act=login";
	}else{
		form2.action="/company/comLogin.do?login="+form2.loginName.value;
	}
	
	return true;
}
function returnpassword()
{
	var form2=document.personForm;
	
	if (form2.typeid[0].checked == false  && form2.typeid[1].checked == false)
	{
		 alert("请选择会员类别！");
		 return(false);
	}
	
	if (form2.typeid[0].checked == true)
	{
		window.open("/person/page/forget.shtml","_blank");
	}else
	{
		window.open("/company/modifyPw.do","_blank");
	}
	return true
}

function  indexsearch()
{
	
var form1=document.searchForm;
	if (form1.keyword.value =="请输入要搜索的关键字..."||form1.keyword.value =="") 
	{
		alert("请输入关键字!");
		form1.keyword.focus();
		return(false);
	}
	
	return true;
}
/*
     FILE ARCHIVED ON 01:51:57 Mar 15, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:54:49 May 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 259.7 (3)
  load_resource: 106.474
  captures_list: 306.113
  esindex: 0.019
  RedisCDXSource: 8.679
  exclusion.robots.policy: 0.739
  exclusion.robots: 0.762
  PetaboxLoader3.datanode: 176.414 (4)
  CDXLines.iter: 31.186 (3)
  PetaboxLoader3.resolve: 173.829 (3)
*/