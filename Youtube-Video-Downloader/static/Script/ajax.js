function ajax(request){"object"!=typeof request&&(request={});let fun="function",undef="undefined",xmlHttp;typeof XMLHttpRequest!==undef?xmlHttp=new XMLHttpRequest:(window.ActiveXObject,["MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"].forEach(version=>{xmlHttp=new ActiveXObject(version)}));let hasFailure=typeof request.onfailure==fun;if(!xmlHttp)return hasFailure&&request.onfailure(0,""),!1;let hasProgress=typeof request.onprogress==fun&&xmlHttp.upload;hasProgress&&xmlHttp.upload.addEventListener("progress",e=>{request.onprogress(Math.floor(e.loaded/e.total*100))}),xmlHttp.onreadystatechange=function(){4==xmlHttp.readyState&&(200==xmlHttp.status?(hasProgress&&request.onprogress(!1),"function"==typeof request.onsuccess&&request.onsuccess(xmlHttp.responseText,xmlHttp.status,xmlHttp.statusText)):hasFailure&&request.onfailure(xmlHttp.status,xmlHttp.statusText))},xmlHttp.open(request.method||"GET",request.url||location.pathname),request.ContentType&&(typeof FormData!=undef&&request.data instanceof FormData||xmlHttp.setRequestHeader("Content-Type",request.contentType)),xmlHttp.send(request.data||null)}