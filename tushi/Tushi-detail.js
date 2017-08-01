var React=require('react')



var $={
	http:function(URL,fsuc){
		var xhr=null;
		if(XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject();
		}
		xhr.open("GET",URL,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				fsuc(JSON.parse(xhr.responseText));
			}
		}
	}
}



var Nr=React.createClass({
	
	getInitialState:function(){
		return{
			restitle:'',
			restime:'',
			rescon:''
		}
	},
	componentWillMount:function(a){
		var _this=this;
		var str=parseInt(this.props.params.id-1);
		$.http("http://bxu2713650401.my3w.com/tushi.php",function(data){
			_this.setState({restitle:data[str].title,restime:data[str].time,rescon:data[str].con})
		
		})
	
	},
	tap:function(){
		history.go(-1);
		
		
	},
	render:function(){
		var strcon=this.state.rescon.split('&&&&');
		var styH={"width":"100vw","height":"8vh",'line-height':'8vh','font-size':'20px',"background":"black","position":"fixed",'color':'white','padding-left':'0.2rem'}
		var styS={"width":"100vw","height":"92vh","paddingTop":"8vh"}
		return(
			<div>
				<header style={styH} onClick={this.tap}>&lt;返回</header>
				<section style={styS}>
					<h1 style={{fontSize:"20px",textAlign:'center'}}>{this.state.restitle}</h1>
					<p>{this.state.restime}</p>
					{
						strcon.map(function(item,index){
							return(<p>{item}</p>)
						})
					}
				</section>
			</div>
		)
	}	
})

module.exports=Nr;





