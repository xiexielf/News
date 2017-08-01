var React=require("react")
var Link=require('react-router').Link
var $=require('jquery')

var Caijing=React.createClass({
	getDefaultProps:function(){
		return{
			url:'http://www.xielihao.xin/home2.php'
		}
	},
	getInitialState:function(){
		return{
			reshead:[{"id":''}],
			reslist:[],
			resfoot:[{"id":''}]
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			type:"post",
			url:this.props.url,
			async:true,
			data:{"name":'caijing'},
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({reshead:data.header,reslist:data.list,resfoot:data.footer})
			}
		});
	},
	render:function(){
		var sty4={'width':'30vw','height':'13vh','margin':'0 1vw'}
		return(
			<div>
				{
					this.state.reshead.map(function(item,index){
						return (<Link to={"/caijing-detail/"+item.id} key={index}><Childswiper name={item} /></Link>)
					})
				}
				<p style={{'fontSize':'5px','color':'#999','margin':'2vw'}}>网易财经</p>
				{
					this.state.reslist.map(function(item,index){
						return (<Link to={"/caijing-detail/"+item.id} key={index}><Childfoot name={item} /></Link>)
					})
				}
				{
					this.state.resfoot.map(function(item,index){
						return (<Link to={"/caijing-detail/"+item.id} key={index}><Childlist name={item} /></Link>)
					})
				}
			</div>
		)
	}
})

var Childswiper=React.createClass({
	render:function(){
		var sty1={'height':'40vh','color':'#000','margin':'2vw'}
		var sty2={'width':'96vw','height':'30vh'}
		return(
			<dl style={sty1}>
				<dd style={{"fontSize":"2.8vh"}}>{this.props.name.title}</dd>
				<dt style={sty2}>
					<img style={sty2} src={this.props.name.imgTit}/>
				</dt>
			</dl>
		)
	}
})


var Childlist=React.createClass({
	render:function(){
		var sty1={'height':'14vh','display':'flex','color':'#000','margin':'2vw'};
		var sty2={'width':'26vw','height':'14vh','margin':'0 2vw 0 0'};
		var sty3={'fontSize':'5px','color':'#999','position':'absolute','right':'2px'}
		return(
			<dl style={sty1}>
				<dt><img style={sty2} src={this.props.name.imgTit}/></dt>
				<dd style={{'position':'relative'}}>
					<p>{this.props.name.title}</p>
					<span style={sty3}>{this.props.name.time}</span>
				</dd>
			</dl>
		)
	}
})

var Childfoot=React.createClass({
	render:function(){
		var arr=this.props.name.imgTit.split("&&&&");
		var sty4={'width':'30vw','height':'13vh','margin':'3vw 2vw 0 0'};
		var jsx=[];
		for(var i=0;i<arr.length;i++){
			jsx.push(<img style={sty4} src={arr[i]}/>)
		}
		return(
			<dl style={{'height':'23vh','color':'#000','margin':'2vw'}}>
				<p style={{"fontSize":"2.5vh","margin":0,"padding":0}}>{this.props.name.title}</p>
				<dt style={{'display':'flex','margin':'2vw 0'}}>
				{jsx}
				</dt>
				<dd style={{'position':'relative'}}>
					<span style={{'color':'#999','fontSize':'2vh'}}>{this.props.name.author}</span>
					<span style={{'color':'#999','fontSize':'2vh','position':'absolute','right':'5px'}}>{this.props.name.readNum}</span>
				</dd>
			</dl>
		)
	}
})

module.exports=Caijing