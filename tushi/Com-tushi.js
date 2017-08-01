var React=require("react")
var Link=require('react-router').Link
var Router=require('react-router').Router
var Route=require('react-router').Route
var TushiIndex=require('./Tushi-index')
var TushiDetail=require('./Tushi-detail')
var Header = require("../index/header.js")
var Footer = require("../index/footer.js")
var $=require('jquery')

var ComponentTushi=React.createClass({
	getDefaultProps:function(){
		return{
			url:"http://bxu2713650401.my3w.com/tushi.php"
		}
	},
	getInitialState:function(){
		return{
			res:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			type:"get",
			url:this.props.url,
			async:true,
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({res:data})
			}
		});
	},
	render:function(){
		return(
			<div>
				<header style={{'height':'9vh','background':'#000','color':'#fff','lineHeight':'9vh',"position":"fixed","top":"0","zIndex":"10","width":"100vw","textAlign":"center"}}>Shitu</header>
				<div style={{"margin":"9vh 0"}}>{this.props.children}</div>
				<footer style={{'height':'9vh','background':'#eee',"position":"fixed","bottom":"0","zIndex":"10","width":"100vw"}}><Footer/></footer>
			</div>
		)
	}
})
module.exports=ComponentTushi