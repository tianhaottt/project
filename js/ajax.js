/*class Ajax{
	create(){
		try{
			return new XMLHttpRequest();
		}catch(e){
			try{
				return new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				return null
			}
		}
	}
	request(config){
		let _xhr=this.create();
		if(_xhr){
			_xhr.onreadystatechange=function(){
				if(_xhr.readyState===4&&_xhr.status===200){
					config.success(_xhr.responseText);
				};
			}
			var _method=(config.method+"").toUpperCase()==="GET"?"GET":"POST";
			var _async=config.async===true?true:(config.async!==false);
			var _url=_method==="GET"?config.url+"?"+config.data:config.url;
			_xhr.open(_method,_url,_async);
			_xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=uef-8");
			_xhr.send(_method==="GET"?null:config.data)
		}else{
			alert("浏览器版本过低");
			window.location.href="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B047E07FD-AB6E-BF8C-4E44-AD914953E67C%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe"
		}
		
	}
}*/
class Ajax{
    create(){
        try{
            return new XMLHttpRequest();
        }catch (e) {
            try{
                return new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {
                return null;
            }
        }
    }
    request(_config){//config 是一个字面量对象
        let _xhr=this.create();
        if(_xhr){
            _xhr.onreadystatechange=function(){
                if(_xhr.status===200 && _xhr.readyState===4){
                    // console.log(_xhr.responseText);
                    _config.success(_xhr.responseText);//调用函数
                    //_success是个形参：通过形参调用的函数称为回调函数
                }
            };
            //(false !== false)===false
            var _async=_config.async?true:(_config.async !== false);//返回X的情况有两种，一种是false；还有一种是没写这个参数，也就是undefined
            var _method=(_config.method+"").toUpperCase()==="POST"?"POST":"GET";
            var _url=_method==="GET" ? _config.url+"?"+_config.data:_config.url;
            _xhr.open(_method,_url,_async);
            // _xhr.send(null);//向服务器发送数据：urlencode
            _xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");//post 方式像服务传递参数时，必须要这句话
            _xhr.send(_method==="GET"?null:_config.data);//向服务器发送数据：urlencode
        }else{
            alert("你的浏览器版本太低");
            window.location.href="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B047E07FD-AB6E-BF8C-4E44-AD914953E67C%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe";
        }
    }
}