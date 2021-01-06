//请求数据
runner(function *(){
	var data=yield $.ajax({type:"get",url:"json/dingdan.json",dataType:"json"});
	console.log(data.length)
	for (let i=0;i<data.length;i++) {
		$('<div><ul><li><img src="'+data[i].dimg+'"/></li><li>'+data[i].dname+'</br><span>16减6</span><span>32减16</span></li><li>正在配送...</li></ul><p><em>免配送费</em><span>'+data[i].jiage+'</span></p></div>').appendTo('.rou');
	};
})