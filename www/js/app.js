
// This is a JavaScript file

//定数
//var _domain = "http://exout.net/~kashima_dollars";
var _domain = "https://it2-sotuken.herokuapp.com"
//var _domain = "http://192.168.10.100/telma_server";
//var _domain = "http://suta39.php.xdomain.jp/telma_server";
//var _domain = "http://192.168.10.102:3000";

var _user_id = "1";
var _session_id = "g25j1p2ogawik29";
//var _listCnt = 1;
var region = {
  id:["1","2","3"],
  name:["家","","友人宅"],
  ido:["100","","300"],
  keido:["100","","300"],
  checked:["1","0","1"]
  };

/* 初期化 *****************/
$(function(){
  $('#refresh').on('changestate',function(){
    console.log("aaaaa");
  });
});
function menuOpen() {
  document.querySelector('#mySplitter').left.toggle();
}
function openSlide(page) {
  $("#content").load(page);
  document.querySelector('#mySplitter').left.toggle();
}
//上開き移動
function popOpen(page){
  console.log("aaa")
	myNavigator.pushPage(page, { animation : 'lift' } ).then(function(){
    ons.ready(function(){
  console.log("bbb")
      $("#bbsImg").onchange = function(evt){
        console.log("ccc")
        var file = evt.target.files[0];
        var reader = new FileReader();
        reader.onload = function(evt) {
          console.log(evt.target.result);
        }
        console.log(reader.readAsText(file, "Shift_JIS"));
      }
    })
  });
}

//右ページ移動
function slideOpen(page){
  //console.log(this.val());
        var options = {animation: 'slide'} // Called when finishing transition animation
	myNavigator.pushPage(page,options);
}
//ポップアップ表示
function openDialog(id){
  document.getElementById(id).show();
  //document.getElementById(id).show();
}
//ポップアップ閉
function closeDialog(id){
  document.getElementById(id).hide();
}
var alertMsg = function(target){
  $('#alert-msg').show(target);
}
var showPopover = function(target) {
  document
    .getElementById('popover')
    .show(target);
};

function mainTabChange(){
  console.log(getActiveTabIndex())
}

function returnLocation(){
  var options = {};

  function success(tmpinfo) {
  	var info = tmpinfo.coords;
	  console.log('Latitude : ' + info.latitude);
	  console.log('Longitude: ' + info.longitude);
	  //return info.latitude;
	};
	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};
	var lat = navigator.geolocation.getCurrentPosition(success, error, options);
	//console.log(lat);
}


function userback() {
  myNavigator.replacePage("splitter.html",{animation:"fade"})
}


