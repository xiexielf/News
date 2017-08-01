var React=require("react")
var Link=require('react-router').Link
var $=require('jquery')
var Carousel=require('antd').Carousel



var Yaowen=React.createClass({
	getDefaultProps:function(){
		return{
			url:'http://www.xielihao.xin/home.php'
		}
	},
	getInitialState:function(){
		return{
			res:[{"id":''}],
			reslunbo:[{"id":''}],
			reslist:[]
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			type:"post",
			url:this.props.url,
			async:true,
			data:{"name":'imNews'},
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({res:data.top,reslunbo:data.lunbo,reslist:data.list})
			}
		});
	},
	render:function(){
		var sty={'width':'98vw','height':'30vh'}
		return(
			<div>
				<Link to={"/yaowen-detail/"+this.state.res[0].id}>
					<Childtop name={this.state.res} />
				</Link>
				<Childswiper name={this.state.reslunbo} />
				{
					this.state.reslist.map(function(item,index){
						return (<Link to={"/yaowen-detail/"+item.id} key={index}><Childlist name={item} /></Link>)
					})
				}
			</div>
		)
	},
	componentDidMount:function(){
		var _this=this
		$.ajax({
			type:"post",
			url:this.props.url,
			async:true,
			data:{"name":'imNews'},
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({res:data.top,reslunbo:data.lunbo,reslist:data.list})
			}
		});
	}
})

var Childtop=React.createClass({
	render:function(){
		var list=this.props.name.map(function(item,index){
			return (<div key={index}>
				<dt style={{"float":"left"}} >
					<img style={{'width':'22vw','height':'10vh','margin':'0 2vw 2vw'}} src={item.imgTit} />
				</dt>
				<dd style={{"fontSize":"2.5vh","float":"left","width":"65vw"}}>{item.title}</dd>
			</div>)
		})
		return(
			<dl style={{'height':'12vh','display':'flex','color':'#000'}}>
				{
					list
				}
			</dl>
		)
	}
})
var Childswiper=React.createClass({
	render:function(){
		var sty={'width':'98vw','height':'30vh','margin':'0 1vw'}
		var settings={
			dots: true,
		    infinite: true,
		    speed: 500,
		    slidesToShow: 1,
		    slidesToScroll: 1
		}
		return(
			<div style={sty} >
				<Carousel autoplay {...settings}>
				{
					this.props.name.map(function(item,index){
						return (<div>
							<Link to={"/yaowen-detail/"+item.id}>
							<img style={{'width':'98vw','height':'30vh'}} src={item.imgTit}/>
							</Link>
						</div>)
					})
				}
  				</Carousel>
			</div>
		)
	}
})

var Childlist=React.createClass({
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

module.exports=Yaowen