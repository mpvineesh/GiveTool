// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*!
 * ShareThis (http://getbootstrap.com)
 */

var switchTo5x=true;

if(typeof(stlib)=="undefined"){var stlib={}}if(!stlib.functions){stlib.functions=[];stlib.functionCount=0}stlib.global={};stlib.global.hash=document.location.href.split("#");stlib.global.hash.shift();stlib.global.hash=stlib.global.hash.join("#");stlib.dynamicOn=true;stlib.debugOn=false;stlib.debug={count:0,messages:[],debug:function(b,a){if(a&&(typeof console)!="undefined"){console.log(b)}stlib.debug.messages.push(b)},show:function(a){for(message in stlib.debug.messages){if((typeof console)!="undefined"){if(a){/ERROR/.test(stlib.debug.messages[message])?console.log(stlib.debug.messages[message]):null}else{console.log(stlib.debug.messages[message])}}}},showError:function(){stlib.debug.show(true)}};var _$d=function(a){stlib.debug.debug(a,stlib.debugOn)};var _$d0=function(){_$d(" ")};var _$d_=function(){_$d("___________________________________________")};var _$d1=function(a){_$d(_$dt()+"| "+a)};var _$d2=function(a){_$d(_$dt()+"|  * "+a)};var _$de=function(a){_$d(_$dt()+"ERROR: "+a)};var _$dt=function(){var b=new Date();var e=b.getHours();var a=b.getMinutes();var d=b.getSeconds();return e+":"+a+":"+d+" > "};stlib.allServices={adfty:{title:"Adfty"},allvoices:{title:"Allvoices"},amazon_wishlist:{title:"Amazon Wishlist"},arto:{title:"Arto"},att:{title:"AT&T"},baidu:{title:"Baidu"},blinklist:{title:"Blinklist"},blip:{title:"Blip"},blogmarks:{title:"Blogmarks"},blogger:{title:"Blogger",type:"post"},buddymarks:{title:"BuddyMarks"},buffer:{title:"Buffer"},care2:{title:"Care2"},chiq:{title:"chiq"},citeulike:{title:"CiteULike"},chiq:{title:"chiq"},corkboard:{title:"Corkboard"},dealsplus:{title:"Dealspl.us"},delicious:{title:"Delicious"},digg:{title:"Digg"},diigo:{title:"Diigo"},dzone:{title:"DZone"},edmodo:{title:"Edmodo"},email:{title:"Email"},evernote:{title:"Evernote"},facebook:{title:"Facebook"},fark:{title:"Fark"},fashiolista:{title:"Fashiolista"},flipboard:{title:"Flipboard"},folkd:{title:"folkd.com"},foodlve:{title:"FoodLve"},fresqui:{title:"Fresqui"},friendfeed:{title:"FriendFeed"},funp:{title:"Funp"},fwisp:{title:"fwisp"},google:{title:"Google"},googleplus:{title:"Google +"},google_bmarks:{title:"Bookmarks"},google_reader:{title:"Google Reader"},google_translate:{title:"Google Translate"},hatena:{title:"Hatena"},instapaper:{title:"Instapaper"},jumptags:{title:"Jumptags"},kaboodle:{title:"Kaboodle"},linkagogo:{title:"linkaGoGo"},linkedin:{title:"LinkedIn"},livejournal:{title:"LiveJournal",type:"post"},mail_ru:{title:"mail.ru"},meneame:{title:"Meneame"},messenger:{title:"Messenger"},mister_wong:{title:"Mr Wong"},moshare:{title:"moShare"},myspace:{title:"MySpace"},n4g:{title:"N4G"},netlog:{title:"Netlog"},netvouz:{title:"Netvouz"},newsvine:{title:"Newsvine"},nujij:{title:"NUjij"},odnoklassniki:{title:"Odnoklassniki"},oknotizie:{title:"Oknotizie"},pinterest:{title:"Pinterest"},raise_your_voice:{title:"Raise Your Voice"},reddit:{title:"Reddit"},segnalo:{title:"Segnalo"},sharethis:{title:"ShareThis"},sina:{title:"Sina"},sonico:{title:"Sonico"},startaid:{title:"Startaid"},startlap:{title:"Startlap"},stumbleupon:{title:"StumbleUpon"},stumpedia:{title:"Stumpedia"},typepad:{title:"TypePad",type:"post"},tumblr:{title:"Tumblr"},twitter:{title:"Twitter"},viadeo:{title:"Viadeo"},virb:{title:"Virb"},vkontakte:{title:"Vkontakte"},voxopolis:{title:"VOXopolis"},whatsapp:{title:"WhatsApp"},wordpress:{title:"WordPress",type:"post"},xerpi:{title:"Xerpi"},xing:{title:"Xing"},yammer:{title:"Yammer"}};stlib.allOauthServices={twitter:{title:"Twitter"},linkedIn:{title:"LinkedIn"},facebook:{title:"Facebook"}};stlib.allNativeServices={fblike:{title:"Facebook Like"},fbrec:{title:"Facebook Recommend"},fbsend:{title:"Facebook Send"},fbsub:{title:"Facebook Subscribe"},foursquaresave:{title:"Foursquare Save"},foursquarefollow:{title:"Foursquare Follow"},instagram:{title:"Instagram Badge"},plusone:{title:"Google +1"},pinterestfollow:{title:"Pinterest Follow"},twitterfollow:{title:"Twitter Follow"},youtube:{title:"Youtube Subscribe"}};stlib.allDeprecatedServices={google_bmarks:{title:"Google Bookmarks"},yahoo_bmarks:{title:"Yahoo Bookmarks"}};stlib.allOtherServices={copy:{title:"Copy Paste"},sharenow:{title:"ShareNow"},sharenow_auto:{title:"Frictionless Sharing"},fbunlike:{title:"Facebook Unlike"}};var _all_services=stlib.allServices;stlib.buttonInfo={buttonList:[],addButton:function(a){stlib.buttonInfo.buttonList.push(a)},getButton:function(a){if(!isNaN(a)){if(a>=stlib.buttonInfo.buttonList.length){return false}else{return stlib.buttonInfo.buttonList[a]}}else{for(c=0;c<stlib.buttonInfo.buttonList.length;c++){if(stlib.buttonInfo.buttonList[c].service==a){debug(stlib.buttonInfo.buttonList[c])}}}},clickButton:function(a){if(!isNaN(a)){if(a>=stlib.buttonInfo.buttonList.length){return false}else{if(stlib.buttonInfo.getButton(a).service=="sharethis"||stlib.buttonInfo.getButton(a).service=="email"||stlib.buttonInfo.getButton(a).service=="wordpress"){stlib.buttonInfo.getButton(a).popup()}else{stlib.buttonInfo.getButton(a).element.childNodes[0].onclick()}}}else{for(c=0;c<stlib.buttonInfo.buttonList.length;c++){if(stlib.buttonInfo.buttonList[c].service==a){if(stlib.buttonInfo.getButton(c).service=="sharethis"||stlib.buttonInfo.getButton(c).service=="email"||stlib.buttonInfo.getButton(c).service=="wordpress"){stlib.buttonInfo.getButton(c).popup();return true}else{stlib.buttonInfo.getButton(c).element.childNodes[0].onclick()}}}}},resetButton:function(){stlib.buttonInfo.buttonList=[]},listButton:function(){for(c=0;c<stlib.buttonInfo.buttonList.length;c++){debug(stlib.buttonInfo.buttonList[c])}}};stlib.buttonInfo.resetButton();stlib.messageQueue=function(){var a=this;this.pumpInstance=null;this.queue=[];this.dependencies=["data"];this.sending=true;this.setPumpInstance=function(b){this.pumpInstance=b};this.send=function(f,d){if((typeof(f)=="string")&&(typeof(d)=="string")){_$d_();_$d1("Queueing message: "+d+": "+f)}(typeof(f)=="string")&&(typeof(d)=="string")?this.queue.push([d,f]):null;if(this.sending==false||stlib.browser.ieFallback){if(this.pumpInstance!=null){if(this.dependencies.length>0){for(messageSet in this.queue){if(this.queue.hasOwnProperty(messageSet)&&this.queue[messageSet][0]==this.dependencies[0]){if(this.queue.length>0){_$d1("Current Queue Length: "+this.queue.length);var b=this.queue.shift();this.pumpInstance.broadcastSendMessage(b[1]);this.dependencies.shift();this.sending=true}}}}else{if(this.queue.length>0){_$d1("Current Queue Length: "+this.queue.length);var b=this.queue.shift();this.pumpInstance.broadcastSendMessage(b[1]);this.sending=true}}}else{_$d_();_$d1("Pump is null")}}if((stlib.browser.ieFallback)&&(this.queue.length>0)){var e="process"+stlib.functionCount;stlib.functionCount++;stlib.functions[e]=a.process;setTimeout("stlib.functions['"+e+"']()",500)}};this.process=function(){_$d1("Processing MessageQueue");a.sending=false;_$d(this.queue);a.send()}};stlib.sharer={sharerUrl:(("https:"==document.location.protocol)?"https://ws.":"http://wd.")+"sharethis.com/api/sharer.php",regAuto:new RegExp(/(.*?)_auto$/),constructParamString:function(){stlib.data.validate();stlib.hash.checkURL();var a=stlib.data.pageInfo;var d="?";var b;for(b in a){d+=b+"="+encodeURIComponent(a[b])+"&";_$d1("constructParamStringPageInfo: "+b+": "+a[b])}a=stlib.data.shareInfo;for(b in a){d+=b+"="+encodeURIComponent(a[b])+"&";_$d1("constructParamStringShareInfo: "+b+": "+a[b])}d+="ts="+new Date().getTime()+"&";return d.substring(0,d.length-1)},sharePinterest:function(){if(stlib.data.get("image","shareInfo")==false||stlib.data.get("image","shareInfo")==null||stlib.data.get("pinterest_native","shareInfo")=="true"){if(typeof(stWidget)!="undefined"&&typeof(stWidget.closeWidget)==="function"){stWidget.closeWidget()}if(typeof(stcloseWidget)==="function"){stcloseWidget()}if(typeof(stToolbar)!="undefined"&&typeof(stToolbar.closeWidget)==="function"){stToolbar.closeWidget()}var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("charset","UTF-8");a.setAttribute("src","//assets.pinterest.com/js/pinmarklet.js?r="+Math.random()*99999999);document.body.appendChild(a)}},share:function(e,a){var d=stlib.sharer.constructParamString();_$d_();_$d1("Initiating a Share with the following url:");_$d2(stlib.sharer.sharerUrl+d);if((stlib.data.get("destination","shareInfo")=="email")||(stlib.data.get("destination","shareInfo")=="pinterest"&&stlib.data.get("source","shareInfo").match(/share4xmobile/)==null&&stlib.data.get("source","shareInfo").match(/share4xpage/)==null&&stlib.data.get("source","shareInfo").match(/5xpage/)==null&&(stlib.data.get("image","shareInfo")==false||stlib.data.get("image","shareInfo")==null))||stlib.data.get("destination","shareInfo")=="snapsets"||stlib.data.get("destination","shareInfo")=="copy"||stlib.data.get("destination","shareInfo")=="plusone"||stlib.data.get("destination","shareInfo").match(stlib.sharer.regAuto)||(typeof(stlib.nativeButtons)!="undefined"&&stlib.nativeButtons.checkNativeButtonSupport(stlib.data.get("destination","shareInfo")))||(stlib.data.get("pinterest_native","shareInfo")!=false&&stlib.data.get("pinterest_native","shareInfo")!=null)){var b=new Image(1,1);b.src=stlib.sharer.sharerUrl+d;b.onload=function(){return}}else{if(typeof(a)!="undefined"&&a==true){window.open(stlib.sharer.sharerUrl+d,(new Date()).valueOf(),"scrollbars=1, status=1, height=480, width=640, resizable=1")}else{window.open(stlib.sharer.sharerUrl+d)}}e?e():null}};stlib.browser={iemode:null,firefox:null,firefoxVersion:null,safari:null,chrome:null,opera:null,windows:null,mac:null,ieFallback:(/MSIE [6789]/).test(navigator.userAgent),init:function(){var a=navigator.userAgent.toString().toLowerCase();if(/msie|trident/i.test(a)){if(document.documentMode){stlib.browser.iemode=document.documentMode}else{stlib.browser.iemode=5;if(document.compatMode){if(document.compatMode=="CSS1Compat"){stlib.browser.iemode=7}}}}stlib.browser.firefox=((a.indexOf("firefox")!=-1)&&(typeof InstallTrigger!=="undefined"))?true:false;stlib.browser.firefoxVersion=(a.indexOf("firefox/5.0")!=-1||a.indexOf("firefox/9.0")!=-1)?false:true;stlib.browser.safari=(a.indexOf("safari")!=-1&&a.indexOf("chrome")==-1)?true:false;stlib.browser.chrome=(a.indexOf("safari")!=-1&&a.indexOf("chrome")!=-1)?true:false;stlib.browser.opera=(window.opera||a.indexOf(" opr/")>=0)?true:false;stlib.browser.windows=(a.indexOf("windows")!=-1)?true:false;stlib.browser.mac=(a.indexOf("macintosh")!=-1)?true:false},getIEVersion:function(){return stlib.browser.iemode},isFirefox:function(){return stlib.browser.firefox},firefox8Version:function(){return stlib.browser.firefoxVersion},isSafari:function(){return stlib.browser.safari},isWindows:function(){return stlib.browser.windows},isChrome:function(){return stlib.browser.chrome},isOpera:function(){return stlib.browser.opera},isMac:function(){return stlib.browser.mac}};stlib.browser.init();stlib.browser.mobile={mobile:false,uagent:null,android:null,iOs:null,silk:null,windows:null,kindle:null,init:function(){this.uagent=navigator.userAgent.toLowerCase();if(this.isAndroid()){this.mobile=true}else{if(this.isIOs()){this.mobile=true}else{if(this.isSilk()){this.mobile=true}else{if(this.isWindowsPhone()){this.mobile=true}else{if(this.isKindle()){this.mobile=true}}}}}},isMobile:function isMobile(){return this.mobile},isAndroid:function(){if(this.android===null){this.android=this.uagent.indexOf("android")>-1}return this.android},isKindle:function(){if(this.kindle===null){this.kindle=this.uagent.indexOf("kindle")>-1}return this.kindle},isIOs:function isIOs(){if(this.iOs===null){this.iOs=(this.uagent.indexOf("ipad")>-1)||(this.uagent.indexOf("ipod")>-1)||(this.uagent.indexOf("iphone")>-1)}return this.iOs},isSilk:function(){if(this.silk===null){this.silk=this.uagent.indexOf("silk")>-1}return this.silk},isWindowsPhone:function(){if(this.windows===null){this.windows=this.uagent.indexOf("windows phone")>-1}return this.windows},handleForMobileFriendly:function handleForMobileFriendly(d,r,g){if(!this.isMobile()){return false}if(typeof(stLight)==="undefined"){stLight={};stLight.publisher=r.publisher;stLight.sessionID=r.sessionID;stLight.fpc=""}var n=(typeof(d.title)!=="undefined")?d.title:encodeURIComponent(document.title);var a=(typeof(d.url)!=="undefined")?d.url:document.URL;var l=(r.short_url!=""&&r.short_url!=null)?r.short_url:"";if(r.service=="sharethis"){var n=(typeof(d.title)!=="undefined")?d.title:encodeURIComponent(document.title);var a=(typeof(d.url)!=="undefined")?d.url:document.URL;var j="";if(typeof(d.summary)!="undefined"&&d.summary!=null){j=d.summary}var b=document.createElement("form");b.setAttribute("method","GET");b.setAttribute("action","http://edge.sharethis.com/share4x/mobile.html");b.setAttribute("target","_blank");var f={url:a,title:n,summary:j,destination:r.service,publisher:stLight.publisher,fpc:stLight.fpc,sessionID:stLight.sessionID,short_url:l};if(typeof(d.image)!="undefined"&&d.image!=null){f.image=d.image}if(typeof(d.summary)!="undefined"&&d.summary!=null){f.desc=d.summary}if(typeof(g)!="undefined"&&typeof(g.exclusive_services)!="undefined"&&g.exclusive_services!=null){f.exclusive_services=g.exclusive_services}if(typeof(r.exclusive_services)!="undefined"&&r.exclusive_services!=null){f.exclusive_services=r.exclusive_services}if(typeof(g)!="undefined"&&typeof(g.services)!="undefined"&&g.services!=null){f.services=g.services}if(typeof(r.services)!="undefined"&&r.services!=null){f.services=r.services}var m=r;if(typeof(g)!="undefined"){m=g}if(typeof(m.doNotHash)!="undefined"&&m.doNotHash!=null){f.doNotHash=m.doNotHash}if(typeof(d.via)!="undefined"&&d.via!=null){f.via=d.via}f.service=r.service;f.type=r.type;if(stlib.data){var k=stlib.json.encode(stlib.data.pageInfo);var i=stlib.json.encode(stlib.data.shareInfo);if(stlib.browser.isFirefox()&&!stlib.browser.firefox8Version()){k=encodeURIComponent(encodeURIComponent(k));i=encodeURIComponent(encodeURIComponent(i))}else{k=encodeURIComponent(k);i=encodeURIComponent(i)}f.pageInfo=k;f.shareInfo=i}for(var p in f){var e=document.createElement("input");e.setAttribute("type","hidden");e.setAttribute("name",p);e.setAttribute("value",f[p]);b.appendChild(e)}document.body.appendChild(b);b.submit();return true}if(r.service=="email"){var h=(l!="")?l+"%0A%0a":a+"%0A%0a";if((typeof(d.summary)!="undefined")&&d.summary!=null){h+=d.summary+"%0A%0a"}h+="Sent using ShareThis";var q="mailto:?";q+="Subject="+n;q+="&body="+h;window.location.href=q;return true}return false}};stlib.browser.mobile.init();var tpcCookiesEnableCheckingDone=false;var tpcCookiesEnabledStatus=true;stlib.cookie={setCookie:function(e,n,p){var d=(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1);var b=(navigator.userAgent.indexOf("MSIE")!=-1);if(d||b){var r=(p)?p*24*60*60:0;var k=document.createElement("div");k.setAttribute("id",e);k.setAttribute("type","hidden");document.body.appendChild(k);var a=document.getElementById(e),f=document.createElement("form");try{var m=document.createElement('<iframe name="'+e+'" ></iframe>')}catch(l){m=document.createElement("iframe")}m.name=e;m.src="javascript:false";m.style.display="none";a.appendChild(m);f.action=(("https:"==document.location.protocol)?"https://sharethis.com/":"http://sharethis.com/")+"account/setCookie.php";f.method="POST";var j=document.createElement("input");j.setAttribute("type","hidden");j.setAttribute("name","name");j.setAttribute("value",e);f.appendChild(j);var q=document.createElement("input");q.setAttribute("type","hidden");q.setAttribute("name","value");q.setAttribute("value",n);f.appendChild(q);var o=document.createElement("input");o.setAttribute("type","hidden");o.setAttribute("name","time");o.setAttribute("value",r);f.appendChild(o);f.target=e;a.appendChild(f);f.submit()}else{if(p){var i=new Date();i.setTime(i.getTime()+(p*24*60*60*1000));var g="; expires="+i.toGMTString()}else{var g=""}var h=e+"="+escape(n)+g;h+="; domain="+escape(".sharethis.com")+";path=/";document.cookie=h}},setTempCookie:function(e,f,g){if(g){var d=new Date();d.setTime(d.getTime()+(g*24*60*60*1000));var a="; expires="+d.toGMTString()}else{var a=""}var b=e+"="+escape(f)+a;b+="; domain="+escape(".sharethis.com")+";path=/";document.cookie=b},getCookie:function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return false}},deleteCookie:function(e){var l="/";var k=".sharethis.com";document.cookie=e.replace(/^\s+|\s+$/g,"")+"="+((l)?";path="+l:"")+((k)?";domain="+k:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";var d=(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1);var b=(navigator.userAgent.indexOf("MSIE")!=-1);if(d||b){var h=document.createElement("div");h.setAttribute("id",e);h.setAttribute("type","hidden");document.body.appendChild(h);var a=document.getElementById(e),f=document.createElement("form");try{var j=document.createElement('<iframe name="'+e+'" ></iframe>')}catch(i){j=document.createElement("iframe")}j.name=e;j.src="javascript:false";j.style.display="none";a.appendChild(j);f.action=(("https:"==document.location.protocol)?"https://sharethis.com/":"http://sharethis.com/")+"account/deleteCookie.php";f.method="POST";var g=document.createElement("input");g.setAttribute("type","hidden");g.setAttribute("name","name");g.setAttribute("value",e);f.appendChild(g);f.target=e;a.appendChild(f);f.submit()}},deleteAllSTCookie:function(){var e=document.cookie;e=e.split(";");for(var g=0;g<e.length;g++){var d=e[g];d=d.split("=");if(!/st_optout/.test(d[0])){var f=d[0];var j="/";var h=".edge.sharethis.com";document.cookie=f+"=;path="+j+";domain="+h+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}}},setFpcCookie:function(a,h){var d=new Date;var j=d.getFullYear();var g=d.getMonth()+9;var i=d.getDate();var e=a+"="+escape(h);if(j){var b=new Date(j,g,i);e+="; expires="+b.toGMTString()}var f=stlib.cookie.getDomain();e+="; domain="+escape(f)+";path=/";document.cookie=e},getFpcCookie:function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return false}},getDomain:function(){var b=document.domain.split(/\./);var a="";if(b.length>1){a="."+b[b.length-2]+"."+b[b.length-1]}return a},checkCookiesEnabled:function(){if(!tpcCookiesEnableCheckingDone){stlib.cookie.setTempCookie("STPC","yes",1);if(stlib.cookie.getCookie("STPC")=="yes"){tpcCookiesEnabledStatus=true}else{tpcCookiesEnabledStatus=false}tpcCookiesEnableCheckingDone=true;return tpcCookiesEnabledStatus}else{return tpcCookiesEnabledStatus}},hasLocalStorage:function(){try{localStorage.setItem("stStorage","yes");localStorage.removeItem("stStorage");return true}catch(a){return false}}};stlib.fpc={cookieName:"__unam",cookieValue:"",createFpc:function(){if(!document.domain||document.domain.search(/\.gov/)>0){return false}var i=stlib.cookie.getFpcCookie(stlib.fpc.cookieName);if(i==false){var d=Math.round(Math.random()*2147483647);d=d.toString(16);var g=(new Date()).getTime();g=g.toString(16);var f=window.location.hostname.split(/\./)[1];if(!f){return false}var h="";h=stlib.fpc.determineHash(f)+"-"+g+"-"+d+"-1";i=h}else{var b=i;var a=b.split(/\-/);if(a.length==4){var e=Number(a[3]);e++;i=a[0]+"-"+a[1]+"-"+a[2]+"-"+e}}stlib.cookie.setFpcCookie(stlib.fpc.cookieName,i);stlib.fpc.cookieValue=i;return i},determineHash:function(b){var f=0;var e=0;for(var d=b.length-1;d>=0;d--){var a=parseInt(b.charCodeAt(d));f=((f<<8)&268435455)+a+(a<<12);if((e=f&161119850)!=0){f=(f^(e>>20))}}return f.toString(16)}};stlib.validate={regexes:{notEncoded:/(%[^0-7])|(%[0-7][^0-9a-f])|["{}\[\]\<\>\\\^`\|]/gi,tooEncoded:/%25([0-7][0-9a-f])/gi,publisher:/^(([a-z]{2}(-|\.))|)[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,url:/^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,fpc:/^[0-9a-f]{7}-[0-9a-f]{11}-[0-9a-f]{7,8}-[0-9]*$/i,sessionID:/^[0-9]*\.[0-9a-f]*$/i,title:/.*/,description:/.*/,buttonType:/^(chicklet|vcount|hcount|large|custom|button|)$/,comment:/.*/,destination:/.*/,source:/.*/,image:/(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i,sourceURL:/^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i,sharURL:/(^(http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))|^$/i}};stlib.html={encode:function(a){if(stlib.html.startsWith(a,"http")){return String(a).replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}else{return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}},startsWith:function(a,b){return(a.match("^"+b)==b)}};stlib.stfp={screenResolutionDepthHash:"ERROR",pluginsListHash:"ERROR",fontsListHash:"ERROR",timezoneoffsetHash:"ERROR",checkIEPlugins:["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"],getPluginsHash:function(){var b="";if(stlib.browser.getIEVersion()!=null){for(var a=0;a<stlib.stfp.checkIEPlugins.length;a++){try{new ActiveXObject(stlib.stfp.checkIEPlugins[a]);b+=stlib.stfp.checkIEPlugins[a]+":"}catch(d){}}}if(stlib.browser.getIEVersion()==null||stlib.browser.getIEVersion()>=11){if(((typeof navigator)!="undefined"||navigator!=null)&&((typeof navigator.plugins)!="undefined"||navigator.plugins!=null)){for(var a=0;a<navigator.plugins.length;a++){b+=navigator.plugins[a].name+":"}}}_$d1("PluginList: "+b);if(b.length>0){stlib.stfp.pluginsListHash=stlib.stfp.getFpHash(b)}},getResolutionDepthHash:function(){if(screen){_$d1("Resolution: "+(((typeof screen.width)!="undefined")?screen.width:"NA")+":"+(((typeof screen.height)!="undefined")?screen.height:"NA")+":"+(((typeof screen.colorDepth)!="undefined")?screen.colorDepth:"NA"));stlib.stfp.screenResolutionDepthHash=stlib.stfp.getFpHash((((typeof screen.width)!="undefined")?screen.width:"NA")+":"+(((typeof screen.height)!="undefined")?screen.height:"NA")+":"+(((typeof screen.colorDepth)!="undefined")?screen.colorDepth:"NA"))}},getTimezoneOffsetHash:function(){var b=new Date();var a=b.getTimezoneOffset();_$d1("Timezoneoffset: "+a);stlib.stfp.timezoneoffsetHash=stlib.stfp.getFpHash(a.toString())},getFontsHash:function(){var d=false;var h=document;var a=h.createElement("iframe");a.id="st_ifr";a.style.width="0px";a.style.height="0px";a.src="about:blank";var b=stlib.browser.isChrome();var f='<html><head><title>st_bf</title><script type="text/javascript">var stlib1={};stlib1.stfp={fontStr:"",fontsListHash:"ERROR",checkFonts:["Aharoni","algerian","Andalus","\'Angsana New\'","\'Apple Symbols\'","\'Arabic Typesetting\'","Arial","\'Baskerville Old Face\'","Batang","BatangChe","\'Bell MT\'","\'Berlin Sans FB\'","\'Bitstream Charter\'","\'Book Antiqua\'","\'Bookman Old Style\'","\'Bradley Hand ITC\'","Calibri","\'Californian FB\'","\'Cambria Math\'","\'Century Schoolbook\'","\'Century Schoolbook L\'","Charter","\'colonna mt\'","Consolas","Corbel","\'Cordia New\'","Courier","cursive","David","default","DFKai-SB","DilleniaUPC","DotumChe","Ebrima","\'Estrangelo Edessa\'","fantasy","FrankRuehl","Garamond","Gentium","Gungsuh","GungsuhChe","Haettenschweiler","\'Heiti TC\'","\'High Tower Text\'","\'Informal Roman\'","IrisUPC","\'Juice ITC\'","KaiTi","Kalinga","Kartika","Kokonor","Leelawadee","\'Liberation Mono\'","\'Liberation Sans\'","Loma","Magneto","\'Malgun Gothic\'","\'matura mt script capitals\'","\'Microsoft Himalaya\'","\'Microsoft JhengHei\'","\'Microsoft Sans Serif\'","\'Microsoft Uighur\'","\'Microsoft YaHei\'","\'Microsoft Yi Baiti\'","MingLiU","Mistral","Modena","\'Mongolian Baiti\'","\'Monotype Corsiva\'","\'MS Mincho\'","\'MS Outlook\'","\'MS PGothic\'","\'MS PMincho\'","\'MT Extra\'","\'Nimbus Mono L\'","\'Nimbus Sans L\'","NSimSun","Optima","Papyrus","PMingLiU-ExtB","Saab","\'Segoe Print\'","\'Segoe Script\'","\'Showcard Gothic\'","SimHei","\'Simplified Arabic\'","\'Simplified Arabic Fixed\'","SimSun","SimSun-ExtB","Tahoma","\'Traditional Arabic\'","Tunga","Ubuntu","\'URW Gothic L\'","\'URW Palladio L\'","Utopia","Verona","\'Viner Hand ITC\'","Vrinda","webdings","\'wide latin\'","Zapfino"],checkFontsLength:0,baseFonts:["monospace","sans-serif","serif"],baseFontsLength:0,testString:"mmmmmmmmmmlli",testSize:"72px",s:document.createElement("span"),sty:document.createElement("style"),hd:document.head||document.getElementsByTagName("head")[0],defaultWidth:{},defaultHeight:{},';if(b){f+="checkFontForCrome:function(checkFontIndex){var detected = false;var checkElement;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){checkElement = document.getElementById(\"st_check_fonts_\" + checkFontIndex + \"_\" + baseFontIndex);var matched = checkElement.offsetWidth!=stlib1.stfp.defaultWidth[baseFontIndex]||checkElement.offsetHeight!=stlib1.stfp.defaultHeight[baseFontIndex];detected = detected || matched;}return detected;},createFragments:function(){var span, fragment = document.createDocumentFragment();var doc = document;var d = doc.createElement('div');d.className = 'st_fontDetect';var baseFontName, checkFontName, baseElement, checkElement;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){baseFontName = stlib1.stfp.baseFonts[baseFontIndex];baseElement = document.createElement('span');baseElement.style.fontFamily=baseFontName;baseElement.id = \"st_base_fonts_\" + baseFontIndex;baseElement.innerHTML = stlib1.stfp.testString;baseElement.style.fontSize = stlib1.stfp.testSize;fragment.appendChild(baseElement);}for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){checkFontName = stlib1.stfp.checkFonts[checkFontIndex];for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){baseFontName = stlib1.stfp.baseFonts[baseFontIndex];checkElement = document.createElement('span');checkElement.style.fontFamily= checkFontName + ',' + baseFontName;checkElement.id = \"st_check_fonts_\" + checkFontIndex + \"_\" + baseFontIndex;checkElement.innerHTML = stlib1.stfp.testString;checkElement.style.fontSize = stlib1.stfp.testSize;fragment.appendChild(checkElement);}}d.appendChild(fragment);doc.body.appendChild(d);},"}else{f+='checkFont:function(font){var detected = false;for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){stlib1.stfp.s.style.fontFamily = font +"," + stlib1.stfp.baseFonts[baseFontIndex];var matched = stlib1.stfp.s.offsetWidth!=stlib1.stfp.defaultWidth[stlib1.stfp.baseFonts[baseFontIndex]]||stlib1.stfp.s.offsetHeight!=stlib1.stfp.defaultHeight[stlib1.stfp.baseFonts[baseFontIndex]];detected = detected || matched;}return detected;},'}f+='createStyle:function(){var css =".st_fontDetect{display:inline !important}";stlib1.stfp.sty.type="text/css";stlib1.stfp.sty.id="st_style";if(stlib1.stfp.sty.styleSheet){stlib1.stfp.sty.styleSheet.cssText = css;}else{stlib1.stfp.sty.appendChild(document.createTextNode(css))}stlib1.stfp.hd.appendChild(stlib1.stfp.sty)},getFontsHash:function(){var isBodyStyleSet = false;stlib1.stfp.s.className="st_fontDetect";stlib1.stfp.createStyle();stlib1.stfp.s.style.fontSize=stlib1.stfp.testSize;stlib1.stfp.s.innerHTML=stlib1.stfp.testString;stlib1.stfp.baseFontsLength = stlib1.stfp.baseFonts.length;stlib1.stfp.checkFontsLength = stlib1.stfp.checkFonts.length;var bodyDisplay = null;var bodyVisibility = null;if(document.body.style.display==="none"){isBodyStyleSet = true;bodyDisplay = document.body.style.display;bodyVisibility = document.body.style.visibility;document.body.style.display="block";document.body.style.visibility="hidden";}';if(b){f+="stlib1.stfp.createFragments();stlib1.stfp.defaultWidth[0] = document.getElementById('st_base_fonts_0').offsetWidth;stlib1.stfp.defaultHeight[0] = document.getElementById('st_base_fonts_0').offsetHeight;stlib1.stfp.defaultWidth[1] = document.getElementById('st_base_fonts_1').offsetWidth;stlib1.stfp.defaultHeight[1] = document.getElementById('st_base_fonts_1').offsetHeight;stlib1.stfp.defaultWidth[2] = document.getElementById('st_base_fonts_2').offsetWidth;stlib1.stfp.defaultHeight[2] = document.getElementById('st_base_fonts_2').offsetHeight;for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){var tempCheckFontName = stlib1.stfp.checkFonts[checkFontIndex];if(stlib1.stfp.checkFontForCrome(checkFontIndex)){stlib1.stfp.fontStr += tempCheckFontName +\":\";}}"}else{f+='for(var baseFontIndex=0;baseFontIndex<stlib1.stfp.baseFontsLength;baseFontIndex++){var tempBaseFontName = stlib1.stfp.baseFonts[baseFontIndex];stlib1.stfp.s.style.fontFamily = tempBaseFontName;document.body.appendChild(stlib1.stfp.s);stlib1.stfp.defaultWidth[tempBaseFontName]=stlib1.stfp.s.offsetWidth;stlib1.stfp.defaultHeight[tempBaseFontName]=stlib1.stfp.s.offsetHeight;document.body.removeChild(stlib1.stfp.s)}stlib1.stfp.s.style.fontFamily="st_font";document.body.appendChild(stlib1.stfp.s);for(var checkFontIndex=0;checkFontIndex<stlib1.stfp.checkFontsLength;checkFontIndex++){var tempCheckFontName = stlib1.stfp.checkFonts[checkFontIndex];if(stlib1.stfp.checkFont(tempCheckFontName)){stlib1.stfp.fontStr += tempCheckFontName +":"}}var sheet = document.getElementById("st_style");sheet.parentNode.removeChild(sheet);document.body.removeChild(stlib1.stfp.s);'}f+='if(isBodyStyleSet){document.body.style.display = bodyDisplay;document.body.style.visibility = bodyVisibility;}}};<\/script></head><body id="st_ifr"><div><script type="text/javascript">stlib1.stfp.getFontsHash();<\/script></div></body></html>';h.body.appendChild(a);try{a.contentWindow.document.open("text/html","replace")}catch(g){if(stlib.browser.getIEVersion()!=null){if(stlib.browser.getIEVersion()<11&&g.message.match(/denied/g)){h.body.removeChild(a);d=true}}}if(!d){a.contentWindow.document.write(f);a.contentWindow.document.close();_$d1("FontList: "+document.getElementById("st_ifr").contentWindow.stlib1.stfp.fontStr);stlib.stfp.fontsListHash=stlib.stfp.getFpHash(document.getElementById("st_ifr").contentWindow.stlib1.stfp.fontStr);h.body.removeChild(a)}},init:function(){stlib.stfp.getFontsHash();stlib.stfp.getPluginsHash();stlib.stfp.getResolutionDepthHash();stlib.stfp.getTimezoneOffsetHash()},getFpHash:function(a){var f=0,e=0;for(var d=a.length-1;d>=0;d--){var b=parseInt(a.charCodeAt(d));f=((f<<8)&268435455)+b+(b<<12);if((e=f&161119850)!=0){f=(f^(e>>20))}}return f.toString(16)}};if(typeof(stlib.data)=="undefined"){stlib.data={bInit:false,publisherKeySet:false,pageInfo:{},shareInfo:{},resetPageData:function(){stlib.data.pageInfo.fpc="ERROR";stlib.data.pageInfo.sessionID="ERROR";stlib.data.pageInfo.hostname="ERROR";stlib.data.pageInfo.location="ERROR"},resetShareData:function(){stlib.data.shareInfo={};stlib.data.shareInfo.url="ERROR";stlib.data.shareInfo.sharURL="";stlib.data.shareInfo.buttonType="ERROR";stlib.data.shareInfo.destination="ERROR";stlib.data.shareInfo.source="ERROR"},resetData:function(){stlib.data.resetPageData();stlib.data.resetShareData()},validate:function(){var a=stlib.validate.regexes;function b(f,h){if(h!=encodeURIComponent(h)){a.notEncoded.test(h)?_$de(f+" not encoded"):null;a.tooEncoded.test(h)?_$de(f+" has too much encoding"):null}var g=a[f]?a[f].test(decodeURIComponent(h)):true;if(!g){_$de(f+" failed validation")}}var d=stlib.data.pageInfo;var e;for(e in d){b(e,d[e])}d=stlib.data.shareInfo;for(e in d){b(e,d[e])}},init:function(){if(!stlib.data.bInit){stlib.data.bInit=true;stlib.data.resetData();stlib.data.set("url",document.location.href,"shareInfo");var g="";stlib.hash.init();stlib.data.set("shareHash",stlib.hash.shareHash,"pageInfo");stlib.data.set("incomingHash",stlib.hash.incomingHash,"pageInfo");if(!stlib.hash.doNotHash){g="#"+stlib.data.get("shareHash","pageInfo")}var f=stlib.hash.updateParams();stlib.data.set("url",f+g,"shareInfo");if(stlib.data.publisherKeySet!=true){stlib.data.set("publisher","ur.00000000-0000-0000-0000-000000000000","pageInfo")}stlib.fpc.createFpc();stlib.data.set("fpc",stlib.fpc.cookieValue,"pageInfo");var b=(new Date()).getTime().toString();var h=Number(Math.random().toPrecision(5).toString().substr(2)).toString();stlib.data.set("sessionID",b+"."+h,"pageInfo");stlib.data.set("hostname",document.location.hostname,"pageInfo");stlib.data.set("location",document.location.pathname,"pageInfo");var e=document.referrer;var i=e.replace("http://","").replace("https://","").split("/");var d=i.shift();var a=i.join("/");stlib.data.set("refDomain",d,"pageInfo");stlib.data.set("refQuery",a,"pageInfo")}},setPublisher:function(a){stlib.data.set("publisher",a,"pageInfo");stlib.data.publisherKeySet=true},setSource:function(d,a){var b="";if(a){if(a.toolbar){b="toolbar"+d}else{if(a.page&&a.page!="home"&&a.page!=""){b="chicklet"+d}else{b="button"+d}}}else{b=d}stlib.data.set("source",b,"shareInfo")},set:function(a,d,b){_$d_();_$d1("Setting: "+a+": "+d);if(typeof(d)=="number"||typeof(d)=="boolean"){stlib.data[b][a]=d}else{if(typeof(d)=="undefined"||d==null){_$d1("Value undefined or null")}else{stlib.data[b][a]=encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")));if(a=="url"||a=="location"||a=="image"){try{stlib.data[b][a]=encodeURIComponent(decodeURIComponent(decodeURI(d.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")))}catch(f){stlib.data[b][a]=encodeURIComponent(decodeURIComponent(unescape(d.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")))}}}}},get:function(a,b){if(stlib.data[b]&&stlib.data[b][a]){return decodeURIComponent(stlib.data[b][a])}else{return false}},unset:function(a,b){if(stlib.data[b]&&typeof(stlib.data[b][a])!="undefined"){delete stlib.data[b][a]}}};stlib.data.resetData()}stlib.hash={doNotHash:true,hashAddressBar:false,doNotCopy:true,prefix:"sthash",shareHash:"",incomingHash:"",validChars:["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],servicePreferences:{linkedin:"param",stumbleupon:"param",bebo:"param"},hashDestination:function(b){if(b=="copy"){return"dpuf"}var d=b.substring(0,2)+b.substring(b.length-2,b.length);var a=function(e,f){if(e.charCodeAt(f)==122){return"a"}return String.fromCharCode(e.charCodeAt(f)+1)};return a(d,0)+a(d,1)+a(d,2)+a(d,3)},getHash:function(){var d=false;var b="";var e=document.location.href;e=e.split("#").shift();var a=e.split("?");if(a.length>1){a=a[1].split("&");for(arg in a){try{if(a[arg].substring(0,6)=="sthash"){d=true;b=a[arg]}}catch(f){}}if(d){return b}else{return document.location.hash.substring(1)}}else{return document.location.hash.substring(1)}},stripHash:function(a){var b=a;b=b.split("#");if(b.length>1){return b[1]}else{return""}},clearHash:function(){if(stlib.hash.validateHash(document.location.hash)){var a=document.location.href.split("#").shift();if(window.history&&history.replaceState){history.replaceState(null,document.title,a)}else{if((/MSIE/).test(navigator.userAgent)){window.location.replace("#")}else{document.location.hash=""}}}},init:function(){var b="";var a=stlib.hash.validChars.length;for(var f=0;f<8;f++){b+=stlib.hash.validChars[Math.random()*a|0]}if(stlib.hash.getHash()==""){stlib.hash.shareHash=stlib.hash.prefix+"."+b}else{var d=stlib.hash.getHash().split(".");var e=d.shift();if(e==stlib.hash.prefix||e==stlib.hash.prefix){stlib.hash.incomingHash=stlib.hash.getHash();stlib.hash.shareHash=stlib.hash.prefix+"."+d.shift()+"."+b}else{stlib.hash.shareHash=stlib.hash.prefix+"."+b}}if(!stlib.hash.doNotHash&&stlib.hash.hashAddressBar){if(document.location.hash==""||stlib.hash.validateHash(document.location.hash)){if(window.history&&history.replaceState){history.replaceState(null,"ShareThis","#"+stlib.hash.shareHash+".dpbs")}else{if((/MSIE/).test(navigator.userAgent)){window.location.replace("#"+stlib.hash.shareHash+".dpbs")}else{document.location.hash=stlib.hash.shareHash+".dpbs"}}}}else{stlib.hash.clearHash()}if(!stlib.hash.doNotHash&&!stlib.hash.doNotCopy){stlib.hash.copyPasteInit()}stlib.hash.copyPasteLog()},checkURL:function(){var b=stlib.data.get("destination","shareInfo");var g=stlib.hash.updateParams(b);var e="."+stlib.hash.hashDestination(b);stlib.hash.updateDestination(e);if(!stlib.hash.doNotHash&&typeof(stlib.data.pageInfo.shareHash)!="undefined"){var d=stlib.data.get("url","shareInfo");var h=stlib.hash.stripHash(d);if(stlib.hash.validateHash(h)||h==""){if(typeof(stlib.hash.servicePreferences[b])!="undefined"){if(stlib.hash.servicePreferences[b]=="param"){_$d1("Don't use hash, use params");_$d2(g);if(g.split("?").length>1){var f=g.split("?")[1].split("&");var i=false;for(var a=0;a<f.length;a++){if(f[a].split(".")[0]=="sthash"){i=true}}if(i){stlib.data.set("url",g,"shareInfo")}else{stlib.data.set("url",g+"&"+stlib.data.pageInfo.shareHash,"shareInfo")}}else{stlib.data.set("url",g+"?"+stlib.data.pageInfo.shareHash,"shareInfo")}if(b=="linkedin"){if(stlib.data.get("sharURL","shareInfo")!=""){stlib.data.set("sharURL",stlib.data.get("url","shareInfo"),"shareInfo")}}}else{_$d1("Using Hash");stlib.data.set("url",g+"#"+stlib.data.pageInfo.shareHash,"shareInfo")}}else{_$d1("Not using custom destination hash type");stlib.data.set("url",g+"#"+stlib.data.pageInfo.shareHash,"shareInfo")}}}},updateParams:function(a){var g=stlib.data.get("url","shareInfo").split("#").shift();var f=/(\?)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;var e=/(&)sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}/;var d=/(\?)sthash\.[a-zA-z0-9]{8}/;var b=/(&)sthash\.[a-zA-z0-9]{8}/;if(f.test(g)){g=g.replace(f,"?"+stlib.data.pageInfo.shareHash)}else{if(e.test(g)){g=g.replace(e,"&"+stlib.data.pageInfo.shareHash)}else{if(d.test(g)){g=g.replace(d,"?"+stlib.data.pageInfo.shareHash)}else{if(b.test(g)){g=g.replace(b,"&"+stlib.data.pageInfo.shareHash)}}}}return g},updateDestination:function(b){var a=/sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}/;var d=/sthash\.[a-zA-z0-9]{8}\.[a-z]{4}/;_$d_();_$d1("Updating Destination");if(a.test(stlib.data.pageInfo.shareHash)){_$d2(stlib.data.pageInfo.shareHash.substring(0,24));stlib.data.pageInfo.shareHash=stlib.data.pageInfo.shareHash.substring(0,24)+b}else{if(d.test(stlib.data.pageInfo.shareHash)){_$d2(stlib.data.pageInfo.shareHash.substring(0,15));stlib.data.pageInfo.shareHash=stlib.data.pageInfo.shareHash.substring(0,15)+b}else{stlib.data.pageInfo.shareHash+=b}}},validateHash:function(a){var b=/[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}$/;var d=/[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-zA-z0-9]{8}\.[a-z]{4}$/;var e=/[\?#&]?sthash\.[a-zA-z0-9]{8}\.[a-z]{4}$/;var f=/[\?#&]?sthash\.[a-zA-z0-9]{8}$/;return f.test(a)||e.test(a)||d.test(a)||b.test(a)},appendHash:function(a){var b=stlib.hash.stripHash(a);if(stlib.data.pageInfo.shareHash&&(stlib.hash.validateHash(b)||b=="")){a=a.replace("#"+b,"")+"#"+stlib.data.pageInfo.shareHash}else{}return a},copyPasteInit:function(){var a=document.getElementsByTagName("body")[0];var d=document.createElement("div");d.id="stcpDiv";d.style.position="absolute";d.style.top="-1999px";d.style.left="-1988px";a.appendChild(d);d.innerHTML="ShareThis Copy and Paste";var b=document.location.href.split("#").shift();var e="#"+stlib.hash.shareHash;if(document.addEventListener){a.addEventListener("copy",function(i){if(typeof(Tynt)!="undefined"){return}var h=document.getSelection();if(h.isCollapsed){return}var g=h.getRangeAt(0).cloneContents();d.innerHTML="";d.appendChild(g);if(d.textContent.trim().length==0){return}if((h+"").trim().length==0){}else{if(d.innerHTML==(h+"")||d.textContent==(h+"")){d.innerHTML=stlib.html.encode(stlib.hash.selectionModify(h))}else{d.innerHTML+=stlib.html.encode(stlib.hash.selectionModify(h,true))}}var f=document.createRange();f.selectNodeContents(d);var j=h.getRangeAt(0);h.removeAllRanges();h.addRange(f);setTimeout(function(){h.removeAllRanges();h.addRange(j)},0)},false)}else{if(document.attachEvent){}}},copyPasteLog:function(){var d=window.addEventListener?"addEventListener":"attachEvent";var b=d=="attachEvent"?"oncopy":"copy";var a=document.getElementsByTagName("body")[0];a[d](b,function(g){var f=true;stlib.data.resetShareData();stlib.data.set("url",document.location.href,"shareInfo");stlib.data.setSource("copy");stlib.data.set("destination","copy","shareInfo");stlib.data.set("buttonType","custom","shareInfo");if(typeof(Tynt)!="undefined"){stlib.data.set("result","tynt","shareInfo");stlib.logger.log("debug");f=false}if(typeof(addthis_config)!="undefined"){stlib.data.set("result","addThis","shareInfo");if(typeof(addthis_config.data_track_textcopy)=="undefined"||addthis_config.data_track_textcopy){stlib.data.set("enabled","true","shareInfo");f=false}else{stlib.data.set("enabled","false","shareInfo")}stlib.logger.log("debug")}if(f){stlib.data.set("result","pass","shareInfo");stlib.logger.log("debug")}},false)},logCopy:function(a,b){stlib.data.resetShareData();stlib.data.set("url",a,"shareInfo");stlib.data.setSource("copy");stlib.data.set("destination","copy","shareInfo");stlib.data.set("buttonType","custom","shareInfo");if(b){stlib.data.set("description",b,"shareInfo")}stlib.sharer.share()},selectionModify:function(o,m){o=""+o;_$d_();_$d1("Copy Paste");var n=/^((http|https):\/\/([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*))/i;var h=/^([a-z0-9!'\(\)\*\.\-\+:]*(\.)[a-z0-9!'\(\)\*\.\-\+:]*)((\/[a-z0-9!'\(\)\*\.\-\+:]*)*)/i;var f=/^\+?1?[\.\-\\)_\s]?[\\(]?[0-9]{3}[\.\-\\)_\s]?[0-9]{3}[\.\-_\s]?[0-9]{4}$|^[0-9]{3}[\.\-_\s]?[0-9]{4}$/;var j=/^[0-9]{3}[\.\-_\s]?[0-9]{8}$/;var l=/^[0-9]{2}[\.\-_\s]?[0-9]{4}[\.\-_\s]?[0-9]{4}$/;var d=/[\-_\.a-z0-9]+@[\-_\.a-z0-9]+\.[\-_\.a-z0-9]+/i;var g=/[\s@]/;var b=document.location.href.split("#").shift();var i="#"+stlib.hash.shareHash;var a="";var k="";var e="";if(typeof(m)=="undefined"&&((n.test(o)||h.test(o))&&!g.test(o.trim()))){_$d2("is Url");if(o.match(/#/)==null||stlib.hash.validateHash(o)){k=o.split("#")[0]+i+".dpuf";e=k}else{k=o;e=k}}else{_$d2("is Not Url");if(document.location.hash==""||(/^#$/).test(document.location.hash)||stlib.hash.validateHash(document.location.hash)){k=b+i+".dpuf"}else{k=document.location.href}e=o;if(o.length>50){a=" - See more at: "+k+"";if(!f.test(o)&&!j.test(o)&&!l.test(o)&&!d.test(o)){e+=a}}}if(o.length>140){o=o.substring(0,137)+"..."}stlib.hash.logCopy(k,o);return((m&&m==true)?a:e)}};stlib.pump=function(a,d,e){var b=this;this.isIframeReady=false;this.isIframeSending=false;this.getHash=function(f){var g=f.split("#");g.shift();return g.join("#")};this.broadcastInit=function(f){this.destination=f;_$d_("---------------------");_$d1("Initiating broadcaster:");_$d(this.destination)};this.broadcastSendMessage=function(f){_$d_("---------------------");_$d1("Initiating Send:");if(this.destination===window){if(stlib.browser.ieFallback){window.location.replace(window.location.href.split("#")[0]+"#"+f);_$d2("child can't communicate with parent");return}_$d2("Iframe to publisher: "+f);parent.postMessage("#"+f,document.referrer)}else{_$d2("Publisher to Iframe: "+f);if(stlib.browser.ieFallback){if(this.destination.contentWindow){this.destination.contentWindow.location.replace(this.destination.src+"#"+f);this.isIframeSending=true}return}this.destination.contentWindow.postMessage("#"+f,this.destination.src)}};this.receiverInit=function(h,k){_$d_("---------------------");_$d1("Initiating Receiver:");_$d(h);if(stlib.browser.ieFallback){this.callback=k;this.source=h;if(h===window){window.location.replace(window.location.href.split("#")[0]+"#");this.currentIframe=window.location.hash;var g="receiver"+stlib.functionCount;stlib.functions[g]=function(m){if(""!=window.location.hash&&"#"!=window.location.hash){var l=window.location.hash;m(l);window.location.replace(window.location.href.split("#")[0]+"#")}};stlib.functionCount++;var j="callback"+stlib.functionCount;stlib.functions[j]=k;stlib.functionCount++;setInterval("stlib.functions['"+g+"'](stlib.functions['"+j+"'])",200)}else{}var i=window.addEventListener?"addEventListener":"attachEvent";var f=i=="attachEvent"?"onmessage":"message";window[i](f,function(l){if(h==window){}else{if(l.origin.indexOf("sharethis.com")!=-1){if(l.data.match(/#Pinterest Click/)){stlib.sharer.sharePinterest()}}}},false);return}var i=window.addEventListener?"addEventListener":"attachEvent";var f=i=="attachEvent"?"onmessage":"message";window[i](f,function(l){if(h==window){_$d1("arrived in iframe from:");_$d(l.origin);if(l.data.match(/#fragmentPump/)||l.data.match(/#Buttons Ready/)||l.data.match(/#Widget Ready/)||l.data.indexOf("#light")==0||l.data.indexOf("#widget")==0||l.data.indexOf("#popup")==0||l.data.indexOf("#show")==0||l.data.indexOf("#init")==0||l.data.indexOf("#test")==0||l.data.indexOf("#data")==0){k(l.data)}}else{if(l.origin.indexOf("sharethis.com")!=-1){_$d1("arrived in parent from:");_$d(l.origin);if(l.data.match(/#fragmentPump/)||l.data.match(/#Buttons Ready/)||l.data.match(/#Widget Ready/)||l.data.indexOf("#light")==0||l.data.indexOf("#widget")==0||l.data.indexOf("#popup")==0||l.data.indexOf("#show")==0||l.data.indexOf("#init")==0||l.data.indexOf("#test")==0||l.data.indexOf("#data")==0){k(l.data)}else{if(l.data.match(/#Pinterest Click/)){stlib.sharer.sharePinterest()}}}else{_$d1("discarded event from:");_$d(l.origin)}}},false)};this.broadcastInit(a);this.receiverInit(d,e)};stlib.json={c:{"\b":"b","\t":"t","\n":"n","\f":"f","\r":"r",'"':'"',"\\":"\\","/":"/"},d:function(a){return a<10?"0".concat(a):a},e:function(c,f,e){e=eval;delete eval;if(typeof eval==="undefined"){eval=e}f=eval(""+c);eval=e;return f},i:function(d,b,a){return 1*d.substr(b,a)},p:["","000","00","0",""],rc:null,rd:/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/,rs:/(\x5c|\x2F|\x22|[\x0c-\x0d]|[\x08-\x0a])/g,rt:/^([0-9]+|[0-9]+[,\.][0-9]{1,3})$/,ru:/([\x00-\x07]|\x0b|[\x0e-\x1f])/g,s:function(a,b){return"\\".concat(stlib.json.c[b])},u:function(a,b){var e=b.charCodeAt(0).toString(16);return"\\u".concat(stlib.json.p[e.length],e)},v:function(b,a){return stlib.json.types[typeof result](result)!==Function&&(a.hasOwnProperty?a.hasOwnProperty(b):a.constructor.prototype[b]!==a[b])},types:{"boolean":function(){return Boolean},"function":function(){return Function},number:function(){return Number},object:function(a){return a instanceof a.constructor?a.constructor:null},string:function(){return String},"undefined":function(){return null}},$$:function(a){function b(f,d){d=f[a];delete f[a];try{stlib.json.e(f)}catch(e){f[a]=d;return 1}}return b(Array)&&b(Object)},encode:function(){var d=arguments.length?arguments[0]:this,a,h;if(d===null){a="null"}else{if(d!==undefined&&(h=stlib.json.types[typeof d](d))){switch(h){case Array:a=[];for(var g=0,e=0,b=d.length;e<b;e++){if(d[e]!==undefined&&(h=stlib.json.encode(d[e]))){a[g++]=h}}a="[".concat(a.join(","),"]");break;case Boolean:a=String(d);break;case Date:a='"'.concat(d.getFullYear(),"-",stlib.json.d(d.getMonth()+1),"-",stlib.json.d(d.getDate()),"T",stlib.json.d(d.getHours()),":",stlib.json.d(d.getMinutes()),":",stlib.json.d(d.getSeconds()),'"');break;case Function:break;case Number:a=isFinite(d)?String(d):"null";break;case String:a='"'.concat(d.replace(stlib.json.rs,stlib.json.s).replace(stlib.json.ru,stlib.json.u),'"');break;default:var g=0,f;a=[];for(f in d){if(d[f]!==undefined&&(h=stlib.json.encode(d[f]))){a[g++]='"'.concat(f.replace(stlib.json.rs,stlib.json.s).replace(stlib.json.ru,stlib.json.u),'":',h)}}a="{".concat(a.join(","),"}");break}}}return a},decode:function(a){if(typeof(a)=="string"){var d=null;try{if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=window.JSON&&window.JSON.parse?window.JSON.parse(a):(new Function("return "+a))();return d}else{return null}}catch(b){}}}};try{stlib.json.rc=new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')}catch(z){stlib.json.rc=/^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/}stlib.logger={loggerUrl:(("https:"==document.location.protocol)?"https://":"http://")+"l.sharethis.com/",productArray:new Array(),version:"",lang:"en",isFpEvent:false,constructParamString:function(){var a=stlib.data.pageInfo;var d="";var b;for(b in a){if(!stlib.logger.isFpEvent&&(b=="ufa"||b=="ufb"||b=="ufc"||b=="ufd")){continue}d+=b+"="+a[b]+"&"}a=stlib.data.shareInfo;for(b in a){d+=b+"="+a[b]+"&"}return d.substring(0,d.length-1)},log:function(e,g){_$d_();_$d1("Log Event PageInfo:");_$d(stlib.data.pageInfo);_$d1("Log Event ShareInfo:");_$d(stlib.data.shareInfo);if(typeof(e)=="undefined"){_$de("event does not exist \nFor help, contact support@sharethis.com");return}if(stlib.data.pageInfo==null||stlib.data.shareInfo==null){_$de("stlib.logger does not have enough info to log \nFor help, contact support@sharethis.com");return}if(!stlib.data.get("url","shareInfo")){_$de("shareThisInfo.url do not exist \nFor help, contact support@sharethis.com");return}if(!stlib.data.get("sessionID","pageInfo")){_$de("sharePageInfo.sessionID do not exist \nFor help, contact support@sharethis.com");return}if(!stlib.data.get("destination","shareInfo")){if(e!="pview"){_$de("shareThisInfo.destination do not exist \nFor help, contact support@sharethis.com");return}}if(!stlib.data.get("buttonType","shareInfo")){if(e!="pview"){_$de("shareThisInfo.type do not exist \nFor help, contact support@sharethis.com");return}}if(!stlib.data.get("source","shareInfo")){_$de("shareThisInfo.source do not exist \nFor help, contact support@sharethis.com");return}if(e=="pview"){stlib.data.unset("destination","shareInfo");stlib.data.unset("buttonType","shareInfo")}else{stlib.data.unset("refDomain","pageInfo");stlib.data.unset("refQuery","pageInfo")}if(e=="pview"||e=="share"){stlib.logger.isFpEvent=true;if(stlib.stfp.screenResolutionDepthHash!="ERROR"){stlib.data.set("ufa",stlib.stfp.screenResolutionDepthHash,"pageInfo")}if(stlib.stfp.pluginsListHash!="ERROR"){stlib.data.set("ufb",stlib.stfp.pluginsListHash,"pageInfo")}if(stlib.stfp.fontsListHash!="ERROR"){stlib.data.set("ufc",stlib.stfp.fontsListHash,"pageInfo")}if(stlib.stfp.timezoneoffsetHash!="ERROR"){stlib.data.set("ufd",stlib.stfp.timezoneoffsetHash,"pageInfo")}}else{stlib.logger.isFpEvent=false}if(typeof(stlib.data.get("counter","shareInfo"))!="undefined"){var d=0;if(stlib.data.get("counter","shareInfo")){d=stlib.data.get("counter","shareInfo")}stlib.data.set("ts"+new Date().getTime()+"."+d,"","shareInfo");stlib.data.unset("counter","shareInfo")}else{stlib.data.set("ts"+new Date().getTime(),"","shareInfo")}var a=(e=="pview")?"pview":((e=="debug")?"cns":"log");if(e=="pview"){var f=stlib.logger.loggerUrl+a+"?event="+e+"&product="+stlib.logger.productArray+"&version="+stlib.logger.version+"&lang="+stlib.logger.lang+"&"+stlib.logger.constructParamString()}else{var f=stlib.logger.loggerUrl+a+"?event="+e+"&"+stlib.logger.constructParamString()}_$d1("Final Log Url:");_$d2(f);var b=new Image(1,1);b.src=f;b.onload=function(){return};g?g():null}};stlib.scriptLoader={loadJavascript:function(b,d){_$d_();_$d1("Loading JS: "+b);var a=stlib.scriptLoader;a.head=document.getElementsByTagName("head")[0];a.scriptSrc=b;a.script=document.createElement("script");a.script.setAttribute("type","text/javascript");a.script.setAttribute("src",a.scriptSrc);a.script.async=true;a.script.onload=d;a.script.onreadystatechange=function(){if(this.readyState=="loaded"){d()}};a.s=document.getElementsByTagName("script")[0];a.s.parentNode.insertBefore(a.script,a.s)},loadCSS:function(b,e){_$d_();_$d1("Loading CSS: "+b);var a=stlib.scriptLoader;var d;a.head=document.getElementsByTagName("head")[0];a.cssSrc=b;a.css=document.createElement("link");a.css.setAttribute("rel","stylesheet");a.css.setAttribute("type","text/css");a.css.setAttribute("href",b);a.css.setAttribute("id",b);setTimeout(function(){e();if(!document.getElementById(b)){d=setInterval(function(){if(document.getElementById(b)){clearInterval(d);e()}},100)}},100);a.head.appendChild(a.css)}};stlib.nativeButtons={supportedNativeButtons:{linkedinfollow:{log:true,config:true,dependencyLoaded:false,dependencyLoading:false,requiredFields:[["st_followId","Profile Id","Enter '207839' for profile id"]]},twitterfollow:{log:false,config:true,requiredFields:[["st_username","Username","Enter 'sharethis' for username"]]},pinterestfollow:{log:true,config:true,requiredFields:[["st_username","Username","Enter 'sharethis' for username"]]},youtube:{log:true,config:true,requiredFields:[["st_username","Username","Enter 'sharethis' for username"]]},foursquaresave:{log:false,config:true,dependencyLoaded:false,dependencyLoading:false},foursquarefollow:{log:false,config:true,requiredFields:[["st_username","Username","Enter 'sharethis' for username"],["st_followId","Follow id","Enter '1234567' for follow id"]]},googleplusfollow:{log:true,config:true,requiredFields:[["st_followId","Page Id","Enter '110967630299632321627' for page id"]]},googleplusadd:{log:true,config:true,requiredFields:[["st_followId","Profile Id","Enter '113842823840690472625' for profile id"]]}},loadService:function(a){if(a=="foursquaresave"||a=="foursquarefollow"){if(stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded==false){if(stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading==false){stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading=true;var d="http://platform.foursquare.com/js/widgets.js";var b={uid:"606"};if("https:"==document.location.protocol){d="http://platform-s.foursquare.com/js/widgets.js";b.secure=true}(function(){window.___fourSq=b;var e=document.createElement("script");e.type="text/javascript";e.src=d;e.async=true;var f=document.getElementsByTagName("script")[0];e.onload=function(){fourSq.widget.Factory.go();stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded=true;stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading=false};e.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){fourSq.widget.Factory.go();stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoaded=true;stlib.nativeButtons.supportedNativeButtons.foursquaresave.dependencyLoading=false}};f.parentNode.insertBefore(e,f)})()}}else{fourSq.widget.Factory.go()}}else{if(a=="pinterestfollow"){}else{if(a=="twitterfollow"){}else{if(a=="youtube"){}else{if(a=="linkedinfollow"){if(window.IN&&typeof(window.IN.parse)==="function"){window.IN.parse()}else{if(stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading==false){stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading=true;var d="//platform.linkedin.com/in.js";(function(){var e=document.createElement("script");e.type="text/javascript";e.src=d;e.async=true;var f=document.getElementsByTagName("script")[0];e.onload=function(){stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading=false};e.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){stlib.nativeButtons.supportedNativeButtons.linkedinfollow.dependencyLoading=false}};f.parentNode.insertBefore(e,f)})()}}}else{}}}}}},logService:function(a,b){stlib.data.resetShareData();stlib.data.set("url",b,"shareInfo");stlib.data.set("destination",a,"shareInfo");stlib.data.setSource("chicklet");stlib.data.set("buttonType","chicklet","shareInfo");stlib.sharer.share()},makeButton:function(w,e,d){if(w=="foursquaresave"){try{var k=document.createElement("<div></div>");var i=document.createElement("<a></a>")}catch(h){k=document.createElement("div");i=document.createElement("a")}k.className="stNativeButton stFourSquare";i.setAttribute("href","https://foursquare.com/intent/venue.html");i.setAttribute("class","fourSq-widget");i.setAttribute("data-on-open","foursquareCallback");k.appendChild(i);return k}else{if(w=="foursquarefollow"){if(typeof(d.username)=="undefined"||d.username==""){return false}if(typeof(d.followId)=="undefined"||d.followId==""){return false}try{var k=document.createElement("<div></div>");var i=document.createElement("<a></a>")}catch(h){k=document.createElement("div");i=document.createElement("a")}k.className="stNativeButton stFourSquare";i.setAttribute("href","https://foursquare.com/user/"+d.username);i.setAttribute("class","fourSq-widget");i.setAttribute("data-type","follow");i.setAttribute("data-fuid",d.followId);i.setAttribute("data-on-open","foursquareCallback");k.appendChild(i);return k}else{if(w=="googleplusfollow"||w=="googleplusadd"){if(typeof(d.followId)=="undefined"||d.followId==""){return false}try{var q=document.createElement("<span></span>")}catch(h){q=document.createElement("span")}q.className="stNativeButton stGoogleNative";var o=document.createElement("g:plus");o.setAttribute("href","https://plus.google.com/"+d.followId);o.setAttribute("width","300");o.setAttribute("height","69");q.appendChild(o);return q}else{if(w=="pinterestfollow"){if(typeof(d.username)=="undefined"||d.username==""){return false}try{var b=document.createElement("<span></span>");var p=document.createElement("<a></a>");var n=document.createElement("<img></img>")}catch(h){b=document.createElement("span");p=document.createElement("a");n=document.createElement("img")}b.className="stNativeButton stPinterestfollow";var g=d.username;p.setAttribute("target","_blank");p.setAttribute("href","//pinterest.com/"+g+"/");n.setAttribute("src","//passets-cdn.pinterest.com/images/follow-on-pinterest-button.png");n.setAttribute("width","156");n.setAttribute("height","26");n.setAttribute("alt","Follow "+g+" on Pinterest");p.appendChild(n);b.appendChild(p);return b}else{if(w=="twitterfollow"){if(typeof(d.username)=="undefined"||d.username==""){return false}try{var j=document.createElement("<iframe></iframe>")}catch(h){j=document.createElement("iframe")}var l="&screen_name="+d.username;var r="&show_count=false";iedocmode=stlib.browser.getIEVersion();var v="";if(e=="vcount"){r="&show_count=true"}else{if(e=="hcount"){r="&show_count=true"}}j.setAttribute("allowtransparency","true");j.setAttribute("frameborder","0");j.setAttribute("scrolling","no");j.className="stTwitterFollowFrame";j.setAttribute("src","//platform.twitter.com/widgets/follow_button.html?lang=en&show_screen_name=false"+l+r);var u=document.createElement("span");u.className="stNativeButton stTwitterFollowFrame stTwitterFollow";u.appendChild(j);return u}else{if(w=="youtube"){if(typeof(d.username)=="undefined"||d.username==""){return false}try{var m=document.createElement("<span></span>");var f=document.createElement("<a></a>");var a=document.createElement("<img></img>")}catch(h){m=document.createElement("span");f=document.createElement("a");a=document.createElement("img")}m.setAttribute("class","stNativeButton stYoutube");var g=d.username;f.setAttribute("target","_blank");f.setAttribute("href","//youtube.com/subscription_center?add_user="+g);a.setAttribute("src","//s.ytimg.com/yt/img/creators_corner/Subscribe_to_my_videos/YT_Subscribe_130x36_red.png");a.setAttribute("alt","Follow "+g+" on youtube");f.appendChild(a);m.appendChild(f);return m}else{if(w=="linkedinfollow"){if(typeof(d.followId)=="undefined"||d.followId==""){return false}var s=document.createElement("span");s.setAttribute("class","stNativeButton stLinkedinfollow");var t=document.createElement("script");t.type="text/javascript";t.setAttribute("type","IN/FollowCompany");t.setAttribute("data-id",d.followId);t.setAttribute("data-counter","none");if(e=="vcount"){t.setAttribute("data-counter","top")}else{if(e=="hcount"){t.setAttribute("data-counter","right")}}s.appendChild(t);return s}else{}}}}}}}},checkNativeButtonSupport:function(a){if(stlib.nativeButtons.supportedNativeButtons[a]){return true}return false},checkNativeButtonLogging:function(a){if(stlib.nativeButtons.supportedNativeButtons[a]){return stlib.nativeButtons.supportedNativeButtons[a].log}return false},checkNativeButtonConfig:function(a){if(stlib.nativeButtons.supportedNativeButtons[a]){return stlib.nativeButtons.supportedNativeButtons[a].config}return false}};foursquareCallback=function(d){if(d){var a="foursquaresave";var b="https://foursquare.com/intent/venue.html";if(d.config.type){a="foursquarefollow";b="https://foursquare.com/user/"+d.config.fuid}stlib.nativeButtons.logService(a,b)}};stlib.nativeCounts={nativeCountServices:{linkedin:true,facebook:true,stumbleupon:true},nativeFunc:[],addNativeFunc:function(b,a){stlib.nativeCounts.nativeFunc[b]=a},getNativeCounts:function(d,b,a){switch(d){case"facebook":stlib.scriptLoader.loadJavascript((("https:"==document.location.protocol)?"https://":"http://")+"api.facebook.com/method/fql.query?format=json&query=select url, like_count, total_count, comment_count, share_count, click_count from link_stat where url='"+encodeURIComponent(b)+"'&callback="+a,function(){});break;case"linkedin":stlib.scriptLoader.loadJavascript((("https:"==document.location.protocol)?"https://":"http://")+"www.linkedin.com/countserv/count/share?format=jsonp&callback="+a+"&url="+encodeURIComponent(b),function(){});break;case"stumbleupon":stlib.scriptLoader.loadJavascript((("https:"==document.location.protocol)?"https://":"http://")+"www.stumbleupon.com/services/1.1/badge.getinfo?url="+encodeURIComponent(b)+"&format=jsonp&callback="+a,function(){});break}},checkNativeCountServicesQueue:function(a){if(stlib.nativeCounts.nativeCountServices[a]){return true}return false}};var stWidgetVersion=false;if(typeof(switchTo5x)=="undefined"){stWidgetVersion="4x"}else{if(switchTo5x==false){stWidgetVersion="4x"}if(switchTo5x==true){stWidgetVersion="5xa"}}__stgetPubGA=function(){if(typeof(_gaq)!=="undefined"&&typeof(__stPubGA)=="undefined"){if(typeof(_gat)!=="undefined"){__stPubGA=_gat._getTrackerByName("~0")._getAccount()}if(typeof(__stPubGA)!=="undefined"&&__stPubGA=="UA-XXXXX-X"){_gaq.push(function(){var a=_gat._getTrackerByName();__stPubGA=a._getAccount()})}}else{if(typeof(ga)!=="undefined"&&typeof(__stPubGA)=="undefined"){ga(function(){var f=ga.getAll();for(var b=0;b<f.length;++b){var d=f[b];var a=d.get("trackingId");var e=a.indexOf("UA");if(e>=0){__stPubGA=a}}})}}if(__stPubGA=="UA-XXXXX-X"){delete __stPubGA}};if(typeof(stLight)=="undefined"&&typeof(SHARETHIS)=="undefined"){var stRecentServices=false;var iswhatsappCustomButton=false;if(typeof(switchTo5x)=="undefined"){stWidgetVersion="4x"}else{if(switchTo5x==false){stWidgetVersion="4x"}if(switchTo5x==true){stWidgetVersion="5xa"}}var esiLoaded=false,esiStatus="",stIsLoggedIn=false,servicesLoggedIn={};var stFastShareObj={};stFastShareObj.shorten=true;if(typeof(useEdgeSideInclude)=="undefined"){var useEdgeSideInclude=true}if("https:"==document.location.protocol){var useFastShare=false;var useEdgeSideInclude=false}if(typeof(useFastShare)=="undefined"){var useFastShare=true}stLight=new function(){this.version=false;this.publisher=null;this.sessionID_time=(new Date()).getTime().toString();this.sessionID_rand=Number(Math.random().toPrecision(5).toString().substr(2)).toString();this.sessionID=this.sessionID_time+"."+this.sessionID_rand;this.fpc=null;this.counter=0;this.readyRun=false;this.meta={hostname:document.location.host,location:document.location.pathname};this.loadedFromBar=false;this.clickCallBack=false};stLight.onReady=function(){if(stLight.readyRun==true){return false}stLight.readyRun=true;stlib.stfp.init();stLight.getAllAppDefault(function(){stlib.data.init();stLight.fpc=stlib.data.get("fpc","pageInfo");if(stButtons.messageQueueInstance==null){stButtons.messageQueueInstance=new stlib.messageQueue()}stLight.processSTQ();if(stLight.publisher==null){if(typeof(window.console)!=="undefined"){try{console.debug("Please specify a ShareThis Publisher Key \nFor help, contact support@sharethis.com")}catch(a){}}}var b=stLight.getSource();if(stLight.hasButtonOnPage()){if(b=="share4x"||b=="bar_share4x"){stlib.logger.productArray.push("Chicklet4x")}else{if(b=="share5x"||b=="bar_share5x"){stlib.logger.productArray.push("Chicklet5x")}}}if(typeof st_hover_widget!="undefined"){stlib.logger.productArray.push("HoverBar")}if(typeof st_pulldown_widget!="undefined"){stlib.logger.productArray.push("PullDownBar")}if(typeof st_bar_widget!="undefined"){stlib.logger.productArray.push("ShareBar")}if(typeof st_service_widget!="undefined"){stlib.logger.productArray.push("ShareNow")}if(typeof stlib.shareEgg!="undefined"){stlib.logger.productArray.push("ShareEgg")}if(typeof st_disc_widget!="undefined"){stlib.logger.productArray.push("TrendingWidget")}stlib.logger.version="buttons.js";if((stWidget.options.lang!=="undefined")&&(stWidget.options.lang!=="")){stlib.logger.lang=stWidget.options.lang}else{stlib.logger.lang="en"}stLight.log("pview",b);stWidget.options.sessionID=stLight.sessionID;stWidget.options.fpc=stLight.fpc;stLight.loadServicesLoggedIn(function(){stButtons.onReady()})})};stLight.getSource=function(){var a="share4x";if(stWidgetVersion=="5xa"){a="share5x"}if(stLight.hasButtonOnPage()){if(stLight.loadedFromBar){if(stWidgetVersion=="5xa"){a="bar_share5x"}else{a="bar_share4x"}}}else{if(stLight.loadedFromBar){a="bar"}}return a};stLight.getSource2=function(a){var d="share4x";if(stWidgetVersion=="5xa"){d="share5x";try{if(stLight.clickCallBack!=false){stLight.clickCallBack(a.service)}}catch(b){}}if(a.type=="stbar"||a.type=="stsmbar"){d="bar"}return d};stLight.log=function(d,e,a,b){stlib.data.resetShareData();stlib.data.set("url",document.location.href,"shareInfo");stlib.data.set("title",document.title,"shareInfo");stlib.data.set("counter",stLight.counter++,"shareInfo");stlib.data.setSource(e);if(typeof(a)!="undefined"){stlib.data.set("destination",a,"shareInfo")}if(typeof(b)!="undefined"){stlib.data.set("buttonType",b,"shareInfo")}stlib.logger.log(d);if(d=="pview"){stLight.createSegmentFrame()}};stLight._stFpc=function(){if(!document.domain||document.domain.search(/\.gov/)>0){return false}var h=stLight._stGetFpc("__unam");if(h==false){var d=Math.round(Math.random()*2147483647);d=d.toString(16);var i=(new Date()).getTime();i=i.toString(16);var f="";var a=stLight._stGetD();a=a.split(/\./)[1];if(!a){return false}f=stLight._stdHash(a)+"-"+i+"-"+d+"-1";h=f;stLight._stSetFpc(h)}else{var b=h;var g=b.split(/\-/);if(g.length==4){var e=Number(g[3]);e++;b=g[0]+"-"+g[1]+"-"+g[2]+"-"+e;h=b;stLight._stSetFpc(h)}}return h};stLight._stSetFpc=function(h){var a="__unam";var d=new Date;var j=d.getFullYear();var g=d.getMonth()+9;var i=d.getDate();var e=a+"="+escape(h);if(j){var b=new Date(j,g,i);e+="; expires="+b.toGMTString()}var f=stLight._stGetD();e+="; domain="+escape(f)+";path=/";document.cookie=e};stLight._stGetD=function(){var b=document.domain.split(/\./);var a="";if(b.length>1){a="."+b[b.length-2]+"."+b[b.length-1]}return a};stLight._stGetFpc=function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return false}};stLight._stdHash=function(a){var f=0,e=0;for(var d=a.length-1;d>=0;d--){var b=parseInt(a.charCodeAt(d));f=((f<<8)&268435455)+b+(b<<12);if((e=f&161119850)!=0){f=(f^(e>>20))}}return f.toString(16)};stLight._thisScript=null;stLight.getShareThisLightScript=function(){var e=document.getElementsByTagName("script");var d=null;for(var b=0;b<e.length;b++){var a=e[b].src;if(a.search(/.*sharethis.*\/button\/light.*/)>=0){d=e[b]}}return d};stLight.dbrInfo=function(){var j=document.referrer;if(j&&j.length>0){var h=/\/\/.*?\//;var e=j.match(h);if(typeof(e)!=="undefined"&&typeof(e[0])!=="undefined"){var b=new RegExp(document.domain,"gi");if(b.test(e[0])==true){return false}}var g=/(http:\/\/)(.*?)\/.*/i;var f=/(^.*\?)(.*)/ig;var a="";var d=j.replace(g,"$2");var b=new RegExp(d,"gi");if(d.length>0){a+="&refDomain="+d}else{return false}var i=j.replace(f,"$2");if(i.length>0){a+="&refQuery="+encodeURIComponent(i)}return a}else{return false}};stLight.odjs=function(a,b){this.head=document.getElementsByTagName("head")[0];this.scriptSrc=a;this.script=document.createElement("script");this.script.setAttribute("type","text/javascript");this.script.setAttribute("src",this.scriptSrc);if(window.attachEvent&&document.all){this.script.onreadystatechange=function(){if(this.readyState=="complete"||((a.indexOf("getAllAppDefault.esi")!=-1||a.indexOf("checkOAuth.esi")!=-1)&&this.readyState=="loaded")){b()}}}else{this.script.onload=b}this.head.appendChild(this.script)};stLight.getAppDefault=function(b,h,f){if(useEdgeSideInclude){var a="cb="+h;var g="&app="+b;var d="&publisher="+((stLight.publisher!=null)?stLight.publisher:"ur.00000000-0000-0000-0000-000000000000");var e="&domain="+document.location.hostname.replace(/^www\./,"");stLight.odjs("http://wd-edge.sharethis.com/button/getAllAppDefault.esi?"+a+g+d+e,function(){if(f!=null){f()}})}else{if(b=="cns"){if(stWidget.options.doNotHash==null){stlib.hash.doNotHash=stWidget.options.doNotHash=true}if(stWidget.options.hashAddressBar==null){stlib.hash.hashAddressBar=stWidget.options.hashAddressBar=false}if(stWidget.options.doNotCopy==null){stlib.hash.doNotCopy=stWidget.options.doNotCopy=true}}else{if(b=="snapsets"){if(stWidget.options.snapsets==null){stWidget.options.snapsets=false}}}if(f!=null){f()}}};stLight.getAllAppDefault=function(e){if(useEdgeSideInclude){if(esiStatus=="loading"){if(e!=null){stButtons.cbAppQueue.push(e)}return}else{if(esiStatus=="loaded"){if(e!=null){e()}return}}esiStatus="loading";var a="cb=stLight.allDefault";var f="&app=all";var b="&publisher="+((stLight.publisher!=null)?stLight.publisher:"ur.00000000-0000-0000-0000-000000000000");var d="&domain="+document.location.hostname.replace(/^www\./,"");stLight.odjs("http://wd-edge.sharethis.com/button/getAllAppDefault.esi?"+a+f+b+d,function(){esiStatus="loaded";for(var g=0;g<stButtons.cbAppQueue.length;g++){stButtons.cbAppQueue[g]()}stButtons.cbAppQueue=[];if(e!=null){e()}})}else{if(name=="cns"){if(stWidget.options.doNotHash==null){stlib.hash.doNotHash=stWidget.options.doNotHash=true}if(stWidget.options.hashAddressBar==null){stlib.hash.hashAddressBar=stWidget.options.hashAddressBar=false}if(stWidget.options.doNotCopy==null){stlib.hash.doNotCopy=stWidget.options.doNotCopy=true}}else{if(name=="snapsets"){if(stWidget.options.snapsets==null){stWidget.options.snapsets=false}}}if(e!=null){e()}}};stLight.allDefault=function(a){if(a){if(a.cns){stLight.cnsDefault(a.cns)}if(a.snapsets){stLight.snapSetsDefault(a.snapsets)}if(a.migration){stLight.migrationDefault(a.migration)}else{stLight.usePublisherDefaultSettings()}}else{stLight.usePublisherDefaultSettings()}};stLight.usePublisherDefaultSettings=function(){if(typeof(switchTo5x)=="undefined"){stWidgetVersion="4x"}else{if(switchTo5x==false){stWidgetVersion="4x"}if(switchTo5x==true){stWidgetVersion="5xa"}}};stLight.migrationDefault=function(a){if(stWidget.skipESIValue==false){if(stLight.version){stWidgetVersion=stLight.version}else{if((stWidget.options.lang=="")||(stWidget.options.lang=="en")){if((typeof(a)!=="undefined")&&(a.version!=="")){if(a.version=="5x"){stWidgetVersion="5xa"}else{stWidgetVersion=a.version}}}if(stWidgetVersion==false){stLight.usePublisherDefaultSettings()}else{stWidget.options.publisherMigration=true}}}if(stWidgetVersion=="5x"||stLight.version=="5x"){stWidgetVersion="5xa"}};stLight.snapSetsDefault=function(a){if(a){if(a.override){stWidget.options.snapsets=a.snapsets}else{if(stWidget.options.snapsets==null){stWidget.options.snapsets=a.snapsets}}}};stLight.cnsDefault=function(a){if(a){if(a.override){stWidget.options.doNotHash=a.doNotHash;stWidget.options.hashAddressBar=a.hashAddressBar;stWidget.options.doNotCopy=a.doNotCopy}else{if(stWidget.options.doNotHash==null){stWidget.options.doNotHash=a.doNotHash}if(stWidget.options.hashAddressBar==null){stWidget.options.hashAddressBar=a.hashAddressBar}if(stWidget.options.doNotCopy==null){stWidget.options.doNotCopy=a.doNotCopy}}stlib.hash.doNotHash=stWidget.options.doNotHash=(/true/i).test(stWidget.options.doNotHash)?true:false;stlib.hash.hashAddressBar=stWidget.options.hashAddressBar=(/true/i).test(stWidget.options.hashAddressBar)?true:false;stlib.hash.doNotCopy=stWidget.options.doNotCopy=(/true/i).test(stWidget.options.doNotCopy)?true:false}};stLight.loadServicesLoggedIn=function(b){if(useFastShare&&esiLoaded==false){try{stLight.odjs((("https:"==document.location.protocol)?"https://wd-edge.sharethis.com/button/checkOAuth.esi":"http://wd-edge.sharethis.com/button/checkOAuth.esi"),function(){if(typeof(userDetails)!=="undefined"){stIsLoggedIn=true;if(userDetails!=="null"){servicesLoggedIn=userDetails}}esiLoaded=true;if(b!=null){b()}})}catch(a){}}else{if(b!=null){b()}}};if(window.document.readyState=="completed"){stLight.onReady()}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("load",stLight.onReady,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("load",stLight.onReady,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",stLight.onReady)}}}}stLight.createSegmentFrame=function(){try{stLight.segmentframe=document.createElement('<iframe name="stframe" allowTransparency="true" style="body{background:transparent;}" ></iframe>')}catch(b){stLight.segmentframe=document.createElement("iframe")}stLight.segmentframe.id="stSegmentFrame";stLight.segmentframe.name="stSegmentFrame";var d=document.body;var a=(("https:"==document.location.protocol)?"https://seg.":"http://seg.")+"sharethis.com/getSegment.php?purl="+encodeURIComponent(document.location.href)+"&jsref="+encodeURIComponent(document.referrer)+"&rnd="+(new Date()).getTime();stLight.segmentframe.src=a;stLight.segmentframe.frameBorder="0";stLight.segmentframe.scrolling="no";stLight.segmentframe.width="0px";stLight.segmentframe.height="0px";stLight.segmentframe.setAttribute("style","display:none;");d.appendChild(stLight.segmentframe)};stLight.options=function(a){if(a&&a.version){stLight.version=a.version}if(a&&a.publisher){stlib.data.setPublisher(a.publisher);stLight.publisher=a.publisher}if(a&&a.loadedFromBar){stLight.loadedFromBar=a.loadedFromBar}if(a&&a.clickCallBack&&typeof(a.clickCallBack)=="function"){stLight.clickCallBack=a.clickCallBack}if(a&&typeof(a.hashAddressBar)!="undefined"){stlib.hash.hashAddressBar=a.hashAddressBar}if(a&&typeof(a.doNotHash)!="undefined"){stlib.hash.doNotHash=a.doNotHash}if(a&&typeof(a.doNotCopy)!="undefined"){stlib.hash.doNotCopy=a.doNotCopy}for(var b in a){if(b=="shorten"){stFastShareObj.shorten=a[b]}if(stWidget.options.hasOwnProperty(b)&&a[b]!==null){stWidget.options[b]=a[b]}}};stLight.hasButtonOnPage=function(){var f=document.getElementsByTagName("*");var d=new RegExp(/^st_(.*?)$/);var a=f.length;for(var b=0;b<a;b++){if(typeof(f[b].className)=="string"&&f[b].className!=""){if(f[b].className.match(/st_whatsapp_custom/g)&&!(stlib.browser.mobile.isIOs()||stlib.browser.mobile.isAndroid())&&!iswhatsappCustomButton){if(typeof(window.console)!=="undefined"){try{console.debug("WhatsApp custom button has support for iOS (iPhone) and android only and it will not work on any other platform.");iswhatsappCustomButton=true}catch(e){}}}if(f[b].className.match(d)&&f[b].className.match(d).length>=2&&f[b].className.match(d)[1]){return true}}}return false}}var stButtons={};stButtons.smartifyButtons=function(a){if(typeof(a)!="undefined"&&a!="undefined"){stRecentServices=a;for(var b in stRecentServices){stRecentServices[b].processed=false}}stButtons.completeInit()};stButtons.makeButton=function(w){var g=w.service;var I=w.text;var Z="";if(typeof(stWidget.options.shorten)!="undefined"){Z=stWidget.options.shorten}if(I==null&&(w.type=="vcount"||w.type=="hcount")){I="Share";if(g=="email"){I="Mail"}}if(g=="fb_like"){g="fblike"}else{if(g=="fblike_fbLong"){g="fblike";w.type="fbLong"}}var h=stWidget.ogurl?stWidget.ogurl:(stWidget.twitterurl?stWidget.twitterurl:document.location.href);h=w.url?w.url:h;var V=h;if(!stlib.hash.doNotHash){V=stlib.hash.appendHash(h);h=V}stlib.data.set("url",V,"shareInfo");var O=(w.short_url!=null)?w.short_url:"";var L=stWidget.ogtitle?stWidget.ogtitle:(stWidget.twittertitle?stWidget.twittertitle:document.title);L=w.title?w.title:L;if(typeof(w.pinterest_native)=="string"){w.pinterest_native=w.pinterest_native.replace(/^\s+|\s+$/g,"")}if(g=="pinterest"&&(w.pinterest_native=="false"||w.pinterest_native==null||w.pinterest_native=="")){var f=stWidget.ogimg?stWidget.ogimg:(stWidget.twitterimg?stWidget.twitterimg:(w.thumbnail?w.thumbnail:null));if(typeof(f)=="string"){f=f.replace(/^\s+|\s+$/g,"")}if(typeof(w.image)=="string"){w.image=w.image.replace(/^\s+|\s+$/g,"")}f=(w.image)?w.image:f}var aa=stWidget.desc?stWidget.desc:"";aa=stWidget.ogdesc?stWidget.ogdesc:(stWidget.twitterdesc?stWidget.twitterdesc:stWidget.desc);aa=(w.summary&&w.summary!=null)?w.summary:aa;var s=(w.message&&w.message!=null)?w.message:"";if(/(http|https):\/\//.test(h)==false){h=decodeURIComponent(h);L=decodeURIComponent(L)}if(/(http|https):\/\//.test(O)==false){O=decodeURIComponent(O)}var ag=document.createElement("span");ag.setAttribute("style","text-decoration:none;color:#000000;display:inline-block;cursor:pointer;");ag.className="stButton";if(w.type=="custom"&&g!="email"&&g!="sharethis"&&g!="wordpress"){w.element.onclick=function(){_$d_();_$d1("Clicked on a custom button to share");stLight.callSubscribers("click",g,h);stlib.data.resetShareData();stlib.data.set("url",h,"shareInfo");stlib.data.set("short_url",O,"shareInfo");stlib.data.set("shorten",Z,"shareInfo");stlib.data.set("title",L,"shareInfo");stlib.data.set("destination",g,"shareInfo");stlib.data.setSource("chicklet");stlib.data.set("buttonType",w.type,"shareInfo");if(typeof(pinterest_native)!="undefined"&&pinterest_native!=null&&pinterest_native!=" "){stlib.data.set("pinterest_native",pinterest_native,"shareInfo")}if(typeof(f)!="undefined"&&f!=null&&f!=" "){stlib.data.set("image",f,"shareInfo")}if(typeof(aa)!="undefined"&&aa!=null){stlib.data.set("description",aa,"shareInfo")}if(s!=""){stlib.data.set("message",s,"shareInfo")}if(w.element.getAttribute("st_username")!=null){stlib.data.set("refUsername",w.element.getAttribute("st_username"),"shareInfo")}if(g=="twitter"&&w.element.getAttribute("st_via")!=null){stlib.data.set("via",w.element.getAttribute("st_via").replace(/^\s+|\s+$/g,""),"shareInfo")}stlib.sharer.share(null,stWidget.options.servicePopup);if(g=="pinterest"){stlib.sharer.sharePinterest()}};return false}if(!((g=="email"||g=="sharethis"||g=="wordpress")||(stIsLoggedIn&&servicesLoggedIn&&typeof(servicesLoggedIn[g])!="undefined"&&((useFastShare||(!useFastShare&&switchTo5x))&&(g=="facebook"||g=="twitter"||g=="yahoo"||g=="linkedin"))))){ag.onclick=function(){if(!(stlib.browser.mobile.isIOs()||stlib.browser.mobile.isAndroid())&&(g=="whatsapp"&&window.location.pathname.indexOf("get-sharing-tools")!=-1)){}else{_$d_();_$d1("Clicked on a regular button to share");stLight.callSubscribers("click",g,h);var b=this.getElementsByTagName("*");for(var a=0;a<b.length;a++){if(b[a].className=="stBubble_hcount"||b[a].className=="stBubble_count"){if(!stWidget.options.nativeCount||!stlib.nativeCounts.checkNativeCountServicesQueue(g)){if(!isNaN(b[a].innerHTML)){b[a].innerHTML=Number(b[a].innerHTML)+1}}}}if(stWidget.options.tracking){shareLog(g,h)}stlib.data.resetShareData();var ai="";var ah=stLight.getSource();if(ah=="share5x"){ai="5x"}else{if(ah=="share4x"){ai="4x"}}stlib.data.set("url",h,"shareInfo");stlib.data.set("short_url",O,"shareInfo");stlib.data.set("shorten",Z,"shareInfo");stlib.data.set("title",L,"shareInfo");stlib.data.set("destination",g,"shareInfo");stlib.data.setSource("chicklet"+ai);stlib.data.set("buttonType",w.type,"shareInfo");if(typeof(pinterest_native)!="undefined"&&pinterest_native!=null&&pinterest_native!=" "){stlib.data.set("pinterest_native",pinterest_native,"shareInfo")}if(typeof(f)!="undefined"&&f!=null){stlib.data.set("image",f,"shareInfo")}if(typeof(aa)!="undefined"&&aa!=null){stlib.data.set("description",aa,"shareInfo")}if(s!=""){stlib.data.set("message",s,"shareInfo")}if(w.element.getAttribute("st_username")!=null){stlib.data.set("refUsername",w.element.getAttribute("st_username"),"shareInfo")}if(g=="twitter"&&w.element.getAttribute("st_via")!=null){stlib.data.set("via",w.element.getAttribute("st_via").replace(/^\s+|\s+$/g,""),"shareInfo")}stlib.sharer.share(null,stWidget.options.servicePopup);if(g=="pinterest"&&(stlib.data.get("image","shareInfo")==false||stlib.data.get("image","shareInfo")==null)){stlib.sharer.sharePinterest()}}}}if(g=="gbuzz"){return ag}if(g=="fblike"||g=="fbsend"||g=="fbrec"||g=="fbLong"||g=="fbsub"){if(g=="fbsub"){if(w.element.getAttribute("st_username")!=null){h="http://facebook.com/"+w.element.getAttribute("st_username")}else{h=""}}return stButtons.makeFBButton(g,w.type,h)}if(stlib.nativeButtons.checkNativeButtonSupport(g)){var W={};if(w.element.getAttribute("st_username")!=null){W.username=w.element.getAttribute("st_username")}if(w.element.getAttribute("st_followId")!=null){W.followId=w.element.getAttribute("st_followId")}retObj=stlib.nativeButtons.makeButton(g,w.type,W);if(retObj){if(stlib.nativeButtons.checkNativeButtonLogging(g)){retObj.onclick=function(){stlib.nativeButtons.logService(g,h)}}return retObj}else{if(typeof(window.console)!=="undefined"){try{console.debug("Looks like "+g+" is missing some required parameters. Please recheck "+g+" HTML \nFor help, contact support@sharethis.com")}catch(ab){}}return ag}}if(g=="plusone"){stButtons.loadPlusone=true;var G=document.createElement("div");G.innerHTML="&nbsp;";iedocmode=stlib.browser.getIEVersion();var x=(navigator.userAgent.indexOf("MSIE 7.0")!=-1);var i=(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1);var Q="display:inline-block;overflow:hidden;line-height:0px;";var D="overflow:hidden;zoom:1;display:inline;vertical-align:bottom;";var E="overflow:hidden;zoom:1;display:inline;line-height:0px;position:relative;";var e=document.createElement("g:plusone");var l=h;if((/#sthash/i).test(l)){var n=l.split("#");if(n.length>0){l=n[0]}}e.setAttribute("href",l);if(w.type=="vcount"){e.setAttribute("size","tall");G.setAttribute("style",Q+"vertical-align:bottom;width:55px; height:61px;");x&&G.style.setAttribute?G.style.setAttribute("cssText",Q+"vertical-align:bottom;width:55px; height:61px;",0):null;(iedocmode&&(iedocmode==7)&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:bottom;bottom:-8px;width:55px; height:80px;",0):(null)}else{if(w.type=="hcount"){e.setAttribute("size","medium");e.setAttribute("count","true");G.setAttribute("style",Q+"position:relative;vertical-align:middle;bottom:0px;width:75px; height:21px;");x&&G.style.setAttribute?G.style.setAttribute("cssText",Q+"position:relative;vertical-align:middle;width:75px; height:21px;",0):null;(iedocmode&&(iedocmode==7)&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:middle;bottom:2px;width:75px; height:21px;",0):(null)}else{if(w.type=="button"){e.setAttribute("size","medium");e.setAttribute("count","false");G.setAttribute("style",Q+"position:relative;vertical-align:middle;bottom:0px;width:36px; height:21px;");x&&G.style.setAttribute?G.style.setAttribute("cssText",Q+"position:relative;vertical-align:middle;width:36px; height:21px;",0):null;(iedocmode&&(iedocmode==7)&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:middle;bottom:-8px;width:36px; height:39px;",0):(null)}else{if(w.type=="large"){e.setAttribute("size","large");e.setAttribute("count","false");G.setAttribute("style",Q+"position:relative;vertical-align:middle;bottom:12px;width:38px; height:27px;");x&&G.style.setAttribute?G.style.setAttribute("cssText",Q+"position:relative;vertical-align:middle;bottom:0px;width:38px; height:30px;",0):null;(iedocmode&&((iedocmode==8)||(iedocmode==9))&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:middle;bottom:7px;width:38px; height:39px;",0):(null);(iedocmode&&(iedocmode==7)&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:middle;bottom:1px;width:38px; height:39px;",0):(null)}else{e.setAttribute("size","small");e.setAttribute("count","false");G.setAttribute("style",Q+"position:relative;vertical-align:middle;bottom:0px;width:36px; height:16px;");x&&G.style.setAttribute?G.style.setAttribute("cssText",Q+"position:relative;vertical-align:middle;width:36px; height:16px;",0):null;(iedocmode&&(iedocmode==7)&&G.style.setAttribute)?G.style.setAttribute("cssText",E+"vertical-align:middle;bottom:-12px;width:36px; height:36px;",0):(null)}}}}G.appendChild(e);e.setAttribute("callback","plusoneCallback");return G}var j=("https:"==document.location.protocol)?"https://ws.sharethis.com/images/":"http://w.sharethis.com/images/";var t=g;function o(a){var ah=new Date();var b=null;var ai=0;do{b=new Date();ai++;if(ai>a){break}}while(((b-ah)<a)||!esiLoaded)}if(!esiLoaded&&(g=="facebook"||g=="twitter"||g=="linkedin"||g=="yahoo")){o(500)}if(w.type=="chicklet"){var N=document.createElement("span");N.className="chicklets "+g;if(I==null){N.innerHTML="&nbsp;";ag.style.paddingLeft="0px";ag.style.paddingRight="0px";ag.style.width="16px"}else{N.appendChild(document.createTextNode(I))}ag.appendChild(N);return ag}else{if(w.type=="large"){var N=document.createElement("span");N.className="stLarge";ag.appendChild(N);N.style.backgroundImage="url('"+j+t+"_32.png')";return ag}else{if(w.type=="basic"||w.type=="circle"||w.type=="brushed"||w.type=="shiny"){var N=document.createElement("span");N.className="stLarge";N.className=w.size=="16"?((w.type=="brushed"||w.type=="shiny")?"stSmall2":"stSmall"):N.className;N.className=w.size=="64"?"stHuge":N.className;ag.appendChild(N);N.style.backgroundImage="url('"+j+w.type+"/"+w.size+"/"+t+(w.color?"_"+w.color:"_"+w.type)+".png')";return ag}else{if(w.type=="pcount"||w.type=="stbar"||w.type=="stsmbar"){var C=document.createElement("span");var N=document.createElement("span");if(w.type=="stsmbar"){N.className="stSmBar";var j=("https:"==document.location.protocol)?"https://ws.sharethis.com/images/":"http://w.sharethis.com/images/";N.style.backgroundImage="url('"+j+t+"_16.png')"}else{N.className="stLarge";var j=("https:"==document.location.protocol)?"https://ws.sharethis.com/images/":"http://w.sharethis.com/images/";N.style.backgroundImage="url('"+j+t+"_32.png')"}C.appendChild(N);var u=document.createElement("span");var af=document.createElement("div");if(w.type=="stsmbar"){af.className="stBubbleSmHoriz"}else{af.className="stBubbleSm"}af.setAttribute("id","stBubble_"+w.count);af.style.visibility="hidden";var X=document.createElement("div");X.className="stBubble_count_sm";af.appendChild(X);u.appendChild(af);u.appendChild(C);ag.appendChild(u);stButtons.getCount2(h,g,X);C.onmouseover=function(){var a=document.getElementById("stBubble_"+w.count);a.style.visibility="visible"};C.onmouseout=function(){var a=document.getElementById("stBubble_"+w.count);a.style.visibility="hidden"};return ag}else{if(w.type=="button"||w.type=="vcount"||w.type=="hcount"){var C=document.createElement("span");C.className="stButton_gradient";var J=document.createElement("span");J.className="chicklets "+g;if(I==null){J.innerHTML="&nbsp;"}else{J.appendChild(document.createTextNode(I))}C.appendChild(J);if(g=="facebook"||g=="twitter"||g=="linkedin"||g=="yahoo"||g=="pinterest"||g=="sharethis"||g=="email"){var v=document.createElement("span");v.className="stMainServices st-"+g+"-counter";v.innerHTML="&nbsp";C=v;v.style.backgroundImage="url('"+j+t+"_counter.png')";if(g=="sharethis"&&I!=null&&I.length<6){v.className="stMainServices st-"+g+"-counter2";v.style.backgroundImage="url('"+j+t+"_counter2.png')"}}if(w.type=="vcount"){var u=document.createElement("div");var af=document.createElement("div");af.className="stBubble";var X=document.createElement("div");X.className="stBubble_count";af.appendChild(X);u.appendChild(af);u.appendChild(C);ag.appendChild(u);stButtons.getCount2(h,g,X)}else{if(w.type=="hcount"){var u=document.createElement("span");var P=document.createElement("span");P.className="stButton_gradient stHBubble";var r=document.createElement("span");r.className="stButton_left";r.innerHTML="&nbsp;";var y=document.createElement("span");y.className="stButton_right";y.innerHTML="&nbsp;";var X=document.createElement("span");X.className="stBubble_hcount";P.appendChild(X);u.appendChild(C);var F=document.createElement("span");F.className="stArrow";F.appendChild(P);u.appendChild(F);ag.appendChild(u);stButtons.getCount2(h,g,X)}else{ag.appendChild(C)}}if(w.type=="vcount"||w.type=="hcount"){if(w.ctype=="native"){if(g=="twitter"){var Y=document.createElement("span");Y.className="stButton";var H=55;var ac=20;var T="";var k="none";var K=7;if(w.type=="vcount"){var q=document.createElement("div");H=55;ac=62;T="top:42px;";k="vertical"}else{if(w.type=="hcount"){var q=document.createElement("span");H=110;ac=20;k="horizontal"}}iedocmode=stlib.browser.getIEVersion();var U=document.createElement("span");U.setAttribute("style","vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;"+T+"width:55px;height:20px;");(iedocmode&&(iedocmode==7)&&U.style.setAttribute)?U.style.setAttribute("cssText","vertical-align:bottom;line-height:0px;position:absolute;padding:0px !important;"+T+"width:55px;height:20px;",0):null;try{var S=document.createElement('<iframe name="stframe" allowTransparency="true" scrolling="no" frameBorder="0"></iframe>')}catch(ab){S=document.createElement("iframe");S.setAttribute("allowTransparency","true");S.setAttribute("frameborder","0");S.setAttribute("scrolling","no")}var ae=encodeURIComponent(h);S.setAttribute("src","http://platform.twitter.com/widgets/tweet_button.html?count="+k+"&url="+ae);S.setAttribute("style","width:"+H+"px;height:"+ac+"px;");(iedocmode&&(iedocmode==7)&&S.style.setAttribute)?S.style.setAttribute("cssText","width:"+H+"px;height:"+ac+"px;",0):null;if((useFastShare&&servicesLoggedIn&&typeof(servicesLoggedIn[g])!="undefined")){q.appendChild(U)}q.appendChild(S);C=q;Y.appendChild(C);Y.setAttribute("style","text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;margin-top:6px;width:"+H+"px;height:"+ac+"px;");(iedocmode&&(iedocmode==7)&&Y.style.setAttribute)?Y.style.setAttribute("cssText","text-decoration:none;color:#000000;display:inline-block;cursor:pointer;vertical-align:bottom;width:"+H+"px;height:"+ac+"px;",0):null;ag=Y}else{if(g=="facebook"){stButtons.getXFBMLFromFB(w);return stButtons.makeFBButton("fblike",w.type,h)}else{if(g=="linkedin"){}}}}}}else{if(w.type=="css"){var C=document.createElement("div");C.className="stCSSButton";if(w.cssType=="cssV"){var B=document.createElement("div");B.className="stCSSVBubble";var M=document.createElement("div");M.className="stCSSVBubble_count";B.appendChild(M);var m=document.createElement("div");m.className="stCSSVArrow";var R=document.createElement("div");R.className="stCSSVArrowBorder";R.appendChild(m);ag.appendChild(B);ag.appendChild(R);stButtons.getCount2(h,g,M)}var d=document.createElement("div");d.className="stCSSSprite "+g;d.innerHTML="&nbsp;";var N=document.createElement("span");N.className="stCSSText";C.appendChild(d);if(I==null||I==""){}else{N.appendChild(document.createTextNode(I));C.appendChild(N)}ag.appendChild(C);if(w.cssType=="cssH"){var A=document.createElement("div");A.className="stCSSHBubble";var M=document.createElement("div");M.className="stCSSHBubble_count";A.appendChild(M);var ad=document.createElement("div");ad.className="stCSSHArrow";var p=document.createElement("div");p.className="stCSSHArrowBorder";p.appendChild(ad);ag.appendChild(p);ag.appendChild(A);stButtons.getCount2(h,g,M)}}}}}}}return ag};stButtons.makeFBButton=function(j,l,b){try{var i=document.createElement("<div></div>")}catch(e){i=document.createElement("div")}if((/#sthash/i).test(b)){var m=b.split("#");if(m.length>0){b=m[0]}}var d=b;var h="button_count";var k="fb-send";var f="";iedocmode=stlib.browser.getIEVersion();var g="";if(l=="vcount"){h="box_count"}else{if(l=="hcount"){}else{if(l=="large"){g=(iedocmode&&(iedocmode==7))?"vertical-align:bottom;bottom:3px;":"bottom:7px;margin-top:9px;"}else{if(l=="button"){}else{g="top:1px;margin-top:0px;"}}}}if(j=="fbLong"){k="fb-like";h="standard";i.setAttribute("data-layout",h);i.setAttribute("data-send","false");i.setAttribute("data-show-faces","false")}else{if(j=="fbsend"){k="fb-send"}else{if(j=="fblike"||j=="fbrec"){(j=="fbrec")?f="recommend":null;k="fb-like";i.setAttribute("data-action",f);i.setAttribute("data-send","false");i.setAttribute("data-layout",h);i.setAttribute("data-show-faces","false")}else{if(j=="fbsub"){k="fb-subscribe";i.setAttribute("data-layout",h);i.setAttribute("data-show-faces","false")}}}}i.setAttribute("class",k);i.setAttribute("data-href",d);if(iedocmode&&(iedocmode==7)){if(j!="fbsend"){i=document.createElement("<div class='"+k+"' data-action='"+f+"' data-send='false' data-layout='"+h+"' data-show-faces='false' data-href='"+d+"'></div>")}else{i=document.createElement("<div class='"+k+"' data-href='"+d+"'></div>")}}var a=document.createElement("span");a.setAttribute("style","text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;padding:0px;font-size:11px;line-height:0px;vertical-align:bottom;overflow:visible;"+g);(iedocmode&&(iedocmode==7)&&a.style.setAttribute)?a.style.setAttribute("cssText","text-decoration:none;color:#000000;display:inline-block;cursor:pointer;position:relative;margin:3px 3px 0;font-size:11px;line-height:0px;"+g,0):(null);a.appendChild(i);return a};stButtons.getCount=function(d,a,e){var b=false;if(e&&e!==null){while(e.childNodes.length>=1){try{e.removeChild(e.firstChild)}catch(f){}}}stButtons.cbQueue.push({url:d,service:a,element:e});stButtons.getCountsFromService(d,a,e)};stButtons.getCount2=function(d,a,e){var b=false;if(e&&e!==null){while(e.childNodes.length>=1){try{e.removeChild(e.firstChild)}catch(f){}}}if(stWidget.options.nativeCount&&stlib.nativeCounts.checkNativeCountServicesQueue(a)){if(a=="facebook"){if((/#/).test(d)){d=d.split("#")[0]}}stButtons.cbNativeQueue.push({url:d,service:a,element:e});if(typeof(stButtons.countsNativeResp[d])=="undefined"){stButtons.countsNativeResp[d]=[]}if(typeof(stButtons.countsNativeResp[d][a])=="undefined"){stlib.nativeCounts.getNativeCounts(a,d,"stButtons."+a+"CB");stButtons.countsNativeResp[d][a]=null}else{if(stButtons.countsNativeResp[d][a]!=null){switch(a){case"facebook":stButtons.facebookCB(stButtons.countsNativeResp[d][a]);break;case"linkedin":stButtons.linkedinCB(stButtons.countsNativeResp[d][a]);break;case"stumbleupon":stButtons.stumbleuponCB(stButtons.countsNativeResp[d][a]);break}}}}else{stButtons.cbQueue.push({url:d,service:a,element:e});stButtons.getCountsFromService(d,a,e)}};stButtons.processCB=function(a){if(typeof(a)!="undefined"&&typeof(a.ourl)!="undefined"){stButtons.countsResp[a.ourl]=a}stButtons.processCount(a)};stButtons.stumbleuponCB=function(a){var b={ourl:"",stumbleupon:null};if(typeof(a)!="undefined"&&typeof(a.result)!="undefined"){if(typeof(stButtons.countsNativeResp[a.result.url])!="undefined"){stButtons.countsNativeResp[a.result.url]["stumbleupon"]=a}b.ourl=a.result.url;if(typeof(a.result.views)!="undefined"){b.stumbleupon=a.result.views}}stButtons.processNativeCount(b,"stumbleupon")};stButtons.linkedinCB=function(a){var b={ourl:"",linkedin:null};if(typeof(a)!="undefined"){if(typeof(stButtons.countsNativeResp[a.url])!="undefined"){stButtons.countsNativeResp[a.url]["linkedin"]=a}b.ourl=a.url;if(typeof(a.count)!="undefined"){b.linkedin=a.count}}stButtons.processNativeCount(b,"linkedin")};stButtons.facebookCB=function(a){var b={ourl:"",facebook:null};if(typeof(a)!="undefined"){if(typeof(stButtons.countsNativeResp[a[0].url])!="undefined"){stButtons.countsNativeResp[a[0].url]["facebook"]=a}b.ourl=a[0].url;if(typeof(a[0].total_count)!="undefined"){b.facebook=a[0].total_count}}stButtons.processNativeCount(b,"facebook")};stButtons.processCount=function(b){if(!(b)){return}stButtons.storedCountResponse=b;var a=false;for(var d=0;d<stButtons.cbQueue.length;d++){var f=stButtons.cbQueue[d];if(b.ourl==f.url){var h="New";try{if(f.service=="sharethis"){if(stWidget.options.minShareCount==null||b.total>=stWidget.options.minShareCount){if(stWidget.options.newOrZero=="zero"){h=(b.total>0)?stButtons.human(b.total):"0"}else{h=(b.total>0)?stButtons.human(b.total):"New"}}}else{if(f.service=="facebook"&&typeof(b.facebook2)!="undefined"){if(stWidget.options.minShareCount==null||b.facebook2>=stWidget.options.minShareCount){h=stButtons.human(b.facebook2)}}else{if(typeof(b[f.service])!="undefined"){if(stWidget.options.minShareCount==null||b[f.service]>=stWidget.options.minShareCount){h=(b[f.service]>0)?stButtons.human(b[f.service]):"0"}}else{if(stWidget.options.minShareCount==null||stWidget.options.minShareCount<=0){h="0"}}}}if(/stHBubble/.test(f.element.parentNode.className)==true){f.element.parentNode.style.display="inline-block"}else{if(/stBubble/.test(f.element.parentNode.className)==true){f.element.parentNode.style.display="block"}}f.element.innerHTML=h}catch(e){if(!f.element.hasChildNodes()){var g=document.createElement("div");g.innerHTML=h;f.element.appendChild(g)}}a=true}}};stButtons.processNativeCount=function(b,a){if(!(b)){return}if(!(a)){return}for(var d=0;d<stButtons.cbNativeQueue.length;d++){var f=stButtons.cbNativeQueue[d];if(b.ourl==f.url||(a=="stumbleupon"&&b.ourl.replace(/http:\/\/www\.|http:\/\/|www\./i,"")==f.url.replace(/http:\/\/www\.|http:\/\/|www\./i,""))){var h="New";try{if(f.service==a){if(b[a]!=null){if(stWidget.options.minShareCount==null||b[a]>=stWidget.options.minShareCount){h=stButtons.human(b[a])}}}else{continue}if(/stHBubble/.test(f.element.parentNode.className)==true){f.element.parentNode.style.display="inline-block"}else{if(/stBubble/.test(f.element.parentNode.className)==true){f.element.parentNode.style.display="block"}}f.element.innerHTML=h}catch(e){if(!f.element.hasChildNodes()){var g=document.createElement("div");g.innerHTML=h;f.element.appendChild(g)}}}}};stButtons.human=function(a){if(a>=100000){a=a/1000;a=Math.round(a);a=a+"K"}else{if(a>=10000){a=a/100;a=Math.round(a);a=a/10;a=a+"K"}}return a};stButtons.isValidService=function(a){return(typeof(stlib.allServices)==="object"&&stlib.allServices.hasOwnProperty(a))?true:(typeof(stlib.allOauthServices)==="object"&&stlib.allOauthServices.hasOwnProperty(a))?true:(typeof(stlib.allNativeServices)==="object"&&stlib.allNativeServices.hasOwnProperty(a))?true:(typeof(stlib.allOtherServices)==="object"&&stlib.allOtherServices.hasOwnProperty(a))?true:false};stButtons.locateElements=function(d){var v=document.getElementsByTagName("*");var o=[];var P=new RegExp(/st_(.*?)_custom/);var O=new RegExp(/st_(.*?)_vcount/);var w=new RegExp(/st_(.*?)_vcount_native/);var N=new RegExp(/st_(.*?)_hcount/);var n=new RegExp(/st_(.*?)_hcount_native/);var M=new RegExp(/st_(.*?)_button/);var L=new RegExp(/st_(.*?)_large/);var J=new RegExp(/st_(.*?)_pcount/);var I=new RegExp(/st_(.*?)_stbar/);var F=new RegExp(/st_(.*?)_stsmbar/);var E=new RegExp(/st_(.*?)_css/);var u=new RegExp(/^st_(.*?)$/);var h=new RegExp(/st_(.*?)_basic/);var p=new RegExp(/st_(.*?)_circle/);var l=new RegExp(/(st_(.*?)_basic)|(st_(.*?)_circle)/);var e=new RegExp(/(st_(.*?)_brushed)|(st_(.*?)_shiny)/);var C=new RegExp(/(st_(.*?)_brushed)/);var Q=new RegExp(/(st_(.*?)_shiny)/);var g=v.length;var A=0,B,m,j,a=[],t=false;if(typeof(stRecentServices)!="undefined"&&stRecentServices!="undefined"&&stRecentServices!="false"&&stRecentServices){t=true}for(var D=0;D<g;D++){B="";m=false;j=false;if(typeof(v[D].className)=="string"&&v[D].className!=""){if(!(stlib.browser.mobile.isIOs()||stlib.browser.mobile.isAndroid())&&(v[D].className.indexOf("whatsapp")!==-1&&window.location.pathname.indexOf("get-sharing-tools")===-1)){continue}if(v[D].className.match(P)&&v[D].className.match(P).length>=2&&v[D].className.match(P)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(P)[1];typeName="custom";if(B=="plusone"||B=="fblike"||B=="fbrec"||B=="fbsend"||B=="fbsub"){typeName="chicklet"}o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:typeName});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(l)&&v[D].className.match(l).length>=2){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.split("_")[1];var R="basic";if(v[D].className.match(p)){R="circle"}o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:R,size:v[D].className.split("$")[1],color:v[D].className.split("$")[2]});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(e)&&v[D].className.match(e).length>=2){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.split("_")[1];var R="brushed";if(v[D].className.match(Q)){R="shiny"}o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:R,size:v[D].className.split("$")[1]});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(O)&&v[D].className.match(O).length>=2&&v[D].className.match(O)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(O)[1];var G="";if(v[D].className.match(w)&&v[D].className.match(w).length>=2&&v[D].className.match(w)[1]){G="native"}o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"vcount",ctype:G});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(N)&&v[D].className.match(N).length>=2&&v[D].className.match(N)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(N)[1];var G="";if(v[D].className.match(n)&&v[D].className.match(n).length>=2&&v[D].className.match(n)[1]){G="native"}o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"hcount",ctype:G});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(M)&&v[D].className.match(M).length>=2&&v[D].className.match(M)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(M)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"button"});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(L)&&v[D].className.match(L).length>=2&&v[D].className.match(L)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(L)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"large"});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(J)&&v[D].className.match(J).length>=2&&v[D].className.match(J)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(J)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"pcount",count:D});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(I)&&v[D].className.match(I).length>=2&&v[D].className.match(I)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(I)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"stbar",count:D});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(F)&&v[D].className.match(F).length>=2&&v[D].className.match(F)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(F)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"stsmbar",count:D});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(E)&&v[D].className.match(E).length>=2&&v[D].className.match(E)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(E)[1];var H=v[D].className.split("_");o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"css",cssType:H[H.length-1]});v[D].setAttribute("st_processed","yes")}}else{if(v[D].className.match(u)&&v[D].className.match(u).length>=2&&v[D].className.match(u)[1]){if(stButtons.testElem(v[D])==false){j=true;B=v[D].className.match(u)[1];o.push({service:B,element:v[D],url:v[D].getAttribute("st_url"),short_url:(v[D].getAttribute("st_short_url")!=null)?v[D].getAttribute("st_short_url"):"",title:v[D].getAttribute("st_title"),image:(v[D].getAttribute("st_img")!=null)?v[D].getAttribute("st_img"):v[D].getAttribute("st_image"),pinterest_native:v[D].getAttribute("st_native"),message:(v[D].getAttribute("st_msg")!=null)?v[D].getAttribute("st_msg"):v[D].getAttribute("st_message"),summary:v[D].getAttribute("st_summary"),text:v[D].getAttribute("displayText"),type:"chicklet"});v[D].setAttribute("st_processed","yes")}}}}}}}}}}}}}if(t){if(j){for(A=0;A<a.length;A++){if(a[A].service==B){a[A].count++;m=true}}if(!m){a.push({service:B,count:1,doNotReplace:false,processed:false})}}}}}if(t){var K=[];for(var s=a.length-1;s>=0;s--){if(a[s].service=="sharethis"||a[s].doNotReplace){a[s].processed=true;continue}else{for(var r in stRecentServices){var f=false;if(!stRecentServices[r].processed){for(var b=0;b<a.length;b++){if(r==a[b].service&&!a[b].processed){f=true;a[b].doNotReplace=true;stRecentServices[r].processed=true;break}}if(f){a[s].processed=true}else{K.push({oldService:a[s].service,newService:r});for(var q=0;q<o.length;q++){if(o[q].service==a[s].service){o[q].service=r;o[q].text=stRecentServices[r].title;o[q].element.setAttribute("displayText",stRecentServices[r].title);o[q].element.className=o[q].element.className.replace(a[s].service,r)}}stRecentServices[r].processed=true;a[s].processed=true;break}}}}}}for(var D=0;D<o.length;D++){if(!stButtons.isValidService(o[D].service)){continue}stWidget.addEntry(o[D])}};stButtons.odcss=function(a,b){this.head=document.getElementsByTagName("head")[0];this.scriptSrc=a;this.css=document.createElement("link");this.css.setAttribute("rel","stylesheet");this.css.setAttribute("type","text/css");this.css.setAttribute("href",this.scriptSrc);setTimeout(function(){b()},500);this.head.appendChild(this.css)};stButtons.makeButtons=function(){if(typeof(stButtons.button_css_called)=="undefined"){var a=(("https:"==document.location.protocol)?"https://ws.sharethis.com/button/css/buttons-secure.css":"http://w.sharethis.com/button/css/buttons.f72ae7c4435271cf3af83d1f10fbbbb0.css");stButtons.odcss(a,function(){});stButtons.button_css_called=true}stButtons.locateElements()};stButtons.getPlusOneFromGoogle=function(a){if(stButtons.plusOneLoaded==false){if(stButtons.plusOneLoading==false){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src","https://apis.google.com/js/plusone.js");b.async=stWidget.options.asyncPlusone;b.onload=function(){stButtons.renderPlusOneFromGoogle(a);stButtons.plusOneLoaded=true;stButtons.plusOneLoading=false};b.onreadystatechange=function(){if(this.readyState=="complete"){stButtons.renderPlusOneFromGoogle(a);stButtons.plusOneLoaded=true;stButtons.plusOneLoading=false}};stButtons.plusOneLoading=true;document.getElementsByTagName("head")[0].appendChild(b)}}else{stButtons.renderPlusOneFromGoogle(a)}};stButtons.renderPlusOneFromGoogle=function(a){if(a=="plusone"){gapi.plusone.go()}else{if(a=="googleplusfollow"||a=="googleplusadd"){gapi.plus.go()}}};stButtons.getXFBMLFromFB=function(b){if(typeof(stWidget.options.fbLoad)!="undefined"&&stWidget.options.fbLoad!=true){return}if(stButtons.xfbmlLoaded==false){if(stButtons.xfbmlLoading==false){stButtons.xfbmlLoading=true;var d=document.createElement("div");d.setAttribute("id","fb-root");document.body.appendChild(d);var a="en_US";if(typeof(stWidget.options.fbLang)!="undefined"&&stWidget.options.fbLang!=""){a=stWidget.options.fbLang}var f,e=document.getElementsByTagName("script")[0];if(document.getElementById("facebook-jssdk")){if(typeof(FB)!="undefined"&&typeof(FB.XFBML)!="undefined"&&typeof(FB.XFBML.parse)=="function"){if(!(/iframe/).test(b.innerHTML)){FB.XFBML.parse(b)}stButtons.trackFB();stButtons.xfbmlLoaded=true;stButtons.xfbmlLoading=false}return}f=document.createElement("script");f.id="facebook-jssdk";f.src="//connect.facebook.net/"+a+"/sdk.js#version=v2.0";f.async=stWidget.options.async;f.onload=function(){FB.init({appId:"",xfbml:true,version:"v2.0"});stButtons.trackFB();stButtons.xfbmlLoaded=true;stButtons.xfbmlLoading=false};f.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){FB.init({appId:"",xfbml:true,version:"v2.0"});stButtons.trackFB();stButtons.xfbmlLoaded=true;stButtons.xfbmlLoading=false}};e.parentNode.insertBefore(f,e)}}else{if(!(/iframe/).test(b.innerHTML)){FB.XFBML.parse(b)}stButtons.trackFB()}};stButtons.addCount=function(a){stButtons.counts.push(a)};stButtons.getCountsFromService=function(a,h,f){if(stButtons.checkQueue(a)==false){var d=d+"-"+stButtons.cbVal;d="stButtons.processCB";stButtons.cbVal++;var j=document.referrer;var e=j.replace("http://","").replace("https://","").split("/");var i=e.shift();var b=e.join("/");i=encodeURIComponent(i);b=encodeURIComponent(b);var g=stLight.publisher;var k=(("https:"==document.location.protocol)?"https://ws.sharethis.com/api/getCount2.php?cb="+d+"&refDomain="+i+"&refQuery="+b+"&pgurl="+encodeURIComponent(document.location.href)+"&pubKey="+g+"&url=":"http://wd.sharethis.com/api/getCount2.php?cb="+d+"&refDomain="+i+"&refQuery="+b+"&pgurl="+encodeURIComponent(document.location.href)+"&pubKey="+g+"&url=");stLight.odjs(k+encodeURIComponent(a),function(){});stButtons.queue.push(a)}if(stButtons.countsResp[a]){stButtons.processCount(stButtons.countsResp[a])}};stButtons.checkQueue=function(a){for(var b=0;b<stButtons.queue.length;b++){if(stButtons.queue[b]==a){return true}}return false};stButtons.testElem=function(b){var a=false;if(b.getAttribute("st_processed")!=null){return true}else{return false}};function Shareable(d){var a={};a.facebook="450";a.twitter="684";a.yahoo="500";a.linkedin="600";var b={};b.facebook="300";b.twitter="718";b.yahoo="460";b.linkedin="433";this.idx=-1;this.url=null;this.short_url=null;this.title=null;this.image=null;this.pinterest_native=null;this.element=null;this.service=null;this.message=null;this.screen="home";this.summary=null;this.content=null;this.buttonText=null;this.frag=null;this.onhover=true;this.type=null;var e=this;var f=false;this.attachButton=function(g){this.element=g;if((this.onhover==true||this.onhover=="true")&&!stlib.browser.mobile.isMobile()&&((stWidgetVersion=="4x")||((stWidgetVersion=="5xa")&&(d.service=="sharethis"||d.service=="email"||d.service=="wordpress")))){g.onmouseover=this.mouseOn;g.onmouseout=this.mouseOut}g.onclick=function(h){e.decideFastShare()}};this.init=function(){stWidget.merge(this,d);stWidget.shareables.push(this);if(d.element!==null){this.attachButton(d.element)}};return this}if(typeof(stWidget)=="undefined"){var stWidget=new function(){this.shareables=[];this.entries=0;this.widgetOpen=false;this.mouseOnTimer=null;this.mouseTimer=null;this.mouseOutTimer=null;this.frameReady=false;this.stopClosing=false;this.buttonClicked=false;this.widgetLoadingComplete=false;this.skipESIValue=false;this.frameUrl5xa=this.frameUrl5x=(("https:"==document.location.protocol)?"https://ws.sharethis.com/secure5x/index.html":"http://edge.sharethis.com/share5x/index.cf3727cef3867c5556624d0554f110b8.html");this.frameUrl4x=(("https:"==document.location.protocol)?"https://ws.sharethis.com/secure/index.html":"http://edge.sharethis.com/share4x/index.c3d69d987b2ad3b77822430dffdfe890.html");this.secure=false;try{this.mainstframe=document.createElement('<iframe name="stLframe" allowTransparency="true" style="body{background:transparent;}" ></iframe>');this.mainstframe.onreadystatechange=function(){if(stWidget.mainstframe.readyState==="complete"){stWidget.frameReady=true;stButtons.pumpInstance=new stlib.pump(stWidget.mainstframe,stWidget.mainstframe,function(){stButtons.messageQueueInstance.process()});stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);try{stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")}catch(d){}}}}catch(b){this.mainstframe=document.createElement("iframe");this.mainstframe.allowTransparency="true";this.mainstframe.setAttribute("allowTransparency","true");this.mainstframe.onload=function(){stWidget.frameReady=true;stButtons.pumpInstance=new stlib.pump(stWidget.mainstframe,stWidget.mainstframe,function(){stButtons.messageQueueInstance.process()});stButtons.messageQueueInstance.setPumpInstance(stButtons.pumpInstance);try{stButtons.pumpInstance.broadcastSendMessage("Buttons Ready")}catch(d){}}}this.mainstframe.id="stLframe";this.mainstframe.className="stLframe";this.mainstframe.name="stLframe";this.mainstframe.frameBorder="0";this.mainstframe.scrolling="no";this.mainstframe.width="353px";this.mainstframe.height="350px";this.mainstframe.style.top="0px";this.mainstframe.style.left="0px";this.wrapper=document.createElement("div");this.wrapper.id="stwrapper";this.wrapper.className="stwrapper";this.wrapper.style.display="none";if(stWidgetVersion=="4x"){this.wrapper.style.display="none"}this.closewrapper=document.createElement("div");this.closewrapper.className="stclose";var a=0;this.widgetLoadInterval=self.setInterval(function(){stWidget.widgetLoad();a+=1;if(a>90){stWidget.forceDefaultWidgetSetting();window.clearInterval(stWidget.widgetLoadInterval)}},1000);this.closewrapper.onclick=function(){stWidget.closeWidget()};this.ogtitle=null;this.ogdesc=null;this.ogurl=null;this.short_url=null;this.ogimg=null;this.ogtype=null;this.twittertitle=null;this.twitterdesc=null;this.twitterurl=null;this.twitterimg=null;this.twittercard=null;this.desc=null;this.initFire=false;this.merge=function(f,e){for(var d in e){if(f.hasOwnProperty(d)&&e[d]!==null){f[d]=e[d]}}};this.oldScroll=0;this.init=function(){if(stWidget.initFire==false){stWidget.initFire=true;if(stButtons.messageQueueInstance==null){stButtons.messageQueueInstance=new stlib.messageQueue()}if(stlib.browser.ieFallback){setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data,'data'), 'data');",1000)}else{stButtons.messageQueueInstance.send(stWidget.createFrag(stlib.data,"data"),"data")}if(stlib.browser.ieFallback){setTimeout("stButtons.messageQueueInstance.send(stWidget.createFrag(null,'init'), 'init');",2000);setTimeout("stWidget.initIE=true;",2500)}else{stButtons.messageQueueInstance.send(stWidget.createFrag(null,"init"),"init")}}}}}stWidget.widgetLoad=function(){if(esiStatus=="loaded"||(useEdgeSideInclude==false)){if(stWidgetVersion=="5xa"){stWidget.frameUrlChoice=stWidget.frameUrl5xa}else{if(stWidgetVersion=="4x"){stWidget.frameUrlChoice=stWidget.frameUrl4x}}stWidget.mainstframe.src=stWidget.frameUrlChoice;if(stWidgetVersion=="5xa"){stWidget.wrapper.className+=" stwrapper5x";stWidget.mainstframe.className+=" stframe5x";stWidget.mainstframe.width="514px";stWidget.mainstframe.height="419px";stWidget.wrapper.style.zIndex=89999999;stWidget.overlay=document.createElement("div");stWidget.overlay.style.height="100%";stWidget.overlay.style.width="100%";stWidget.overlay.style.backgroundColor="#000";stWidget.overlay.style.opacity="0.6";stWidget.overlay.style.filter="Alpha(Opacity=60)";stWidget.overlay.style.position="fixed";if(document.all&&navigator.appVersion.indexOf("MSIE 6.")!=-1){stWidget.overlay.style.position="absolute"}stWidget.overlay.style.display="none";stWidget.overlay.style.left="0";stWidget.overlay.style.top="0";stWidget.overlay.style.zIndex=89999990;stWidget.overlay.setAttribute("id","stOverlay");stWidget.overlay.setAttribute("onclick","javascript:stWidget.closeWidget();")}else{stWidget.wrapper.appendChild(stWidget.closewrapper)}stWidget.wrapper.appendChild(stWidget.mainstframe);stWidget.widgetLoadingComplete=true;window.clearInterval(stWidget.widgetLoadInterval)}};stWidget.forceDefaultWidgetSetting=function(){window.clearInterval(stWidget.widgetLoadInterval);stWidget.skipESIValue=true;stLight.usePublisherDefaultSettings();if(stWidgetVersion=="5xa"){stWidget.frameUrlChoice=stWidget.frameUrl5xa=stWidget.frameUrl5x=(("https:"==document.location.protocol)?"https://ws.sharethis.com/secure5x/index.html":"http://edge.sharethis.com/share5x/index.cf3727cef3867c5556624d0554f110b8.html")}else{if(stWidgetVersion=="4x"){stWidget.frameUrlChoice=stWidget.frameUrl4x}}stWidget.mainstframe.src=stWidget.frameUrlChoice;if(stWidgetVersion=="5xa"){stWidget.wrapper.className+=" stwrapper5x";stWidget.mainstframe.className+=" stframe5x";stWidget.mainstframe.width="514px";stWidget.mainstframe.height="419px";stWidget.wrapper.style.zIndex=89999999;stWidget.overlay=document.createElement("div");stWidget.overlay.style.height="100%";stWidget.overlay.style.width="100%";stWidget.overlay.style.backgroundColor="#000";stWidget.overlay.style.opacity="0.6";stWidget.overlay.style.filter="Alpha(Opacity=60)";stWidget.overlay.style.position="fixed";if(document.all&&navigator.appVersion.indexOf("MSIE 6.")!=-1){stWidget.overlay.style.position="absolute"}stWidget.overlay.style.display="none";stWidget.overlay.style.left="0";stWidget.overlay.style.top="0";stWidget.overlay.style.zIndex=89999990;stWidget.overlay.setAttribute("id","stOverlay");stWidget.overlay.setAttribute("onclick","javascript:stWidget.closeWidget();")}else{stWidget.wrapper.appendChild(stWidget.closewrapper)}stWidget.wrapper.appendChild(stWidget.mainstframe);stWidget.widgetLoadingComplete=true};stWidget.options=new function(){this.fpc=stLight.fpc;this.sessionID=null;this.publisher=null;this.tracking=true;this.send_services=null;this.exclusive_services=null;this.headerTitle=null;this.headerfg=null;this.headerbg=null;this.offsetLeft=null;this.offsetTop=null;this.onhover=true;this.async=false;this.asyncPlusone=false;this.autoclose=true;this.autoPosition=true;this.embeds=false;this.doneScreen=true;this.minorServices=true;this.excludeServices=null;this.theme=1;this.serviceBarColor=null;this.shareButtonColor=null;this.footerColor=null;this.headerTextColor=null;this.helpTextColor=null;this.mainWidgetColor=null;this.textBoxFontColor=null;this.textRightToLeft=false;this.shorten=true;this.popup=false;this.newOrZero="new";this.minShareCount=null;this.publisherGA=null;this.services="";this.relatedDomain=null;this.hashAddressBar=null;this.doNotHash=null;this.doNotCopy=null;this.nativeCount=false;this.lang="";this.fbLang="";this.fbLoad=true;this.servicePopup=false;this.textcause=null;this.linkcause=null;this.snapsets=null;this.publisherMigration=false};stWidget.addEntry=function(a){if(!a.element){return false}if(a&&a.service&&((a.service=="email"||a.service=="sharethis"||a.service=="wordpress")||((stIsLoggedIn&&servicesLoggedIn&&typeof(servicesLoggedIn[a.service])!="undefined"&&((useFastShare||(!useFastShare&&(stWidgetVersion=="5xa")))&&(a.service=="facebook"||a.service=="twitter"||a.service=="yahoo"||a.service=="linkedin")))))){openWidget=true}else{openWidget=false}if(!openWidget){if(a.type!=="custom"){a.element.appendChild(stButtons.makeButton(a));if(a.service=="plusone"||a.service=="googleplusfollow"||a.service=="googleplusadd"){stButtons.getPlusOneFromGoogle(a.service)}if(a.service=="fblike"||a.service=="fbsend"||a.service=="fbrec"||a.service=="fbLong"||a.service=="fbsub"){stButtons.getXFBMLFromFB(a.element)}if(stlib.nativeButtons.checkNativeButtonSupport(a.service)){stlib.nativeButtons.loadService(a.service)}}else{stButtons.makeButton(a)}stlib.buttonInfo.addButton(a);return true}else{if(a.type!="custom"){a.element.appendChild(stButtons.makeButton(a));if(a.service=="plusone"||a.service=="googleplusfollow"||a.service=="googleplusadd"){stButtons.getPlusOneFromGoogle(a.service)}if(a.service=="fblike"||a.service=="fbsend"||a.service=="fbrec"||a.service=="fbLong"||a.service=="fbsub"){stButtons.getXFBMLFromFB(a.element)}if(stlib.nativeButtons.checkNativeButtonSupport(a.service)){stlib.nativeButtons.loadService(a.service)}}else{stButtons.makeButton(a)}var d=new Shareable(a);d.idx=stWidget.entries;stWidget.entries++;d.publisher=stLight.publisher;d.sessionID=stLight.sessionID;d.fpc=stLight.fpc;if(a.element.getAttribute("st_via")!=null){d.via=a.element.getAttribute("st_via").replace(/^\s+|\s+$/g,"")}d.url=stWidget.ogurl?stWidget.ogurl:(stWidget.twitterurl?stWidget.twitterurl:document.location.href);d.url=a.url?a.url:d.url;if(!stlib.hash.doNotHash){d.url=stlib.hash.appendHash(d.url);a.url=d.url}stlib.data.set("url",d.url,"shareInfo");stWidget.short_url=d.short_url;stlib.data.set("short_url",d.short_url,"shareInfo");d.title=stWidget.ogtitle?stWidget.ogtitle:(stWidget.twittertitle?stWidget.twittertitle:document.title);d.title=a.title?a.title:d.title;var b=stWidget.ogimg?stWidget.ogimg:(stWidget.twitterimg?stWidget.twitterimg:(a.element.thumbnail?a.element.thumbnail:null));d.image=(a.element.image)?a.element.image:b;d.summary=stWidget.ogdesc?stWidget.ogdesc:(stWidget.twitterdesc?stWidget.twitterdesc:stWidget.desc);d.summary=a.element.summary?a.element.summary:d.summary;stWidget.merge(d,stWidget.options);if(typeof(stWidget.options.textRightToLeft)!="undefined"&&stWidget.options.textRightToLeft!="null"&&stWidget.options.textRightToLeft==true){document.getElementById("stwrapper").style.top="auto";document.getElementById("stwrapper").style.left="auto"}d.mouseOn=function(){stWidget.mouseOnTimer=setTimeout(d.decideFastShare,500)};d.mouseOut=function(){clearInterval(stWidget.mouseOnTimer)};d.decideFastShare=function(){if(stlib.browser.ieFallback){if(typeof(stWidget.initIE)=="undefined"||stWidget.initIE!=true){return}}if(!useFastShare||!stIsLoggedIn||a.service=="email"||a.service=="sharethis"||a.service=="wordpress"||(typeof(servicesLoggedIn[a.service])=="undefined"&&(a.service=="facebook"||a.service=="twitter"||a.service=="linkedin"||a.service=="yahoo"))){if(stlib.browser.mobile.handleForMobileFriendly(d,a,stWidget.options)){stLight.log("widget","mobile",a.service,a.type)}else{d.popup()}}else{stLight.log("widget","fastShare",a.service,a.type);stFastShareObj.url=d.url;stFastShareObj.short_url=d.short_url;stFastShareObj.title=d.title;stFastShareObj.image=d.image;if(typeof(d.summary)!="undefined"&&d.summary!=null){stFastShareObj.summary=d.summary}stFastShareObj.via=null;if(a.service=="twitter"&&d.element.getAttribute("st_via")!=null){stFastShareObj.via=d.element.getAttribute("st_via").replace(/^\s+|\s+$/g,"")}stFastShareObj.message=d.message;stFastShareObj.element=a.element;stFastShareObj.service=a.service;stFastShareObj.type=a.type;stFastShareObj.publisher=stlib.data.get("publisher","pageInfo");stFastShareObj.fpc=stlib.data.get("fpc","pageInfo");stFastShareObj.sessionID=stlib.data.get("sessionID","pageInfo");stFastShareObj.hostname=stlib.data.get("hostname","pageInfo");stFastShareObj.username=servicesLoggedIn[a.service];if(typeof(fastShare)=="undefined"){stLight.odjs((("https:"==document.location.protocol)?"https://ws.sharethis.com/button/fastShare.js":"http://w.sharethis.com/button/fastShare.js"),function(){fastShare.showWidget()})}else{fastShare.showWidget()}}};d.popup=function(){if(stWidget.widgetOpen==false){if(stWidgetVersion=="4x"){stWidget.stCancelClose()}var h=stLight.getSource2(a);stLight.log("widget",h,a.service,a.type);if(stWidget.options.popup&&(stWidgetVersion=="4x")){var j=stWidget.createFrag(d);_$d_();_$d1("4x Popup Called");_$d1(j);_$d_();window.open(stWidget.frameUrl4x+"#"+j,"newstframe","status=1,toolbar=0,width=345,height=375")}else{if(stWidget.options.popup&&(stWidgetVersion=="5xa")){var i="http://sharethis.com/share?url="+d.url;if(d.title!=null){i+="&title="+d.title}if(d.image!=null){i+="&img="+d.image}if(d.summary!=null){i+="&summary="+d.summary}if(a.type!=null){i+="&type="+a.type}if(d.via!=null){i+="&via="+d.via}var g="";if(stlib.data){var f=stlib.json.encode(stlib.data.pageInfo);var e=stlib.json.encode(stlib.data.shareInfo);if(stlib.browser.isFirefox()&&!stlib.browser.firefox8Version()){f=encodeURIComponent(encodeURIComponent(f));e=encodeURIComponent(encodeURIComponent(e))}else{f=encodeURIComponent(f);e=encodeURIComponent(e)}g="&pageInfo="+f+"&shareInfo="+e}window.open(i+g,"newstframe","status=1,toolbar=0,width=820,height=950")}else{stButtons.messageQueueInstance.send(stWidget.createFrag(d),"light");stWidget.positionWidget(d);if(stWidget.options.embeds==false){stWidget.hideEmbeds()}setTimeout(function(){stWidget.widgetOpen=true;st_showing=true},200)}}}else{if(stWidget.widgetOpen==true&&stWidget.options.onhover==false){}}return false};d.init();stlib.buttonInfo.addButton(d);return d}};stWidget.createFrag=function(a,j){var i="light";i=stWidget.options.popup?"popup":i;__stgetPubGA();if(j=="data"){i="data";for(var b in a){if(a.hasOwnProperty(b)==true&&a[b]!==null&&typeof(a[b])!="function"){if(typeof(a[b])=="object"){var e=stlib.json.encode(a[b])}else{var e=a[b]}if(stlib.browser.isFirefox()&&!stlib.browser.firefox8Version()){i=i+"/"+b+"="+encodeURIComponent(encodeURIComponent(e))}else{i=i+"/"+b+"="+encodeURIComponent(e)}}}}else{if(j=="init"){i="init";if(stWidget.options.tracking&&stWidget.options.publisherGA==null){if(typeof(pageTracker)!="undefined"&&pageTracker!==null){if(typeof(pageTracker._getAccount)!="undefined"){stWidget.options.publisherGA=pageTracker._getAccount()}if(typeof(ga)!=="undefined"&&stWidget.options.publisherGA==null){ga(function(){var p=ga.getAll();for(var l=0;l<p.length;++l){var m=p[l];var k=m.get("trackingId");var o=k.indexOf("UA");if(o>=0){stWidget.options.publisherGA=k}}})}}else{if(stWidget.options.publisherGA==null&&typeof(__stPubGA)!=="undefined"){stWidget.options.publisherGA=__stPubGA}}}for(var b in stWidget.options){if(stWidget.options.hasOwnProperty(b)==true&&stWidget.options[b]!==null&&typeof(stWidget.options[b])!="function"&&typeof(stWidget.options[b])!="object"){var h=stWidget.options[b];try{h=decodeURIComponent(h);h=decodeURIComponent(h)}catch(d){}i=i+"/"+b+"="+encodeURIComponent(h)}}i=i+"/pUrl="+encodeURIComponent(encodeURIComponent(document.location.href))+((document.title!="")?"/title="+encodeURIComponent(encodeURIComponent(document.title)):"")+"/stLight=true"}else{for(var b in a){if(a.hasOwnProperty(b)==true&&a[b]!==null&&typeof(a[b])!="function"&&typeof(a[b])!="object"&&b!=="idx"){i=i+"/"+b+"-=-"+encodeURIComponent(encodeURIComponent(a[b]))}}if(a.service=="email"){i=i+"/page-=-send"}if(stWidgetVersion=="5xa"){if(a.service=="facebook"){i=i+"/page-=-fbhome"}else{if(a.service=="twitter"){i=i+"/page-=-twhome"}else{if(a.service=="yahoo"){i=i+"/page-=-ybhome"}else{if(a.service=="linkedin"){i=i+"/page-=-lihome"}else{if(a.service=="wordpress"){i=i+"/page-=-wphome"}}}}}}if(stlib.data){var g=stlib.json.encode(stlib.data.pageInfo);var f=stlib.json.encode(stlib.data.shareInfo);if(stlib.browser.isFirefox()&&!stlib.browser.firefox8Version()){g=encodeURIComponent(encodeURIComponent(g));f=encodeURIComponent(encodeURIComponent(f))}else{g=encodeURIComponent(g);f=encodeURIComponent(f)}i+="/pageInfo-=-"+g;i+="/shareInfo-=-"+f}}}return i};stWidget.positionWidget=function(o){function getHW(elem){var retH=0;var retW=0;var going=true;while(elem!=null){retW+=elem.offsetLeft;if(going){retH+=elem.offsetTop}if(window.getComputedStyle){if(document.defaultView.getComputedStyle(elem,null).getPropertyValue("position")=="fixed"){retH+=(document.documentElement.scrollTop||document.body.scrollTop);going=false}}else{if(elem.currentStyle){if(elem.currentStyle.position=="fixed"){retH+=(document.documentElement.scrollTop||document.body.scrollTop);going=false}}}elem=elem.offsetParent}return{height:retH,width:retW}}if(!o){return false}if(stWidgetVersion=="4x"){shareel=o.element;var curleft=curtop=0;var mPos=getHW(shareel);curleft=mPos.width;curtop=mPos.height;shareel=o.element;var eltop=0;var elleft=0;var topVal=0;var leftVal=0;var elemH=0;var elemW=0;eltop=curtop+shareel.offsetHeight+5;elleft=curleft+5;topVal=(eltop+(stWidget.options.offsetTop?stWidget.options.offsetTop:0));topVal=eval(topVal);elemH=topVal;topVal+="px";leftVal=(elleft+(stWidget.options.offsetLeft?stWidget.options.offsetLeft:0));leftVal=eval(leftVal);elemW=leftVal;leftVal+="px";stWidget.wrapper.style.top=topVal;stWidget.wrapper.style.left=leftVal;if(stWidget.options.autoPosition==true){stWidget.oldScroll=document.body.scrollTop;var pginfo=stWidget.pageSize();var effectiveH=pginfo.height+pginfo.scrY;var effectiveW=pginfo.width+pginfo.scrX;var widgetH=330;var widgetW=330;var needH=widgetH+elemH;var needW=widgetW+elemW;var diffH=needH-effectiveH;var diffW=needW-effectiveW;var newH=elemH-diffH;var newW=elemW-diffW;var buttonPos=getHW(shareel);var leftA,rightA,topA,bottomA=false;if(diffH>0){bottomA=false;topA=true;if((buttonPos.height-widgetH)>0){newH=buttonPos.height-widgetH}stWidget.wrapper.style.top=newH+"px"}if(diffW>0){leftA=false;rightA=true;if((buttonPos.width-widgetW)>0){newW=buttonPos.width-widgetW}stWidget.wrapper.style.left=newW+"px"}}if(stWidget.options.autoPosition=="center"){stWidget.wrapper.style.top="15%";stWidget.wrapper.style.left="35%";stWidget.wrapper.style.position="fixed"}}else{document.getElementById("stOverlay").style.display="block";var topVal;if(stWidget.options.autoPosition==true){stWidget.wrapper.style.textAlign="left"}if(stWidgetVersion=="5xa"){stWidget.wrapper.style.position="fixed";if(document.all&&navigator.appVersion.indexOf("MSIE 6.")!=-1){stWidget.wrapper.style.position="absolute"}}}stWidget.wrapper.style.visibility="visible";stWidget.wrapper.style.display="block";stWidget.mainstframe.style.visibility="visible"},stWidget.hideWidget=function(){if(stWidget.wrapper.style.visibility!=="hidden"){stWidget.wrapper.style.visibility="hidden"}if(stWidget.mainstframe.style.visibility!=="hidden"){stWidget.mainstframe.style.visibility="hidden"}if(stWidgetVersion=="4x"){stWidget.wrapper.style.display="none"}if(stWidgetVersion=="5xa"){document.getElementById("stOverlay").style.display="none"}};stWidget.pageSize=function(){var f=[0,0,0,0];var b=0;var a=0;var e=0;var d=0;if(typeof(window.pageYOffset)=="number"){b=window.pageXOffset;a=window.pageYOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){b=document.body.scrollLeft;a=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){b=document.documentElement.scrollLeft;a=document.documentElement.scrollTop}}}if(window.innerWidth){e=window.innerWidth;d=window.innerHeight}else{if(document.documentElement.offsetWidth){e=document.documentElement.offsetWidth;d=document.documentElement.offsetHeight}}f={scrX:b,scrY:a,width:e,height:d};return f};stWidget.closetimeout=null;stWidget.stClose=function(a){if(!a){a=1000}if((stWidgetVersion=="4x")&&stWidget.options.autoclose!=null&&(stWidget.options.autoclose==true||stWidget.options.autoclose=="true")){if(stWidget.openDuration<0.5&&stWidget.stopClosing==false){stWidget.closetimeout=setTimeout("stWidget.closeWidget()",a)}else{stWidget.stopClosing=true}}};stWidget.stCancelClose=function(){clearTimeout(stWidget.closetimeout);stWidget.buttonClicked=true;setTimeout(function(){stWidget.buttonClicked=false},100)};stWidget.closeWidget=function(){if(st_showing==false){return false}st_showing=false;stWidget.widgetOpen=false;stWidget.wrapper.style.display="none";stWidget.mainstframe.style.visibility="hidden";stWidget.showEmbeds();stWidget.sendEvent("screen","home");if(stWidgetVersion=="5xa"){document.getElementById("stOverlay").style.display="none"}else{stWidget.wrapper.style.top="-999px";stWidget.wrapper.style.left="-999px";stWidget.wrapper.style.display="none"}};stWidget.hideEmbeds=function(){var b=document.getElementsByTagName("embed");for(var a=0;a<b.length;a++){b[a].style.visibility="hidden"}};stWidget.showEmbeds=function(){if(stWidget.options.embeds==true){return true}var b=document.getElementsByTagName("embed");for(var a=0;a<b.length;a++){b[a].style.visibility="visible"}};stWidget.sendEvent=function(a,d){var b="widget/"+a+"="+d;stButtons.messageQueueInstance.send(b,"widget")};stWidget.getMetaTags=function(){stWidget.getOGTags();stWidget.getTwitterTags()};stWidget.getOGTags=function(){var d=document.getElementsByTagName("meta");for(var a=0;a<d.length;a++){var b=d[a].getAttribute("property");if(b==null){b=d[a].getAttribute("name")}if(b=="og:title"){stWidget.ogtitle=d[a].getAttribute("content")}else{if(b=="og:type"){stWidget.ogtype=d[a].getAttribute("content")}else{if(b=="og:url"){stWidget.ogurl=d[a].getAttribute("content")}else{if(b=="og:image"){stWidget.ogimg=d[a].getAttribute("content").replace(/^\s+|\s+$/g,"")}else{if(b=="og:description"){stWidget.ogdesc=d[a].getAttribute("content")}else{if(b=="description"||b=="Description"){stWidget.desc=d[a].getAttribute("content")}}}}}}}};stWidget.getTwitterTags=function(){var d=document.getElementsByTagName("meta");for(var a=0;a<d.length;a++){var b=d[a].getAttribute("name");if(b==null){b=d[a].getAttribute("property")}if(b=="twitter:card"){stWidget.twittercard=d[a].getAttribute("content")}else{if(b=="twitter:url"){stWidget.twitterurl=d[a].getAttribute("content")}else{if(b=="twitter:title"){stWidget.twittertitle=d[a].getAttribute("content")}else{if(b=="twitter:description"){stWidget.twitterdesc=d[a].getAttribute("content")}else{if(b=="twitter:image"){stWidget.twitterimg=d[a].getAttribute("content")}else{if(b=="description"||b=="Description"){stWidget.desc=d[a].getAttribute("content")}}}}}}}};function shareLog(a,b){if(typeof(ga)!=="undefined"){ga("send","event","ShareThis",a,b)}else{if(typeof(pageTracker)!="undefined"&&pageTracker!==null&&typeof(pageTracker._trackEvent)!="undefined"){pageTracker._trackEvent("ShareThis",a,b)}else{if(typeof(_gaq)!="undefined"&&_gaq!==null){_gaq.push(["_trackEvent","ShareThis",a,b])}else{if(stButtons.publisherTracker!==null){stButtons.publisherTracker._trackEvent("ShareThis",a,b)}else{if(typeof(_gat)!="undefined"&&_gat!==null){if(typeof(stWidget.options.publisherGA)!="undefined"&&stWidget.options.publisherGA!=null){stButtons.publisherTracker=_gat._getTracker(stWidget.options.publisherGA);stButtons.publisherTracker._trackEvent("ShareThis",a,b)}}}}}}}stButtons.completeInit=function(){if(!stButtons.goToInit){stButtons.goToInit=true;var a=self.setInterval(function(){if(stWidget.widgetLoadingComplete){stWidget.getMetaTags();document.body.appendChild(stWidget.wrapper);if(stWidgetVersion=="5xa"){document.body.appendChild(stWidget.overlay)}if(stWidgetVersion=="4x"){try{var d=document.getElementById("stLframe");d.onmouseover=function(){stWidget.stCancelClose();stWidget.inTime=(new Date()).getTime()};d.onmouseout=function(){stWidget.outTime=(new Date()).getTime();stWidget.openDuration=(stWidget.outTime-stWidget.inTime)/1000;stWidget.stClose()};try{if(document.body.attachEvent){document.body.attachEvent("onclick",function(){if(stWidget.buttonClicked==false){stWidget.stopClosing=false;stWidget.openDuration=0;stWidget.stClose(100)}})}else{document.body.setAttribute("onclick","if(stWidget.buttonClicked==false){stWidget.stopClosing=false;stWidget.openDuration=0;stWidget.stClose(100);}")}}catch(b){document.body.onclick=function(){if(stWidget.buttonClicked==false){stWidget.stopClosing=false;stWidget.openDuration=0;stWidget.stClose(100)}}}}catch(b){}}stButtons.makeButtons();stWidget.init();window.clearInterval(a)}},1000)}};plusoneCallback=function(a){if(a.state=="on"){stlib.data.resetShareData();stlib.data.set("url",a.href,"shareInfo");stlib.data.set("short_url",stWidget.short_url,"shareInfo");stlib.data.set("destination","plusone","shareInfo");stlib.data.setSource("chicklet");stlib.data.set("buttonType","chicklet","shareInfo");stlib.sharer.share()}};stButtons.trackFB=function(){try{if(!stButtons.fbTracked&&typeof(FB)!="undefined"&&typeof(FB.Event)!="undefined"&&typeof(FB.Event.subscribe)!="undefined"){stButtons.fbTracked=true;FB.Event.subscribe("edge.create",function(b){stButtons.trackShare("fblike_auto",b);stLight.callSubscribers("click","fblike",b)});FB.Event.subscribe("edge.remove",function(b){stButtons.trackShare("fbunlike_auto",b);stLight.callSubscribers("click","fbunlike",b)});FB.Event.subscribe("message.send",function(b){stButtons.trackShare("fbsend_auto",b);stLight.callSubscribers("click","fbsend",b)})}}catch(a){}};stButtons.trackTwitter=function(){if(!stButtons.twitterTracked&&typeof(twttr)!="undefined"&&typeof(twttr.events)!="undefined"&&typeof(twttr.events.bind)!="undefined"){stButtons.twitterTracked=true;twttr.events.bind("click",function(a){stButtons.trackTwitterEvent("click");stLight.callSubscribers("click","twitter")});twttr.events.bind("tweet",function(){stButtons.trackTwitterEvent("tweet")});twttr.events.bind("retweet",function(){stButtons.trackTwitterEvent("retweet");stLight.callSubscribers("click","retweet")});twttr.events.bind("favorite",function(){stButtons.trackTwitterEvent("favorite");stLight.callSubscribers("click","favorite")});twttr.events.bind("follow",function(){stButtons.trackTwitterEvent("follow");stLight.callSubscribers("click","follow")})}};stButtons.trackTwitterEvent=function(a){stButtons.trackShare("twitter_"+a+"_auto")};stButtons.trackShare=function(a,d){if(typeof(d)!=="undefined"&&d!==null){var b=d}else{var b=document.location.href}stlib.data.resetShareData();stlib.data.set("url",b,"shareInfo");stlib.data.set("short_url",stWidget.short_url,"shareInfo");stlib.data.set("destination",a,"shareInfo");stlib.data.set("buttonType","chicklet","shareInfo");stlib.data.setSource("chicklet");stlib.sharer.share()};stLight.processSTQ=function(){if(typeof(_stq)!="undefined"){for(var a=0;a<_stq.length;a++){var b=_stq[a];stLight.options(b)}}else{return false}};stLight.onDomContentLoaded=function(){stLight.onReady();stButtons.trackTwitter()};stLight.onDomContentLoadedLazy=function(){stLight.loadServicesLoggedIn(function(){stLight.getAllAppDefault(function(){stlib.data.init();stButtons.locateElements();stButtons.makeButtons()})})};stLight.messageReceiver=function(b){if(b&&(b.origin=="http://edge.sharethis.com"||b.origin=="https://ws.sharethis.com")){var d=b.data;d=d.split("|");if(d[0]=="ShareThis"&&d.length>2){var a=(typeof(d[3])=="undefined")?document.location.href:d[3];stLight.callSubscribers(d[1],d[2],a)}}};stLight.subscribe=function(b,a){if(b=="click"){stLight.clickSubscribers.push(a)}else{stLight.nonClickSubscribers.push(a)}};stLight.callSubscribers=function(e,a,b){if(e=="click"){for(var d=0;d<stLight.clickSubscribers.length;d++){stLight.clickSubscribers[d]("click",a,b)}}};stLight.gaTS=function(d,a,b){var e="";var f="";if(a=="fblike"){e="ShareThis_facebook";f="Like"}else{if(a=="fbunlike"){e="ShareThis_facebook";f="UnLike"}else{if(a=="fbsend"){e="ShareThis_facebook";f="Send"}else{if(a=="twitter"){e="ShareThis_twitter";f="Share"}else{if(a=="retweet"){e="ShareThis_twitter";f="ReTweet"}else{if(a=="favorite"){e="ShareThis_twitter";f="Favorite"}else{if(a=="follow"){e="ShareThis_twitter";f="Follow"}else{e="ShareThis_"+a;f="Share"}}}}}}}if(typeof(ga)!=="undefined"){ga("send","social",e,f,b)}else{if(typeof(_gaq)!="undefined"){_gaq.push(["_trackSocial",e,f,b])}}};stButtons.onReady=function(){var h=document.getElementsByTagName("*");var b=[];var d=new RegExp(/sharethis_smartbuttons/);var a=false;for(var j=0;j<h.length;j++){if(typeof(h[j].className)=="string"&&h[j].className!=""){if(h[j].className.match(d)){a=true;break}}}if(a){var g=document.getElementsByTagName("head")[0];var e=["return=json","cb=stButtons.smartifyButtons"];e=e.join("&");var f=(("https:"==document.location.protocol)?"https://ws.":"http://wd.")+"sharethis.com/api/getRecentServices.php?"+e;var i=document.createElement("script");i.setAttribute("type","text/javascript");i.setAttribute("src",f);g.appendChild(i);setTimeout("stButtons.completeInit()",2000)}else{stButtons.completeInit()}stLight.subscribe("click",stLight.gaTS);if(stlib.browser.ieFallback&&stlib.browser.getIEVersion()<9){return}else{stLight.getAllAppDefault(function(){if(stWidget.options.snapsets&&typeof(stLight.snapSetsRun)=="undefined"){stLight.snapSetsRun=true;if(typeof(stlib.p6x)=="undefined"){stLight.odjs("http://w.sharethis.com/button/clipboard.js",function(){stlib.p6x.init()})}}})}};stLight.domReady=function(){stLight.onReady();stButtons.trackTwitter();__stgetPubGA();if(typeof(__stPubGA)!=="undefined"&&stLight.readyRun==true&&stWidget.frameReady==true){stWidget.sendEvent("publisherGA",__stPubGA)}};stButtons.goToInit=false;stButtons.widget=false;stButtons.widgetArray=[];stButtons.cbAppQueue=[];stButtons.queue=[];stButtons.cbQueue=[];stButtons.cbNativeQueue=[];stButtons.cbVal=0;stButtons.queuePos=0;stButtons.counts=[];st_showing=false;stButtons.urlElements=[];stButtons.publisherTracker=null;stButtons.plusOneLoaded=false;stButtons.plusOneLoading=false;stButtons.xfbmlLoaded=false;stButtons.xfbmlLoading=false;stButtons.fbTracked=false;stButtons.twitterTracked=false;stButtons.pumpInstance=null;stButtons.messageQueueInstance=null;stButtons.countsResp=[];stButtons.countsNativeResp=[];stWidget.getMetaTags();stLight.clickSubscribers=[];stLight.nonClickSubscribers=[];var __stPubGA;if(window.document.readyState=="completed"){stLight.domReady()}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("load",stLight.domReady,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("load",stLight.domReady,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",stLight.domReady)}}}}if(typeof(window.addEventListener)!="undefined"){window.addEventListener("click",function(){stWidget.closeWidget()},false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("click",function(){stWidget.closeWidget()},false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onclick",function(){stWidget.closeWidget()})}}}if(typeof(__st_loadLate)=="undefined"){if(typeof(window.addEventListener)!="undefined"){window.addEventListener("DOMContentLoaded",stLight.onDomContentLoaded,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("DOMContentLoaded",stLight.onDomContentLoaded,false)}}}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("DOMContentLoaded",stLight.onDomContentLoadedLazy,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("DOMContentLoaded",stLight.onDomContentLoadedLazy,false)}}}if(typeof(window.addEventListener)!="undefined"){window.addEventListener("message",stLight.messageReceiver,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("message",stLight.messageReceiver,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",stLight.messageReceiver)}}}if(document.readyState=="complete"&&stLight.readyRun==false){stLight.domReady()};

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);


/*! jQuery UI - v1.10.4 - 2014-01-31
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.accordion.js, jquery.ui.tabs.js, jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(e){var t=0,i={},a={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,a=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(s+1)%a];break;case i.LEFT:case i.UP:n=this.headers[(s-1+a)%a];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[a-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,a=this.options,s=a.heightStyle,n=this.element.parent(),r=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t);this.active=this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var i=e(this),a=i.attr("id"),s=i.next(),n=s.attr("id");a||(a=r+"-header-"+t,i.attr("id",a)),n||(n=r+"-panel-"+t,s.attr("id",n)),i.attr("aria-controls",n),s.attr("aria-labelledby",a)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===s?(i=n.height(),this.element.siblings(":visible").each(function(){var t=e(this),a=t.css("position");"absolute"!==a&&"fixed"!==a&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(i=0,this.headers.next().each(function(){i=Math.max(i,e(this).css("height","").height())}).height(i))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,a=this.active,s=e(t.currentTarget),n=s[0]===a[0],r=n&&i.collapsible,o=r?e():s.next(),h=a.next(),d={oldHeader:a,oldPanel:h,newHeader:r?e():s,newPanel:o};t.preventDefault(),n&&!i.collapsible||this._trigger("beforeActivate",t,d)===!1||(i.active=r?!1:this.headers.index(s),this.active=n?e():s,this._toggle(d),a.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),n||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,a=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=a,this.options.animate?this._animate(i,a,t):(a.hide(),i.show(),this._toggleComplete(t)),a.attr({"aria-hidden":"true"}),a.prev().attr("aria-selected","false"),i.length&&a.length?a.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,t,s){var n,r,o,h=this,d=0,c=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=c&&l.down||l,v=function(){h._toggleComplete(s)};return"number"==typeof u&&(o=u),"string"==typeof u&&(r=u),r=r||u.easing||l.easing,o=o||u.duration||l.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(i,{duration:o,easing:r,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(a,{duration:o,easing:r,complete:v,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?d+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-d),d=0)}}),undefined):t.animate(i,o,r,v):e.animate(a,o,r,v)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,a){var o,r=a.re.exec(i),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[c[h].cache]=o[c[h].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,o,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,l],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),a=c[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],h=s[a],c=u[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[o]&&(this[o]=l(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[o]=d,n):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(n){var a,o=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=h(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);


/**
 * @preserve jQuery DateTimePicker plugin v2.1.9
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */
(function( $ ) {
    'use strict'
    var default_options  = {
        i18n:{
            ru:{ // Russian
                months:[
                    'Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
                ],
                dayOfWeek:[
                    "Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
                ]
            },
            en:{ // English
                months: [
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ],
                dayOfWeek: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
                ]
            },
            de:{ // German
                months:[
                    'Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'
                ],
                dayOfWeek:[
                    "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
                ]
            },
            nl:{ // Dutch
                months:[
                    "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
                ],
                dayOfWeek:[
                    "zo", "ma", "di", "wo", "do", "vr", "za"
                ]
            },
            tr:{ // Turkish
                months:[
                    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
                ],
                dayOfWeek:[
                    "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
                ]
            },
            fr:{ //French
                months:[
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                ],
                dayOfWeek:[
                    "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
                ]
            },
            es:{ // Spanish
                months: [
                    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ],
                dayOfWeek: [
                    "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
                ]
            },
            th:{ // Thai
                months:[
                    'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
                ],
                dayOfWeek:[
                    'อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'
                ]
            },
            pl:{ // Polish
                months: [
                    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
                ],
                dayOfWeek: [
                    "nd", "pn", "wt", "śr", "cz", "pt", "sb"
                ]
            },
            pt:{ // Portuguese
                months: [
                    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ],
                dayOfWeek: [
                    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
                ]
            },
            ch:{ // Simplified Chinese
                months: [
                    "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
                ],
                dayOfWeek: [
                    "日", "一","二","三","四","五","六"
                ]
            },
            se:{ // Swedish
                months: [
                    "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September","Oktober", "November", "December"
                ],
                dayOfWeek: [
                    "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
                ]
            }
        },
        value:'',
        lang:'en',
        format:'Y/m/d H:i',
        formatTime:'H:i',
        formatDate:'Y/m/d',
        step:60,
        closeOnDateSelect:0,
        closeOnWithoutClick:true,
        timepicker:true,
        datepicker:true,
        minDate:false,
        maxDate:false,
        minTime:false,
        maxTime:false,
        allowTimes:[],
        opened:false,
        inline:false,
        onSelectDate:function() {},
        onSelectTime:function() {},
        onChangeMonth:function() {},
        onChangeDateTime:function() {},
        onShow:function() {},
        onClose:function() {},
        onGenerate:function() {},
        withoutCopyright:true,
        inverseButton:false,
        hours12:false,
        next:   'xdsoft_next',
        prev : 'xdsoft_prev',
        dayOfWeekStart:0,
        timeHeightInTimePicker:25,
        timepickerScrollbar:true,
        todayButton:true, // 2.1.0
        defaultSelect:true, // 2.1.0
        scrollMonth:true,
        scrollTime:true,
        scrollInput:true,
        mask:false,
        validateOnBlur:true,
        allowBlank:false,
        yearStart:1950,
        yearEnd:2050,
        style:'',
        id:'',
        roundTime:'round', // ceil, floor
        className:'',
        weekends    :   [],
        yearOffset:0
    };
    // fix for ie8
    if ( !Array.prototype.indexOf ) {
        Array.prototype.indexOf = function(obj, start) {
             for (var i = (start || 0), j = this.length; i < j; i++) {
                 if (this[i] === obj) { return i; }
             }
             return -1;
        }
    };
    $.fn.xdsoftScroller = function( _percent ) {
        return this.each(function() {
            var timeboxparent = $(this);
            if( !$(this).hasClass('xdsoft_scroller_box') ) {
                var pointerEventToXY = function( e ) {
                        var out = {x:0, y:0};
                        if( e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel' ) {
                            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            out.x = touch.pageX;
                            out.y = touch.pageY;
                        }else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                            out.x = e.pageX;
                            out.y = e.pageY;
                        }
                        return out;
                    },
                    move = 0,
                    timebox = timeboxparent.children().eq(0),
                    parentHeight = timeboxparent[0].clientHeight,
                    height = timebox[0].offsetHeight,
                    scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
                    scroller = $('<div class="xdsoft_scroller"></div>'),
                    maximumOffset = 100,
                    start = false;

                scrollbar.append(scroller);

                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                scroller.on('mousedown.xdsoft_scroller',function ( event ) {
                    if( !parentHeight )
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller',[_percent]);
                    var pageY = event.pageY,
                        top = parseInt(scroller.css('margin-top')),
                        h1 = scrollbar[0].offsetHeight;
                    $(document.body).addClass('xdsoft_noselect');
                    $([document.body,window]).on('mouseup.xdsoft_scroller',function arguments_callee() {
                        $([document.body,window]).off('mouseup.xdsoft_scroller',arguments_callee)
                            .off('mousemove.xdsoft_scroller',move)
                            .removeClass('xdsoft_noselect');
                    });
                    $(document.body).on('mousemove.xdsoft_scroller',move = function(event) {
                        var offset = event.pageY-pageY+top;
                        if( offset<0 )
                            offset = 0;
                        if( offset+scroller[0].offsetHeight>h1 )
                            offset = h1-scroller[0].offsetHeight;
                        timeboxparent.trigger('scroll_element.xdsoft_scroller',[maximumOffset?offset/maximumOffset:0]);
                    });
                });

                timeboxparent
                    .on('scroll_element.xdsoft_scroller',function( event,percent ) {
                        if( !parentHeight )
                            timeboxparent.trigger('resize_scroll.xdsoft_scroller',[percent,true]);
                        percent = percent>1?1:(percent<0||isNaN(percent))?0:percent;
                        scroller.css('margin-top',maximumOffset*percent);
                        timebox.css('marginTop',-parseInt((height-parentHeight)*percent))
                    })
                    .on('resize_scroll.xdsoft_scroller',function( event,_percent,noTriggerScroll ) {
                        parentHeight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        var percent = parentHeight/height,
                            sh = percent*scrollbar[0].offsetHeight;
                        if( percent>1 )
                            scroller.hide();
                        else{
                            scroller.show();
                            scroller.css('height',parseInt(sh>10?sh:10));
                            maximumOffset = scrollbar[0].offsetHeight-scroller[0].offsetHeight;
                            if( noTriggerScroll!==true )
                                timeboxparent.trigger('scroll_element.xdsoft_scroller',[_percent?_percent:Math.abs(parseInt(timebox.css('marginTop')))/(height-parentHeight)]);
                        }
                    });
                timeboxparent.mousewheel&&timeboxparent.mousewheel(function(event, delta, deltaX, deltaY) {
                    var top = Math.abs(parseInt(timebox.css('marginTop')));
                    timeboxparent.trigger('scroll_element.xdsoft_scroller',[(top-delta*20)/(height-parentHeight)]);
                    event.stopPropagation();
                    return false;
                });
                timeboxparent.on('touchstart',function( event ) {
                    start = pointerEventToXY(event);
                });
                timeboxparent.on('touchmove',function( event ) {
                    if( start ) {
                        var coord = pointerEventToXY(event), top = Math.abs(parseInt(timebox.css('marginTop')));
                        timeboxparent.trigger('scroll_element.xdsoft_scroller',[(top-(coord.y-start.y))/(height-parentHeight)]);
                        event.stopPropagation();
                        event.preventDefault();
                    };
                });
                timeboxparent.on('touchend touchcancel',function( event ) {
                    start = false;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller',[_percent]);
        });
    };
    $.fn.datetimepicker = function( opt ) {
        var KEY0 = 48,
            KEY9 = 57,
            _KEY0 = 96,
            _KEY9 = 105,
            CTRLKEY = 17,
            DEL = 46,
            ENTER = 13,
            ESC = 27,
            BACKSPACE = 8,
            ARROWLEFT = 37,
            ARROWUP = 38,
            ARROWRIGHT = 39,
            ARROWDOWN = 40,
            TAB = 9,
            F5 = 116,
            AKEY = 65,
            CKEY = 67,
            VKEY = 86,
            ZKEY = 90,
            YKEY = 89,
            ctrlDown    =   false,
            options = ($.isPlainObject(opt)||!opt)?$.extend(true,{},default_options,opt):$.extend({},default_options),
            createDateTimePicker = function( input ) {
                var datetimepicker = $('<div '+(options.id?'id="'+options.id+'"':'')+' '+(options.style?'style="'+options.style+'"':'')+' class="xdsoft_datetimepicker xdsoft_noselect '+options.className+'"></div>'),
                    xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                    datepicker = $('<div class="xdsoft_datepicker active"></div>'),
                    mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'),
                    calendar = $('<div class="xdsoft_calendar"></div>'),
                    timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                    timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
                    timebox = $('<div class="xdsoft_time_variant"></div>'),
                    scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
                    scroller = $('<div class="xdsoft_scroller"></div>'),
                    monthselect =$('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                    yearselect =$('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');

                //constructor lego
                mounth_picker
                    .find('.xdsoft_month span')
                        .after(monthselect);
                mounth_picker
                    .find('.xdsoft_year span')
                        .after(yearselect);

                mounth_picker
                    .find('.xdsoft_month,.xdsoft_year')
                        .on('mousedown.xdsoft',function(event) {
                            mounth_picker
                                .find('.xdsoft_select')
                                    .hide();
                            var select = $(this).find('.xdsoft_select').eq(0),
                                val = 0,
                                top = 0;

                            if( _xdsoft_datetime.currentTime )
                                val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month')?'getMonth':'getFullYear']();

                            select.show();
                            for(var items = select.find('div.xdsoft_option'),i = 0;i<items.length;i++) {
                                if( items.eq(i).data('value')==val ) {
                                    break;
                                }else top+=items[0].offsetHeight;
                            }

                            select.xdsoftScroller(top/(select.children()[0].offsetHeight-(select[0].clientHeight)));
                            event.stopPropagation();
                            return false;
                        });

                mounth_picker
                    .find('.xdsoft_select')
                        .xdsoftScroller()
                        .on('mousedown.xdsoft',function( event ) {
                            event.stopPropagation();
                            event.preventDefault();
                        })
                        .on('mousedown.xdsoft','.xdsoft_option',function( event ) {
                            if( _xdsoft_datetime&&_xdsoft_datetime.currentTime )
                                _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect')?'setMonth':'setFullYear']($(this).data('value'));
                            $(this).parent().parent().hide();
                            datetimepicker.trigger('xchange.xdsoft');
                            options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        });


                // set options
                datetimepicker.setOptions = function( _options ) {
                    options = $.extend(true,{},options,_options);
                    if( (options.open||options.opened)&&(!options.inline) ) {
                        input.trigger('open.xdsoft');
                    }

                    if( options.inline ) {
                        datetimepicker.addClass('xdsoft_inline');
                        input.after(datetimepicker).hide();
                        datetimepicker.trigger('afterOpen.xdsoft');
                    }

                    if( options.inverseButton ) {
                        options.next = 'xdsoft_prev';
                        options.prev = 'xdsoft_next';
                    }

                    if( !options.datepicker && options.timepicker )
                        datepicker.removeClass('active');

                    if( options.datepicker && !options.timepicker )
                        timepicker.removeClass('active');

                    if( options.value ){
                        input&&input.val&&input.val(options.value);
                        _xdsoft_datetime.setCurrentTime(options.value);
                    }

                    if( isNaN(options.dayOfWeekStart)||parseInt(options.dayOfWeekStart)<0||parseInt(options.dayOfWeekStart)>6 )
                        options.dayOfWeekStart = 0;
                    else
                        options.dayOfWeekStart = parseInt(options.dayOfWeekStart);

                    if( !options.timepickerScrollbar )
                        scrollbar.hide();

                    var tmpDate = [],timeOffset;
                    if( options.minDate && ( tmpDate = /^-(.*)$/.exec(options.minDate) ) && (tmpDate=Date.parseDate(tmpDate[1], options.formatDate)) ) {
                        timeOffset = tmpDate.getTime()+-1*(tmpDate.getTimezoneOffset())*60000;
                        options.minDate = new Date((_xdsoft_datetime.now()).getTime()-timeOffset).dateFormat( options.formatDate );
                    }
                    if( options.maxDate && ( tmpDate = /^\+(.*)$/.exec(options.maxDate) ) && (tmpDate=Date.parseDate(tmpDate[1], options.formatDate)) ) {
                        timeOffset = tmpDate.getTime()+-1*(tmpDate.getTimezoneOffset())*60000;
                        options.maxDate = new Date((_xdsoft_datetime.now()).getTime()+timeOffset).dateFormat( options.formatDate );
                    }

                    mounth_picker
                        .find('.xdsoft_today_button')
                            .css('visibility',!options.todayButton?'hidden':'visible');

                    if( options.mask ) {
                        var e,
                            getCaretPos = function ( input ) {
                                try{
                                    if ( document.selection && document.selection.createRange ) {
                                        var range = document.selection.createRange();
                                        return range.getBookmark().charCodeAt(2) - 2;
                                    }else
                                        if ( input.setSelectionRange )
                                            return input.selectionStart;
                                }catch(e) {
                                    return 0;
                                }
                            },
                            setCaretPos = function ( node,pos ) {
                                var node = (typeof node == "string" || node instanceof String) ? document.getElementById(node) : node;
                                if(!node) {
                                    return false;
                                }else if(node.createTextRange) {
                                    var textRange = node.createTextRange();
                                    textRange.collapse(true);
                                    textRange.moveEnd(pos);
                                    textRange.moveStart(pos);
                                    textRange.select();
                                    return true;
                                }else if(node.setSelectionRange) {
                                    node.setSelectionRange(pos,pos);
                                    return true;
                                }
                                return false;
                            },
                            isValidValue = function ( mask,value ) {
                                var reg = mask
                                    .replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,'\\$1')
                                    .replace(/_/g,'{digit+}')
                                    .replace(/([0-9]{1})/g,'{digit$1}')
                                    .replace(/\{digit([0-9]{1})\}/g,'[0-$1_]{1}')
                                    .replace(/\{digit[\+]\}/g,'[0-9_]{1}');
                                return RegExp(reg).test(value);
                            };
                        input.off('keydown.xdsoft');
                        switch(true) {
                            case ( options.mask===true ):
                                //options.mask = (new Date()).dateFormat( options.format );
                                //options.mask = options.mask.replace(/[0-9]/g,'_');
                                options.mask = options.format
                                    .replace(/Y/g,'9999')
                                    .replace(/F/g,'9999')
                                    .replace(/m/g,'19')
                                    .replace(/d/g,'39')
                                    .replace(/H/g,'29')
                                    .replace(/i/g,'59')
                                    .replace(/s/g,'59');
                            case ( $.type(options.mask) == 'string' ):
                                if( !isValidValue( options.mask,input.val() ) )
                                    input.val(options.mask.replace(/[0-9]/g,'_'));

                                input.on('keydown.xdsoft',function( event ) {
                                    var val = this.value,
                                        key = event.which;
                                    switch(true) {
                                        case (( key>=KEY0&&key<=KEY9 )||( key>=_KEY0&&key<=_KEY9 ))||(key==BACKSPACE||key==DEL):
                                            var pos = getCaretPos(this),
                                                digit = ( key!=BACKSPACE&&key!=DEL )?String.fromCharCode((_KEY0 <= key && key <= _KEY9)? key-KEY0 : key):'_';
                                            if( (key==BACKSPACE||key==DEL)&&pos ) {
                                                pos--;
                                                digit='_';
                                            }
                                            while( /[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0 )
                                                pos+=( key==BACKSPACE||key==DEL )?-1:1;

                                            val = val.substr(0,pos)+digit+val.substr(pos+1);
                                            if( $.trim(val)=='' )
                                                val = options.mask.replace(/[0-9]/g,'_');
                                            else
                                                if( pos==options.mask.length )
                                                    break;

                                            pos+=(key==BACKSPACE||key==DEL)?0:1;
                                            while( /[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0 )
                                                pos+=(key==BACKSPACE||key==DEL)?-1:1;
                                            if( isValidValue( options.mask,val ) ) {
                                                this.value = val;
                                                setCaretPos(this,pos);
                                            }else if( $.trim(val)=='' )
                                                this.value = options.mask.replace(/[0-9]/g,'_');
                                            else{
                                                input.trigger('error_input.xdsoft');
                                            }
                                        break;
                                        case ( !!~([AKEY,CKEY,VKEY,ZKEY,YKEY].indexOf(key))&&ctrlDown ):
                                         case !!~([ESC,ARROWUP,ARROWDOWN,ARROWLEFT,ARROWRIGHT,F5,CTRLKEY,TAB,ENTER].indexOf(key)):
                                        return true;
                                    }
                                    event.preventDefault();
                                    return false;
                                });
                            break;
                        }
                    }
                    if( options.validateOnBlur ) {
                        input
                            .off('blur.xdsoft')
                            .on('blur.xdsoft', function() {
                                if( options.allowBlank && !$.trim($(this).val()).length ) {
                                    $(this).val(null);
                                    datetimepicker.data('xdsoft_datetime').empty();
                                }else if( !Date.parseDate( $(this).val(), options.format ) ) {
                                    $(this).val((_xdsoft_datetime.now()).dateFormat( options.format ));
                                    datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                                }
                                else{
                                    datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                                }
                                datetimepicker.trigger('changedatetime.xdsoft');
                            });
                    }
                    options.dayOfWeekStartPrev = (options.dayOfWeekStart==0)?6:options.dayOfWeekStart-1;
                    datetimepicker
                        .trigger('xchange.xdsoft');
                };

                datetimepicker
                    .data('options',options)
                    .on('mousedown.xdsoft',function( event ) {
                        event.stopPropagation();
                        event.preventDefault();
                        yearselect.hide();
                        monthselect.hide();
                        return false;
                    });

                var scroll_element = timepicker.find('.xdsoft_time_box');
                scroll_element.append(timebox);
                scroll_element.xdsoftScroller();
                datetimepicker.on('afterOpen.xdsoft',function() {
                    scroll_element.xdsoftScroller();
                });

                datetimepicker
                    .append(datepicker)
                    .append(timepicker);

                if( options.withoutCopyright!==true )
                    datetimepicker
                        .append(xdsoft_copyright);

                datepicker
                    .append(mounth_picker)
                    .append(calendar);

                $('body').append(datetimepicker);

                var _xdsoft_datetime = new function() {
                    var _this = this;
                    _this.now = function() {
                        var d = new Date();
                        if( options.yearOffset )
                            d.setFullYear(d.getFullYear()+options.yearOffset);
                        return d;
                    };

                    _this.currentTime = this.now();
                    _this.isValidDate = function (d) {
                        if ( Object.prototype.toString.call(d) !== "[object Date]" )
                            return false;
                        return !isNaN(d.getTime());
                    };

                    _this.setCurrentTime = function( dTime) {
                        _this.currentTime = (typeof dTime == 'string')? _this.strtodatetime(dTime) : _this.isValidDate(dTime) ? dTime: _this.now();
                        datetimepicker.trigger('xchange.xdsoft');
                    };

                    _this.empty = function() {
                        _this.currentTime = null;
                    };

                    _this.getCurrentTime = function( dTime) {
                        return _this.currentTime;
                    };

                    _this.nextMonth = function() {
                        var month = _this.currentTime.getMonth()+1;
                        if( month==12 ) {
                            _this.currentTime.setFullYear(_this.currentTime.getFullYear()+1);
                            month = 0;
                        }
                        _this.currentTime.setDate(
                            Math.min(
                                Date.daysInMonth[month],
                                _this.currentTime.getDate()
                            )
                        )
                        _this.currentTime.setMonth(month);
                        options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        datetimepicker.trigger('xchange.xdsoft');
                        return month;
                    };

                    _this.prevMonth = function() {
                        var month = _this.currentTime.getMonth()-1;
                        if( month==-1 ) {
                            _this.currentTime.setFullYear(_this.currentTime.getFullYear()-1);
                            month = 11;
                        }
                        _this.currentTime.setDate(
                            Math.min(
                                Date.daysInMonth[month],
                                _this.currentTime.getDate()
                            )
                        )
                        _this.currentTime.setMonth(month);
                        options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        datetimepicker.trigger('xchange.xdsoft');
                        return month;
                    };

                    _this.strtodatetime = function( sDateTime ) {
                        var currentTime = sDateTime?Date.parseDate(sDateTime, options.format):_this.now();
                        if( !_this.isValidDate(currentTime) )
                            currentTime = _this.now();
                        return currentTime;
                    };

                    _this.strtodate = function( sDate ) {
                        var currentTime = sDate?Date.parseDate(sDate, options.formatDate):_this.now();
                        if( !_this.isValidDate(currentTime) )
                            currentTime = _this.now();
                        return currentTime;
                    };

                    _this.strtotime = function( sTime ) {
                        var currentTime = sTime?Date.parseDate(sTime, options.formatTime):_this.now();
                        if( !_this.isValidDate(currentTime) )
                            currentTime = _this.now();
                        return currentTime;
                    };

                    _this.str = function() {
                        return _this.currentTime.dateFormat(options.format);
                    };
                };
                mounth_picker
                    .find('.xdsoft_today_button')
                        .on('mousedown.xdsoft',function() {
                            datetimepicker.data('changed',true);
                            _xdsoft_datetime.setCurrentTime(0);
                            datetimepicker.trigger('afterOpen.xdsoft');
                        }).on('dblclick.xdsoft',function(){
                            input.val( _xdsoft_datetime.str() );
                            datetimepicker.trigger('close.xdsoft');
                        });
                mounth_picker
                    .find('.xdsoft_prev,.xdsoft_next')
                        .on('mousedown.xdsoft',function() {
                            var $this = $(this),
                                timer = 0,
                                stop = false;

                            (function arguments_callee1(v) {
                                var month =  _xdsoft_datetime.currentTime.getMonth();
                                if( $this.hasClass( options.next ) ) {
                                    _xdsoft_datetime.nextMonth();
                                }else if( $this.hasClass( options.prev ) ) {
                                    _xdsoft_datetime.prevMonth();
                                }
                                !stop&&(timer = setTimeout(arguments_callee1,v?v:100));
                            })(500);

                            $([document.body,window]).on('mouseup.xdsoft',function arguments_callee2() {
                                clearTimeout(timer);
                                stop = true;
                                $([document.body,window]).off('mouseup.xdsoft',arguments_callee2);
                            });
                        });

                timepicker
                    .find('.xdsoft_prev,.xdsoft_next')
                        .on('mousedown.xdsoft',function() {
                            var $this = $(this),
                                timer = 0,
                                stop = false,
                                period = 110;
                            (function arguments_callee4(v) {
                                var pheight = timeboxparent[0].clientHeight,
                                    height = timebox[0].offsetHeight,
                                    top = Math.abs(parseInt(timebox.css('marginTop')));
                                if( $this.hasClass(options.next) && (height-pheight)- options.timeHeightInTimePicker>=top ) {
                                    timebox.css('marginTop','-'+(top+options.timeHeightInTimePicker)+'px')
                                }else if( $this.hasClass(options.prev) && top-options.timeHeightInTimePicker>=0  ) {
                                    timebox.css('marginTop','-'+(top-options.timeHeightInTimePicker)+'px')
                                }
                                timeboxparent.trigger('scroll_element.xdsoft_scroller',[Math.abs(parseInt(timebox.css('marginTop'))/(height-pheight))]);
                                period= ( period>10 )?10:period-10;
                                !stop&&(timer = setTimeout(arguments_callee4,v?v:period));
                            })(500);
                            $([document.body,window]).on('mouseup.xdsoft',function arguments_callee5() {
                                clearTimeout(timer);
                                stop = true;
                                $([document.body,window])
                                    .off('mouseup.xdsoft',arguments_callee5);
                            });
                        });

                // base handler - generating a calendar and timepicker
                datetimepicker
                    .on('xchange.xdsoft',function( event ) {
                        var table   =   '',
                            start   = new Date(_xdsoft_datetime.currentTime.getFullYear(),_xdsoft_datetime.currentTime.getMonth(),1),
                            i = 0,
                            today = _xdsoft_datetime.now();
                        while( start.getDay()!=options.dayOfWeekStart )
                            start.setDate(start.getDate()-1);

                        //generate calendar
                        table+='<table><thead><tr>';

                        // days
                        for(var j = 0; j<7; j++) {
                            table+='<th>'+options.i18n[options.lang].dayOfWeek[(j+options.dayOfWeekStart)>6?0:j+options.dayOfWeekStart]+'</th>';
                        }

                        table+='</tr></thead>';
                        table+='<tbody><tr>';
                        var maxDate = false, minDate = false;
                        if( options.maxDate!==false ) {
                            maxDate = _xdsoft_datetime.strtodate(options.maxDate);
                            maxDate = new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate(),23,59,59,999);
                        }
                        if( options.minDate!==false ) {
                            minDate = _xdsoft_datetime.strtodate(options.minDate);
                            minDate = new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());
                        }
                        var d,y,m,classes = [];
                        while( i<_xdsoft_datetime.currentTime.getDaysInMonth()||start.getDay()!=options.dayOfWeekStart||_xdsoft_datetime.currentTime.getMonth()==start.getMonth() ) {
                            classes = [];
                            i++;

                            d = start.getDate(); y = start.getFullYear(); m = start.getMonth();

                            classes.push('xdsoft_date');

                            if( ( maxDate!==false && start > maxDate )||(  minDate!==false && start < minDate ) ){
                                classes.push('xdsoft_disabled');
                            }

                            if( _xdsoft_datetime.currentTime.getMonth()!=m ) classes.push('xdsoft_other_month');

                            if( (options.defaultSelect||datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat('d.m.Y')==start.dateFormat('d.m.Y') ) {
                                classes.push('xdsoft_current');
                            }

                            if( today.dateFormat('d.m.Y')==start.dateFormat('d.m.Y') ) {
                                classes.push('xdsoft_today');
                            }

                            if( start.getDay()==0||start.getDay()==6||~options.weekends.indexOf(start.dateFormat('d.m.Y')) ) {
                                classes.push('xdsoft_weekend');
                            }

                            table+='<td data-date="'+d+'" data-month="'+m+'" data-year="'+y+'"'+' class="xdsoft_date xdsoft_day_of_week'+start.getDay()+' '+ classes.join(' ')+'">'+
                                        '<div>'+d+'</div>'+
                                    '</td>';

                            if( start.getDay()==options.dayOfWeekStartPrev ) {
                                table+='</tr>';
                            }

                            start.setDate(d+1);
                        }
                        table+='</tbody></table>';

                        calendar.html(table);

                        mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
                        mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

                        // generate timebox
                        var time = '',
                            h = '',
                            m ='',
                            line_time = function line_time( h,m ) {
                                var now = _xdsoft_datetime.now();
                                now.setHours(h);
                                h = parseInt(now.getHours());
                                now.setMinutes(m);
                                m = parseInt(now.getMinutes());

                                classes = [];
                                if( (options.maxTime!==false&&_xdsoft_datetime.strtotime(options.maxTime).getTime()<now.getTime())||(options.minTime!==false&&_xdsoft_datetime.strtotime(options.minTime).getTime()>now.getTime()))
                                    classes.push('xdsoft_disabled');
                                if( (options.defaultSelect||datetimepicker.data('changed')) && parseInt(_xdsoft_datetime.currentTime.getHours())==parseInt(h)&&(options.step>59||Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes()/options.step)*options.step==parseInt(m)))
                                    classes.push('xdsoft_current');
                                if( parseInt(today.getHours())==parseInt(h)&&parseInt(today.getMinutes())==parseInt(m))
                                    classes.push('xdsoft_today');
                                time+= '<div class="xdsoft_time '+classes.join(' ')+'" data-hour="'+h+'" data-minute="'+m+'">'+now.dateFormat(options.formatTime)+'</div>';
                            };

                        if( !options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length ) {
                            for( var i=0,j=0;i<(options.hours12?12:24);i++ ) {
                                for( j=0;j<60;j+=options.step ) {
                                    h = (i<10?'0':'')+i;
                                    m = (j<10?'0':'')+j;
                                    line_time( h,m );
                                }
                            }
                        }else{
                            for( var i=0;i<options.allowTimes.length;i++ ) {
                                h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                                m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                                line_time( h,m );
                            }
                        }

                        timebox.html(time);

                        var opt = '',
                            i = 0;

                        for( i = parseInt(options.yearStart,10)+options.yearOffset;i<= parseInt(options.yearEnd,10)+options.yearOffset;i++ ) {
                            opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getFullYear()==i?'xdsoft_current':'')+'" data-value="'+i+'">'+i+'</div>';
                        }
                        yearselect.children().eq(0)
                                                .html(opt);

                        for( i = 0,opt = '';i<= 11;i++ ) {
                            opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getMonth()==i?'xdsoft_current':'')+'" data-value="'+i+'">'+options.i18n[options.lang].months[i]+'</div>';
                        }
                        monthselect.children().eq(0).html(opt);
                        $(this).trigger('generate.xdsoft');
                        event.stopPropagation();
                    })
                    .on('afterOpen.xdsoft',function() {
                        if( options.timepicker && timebox.find('.xdsoft_current').length ) {
                            var pheight = timeboxparent[0].clientHeight,
                                height = timebox[0].offsetHeight,
                                top = timebox.find('.xdsoft_current').index()*options.timeHeightInTimePicker+1;
                            if( (height-pheight)<top )
                                top = height-pheight;
                            timebox.css('marginTop','-'+parseInt(top)+'px');
                            timeboxparent.trigger('scroll_element.xdsoft_scroller',[parseInt(top)/(height-pheight)]);
                        }
                    });
                var timerclick = 0;
                calendar
                    .on('click.xdsoft','td',function() {
                        timerclick++;
                        var $this = $(this),
                            currentTime = _xdsoft_datetime.currentTime;
                        if( $this.hasClass('xdsoft_disabled') )
                            return false;

                        currentTime.setFullYear( $this.data('year') );
                        currentTime.setDate( $this.data('date') );
                        currentTime.setMonth( $this.data('month') );
                        datetimepicker.trigger('select.xdsoft',[currentTime]);

                        input.val( _xdsoft_datetime.str() );
                        if( (timerclick>1||(options.closeOnDateSelect===true||( options.closeOnDateSelect===0&&!options.timepicker )))&&!options.inline ) {
                            datetimepicker.trigger('close.xdsoft');
                        }

                        if( options.onSelectDate && options.onSelectDate.call ) {
                            options.onSelectDate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        }

                        datetimepicker.data('changed',true);
                        datetimepicker.trigger('xchange.xdsoft');
                        datetimepicker.trigger('changedatetime.xdsoft');
                        setTimeout(function(){
                            timerclick = 0;
                        },200);
                    });

                timebox
                    .on('click.xdsoft','div',function() {
                        var $this = $(this),
                            currentTime = _xdsoft_datetime.currentTime;
                        if( $this.hasClass('xdsoft_disabled') )
                            return false;
                        currentTime.setHours($this.data('hour'));
                        currentTime.setMinutes($this.data('minute'));
                        datetimepicker.trigger('select.xdsoft',[currentTime]);

                        datetimepicker.data('input').val( _xdsoft_datetime.str() );

                        !options.inline&&datetimepicker.trigger('close.xdsoft');

                        if( options.onSelectTime&&options.onSelectTime.call ) {
                            options.onSelectTime.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        }
                        datetimepicker.data('changed',true);
                        datetimepicker.trigger('xchange.xdsoft');
                        datetimepicker.trigger('changedatetime.xdsoft');
                    });

                datetimepicker.mousewheel&&datepicker.mousewheel(function(event, delta, deltaX, deltaY) {
                    if( !options.scrollMonth )
                        return true;
                    if( delta<0 )
                        _xdsoft_datetime.nextMonth();
                    else
                        _xdsoft_datetime.prevMonth();
                    return false;
                });

                datetimepicker.mousewheel&&timeboxparent.unmousewheel().mousewheel(function(event, delta, deltaX, deltaY) {
                    if( !options.scrollTime )
                        return true;
                    var pheight = timeboxparent[0].clientHeight,
                        height = timebox[0].offsetHeight,
                        top = Math.abs(parseInt(timebox.css('marginTop'))),
                        fl = true;
                    if( delta<0 && (height-pheight)-options.timeHeightInTimePicker>=top ) {
                        timebox.css('marginTop','-'+(top+options.timeHeightInTimePicker)+'px');
                        fl = false;
                    }else if( delta>0&&top-options.timeHeightInTimePicker>=0 ) {
                        timebox.css('marginTop','-'+(top-options.timeHeightInTimePicker)+'px');
                        fl = false;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller',[Math.abs(parseInt(timebox.css('marginTop'))/(height-pheight))]);
                    event.stopPropagation();
                    return fl;
                });

                datetimepicker
                    .on('changedatetime.xdsoft',function() {
                        if( options.onChangeDateTime&&options.onChangeDateTime.call )
                            options.onChangeDateTime.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                    })
                    .on('generate.xdsoft',function() {
                        if( options.onGenerate&&options.onGenerate.call )
                            options.onGenerate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                    });

                var current_time_index = 0;
                input.mousewheel&&input.mousewheel(function( event, delta, deltaX, deltaY ) {
                    if( !options.scrollInput )
                        return true;
                    if( !options.datepicker && options.timepicker ) {
                        current_time_index = timebox.find('.xdsoft_current').length?timebox.find('.xdsoft_current').eq(0).index():0;
                        if( current_time_index+delta>=0&&current_time_index+delta<timebox.children().length )
                            current_time_index+=delta;
                        timebox.children().eq(current_time_index).length&&timebox.children().eq(current_time_index).trigger('mousedown');
                        return false;
                    }else if( options.datepicker && !options.timepicker ) {
                        datepicker.trigger( event, [delta, deltaX, deltaY]);
                        input.val&&input.val( _xdsoft_datetime.str() );
                        datetimepicker.trigger('changedatetime.xdsoft');
                        return false;
                    }
                });
                var setPos = function() {
                    var offset = datetimepicker.data('input').offset(), top = offset.top+datetimepicker.data('input')[0].offsetHeight-1, left = offset.left;
                    if( top+datetimepicker[0].offsetHeight>$(window).height()+$(window).scrollTop() )
                        top = offset.top-datetimepicker[0].offsetHeight+1;
                    if( left+datetimepicker[0].offsetWidth>$(window).width() )
                        left = offset.left-datetimepicker[0].offsetWidth+datetimepicker.data('input')[0].offsetWidth;
                    datetimepicker.css({
                        left:left,
                        top:top
                    });
                };
                datetimepicker
                    .on('open.xdsoft', function() {
                        var onShow = true;
                        if( options.onShow&&options.onShow.call) {
                            onShow = options.onShow.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        }
                        if( onShow!==false ) {
                            datetimepicker.show();
                            datetimepicker.trigger('afterOpen.xdsoft');
                            setPos();
                            $(window)
                                .off('resize.xdsoft',setPos)
                                .on('resize.xdsoft',setPos);

                            if( options.closeOnWithoutClick ) {
                                $([document.body,window]).on('mousedown.xdsoft',function arguments_callee6() {
                                    datetimepicker.trigger('close.xdsoft');
                                    $([document.body,window]).off('mousedown.xdsoft',arguments_callee6);
                                });
                            }
                        }
                    })
                    .on('close.xdsoft', function( event ) {
                        var onClose = true;
                        if( options.onClose&&options.onClose.call ) {
                            onClose=options.onClose.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
                        }
                        if( onClose!==false&&!options.opened&&!options.inline ) {
                            datetimepicker.hide();
                        }
                        event.stopPropagation();
                    })
                    .data('input',input);

                var timer = 0,
                    timer1 = 0;

                datetimepicker.data('xdsoft_datetime',_xdsoft_datetime);
                datetimepicker.setOptions(options);

                var ct = options.value?options.value:(input&&input.val&&input.val())?input.val():'';
                if( ct && _xdsoft_datetime.isValidDate(ct = Date.parseDate(ct, options.format)) ) {
                    datetimepicker.data('changed',true);
                }else
                    ct = '';

                _xdsoft_datetime.setCurrentTime( ct?ct:0 );

                datetimepicker.trigger('afterOpen.xdsoft');

                input
                    .data( 'xdsoft_datetimepicker',datetimepicker )
                    .on('open.xdsoft focusin.xdsoft mousedown.xdsoft',function(event) {
                        if( input.is(':disabled')||input.is(':hidden')||!input.is(':visible') )
                            return;
                        clearTimeout(timer);
                        timer = setTimeout(function() {
                            if( input.is(':disabled')||input.is(':hidden')||!input.is(':visible') )
                                return;
                            _xdsoft_datetime.setCurrentTime((input&&input.val&&input.val())?input.val():0);
                            datetimepicker.trigger('open.xdsoft');
                        },100);
                    })
                    .on('keydown.xdsoft',function( event ) {
                        var val = this.value,
                            key = event.which;
                        switch(true) {
                            case !!~([ENTER].indexOf(key)):
                                var elementSelector = $("input:visible,textarea:visible");
                                datetimepicker.trigger('close.xdsoft');
                                elementSelector.eq(elementSelector.index(this) + 1).focus();
                            return false;
                            case !!~[TAB].indexOf(key):
                                datetimepicker.trigger('close.xdsoft');
                            return true;
                        }
                    });
            },
            destroyDateTimePicker = function( input ) {
                var datetimepicker = input.data('xdsoft_datetimepicker');
                if( datetimepicker ) {
                    datetimepicker.data('xdsoft_datetime',null);
                    datetimepicker.remove();
                    input
                        .data( 'xdsoft_datetimepicker',null )
                        .off( 'open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft' );
                    $(window).off('resize.xdsoft');
                    $([window,document.body]).off('mousedown.xdsoft');
                    input.unmousewheel&&input.unmousewheel();
                }
            };
        $(document)
            .off('keydown.xdsoftctrl keyup.xdsoftctrl')
            .on('keydown.xdsoftctrl',function(e) {
                if ( e.keyCode == CTRLKEY )
                    ctrlDown = true;
            })
            .on('keyup.xdsoftctrl',function(e) {
                if ( e.keyCode == CTRLKEY )
                    ctrlDown = false;
            });
        return this.each(function() {
            var datetimepicker;
            if( datetimepicker = $(this).data('xdsoft_datetimepicker') ) {
                if( $.type(opt) === 'string' ) {
                    switch(opt) {
                        case 'show':
                            $(this).select().focus();
                            datetimepicker.trigger( 'open.xdsoft' );
                        break;
                        case 'hide':
                            datetimepicker.trigger('close.xdsoft');
                        break;
                        case 'destroy':
                            destroyDateTimePicker($(this));
                        break;
                        case 'reset':
                            this.value = this.defaultValue;
                            if(!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format)))
                                datetimepicker.data('changed',false);
                            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                        break;
                    }
                }else{
                    datetimepicker
                        .setOptions(opt);
                }
                return 0;
            }else
                ($.type(opt) !== 'string')&&createDateTimePicker($(this));
        });
    };
})( jQuery );

//http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/
/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */
Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(format) {if(Date.formatFunctions[format]==null) {Date.createNewFormat(format)}var func=Date.formatFunctions[format];return this[func]()};Date.createNewFormat=function(format) {var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var code="Date.prototype."+funcName+" = function() {return ";var special=false;var ch='';for(var i=0;i<format.length;++i) {ch=format.charAt(i);if(!special&&ch=="\\") {special=true}else if(special) {special=false;code+="'"+String.escape(ch)+"' + "}else{code+=Date.getFormatCode(ch)}}eval(code.substring(0,code.length-3)+";}")};Date.getFormatCode=function(character) {switch(character) {case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(character)+"' + "}};Date.parseDate=function(input,format) {if(Date.parseFunctions[format]==null) {Date.createParser(format)}var func=Date.parseFunctions[format];return Date[func](input)};Date.createParser=function(format) {var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\n"+"var y = -1, m = -1, d = -1, h = -1, i = -1, s = -1;\n"+"var d = new Date();\n"+"y = d.getFullYear();\n"+"m = d.getMonth();\n"+"d = d.getDate();\n"+"var results = input.match(Date.parseRegexes["+regexNum+"]);\n"+"if (results && results.length > 0) {";var regex="";var special=false;var ch='';for(var i=0;i<format.length;++i) {ch=format.charAt(i);if(!special&&ch=="\\") {special=true}else if(special) {special=false;regex+=String.escape(ch)}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c) {code+=obj.c}}}code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n"+"{return new Date(y, m, d, h, i, s);}\n"+"else if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n"+"{return new Date(y, m, d, h, i);}\n"+"else if (y > 0 && m >= 0 && d > 0 && h >= 0)\n"+"{return new Date(y, m, d, h);}\n"+"else if (y > 0 && m >= 0 && d > 0)\n"+"{return new Date(y, m, d);}\n"+"else if (y > 0 && m >= 0)\n"+"{return new Date(y, m);}\n"+"else if (y > 0)\n"+"{return new Date(y);}\n"+"}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$");eval(code)};Date.formatCodeToRegex=function(character,currentGroup) {switch(character) {case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+currentGroup+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:0,c:null,s:"(?:\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+currentGroup+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+currentGroup+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+currentGroup+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+currentGroup+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+currentGroup+"], 10);\n"+"y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+currentGroup+"] == 'am') {\n"+"if (h == 12) { h = 0; }\n"+"} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+currentGroup+"] == 'AM') {\n"+"if (h == 12) { h = 0; }\n"+"} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+currentGroup+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+currentGroup+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+currentGroup+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(character)}}};Date.prototype.getTimezone=function() {return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")};Date.prototype.getGMTOffset=function() {return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")};Date.prototype.getDayOfYear=function() {var num=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var i=0;i<this.getMonth();++i) {num+=Date.daysInMonth[i]}return num+this.getDate()-1};Date.prototype.getWeekOfYear=function() {var now=this.getDayOfYear()+(4-this.getDay());var jan1=new Date(this.getFullYear(),0,1);var then=(7-jan1.getDay()+4);document.write(then);return String.leftPad(((now-then)/7)+1,2,"0")};Date.prototype.isLeapYear=function() {var year=this.getFullYear();return((year&3)==0&&(year%100||(year%400==0&&year)))};Date.prototype.getFirstDayOfMonth=function() {var day=(this.getDay()-(this.getDate()-1))%7;return(day<0)?(day+7):day};Date.prototype.getLastDayOfMonth=function() {var day=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(day<0)?(day+7):day};Date.prototype.getDaysInMonth=function() {Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()]};Date.prototype.getSuffix=function() {switch(this.getDate()) {case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}};String.escape=function(string) {return string.replace(/('|\\)/g,"\\$1")};String.leftPad=function(val,size,ch) {var result=new String(val);if(ch==null) {ch=" "}while(result.length<size) {result=ch+result}return result};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};

//https://github.com/brandonaaron/jquery-mousewheel/blob/master/jquery.mousewheel.js
/*
 * Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 *
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */
(function(factory) {if(typeof define==='function'&&define.amd) {define(['jquery'],factory)}else if(typeof exports==='object') {module.exports=factory}else{factory(jQuery)}}(function($) {var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'];var toBind='onwheel'in document||document.documentMode>=9?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'];var lowestDelta,lowestDeltaXY;if($.event.fixHooks) {for(var i=toFix.length;i;) {$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}$.event.special.mousewheel={setup:function() {if(this.addEventListener) {for(var i=toBind.length;i;) {this.addEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=handler}},teardown:function() {if(this.removeEventListener) {for(var i=toBind.length;i;) {this.removeEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=null}}};$.fn.extend({mousewheel:function(fn) {return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn) {return this.unbind("mousewheel",fn)}});function handler(event) {var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0,absDeltaXY=0,fn;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta) {delta=orgEvent.wheelDelta}if(orgEvent.detail) {delta=orgEvent.detail*-1}if(orgEvent.deltaY) {deltaY=orgEvent.deltaY*-1;delta=deltaY}if(orgEvent.deltaX) {deltaX=orgEvent.deltaX;delta=deltaX*-1}if(orgEvent.wheelDeltaY!==undefined) {deltaY=orgEvent.wheelDeltaY}if(orgEvent.wheelDeltaX!==undefined) {deltaX=orgEvent.wheelDeltaX*-1}absDelta=Math.abs(delta);if(!lowestDelta||absDelta<lowestDelta) {lowestDelta=absDelta}absDeltaXY=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDeltaXY||absDeltaXY<lowestDeltaXY) {lowestDeltaXY=absDeltaXY}fn=delta>0?'floor':'ceil';delta=Math[fn](delta/lowestDelta);deltaX=Math[fn](deltaX/lowestDeltaXY);deltaY=Math[fn](deltaY/lowestDeltaXY);args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args)}}));



/*!
 *  GMAP3 Plugin for JQuery
 *  Version   : 5.1.1
 *  Date      : 2013-05-25
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *
 *  Copyright (c) 2010-2012 Jean-Baptiste DEMONTE
 *  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following
 *     disclaimer in the documentation and/or other materials provided
 *     with the distribution.
 *   - Neither the name of the author nor the names of its contributors
 *     may be used to endorse or promote products derived from this
 *     software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
;(function ($, undef) {

  /***************************************************************************/
  /*                           GMAP3 DEFAULTS                                */
  /***************************************************************************/
  // defaults are defined later in the code to pass the rails asset pipeline and
  //jasmine while google library is not loaded
  var defaults, gId = 0;

  function initDefaults() {
    if (!defaults) {
      defaults = {
        verbose: false,
        queryLimit: {
          attempt: 5,
          delay: 250, // setTimeout(..., delay + random);
          random: 250
        },
        classes: {
          Map               : google.maps.Map,
          Marker            : google.maps.Marker,
          InfoWindow        : google.maps.InfoWindow,
          Circle            : google.maps.Circle,
          Rectangle         : google.maps.Rectangle,
          OverlayView       : google.maps.OverlayView,
          StreetViewPanorama: google.maps.StreetViewPanorama,
          KmlLayer          : google.maps.KmlLayer,
          TrafficLayer      : google.maps.TrafficLayer,
          BicyclingLayer    : google.maps.BicyclingLayer,
          GroundOverlay     : google.maps.GroundOverlay,
          StyledMapType     : google.maps.StyledMapType,
          ImageMapType      : google.maps.ImageMapType
        },
        map: {
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          center: [46.578498, 2.457275],
          zoom: 2
        },
        overlay: {
          pane: "floatPane",
          content: "",
          offset: {
            x: 0,
            y: 0
          }
        },
        geoloc: {
          getCurrentPosition: {
            maximumAge: 60000,
            timeout: 5000
          }
        }
      }
    }
  }

  function globalId(id, simulate){
    return id !== undef ? id : "gmap3_" + (simulate ? gId + 1 : ++gId);
  }

  /**
   * Return true if current version of Google Maps is equal or above to these in parameter
   * @param version {string} Minimal version required
   * @return {Boolean}
   */
  function googleVersionMin(version) {
    var i,
      gmVersion = google.maps.version.split(".");
    version = version.split(".");
    for(i = 0; i < gmVersion.length; i++) {
      gmVersion[i] = parseInt(gmVersion[i], 10);
    }
    for(i = 0; i < version.length; i++) {
      version[i] = parseInt(version[i], 10);
      if (gmVersion.hasOwnProperty(i)) {
        if (gmVersion[i] < version[i]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  /**
   * attach events from a container to a sender 
   * todo[
   *  events => { eventName => function, }
   *  onces  => { eventName => function, }  
   *  data   => mixed data         
   * ]
   **/
  function attachEvents($container, args, sender, id, senders){
    if (args.todo.events || args.todo.onces) {
      var context = {
        id: id,
        data: args.todo.data,
        tag: args.todo.tag
      };
      if (args.todo.events){
        $.each(args.todo.events, function(name, f){
          var that = $container, fn = f;
          if ($.isArray(f)) {
            that = f[0];
            fn = f[1]
          }
          google.maps.event.addListener(sender, name, function(event) {
            fn.apply(that, [senders ? senders : sender, event, context]);
          });
        });
      }
      if (args.todo.onces){
        $.each(args.todo.onces, function(name, f){
          var that = $container, fn = f;
          if ($.isArray(f)) {
            that = f[0];
            fn = f[1]
          }
          google.maps.event.addListenerOnce(sender, name, function(event) {
            fn.apply(that, [senders ? senders : sender, event, context]);
          });
        });
      }
    }
  }

  /***************************************************************************/
  /*                                STACK                                    */
  /***************************************************************************/
  
  function Stack (){
    var st = [];
    this.empty = function (){
      return !st.length;
    };
    this.add = function(v){
      st.push(v);
    };
    this.get = function (){
      return st.length ? st[0] : false;
    };
    this.ack = function (){
      st.shift();
    };
  }

  /***************************************************************************/
  /*                                TASK                                     */
  /***************************************************************************/
  
  function Task(ctx, onEnd, todo){
    var session = {},
      that = this, 
      current,
      resolve = {
        latLng:{ // function => bool (=> address = latLng)
          map:false, 
          marker:false, 
          infowindow:false, 
          circle:false, 
          overlay: false,
          getlatlng: false,
          getmaxzoom: false,
          getelevation: false,
          streetviewpanorama: false,
          getaddress: true
        },
        geoloc:{
          getgeoloc: true
        }
      };
      
    if (typeof todo === "string"){
      todo =  unify(todo);
    }
  
    function unify(todo){
      var result = {};
      result[todo] = {};
      return result;
    }
    
    function next(){
      var k;
      for(k in todo){
        if (k in session){ // already run
          continue;
        }
        return k;
      }
    }
    
    this.run = function (){
      var k, opts;
      while(k = next()){
        if (typeof ctx[k] === "function"){
          current = k;
          opts = $.extend(true, {}, defaults[k] || {}, todo[k].options || {});
          if (k in resolve.latLng){
            if (todo[k].values){
              resolveAllLatLng(todo[k].values, ctx, ctx[k], {todo:todo[k], opts:opts, session:session});
            } else {
              resolveLatLng(ctx, ctx[k], resolve.latLng[k], {todo:todo[k], opts:opts, session:session});
            }
          } else if (k in resolve.geoloc){
            geoloc(ctx, ctx[k], {todo:todo[k], opts:opts, session:session});
          } else {
            ctx[k].apply(ctx, [{todo:todo[k], opts:opts, session:session}]);
          }
          return; // wait until ack
        } else {
          session[k] = null;
        }
      }
      onEnd.apply(ctx, [todo, session]);
    };
    
    this.ack = function(result){
      session[current] = result;
      that.run.apply(that, []);
    };
  }
  
  function getKeys(obj){
    var k, keys = [];
    for(k in obj){
      keys.push(k);
    }
    return keys;
  }
  
  function tuple(args, value){
    var todo = {};
    
    // "copy" the common data
    if (args.todo){
      for(var k in args.todo){
        if ((k !== "options") && (k !== "values")){
          todo[k] = args.todo[k];
        }
      }
    }
    // "copy" some specific keys from value first else args.todo
    var i, keys = ["data", "tag", "id", "events",  "onces"];
    for(i=0; i<keys.length; i++){
      copyKey(todo, keys[i], value, args.todo);
    }
    
    // create an extended options
    todo.options = $.extend({}, args.opts || {}, value.options || {});
    
    return todo;
  }
  
  /**
   * copy a key content
   **/
  function copyKey(target, key){
    for(var i=2; i<arguments.length; i++){
      if (key in arguments[i]){
        target[key] = arguments[i][key];
        return;
      }
    }
  }
  
  /***************************************************************************/
  /*                             GEOCODERCACHE                               */
  /***************************************************************************/
  
  function GeocoderCache(){
    var cache = [];
    
    this.get = function(request){
      if (cache.length){
        var i, j, k, item, eq,
          keys = getKeys(request);
        for(i=0; i<cache.length; i++){
          item = cache[i];
          eq = keys.length == item.keys.length;
          for(j=0; (j<keys.length) && eq; j++){
            k = keys[j];
            eq = k in item.request;
            if (eq){
              if ((typeof request[k] === "object") && ("equals" in request[k]) && (typeof request[k] === "function")){
                eq = request[k].equals(item.request[k]);
              } else{
                eq = request[k] === item.request[k];
              }
            }
          }
          if (eq){
            return item.results;
          }
        }
      }
    };
    
    this.store = function(request, results){
      cache.push({request:request, keys:getKeys(request), results:results});
    };
  }

  /***************************************************************************/
  /*                                OVERLAYVIEW                              */
  /***************************************************************************/
  function OverlayView(map, opts, latLng, $div) {
    var that = this, listeners = [];
    
    defaults.classes.OverlayView.call(this);
    this.setMap(map);
    
    this.onAdd = function() {
        var panes = this.getPanes();
        if (opts.pane in panes) {
            $(panes[opts.pane]).append($div);
        }
        $.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(i, name){
            listeners.push(
                google.maps.event.addDomListener($div[0], name, function(e) {
                    $.Event(e).stopPropagation();
                    google.maps.event.trigger(that, name, [e]);
                    that.draw();
                })
            );
        });
        listeners.push(
            google.maps.event.addDomListener($div[0], "contextmenu", function(e) {
                $.Event(e).stopPropagation();
                google.maps.event.trigger(that, "rightclick", [e]);
                that.draw();
            })
        );
    };
    this.getPosition = function(){
        return latLng;
    };
    this.setPosition = function(newLatLng){
        latLng = newLatLng;
        this.draw();
    };
    this.draw = function() {
        var ps = this.getProjection().fromLatLngToDivPixel(latLng);
        $div
            .css("left", (ps.x+opts.offset.x) + "px")
            .css("top" , (ps.y+opts.offset.y) + "px");
    };
    this.onRemove = function() {
      for (var i = 0; i < listeners.length; i++) {
        google.maps.event.removeListener(listeners[i]);
      }
      $div.remove();
    };
    this.hide = function() {
      $div.hide();
    };
    this.show = function() {
      $div.show();
    };
    this.toggle = function() {
      if ($div) {
        if ($div.is(":visible")){
          this.show();
        } else {
          this.hide();
        }
      }
    };
    this.toggleDOM = function() {
      if (this.getMap()) {
        this.setMap(null);
      } else {
        this.setMap(map);
      }
    };
    this.getDOMElement = function() {
      return $div[0];
    };
  }

  /***************************************************************************/
  /*                              CLUSTERING                                 */
  /***************************************************************************/
      
  /**
   * Usefull to get a projection
   * => done in a function, to let dead-code analyser works without google library loaded    
   **/
  function newEmptyOverlay(map, radius){
    function Overlay(){ 
      this.onAdd = function(){};
      this.onRemove = function(){};
      this.draw = function(){};
      return defaults.classes.OverlayView.apply(this, []); 
    }
    Overlay.prototype = defaults.classes.OverlayView.prototype;
    var obj = new Overlay();
    obj.setMap(map); 
    return obj;
  }
  
  /**
   * Class InternalClusterer
   * This class manage clusters thanks to "todo" objects
   * 
   * Note: 
   * Individuals marker are created on the fly thanks to the todo objects, they are 
   * first set to null to keep the indexes synchronised with the todo list
   * This is the "display" function, set by the gmap3 object, which uses theses data 
   * to create markers when clusters are not required
   * To remove a marker, the objects are deleted and set not null in arrays
   *    markers[key]
   *      = null : marker exist but has not been displayed yet
   *      = false : marker has been removed       
   **/
  function InternalClusterer($container, map, raw){
    var updating = false,
      updated = false,
      redrawing = false,
      ready = false,
      enabled = true,
      that = this,
      events =  [],
      store = {},   // combin of index (id1-id2-...) => object
      ids = {},     // unique id => index
      idxs = {},    // index => unique id
      markers = [], // index => marker
      todos = [],   // index => todo or null if removed
      values = [],  // index => value
      overlay = newEmptyOverlay(map, raw.radius),
      timer, projection,
      ffilter, fdisplay, ferror; // callback function
      
    main();

    function prepareMarker(index) {
      if (!markers[index]) {
        delete todos[index].options.map;
        markers[index] = new defaults.classes.Marker(todos[index].options);
        attachEvents($container, {todo: todos[index]}, markers[index], todos[index].id);
      }
    }

    /**
     * return a marker by its id, null if not yet displayed and false if no exist or removed
     **/
    this.getById = function(id){
      if (id in ids) {
        prepareMarker(ids[id]);
        return  markers[ids[id]];
      }
      return false;
    };

    /**
     * remove one object from the store
     **/
    this.rm = function (id) {
      var index = ids[id];
      if (markers[index]){ // can be null
        markers[index].setMap(null);
      }
      delete markers[index];
      markers[index] = false;

      delete todos[index];
      todos[index] = false;

      delete values[index];
      values[index] = false;

      delete ids[id];
      delete idxs[index];
      updated = true;
    };
    
    /**
     * remove a marker by its id
     **/
    this.clearById = function(id){
      if (id in ids){
        this.rm(id);
        return true;
      }
    };

    /**
     * remove objects from the store
     **/
    this.clear = function(last, first, tag){
      var start, stop, step, index, i,
          list = [],
          check = ftag(tag);
      if (last) {
        start = todos.length - 1;
        stop = -1;
        step = -1;
      } else {
        start = 0;
        stop =  todos.length;
        step = 1;
      }
      for (index = start; index != stop; index += step) {
        if (todos[index]) {
          if (!check || check(todos[index].tag)){
            list.push(idxs[index]);
            if (first || last) {
              break;
            }
          }
        }
      }
      for (i = 0; i < list.length; i++) {
        this.rm(list[i]);
      }
    };
    
    // add a "marker todo" to the cluster
    this.add = function(todo, value){
      todo.id = globalId(todo.id);
      this.clearById(todo.id);
      ids[todo.id] = markers.length;
      idxs[markers.length] = todo.id;
      markers.push(null); // null = marker not yet created / displayed
      todos.push(todo);
      values.push(value);
      updated = true;
    };
    
    // add a real marker to the cluster
    this.addMarker = function(marker, todo){
      todo = todo || {};
      todo.id = globalId(todo.id);
      this.clearById(todo.id);
      if (!todo.options){
        todo.options = {};
      }
      todo.options.position = marker.getPosition();
      attachEvents($container, {todo:todo}, marker, todo.id);
      ids[todo.id] = markers.length;
      idxs[markers.length] = todo.id;
      markers.push(marker);
      todos.push(todo);
      values.push(todo.data || {});
      updated = true;
    };
    
    // return a "marker todo" by its index 
    this.todo = function(index){
      return todos[index];
    };
    
    // return a "marker value" by its index 
    this.value = function(index){
      return values[index];
    };

    // return a marker by its index
    this.marker = function(index){
      if (index in markers) {
        prepareMarker(index);
        return  markers[index];
      }
      return false;
    };

    // return a marker by its index
    this.markerIsSet = function(index){
      return Boolean(markers[index]);
    };
    
    // store a new marker instead if the default "false"
    this.setMarker = function(index, marker){
      markers[index] = marker;
    };
    
    // link the visible overlay to the logical data (to hide overlays later)
    this.store = function(cluster, obj, shadow){
      store[cluster.ref] = {obj:obj, shadow:shadow};
    };
    
    // free all objects
    this.free = function(){
      for(var i = 0; i < events.length; i++){
        google.maps.event.removeListener(events[i]);
      }
      events = [];
      
      $.each(store, function(key){
        flush(key);
      });
      store = {};
      
      $.each(todos, function(i){
        todos[i] = null;
      });
      todos = [];
      
      $.each(markers, function(i){
        if (markers[i]){ // false = removed
          markers[i].setMap(null);
          delete markers[i];
        }
      });
      markers = [];
      
      $.each(values, function(i){
        delete values[i];
      });
      values = [];
      
      ids = {};
      idxs = {};
    };
    
    // link the display function
    this.filter = function(f){
      ffilter = f;
      redraw();
    };
    
    // enable/disable the clustering feature
    this.enable = function(value){
      if (enabled != value){
        enabled = value;
        redraw();
      }
    };
    
    // link the display function
    this.display = function(f){
      fdisplay = f;
    };
    
    // link the errorfunction
    this.error = function(f){
      ferror = f;
    };
    
    // lock the redraw
    this.beginUpdate = function(){
      updating = true;
    };
    
    // unlock the redraw

    this.endUpdate = function(){
      updating = false;
      if (updated){
        redraw();
      }
    };

    // extends current bounds with internal markers
    this.autofit = function(bounds){
      for(var i=0; i<todos.length; i++){
        if (todos[i]){
          bounds.extend(todos[i].options.position);
        }
      }
    };
    
    // bind events
    function main(){
      projection = overlay.getProjection();
      if (!projection){
        setTimeout(function(){
          main.apply(that, []);
        },
        25);
        return;
      }
      ready = true;
      events.push(google.maps.event.addListener(map, "zoom_changed", function(){delayRedraw();}));
      events.push(google.maps.event.addListener(map, "bounds_changed", function(){delayRedraw();}));
      redraw();
    }
    
    // flush overlays
    function flush(key){
      if (typeof store[key] === "object"){ // is overlay
        if (typeof(store[key].obj.setMap) === "function") {
          store[key].obj.setMap(null);
        }
        if (typeof(store[key].obj.remove) === "function") {
          store[key].obj.remove();
        }
        if (typeof(store[key].shadow.remove) === "function") {
          store[key].obj.remove();
        }
        if (typeof(store[key].shadow.setMap) === "function") {
          store[key].shadow.setMap(null);
        }
        delete store[key].obj;
        delete store[key].shadow;
      } else if (markers[key]){ // marker not removed
        markers[key].setMap(null);
        // don't remove the marker object, it may be displayed later
      }
      delete store[key];
    }
    
    /**
     * return the distance between 2 latLng couple into meters
     * Params :   
     *  Lat1, Lng1, Lat2, Lng2
     *  LatLng1, Lat2, Lng2
     *  Lat1, Lng1, LatLng2
     *  LatLng1, LatLng2
     **/
    function distanceInMeter(){
      var lat1, lat2, lng1, lng2, e, f, g, h;
      if (arguments[0] instanceof google.maps.LatLng){
        lat1 = arguments[0].lat();
        lng1 = arguments[0].lng();
        if (arguments[1] instanceof google.maps.LatLng){
          lat2 = arguments[1].lat();
          lng2 = arguments[1].lng();
        } else {
          lat2 = arguments[1];
          lng2 = arguments[2];
        }
      } else {
        lat1 = arguments[0];
        lng1 = arguments[1];
        if (arguments[2] instanceof google.maps.LatLng){
          lat2 = arguments[2].lat();
          lng2 = arguments[2].lng();
        } else {
          lat2 = arguments[2];
          lng2 = arguments[3];
        }
      }
      e = Math.PI*lat1/180;
      f = Math.PI*lng1/180;
      g = Math.PI*lat2/180;
      h = Math.PI*lng2/180;
      return 1000*6371 * Math.acos(Math.min(Math.cos(e)*Math.cos(g)*Math.cos(f)*Math.cos(h)+Math.cos(e)*Math.sin(f)*Math.cos(g)*Math.sin(h)+Math.sin(e)*Math.sin(g),1));
    }
    
    // extend the visible bounds 
    function extendsMapBounds(){
      var radius = distanceInMeter(map.getCenter(), map.getBounds().getNorthEast()), 
        circle = new google.maps.Circle({
          center: map.getCenter(),
          radius: 1.25 * radius // + 25%
        });
      return circle.getBounds();
    }
    
    // return an object where keys are store keys 
    function getStoreKeys(){
      var keys = {}, k;
      for(k in store){
        keys[k] = true;
      }
      return keys;
    }
    
    // async the delay function
    function delayRedraw(){
      clearTimeout(timer);
      timer = setTimeout(function(){
        redraw();
      },
      25);
    }
    
    // generate bounds extended by radius
    function extendsBounds(latLng) {
      var p = projection.fromLatLngToDivPixel(latLng),
        ne = projection.fromDivPixelToLatLng(new google.maps.Point(p.x+raw.radius, p.y-raw.radius)),
        sw = projection.fromDivPixelToLatLng(new google.maps.Point(p.x-raw.radius, p.y+raw.radius));
      return new google.maps.LatLngBounds(sw, ne);
    }
    
    // run the clustering process and call the display function
    function redraw(){
      if (updating || redrawing || !ready){
        return;
      }

      var keys = [], used = {},
        zoom = map.getZoom(),
        forceDisabled = ("maxZoom" in raw) && (zoom > raw.maxZoom),
        previousKeys = getStoreKeys(),
        i, j, k, indexes, check = false, bounds, cluster, position, previous, lat, lng, loop;

      // reset flag
      updated = false;

      if (zoom > 3){
        // extend the bounds of the visible map to manage clusters near the boundaries
        bounds = extendsMapBounds();

        // check contain only if boundaries are valid
        check = bounds.getSouthWest().lng() < bounds.getNorthEast().lng();
      }

      // calculate positions of "visibles" markers (in extended bounds)
      for(i=0; i<todos.length; i++){
        if (todos[i] && (!check || bounds.contains(todos[i].options.position)) && (!ffilter || ffilter(values[i]))){
          keys.push(i);
        }
      }

      // for each "visible" marker, search its neighbors to create a cluster
      // we can't do a classical "for" loop, because, analysis can bypass a marker while focusing on cluster
      while(1){
        i=0;
        while(used[i] && (i<keys.length)){ // look for the next marker not used
          i++;
        }
        if (i == keys.length){
          break;
        }

        indexes = [];

        if (enabled && !forceDisabled){
          loop = 10;
          do{
            previous = indexes;
            indexes = [];
            loop--;

            if (previous.length){
              position = bounds.getCenter()
            } else {
              position = todos[ keys[i] ].options.position;
            }
            bounds = extendsBounds(position);

            for(j=i; j<keys.length; j++){
              if (used[j]){
                continue;
              }
              if (bounds.contains(todos[ keys[j] ].options.position)){
                indexes.push(j);
              }
            }
          } while( (previous.length < indexes.length) && (indexes.length > 1) && loop);
        } else {
          for(j=i; j<keys.length; j++){
            if (used[j]){
              continue;
            }
            indexes.push(j);
            break;
          }
        }

        cluster = {indexes:[], ref:[]};
        lat = lng = 0;
        for(k=0; k<indexes.length; k++){
          used[ indexes[k] ] = true;
          cluster.indexes.push(keys[indexes[k]]);
          cluster.ref.push(keys[indexes[k]]);
          lat += todos[ keys[indexes[k]] ].options.position.lat();
          lng += todos[ keys[indexes[k]] ].options.position.lng();
        }
        lat /= indexes.length;
        lng /= indexes.length;
        cluster.latLng = new google.maps.LatLng(lat, lng);

        cluster.ref = cluster.ref.join("-");

        if (cluster.ref in previousKeys){ // cluster doesn't change
          delete previousKeys[cluster.ref]; // remove this entry, these still in this array will be removed
        } else { // cluster is new
          if (indexes.length === 1){ // alone markers are not stored, so need to keep the key (else, will be displayed every time and marker will blink)
            store[cluster.ref] = true;
          }
          fdisplay(cluster);
        }
      }

      // flush the previous overlays which are not still used
      $.each(previousKeys, function(key){
        flush(key);
      });
      redrawing = false;
    }
  }
  
  /**
   * Class Clusterer
   * a facade with limited method for external use
   **/
  function Clusterer(id, internalClusterer){
    this.id = function(){
      return id;
    };
    this.filter = function(f){
      internalClusterer.filter(f);
    };
    this.enable = function(){
      internalClusterer.enable(true);
    };
    this.disable = function(){
      internalClusterer.enable(false);
    };
    this.add = function(marker, todo, lock){
      if (!lock) {
        internalClusterer.beginUpdate();
      }
      internalClusterer.addMarker(marker, todo);
      if (!lock) {
        internalClusterer.endUpdate();
      }
    };
    this.getById = function(id){
      return internalClusterer.getById(id);
    };
    this.clearById = function(id, lock){
      var result;
      if (!lock) {
        internalClusterer.beginUpdate();
      }
      result = internalClusterer.clearById(id);
      if (!lock) {
        internalClusterer.endUpdate();
      }
      return result;
    };
    this.clear = function(last, first, tag, lock){
      if (!lock) {
        internalClusterer.beginUpdate();
      }
      internalClusterer.clear(last, first, tag);
      if (!lock) {
        internalClusterer.endUpdate();
      }
    };
  }
  /***************************************************************************/
  /*                                STORE                                    */
  /***************************************************************************/
  
  function Store(){
    var store = {}, // name => [id, ...]
      objects = {}; // id => object

    function normalize(res) {
      return {
        id: res.id,
        name: res.name,
        object:res.obj,
        tag:res.tag,
        data:res.data
      };
    }
    
    /**
     * add a mixed to the store
     **/
    this.add = function(args, name, obj, sub){
      var todo = args.todo || {},
        id = globalId(todo.id);
      if (!store[name]){
        store[name] = [];
      }
      if (id in objects){ // object already exists: remove it
        this.clearById(id);
      }
      objects[id] = {obj:obj, sub:sub, name:name, id:id, tag:todo.tag, data:todo.data};
      store[name].push(id);
      return id;
    };
    
    /**
     * return a stored object by its id
     **/
    this.getById = function(id, sub, full){
      if (id in objects){
          if (sub) {
            return objects[id].sub
          } else if (full) {
            return normalize(objects[id]);
          }
          return objects[id].obj;

      }
      return false;
    };
    
    /**
     * return a stored value
     **/
    this.get = function(name, last, tag, full){
      var n, id, check = ftag(tag);
      if (!store[name] || !store[name].length){
        return null;
      }
      n = store[name].length;
      while(n){
        n--;
        id = store[name][last ? n : store[name].length - n - 1];
        if (id && objects[id]){
          if (check && !check(objects[id].tag)){
            continue;
          }
          return full ? normalize(objects[id]) : objects[id].obj;
        }
      }
      return null;
    };
    
    /**
     * return all stored values
     **/
    this.all = function(name, tag, full){
      var result = [],
          check = ftag(tag),
          find = function(n){
            var i, id;
            for(i=0; i<store[n].length; i++){
              id = store[n][i];
              if (id && objects[id]){
                if (check && !check(objects[id].tag)){
                  continue;
                }
                result.push(full ? normalize(objects[id]) : objects[id].obj);
              }
            }
          };
      if (name in store){
        find(name);
      } else if (name === undef){ // internal use only
        for(name in store){
          find(name);
        }
      }
      return result;
    };
    
    /**
     * hide and remove an object
     **/
    function rm(obj){
      // Google maps element
      if (typeof(obj.setMap) === "function") {
        obj.setMap(null);
      }
      // jQuery
      if (typeof(obj.remove) === "function") {
        obj.remove();
      }
      // internal (cluster)
      if (typeof(obj.free) === "function") {
        obj.free();
      }
      obj = null;
    }

    /**
     * remove one object from the store
     **/
    this.rm = function(name, check, pop){
      var idx, id;
      if (!store[name]) {
        return false;
      }
      if (check){
        if (pop){
          for(idx = store[name].length - 1; idx >= 0; idx--){
            id = store[name][idx];
            if ( check(objects[id].tag) ){
              break;
            }
          }
        } else {
          for(idx = 0; idx < store[name].length; idx++){
            id = store[name][idx];
            if (check(objects[id].tag)){
              break;
            }
          }
        }
      } else {
        idx = pop ? store[name].length - 1 : 0;
      }
      if ( !(idx in store[name]) ) {
        return false;
      }
      return this.clearById(store[name][idx], idx);
    };
    
    /**
     * remove object from the store by its id
     **/
    this.clearById = function(id, idx){
      if (id in objects){
        var i, name = objects[id].name;
        for(i=0; idx === undef && i<store[name].length; i++){
          if (id === store[name][i]){
            idx = i;
          }
        }
        rm(objects[id].obj);
        if(objects[id].sub){
          rm(objects[id].sub);
        }
        delete objects[id];
        store[name].splice(idx, 1);
        return true;
      }
      return false;
    };
    
    /**
     * return an object from a container object in the store by its id
     * ! for now, only cluster manage this feature 
     **/
    this.objGetById = function(id){
      var result;
      if (store["clusterer"]) {
        for(var idx in store["clusterer"]){
          if ((result = objects[store["clusterer"][idx]].obj.getById(id)) !== false){
            return result;
          }
        }
      }
      return false;
    };
    
    /**
     * remove object from a container object in the store by its id
     * ! for now, only cluster manage this feature 
     **/
    this.objClearById = function(id){
      if (store["clusterer"]) {
        for(var idx in store["clusterer"]){
          if (objects[store["clusterer"][idx]].obj.clearById(id)){
            return true;
          }
        }
      }
      return null;
    };
    
    /**
     * remove objects from the store
     **/
    this.clear = function(list, last, first, tag){
      var k, i, name, check = ftag(tag);
      if (!list || !list.length){
        list = [];
        for(k in store){
          list.push(k);
        }
      } else {
        list = array(list);
      }
      for(i=0; i<list.length; i++){
        name = list[i];
        if (last){
          this.rm(name, check, true);
        } else if (first){
          this.rm(name, check, false);
        } else { // all
          while(this.rm(name, check, false));
        }
      }
    };

    /**
     * remove object from a container object in the store by its tags
     * ! for now, only cluster manage this feature
     **/
    this.objClear = function(list, last, first, tag){
      if (store["clusterer"] && ($.inArray("marker", list) >= 0 || !list.length)) {
        for(var idx in store["clusterer"]){
          objects[store["clusterer"][idx]].obj.clear(last, first, tag);
        }
      }
    };
  }
  
  /***************************************************************************/
  /*                           GMAP3 GLOBALS                                 */
  /***************************************************************************/
  
  var services = {},
    geocoderCache = new GeocoderCache();
    
  //-----------------------------------------------------------------------//
  // Service tools
  //-----------------------------------------------------------------------//
  
  function geocoder(){
    if (!services.geocoder) {
      services.geocoder = new google.maps.Geocoder();
    }
    return services.geocoder;
  }
  
  function directionsService(){
    if (!services.directionsService) {
      services.directionsService = new google.maps.DirectionsService();
    }
    return services.directionsService;
  }
  
  function elevationService(){
    if (!services.elevationService) {
      services.elevationService = new google.maps.ElevationService();
    }
    return services.elevationService;
  }
  
  function maxZoomService(){
    if (!services.maxZoomService) {
      services.maxZoomService = new google.maps.MaxZoomService();
    }
    return services.maxZoomService;
  }
  
  function distanceMatrixService(){
    if (!services.distanceMatrixService) {
      services.distanceMatrixService = new google.maps.DistanceMatrixService();
    }
    return services.distanceMatrixService;
  }
  
  //-----------------------------------------------------------------------//
  // Unit tools
  //-----------------------------------------------------------------------//
  
  function error(){
    if (defaults.verbose){
      var i, err = [];
      if (window.console && (typeof console.error === "function") ){
        for(i=0; i<arguments.length; i++){
          err.push(arguments[i]);
        }
        console.error.apply(console, err);
      } else {
        err = "";
        for(i=0; i<arguments.length; i++){
          err += arguments[i].toString() + " " ;
        }
        alert(err);
      }
    }
  }

  /**
   * return true if mixed is usable as number
   **/
  function numeric(mixed){
    return (typeof(mixed) === "number" || typeof(mixed) === "string") && mixed !== "" && !isNaN(mixed);
  }
  
  /**
   * convert data to array
   **/
  function array(mixed){
    var k, a = [];
    if (mixed !== undef){
      if (typeof(mixed) === "object"){
        if (typeof(mixed.length) === "number") {
          a = mixed;
        } else {
          for(k in mixed) {
            a.push(mixed[k]);
          }
        }
      } else{ 
        a.push(mixed);
      }
    }
    return a;
  }

  /**
   * create a function to check a tag
   */
  function ftag(tag){
    if (tag){
      if (typeof tag === "function"){
        return tag;
      }
      tag = array(tag);
      return function(val){
        if (val === undef){
          return false;
        }
        if (typeof val === "object"){
          for(var i=0; i<val.length; i++){
            if($.inArray(val[i], tag) >= 0){
              return true;
            }
          }
          return false;
        }
        return $.inArray(val, tag) >= 0;
      }
    }
  }
  
  /**
   * convert mixed [ lat, lng ] objet to google.maps.LatLng
   **/
  function toLatLng (mixed, emptyReturnMixed, noFlat){
    var empty = emptyReturnMixed ? mixed : null;
    if (!mixed || (typeof mixed === "string")){
      return empty;
    }
    // defined latLng
    if (mixed.latLng) {
      return toLatLng(mixed.latLng);
    }
    // google.maps.LatLng object
    if (mixed instanceof google.maps.LatLng) {
      return mixed;
    } 
    // {lat:X, lng:Y} object
    else if ( numeric(mixed.lat) ) {
      return new google.maps.LatLng(mixed.lat, mixed.lng);
    }
    // [X, Y] object 
    else if ( !noFlat && $.isArray(mixed)){
      if ( !numeric(mixed[0]) || !numeric(mixed[1]) ) {
        return empty;
      }
      return new google.maps.LatLng(mixed[0], mixed[1]);
    }
    return empty;
  }
  
  /**
   * convert mixed [ sw, ne ] object by google.maps.LatLngBounds
   **/
  function toLatLngBounds(mixed){
    var ne, sw;
    if (!mixed || mixed instanceof google.maps.LatLngBounds) {
      return mixed || null;
    }
    if ($.isArray(mixed)){
      if (mixed.length == 2){
        ne = toLatLng(mixed[0]);
        sw = toLatLng(mixed[1]);
      } else if (mixed.length == 4){
        ne = toLatLng([mixed[0], mixed[1]]);
        sw = toLatLng([mixed[2], mixed[3]]);
      }
    } else {
      if ( ("ne" in mixed) && ("sw" in mixed) ){
        ne = toLatLng(mixed.ne);
        sw = toLatLng(mixed.sw);
      } else if ( ("n" in mixed) && ("e" in mixed) && ("s" in mixed) && ("w" in mixed) ){
        ne = toLatLng([mixed.n, mixed.e]);
        sw = toLatLng([mixed.s, mixed.w]);
      }
    }
    if (ne && sw){
      return new google.maps.LatLngBounds(sw, ne);
    }
    return null;
  }
  
  /**
   * resolveLatLng      
   **/
  function resolveLatLng(ctx, method, runLatLng, args, attempt){
    var latLng = runLatLng ? toLatLng(args.todo, false, true) : false,
      conf = latLng ?  {latLng:latLng} : (args.todo.address ? (typeof(args.todo.address) === "string" ? {address:args.todo.address} : args.todo.address) : false),
      cache = conf ? geocoderCache.get(conf) : false,
      that = this;
    if (conf){
      attempt = attempt || 0; // convert undefined to int
      if (cache){
        args.latLng = cache.results[0].geometry.location;
        args.results = cache.results;
        args.status = cache.status;
        method.apply(ctx, [args]);
      } else {
        if (conf.location){
          conf.location = toLatLng(conf.location);
        }
        if (conf.bounds){
          conf.bounds = toLatLngBounds(conf.bounds);
        }
        geocoder().geocode(
          conf, 
          function(results, status) {
            if (status === google.maps.GeocoderStatus.OK){
              geocoderCache.store(conf, {results:results, status:status});
              args.latLng = results[0].geometry.location;
              args.results = results;
              args.status = status;
              method.apply(ctx, [args]);
            } else if ( (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) && (attempt < defaults.queryLimit.attempt) ){
              setTimeout(
                function(){
                  resolveLatLng.apply(that, [ctx, method, runLatLng, args, attempt+1]);
                },
                defaults.queryLimit.delay + Math.floor(Math.random() * defaults.queryLimit.random)
              );
            } else {
              error("geocode failed", status, conf);
              args.latLng = args.results = false;
              args.status = status;
              method.apply(ctx, [args]);
            }
          }
        );
      }
    } else {
      args.latLng = toLatLng(args.todo, false, true);
      method.apply(ctx, [args]);
    }
  }
  
  function resolveAllLatLng(list, ctx, method, args){
    var that = this, i = -1;
    
    function resolve(){
      // look for next address to resolve
      do{
        i++;
      }while( (i < list.length) && !("address" in list[i]) );
      
      // no address found, so run method 
      if (i >= list.length){
        method.apply(ctx, [args]);
        return;
      }
      
      resolveLatLng(
        that,
        function(args){
          delete args.todo;
          $.extend(list[i], args);
          resolve.apply(that, []); // resolve next (using apply avoid too much recursion)
        },
        true,
        {todo:list[i]}
      );
    }
    resolve();
  }
    
  /**
   * geolocalise the user and return a LatLng
   **/
  function geoloc(ctx, method, args){
    var is_echo = false; // sometime, a kind of echo appear, this trick will notice once the first call is run to ignore the next one
    if (navigator && navigator.geolocation){
       navigator.geolocation.getCurrentPosition(
        function(pos) {
          if (is_echo){
            return;
          }
          is_echo = true;
          args.latLng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
          method.apply(ctx, [args]);
        }, 
        function() {
          if (is_echo){
            return;
          }
          is_echo = true;
          args.latLng = false;
          method.apply(ctx, [args]);
        },
        args.opts.getCurrentPosition
      );
    } else {
      args.latLng = false;
      method.apply(ctx, [args]);
    }
  }

  /***************************************************************************/
  /*                                GMAP3                                    */
  /***************************************************************************/
  
  function Gmap3($this){
    var that = this,
      stack = new Stack(),
      store = new Store(),
      map = null,
      task;
    
    //-----------------------------------------------------------------------//
    // Stack tools
    //-----------------------------------------------------------------------//

    /**
     * store actions to execute in a stack manager
     **/
    this._plan = function(list){
      for(var k = 0; k < list.length; k++) {
        stack.add(new Task(that, end, list[k]));
      }
      run();
    };
    
    /**
     * if not running, start next action in stack
     **/
    function run(){
      if (!task && (task = stack.get())){
        task.run();
      }
    }
    
    /**
     * called when action in finished, to acknoledge the current in stack and start next one
     **/
     function end(){
      task = null;
      stack.ack();
      run.call(that); // restart to high level scope
    }
    
    //-----------------------------------------------------------------------//
    // Tools
    //-----------------------------------------------------------------------//
    
    /**
     * execute callback functions 
     **/
    function callback(args){
      if (args.todo.callback) {
        var params = Array.prototype.slice.call(arguments, 1);
        if (typeof args.todo.callback === "function") {
          args.todo.callback.apply($this, params);
        } else if ($.isArray(args.todo.callback)) {
          if (typeof args.todo.callback[1] === "function") {
            args.todo.callback[1].apply(args.todo.callback[0], params);
          }
        }
      }
    }
    
    /**
     * execute ending functions 
     **/
    function manageEnd(args, obj, id){
      if (id){
        attachEvents($this, args, obj, id);
      }
      callback(args, obj);
      task.ack(obj);
    }
    
    /**
     * initialize the map if not yet initialized
     **/
    function newMap(latLng, args){
      args = args || {};
      if (map) {
        if (args.todo && args.todo.options){
          if (args.todo.options.center) {
            args.todo.options.center = toLatLng(args.todo.options.center);
          }
          map.setOptions(args.todo.options);
        }
      } else {
        var opts = args.opts || $.extend(true, {}, defaults.map, args.todo && args.todo.options ? args.todo.options : {});
        opts.center = latLng || toLatLng(opts.center);
        map = new defaults.classes.Map($this.get(0), opts);
      }
    }
     
    /* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    => function with latLng resolution
    = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
    
    /**
     * Initialize google.maps.Map object
     **/
    this.map = function(args){
      newMap(args.latLng, args);
      attachEvents($this, args, map);
      manageEnd(args, map);
    };
    
    /**
     * destroy an existing instance
     **/
    this.destroy = function(args){
      store.clear();
      $this.empty();
      if (map){
        map = null;
      }
      manageEnd(args, true);
    };
    
    /**
     * add an infowindow
     **/
    this.infowindow = function(args){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        if (args.latLng) {
          args.opts.position = args.latLng;
        }
        args.todo.values = [{options:args.opts}];
      }
      $.each(args.todo.values, function(i, value){
        var id, obj, todo = tuple(args, value);
        todo.options.position = todo.options.position ? toLatLng(todo.options.position) : toLatLng(value.latLng);
        if (!map){
          newMap(todo.options.position);
        }
        obj = new defaults.classes.InfoWindow(todo.options);
        if (obj && ((todo.open === undef) || todo.open)){
          if (multiple){
            obj.open(map, todo.anchor ? todo.anchor : undef);
          } else {
            obj.open(map, todo.anchor ? todo.anchor : (args.latLng ? undef : (args.session.marker ? args.session.marker : undef)));
          }
        }
        objs.push(obj);
        id = store.add({todo:todo}, "infowindow", obj);
        attachEvents($this, {todo:todo}, obj, id);
      });
      manageEnd(args, multiple ? objs : objs[0]);
    };
    
    /**
     * add a circle
     **/
    this.circle = function(args){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        args.opts.center = args.latLng || toLatLng(args.opts.center);
        args.todo.values = [{options:args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      $.each(args.todo.values, function(i, value){
        var id, obj, todo = tuple(args, value);
        todo.options.center = todo.options.center ? toLatLng(todo.options.center) : toLatLng(value);
        if (!map){
          newMap(todo.options.center);
        }
        todo.options.map = map;
        obj = new defaults.classes.Circle(todo.options);
        objs.push(obj);
        id = store.add({todo:todo}, "circle", obj);
        attachEvents($this, {todo:todo}, obj, id);
      });
      manageEnd(args, multiple ? objs : objs[0]);
    };
    
    /**
     * add an overlay
     **/
    this.overlay = function(args, internal){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        args.todo.values = [{latLng: args.latLng, options: args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      if (!OverlayView.__initialised) {
        OverlayView.prototype = new defaults.classes.OverlayView();
        OverlayView.__initialised = true;
      }
      $.each(args.todo.values, function(i, value){
        var id, obj, todo = tuple(args, value),
            $div = $(document.createElement("div")).css({
              border: "none",
              borderWidth: "0px",
              position: "absolute"
            });
        $div.append(todo.options.content);
        obj = new OverlayView(map, todo.options, toLatLng(todo) || toLatLng(value), $div);
        objs.push(obj);
        $div = null; // memory leak
        if (!internal){
          id = store.add(args, "overlay", obj);
          attachEvents($this, {todo:todo}, obj, id);
        }
      });
      if (internal){
        return objs[0];
      }
      manageEnd(args, multiple ? objs : objs[0]);
    };
    
    /**
     * returns address structure from latlng        
     **/
    this.getaddress = function(args){
      callback(args, args.results, args.status);
      task.ack();
    };
    
    /**
     * returns latlng from an address
     **/
    this.getlatlng = function(args){
      callback(args, args.results, args.status);
      task.ack();
    };
    
    /**
     * return the max zoom of a location
     **/
    this.getmaxzoom = function(args){
      maxZoomService().getMaxZoomAtLatLng(
        args.latLng, 
        function(result) {
          callback(args, result.status === google.maps.MaxZoomStatus.OK ? result.zoom : false, status);
          task.ack();
        }
      );
    };
    
    /**
     * return the elevation of a location
     **/
    this.getelevation = function(args){
      var i, locations = [],
        f = function(results, status){
          callback(args, status === google.maps.ElevationStatus.OK ? results : false, status);
          task.ack();
        };
      
      if (args.latLng){
        locations.push(args.latLng);
      } else {
        locations = array(args.todo.locations || []);
        for(i=0; i<locations.length; i++){
          locations[i] = toLatLng(locations[i]);
        }
      }
      if (locations.length){
        elevationService().getElevationForLocations({locations:locations}, f);
      } else {
        if (args.todo.path && args.todo.path.length){
          for(i=0; i<args.todo.path.length; i++){
            locations.push(toLatLng(args.todo.path[i]));
          }
        }
        if (locations.length){
          elevationService().getElevationAlongPath({path:locations, samples:args.todo.samples}, f);
        } else {
          task.ack();
        }
      }
    };
    
    /* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    => function without latLng resolution
    = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
    
    /**
     * define defaults values
     **/
    this.defaults = function(args){
      $.each(args.todo, function(name, value){
        if (typeof defaults[name] === "object"){
          defaults[name] = $.extend({}, defaults[name], value);
        } else {
          defaults[name] = value;
        }
      });
      task.ack(true);
    };
    
    /**
     * add a rectangle
     **/
    this.rectangle = function(args){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        args.todo.values = [{options:args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      $.each(args.todo.values, function(i, value){
        var id, obj, todo = tuple(args, value);
        todo.options.bounds = todo.options.bounds ? toLatLngBounds(todo.options.bounds) : toLatLngBounds(value);
        if (!map){
          newMap(todo.options.bounds.getCenter());
        }
        todo.options.map = map;
        
        obj = new defaults.classes.Rectangle(todo.options);
        objs.push(obj);
        id = store.add({todo:todo}, "rectangle", obj);
        attachEvents($this, {todo:todo}, obj, id);
      });
      manageEnd(args, multiple ? objs : objs[0]);
    };
    
    /**
     * add a polygone / polyline
     **/
    function poly(args, poly, path){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        args.todo.values = [{options:args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      newMap();
      $.each(args.todo.values, function(_, value){
        var id, i, j, obj, todo = tuple(args, value);
        if (todo.options[path]){
          if (todo.options[path][0][0] && $.isArray(todo.options[path][0][0])){
            for(i=0; i<todo.options[path].length; i++){
              for(j=0; j<todo.options[path][i].length; j++){
                todo.options[path][i][j] = toLatLng(todo.options[path][i][j]);
              }
            }
          } else {
            for(i=0; i<todo.options[path].length; i++){
              todo.options[path][i] = toLatLng(todo.options[path][i]);
            }
          }
        }
        todo.options.map = map;
        obj = new google.maps[poly](todo.options);
        objs.push(obj);
        id = store.add({todo:todo}, poly.toLowerCase(), obj);
        attachEvents($this, {todo:todo}, obj, id);
      });
      manageEnd(args, multiple ? objs : objs[0]);
    }
    
    this.polyline = function(args){
      poly(args, "Polyline", "path");
    };
    
    this.polygon = function(args){
      poly(args, "Polygon", "paths");
    };
    
    /**
     * add a traffic layer
     **/
    this.trafficlayer = function(args){
      newMap();
      var obj = store.get("trafficlayer");
      if (!obj){
        obj = new defaults.classes.TrafficLayer();
        obj.setMap(map);
        store.add(args, "trafficlayer", obj);
      }
      manageEnd(args, obj);
    };
    
    /**
     * add a bicycling layer
     **/
    this.bicyclinglayer = function(args){
      newMap();
      var obj = store.get("bicyclinglayer");
      if (!obj){
        obj = new defaults.classes.BicyclingLayer();
        obj.setMap(map);
        store.add(args, "bicyclinglayer", obj);
      }
      manageEnd(args, obj);
    };
    
    /**
     * add a ground overlay
     **/
    this.groundoverlay = function(args){
      args.opts.bounds = toLatLngBounds(args.opts.bounds);
      if (args.opts.bounds){
        newMap(args.opts.bounds.getCenter());
      }
      var id, obj = new defaults.classes.GroundOverlay(args.opts.url, args.opts.bounds, args.opts.opts);
      obj.setMap(map);
      id = store.add(args, "groundoverlay", obj);
      manageEnd(args, obj, id);
    };
    
    /**
     * set a streetview
     **/
    this.streetviewpanorama = function(args){
      if (!args.opts.opts){
        args.opts.opts = {};
      }
      if (args.latLng){
        args.opts.opts.position = args.latLng;
      } else if (args.opts.opts.position){
        args.opts.opts.position = toLatLng(args.opts.opts.position);
      }
      if (args.todo.divId){
        args.opts.container = document.getElementById(args.todo.divId)
      } else if (args.opts.container){
        args.opts.container = $(args.opts.container).get(0);
      }
      var id, obj = new defaults.classes.StreetViewPanorama(args.opts.container, args.opts.opts);
      if (obj){
        map.setStreetView(obj);
      }
      id = store.add(args, "streetviewpanorama", obj);
      manageEnd(args, obj, id);
    };
    
    this.kmllayer = function(args){
      var objs = [], multiple = "values" in args.todo;
      if (!multiple){
        args.todo.values = [{options:args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      $.each(args.todo.values, function(i, value){
        var id, obj, options, todo = tuple(args, value);
        if (!map){
          newMap();
        }
        options = todo.options;
        // compatibility 5.0-
        if (todo.options.opts) {
            options = todo.options.opts;
            if (todo.options.url) {
                options.url = todo.options.url;
            }
        }
        // -- end --
        options.map = map;
        if (googleVersionMin("3.10")) {
            obj = new defaults.classes.KmlLayer(options);
        } else {
            obj = new defaults.classes.KmlLayer(options.url, options);
        }
        objs.push(obj);
        id = store.add({todo:todo}, "kmllayer", obj);
        attachEvents($this, {todo:todo}, obj, id);
      });
      manageEnd(args, multiple ? objs : objs[0]);
    };
    
    /**
     * add a fix panel
     **/
     this.panel = function(args){
      newMap();
      var id, x= 0, y=0, $content,
        $div = $(document.createElement("div"));
      
      $div.css({
        position: "absolute",
        zIndex: 1000,
        visibility: "hidden"
      });
        
      if (args.opts.content){
        $content = $(args.opts.content);
        $div.append($content);
        $this.first().prepend($div);
        
        if (args.opts.left !== undef){
          x = args.opts.left;
        } else if (args.opts.right !== undef){
          x = $this.width() - $content.width() - args.opts.right;
        } else if (args.opts.center){
          x = ($this.width() - $content.width()) / 2;
        }
        
        if (args.opts.top !== undef){
          y = args.opts.top;
        } else if (args.opts.bottom !== undef){
          y = $this.height() - $content.height() - args.opts.bottom;
        } else if (args.opts.middle){
          y = ($this.height() - $content.height()) / 2
        }
      
        $div.css({
            top: y,
            left: x,
            visibility: "visible"
        });
      }

      id = store.add(args, "panel", $div);
      manageEnd(args, $div, id);
      $div = null; // memory leak
    };
    
    /**
     * Create an InternalClusterer object
     **/
    function createClusterer(raw){
      var internalClusterer = new InternalClusterer($this, map, raw),
        todo = {},
        styles = {},
        thresholds = [],
        isInt = /^[0-9]+$/,
        calculator,
        k;

      for(k in raw){
        if (isInt.test(k)){
          thresholds.push(1*k); // cast to int
          styles[k] = raw[k];
          styles[k].width = styles[k].width || 0;
          styles[k].height = styles[k].height || 0;
        } else {
          todo[k] = raw[k];
        }
      }
      thresholds.sort(function (a, b) { return a > b});
      

      // external calculator
      if (todo.calculator){
        calculator = function(indexes){
          var data = [];
          $.each(indexes, function(i, index){
            data.push(internalClusterer.value(index));
          });
          return todo.calculator.apply($this, [data]);
        };
      } else {
        calculator = function(indexes){
          return indexes.length;
        };
      }
      
      // set error function
      internalClusterer.error(function(){
        error.apply(that, arguments);
      });
      
      // set display function
      internalClusterer.display(function(cluster){
        var i, style, atodo, obj, offset,
          cnt = calculator(cluster.indexes);
        
        // look for the style to use
        if (raw.force || cnt > 1) {
          for(i = 0; i < thresholds.length; i++) {
            if (thresholds[i] <= cnt) {
              style = styles[thresholds[i]];
            }
          }
        }
        
        if (style){
          offset = style.offset || [-style.width/2, -style.height/2];
          // create a custom overlay command
          // nb: 2 extends are faster that a deeper extend
          atodo = $.extend({}, todo);
          atodo.options = $.extend({
            pane: "overlayLayer",
            content:style.content ? style.content.replace("CLUSTER_COUNT", cnt) : "",
            offset:{
              x: ("x" in offset ? offset.x : offset[0]) || 0,
              y: ("y" in offset ? offset.y : offset[1]) || 0
            }
          },
          todo.options || {});
          
          obj = that.overlay({todo:atodo, opts:atodo.options, latLng:toLatLng(cluster)}, true);
          
          atodo.options.pane = "floatShadow";
          atodo.options.content = $(document.createElement("div")).width(style.width+"px").height(style.height+"px").css({cursor:"pointer"});
          shadow = that.overlay({todo:atodo, opts:atodo.options, latLng:toLatLng(cluster)}, true);
          
          // store data to the clusterer
          todo.data = {
            latLng: toLatLng(cluster),
            markers:[]
          };
          $.each(cluster.indexes, function(i, index){
            todo.data.markers.push(internalClusterer.value(index));
            if (internalClusterer.markerIsSet(index)){
              internalClusterer.marker(index).setMap(null);
            }
          });
          attachEvents($this, {todo:todo}, shadow, undef, {main:obj, shadow:shadow});
          internalClusterer.store(cluster, obj, shadow);
        } else {
          $.each(cluster.indexes, function(i, index){
            internalClusterer.marker(index).setMap(map);
          });
        }
      });
      
      return internalClusterer;
    }
    /**
     *  add a marker
     **/
    this.marker = function(args){
      var multiple = "values" in args.todo,
        init = !map;
      if (!multiple){
        args.opts.position = args.latLng || toLatLng(args.opts.position);
        args.todo.values = [{options:args.opts}];
      }
      if (!args.todo.values.length){
        manageEnd(args, false);
        return;
      }
      if (init){
        newMap();
      }
      
      if (args.todo.cluster && !map.getBounds()){ // map not initialised => bounds not available : wait for map if clustering feature is required
        google.maps.event.addListenerOnce(map, "bounds_changed", function() { that.marker.apply(that, [args]); });
        return;
      }
      if (args.todo.cluster){
        var clusterer, internalClusterer;
        if (args.todo.cluster instanceof Clusterer){
          clusterer = args.todo.cluster;
          internalClusterer = store.getById(clusterer.id(), true);
        } else {
          internalClusterer = createClusterer(args.todo.cluster);
          clusterer = new Clusterer(globalId(args.todo.id, true), internalClusterer);
          store.add(args, "clusterer", clusterer, internalClusterer);
        }
        internalClusterer.beginUpdate();
        
        $.each(args.todo.values, function(i, value){
          var todo = tuple(args, value);
          todo.options.position = todo.options.position ? toLatLng(todo.options.position) : toLatLng(value);
          if (todo.options.position) {
            todo.options.map = map;
            if (init){
              map.setCenter(todo.options.position);
              init = false;
            }
            internalClusterer.add(todo, value);
          }
        });
        
        internalClusterer.endUpdate();
        manageEnd(args, clusterer);
        
      } else {
        var objs = [];
        $.each(args.todo.values, function(i, value){
          var id, obj, todo = tuple(args, value);
          todo.options.position = todo.options.position ? toLatLng(todo.options.position) : toLatLng(value);
          if (todo.options.position) {
            todo.options.map = map;
            if (init){
              map.setCenter(todo.options.position);
              init = false;
            }
            obj = new defaults.classes.Marker(todo.options);
            objs.push(obj);
            id = store.add({todo:todo}, "marker", obj);
            attachEvents($this, {todo:todo}, obj, id);
          }
        });
        manageEnd(args, multiple ? objs : objs[0]);
      }
    };
    
    /**
     * return a route
     **/
    this.getroute = function(args){
      args.opts.origin = toLatLng(args.opts.origin, true);
      args.opts.destination = toLatLng(args.opts.destination, true);
      directionsService().route(
        args.opts,
        function(results, status) {
          callback(args, status == google.maps.DirectionsStatus.OK ? results : false, status);
          task.ack();
        }
      );
    };
    
    /**
     * add a direction renderer
     **/
    this.directionsrenderer = function(args){
      args.opts.map = map;
      var id, obj = new google.maps.DirectionsRenderer(args.opts);
      if (args.todo.divId){
        obj.setPanel(document.getElementById(args.todo.divId));
      } else if (args.todo.container){
        obj.setPanel($(args.todo.container).get(0));
      }
      id = store.add(args, "directionsrenderer", obj);
      manageEnd(args, obj, id);
    };
    
    /**
     * returns latLng of the user        
     **/
    this.getgeoloc = function(args){
      manageEnd(args, args.latLng);
    };
    
    /**
     * add a style
     **/
    this.styledmaptype = function(args){
      newMap();
      var obj = new defaults.classes.StyledMapType(args.todo.styles, args.opts);
      map.mapTypes.set(args.todo.id, obj);
      manageEnd(args, obj);
    };
    
    /**
     * add an imageMapType
     **/
    this.imagemaptype = function(args){
      newMap();
      var obj = new defaults.classes.ImageMapType(args.opts);
      map.mapTypes.set(args.todo.id, obj);
      manageEnd(args, obj);
    };
    
    /**
     * autofit a map using its overlays (markers, rectangles ...)
     **/
    this.autofit = function(args){
      var bounds = new google.maps.LatLngBounds();
      $.each(store.all(), function(i, obj){
        if (obj.getPosition){
          bounds.extend(obj.getPosition());
        } else if (obj.getBounds){
          bounds.extend(obj.getBounds().getNorthEast());
          bounds.extend(obj.getBounds().getSouthWest());
        } else if (obj.getPaths){
          obj.getPaths().forEach(function(path){
            path.forEach(function(latLng){
              bounds.extend(latLng);
            });
          });
        } else if (obj.getPath){
          obj.getPath().forEach(function(latLng){
            bounds.extend(latLng);""
          });
        } else if (obj.getCenter){
          bounds.extend(obj.getCenter());
        } else if (obj instanceof Clusterer){
          obj = store.getById(obj.id(), true);
          if (obj){
            obj.autofit(bounds);
          }
        }
      });

      if (!bounds.isEmpty() && (!map.getBounds() || !map.getBounds().equals(bounds))){

        if ("maxZoom" in args.todo){
          // fitBouds Callback event => detect zoom level and check maxZoom
          google.maps.event.addListenerOnce(
            map, 
            "bounds_changed", 
            function() {
              if (this.getZoom() > args.todo.maxZoom){
                this.setZoom(args.todo.maxZoom);
              }
            }
          );
        }
        map.fitBounds(bounds);
      }
      manageEnd(args, true);
    };
    
    /**
     * remove objects from a map
     **/
    this.clear = function(args){
      if (typeof args.todo === "string"){
        if (store.clearById(args.todo) || store.objClearById(args.todo)){
          manageEnd(args, true);
          return;
        }
        args.todo = {name:args.todo};
      }
      if (args.todo.id){
        $.each(array(args.todo.id), function(i, id){
          store.clearById(id) || store.objClearById(id);
        });
      } else {
        store.clear(array(args.todo.name), args.todo.last, args.todo.first, args.todo.tag);
        store.objClear(array(args.todo.name), args.todo.last, args.todo.first, args.todo.tag);
      }
      manageEnd(args, true);
    };
    
    /**
     * run a function on each items selected
     **/
    this.exec = function(args){
      var that = this;
      $.each(array(args.todo.func), function(i, func){
        $.each(that.get(args.todo, true, args.todo.hasOwnProperty("full") ? args.todo.full : true), function(j, res){
          func.call($this, res);
        });
      });
      manageEnd(args, true);
    };
    
    /**
     * return objects previously created
     **/
    this.get = function(args, direct, full){
      var name, res,
          todo = direct ? args : args.todo;
      if (!direct) {
        full = todo.full;
      }
      if (typeof todo === "string"){
        res = store.getById(todo, false, full) || store.objGetById(todo);
        if (res === false){
          name = todo;
          todo = {};
        }
      } else {
        name = todo.name;
      }
      if (name === "map"){
        res = map;
      }
      if (!res){
        res = [];
        if (todo.id){
            $.each(array(todo.id), function(i, id) {
                res.push(store.getById(id, false, full) || store.objGetById(id));
            });
            if (!$.isArray(todo.id)) {
              res = res[0];
            }
        } else {
          $.each(name ? array(name) : [undef], function(i, aName) {
            var result;
            if (todo.first){
                result = store.get(aName, false, todo.tag, full);
                if (result) res.push(result);
            } else if (todo.all){
                $.each(store.all(aName, todo.tag, full), function(i, result){
                  res.push(result);
                });
            } else {
                result = store.get(aName, true, todo.tag, full);
                if (result) res.push(result);
            }
          });
          if (!todo.all && !$.isArray(name)) {
            res = res[0];
          }
        }
      }
      res = $.isArray(res) || !todo.all ? res : [res];
      if (direct){
        return res;
      } else {
        manageEnd(args, res);
      }
    };

    /**
     * return the distance between an origin and a destination
     *      
     **/
    this.getdistance = function(args){
      var i;
      args.opts.origins = array(args.opts.origins);
      for(i=0; i<args.opts.origins.length; i++){
        args.opts.origins[i] = toLatLng(args.opts.origins[i], true);
      }
      args.opts.destinations = array(args.opts.destinations);
      for(i=0; i<args.opts.destinations.length; i++){
        args.opts.destinations[i] = toLatLng(args.opts.destinations[i], true);
      }
      distanceMatrixService().getDistanceMatrix(
        args.opts,
        function(results, status) {
          callback(args, status === google.maps.DistanceMatrixStatus.OK ? results : false, status);
          task.ack();
        }
      );
    };
    
    /**
     * trigger events on the map 
     **/
    this.trigger = function(args){
      if (typeof args.todo === "string"){
        google.maps.event.trigger(map, args.todo);
      } else {
        var options = [map, args.todo.eventName];
        if (args.todo.var_args) {
            $.each(args.todo.var_args, function(i, v){
              options.push(v);
            });
        }
        google.maps.event.trigger.apply(google.maps.event, options);
      }
      callback(args);
      task.ack();
    };
  }

  /**
   * Return true if get is a direct call
   * it means :
   *   - get is the only key
   *   - get has no callback
   * @param obj {Object} The request to check
   * @return {Boolean}
   */
  function isDirectGet(obj) {
    var k;
    if (!typeof obj === "object" || !obj.hasOwnProperty("get")){
      return false;
    }
    for(k in obj) {
      if (k !== "get") {
        return false;
      }
    }
    return !obj.get.hasOwnProperty("callback");
  }
  
  //-----------------------------------------------------------------------//
  // jQuery plugin
  //-----------------------------------------------------------------------//
    
  $.fn.gmap3 = function(){
    var i, list = [], empty = true, results = [];
    
    // init library
    initDefaults();
    
    // store all arguments in a todo list 
    for(i=0; i<arguments.length; i++){
      if (arguments[i]){
        list.push(arguments[i]);
      }
    }

    // resolve empty call - run init
    if (!list.length) {
      list.push("map");
    }

    // loop on each jQuery object
    $.each(this, function() {
      var $this = $(this), gmap3 = $this.data("gmap3");
      empty = false;
      if (!gmap3){
        gmap3 = new Gmap3($this);
        $this.data("gmap3", gmap3);
      }
      if (list.length === 1 && (list[0] === "get" || isDirectGet(list[0]))){
        if (list[0] === "get") {
          results.push(gmap3.get("map", true));
        } else {
          results.push(gmap3.get(list[0].get, true, list[0].get.full));
        }
      } else {
        gmap3._plan(list);
      }
    });
    
    // return for direct call only 
    if (results.length){
      if (results.length === 1){ // 1 css selector
        return results[0];
      } else {
        return results;
      }
    }
    
    return this;
  }

})(jQuery);

/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7($){$.H($.2L,{17:7(d){l(!6.F){d&&d.2q&&2T.1z&&1z.52("3y 3p, 4L\'t 17, 64 3y");8}p c=$.19(6[0],\'v\');l(c){8 c}c=2w $.v(d,6[0]);$.19(6[0],\'v\',c);l(c.q.3x){6.3s("1w, 3i").1o(".4E").3e(7(){c.3b=w});l(c.q.35){6.3s("1w, 3i").1o(":2s").3e(7(){c.1Z=6})}6.2s(7(b){l(c.q.2q)b.5J();7 1T(){l(c.q.35){l(c.1Z){p a=$("<1w 1V=\'5r\'/>").1s("u",c.1Z.u).33(c.1Z.Z).51(c.U)}c.q.35.V(c,c.U);l(c.1Z){a.3D()}8 N}8 w}l(c.3b){c.3b=N;8 1T()}l(c.L()){l(c.1b){c.1l=w;8 N}8 1T()}12{c.2l();8 N}})}8 c},J:7(){l($(6[0]).2W(\'L\')){8 6.17().L()}12{p b=w;p a=$(6[0].L).17();6.P(7(){b&=a.I(6)});8 b}},4D:7(c){p d={},$I=6;$.P(c.1I(/\\s/),7(a,b){d[b]=$I.1s(b);$I.6d(b)});8 d},1i:7(h,k){p f=6[0];l(h){p i=$.19(f.L,\'v\').q;p d=i.1i;p c=$.v.36(f);23(h){1e"1d":$.H(c,$.v.1X(k));d[f.u]=c;l(k.G)i.G[f.u]=$.H(i.G[f.u],k.G);31;1e"3D":l(!k){T d[f.u];8 c}p e={};$.P(k.1I(/\\s/),7(a,b){e[b]=c[b];T c[b]});8 e}}p g=$.v.41($.H({},$.v.3Y(f),$.v.3V(f),$.v.3T(f),$.v.36(f)),f);l(g.15){p j=g.15;T g.15;g=$.H({15:j},g)}8 g}});$.H($.5p[":"],{5n:7(a){8!$.1p(""+a.Z)},5g:7(a){8!!$.1p(""+a.Z)},5f:7(a){8!a.4h}});$.v=7(b,a){6.q=$.H(w,{},$.v.3d,b);6.U=a;6.3I()};$.v.W=7(c,b){l(R.F==1)8 7(){p a=$.3F(R);a.4V(c);8 $.v.W.1Q(6,a)};l(R.F>2&&b.2c!=3B){b=$.3F(R).4Q(1)}l(b.2c!=3B){b=[b]}$.P(b,7(i,n){c=c.1u(2w 3t("\\\\{"+i+"\\\\}","g"),n)});8 c};$.H($.v,{3d:{G:{},2a:{},1i:{},1c:"3r",28:"J",2F:"4P",2l:w,3o:$([]),2D:$([]),3x:w,3l:[],3k:N,4O:7(a){6.3U=a;l(6.q.4K&&!6.4J){6.q.1K&&6.q.1K.V(6,a,6.q.1c,6.q.28);6.1M(a).2A()}},4C:7(a){l(!6.1E(a)&&(a.u 11 6.1a||!6.K(a))){6.I(a)}},6c:7(a){l(a.u 11 6.1a||a==6.4A){6.I(a)}},68:7(a){l(a.u 11 6.1a)6.I(a);12 l(a.4x.u 11 6.1a)6.I(a.4x)},39:7(a,c,b){$(a).22(c).2v(b)},1K:7(a,c,b){$(a).2v(c).22(b)}},63:7(a){$.H($.v.3d,a)},G:{15:"61 4r 2W 15.",1q:"M 2O 6 4r.",1J:"M O a J 1J 5X.",1B:"M O a J 5W.",1A:"M O a J 1A.",2j:"M O a J 1A (5Q).",1G:"M O a J 1G.",1P:"M O 5O 1P.",2f:"M O a J 5L 5I 1G.",2o:"M O 47 5F Z 5B.",43:"M O a Z 5z a J 5x.",18:$.v.W("M O 3K 5v 2X {0} 2V."),1y:$.v.W("M O 5t 5s {0} 2V."),2i:$.v.W("M O a Z 3W {0} 3O {1} 2V 5o."),2r:$.v.W("M O a Z 3W {0} 3O {1}."),1C:$.v.W("M O a Z 5j 2X 46 3M 3L {0}."),1t:$.v.W("M O a Z 5d 2X 46 3M 3L {0}.")},3J:N,5a:{3I:7(){6.24=$(6.q.2D);6.4t=6.24.F&&6.24||$(6.U);6.2x=$(6.q.3o).1d(6.q.2D);6.1a={};6.54={};6.1b=0;6.1h={};6.1f={};6.21();p f=(6.2a={});$.P(6.q.2a,7(d,c){$.P(c.1I(/\\s/),7(a,b){f[b]=d})});p e=6.q.1i;$.P(e,7(b,a){e[b]=$.v.1X(a)});7 2N(a){p b=$.19(6[0].L,"v"),3c="4W"+a.1V.1u(/^17/,"");b.q[3c]&&b.q[3c].V(b,6[0])}$(6.U).2K(":3E, :4U, :4T, 2e, 4S","2d 2J 4R",2N).2K(":3C, :3A, 2e, 3z","3e",2N);l(6.q.3w)$(6.U).2I("1f-L.17",6.q.3w)},L:7(){6.3v();$.H(6.1a,6.1v);6.1f=$.H({},6.1v);l(!6.J())$(6.U).3u("1f-L",[6]);6.1m();8 6.J()},3v:7(){6.2H();Q(p i=0,14=(6.2b=6.14());14[i];i++){6.29(14[i])}8 6.J()},I:7(a){a=6.2G(a);6.4A=a;6.2P(a);6.2b=$(a);p b=6.29(a);l(b){T 6.1f[a.u]}12{6.1f[a.u]=w}l(!6.3q()){6.13=6.13.1d(6.2x)}6.1m();8 b},1m:7(b){l(b){$.H(6.1v,b);6.S=[];Q(p c 11 b){6.S.27({1j:b[c],I:6.26(c)[0]})}6.1n=$.3n(6.1n,7(a){8!(a.u 11 b)})}6.q.1m?6.q.1m.V(6,6.1v,6.S):6.3m()},2S:7(){l($.2L.2S)$(6.U).2S();6.1a={};6.2H();6.2Q();6.14().2v(6.q.1c)},3q:7(){8 6.2k(6.1f)},2k:7(a){p b=0;Q(p i 11 a)b++;8 b},2Q:7(){6.2C(6.13).2A()},J:7(){8 6.3j()==0},3j:7(){8 6.S.F},2l:7(){l(6.q.2l){3Q{$(6.3h()||6.S.F&&6.S[0].I||[]).1o(":4N").3g().4M("2d")}3f(e){}}},3h:7(){p a=6.3U;8 a&&$.3n(6.S,7(n){8 n.I.u==a.u}).F==1&&a},14:7(){p a=6,2B={};8 $([]).1d(6.U.14).1o(":1w").1L(":2s, :21, :4I, [4H]").1L(6.q.3l).1o(7(){!6.u&&a.q.2q&&2T.1z&&1z.3r("%o 4G 3K u 4F",6);l(6.u 11 2B||!a.2k($(6).1i()))8 N;2B[6.u]=w;8 w})},2G:7(a){8 $(a)[0]},2z:7(){8 $(6.q.2F+"."+6.q.1c,6.4t)},21:7(){6.1n=[];6.S=[];6.1v={};6.1k=$([]);6.13=$([]);6.2b=$([])},2H:7(){6.21();6.13=6.2z().1d(6.2x)},2P:7(a){6.21();6.13=6.1M(a)},29:7(d){d=6.2G(d);l(6.1E(d)){d=6.26(d.u)[0]}p a=$(d).1i();p c=N;Q(Y 11 a){p b={Y:Y,2n:a[Y]};3Q{p f=$.v.1N[Y].V(6,d.Z.1u(/\\r/g,""),d,b.2n);l(f=="1S-1Y"){c=w;6g}c=N;l(f=="1h"){6.13=6.13.1L(6.1M(d));8}l(!f){6.4B(d,b);8 N}}3f(e){6.q.2q&&2T.1z&&1z.6f("6e 6b 6a 69 I "+d.4z+", 29 47 \'"+b.Y+"\' Y",e);67 e;}}l(c)8;l(6.2k(a))6.1n.27(d);8 w},4y:7(a,b){l(!$.1H)8;p c=6.q.3a?$(a).1H()[6.q.3a]:$(a).1H();8 c&&c.G&&c.G[b]},4w:7(a,b){p m=6.q.G[a];8 m&&(m.2c==4v?m:m[b])},4u:7(){Q(p i=0;i<R.F;i++){l(R[i]!==20)8 R[i]}8 20},2u:7(a,b){8 6.4u(6.4w(a.u,b),6.4y(a,b),!6.q.3k&&a.62||20,$.v.G[b],"<4s>60: 5Z 1j 5Y Q "+a.u+"</4s>")},4B:7(b,a){p c=6.2u(b,a.Y),37=/\\$?\\{(\\d+)\\}/g;l(1g c=="7"){c=c.V(6,a.2n,b)}12 l(37.16(c)){c=1F.W(c.1u(37,\'{$1}\'),a.2n)}6.S.27({1j:c,I:b});6.1v[b.u]=c;6.1a[b.u]=c},2C:7(a){l(6.q.2t)a=a.1d(a.4q(6.q.2t));8 a},3m:7(){Q(p i=0;6.S[i];i++){p a=6.S[i];6.q.39&&6.q.39.V(6,a.I,6.q.1c,6.q.28);6.2E(a.I,a.1j)}l(6.S.F){6.1k=6.1k.1d(6.2x)}l(6.q.1x){Q(p i=0;6.1n[i];i++){6.2E(6.1n[i])}}l(6.q.1K){Q(p i=0,14=6.4p();14[i];i++){6.q.1K.V(6,14[i],6.q.1c,6.q.28)}}6.13=6.13.1L(6.1k);6.2Q();6.2C(6.1k).4o()},4p:7(){8 6.2b.1L(6.4n())},4n:7(){8 $(6.S).4m(7(){8 6.I})},2E:7(a,c){p b=6.1M(a);l(b.F){b.2v().22(6.q.1c);b.1s("4l")&&b.4k(c)}12{b=$("<"+6.q.2F+"/>").1s({"Q":6.34(a),4l:w}).22(6.q.1c).4k(c||"");l(6.q.2t){b=b.2A().4o().5V("<"+6.q.2t+"/>").4q()}l(!6.24.5S(b).F)6.q.4j?6.q.4j(b,$(a)):b.5R(a)}l(!c&&6.q.1x){b.3E("");1g 6.q.1x=="1D"?b.22(6.q.1x):6.q.1x(b)}6.1k=6.1k.1d(b)},1M:7(a){p b=6.34(a);8 6.2z().1o(7(){8 $(6).1s(\'Q\')==b})},34:7(a){8 6.2a[a.u]||(6.1E(a)?a.u:a.4z||a.u)},1E:7(a){8/3C|3A/i.16(a.1V)},26:7(d){p c=6.U;8 $(4i.5P(d)).4m(7(a,b){8 b.L==c&&b.u==d&&b||4g})},1O:7(a,b){23(b.4f.4e()){1e\'2e\':8 $("3z:3p",b).F;1e\'1w\':l(6.1E(b))8 6.26(b.u).1o(\':4h\').F}8 a.F},4d:7(b,a){8 6.32[1g b]?6.32[1g b](b,a):w},32:{"5N":7(b,a){8 b},"1D":7(b,a){8!!$(b,a.L).F},"7":7(b,a){8 b(a)}},K:7(a){8!$.v.1N.15.V(6,$.1p(a.Z),a)&&"1S-1Y"},4c:7(a){l(!6.1h[a.u]){6.1b++;6.1h[a.u]=w}},4b:7(a,b){6.1b--;l(6.1b<0)6.1b=0;T 6.1h[a.u];l(b&&6.1b==0&&6.1l&&6.L()){$(6.U).2s();6.1l=N}12 l(!b&&6.1b==0&&6.1l){$(6.U).3u("1f-L",[6]);6.1l=N}},2h:7(a){8 $.19(a,"2h")||$.19(a,"2h",{2M:4g,J:w,1j:6.2u(a,"1q")})}},1R:{15:{15:w},1J:{1J:w},1B:{1B:w},1A:{1A:w},2j:{2j:w},4a:{4a:w},1G:{1G:w},49:{49:w},1P:{1P:w},2f:{2f:w}},48:7(a,b){a.2c==4v?6.1R[a]=b:$.H(6.1R,a)},3V:7(b){p a={};p c=$(b).1s(\'5H\');c&&$.P(c.1I(\' \'),7(){l(6 11 $.v.1R){$.H(a,$.v.1R[6])}});8 a},3T:7(c){p a={};p d=$(c);Q(Y 11 $.v.1N){p b=d.1s(Y);l(b){a[Y]=b}}l(a.18&&/-1|5G|5C/.16(a.18)){T a.18}8 a},3Y:7(a){l(!$.1H)8{};p b=$.19(a.L,\'v\').q.3a;8 b?$(a).1H()[b]:$(a).1H()},36:7(b){p a={};p c=$.19(b.L,\'v\');l(c.q.1i){a=$.v.1X(c.q.1i[b.u])||{}}8 a},41:7(d,e){$.P(d,7(c,b){l(b===N){T d[c];8}l(b.2R||b.2p){p a=w;23(1g b.2p){1e"1D":a=!!$(b.2p,e.L).F;31;1e"7":a=b.2p.V(e,e);31}l(a){d[c]=b.2R!==20?b.2R:w}12{T d[c]}}});$.P(d,7(a,b){d[a]=$.44(b)?b(e):b});$.P([\'1y\',\'18\',\'1t\',\'1C\'],7(){l(d[6]){d[6]=2Z(d[6])}});$.P([\'2i\',\'2r\'],7(){l(d[6]){d[6]=[2Z(d[6][0]),2Z(d[6][1])]}});l($.v.3J){l(d.1t&&d.1C){d.2r=[d.1t,d.1C];T d.1t;T d.1C}l(d.1y&&d.18){d.2i=[d.1y,d.18];T d.1y;T d.18}}l(d.G){T d.G}8 d},1X:7(a){l(1g a=="1D"){p b={};$.P(a.1I(/\\s/),7(){b[6]=w});a=b}8 a},5A:7(c,a,b){$.v.1N[c]=a;$.v.G[c]=b!=20?b:$.v.G[c];l(a.F<3){$.v.48(c,$.v.1X(c))}},1N:{15:7(c,d,a){l(!6.4d(a,d))8"1S-1Y";23(d.4f.4e()){1e\'2e\':p b=$(d).33();8 b&&b.F>0;1e\'1w\':l(6.1E(d))8 6.1O(c,d)>0;5y:8 $.1p(c).F>0}},1q:7(f,h,j){l(6.K(h))8"1S-1Y";p g=6.2h(h);l(!6.q.G[h.u])6.q.G[h.u]={};g.40=6.q.G[h.u].1q;6.q.G[h.u].1q=g.1j;j=1g j=="1D"&&{1B:j}||j;l(g.2M!==f){g.2M=f;p k=6;6.4c(h);p i={};i[h.u]=f;$.2U($.H(w,{1B:j,3Z:"2Y",3X:"17"+h.u,5w:"5u",19:i,1x:7(d){k.q.G[h.u].1q=g.40;p b=d===w;l(b){p e=k.1l;k.2P(h);k.1l=e;k.1n.27(h);k.1m()}12{p a={};p c=(g.1j=d||k.2u(h,"1q"));a[h.u]=$.44(c)?c(f):c;k.1m(a)}g.J=b;k.4b(h,b)}},j));8"1h"}12 l(6.1h[h.u]){8"1h"}8 g.J},1y:7(b,c,a){8 6.K(c)||6.1O($.1p(b),c)>=a},18:7(b,c,a){8 6.K(c)||6.1O($.1p(b),c)<=a},2i:7(b,d,a){p c=6.1O($.1p(b),d);8 6.K(d)||(c>=a[0]&&c<=a[1])},1t:7(b,c,a){8 6.K(c)||b>=a},1C:7(b,c,a){8 6.K(c)||b<=a},2r:7(b,c,a){8 6.K(c)||(b>=a[0]&&b<=a[1])},1J:7(a,b){8 6.K(b)||/^((([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^X`{\\|}~]|[\\E-\\B\\C-\\x\\A-\\y])+(\\.([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^X`{\\|}~]|[\\E-\\B\\C-\\x\\A-\\y])+)*)|((\\3S)((((\\2m|\\1W)*(\\30\\3R))?(\\2m|\\1W)+)?(([\\3P-\\5q\\45\\42\\5D-\\5E\\3N]|\\5m|[\\5l-\\5k]|[\\5i-\\5K]|[\\E-\\B\\C-\\x\\A-\\y])|(\\\\([\\3P-\\1W\\45\\42\\30-\\3N]|[\\E-\\B\\C-\\x\\A-\\y]))))*(((\\2m|\\1W)*(\\30\\3R))?(\\2m|\\1W)+)?(\\3S)))@((([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])|(([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])*([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])))\\.)+(([a-z]|[\\E-\\B\\C-\\x\\A-\\y])|(([a-z]|[\\E-\\B\\C-\\x\\A-\\y])([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])*([a-z]|[\\E-\\B\\C-\\x\\A-\\y])))\\.?$/i.16(a)},1B:7(a,b){8 6.K(b)||/^(5h?|5M):\\/\\/(((([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])|(%[\\1U-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])|(([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])*([a-z]|\\d|[\\E-\\B\\C-\\x\\A-\\y])))\\.)+(([a-z]|[\\E-\\B\\C-\\x\\A-\\y])|(([a-z]|[\\E-\\B\\C-\\x\\A-\\y])([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])*([a-z]|[\\E-\\B\\C-\\x\\A-\\y])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])|(%[\\1U-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])|(%[\\1U-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])|(%[\\1U-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|[\\5e-\\5T]|\\/|\\?)*)?(\\#((([a-z]|\\d|-|\\.|X|~|[\\E-\\B\\C-\\x\\A-\\y])|(%[\\1U-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$/i.16(a)},1A:7(a,b){8 6.K(b)||!/5U|5c/.16(2w 5b(a))},2j:7(a,b){8 6.K(b)||/^\\d{4}[\\/-]\\d{1,2}[\\/-]\\d{1,2}$/.16(a)},1G:7(a,b){8 6.K(b)||/^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)(?:\\.\\d+)?$/.16(a)},1P:7(a,b){8 6.K(b)||/^\\d+$/.16(a)},2f:7(b,e){l(6.K(e))8"1S-1Y";l(/[^0-9-]+/.16(b))8 N;p a=0,d=0,2g=N;b=b.1u(/\\D/g,"");Q(p n=b.F-1;n>=0;n--){p c=b.59(n);p d=58(c,10);l(2g){l((d*=2)>9)d-=9}a+=d;2g=!2g}8(a%10)==0},43:7(b,c,a){a=1g a=="1D"?a.1u(/,/g,\'|\'):"57|56?g|55";8 6.K(c)||b.65(2w 3t(".("+a+")$","i"))},2o:7(c,d,a){p b=$(a).66(".17-2o").2I("3H.17-2o",7(){$(d).J()});8 c==b.33()}}});$.W=$.v.W})(1F);(7($){p c=$.2U;p d={};$.2U=7(a){a=$.H(a,$.H({},$.53,a));p b=a.3X;l(a.3Z=="2Y"){l(d[b]){d[b].2Y()}8(d[b]=c.1Q(6,R))}8 c.1Q(6,R)}})(1F);(7($){l(!1F.1r.38.2d&&!1F.1r.38.2J&&4i.3G){$.P({3g:\'2d\',3H:\'2J\'},7(b,a){$.1r.38[a]={50:7(){6.3G(b,2y,w)},4Z:7(){6.4Y(b,2y,w)},2y:7(e){R[0]=$.1r.2O(e);R[0].1V=a;8 $.1r.1T.1Q(6,R)}};7 2y(e){e=$.1r.2O(e);e.1V=a;8 $.1r.1T.V(6,e)}})};$.H($.2L,{2K:7(d,e,c){8 6.2I(e,7(a){p b=$(a.4X);l(b.2W(d)){8 c.1Q(b,R)}})}})})(1F);',62,389,'||||||this|function|return|||||||||||||if||||var|settings||||name|validator|true|uFDCF|uFFEF||uFDF0|uD7FF|uF900||u00A0|length|messages|extend|element|valid|optional|form|Please|false|enter|each|for|arguments|errorList|delete|currentForm|call|format|_|method|value||in|else|toHide|elements|required|test|validate|maxlength|data|submitted|pendingRequest|errorClass|add|case|invalid|typeof|pending|rules|message|toShow|formSubmitted|showErrors|successList|filter|trim|remote|event|attr|min|replace|errorMap|input|success|minlength|console|date|url|max|string|checkable|jQuery|number|metadata|split|email|unhighlight|not|errorsFor|methods|getLength|digits|apply|classRuleSettings|dependency|handle|da|type|x09|normalizeRule|mismatch|submitButton|undefined|reset|addClass|switch|labelContainer||findByName|push|validClass|check|groups|currentElements|constructor|focusin|select|creditcard|bEven|previousValue|rangelength|dateISO|objectLength|focusInvalid|x20|parameters|equalTo|depends|debug|range|submit|wrapper|defaultMessage|removeClass|new|containers|handler|errors|hide|rulesCache|addWrapper|errorLabelContainer|showLabel|errorElement|clean|prepareForm|bind|focusout|validateDelegate|fn|old|delegate|fix|prepareElement|hideErrors|param|resetForm|window|ajax|characters|is|than|abort|Number|x0d|break|dependTypes|val|idOrName|submitHandler|staticRules|theregex|special|highlight|meta|cancelSubmit|eventType|defaults|click|catch|focus|findLastActive|button|size|ignoreTitle|ignore|defaultShowErrors|grep|errorContainer|selected|numberOfInvalids|error|find|RegExp|triggerHandler|checkForm|invalidHandler|onsubmit|nothing|option|checkbox|Array|radio|remove|text|makeArray|addEventListener|blur|init|autoCreateRanges|no|to|equal|x7f|and|x01|try|x0a|x22|attributeRules|lastActive|classRules|between|port|metadataRules|mode|originalMessage|normalizeRules|x0c|accept|isFunction|x0b|or|the|addClassRules|numberDE|dateDE|stopRequest|startRequest|depend|toLowerCase|nodeName|null|checked|document|errorPlacement|html|generated|map|invalidElements|show|validElements|parent|field|strong|errorContext|findDefined|String|customMessage|parentNode|customMetaMessage|id|lastElement|formatAndAdd|onfocusout|removeAttrs|cancel|assigned|has|disabled|image|blockFocusCleanup|focusCleanup|can|trigger|visible|onfocusin|label|slice|keyup|textarea|file|password|unshift|on|target|removeEventListener|teardown|setup|appendTo|warn|ajaxSettings|valueCache|gif|jpe|png|parseInt|charAt|prototype|Date|NaN|greater|uE000|unchecked|filled|https|x5d|less|x5b|x23|x21|blank|long|expr|x08|hidden|least|at|json|more|dataType|extension|default|with|addMethod|again|524288|x0e|x1f|same|2147483647|class|card|preventDefault|x7e|credit|ftp|boolean|only|getElementsByName|ISO|insertAfter|append|uF8FF|Invalid|wrap|URL|address|defined|No|Warning|This|title|setDefaults|returning|match|unbind|throw|onclick|checking|when|occured|onkeyup|removeAttr|exception|log|continue'.split('|'),0,{}));


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * uisearch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
    
    'use strict';
    
    // EventListener | @jon_neal | //github.com/jonathantneal/EventListener
    !window.addEventListener && window.Element && (function () {
       function addToPrototype(name, method) {
          Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
       }
     
       var registry = [];
     
       addToPrototype("addEventListener", function (type, listener) {
          var target = this;
     
          registry.unshift({
             __listener: function (event) {
                event.currentTarget = target;
                event.pageX = event.clientX + document.documentElement.scrollLeft;
                event.pageY = event.clientY + document.documentElement.scrollTop;
                event.preventDefault = function () { event.returnValue = false };
                event.relatedTarget = event.fromElement || null;
                event.stopPropagation = function () { event.cancelBubble = true };
                event.relatedTarget = event.fromElement || null;
                event.target = event.srcElement || target;
                event.timeStamp = +new Date;
     
                listener.call(target, event);
             },
             listener: listener,
             target: target,
             type: type
          });
     
          this.attachEvent("on" + type, registry[0].__listener);
       });
     
       addToPrototype("removeEventListener", function (type, listener) {
          for (var index = 0, length = registry.length; index < length; ++index) {
             if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
             }
          }
       });
     
       addToPrototype("dispatchEvent", function (eventObject) {
          try {
             return this.fireEvent("on" + eventObject.type, eventObject);
          } catch (error) {
             for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == eventObject.type) {
                   registry[index].call(this, eventObject);
                }
             }
          }
       });
    })();

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }
    
    // http://www.jonathantneal.com/blog/polyfills-and-prototypes/
    !String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    });

    function UISearch( el, options ) {  
        this.el = el;
        this.inputEl = el.querySelector( 'form > input.sb-search-input' );
        this._initEvents();
    }

    UISearch.prototype = {
        _initEvents : function() {
            var self = this,
                initSearchFn = function( ev ) {
                    ev.stopPropagation();
                    // trim its value
                    self.inputEl.value = self.inputEl.value.trim();
                    
                    if( !classie.has( self.el, 'sb-search-open' ) ) { // open it
                        ev.preventDefault();
                        self.open();
                    }
                    else if( classie.has( self.el, 'sb-search-open' ) && /^\s*$/.test( self.inputEl.value ) ) { // close it
                        ev.preventDefault();
                        self.close();
                    }
                }

            this.el.addEventListener( 'click', initSearchFn );
            this.el.addEventListener( 'touchstart', initSearchFn );
            this.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); });
            this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
        },
        open : function() {
            var self = this;
            classie.add( this.el, 'sb-search-open' );
            // focus the input
            if( !mobilecheck() ) {
                this.inputEl.focus();
            }
            // close the search input if body is clicked
            var bodyFn = function( ev ) {
                self.close();
                this.removeEventListener( 'click', bodyFn );
                this.removeEventListener( 'touchstart', bodyFn );
            };
            document.addEventListener( 'click', bodyFn );
            document.addEventListener( 'touchstart', bodyFn );
        },
        close : function() {
            this.inputEl.blur();
            classie.remove( this.el, 'sb-search-open' );
        }
    }

    // add to global namespace
    window.UISearch = UISearch;

} )( window );




/*Nav-bar*/
!function(){"use strict";var a=function(a,b){var c=!!window.getComputedStyle;c||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var d,e,f,g,h,i=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},j=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},k=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},l=function(a,b){for(var c in b)a.setAttribute(c,b[c])},m=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},n=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},o=document.createElement("style"),p=function(a,b){var c;this.options={animate:!0,transition:250,label:"Menu",insert:"after",customToggle:"",openPos:"relative",navClass:"nav-collapse",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(c in b)this.options[c]=b[c];if(m(document.documentElement,this.options.jsClass),this.wrapperEl=a.replace("#",""),document.getElementById(this.wrapperEl))this.wrapper=document.getElementById(this.wrapperEl);else{if(!document.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=document.querySelector(this.wrapperEl)}this.wrapper.inner=k(this.wrapper),e=this.options,d=this.wrapper,this._init(this)};return p.prototype={destroy:function(){this._removeStyles(),n(d,"closed"),n(d,"opened"),n(d,e.navClass),d.removeAttribute("style"),d.removeAttribute("aria-hidden"),j(window,"resize",this,!1),j(document.body,"touchmove",this,!1),j(f,"touchstart",this,!1),j(f,"touchend",this,!1),j(f,"mouseup",this,!1),j(f,"keyup",this,!1),j(f,"click",this,!1),e.customToggle?f.removeAttribute("aria-hidden"):f.parentNode.removeChild(f)},toggle:function(){g===!0&&(h?(n(d,"opened"),m(d,"closed"),l(d,{"aria-hidden":"true"}),e.animate?(g=!1,setTimeout(function(){d.style.position="absolute",g=!0},e.transition+10)):d.style.position="absolute",h=!1,e.close()):(n(d,"closed"),m(d,"opened"),d.style.position=e.openPos,l(d,{"aria-hidden":"false"}),h=!0,e.open()))},resize:function(){"none"!==window.getComputedStyle(f,null).getPropertyValue("display")?(l(f,{"aria-hidden":"false"}),d.className.match(/(^|\s)closed(\s|$)/)&&(l(d,{"aria-hidden":"true"}),d.style.position="absolute"),this._createStyles(),this._calcHeight()):(l(f,{"aria-hidden":"true"}),l(d,{"aria-hidden":"false"}),d.style.position=e.openPos,this._removeStyles())},handleEvent:function(a){var b=a||window.event;switch(b.type){case"touchstart":this._onTouchStart(b);break;case"touchmove":this._onTouchMove(b);break;case"touchend":case"mouseup":this._onTouchEnd(b);break;case"click":this._preventDefault(b);break;case"keyup":this._onKeyUp(b);break;case"resize":this.resize(b)}},_init:function(){m(d,e.navClass),m(d,"closed"),g=!0,h=!1,this._createToggle(),this._transitions(),this.resize();var a=this;setTimeout(function(){a.resize()},20),i(window,"resize",this,!1),i(document.body,"touchmove",this,!1),i(f,"touchstart",this,!1),i(f,"touchend",this,!1),i(f,"mouseup",this,!1),i(f,"keyup",this,!1),i(f,"click",this,!1),e.init()},_createStyles:function(){o.parentNode||(o.type="text/css",document.getElementsByTagName("head")[0].appendChild(o))},_removeStyles:function(){o.parentNode&&o.parentNode.removeChild(o)},_createToggle:function(){if(e.customToggle){var a=e.customToggle.replace("#","");if(document.getElementById(a))f=document.getElementById(a);else{if(!document.querySelector(a))throw new Error("The custom nav toggle you are trying to select doesn't exist");f=document.querySelector(a)}}else{var b=document.createElement("a");b.innerHTML=e.label,l(b,{href:"#","class":"nav-toggle"}),"after"===e.insert?d.parentNode.insertBefore(b,d.nextSibling):d.parentNode.insertBefore(b,d),f=b}},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onTouchStart:function(a){a.stopPropagation(),m(d,"disable-pointer-events"),this.startX=a.touches[0].clientX,this.startY=a.touches[0].clientY,this.touchHasMoved=!1,j(f,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(a){if(this._preventDefault(a),!this.touchHasMoved){if("touchend"===a.type)return this.toggle(a),setTimeout(function(){n(d,"disable-pointer-events")},e.transition+300),void 0;var b=a||window.event;3!==b.which&&2!==b.button&&this.toggle(a)}},_onKeyUp:function(a){var b=a||window.event;13===b.keyCode&&this.toggle(a)},_transitions:function(){if(e.animate){var a=d.style,b="max-height "+e.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<d.inner.length;b++)a+=d.inner[b].offsetHeight;var c="."+e.navClass+".opened{max-height:"+a+"px !important}";o.styleSheet?o.styleSheet.cssText=c:o.innerHTML=c,c=""}},new p(a,b)};window.responsiveNav=a}();




/*!
 * jQuery Final Countdown
 *
 * @author Pragmatic Mates, http://pragmaticmates.com
 * @version 1.1.1
 * @license GPL 2
 * @link https://github.com/PragmaticMates/jquery-final-countdown
 */
(function($){var settings;var timer;var circleSeconds;var circleMinutes;var circleHours;var circleDays;var layerSeconds;var layerMinutes;var layerHours;var layerDays;var element;var callbackFunction;$.fn.final_countdown=function(options,callback){element=$(this);var defaults=$.extend({start:undefined,end:undefined,now:undefined,selectors:{value_seconds:'.clock-seconds .val',canvas_seconds:'canvas-seconds',value_minutes:'.clock-minutes .val',canvas_minutes:'canvas-minutes',value_hours:'.clock-hours .val',canvas_hours:'canvas-hours',value_days:'.clock-days .val',canvas_days:'canvas-days'},seconds:{borderColor:'#7995D5',borderWidth:'6'},minutes:{borderColor:'#ACC742',borderWidth:'6'},hours:{borderColor:'#ECEFCB',borderWidth:'6'},days:{borderColor:'#FF9900',borderWidth:'6'}},options);settings=$.extend({},defaults,options);if(settings.start===undefined)settings.start=element.data('start');if(settings.end===undefined)settings.end=element.data('end');if(settings.now===undefined)settings.now=element.data('now');if(element.data('border-color'))settings.seconds.borderColor=settings.minutes.borderColor=settings.hours.borderColor=settings.days.borderColor=element.data('border-color');if(settings.now<settings.start){settings.start=settings.now;settings.end=settings.now;}if(settings.now>settings.end){settings.start=settings.now;settings.end=settings.now;}if(typeof callback=='function')callbackFunction=callback;responsive();dispatchTimer();prepareCounters();startCounters();};function responsive(){$(window).load(updateCircles);$(window).on('redraw',function(){switched=false;updateCircles();});$(window).on('resize',updateCircles);}function updateCircles(){layerSeconds.draw();layerMinutes.draw();layerHours.draw();layerDays.draw();}function convertToDeg(degree){return(Math.PI/180)*degree-(Math.PI/180)*90;}function dispatchTimer(){timer={total:Math.floor((settings.end-settings.start)/86400),days:Math.floor((settings.end-settings.now)/86400),hours:24-Math.floor(((settings.end-settings.now)%86400)/3600),minutes:60-Math.floor((((settings.end-settings.now)%86400)%3600)/60),seconds:60-Math.floor((((settings.end-settings.now)%86400)%3600)%60)};}function prepareCounters(){var seconds_width=$('#'+settings.selectors.canvas_seconds).width();var secondsStage=new Kinetic.Stage({container:settings.selectors.canvas_seconds,width:seconds_width,height:seconds_width});circleSeconds=new Kinetic.Shape({drawFunc:function(context){var seconds_width=$('#'+settings.selectors.canvas_seconds).width();var radius=seconds_width/2-settings.seconds.borderWidth/2;var x=seconds_width/2;var y=seconds_width/2;context.beginPath();context.arc(x,y,radius,convertToDeg(0),convertToDeg(timer.seconds*6));context.fillStrokeShape(this);$(settings.selectors.value_seconds).html(60-timer.seconds);},stroke:settings.seconds.borderColor,strokeWidth:settings.seconds.borderWidth});layerSeconds=new Kinetic.Layer();layerSeconds.add(circleSeconds);secondsStage.add(layerSeconds);var minutes_width=$('#'+settings.selectors.canvas_minutes).width();var minutesStage=new Kinetic.Stage({container:settings.selectors.canvas_minutes,width:minutes_width,height:minutes_width});circleMinutes=new Kinetic.Shape({drawFunc:function(context){var minutes_width=$('#'+settings.selectors.canvas_minutes).width();var radius=minutes_width/2-settings.minutes.borderWidth/2;var x=minutes_width/2;var y=minutes_width/2;context.beginPath();context.arc(x,y,radius,convertToDeg(0),convertToDeg(timer.minutes*6));context.fillStrokeShape(this);$(settings.selectors.value_minutes).html(60-timer.minutes);},stroke:settings.minutes.borderColor,strokeWidth:settings.minutes.borderWidth});layerMinutes=new Kinetic.Layer();layerMinutes.add(circleMinutes);minutesStage.add(layerMinutes);var hours_width=$('#'+settings.selectors.canvas_hours).width();var hoursStage=new Kinetic.Stage({container:settings.selectors.canvas_hours,width:hours_width,height:hours_width});circleHours=new Kinetic.Shape({drawFunc:function(context){var hours_width=$('#'+settings.selectors.canvas_hours).width();var radius=hours_width/2-settings.hours.borderWidth/2;var x=hours_width/2;var y=hours_width/2;context.beginPath();context.arc(x,y,radius,convertToDeg(0),convertToDeg(timer.hours*360/24));context.fillStrokeShape(this);$(settings.selectors.value_hours).html(24-timer.hours);},stroke:settings.hours.borderColor,strokeWidth:settings.hours.borderWidth});layerHours=new Kinetic.Layer();layerHours.add(circleHours);hoursStage.add(layerHours);var days_width=$('#'+settings.selectors.canvas_days).width();var daysStage=new Kinetic.Stage({container:settings.selectors.canvas_days,width:days_width,height:days_width});circleDays=new Kinetic.Shape({drawFunc:function(context){var days_width=$('#'+settings.selectors.canvas_days).width();var radius=days_width/2-settings.days.borderWidth/2;var x=days_width/2;var y=days_width/2;context.beginPath();if(timer.total==0)context.arc(x,y,radius,convertToDeg(0),convertToDeg(360));else context.arc(x,y,radius,convertToDeg(0),convertToDeg((360/timer.total)*(timer.total-timer.days)));context.fillStrokeShape(this);$(settings.selectors.value_days).html(timer.days);},stroke:settings.days.borderColor,strokeWidth:settings.days.borderWidth});layerDays=new Kinetic.Layer();layerDays.add(circleDays);daysStage.add(layerDays);}function startCounters(){var interval=setInterval(function(){if(timer.seconds>59){if(60-timer.minutes==0&&24-timer.hours==0&&timer.days==0){clearInterval(interval);if(callbackFunction!==undefined)callbackFunction.call(this);return;}timer.seconds=1;if(timer.minutes>59){timer.minutes=1;layerMinutes.draw();if(timer.hours>23){timer.hours=1;if(timer.days>0){timer.days--;layerDays.draw();}}else timer.hours++;layerHours.draw();}else timer.minutes++;layerMinutes.draw();}else timer.seconds++;layerSeconds.draw();},1000);}})(jQuery);





/*! jQuery UI - v1.10.4 - 2014-02-16
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);

/*! jQuery UI - v1.10.4 - 2014-02-16
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);

/*! jQuery UI - v1.10.4 - 2014-02-16
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);


/* Owl Carousel */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}



// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);            
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);
            
            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if(typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });
                
                // Show correct content area
                var tabNum = 0;
                if(hash!='') {
                    var matches = hash.match(new RegExp(respTabsId+"([0-9]+)"));
                    if (matches!==null && matches.length===2) {
                        tabNum = parseInt(matches[1],10)-1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item')[tabNum]).addClass('resp-tab-active');

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {                  
                    $($respTabs.find('.resp-accordion')[tabNum]).addClass('resp-tab-active');
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active').attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active resp-accordion-closed')
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                   
                    var $currentTab = $(this);
                    $currentTab.click(function () {
                        
                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                        
                        //Update Browser History
                        if(historyApi) {
                            var currentHash = window.location.hash;
                            var newHash = respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();
                            if (currentHash!="") {
                                var re = new RegExp(respTabsId+"[0-9]+");
                                if (currentHash.match(re)!=null) {                                    
                                    newHash = currentHash.replace(re,newHash);
                                }
                                else {
                                    newHash = currentHash+"|"+newHash;
                                }
                            }
                            else {
                                newHash = '#'+newHash;
                            }
                            
                            history.replaceState(null,null,newHash);
                        }
                    });
                    
                });
                
                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);




// Place any jQuery/helper plugins in here.

/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){return function(b){var c=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(c)for(var e=0,f=c.length;f>e;++e){var g=c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),i=new RegExp(g[0]),j=g[1]||"",k=g[3]||"",l=null;g=g[2],h.hasOwnProperty(g)&&(l=h[g],l=Number(a[l])),null!==l&&("!"===j&&(l=d(k,l)),""===j&&10>l&&(l="0"+l.toString()),b=b.replace(i,l.toString()))}return b=b.replace(/%%/,"%")}}function d(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var e=100,f=[],g=[];g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var h={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},i=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)),this.setFinalDate(c),this.start()};a.extend(i.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},e)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){return 0===this.$el.closest("html").length?void this.remove():(this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},void(0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")))},dispatchEvent:function(b){var d=a.Event(b+".countdown");d.finalDate=this.finalDate,d.offset=a.extend({},this.offset),d.strftime=c(this.offset),this.$el.trigger(d)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];i.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new i(this,b[0],b[1])})}});


/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);

/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2014, John Dyer (http://j.hn)
* License: MIT
*
*/var mejs=mejs||{};mejs.version="2.14.2";mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo",
"video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",g,f,i=document.getElementsByTagName("script"),k=i.length,h=a.length;b<k;b++){g=i[b].src;c=g.lastIndexOf("/");if(c>-1){f=g.substring(c+
1);g=g.substring(0,c+1)}else{f=g;g=""}for(c=0;c<h;c++){e=a[c];e=f.indexOf(e);if(e>-1){d=g;break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,g=Math.floor(a/60)%60,f=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(g<10?"0"+g:g)+":"+(f<10?"0"+f:f)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d==
"undefined")d=25;a=a.split(":");b=parseInt(a[0],10);var e=parseInt(a[1],10),g=parseInt(a[2],10),f=0,i=0;if(c)f=parseInt(a[3])/d;return i=b*3600+e*60+g+f},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&/object|embed/i.test(b.nodeName))if(mejs.MediaFeatures.isIE){b.style.display=
"none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],g;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(g=new ActiveXObject(c))e=d(g)}catch(f){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,g,f){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[g]+=f;e[g]-=f};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,g=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isBustedNativeHTTPS=location.protocol==="https:"&&(d.match(/android [12]\./)!==null||d.match(/macintosh.* version.* safari/)!==null);a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=
-1||c.appName.toLowerCase().match(/trident/gi)!==null;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit&&!a.isIE;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<g.length;c++)e=document.createElement(g[c]);a.supportsMediaTag=typeof e.canPlayType!==
"undefined"||a.isBustedAndroid;try{e.canPlayType("video/mp4")}catch(f){a.supportsMediaTag=false}a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasNativeFullscreen=typeof e.requestFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasMsNativeFullScreen=typeof e.msRequestFullscreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen||
a.hasMsNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=document.mozFullScreenEnabled;else if(a.hasMsNativeFullScreen)a.nativeFullScreenEnabled=document.msFullscreenEnabled;if(a.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName="";if(a.hasWebkitNativeFullScreen)a.fullScreenEventName="webkitfullscreenchange";else if(a.hasMozNativeFullScreen)a.fullScreenEventName="mozfullscreenchange";
else if(a.hasMsNativeFullScreen)a.fullScreenEventName="MSFullscreenChange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen;else if(e.hasMsNativeFullScreen)return b.msFullscreenElement!==null};a.requestFullScreen=function(i){if(a.hasWebkitNativeFullScreen)i.webkitRequestFullScreen();else if(a.hasMozNativeFullScreen)i.mozRequestFullScreen();else a.hasMsNativeFullScreen&&i.msRequestFullscreen()};a.cancelFullScreen=
function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else if(a.hasMozNativeFullScreen)document.mozCancelFullScreen();else a.hasMsNativeFullScreen&&document.msExitFullscreen()}}if(a.hasSemiNativeFullScreen&&d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};
mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType==
"vimeo"||this.pluginApi.loadMedia();this.paused=false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,
d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably"}return""},positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,
c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);
this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else this.pluginApi.setMuted(a);this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=
null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(var d=
0;d<c.length;d++)if(c[d]===b){this.events[a].splice(d,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id);
mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a];delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);
b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;if(a=this.pluginMediaElements[a]){b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,
defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),g=e==="audio"||e==="video",f=g?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var i=d.getAttribute("autoplay"),k=d.getAttribute("preload"),h=d.getAttribute("controls"),j;for(j in b)c[j]=b[j];f=typeof f=="undefined"||f===null||f==""?null:f;e=typeof e=="undefined"||e===null?"":e;k=typeof k=="undefined"||k===null||k==="false"?
"none":k;i=!(typeof i=="undefined"||i===null||i==="false");h=!(typeof h=="undefined"||h===null||h==="false");j=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,g,f);j.url=j.url!==null?mejs.Utility.absolutizeUrl(j.url):"";if(j.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=j.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(j,c,i,k)}else if(j.method!=="")return this.createPlugin(j,c,e,i,k,h);else{this.createErrorMessage(j,c,e);return this}},
determinePlayback:function(a,b,c,d,e){var g=[],f,i,k,h={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},j;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")g.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)g.push({type:b.type[f],url:e});else if(e!==null){k=this.formatType(e,a.getAttribute("type"));g.push({type:k,url:e})}else for(f=0;f<a.childNodes.length;f++){i=a.childNodes[f];if(i.nodeType==1&&i.tagName.toLowerCase()=="source"){e=i.getAttribute("src");
k=this.formatType(e,i.getAttribute("type"));i=i.getAttribute("media");if(!i||!window.matchMedia||window.matchMedia&&window.matchMedia(i).matches)g.push({type:k,url:e})}}if(!d&&g.length>0&&g[0].url!==null&&this.getTypeFromFile(g[0].url).indexOf("audio")>-1)h.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")&&!(mejs.MediaFeatures.isBustedNativeHTTPS&&
b.httpsBasicAuthSite===true)){if(!d){f=document.createElement(h.isVideo?"video":"audio");a.parentNode.insertBefore(f,a);a.style.display="none";h.htmlMediaElement=a=f}for(f=0;f<g.length;f++)if(a.canPlayType(g[f].type).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/m4a/,"mp4")).replace(/no/,"")!==""){h.method="native";h.url=g[f].url;break}if(h.method==="native"){if(h.url!==null)a.src=h.url;if(b.mode!=="auto_plugin")return h}}if(b.mode===
"auto"||b.mode==="auto_plugin"||b.mode==="shim")for(f=0;f<g.length;f++){k=g[f].type;for(a=0;a<b.plugins.length;a++){e=b.plugins[a];i=mejs.plugins[e];for(c=0;c<i.length;c++){j=i[c];if(j.version==null||mejs.PluginDetector.hasPluginVersion(e,j.version))for(d=0;d<j.types.length;d++)if(k==j.types[d]){h.method=e;h.url=g[f].url;return h}}}}if(b.mode==="auto_plugin"&&h.method==="native")return h;if(h.method===""&&g.length>0)h.url=g[0].url;return h},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):
b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];a=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case "mp4":case "m4v":case "m4a":return"mp4";case "webm":case "webma":case "webmv":return"webm";case "ogg":case "oga":case "ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=
a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px";e.style.height=d.height+"px"}catch(g){}e.innerHTML=b.customError?b.customError:c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,g){c=a.htmlMediaElement;var f=1,i=1,k="me_"+a.method+"_"+mejs.meIndex++,
h=new mejs.PluginMediaElement(k,a.method,a.url),j=document.createElement("div"),m;h.tagName=c.tagName;for(m=0;m<c.attributes.length;m++){var q=c.attributes[m];q.specified==true&&h.setAttribute(q.name,q.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!=="body"&&m.parentNode!=null;){if(m.parentNode.tagName.toLowerCase()==="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){f=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==
null?c.getAttribute("width"):b.defaultVideoWidth;i=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;f=mejs.Utility.encodeUrl(f);i=mejs.Utility.encodeUrl(i)}else if(b.enablePluginDebug){f=320;i=240}h.success=b.success;mejs.MediaPluginBridge.registerPluginElement(k,h,c);j.className="me-plugin";j.id=k+"_container";a.isVideo?c.parentNode.insertBefore(j,c):document.body.insertBefore(j,document.body.childNodes[0]);
d=["id="+k,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+i,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");b.enablePseudoStreaming&&d.push("pseudostreaming=true");
g&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case "silverlight":j.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+k+'" name="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+
b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){a=document.createElement("div");j.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'}else j.innerHTML=
'<embed id="'+k+'" name="'+k+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+f+'" height="'+i+'" scale="default"class="mejs-shim"></embed>';break;case "youtube":if(a.url.lastIndexOf("youtu.be")!=-1){a=a.url.substr(a.url.lastIndexOf("/")+1);if(a.indexOf("?")!=
-1)a=a.substr(0,a.indexOf("?"))}else a=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:j,containerId:j.id,pluginMediaElement:h,pluginId:k,videoId:a,height:i,width:f};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case "vimeo":b=k+"_player";h.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);j.innerHTML='<iframe src="//player.vimeo.com/video/'+h.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+
b+'" width="'+f+'" height="'+i+'" frameborder="0" class="mejs-shim" id="'+b+'"></iframe>';if(typeof $f=="function"){var l=$f(j.childNodes[0]);l.addEvent("ready",function(){function o(n,p,r,s){n={type:r,target:p};if(r=="timeupdate"){p.currentTime=n.currentTime=s.seconds;p.duration=n.duration=s.duration}p.dispatchEvent(n.type,n)}l.playVideo=function(){l.api("play")};l.pauseVideo=function(){l.api("pause")};l.seekTo=function(n){l.api("seekTo",n)};l.addEvent("play",function(){o(l,h,"play");o(l,h,"playing")});
l.addEvent("pause",function(){o(l,h,"pause")});l.addEvent("finish",function(){o(l,h,"ended")});l.addEvent("playProgress",function(n){o(l,h,"timeupdate",n)});h.pluginApi=l;mejs.MediaPluginBridge.initPlugin(k)})}else console.warn("You need to include froogaloop for vimeo to work")}c.style.display="none";c.removeAttribute("autoplay");return h},updateNative:function(a,b){var c=a.htmlMediaElement,d;for(d in mejs.HtmlMediaElement)c[d]=mejs.HtmlMediaElement[d];b.success(c,c);return c}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,
{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;
c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=
a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+
c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=
document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case -1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;
c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;
(function(a,b){var c={locale:{language:"",strings:{}},methods:{}};c.getLanguage=function(){return(c.locale.language||window.navigator.userLanguage||window.navigator.language).substr(0,2).toLowerCase()};if(typeof mejsL10n!="undefined")c.locale.language=mejsL10n.language;c.methods.checkPlain=function(d){var e,g,f={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};d=String(d);for(e in f)if(f.hasOwnProperty(e)){g=RegExp(e,"g");d=d.replace(g,f[e])}return d};c.methods.t=function(d,e){if(c.locale.strings&&
c.locale.strings[e.context]&&c.locale.strings[e.context][d])d=c.locale.strings[e.context][d];return c.methods.checkPlain(d)};c.t=function(d,e){if(typeof d==="string"&&d.length>0){var g=c.getLanguage();e=e||{context:g};return c.methods.t(d,e)}else throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};};b.i18n=c})(document,mejs);(function(a){if(typeof mejsL10n!="undefined")a[mejsL10n.language]=mejsL10n.strings})(mejs.i18n.locale.strings);
(function(a){if(typeof a.de==="undefined")a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);(function(a){if(typeof a.zh==="undefined")a.zh={Fullscreen:"\u5168\u87a2\u5e55","Go Fullscreen":"\u5168\u5c4f\u6a21\u5f0f","Turn off Fullscreen":"\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",Close:"\u95dc\u9589"}})(mejs.i18n.locale.strings);



/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;
(function(f){mejs.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,
hideVideoControlsOnLoad:false,clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-
0.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!=
"undefined")a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}}]};mejs.mepIndex=0;mejs.players={};mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);this.id="mep_"+mejs.mepIndex++;
mejs.players[this.id]=this;this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(d,g){a.meReady(d,g)},error:function(d){a.handleError(d)}}),e=a.media.tagName.toLowerCase();a.isDynamic=e!=="audio"&&e!=="video";a.isVideo=a.isDynamic?a.options.isVideo:e!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls",
"controls");b.isiPad&&a.media.getAttribute("autoplay")!==null&&a.play()}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);a.container.addClass((b.isAndroid?
"mejs-android ":"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$media.remove();a.$node=a.$media=b;a.node=a.media=b[0]}else a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";e=b.substring(0,1).toUpperCase()+b.substring(1);
a.width=a.options[b+"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+e+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):
a.options["default"+e+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.width;c.pluginHeight=a.height}mejs.MediaElement(a.$media[0],c);typeof a.container!="undefined"&&a.controlsAreVisible&&a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility",
"visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!(!b.controlsAreVisible||b.options.alwaysShowControls))if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility",
"hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=
this;a=typeof a!="undefined"?a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},
meReady:function(a,b){var c=this,e=mejs.MediaFeatures,d=b.getAttribute("autoplay");d=!(typeof d=="undefined"||d===null||d==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(e.isAndroid&&c.options.AndroidUseNativeControls)&&!(e.isiPad&&c.options.iPadUseNativeControls)&&!(e.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){e=
c.options.features[g];if(c["build"+e])try{c["build"+e](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else c.controlsEnabled&&c.showControls(false)});else{c.clickToPlayPauseCallback=function(){if(c.options.clickToPlayPause)c.media.paused?c.play():c.pause()};c.media.addEventListener("click",
c.clickToPlayPauseCallback,false);c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1E3)})}c.options.hideVideoControlsOnLoad&&
c.hideControls(false);d&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(j){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&!isNaN(j.target.videoHeight)){c.setPlayerSize(j.target.videoWidth,j.target.videoHeight);c.setControlsSize();c.media.setVideoSize(j.target.videoWidth,j.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var j in mejs.players){var m=mejs.players[j];m.id!=c.id&&
c.options.pauseOtherPlayers&&!m.paused&&!m.ended&&m.pause();m.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(j){}c.media.pause();c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration();c.updateCurrent&&
c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}d&&a.pluginType=="native"&&c.play();if(c.options.success)typeof c.options.success==
"string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||parseInt(this.$node.css("max-width").replace(/px/,""),10)/this.$node.offsetParent().width()===1||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth===
"100%"){var c=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:this.options.defaultAudioHeight,d=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(d*e/c,10):e;if(isNaN(c))c=this.container.parent().closest(":visible").height();if(this.container.parent()[0].tagName.toLowerCase()===
"body"){d=f(window).width();c=f(window).height()}if(c!=0&&d!=0){this.container.width(d).height(c);this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(d,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)}d=this.layers.find(".mejs-overlay-play");c=d.find(".mejs-overlay-button");
d.height(this.container.height()-this.controls.height());c.css("margin-top","-"+(c.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var d=c.siblings(),g=d.last(),k=null;if(!(!this.container.is(":visible")||!c.length||!c.is(":visible"))){if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));
if(b===0||!b){d.each(function(){var j=f(this);if(j.css("position")!="absolute"&&j.is(":visible"))a+=f(this).outerWidth(true)});b=this.controls.width()-a-(c.outerWidth(true)-c.width())}do{c.width(b);e.width(b-(e.outerWidth(true)-e.width()));if(g.css("position")!="absolute"){k=g.position();b--}}while(k!=null&&k.top>0&&b>0);this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()}},buildposter:function(a,b,c,e){var d=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):d.hide();e.addEventListener("play",function(){d.hide()},false);a.options.showPosterWhenEnded&&a.options.autoRewind&&e.addEventListener("ended",function(){d.show()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),c=b.find("img");if(c.length==0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a);b.css({"background-image":"url("+a+")"})},buildoverlays:function(a,
b,c,e){var d=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),j=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart",function(){d.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){j.hide();
g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("playing",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||j.show()},false);e.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},
false);e.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("error",function(){g.hide();b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,e){this.globalBind("keydown",function(d){if(a.hasFocus&&a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<
k;g++)for(var j=a.options.keyActions[g],m=0,q=j.keys.length;m<q;m++)if(d.keyCode==j.keys[m]){d.preventDefault();j.action(a,e,d.keyCode);return false}return true});this.globalBind("click",function(d){a.hasFocus=f(d.target).closest(".mejs-container").length!=0})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,e){e=f(e);a.tracks.push({srclang:e.attr("srclang")?e.attr("srclang").toLowerCase():"",src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label")||"",entries:[],
isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.load();this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load();this.isLoaded=true},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},
getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features){b=this.options.features[a];if(this["clean"+b])try{this["clean"+b](this)}catch(c){}}if(this.isDynamic)this.$node.insertBefore(this.container);else{this.$media.prop("controls",true);this.$node.clone().show().insertBefore(this.container);this.$node.remove()}this.media.pluginType!=="native"&&this.media.remove();delete mejs.players[this.id];typeof this.container==
"object"&&this.container.remove();this.globalUnbind();delete this.node.player}};(function(){function a(c,e){var d={d:[],w:[]};f.each((c||"").split(" "),function(g,k){var j=k+"."+e;if(j.indexOf(".")===0){d.d.push(j);d.w.push(j)}else d[b.test(k)?"w":"d"].push(j)});d.d=d.d.join(" ");d.w=d.w.join(" ");return d}var b=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,e,d){c=a(c,this.id);
c.d&&f(document).bind(c.d,e,d);c.w&&f(window).bind(c.w,e,d)};mejs.MediaElementPlayer.prototype.globalUnbind=function(c,e){c=a(c,this.id);c.d&&f(document).unbind(c.d,e);c.w&&f(window).unbind(c.w,e)}})();if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){a===false?this.each(function(){var b=jQuery(this).data("mediaelementplayer");b&&b.remove();jQuery(this).removeData("mediaelementplayer")}):this.each(function(){jQuery(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,
a))});return this};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});window.MediaElementPlayer=mejs.MediaElementPlayer})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,e){var d=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();e.paused?e.play():e.pause();return false});e.addEventListener("play",function(){d.removeClass("mejs-play").addClass("mejs-pause")},
false);e.addEventListener("playing",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("pause",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false);e.addEventListener("paused",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,e){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){e.paused||e.pause();if(e.currentTime>0){e.setCurrentTime(0);e.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left",
"0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);
(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,e){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var d=
this,g=b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var k=b.find(".mejs-time-current"),j=b.find(".mejs-time-handle"),m=b.find(".mejs-time-float"),q=b.find(".mejs-time-float-current"),p=function(h){h=h.originalEvent.changedTouches?h.originalEvent.changedTouches[0].pageX:h.pageX;var l=g.offset(),r=g.outerWidth(true),n=0,o=n=0;if(e.duration){if(h<l.left)h=l.left;else if(h>r+l.left)h=r+l.left;o=h-l.left;n=o/r;n=n<=0.02?0:n*e.duration;t&&n!==e.currentTime&&e.setCurrentTime(n);if(!mejs.MediaFeatures.hasTouch){m.css("left",
o);q.html(mejs.Utility.secondsToTimeCode(n));m.show()}}},t=false;g.bind("mousedown touchstart",function(h){if(h.which===1||h.which===0){t=true;p(h);d.globalBind("mousemove.dur touchmove.dur",function(l){p(l)});d.globalBind("mouseup.dur touchend.dur",function(){t=false;m.hide();d.globalUnbind(".dur")});return false}}).bind("mouseenter",function(){d.globalBind("mousemove.dur",function(h){p(h)});mejs.MediaFeatures.hasTouch||m.show()}).bind("mouseleave",function(){if(!t){d.globalUnbind(".dur");m.hide()}});
e.addEventListener("progress",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);e.addEventListener("timeupdate",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);d.loaded=c;d.total=g;d.current=k;d.handle=j},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;
else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==null){c=Math.min(1,Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(true)/2);this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,e){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,b,
c,e){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){a.updateDuration()},
false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.durationD&&(this.options.duration>0||this.media.duration))this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:
this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,e){if(!((mejs.MediaFeatures.isAndroid||mejs.MediaFeatures.isiOS)&&this.options.hideVolumeOnTouchDevices)){var d=this,g=d.isVideo?d.options.videoVolume:d.options.audioVolume,k=g=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+
d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
j=d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),m=d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),q=d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),p=d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),t=function(n,o){if(!j.is(":visible")&&typeof o=="undefined"){j.show();t(n,true);j.hide()}else{n=Math.max(0,n);n=Math.min(n,1);n==0?k.removeClass("mejs-mute").addClass("mejs-unmute"):k.removeClass("mejs-unmute").addClass("mejs-mute");
if(g=="vertical"){var s=m.height(),u=m.position(),v=s-s*n;p.css("top",Math.round(u.top+v-p.height()/2));q.height(s-v);q.css("top",u.top+v)}else{s=m.width();u=m.position();s=s*n;p.css("left",Math.round(u.left+s-p.width()/2));q.width(Math.round(s))}}},h=function(n){var o=null,s=m.offset();if(g=="vertical"){o=m.height();parseInt(m.css("top").replace(/px/,""),10);o=(o-(n.pageY-s.top))/o;if(s.top==0||s.left==0)return}else{o=m.width();o=(n.pageX-s.left)/o}o=Math.max(0,o);o=Math.min(o,1);t(o);o==0?e.setMuted(true):
e.setMuted(false);e.setVolume(o)},l=false,r=false;k.hover(function(){j.show();r=true},function(){r=false;!l&&g=="vertical"&&j.hide()});j.bind("mouseover",function(){r=true}).bind("mousedown",function(n){h(n);d.globalBind("mousemove.vol",function(o){h(o)});d.globalBind("mouseup.vol",function(){l=false;d.globalUnbind(".vol");!r&&g=="vertical"&&j.hide()});l=true;return false});k.find("button").click(function(){e.setMuted(!e.muted)});e.addEventListener("volumechange",function(){if(!l)if(e.muted){t(0);
k.removeClass("mejs-mute").addClass("mejs-unmute")}else{t(e.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(d.container.is(":visible")){t(a.options.startVolume);a.options.startVolume===0&&e.setMuted(true);e.pluginType==="native"&&e.setVolume(a.options.startVolume)}}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,buildfullscreen:function(a,b,c,e){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=function(){if(a.isFullScreen)if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=
false;a.exitFullScreen()}};mejs.MediaFeatures.hasMozNativeFullScreen?a.globalBind(mejs.MediaFeatures.fullScreenEventName,c):a.container.bind(mejs.MediaFeatures.fullScreenEventName,c)}var d=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+d.id+'" title="'+d.options.fullscreenText+'" aria-label="'+d.options.fullscreenText+'"></button></div>').appendTo(b);if(d.media.pluginType==="native"||!d.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&
mejs.MediaFeatures.isFullScreen()||a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var h=document.createElement("x"),l=document.documentElement,r=window.getComputedStyle;if(!("pointerEvents"in h.style))return false;h.style.pointerEvents="auto";h.style.pointerEvents="x";l.appendChild(h);r=r&&r(h,"").pointerEvents==="auto";l.removeChild(h);return!!r}()&&!mejs.MediaFeatures.isOpera){var j=false,m=function(){if(j){for(var h in q)q[h].hide();g.css("pointer-events",
"");d.controls.css("pointer-events","");d.media.removeEventListener("click",d.clickToPlayPauseCallback);j=false}},q={};b=["top","left","right","bottom"];var p,t=function(){var h=g.offset().left-d.container.offset().left,l=g.offset().top-d.container.offset().top,r=g.outerWidth(true),n=g.outerHeight(true),o=d.container.width(),s=d.container.height();for(p in q)q[p].css({position:"absolute",top:0,left:0});q.top.width(o).height(l);q.left.width(h).height(n).css({top:l});q.right.width(o-h-r).height(n).css({top:l,
left:h+r});q.bottom.width(o).height(s-n-l).css({top:l+n})};d.globalBind("resize",function(){t()});p=0;for(c=b.length;p<c;p++)q[b[p]]=f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();g.on("mouseover",function(){if(!d.isFullScreen){var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,false);g.css("pointer-events","none");d.controls.css("pointer-events","none");d.media.addEventListener("click",d.clickToPlayPauseCallback);for(p in q)q[p].show();
t();j=true}});e.addEventListener("fullscreenchange",function(){d.isFullScreen=!d.isFullScreen;d.isFullScreen?d.media.removeEventListener("click",d.clickToPlayPauseCallback):d.media.addEventListener("click",d.clickToPlayPauseCallback);m()});d.globalBind("mousemove",function(h){if(j){var l=g.offset();if(h.pageY<l.top||h.pageY>l.top+g.outerHeight(true)||h.pageX<l.left||h.pageX>l.left+g.outerWidth(true)){g.css("pointer-events","");d.controls.css("pointer-events","");j=false}}})}else g.on("mouseover",
function(){if(k!==null){clearTimeout(k);delete k}var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,true)}).on("mouseout",function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){e.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;d.globalBind("keydown",function(h){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||d.isFullScreen)&&h.keyCode==27)a.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},
containerSizeTimeout:null,enterFullScreen:function(){var a=this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){f(document.documentElement).addClass("mejs-fullscreen");normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen){var e=(window.devicePixelRatio||
1)*f(window).width(),d=screen.width;Math.abs(d-e)>d*0.0020?a.exitFullScreen():setTimeout(c,500)}},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},
250);else{a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.media.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find(".mejs-shim").width("100%").height("100%");
a.media.setVideoSize(f(window).width(),f(window).height())}a.layers.children("div").width("100%").height("100%");a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout);if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||
this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();f(document.documentElement).removeClass("mejs-fullscreen");this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);if(this.media.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,e){if(a.tracks.length!=0){var d;if(this.domNode.textTracks)for(d=this.domNode.textTracks.length-1;d>=0;d--)this.domNode.textTracks[d].mode="hidden";a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=
f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=a.captions.find(".mejs-captions-text");a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+
a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(b);for(d=b=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&b++;this.options.toggleCaptionsButtonWhenOnlyOne&&b==1?a.captionsButton.on("click",function(){a.setTrack(a.selectedTrack==null?a.tracks[0].srclang:"none")}):a.captionsButton.hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},
function(){f(this).find(".mejs-captions-selector").css("visibility","hidden")}).on("click","input[type=radio]",function(){lang=this.value;a.setTrack(lang)});a.options.alwaysShowControls?a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});
a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(d=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&a.addTrackButton(a.tracks[d].srclang,a.tracks[d].label);a.loadNextTrack();e.addEventListener("timeupdate",function(){a.displayCaptions()},false);if(a.options.slidesSelector!=""){a.slidesContainer=f(a.options.slidesSelector);e.addEventListener("timeupdate",function(){a.displaySlides()},false)}e.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility",
"visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&!e.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if(a=="none"){this.selectedTrack=null;this.captionsButton.removeClass("mejs-captions-enabled")}else for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){this.selectedTrack==
null&&this.captionsButton.addClass("mejs-captions-enabled");this.selectedTrack=this.tracks[b];this.captions.attr("lang",this.selectedTrack.srclang);this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else{this.isLoadingTrack=false;this.checkForTracks()}},loadTrack:function(a){var b=this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(e){c.entries=typeof e=="string"&&
/<tt\s+xml/ig.exec(e)?mejs.TrackFormatParser.dfxp.parse(e):mejs.TrackFormatParser.webvvt.parse(e);c.isLoaded=true;b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false);c.kind=="slides"&&b.setupSlides(c)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(b);
this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},
adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var a=false;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if(this.tracks[i].kind=="subtitles"){a=true;break}if(!a){this.captionsButton.hide();this.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks!=
"undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);this.captions.show().height(0);return}this.captions.hide()}},setupSlides:function(a){this.slides=a;this.slides.entries.imgs=[this.slides.entries.text.length];this.showSlide(0)},showSlide:function(a){if(!(typeof this.tracks=="undefined"||typeof this.slidesContainer==
"undefined")){var b=this,c=b.slides.entries.text[a],e=b.slides.entries.imgs[a];if(typeof e=="undefined"||typeof e.fadeIn=="undefined")b.slides.entries.imgs[a]=e=f('<img src="'+c+'">').on("load",function(){e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()});else!e.is(":visible")&&!e.is(":animated")&&e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if(typeof this.slides!="undefined"){var a=this.slides,b;for(b=0;b<a.entries.times.length;b++)if(this.media.currentTime>=
a.entries.times[b].start&&this.media.currentTime<=a.entries.times[b].stop){this.showSlide(b);break}}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,e,d=e=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){e=a.entries.times[c].stop-a.entries.times[c].start;e=Math.floor(e/b.media.duration*100);if(e+d>100||c==a.entries.times.length-
1&&e+d<100)e=100-d;b.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[c].start+'" style="left: '+d.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));d+=e}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
b.media.paused&&b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",
ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},e,d;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((e=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;d=a[b];for(b++;a[b]!==""&&b<a.length;){d=d+"\n"+a[b];b++}d=f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(d);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(e[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(e[1]),
stop:mejs.Utility.convertSMPTEtoSeconds(e[3]),settings:e[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var e,d;a={text:[],times:[]};if(b.length){d=b.removeAttr("id").get(0).attributes;if(d.length){e={};for(b=0;b<d.length;b++)e[d[b].name.split(":")[1]]=d[b].value}}for(b=0;b<c.length;b++){var g;d={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
if(!d.start&&c.eq(b-1).attr("end"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!d.stop&&c.eq(b+1).attr("begin"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(e){g="";for(var k in e)g+=k+":"+e[k]+";"}if(g)d.style=g;if(d.start==0)d.start=0.2;a.times.push(d);d=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
"<a href='$1' target='_blank'>$1</a>");a.text.push(d);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],e="",d;for(d=0;d<a.length;d++){e+=a.substring(d,d+1);if(b.test(e)){c.push(e.replace(b,""));e=""}}c.push(e);return c}})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?mejs.i18n.t("Turn off Fullscreen"):mejs.i18n.t("Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("Unmute"):mejs.i18n.t("Mute")},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return mejs.i18n.t("Download Video")},
click:function(a){window.location.href=a.media.currentSrc}}]});f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},
isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,
b){for(var c=this,e="",d=c.options.contextMenuItems,g=0,k=d.length;g<k;g++)if(d[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var j=d[g].render(c);if(j!=null)e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+j+"</div>"}c.contextMenu.empty().append(f(e)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var m=f(this),q=parseInt(m.data("itemindex"),10),p=c.options.contextMenuItems[q];typeof p.show!=
"undefined"&&p.show(m,c);m.click(function(){typeof p.click!="undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var e=this.container.find('link[rel="postroll"]').attr("href");if(typeof e!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",
function(){f.ajax({dataType:"html",url:e,success:function(d){c.find(".mejs-postroll-layer-content").html(d)}});a.postroll.show()},false)}}})})(mejs.$);


/*
 *  Vide - v0.1.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b,c,d){"use strict";function e(b,c,d){this.element=a(b),this._defaults=g,this._name=f;var e=c.lastIndexOf(".");c=c.slice(0,0>e?c.length:e),this.settings=a.extend({},g,d),this.path=c,this.init()}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%"},h=/iPad|iPhone|iPod/i.test(d.userAgent),i=/Android/i.test(d.userAgent);a[f]={lookup:[]};var j=function(a){var b,c,d={};b=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),c=b.split(",");var e,f,g;for(e=0,f=c.length;f>e;e++)c[e]=c[e].split(":"),g=c[e][1],("string"==typeof g||g instanceof String)&&(g="true"===g||("false"===g?!1:g)),("string"==typeof g||g instanceof String)&&(g=isNaN(g)?g:+g),d[c[e][0]]=g;return d},k=function(a){var b=a.split(" ");switch(b[0]){case"left":b[0]="0%";break;case"center":b[0]="50%";break;case"right":b[0]="100%"}switch(b[1]){case"top":b[1]="0";break;case"middle":b[1]="50%";break;case"bottom":b[1]="100%"}return{x:b[0],y:b[1]}};e.prototype.init=function(){var b=this;if(this.wrapper=a("<div>"),this.wrapper.css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":"center center"}),a.get(this.path+".png").done(function(){b.wrapper.css("background-image","url("+b.path+".png)")}),a.get(this.path+".jpg").done(function(){b.wrapper.css("background-image","url("+b.path+".jpg)")}),a.get(this.path+".gif").done(function(){b.wrapper.css("background-image","url("+b.path+".gif)")}),"static"===this.element.css("position")&&this.element.css("position","relative"),this.element.prepend(this.wrapper),!h&&!i){this.video=a("<video><source src='"+this.path+".mp4' type='video/mp4'><source src='"+this.path+".webm' type='video/webm'><source src='"+this.path+".ogv' type='video/ogg'></video>"),this.video.css("visibility","hidden"),this.video.prop({autoplay:this.settings.autoplay,loop:this.settings.loop,volume:this.settings.volume,muted:this.settings.muted,playbackRate:this.settings.playbackRate}),this.wrapper.append(this.video);var c=k(this.settings.position);this.video.css({margin:"auto",position:"absolute","z-index":-1,top:c.y,left:c.x,"-webkit-transform":"translate(-"+c.x+", -"+c.y+")","-ms-transform":"translate(-"+c.x+", -"+c.y+")",transform:"translate(-"+c.x+", -"+c.y+")"}),this.video.bind("loadedmetadata."+f,function(){b.video.css("visibility","visible"),b.resize()}),a(this.element).bind("resize."+f,function(){b.resize()})}},e.prototype.getVideoObject=function(){return this.video?this.video[0]:null},e.prototype.resize=function(){if(this.video){var a=this.video[0].videoHeight,b=this.video[0].videoWidth,c=this.wrapper.height(),d=this.wrapper.width();this.video.css(d/b>c/a?{width:d+2,height:"auto"}:{width:"auto",height:c+2})}},e.prototype.destroy=function(){this.element.unbind(f),this.video.unbind(f),delete a[f].lookup[this.index],this.element.removeData(f),this.wrapper.remove()},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(c).ready(function(){a(b).bind("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.resize()}),a(c).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");e=e?j(e):{},d[f](g,e)})})}(jQuery||Zepto,window,document,navigator);



