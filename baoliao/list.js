var React=require("react");
var Link = require("react-router").Link;
var Header = require("../index/header.js")
var $=require('jquery')

var List = React.createClass({
	getDefaultProps:function(){
		return{
			url:"http://2.newb.applinzi.com/test.php"
		}
	},
	getInitialState:function(){
		return {
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
				str=JSON.parse(data.split("<script")[0])
		 		_this.setState({res:str})
			}
		});
	},
	render:function(){
		var obj={
				"width":"98vw",
				"height":"30vh",
				"margin":"0 auto",
				"marginTop":"2vh",
				"background":"#fff"
		   }
		var img1={
				"width":"98vw",
				"height":"20vh"
			}
		 var obj2={
		 	"width":'30vw',
		 	'height':'10vh',
		 	"lineHeight":'10vh',
		 	'marginLeft':'1vw',
		 	'float':'left'
		 }
		 var obj3={
		 	"width":'65vw',
		 	'height':'10vh',
		 	"lineHeight":'10vh',
		 	'float':'left',
		 	'color':'#acb0b9',
		 	"fontSize":"0.16rem"
		 }
		 			
		var linksLists = this.state.res.map(function(item,index){
	        return (<li key={index} style={obj}>
			      <Link  to={"about/"+item.newsid}>
				   	   <img style={img1} src={item.imgsrc} />
					   <div>
						   <h2 style={obj2}>{item.type}</h2>
						   <p style={obj3}>{item.title}</p>
					   </div>
				   </Link>
				</li>
				);
		    });
		return(
			<div>
			<header style={{'height':'9vh','background':'#000','color':'#fff','lineHeight':'9vh',"position":"fixed","top":"0","zIndex":"10","width":"100vw","textAlign":"center"}}>Surprise</header>
			<ul>
			{
				linksLists
			}
			</ul>
			</div>
		)
	}
})

module.exports=List