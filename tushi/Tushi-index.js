var React=require('React')
var Link=require('react-router').Link
var $=require('jquery')

var Index=React.createClass({
	getDefaultProps:function(){
		return{
			url:"http://bxu2713650401.my3w.com/tushi.php"
		}
	},
	getInitialState:function(){
		return{
			res:[]
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			type:"get",
			url:this.props.url,
			async:true,
			success:function(data){
				var data=JSON.parse(data);
				_this.setState({res:data})
			}
		});
	},
	render:function(){
		var secS={"width":"100vw","minHeight":"84vh","background":"#f3f3f3"}
		var stlD={'width':"46vw","height":"41vh","margin":".6vh 2vw","background":"white","float":"left"}
		var stlDT={"width":"46vw","height":"27vh"}
		var stlIM={"width":"46vw","height":"27vh","float":"left"}
		var stlDD={"width":"46vw","height":"10.6vh","marginTop":"3.4vh"}
		var stlIM2={"width":"5.5vw","height":"7.5vh","float":"left"}
		var stlIM3={"width":"3.3vw","height":"2vh","float":"left"}
		var stlDV={"width":"36vw","height":"10.6vh","float":"left","margin":"0 2.2vw"}
		var stlP={"margin":"1vh 0","width":"36vw","height":"2vh","fontSize":".2rem","color":"#b3b7bb"}
		var stlP2={"fontSize":".2rem","color":"#b3b7bb","paddingLeft":"28vw"}
		var _this=this
		return(
			<div>
				<section style={secS}>
					<div>
					{this.state.res.map(function(item,i){
							return (<dl style={stlD} data-id="{item.id}">
						<Link to={"/Tushi-detail/"+item.id}>
						<dt style={stlDT}>
							<img style={stlIM} src={item.img}/>
						</dt>
						<dd style={stlDD}>
							<img style={stlIM2} src="http://img.weiye.me/zcimgdir/album/file_58f9d9fad4cfc.png"/>
							<div style={stlDV}>
								<h2>{item.title}</h2>
								<p style={stlP}>
									<img style={stlIM3} src="http://img.weiye.me/zcimgdir/album/file_58f9b4c7554b0.png"/>
									<span>{item.time}</span>
								</p>
								<p style={stlP2}>{item.readNum}</p>
							</div>
						</dd>
					</Link>
					</dl>)
							
					})}
					</div>
				</section>
				
				
			</div>
		)
	}
	
})

module.exports=Index;