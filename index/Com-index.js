var React=require("react")
var Link=require('react-router').Link
var Header = require("./header.js")
var Footer = require("./footer.js")

var ComponentIndex=React.createClass({
	
	render:function(){
		return(
			<div>
				<header style={{'height':'9vh','background':'#000','color':'#fff','lineHeight':'9vh',"position":"fixed","top":"0","zIndex":"10","width":"100vw","textAlign":"center"}}>SeeMe</header>
				<div style={{'width':'100vw','minHeight':'80vh','height':'auto!important',"margin":"9vh 0"}}>
					<nav style={{'display':'flex','width':'100vw','height':'7vh','justifyContent':'space-around','color':'#999','lineHeight':'7vh',"borderBottom":"1px solid #cecece"}}>
						<Link to='/yaowen' style={{'color':'#999'}}>要闻</Link>
						<Link to='/yule' style={{'color':'#999'}}>娱乐</Link>
						<Link to='/shenzhen' style={{'color':'#999'}}>深圳</Link>
						<Link to='/caijing' style={{'color':'#999'}}>财经</Link>
					</nav>
					{this.props.children}
				</div>
				<footer style={{'height':'9vh','background':'#eee',"position":"fixed","bottom":"0","zIndex":"10","width":"100vw"}}><Footer/></footer>
			</div>
		)
	}
})
module.exports=ComponentIndex