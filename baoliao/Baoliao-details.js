var React = require("react");
var Icon = require("antd").Icon
var Input = require("antd").Input
var AutoComplete = require("antd").AutoComplete
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
var Link = require("react-router").Link;
var $ = require("jquery")
var head1 = {
	"width": "100vw",
	"height": "8vh",
	"background": "#000"

}
var p = {
	"width": "20vw",
	"height": "8vh",
	"float": "left",
	"marginLeft": '3vh',
	"lineHeight": '8vh'
}
var span = {
	"color": "#fff",
	"fontSize": '0.3rem'
}
var span1 = {
	"width": "20vw",
	"height": "8vh",
	"float": "right",
	"marginRight": '3vh',
	"lineHeight": '8vh',
	"color": "#fff",
	"fontSize": '0.4rem'
}
var con1 = {
	"width": "100vw",
	"background": "#fff",
	"minHeight": "35vh",
	"paddingTop": "2vh",
	"marginTop": "2vh",
	"paddingLeft": '3vw'
}
var con11 = {
	"width": "98vw",
	"height": "1.5rem"
}
var conp1 = {
	"width": "1rem",
	"height": "1rem",
	"border": "1px solid #cecece",
	"float": "left"
}
var cond = {
	"width": "65vw",
	"height": "1rem",
	"marginLeft": "4vw",
	"marginTop": "0.2rem",
	"float": "left",
	"fontSize": "0.3rem"
}
var dimg = {
	"width": "1.5rem",
	"height": "2rem",
	"marginLeft": "2vw",
	"margin": '0.2rem'
}
var two = {
	"width": "100vw",
	"height": "1.5rem",
	"position": "relative"
}
var two1 = {
	"width": "1.2rem",
	"height": "1.2rem",
	'position': ' absolute',
	'left': '50%',
	"top": "50%",
	"marginLeft": "-0.5rem",
	"marginTop": "-0.4rem",
	"background": "red",
	"borderRadius": "50%",
	"textAlign": 'center',
	"paddingTop": "0.2rem"
}
var coni = {
	"width": "1rem",
	"height": "1rem"
}
var three = {
	"width": "100vw",
	"height": "0.8rem"
}
var three1 = {
	"width": "25vw",
	"height": "0.8rem",
	"textAlign": "center",
	"fontSize": "0.25rem",
	"float": "right",
	"lineHeight": '0.8rem'
}
var pl = {
	"width": "100vw",
	"background": '#fff',
	"minHeight": "40vh"
}
var four = {
	"width": "100vw",
	"minHeight": "33vh",
	"position": "relative",
	"borderBottom": '1px solid #cecece'
}
var four1 = {
	"width": "4rem",
	"height": "3rem",
	'position': ' absolute',
	'left': '50%',
	"top": "50%",
	"marginLeft": "-2rem",
	"marginTop": "-1.5rem",
	"textAlign": 'center',
	"paddingTop": "0.2rem"
}
var four2 = {
	"width": '3rem',
	"height": '1.5rem',
	"marginLeft": '0.5rem',
	"marginTop": '0.2rem'
}
var tp = {
	"width": "100vw",
	"height": '8vh',
	"fontSize": '0.4rem',
	"paddingLeft": '0.3rem',
	"lineHeight": '8vh'
}
var sch = {
	"width": '100vw',
	"height": '15vh'
}
var ipt = {
	"width": '75vw',
	"marginLeft": '3vw',
	"float": "left",
	"marginTop": '0.2rem',
	"fontSize": "0.3rem",
	"height": '5vh'
}
var right = {
	"width": '0.6rem',
	"height": '0.6rem',
	"marginTop": '0.2rem',
	"float": 'right',
	"marginRight": "0.5rem",
	"border": "1px solid #cecece",
	"borderRadius": '50%',
	"textAlign": 'center',
	"lineHeight": '0.6rem',
	"fontSize": '0.35rem'
}
var comment1={
	"height":"0.6rem",
	"paddingLeft":'0.4rem',
	"fontSize":"0.3rem",
	"lineHeight":'0.6rem',
	"fontFamily":'微软雅黑',
	"width":'96vw',
	"margin":'0 auto'
	
}
var List2 = React.createClass({
	getInitialState: function() {
		return {
			rq1: [],
			rq2: [],
			val: [],
			length:"0"
		}
	},
	componentWillMount: function() {
		var _this = this;
		var b = this.props.params.ad;
		console.log(b)
		$.ajax({
			type: "get",
			url: "http://2.newb.applinzi.com/commentdetail.php",
			async: true,
			data: { "numb": b },
			success: function(data) {
				var str1 = JSON.parse(data.split("<script")[0])
				console.log(str1)
				_this.setState({ rq1: str1[0] })

			}
		});
		$.ajax({
			type: "get",
			url: "http://2.newb.applinzi.com/userdetail.php",
			async: true,
			data: { "numb": b },
			success: function(data) {
				var str2 = JSON.parse(data.split("<script")[0])

				_this.setState({ rq2: str2[0] })

			}
		});
	},
	tap: function() {
		history.go(-1);
	},
	tap1:function(e){
		this.refs.tu.style.display="none"
		var arr=this.state.val;
		arr.push(this.refs.ipt1.refs.input.value);
		var length=arr.length
		this.setState({length:length});
		this.setState({val:arr});
		this.refs.ipt1.refs.input.value=""
	},
	render: function() {
		return(
			<div>
			<header style={head1}>
				     <p style={p} onClick={this.tap}>
					      <Icon style={span} type="left" />
					      <strong style={span}>返回</strong>
				     </p>
			     <span>
			        <Icon style={span1} type="ellipsis" />
			     </span>
			  </header>
			     <div style={con1}>
				  <div style={con11} >
	                  <p style={conp1}>
	                     <img style={coni} src={this.state.rq2.headimg} />
	                  </p>
	               <div style={cond}> 
		                 <p style={{"marginBottom":"1vh","color":"orange"}}>{this.state.rq2.username}</p>
		                 <p>
		                    <span>{this.state.rq1.time}</span>　
		                     <span>
		                        人气:<strong>{this.state.rq1.praise}</strong>
		                     </span>
		                    </p>
	               </div>
	            </div>
	            <div style={{"marginLeft":"0.1rem"}}>
		            <h2 style={{"marginBottom":"0.1rem"}}>{this.state.rq1.title}</h2>
		            <img style={dimg} src={this.state.rq1.conimg}/>
		            <p style={{"fontSize":"0.2rem"}}>{this.state.rq1.content}</p>
               </div>
               <div style={two}>
                   <p style={two1}>
                    <Icon style={{"fontSize":'0.4rem',
                    "color":"#fff"}} type="like-o"/><br/>
                     <span style={{"fontSize":'0.3rem',
                    "color":"#fff"}}>{this.state.rq1.praise}</span>
                   </p>
               </div>
               <div style={three}>
                   <p style={three1}>
                     <span>{this.state.rq1.praise}</span>人赞
                   </p>
               </div>
            </div>
              <p style={tp}>
                 全部跟帖<span>({this.state.length})</span>
              </p>
             <div style={pl}>
              <div style={four}>
                   {
                   	this.state.val.map(function(val,index){
                   		return <p key={index} style={comment1}>跟帖{index+1}:　{val}</p>
                   	})
                   }
                  <p ref="tu" style={four1}>
                    <img style={four2} src="img/3.png"/>
                    <p style={{"fontSize":'0.25rem'}}>快来沙抢发</p>
                  </p>
              </div>
               <div style={sch}>
                    <Input ref="ipt1" style={ipt}
				        placeholder="　我来说两句"
				        prefix={<Icon style={{"fontSize":'0.3rem'}}type="edit"/>　}
                        />
                    <Icon onClick={this.tap1} style={right} type="like-o" />
               </div>
			</div>
			
		</div>
		)
	}
})
module.exports = List2;