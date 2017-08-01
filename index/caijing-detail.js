var React=require("react")
var ReactDOM=require("react-dom")
var Link=require('react-router').Link
var $=require('jquery')
var Headback = require("./headback.js")

var Caijingdetail=React.createClass({
	getDefaultProps:function(){
		return{
			url:'http://www.xielihao.xin/getList.php'
		}
	},
	getInitialState:function(){
		return{
			restit:'',
			resimg:'',
			restime:'',
			rescon:''
		}
	},
	componentWillMount:function(){
		var _this=this;
		var str=this.props.params.id;
		$.ajax({
			type:"POST",
			url:this.props.url+"/?caijing",
			async:true,
			data:{"id":parseInt(str)},
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({restit:data[0].title,resimg:data[0].imgCon,restime:data[0].time,rescon:data[0].con})
			}
		})
	},
	render:function(){
		var str=this.state.resimg?this.state.resimg.split('&&&&'):[];
		var con=this.state.rescon?this.state.rescon.split("&&&&"):[];
		return(
			<div style={{"marginBottom":"5vh"}}>
				<header style={{'height':'9vh','background':'#000','color':'#fff','lineHeight':'9vh',"position":"fixed","top":"0","zIndex":"10","width":"100vw"}}><Headback/></header>
				<div style={{"minHeight":"81vh","margin":"13vh 5vw 0"}}>
					<h4>{this.state.restit}</h4>
					<p>{this.state.restime}</p>
					{
						str.map(function(item,index){
							return(<div><img style={{"width":"90vw"}} src={item}/></div>)
						})
					}
					{
						con.map(function(item,index){
							return(<p style={{"textIndent":'32px'}}>{item}</p>)
						})
					}
				</div>
			</div>
		)
	}
})
module.exports=Caijingdetail