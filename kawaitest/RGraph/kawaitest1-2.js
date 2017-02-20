var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
	var json = [
{"id":"KawaiTest","name":"ホームページtop","data": {"$dim":"20","$color":"#00ff00"}},
{"id":"dummy1","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy2","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy1","data": {"weight":"1"}}]},
{"id":"dummy3","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy2","data": {"weight":"1"}}]},
{"id":"dummy4","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy3","data": {"weight":"1"}}]},
{"id":"35","name":"名前1","data": {"$dim":"12","$color":"red","relation":"<h3>所属1</h3><h4>2012/04/23 18-40</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy4","data": {"weight":"1"}}]},
{"id":"dummy5","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy6","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy5","data": {"weight":"1"}}]},
{"id":"dummy7","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy6","data": {"weight":"1"}}]},
{"id":"32","name":"名前10","data": {"$dim":"12","$color":"red","relation":"<h3>所属10</h3><h4>2012/04/23 15-09</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy7","data": {"weight":"1"}}]},
{"id":"4","name":"名前11","data": {"$dim":"4","$color":"gray","relation":"<h3>所属11</h3><h4>2012/04/23 08-53</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy8","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"22","name":"名前12","data": {"$dim":"20","$color":"#00ffff","relation":"<h3>所属12</h3><h4>2012/04/23 10-47</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"dummy8","data": {"weight":"1"}}]},
{"id":"3","name":"名前13","data": {"$dim":"8","$color":"red","relation":"<h3>所属13</h3><h4>2012/04/23 08-42</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"14","name":"名前14","data": {"$dim":"16","$color":"red","relation":"<h3>所属14</h3><h4>2012/04/23 09-58</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy9","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy10","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy9","data": {"weight":"1"}}]},
{"id":"30","name":"名前15","data": {"$dim":"36","$color":"#00ffff","relation":"<h3>所属15</h3><h4>2012/04/23 14-43</h4><h4>View Pages 9</h4>"},"adjacencies": [{"nodeTo":"dummy10","data": {"weight":"1"}}]},
{"id":"dummy11","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"24","name":"名前16","data": {"$dim":"8","$color":"red","relation":"<h3>所属16</h3><h4>2012/04/23 11-11</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy11","data": {"weight":"1"}}]},
{"id":"dummy12","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"21","name":"名前17","data": {"$dim":"4","$color":"gray","relation":"<h3>所属17</h3><h4>2012/04/23 10-46</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy12","data": {"weight":"1"}}]},
{"id":"dummy13","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"16","name":"名前18","data": {"$dim":"8","$color":"red","relation":"<h3>所属18</h3><h4>2012/04/23 10-06</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy13","data": {"weight":"1"}}]},
{"id":"dummy14","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy15","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy14","data": {"weight":"1"}}]},
{"id":"dummy16","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy15","data": {"weight":"1"}}]},
{"id":"dummy17","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy16","data": {"weight":"1"}}]},
{"id":"dummy18","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy17","data": {"weight":"1"}}]},
{"id":"dummy19","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy18","data": {"weight":"1"}}]},
{"id":"dummy20","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy19","data": {"weight":"1"}}]},
{"id":"dummy21","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy20","data": {"weight":"1"}}]},
{"id":"dummy22","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy21","data": {"weight":"1"}}]},
{"id":"dummy23","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy22","data": {"weight":"1"}}]},
{"id":"dummy24","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy23","data": {"weight":"1"}}]},
{"id":"dummy25","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy24","data": {"weight":"1"}}]},
{"id":"48","name":"名前19","data": {"$dim":"16","$color":"red","relation":"<h3>所属19</h3><h4>2012/04/25 13-03</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"dummy25","data": {"weight":"1"}}]},
{"id":"dummy26","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy27","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy26","data": {"weight":"1"}}]},
{"id":"dummy28","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy27","data": {"weight":"1"}}]},
{"id":"dummy29","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy28","data": {"weight":"1"}}]},
{"id":"dummy30","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy29","data": {"weight":"1"}}]},
{"id":"36","name":"名前2","data": {"$dim":"8","$color":"red","relation":"<h3>所属2</h3><h4>2012/04/24 08-47</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy30","data": {"weight":"1"}}]},
{"id":"dummy31","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy32","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy31","data": {"weight":"1"}}]},
{"id":"dummy33","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy32","data": {"weight":"1"}}]},
{"id":"dummy34","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy33","data": {"weight":"1"}}]},
{"id":"dummy35","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy34","data": {"weight":"1"}}]},
{"id":"dummy36","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy35","data": {"weight":"1"}}]},
{"id":"dummy37","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy36","data": {"weight":"1"}}]},
{"id":"dummy38","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy37","data": {"weight":"1"}}]},
{"id":"dummy39","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy38","data": {"weight":"1"}}]},
{"id":"dummy40","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy39","data": {"weight":"1"}}]},
{"id":"dummy41","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy40","data": {"weight":"1"}}]},
{"id":"dummy42","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy41","data": {"weight":"1"}}]},
{"id":"dummy43","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy42","data": {"weight":"1"}}]},
{"id":"dummy44","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy43","data": {"weight":"1"}}]},
{"id":"dummy45","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy44","data": {"weight":"1"}}]},
{"id":"dummy46","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy45","data": {"weight":"1"}}]},
{"id":"dummy47","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy46","data": {"weight":"1"}}]},
{"id":"dummy48","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy47","data": {"weight":"1"}}]},
{"id":"dummy49","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy48","data": {"weight":"1"}}]},
{"id":"dummy50","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy49","data": {"weight":"1"}}]},
{"id":"dummy51","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy50","data": {"weight":"1"}}]},
{"id":"61","name":"名前20","data": {"$dim":"8","$color":"red","relation":"<h3>所属20</h3><h4>2012/04/27 11-59</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy51","data": {"weight":"1"}}]},
{"id":"12","name":"名前21","data": {"$dim":"24","$color":"#00ffff","relation":"<h3>所属21</h3><h4>2012/04/23 09-46</h4><h4>View Pages 6</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"9","name":"名前25","data": {"$dim":"8","$color":"red","relation":"<h3>所属22</h3><h4>2012/04/23 09-44</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"10","name":"名前23","data": {"$dim":"8","$color":"red","relation":"<h3>所属22</h3><h4>2012/04/23 09-46</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"13","name":"名前24","data": {"$dim":"8","$color":"red","relation":"<h3>所属22</h3><h4>2012/04/23 09-53</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"19","name":"名前22","data": {"$dim":"8","$color":"red","relation":"<h3>所属22</h3><h4>2012/04/23 10-29</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"9","data": {"weight":"1"}} , {"nodeTo":"10","data": {"weight":"1"}} , {"nodeTo":"13","data": {"weight":"1"}}]},
{"id":"11","name":"名前26","data": {"$dim":"8","$color":"red","relation":"<h3>所属23</h3><h4>2012/04/23 09-46</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy52","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy53","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy52","data": {"weight":"1"}}]},
{"id":"dummy54","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy53","data": {"weight":"1"}}]},
{"id":"dummy55","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy54","data": {"weight":"1"}}]},
{"id":"dummy56","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy55","data": {"weight":"1"}}]},
{"id":"dummy57","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy56","data": {"weight":"1"}}]},
{"id":"dummy58","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy57","data": {"weight":"1"}}]},
{"id":"dummy59","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy58","data": {"weight":"1"}}]},
{"id":"dummy60","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy59","data": {"weight":"1"}}]},
{"id":"dummy61","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy60","data": {"weight":"1"}}]},
{"id":"dummy62","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy61","data": {"weight":"1"}}]},
{"id":"dummy63","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy62","data": {"weight":"1"}}]},
{"id":"dummy64","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy63","data": {"weight":"1"}}]},
{"id":"dummy65","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy64","data": {"weight":"1"}}]},
{"id":"dummy66","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy65","data": {"weight":"1"}}]},
{"id":"55","name":"名前27","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属24</h3><h4>2012/04/26 08-44</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy66","data": {"weight":"1"}}]},
{"id":"dummy67","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy68","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy67","data": {"weight":"1"}}]},
{"id":"dummy69","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy68","data": {"weight":"1"}}]},
{"id":"dummy70","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy69","data": {"weight":"1"}}]},
{"id":"dummy71","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy70","data": {"weight":"1"}}]},
{"id":"dummy72","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy71","data": {"weight":"1"}}]},
{"id":"dummy73","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy72","data": {"weight":"1"}}]},
{"id":"dummy74","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy73","data": {"weight":"1"}}]},
{"id":"dummy75","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy74","data": {"weight":"1"}}]},
{"id":"dummy76","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy75","data": {"weight":"1"}}]},
{"id":"dummy77","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy76","data": {"weight":"1"}}]},
{"id":"dummy78","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy77","data": {"weight":"1"}}]},
{"id":"49","name":"名前28","data": {"$dim":"8","$color":"#00ffff","relation":"<h3>所属25</h3><h4>2012/04/25 13-24</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy78","data": {"weight":"1"}}]},
{"id":"dummy79","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy80","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy79","data": {"weight":"1"}}]},
{"id":"dummy81","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy80","data": {"weight":"1"}}]},
{"id":"dummy82","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy81","data": {"weight":"1"}}]},
{"id":"dummy83","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy82","data": {"weight":"1"}}]},
{"id":"dummy84","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy83","data": {"weight":"1"}}]},
{"id":"dummy85","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy84","data": {"weight":"1"}}]},
{"id":"dummy86","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy85","data": {"weight":"1"}}]},
{"id":"dummy87","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy86","data": {"weight":"1"}}]},
{"id":"dummy88","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy87","data": {"weight":"1"}}]},
{"id":"dummy89","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy88","data": {"weight":"1"}}]},
{"id":"dummy90","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy89","data": {"weight":"1"}}]},
{"id":"51","name":"名前29","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属26</h3><h4>2012/04/25 13-37</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy90","data": {"weight":"1"}}]},
{"id":"dummy91","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy92","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy91","data": {"weight":"1"}}]},
{"id":"dummy93","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy92","data": {"weight":"1"}}]},
{"id":"dummy94","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy93","data": {"weight":"1"}}]},
{"id":"dummy95","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy94","data": {"weight":"1"}}]},
{"id":"dummy96","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy95","data": {"weight":"1"}}]},
{"id":"dummy97","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy96","data": {"weight":"1"}}]},
{"id":"dummy98","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy97","data": {"weight":"1"}}]},
{"id":"dummy99","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy98","data": {"weight":"1"}}]},
{"id":"dummy100","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy99","data": {"weight":"1"}}]},
{"id":"dummy101","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy100","data": {"weight":"1"}}]},
{"id":"dummy102","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy101","data": {"weight":"1"}}]},
{"id":"52","name":"名前30","data": {"$dim":"12","$color":"red","relation":"<h3>所属27</h3><h4>2012/04/25 13-45</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy102","data": {"weight":"1"}}]},
{"id":"dummy103","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"25","name":"名前31","data": {"$dim":"4","$color":"red","relation":"<h3>所属28</h3><h4>2012/04/23 11-34</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy103","data": {"weight":"1"}}]},
{"id":"27","name":"名前33","data": {"$dim":"76","$color":"#00ffff","relation":"<h3>所属28</h3><h4>2012/04/23 12-06</h4><h4>View Pages 19</h4>"},"adjacencies": [{"nodeTo":"25","data": {"weight":"1"}}]},
{"id":"dummy104","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"27","data": {"weight":"1"}}]},
{"id":"dummy105","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy104","data": {"weight":"1"}}]},
{"id":"37","name":"名前32","data": {"$dim":"20","$color":"red","relation":"<h3>所属28</h3><h4>2012/04/24 08-54</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"dummy105","data": {"weight":"1"}}]},
{"id":"dummy106","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy107","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy106","data": {"weight":"1"}}]},
{"id":"dummy108","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy107","data": {"weight":"1"}}]},
{"id":"33","name":"名前35","data": {"$dim":"16","$color":"red","relation":"<h3>所属29</h3><h4>2012/04/23 16-17</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"dummy108","data": {"weight":"1"}}]},
{"id":"dummy109","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"33","data": {"weight":"1"}}]},
{"id":"dummy110","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy109","data": {"weight":"1"}}]},
{"id":"dummy111","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy110","data": {"weight":"1"}}]},
{"id":"dummy112","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy111","data": {"weight":"1"}}]},
{"id":"dummy113","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy112","data": {"weight":"1"}}]},
{"id":"dummy114","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy113","data": {"weight":"1"}}]},
{"id":"dummy115","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy114","data": {"weight":"1"}}]},
{"id":"dummy116","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy115","data": {"weight":"1"}}]},
{"id":"50","name":"名前34","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属29</h3><h4>2012/04/25 13-33</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy116","data": {"weight":"1"}}]},
{"id":"dummy117","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy118","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy117","data": {"weight":"1"}}]},
{"id":"dummy119","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy118","data": {"weight":"1"}}]},
{"id":"dummy120","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy119","data": {"weight":"1"}}]},
{"id":"dummy121","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy120","data": {"weight":"1"}}]},
{"id":"dummy122","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy121","data": {"weight":"1"}}]},
{"id":"dummy123","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy122","data": {"weight":"1"}}]},
{"id":"dummy124","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy123","data": {"weight":"1"}}]},
{"id":"dummy125","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy124","data": {"weight":"1"}}]},
{"id":"dummy126","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy125","data": {"weight":"1"}}]},
{"id":"dummy127","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy126","data": {"weight":"1"}}]},
{"id":"dummy128","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy127","data": {"weight":"1"}}]},
{"id":"53","name":"名前3","data": {"$dim":"8","$color":"#00ffff","relation":"<h3>所属3</h3><h4>2012/04/25 14-28</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy128","data": {"weight":"1"}}]},
{"id":"5","name":"名前36","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属30</h3><h4>2012/04/23 09-06</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy129","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy130","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy129","data": {"weight":"1"}}]},
{"id":"dummy131","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy130","data": {"weight":"1"}}]},
{"id":"dummy132","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy131","data": {"weight":"1"}}]},
{"id":"dummy133","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy132","data": {"weight":"1"}}]},
{"id":"dummy134","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy133","data": {"weight":"1"}}]},
{"id":"39","name":"名前37","data": {"$dim":"8","$color":"red","relation":"<h3>所属31</h3><h4>2012/04/24 11-59</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy134","data": {"weight":"1"}}]},
{"id":"2","name":"名前38","data": {"$dim":"8","$color":"#00ffff","relation":"<h3>所属32</h3><h4>2012/04/23 07-27</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy135","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy136","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy135","data": {"weight":"1"}}]},
{"id":"29","name":"名前39","data": {"$dim":"4","$color":"gray","relation":"<h3>所属33</h3><h4>2012/04/23 13-06</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy136","data": {"weight":"1"}}]},
{"id":"6","name":"名前40","data": {"$dim":"4","$color":"red","relation":"<h3>所属34</h3><h4>2012/04/23 09-12</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy137","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy138","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy137","data": {"weight":"1"}}]},
{"id":"dummy139","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy138","data": {"weight":"1"}}]},
{"id":"dummy140","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy139","data": {"weight":"1"}}]},
{"id":"dummy141","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy140","data": {"weight":"1"}}]},
{"id":"dummy142","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy141","data": {"weight":"1"}}]},
{"id":"dummy143","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy142","data": {"weight":"1"}}]},
{"id":"dummy144","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy143","data": {"weight":"1"}}]},
{"id":"dummy145","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy144","data": {"weight":"1"}}]},
{"id":"dummy146","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy145","data": {"weight":"1"}}]},
{"id":"dummy147","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy146","data": {"weight":"1"}}]},
{"id":"dummy148","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy147","data": {"weight":"1"}}]},
{"id":"dummy149","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy148","data": {"weight":"1"}}]},
{"id":"dummy150","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy149","data": {"weight":"1"}}]},
{"id":"dummy151","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy150","data": {"weight":"1"}}]},
{"id":"dummy152","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy151","data": {"weight":"1"}}]},
{"id":"dummy153","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy152","data": {"weight":"1"}}]},
{"id":"dummy154","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy153","data": {"weight":"1"}}]},
{"id":"dummy155","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy154","data": {"weight":"1"}}]},
{"id":"dummy156","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy155","data": {"weight":"1"}}]},
{"id":"dummy157","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy156","data": {"weight":"1"}}]},
{"id":"dummy158","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy157","data": {"weight":"1"}}]},
{"id":"dummy159","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy158","data": {"weight":"1"}}]},
{"id":"62","name":"名前41","data": {"$dim":"8","$color":"red","relation":"<h3>所属35</h3><h4>2012/04/27 15-42</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy159","data": {"weight":"1"}}]},
{"id":"dummy160","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy161","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy160","data": {"weight":"1"}}]},
{"id":"dummy162","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy161","data": {"weight":"1"}}]},
{"id":"dummy163","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy162","data": {"weight":"1"}}]},
{"id":"dummy164","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy163","data": {"weight":"1"}}]},
{"id":"dummy165","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy164","data": {"weight":"1"}}]},
{"id":"dummy166","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy165","data": {"weight":"1"}}]},
{"id":"dummy167","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy166","data": {"weight":"1"}}]},
{"id":"dummy168","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy167","data": {"weight":"1"}}]},
{"id":"47","name":"名前42","data": {"$dim":"16","$color":"red","relation":"<h3>所属36</h3><h4>2012/04/24 18-49</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"dummy168","data": {"weight":"1"}}]},
{"id":"dummy169","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy170","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy169","data": {"weight":"1"}}]},
{"id":"dummy171","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy170","data": {"weight":"1"}}]},
{"id":"dummy172","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy171","data": {"weight":"1"}}]},
{"id":"dummy173","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy172","data": {"weight":"1"}}]},
{"id":"dummy174","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy173","data": {"weight":"1"}}]},
{"id":"dummy175","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy174","data": {"weight":"1"}}]},
{"id":"41","name":"名前44","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属37</h3><h4>2012/04/24 14-55</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy175","data": {"weight":"1"}}]},
{"id":"42","name":"名前43","data": {"$dim":"8","$color":"red","relation":"<h3>所属37</h3><h4>2012/04/24 15-05</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"41","data": {"weight":"1"}}]},
{"id":"dummy176","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy177","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy176","data": {"weight":"1"}}]},
{"id":"dummy178","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy177","data": {"weight":"1"}}]},
{"id":"dummy179","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy178","data": {"weight":"1"}}]},
{"id":"dummy180","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy179","data": {"weight":"1"}}]},
{"id":"dummy181","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy180","data": {"weight":"1"}}]},
{"id":"dummy182","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy181","data": {"weight":"1"}}]},
{"id":"dummy183","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy182","data": {"weight":"1"}}]},
{"id":"45","name":"名前45","data": {"$dim":"4","$color":"gray","relation":"<h3>所属38</h3><h4>2012/04/24 16-28</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy183","data": {"weight":"1"}}]},
{"id":"dummy184","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"17","name":"名前46","data": {"$dim":"12","$color":"red","relation":"<h3>所属39</h3><h4>2012/04/23 10-19</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy184","data": {"weight":"1"}}]},
{"id":"26","name":"名前47","data": {"$dim":"4","$color":"gray","relation":"<h3>所属39</h3><h4>2012/04/23 11-41</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy184","data": {"weight":"1"}}]},
{"id":"8","name":"名前4","data": {"$dim":"8","$color":"#00ffff","relation":"<h3>所属4</h3><h4>2012/04/23 09-34</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy185","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy186","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy185","data": {"weight":"1"}}]},
{"id":"dummy187","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy186","data": {"weight":"1"}}]},
{"id":"31","name":"名前48","data": {"$dim":"12","$color":"#00ffff","relation":"<h3>所属40</h3><h4>2012/04/23 15-03</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy187","data": {"weight":"1"}}]},
{"id":"dummy188","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy189","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy188","data": {"weight":"1"}}]},
{"id":"28","name":"名前49","data": {"$dim":"20","$color":"red","relation":"<h3>所属41</h3><h4>2012/04/23 12-33</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"dummy189","data": {"weight":"1"}}]},
{"id":"dummy190","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy191","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy190","data": {"weight":"1"}}]},
{"id":"dummy192","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy191","data": {"weight":"1"}}]},
{"id":"dummy193","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy192","data": {"weight":"1"}}]},
{"id":"dummy194","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy193","data": {"weight":"1"}}]},
{"id":"dummy195","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy194","data": {"weight":"1"}}]},
{"id":"dummy196","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy195","data": {"weight":"1"}}]},
{"id":"dummy197","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy196","data": {"weight":"1"}}]},
{"id":"dummy198","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy197","data": {"weight":"1"}}]},
{"id":"dummy199","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy198","data": {"weight":"1"}}]},
{"id":"dummy200","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy199","data": {"weight":"1"}}]},
{"id":"dummy201","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy200","data": {"weight":"1"}}]},
{"id":"dummy202","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy201","data": {"weight":"1"}}]},
{"id":"dummy203","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy202","data": {"weight":"1"}}]},
{"id":"dummy204","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy203","data": {"weight":"1"}}]},
{"id":"dummy205","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy204","data": {"weight":"1"}}]},
{"id":"dummy206","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy205","data": {"weight":"1"}}]},
{"id":"59","name":"名前50","data": {"$dim":"8","$color":"red","relation":"<h3>所属42</h3><h4>2012/04/26 14-50</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy206","data": {"weight":"1"}}]},
{"id":"dummy207","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy208","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy207","data": {"weight":"1"}}]},
{"id":"dummy209","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy208","data": {"weight":"1"}}]},
{"id":"dummy210","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy209","data": {"weight":"1"}}]},
{"id":"dummy211","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy210","data": {"weight":"1"}}]},
{"id":"38","name":"名前51","data": {"$dim":"24","$color":"red","relation":"<h3>所属43</h3><h4>2012/04/24 09-01</h4><h4>View Pages 6</h4>"},"adjacencies": [{"nodeTo":"dummy211","data": {"weight":"1"}}]},
{"id":"dummy212","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy213","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy212","data": {"weight":"1"}}]},
{"id":"dummy214","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy213","data": {"weight":"1"}}]},
{"id":"dummy215","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy214","data": {"weight":"1"}}]},
{"id":"dummy216","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy215","data": {"weight":"1"}}]},
{"id":"dummy217","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy216","data": {"weight":"1"}}]},
{"id":"dummy218","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy217","data": {"weight":"1"}}]},
{"id":"40","name":"名前52","data": {"$dim":"4","$color":"gray","relation":"<h3>所属44</h3><h4>2012/04/24 13-10</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy218","data": {"weight":"1"}}]},
{"id":"dummy219","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy220","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy219","data": {"weight":"1"}}]},
{"id":"dummy221","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy220","data": {"weight":"1"}}]},
{"id":"dummy222","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy221","data": {"weight":"1"}}]},
{"id":"dummy223","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy222","data": {"weight":"1"}}]},
{"id":"dummy224","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy223","data": {"weight":"1"}}]},
{"id":"dummy225","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy224","data": {"weight":"1"}}]},
{"id":"dummy226","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy225","data": {"weight":"1"}}]},
{"id":"dummy227","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy226","data": {"weight":"1"}}]},
{"id":"dummy228","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy227","data": {"weight":"1"}}]},
{"id":"dummy229","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy228","data": {"weight":"1"}}]},
{"id":"dummy230","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy229","data": {"weight":"1"}}]},
{"id":"dummy231","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy230","data": {"weight":"1"}}]},
{"id":"dummy232","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy231","data": {"weight":"1"}}]},
{"id":"dummy233","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy232","data": {"weight":"1"}}]},
{"id":"dummy234","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy233","data": {"weight":"1"}}]},
{"id":"dummy235","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy234","data": {"weight":"1"}}]},
{"id":"dummy236","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy235","data": {"weight":"1"}}]},
{"id":"dummy237","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy236","data": {"weight":"1"}}]},
{"id":"dummy238","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy237","data": {"weight":"1"}}]},
{"id":"60","name":"名前53","data": {"$dim":"8","$color":"#00ffff","relation":"<h3>所属45</h3><h4>2012/04/27 07-53</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy238","data": {"weight":"1"}}]},
{"id":"dummy239","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy240","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy239","data": {"weight":"1"}}]},
{"id":"dummy241","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy240","data": {"weight":"1"}}]},
{"id":"dummy242","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy241","data": {"weight":"1"}}]},
{"id":"dummy243","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy242","data": {"weight":"1"}}]},
{"id":"dummy244","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy243","data": {"weight":"1"}}]},
{"id":"dummy245","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy244","data": {"weight":"1"}}]},
{"id":"dummy246","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy245","data": {"weight":"1"}}]},
{"id":"dummy247","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy246","data": {"weight":"1"}}]},
{"id":"dummy248","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy247","data": {"weight":"1"}}]},
{"id":"dummy249","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy248","data": {"weight":"1"}}]},
{"id":"dummy250","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy249","data": {"weight":"1"}}]},
{"id":"dummy251","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy250","data": {"weight":"1"}}]},
{"id":"dummy252","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy251","data": {"weight":"1"}}]},
{"id":"dummy253","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy252","data": {"weight":"1"}}]},
{"id":"dummy254","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy253","data": {"weight":"1"}}]},
{"id":"57","name":"名前54","data": {"$dim":"4","$color":"red","relation":"<h3>所属46</h3><h4>2012/04/26 10-52</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy254","data": {"weight":"1"}}]},
{"id":"dummy255","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"15","name":"名前55","data": {"$dim":"12","$color":"red","relation":"<h3>所属47</h3><h4>2012/04/23 10-04</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy255","data": {"weight":"1"}}]},
{"id":"dummy256","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy257","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy256","data": {"weight":"1"}}]},
{"id":"dummy258","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy257","data": {"weight":"1"}}]},
{"id":"dummy259","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy258","data": {"weight":"1"}}]},
{"id":"dummy260","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy259","data": {"weight":"1"}}]},
{"id":"dummy261","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy260","data": {"weight":"1"}}]},
{"id":"dummy262","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy261","data": {"weight":"1"}}]},
{"id":"dummy263","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy262","data": {"weight":"1"}}]},
{"id":"dummy264","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy263","data": {"weight":"1"}}]},
{"id":"dummy265","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy264","data": {"weight":"1"}}]},
{"id":"dummy266","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy265","data": {"weight":"1"}}]},
{"id":"dummy267","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy266","data": {"weight":"1"}}]},
{"id":"dummy268","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy267","data": {"weight":"1"}}]},
{"id":"dummy269","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy268","data": {"weight":"1"}}]},
{"id":"dummy270","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy269","data": {"weight":"1"}}]},
{"id":"dummy271","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy270","data": {"weight":"1"}}]},
{"id":"56","name":"名前56","data": {"$dim":"8","$color":"red","relation":"<h3>所属48</h3><h4>2012/04/26 10-41</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy271","data": {"weight":"1"}}]},
{"id":"dummy272","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy273","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy272","data": {"weight":"1"}}]},
{"id":"dummy274","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy273","data": {"weight":"1"}}]},
{"id":"dummy275","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy274","data": {"weight":"1"}}]},
{"id":"dummy276","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy275","data": {"weight":"1"}}]},
{"id":"dummy277","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy276","data": {"weight":"1"}}]},
{"id":"dummy278","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy277","data": {"weight":"1"}}]},
{"id":"dummy279","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy278","data": {"weight":"1"}}]},
{"id":"46","name":"名前57","data": {"$dim":"52","$color":"red","relation":"<h3>所属49</h3><h4>2012/04/24 16-48</h4><h4>View Pages 13</h4>"},"adjacencies": [{"nodeTo":"dummy279","data": {"weight":"1"}}]},
{"id":"dummy280","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy281","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy280","data": {"weight":"1"}}]},
{"id":"dummy282","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy281","data": {"weight":"1"}}]},
{"id":"dummy283","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy282","data": {"weight":"1"}}]},
{"id":"dummy284","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy283","data": {"weight":"1"}}]},
{"id":"dummy285","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy284","data": {"weight":"1"}}]},
{"id":"dummy286","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy285","data": {"weight":"1"}}]},
{"id":"dummy287","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy286","data": {"weight":"1"}}]},
{"id":"dummy288","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy287","data": {"weight":"1"}}]},
{"id":"dummy289","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy288","data": {"weight":"1"}}]},
{"id":"dummy290","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy289","data": {"weight":"1"}}]},
{"id":"dummy291","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy290","data": {"weight":"1"}}]},
{"id":"dummy292","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy291","data": {"weight":"1"}}]},
{"id":"dummy293","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy292","data": {"weight":"1"}}]},
{"id":"dummy294","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy293","data": {"weight":"1"}}]},
{"id":"54","name":"名前5","data": {"$dim":"12","$color":"red","relation":"<h3>所属5</h3><h4>2012/04/26 08-12</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"dummy294","data": {"weight":"1"}}]},
{"id":"dummy295","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy296","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy295","data": {"weight":"1"}}]},
{"id":"dummy297","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy296","data": {"weight":"1"}}]},
{"id":"34","name":"名前58","data": {"$dim":"20","$color":"red","relation":"<h3>所属50</h3><h4>2012/04/23 16-51</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"dummy297","data": {"weight":"1"}}]},
{"id":"dummy298","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"20","name":"名前59","data": {"$dim":"4","$color":"red","relation":"<h3>所属51</h3><h4>2012/04/23 10-33</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy298","data": {"weight":"1"}}]},
{"id":"dummy299","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"18","name":"名前60","data": {"$dim":"8","$color":"red","relation":"<h3>所属52</h3><h4>2012/04/23 10-20</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy299","data": {"weight":"1"}}]},
{"id":"7","name":"名前61","data": {"$dim":"20","$color":"red","relation":"<h3>所属53</h3><h4>2012/04/23 09-19</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy300","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy301","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy300","data": {"weight":"1"}}]},
{"id":"dummy302","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy301","data": {"weight":"1"}}]},
{"id":"dummy303","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy302","data": {"weight":"1"}}]},
{"id":"dummy304","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy303","data": {"weight":"1"}}]},
{"id":"dummy305","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy304","data": {"weight":"1"}}]},
{"id":"dummy306","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy305","data": {"weight":"1"}}]},
{"id":"dummy307","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy306","data": {"weight":"1"}}]},
{"id":"dummy308","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy307","data": {"weight":"1"}}]},
{"id":"dummy309","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy308","data": {"weight":"1"}}]},
{"id":"dummy310","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy309","data": {"weight":"1"}}]},
{"id":"dummy311","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy310","data": {"weight":"1"}}]},
{"id":"dummy312","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy311","data": {"weight":"1"}}]},
{"id":"dummy313","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy312","data": {"weight":"1"}}]},
{"id":"dummy314","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy313","data": {"weight":"1"}}]},
{"id":"dummy315","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy314","data": {"weight":"1"}}]},
{"id":"dummy316","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy315","data": {"weight":"1"}}]},
{"id":"58","name":"名前6","data": {"$dim":"4","$color":"gray","relation":"<h3>所属6</h3><h4>2012/04/26 13-32</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"dummy316","data": {"weight":"1"}}]},
{"id":"dummy317","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy318","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy317","data": {"weight":"1"}}]},
{"id":"dummy319","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy318","data": {"weight":"1"}}]},
{"id":"dummy320","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy319","data": {"weight":"1"}}]},
{"id":"dummy321","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy320","data": {"weight":"1"}}]},
{"id":"dummy322","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy321","data": {"weight":"1"}}]},
{"id":"dummy323","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy322","data": {"weight":"1"}}]},
{"id":"dummy324","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy323","data": {"weight":"1"}}]},
{"id":"44","name":"名前7","data": {"$dim":"16","$color":"red","relation":"<h3>所属7</h3><h4>2012/04/24 16-14</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"dummy324","data": {"weight":"1"}}]},
{"id":"dummy325","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"dummy326","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy325","data": {"weight":"1"}}]},
{"id":"dummy327","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy326","data": {"weight":"1"}}]},
{"id":"dummy328","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy327","data": {"weight":"1"}}]},
{"id":"dummy329","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy328","data": {"weight":"1"}}]},
{"id":"dummy330","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy329","data": {"weight":"1"}}]},
{"id":"dummy331","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy330","data": {"weight":"1"}}]},
{"id":"dummy332","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"dummy331","data": {"weight":"1"}}]},
{"id":"43","name":"名前8","data": {"$dim":"16","$color":"red","relation":"<h3>所属8</h3><h4>2012/04/24 15-28</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"dummy332","data": {"weight":"1"}}]},
{"id":"dummy333","name":"○","data": {"$dim":"2","$color":"black","relation":"<h3></h3><h4></h4><h4>View Pages </h4>"},"adjacencies": [{"nodeTo":"KawaiTest","data": {"weight":"3"}}]},
{"id":"23","name":"名前9","data": {"$dim":"8","$color":"red","relation":"<h3>所属9</h3><h4>2012/04/23 10-49</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"dummy333","data": {"weight":"1"}}]}
]



	
;
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
			'overridable': true,
            color: '#666666'
        },
        
        Edge: {
          color: '#C17878',
          lineWidth:1.5
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id);
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 8) {
                style.fontSize = "0.8em";
                style.color = "#494949";
            
            } else if(node._depth >= 9 && node._depth <= 10){
                style.fontSize = "0.7em";
                style.color = "#494949";
            
            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
