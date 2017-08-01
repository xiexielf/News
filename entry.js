var React = require("react")
var ReactDOM = require("react-dom")
var antd = require('antd')
var Carousel = require('antd')

var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var Hashhistory = require('react-router').Hashhistory
var IndexRoute = require('react-router').IndexRoute
var IndexRedirect = require('react-router').IndexRedirect


var ComponentIndex = require("./index/Com-index.js")
var ComponentBaoliao = require("./baoliao/Com-baoliao.js")
var ComponentTushi = require("./tushi/Com-tushi.js")
//总
var Header = require("./index/header.js")
var Headback = require("./index/headback.js")
var Yaowen = require("./index/yaowen.js")
var Yule = require("./index/yule.js")
var Shenzhen = require("./index/shenzhen.js")
var Caijing = require("./index/caijing.js")
var Footer = require("./index/footer.js")
//index
var Yaowendetail = require("./index/yaowen-detail.js")
var Yuletail = require("./index/yule-detail.js")
var Shenzhentail = require("./index/shenzhen-detail.js")
var Caijingtail = require("./index/caijing-detail.js")
//爆料
var About=require("./baoliao/Baoliao-detail.js")
var List=require("./baoliao/list.js")
var List2=require("./baoliao/Baoliao-details.js")

/*图示*/
var TushiIndex=require('./tushi/Tushi-index')
var TushiDetail=require('./tushi/Tushi-detail')


var IndexCom = React.createClass({
	render: function() {
		return(
			<div>
				<section style={{'height':'100vh','overflowX':'hidden'}}>
					{this.props.children}
				</section>
			</div>
		)
	}
})
/*IndexRedirect组件用于访问根路由的时候,将用户重定向到某个子组件*/
/*IndexRoute默认情况下加载的子组件*/


ReactDOM.render(<Router>
	<Route path="/" component={IndexCom}>
		<IndexRedirect to="/Com-index" />
		<Route path="/Com-index" component={ComponentIndex}>
			<IndexRoute component={Yaowen}/>
			<Route path="/yaowen" component={Yaowen}>
			</Route>
			<Route path="/yule" component={Yule}>
			</Route>
			<Route path="/shenzhen" component={Shenzhen}></Route>
			<Route path="/caijing" component={Caijing}></Route>
		</Route>
		<Route path="/Com-baoliao" component={ComponentBaoliao}>
			<IndexRoute component={List}/>
		</Route>
		<Route path="/Com-tushi" component={ComponentTushi}>
			<IndexRoute component={TushiIndex}/>
			<Route path="/TushiIndex" component={TushiIndex}></Route>
		</Route>
		<Route path="/xiangq/:ad" component={List2}></Route>
		<Route path="/about/:id" component={About}></Route>
		<Route path="/yaowen-detail/:id" component={Yaowendetail}></Route>
		<Route path="/yule-detail/:id" component={Yuletail}></Route>
		<Route path="/shenzhen-detail/:id" component={Shenzhentail}></Route>
		<Route path="/caijing-detail/:id" component={Caijingtail}></Route>
		
		<Route path="/Tushi-detail/:id" component={TushiDetail}></Route>
		
	</Route>
</Router>, document.getElementById("out"))