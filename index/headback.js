var React=require("react")

var Headback=React.createClass({
	tap:function(){
		history.go(-1);
	},
	render:function(){
		return(
			<div>
				<ul style={{'display':'flex','justifyContent':'space-around','textAlign':'center'}}>
					<li onClick={this.tap}><i className="iconfont icon-xiangzuojiantou"></i>返回</li>
					<li style={{'width':'70vw'}}></li>
					<li><i className="iconfont icon-gengduo"></i></li>
				</ul>
			</div>
		)
	}
})
module.exports=Headback