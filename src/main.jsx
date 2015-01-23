var  utf8_to_b64= function( str ) {
    return btoa(unescape(encodeURIComponent( str )));
};

var maincomponent = React.createClass({
  getInitialState:function() {
  	return {result:[],json:{test:"abc"} };
  },
  renderDownloadLink:function() {
    var filename="sample-"+(new Date().toLocaleString())+".json";
    var jsonstr=JSON.stringify(this.state.json,""," ");
    var dataurl="data:application/octet-stream;base64,"+utf8_to_b64(jsonstr);

    return <a className="btn btn-info" download={filename} href={dataurl}>Download</a>
  },
  renderJson:function() {
    var jsonstr=JSON.stringify(this.state.json);
    return <div>{jsonstr}</div>
  },
  upload:function() {
    var reader = new FileReader();
    var that=this;
    reader.onload = function() {
      var json=JSON.parse(this.result);
      that.setState({json:json})
    }
    var file=this.refs.uploadfile.getDOMNode().files[0];
    reader.readAsText(file);
  },
  uploadfile:function(){
    this.refs.uploadfile.getDOMNode().click();
  },
  render: function() {
    return <div>
      {this.renderDownloadLink()}
      <input ref="uploadfile" type="file" onChange={this.upload} style={{display:"none"}}/>
      <button onClick={this.uploadfile} className="btn btn-info">Upload</button>
      {this.renderJson()}
    </div>
  }
});
module.exports=maincomponent;