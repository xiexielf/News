var React=require("react")
var Link=require('react-router').Link
var Header = require("../index/header.js")
var Footer = require("../index/footer.js")


var ComponentBaoliao=React.createClass({
		render:function(){
			return(
			<div>
				<div style={{"margin":"9vh 0"}}>{this.props.children}</div>
				<footer style={{'height':'9vh','background':'#eee',"position":"fixed","bottom":"0","zIndex":"10","width":"100vw"}}><Footer /></footer>
			</div>
		)
	}
})
module.exports=ComponentBaoliao