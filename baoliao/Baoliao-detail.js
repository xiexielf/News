var React = require("react");
var ReactDOM = require("react-dom");

var Icon = require("antd").Icon
var Input = require("antd").Input
var AutoComplete = require("antd").AutoComplete

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

var Link = require("react-router").Link;
var $ = require("jquery")
var About = React.createClass({
	getInitialState: function() {
		return {
			res1: [],
			res2: [],
			res3: []
		}
	},
	componentWillMount: function() {
		var _this = this;
		var a = this.props.params.id;
		$.ajax({
			type: "get",
			url: "http://2.newb.applinzi.com/test.php",
			async: true,
			success: function(data) {
				var str = JSON.parse(data.split("<script")[0])
				_this.setState({ res1: str[a - 1] })

			}
		});
		$.ajax({
			type: "get",
			url: "http://2.newb.applinzi.com/comment.php",
			async: true,
			data: { "numb": a },
			success: function(data) {
				var str1 = JSON.parse(data.split("<script")[0])
				_this.setState({ res2: str1 })
				
			}
		});
		$.ajax({
			type: "get",
			url: "http://2.newb.applinzi.com/user.php",
			async: true,
			data: { "numb": a },
			success: function(data) {
				var str2 = JSON.parse(data.split("<script")[0])
				_this.setState({ res3: str2 })
				
			}
		});
	},
	tap1: function() {
		history.go(-1)
	},
	render: function() {
		var head1 = {
			"width": "100vw",
			"height": "8vh",
			"background": "#000",
			"position":"fixed",
			"zIndex":'3',

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
		var con = {
			"width": "100vw",
			"background": "#fff",
			"minHeight": "26vh",
			"paddingTop": "9vh"
		}
		var con1 = {
			"width": "96vw",
			"marginLeft": "2vw",
			"background": "#fff",
			"height": "7vh"
		}
		var search = {
			"width": "70vw",
			"float": "left",
			"height": '7vh'
		}

		var icon1 = {
			"width": "10vw",
			"float": "left",
			"color": "red",
			"fontSize": "0.5rem",
			"marginLeft": "2vw"
		}
		var img = {
			"width": "1rem",
			'height': '1rem',
			'float': 'left',
			"marginLeft": '2vw',
			"marginTop": '2vh'

		}
		var div = {
			"width": "70vw",
			'height': '1rem',
			'float': 'left',
			"marginLeft": '3vw',
			"marginTop": '4vh'
		}
		var pl = {
			"width": "96vw",
			'height': '15vh'
		}
		var three = {
			"width": "100vw",
			"height": "0.8rem",
			"borderTop": "1px solid #cecece",
			"marginTop": '2vh'
		}
		var qb = {
			"width": "1.5rem",
			"height": "0.8rem",
			'lineHeight': '0.8rem',
			"borderBottom": "1px solid red",
			"textAlign": "center",
			"fontSize": "0.3rem"

		}
		var con3 = {
			"width": "100vw",
			"background": "#fff",
			"minHeight": "26vh",
			"paddingTop": "2vh",
			"marginTop": "2vh",
			"paddingLeft": '2vw'
		}
		var con31 = {
			"width": "98vw",
			"height": "1.3rem"
		}
		var conp1 = {
			"width": "1rem",
			"height": "1rem",
			"borderRadius": "50%",
			"border": "1px solid #cecece",
			"float": "left"
		}
		var coni2={
			"width": "1rem",
			"height": "1rem",
			"borderRadius":"50%"
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
		var cond1 = {
			"width": "100vw",
			"height": "8vh"

		}
		var conp2 = {
			"width": "30vw",
			"height": "5vh",
			"marginRight": "5vw",
			"float": "right",
			"marginTop": "1vh"
		}
		var p = {
			"width": "20vw",
			"height": "8vh",
			"float": "left",
			"marginLeft": '3vh',
			"lineHeight": '8vh'
		}
		var this2=this
		var Comment = this.state.res2.map(function(item, index) {
			return(
				<div style={con3} key={index}>
			<Link  to={"/xiangq/"+item.commentid}>
              <div key={index} style={con31} >
	                 <div>
		                <p style={conp1} key={index}>
				           <img style={coni2} src={this2.state.res3[index].headimg} />
				        </p>
	                 </div>
	               <div style={cond}> 
		                 <p style={{"marginBottom":"1vh","color":"orange"}}>{this2.state.res3[index].username}</p>
		                 <p>{item.time}</p>
	               </div>
	            </div>
	            <div>
		            <h2>{item.title}</h2>
		            <img style={dimg} src={item.conimg}/>
		            <p style={{"fontSize":"0.2rem"}}>{item.content}</p>
	            </div>
	            </Link>
            <div style={cond1}>
                <p style={conp2}>
                  <Icon style={{"fontSize":"0.4rem"}}type="message"/>　
                  <span style={{"fontSize":"0.3rem"}}>0</span>　
                  <Icon style={{"fontSize":"0.4rem"}} type="like-o" />　
                  <span style={{"fontSize":"0.3rem"}}>{item.praise}</span>
                </p>
            </div>
            </div>
			)
		})
		
		return(
			<div>
			  <header style={head1}>
				     <p style={p} onClick={this.tap1}>
					      <Icon style={span} type="left" />
					      <strong style={span}>返回</strong>
				     </p>
			     <span>
			        <Icon style={span1} type="ellipsis" />
			     </span>
			  </header>
			  <div style={con}>
			   <div style={con1}>
			    <div className="certain-category-search-wrapper" style={search}>
			    
				      <AutoComplete className="certain-category-search"
			dropdownClassName="certain-category-search-dropdown"
				        dropdownMatchSelectWidth={false}
				        dropdownStyle={{ width: 300}}
				        size="large"
				        style={{ width:'100%' }}
				        optionLabelProp="value"
				      >
                   <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
       <Icon style={icon1} type="bell" />
       <Icon style={icon1} type="user" />
       </div>
       
         <div style={pl}>
	           <img style={img} src={this.state.res1.imgsrc}/>
	           <div style={div}>
		            <h2>{this.state.res1.type}</h2>
		            <p style={{"marginTop":"1.5vh","height":'4vh',"fontSize":"0.25rem",'color':'#acb0b9'}}>
		               话题:<span style={{"fontSize":"0.3rem","color":"red"}}>8</span>　
		               回复:<span style={{"fontSize":"0.3rem","color":"red"}}>4</span>
		            </p>
	           </div>
         </div>
         <div style={three}>
            <p style={qb}>全部</p>
         </div>
       </div>
            <div>
                {
                	Comment
                }
            </div>
			</div>
		)
	}
})
module.exports = About