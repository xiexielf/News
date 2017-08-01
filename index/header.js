var React=require("react")

var Header=React.createClass({
	render:function(){
		return(
			<div>
				<ul style={{'display':'flex','justifyContent':'space-around','textAlign':'center'}}>
					<li><i className="iconfont icon-xiangzuojiantou"></i>返回</li>
					<li style={{'width':'70vw'}}></li>
					<li><i className="iconfont icon-gengduo"></i></li>
				</ul>
			</div>
		)
	}
	})
module.exports=Header