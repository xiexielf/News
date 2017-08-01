var React=require("react")
var Link=require('react-router').Link
var Header = require("./header.js")
var Footer = require("./footer.js")

var ComponentWode=React.createClass({
	
	render:function(){
		return(
			<div>
				<header style={{'height':'9vh','background':'#000','color':'#fff','lineHeight':'9vh',"position":"fixed","top":"0","zIndex":"10","width":"100vw","textAlign":"center"}}>My</header>
				<div style={{"margin":"9vh 0"}}>wode</div>
				<footer style={{'height':'9vh','background':'#eee',"position":"fixed","bottom":"0","zIndex":"10","width":"100vw"}}><Footer/></footer>
			</div>
		)
	}
})
module.exports=ComponentWode