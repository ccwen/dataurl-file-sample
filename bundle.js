(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\ksana2015\\dataurl-file-sample\\index.js":[function(require,module,exports){
	var Main=React.createElement(require("./src/main.jsx"));
	var mainComponent=React.render(Main,document.getElementById("main"));
},{"./src/main.jsx":"C:\\ksana2015\\dataurl-file-sample\\src\\main.jsx"}],"C:\\ksana2015\\dataurl-file-sample\\src\\main.jsx":[function(require,module,exports){
var  utf8_to_b64= function( str ) {
    return btoa(unescape(encodeURIComponent( str )));
};

var maincomponent = React.createClass({displayName: "maincomponent",
  getInitialState:function() {
  	return {result:[],json:{test:"abc"} };
  },
  renderDownloadLink:function() {
    var filename="sample-"+(new Date().toLocaleString())+".json";
    var jsonstr=JSON.stringify(this.state.json,""," ");
    var dataurl="data:application/octet-stream;base64,"+utf8_to_b64(jsonstr);

    return React.createElement("a", {className: "btn btn-info", download: filename, href: dataurl}, "Download")
  },
  renderJson:function() {
    var jsonstr=JSON.stringify(this.state.json);
    return React.createElement("div", null, jsonstr)
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
    return React.createElement("div", null, 
      this.renderDownloadLink(), 
      React.createElement("input", {ref: "uploadfile", type: "file", onChange: this.upload, style: {display:"none"}}), 
      React.createElement("button", {onClick: this.uploadfile, className: "btn btn-info"}, "Upload"), 
      this.renderJson()
    )
  }
});
module.exports=maincomponent;
},{}]},{},["C:\\ksana2015\\dataurl-file-sample\\index.js"])


//# sourceMappingURL=bundle.js.map