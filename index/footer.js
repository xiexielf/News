var React=require("react")
var Link=require('react-router').Link

var Footer=React.createClass({
	render:function(){
		return(
			<div>
				<ul style={{'display':'flex','justifyContent':'space-around','textAlign':'center'}}>
					<Link to="/Com-index"><li style={{'width':'15vw'}}><img   style={{'width':'6vw','marginTop':'1vw'}} src="http://img.weiye.me/zcimgdir/album/file_58f973deb2b43.png"/><p style={{'color':'#999'}}>首页</p></li></Link>
					<Link to="/Com-baoliao"><li><img style={{'width':'6vw','marginTop':'1vw'}} src="http://img.weiye.me/zcimgdir/album/file_58f973df1427c.png"/><p style={{'color':'#999'}}>爆料</p></li></Link>
					<Link to="/Com-tushi"><li><img style={{'width':'6vw','marginTop':'1vw'}} src="http://img.weiye.me/zcimgdir/album/file_58f973dfa6dd5.png"/><p style={{'color':'#999'}}>图视</p></li></Link>
				</ul>
			</div>
		)
	}
})
module.exports=Footer