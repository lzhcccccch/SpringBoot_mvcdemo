$("#addBtn").on("click",function(){
	$.ajax({
		url : "user/restful_addUser",
		type : "post",
		data : {
			id : 1100,
			name : "restful01",
			birthday : "1991-1-1",
			address : "bj"
		},
		dataType : "json",
		success : function(data) {
			$("#showMessage").append("数据增加成功:"+data.flag);
		},
		error : function() {
			$("#showMessage").append("数据增加失败!!!");
		}
	})
})