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
{"id":"KawaiTest","name":"ホームページtop","data": {"$dim":"20","$color":"#00ff00","$height":1},"adjacencies":[{"nodeTo":"35","data":{'$type': 'none'}},{"nodeTo":"32","data":{'$type': 'none'}},{"nodeTo":"4","data":{'$type': 'none'}},{"nodeTo":"22","data":{'$type': 'none'}},{"nodeTo":"3","data":{'$type': 'none'}},{"nodeTo":"14","data":{'$type': 'none'}},{"nodeTo":"30","data":{'$type': 'none'}},{"nodeTo":"24","data":{'$type': 'none'}},{"nodeTo":"21","data":{'$type': 'none'}},{"nodeTo":"16","data":{'$type': 'none'}},{"nodeTo":"48","data":{'$type': 'none'}},{"nodeTo":"36","data":{'$type': 'none'}},{"nodeTo":"61","data":{'$type': 'none'}},{"nodeTo":"12","data":{'$type': 'none'}},{"nodeTo":"9","data":{'$type': 'none'}},{"nodeTo":"10","data":{'$type': 'none'}},{"nodeTo":"13","data":{'$type': 'none'}},{"nodeTo":"19","data":{'$type': 'none'}},{"nodeTo":"11","data":{'$type': 'none'}},{"nodeTo":"55","data":{'$type': 'none'}},{"nodeTo":"49","data":{'$type': 'none'}},{"nodeTo":"51","data":{'$type': 'none'}},{"nodeTo":"52","data":{'$type': 'none'}},{"nodeTo":"25","data":{'$type': 'none'}},{"nodeTo":"27","data":{'$type': 'none'}},{"nodeTo":"37","data":{'$type': 'none'}},{"nodeTo":"33","data":{'$type': 'none'}},{"nodeTo":"50","data":{'$type': 'none'}},{"nodeTo":"53","data":{'$type': 'none'}},{"nodeTo":"5","data":{'$type': 'none'}},{"nodeTo":"39","data":{'$type': 'none'}},{"nodeTo":"2","data":{'$type': 'none'}},{"nodeTo":"29","data":{'$type': 'none'}},{"nodeTo":"6","data":{'$type': 'none'}},{"nodeTo":"62","data":{'$type': 'none'}},{"nodeTo":"47","data":{'$type': 'none'}},{"nodeTo":"41","data":{'$type': 'none'}},{"nodeTo":"42","data":{'$type': 'none'}},{"nodeTo":"45","data":{'$type': 'none'}},{"nodeTo":"17","data":{'$type': 'none'}},{"nodeTo":"26","data":{'$type': 'none'}},{"nodeTo":"8","data":{'$type': 'none'}},{"nodeTo":"31","data":{'$type': 'none'}},{"nodeTo":"28","data":{'$type': 'none'}},{"nodeTo":"59","data":{'$type': 'none'}},{"nodeTo":"38","data":{'$type': 'none'}},{"nodeTo":"40","data":{'$type': 'none'}},{"nodeTo":"60","data":{'$type': 'none'}},{"nodeTo":"57","data":{'$type': 'none'}},{"nodeTo":"15","data":{'$type': 'none'}},{"nodeTo":"56","data":{'$type': 'none'}},{"nodeTo":"46","data":{'$type': 'none'}},{"nodeTo":"54","data":{'$type': 'none'}},{"nodeTo":"34","data":{'$type': 'none'}},{"nodeTo":"20","data":{'$type': 'none'}},{"nodeTo":"18","data":{'$type': 'none'}},{"nodeTo":"7","data":{'$type': 'none'}},{"nodeTo":"58","data":{'$type': 'none'}},{"nodeTo":"44","data":{'$type': 'none'}},{"nodeTo":"43","data":{'$type': 'none'}},{"nodeTo":"23","data":{'$type': 'none'}}]},
{"id":"35","name":"名前1","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属1</h3><h4>2012/04/23 18-40</h4><h4>View Pages 3</h4>"}},
{"id":"32","name":"名前10","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属10</h3><h4>2012/04/23 15-09</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"35","data": {"weight":"1"}}]},
{"id":"4","name":"名前11","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属11</h3><h4>2012/04/23 08-53</h4><h4>View Pages 1</h4>"}},
{"id":"22","name":"名前12","data": {"$dim":"20","$color":"#0ff","$height":95,"relation":"<h3>所属12</h3><h4>2012/04/23 10-47</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"4","data": {"weight":"1"}}]},
{"id":"3","name":"名前13","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属13</h3><h4>2012/04/23 08-42</h4><h4>View Pages 2</h4>"}},
{"id":"14","name":"名前14","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属14</h3><h4>2012/04/23 09-58</h4><h4>View Pages 4</h4>"}},
{"id":"30","name":"名前15","data": {"$dim":"36","$color":"#0ff","$height":127,"relation":"<h3>所属15</h3><h4>2012/04/23 14-43</h4><h4>View Pages 9</h4>"},"adjacencies": [{"nodeTo":"14","data": {"weight":"1"}}]},
{"id":"24","name":"名前16","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属16</h3><h4>2012/04/23 11-11</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"30","data": {"weight":"1"}}]},
{"id":"21","name":"名前17","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属17</h3><h4>2012/04/23 10-46</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"30","data": {"weight":"1"}}]},
{"id":"16","name":"名前18","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属18</h3><h4>2012/04/23 10-06</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"30","data": {"weight":"1"}}]},
{"id":"48","name":"名前19","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属19</h3><h4>2012/04/25 13-03</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"24","data": {"weight":"1"}} , {"nodeTo":"21","data": {"weight":"1"}} , {"nodeTo":"16","data": {"weight":"1"}}]},
{"id":"36","name":"名前2","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属2</h3><h4>2012/04/24 08-47</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"48","data": {"weight":"1"}}]},
{"id":"61","name":"名前20","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属20</h3><h4>2012/04/27 11-59</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"36","data": {"weight":"1"}}]},
{"id":"12","name":"名前21","data": {"$dim":"24","$color":"#0ff","$height":103,"relation":"<h3>所属21</h3><h4>2012/04/23 09-46</h4><h4>View Pages 6</h4>"}},
{"id":"9","name":"名前25","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属22</h3><h4>2012/04/23 09-44</h4><h4>View Pages 2</h4>"}},
{"id":"10","name":"名前23","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属22</h3><h4>2012/04/23 09-46</h4><h4>View Pages 2</h4>"}},
{"id":"13","name":"名前24","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属22</h3><h4>2012/04/23 09-53</h4><h4>View Pages 2</h4>"}},
{"id":"19","name":"名前22","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属22</h3><h4>2012/04/23 10-29</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"9","data": {"weight":"1"}} , {"nodeTo":"10","data": {"weight":"1"}} , {"nodeTo":"13","data": {"weight":"1"}}]},
{"id":"11","name":"名前26","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属23</h3><h4>2012/04/23 09-46</h4><h4>View Pages 2</h4>"}},
{"id":"55","name":"名前27","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属24</h3><h4>2012/04/26 08-44</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"11","data": {"weight":"1"}}]},
{"id":"49","name":"名前28","data": {"$dim":"8","$color":"#0ff","$height":71,"relation":"<h3>所属25</h3><h4>2012/04/25 13-24</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"55","data": {"weight":"1"}}]},
{"id":"51","name":"名前29","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属26</h3><h4>2012/04/25 13-37</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"55","data": {"weight":"1"}}]},
{"id":"52","name":"名前30","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属27</h3><h4>2012/04/25 13-45</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"55","data": {"weight":"1"}}]},
{"id":"25","name":"名前31","data": {"$dim":"4","$color":"#f00","$height":63,"relation":"<h3>所属28</h3><h4>2012/04/23 11-34</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"49","data": {"weight":"1"}} , {"nodeTo":"51","data": {"weight":"1"}} , {"nodeTo":"52","data": {"weight":"1"}}]},
{"id":"27","name":"名前33","data": {"$dim":"76","$color":"#0ff","$height":207,"relation":"<h3>所属28</h3><h4>2012/04/23 12-06</h4><h4>View Pages 19</h4>"},"adjacencies": [{"nodeTo":"25","data": {"weight":"1"}}]},
{"id":"37","name":"名前32","data": {"$dim":"20","$color":"#f00","$height":95,"relation":"<h3>所属28</h3><h4>2012/04/24 08-54</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"27","data": {"weight":"1"}}]},
{"id":"33","name":"名前35","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属29</h3><h4>2012/04/23 16-17</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"37","data": {"weight":"1"}}]},
{"id":"50","name":"名前34","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属29</h3><h4>2012/04/25 13-33</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"33","data": {"weight":"1"}}]},
{"id":"53","name":"名前3","data": {"$dim":"8","$color":"#0ff","$height":71,"relation":"<h3>所属3</h3><h4>2012/04/25 14-28</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"33","data": {"weight":"1"}}]},
{"id":"5","name":"名前36","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属30</h3><h4>2012/04/23 09-06</h4><h4>View Pages 3</h4>"}},
{"id":"39","name":"名前37","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属31</h3><h4>2012/04/24 11-59</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"5","data": {"weight":"1"}}]},
{"id":"2","name":"名前38","data": {"$dim":"8","$color":"#0ff","$height":71,"relation":"<h3>所属32</h3><h4>2012/04/23 07-27</h4><h4>View Pages 2</h4>"}},
{"id":"29","name":"名前39","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属33</h3><h4>2012/04/23 13-06</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"2","data": {"weight":"1"}}]},
{"id":"6","name":"名前40","data": {"$dim":"4","$color":"#f00","$height":63,"relation":"<h3>所属34</h3><h4>2012/04/23 09-12</h4><h4>View Pages 1</h4>"}},
{"id":"62","name":"名前41","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属35</h3><h4>2012/04/27 15-42</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"6","data": {"weight":"1"}}]},
{"id":"47","name":"名前42","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属36</h3><h4>2012/04/24 18-49</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"62","data": {"weight":"1"}}]},
{"id":"41","name":"名前44","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属37</h3><h4>2012/04/24 14-55</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"47","data": {"weight":"1"}}]},
{"id":"42","name":"名前43","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属37</h3><h4>2012/04/24 15-05</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"41","data": {"weight":"1"}}]},
{"id":"45","name":"名前45","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属38</h3><h4>2012/04/24 16-28</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"41","data": {"weight":"1"}}]},
{"id":"17","name":"名前46","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属39</h3><h4>2012/04/23 10-19</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"42","data": {"weight":"1"}} , {"nodeTo":"45","data": {"weight":"1"}}]},
{"id":"26","name":"名前47","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属39</h3><h4>2012/04/23 11-41</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"42","data": {"weight":"1"}} , {"nodeTo":"45","data": {"weight":"1"}}]},
{"id":"8","name":"名前4","data": {"$dim":"8","$color":"#0ff","$height":71,"relation":"<h3>所属4</h3><h4>2012/04/23 09-34</h4><h4>View Pages 2</h4>"}},
{"id":"31","name":"名前48","data": {"$dim":"12","$color":"#0ff","$height":79,"relation":"<h3>所属40</h3><h4>2012/04/23 15-03</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"8","data": {"weight":"1"}}]},
{"id":"28","name":"名前49","data": {"$dim":"20","$color":"#f00","$height":95,"relation":"<h3>所属41</h3><h4>2012/04/23 12-33</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"31","data": {"weight":"1"}}]},
{"id":"59","name":"名前50","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属42</h3><h4>2012/04/26 14-50</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"28","data": {"weight":"1"}}]},
{"id":"38","name":"名前51","data": {"$dim":"24","$color":"#f00","$height":103,"relation":"<h3>所属43</h3><h4>2012/04/24 09-01</h4><h4>View Pages 6</h4>"},"adjacencies": [{"nodeTo":"59","data": {"weight":"1"}}]},
{"id":"40","name":"名前52","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属44</h3><h4>2012/04/24 13-10</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"38","data": {"weight":"1"}}]},
{"id":"60","name":"名前53","data": {"$dim":"8","$color":"#0ff","$height":71,"relation":"<h3>所属45</h3><h4>2012/04/27 07-53</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"40","data": {"weight":"1"}}]},
{"id":"57","name":"名前54","data": {"$dim":"4","$color":"#f00","$height":63,"relation":"<h3>所属46</h3><h4>2012/04/26 10-52</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"60","data": {"weight":"1"}}]},
{"id":"15","name":"名前55","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属47</h3><h4>2012/04/23 10-04</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"57","data": {"weight":"1"}}]},
{"id":"56","name":"名前56","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属48</h3><h4>2012/04/26 10-41</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"15","data": {"weight":"1"}}]},
{"id":"46","name":"名前57","data": {"$dim":"52","$color":"#f00","$height":159,"relation":"<h3>所属49</h3><h4>2012/04/24 16-48</h4><h4>View Pages 13</h4>"},"adjacencies": [{"nodeTo":"56","data": {"weight":"1"}}]},
{"id":"54","name":"名前5","data": {"$dim":"12","$color":"#f00","$height":79,"relation":"<h3>所属5</h3><h4>2012/04/26 08-12</h4><h4>View Pages 3</h4>"},"adjacencies": [{"nodeTo":"46","data": {"weight":"1"}}]},
{"id":"34","name":"名前58","data": {"$dim":"20","$color":"#f00","$height":95,"relation":"<h3>所属50</h3><h4>2012/04/23 16-51</h4><h4>View Pages 5</h4>"},"adjacencies": [{"nodeTo":"54","data": {"weight":"1"}}]},
{"id":"20","name":"名前59","data": {"$dim":"4","$color":"#f00","$height":63,"relation":"<h3>所属51</h3><h4>2012/04/23 10-33</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"34","data": {"weight":"1"}}]},
{"id":"18","name":"名前60","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属52</h3><h4>2012/04/23 10-20</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"34","data": {"weight":"1"}}]},
{"id":"7","name":"名前61","data": {"$dim":"20","$color":"#f00","$height":95,"relation":"<h3>所属53</h3><h4>2012/04/23 09-19</h4><h4>View Pages 5</h4>"}},
{"id":"58","name":"名前6","data": {"$dim":"4","$color":"#666","$height":63,"relation":"<h3>所属6</h3><h4>2012/04/26 13-32</h4><h4>View Pages 1</h4>"},"adjacencies": [{"nodeTo":"7","data": {"weight":"1"}}]},
{"id":"44","name":"名前7","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属7</h3><h4>2012/04/24 16-14</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"58","data": {"weight":"1"}}]},
{"id":"43","name":"名前8","data": {"$dim":"16","$color":"#f00","$height":87,"relation":"<h3>所属8</h3><h4>2012/04/24 15-28</h4><h4>View Pages 4</h4>"},"adjacencies": [{"nodeTo":"58","data": {"weight":"1"}}]},
{"id":"23","name":"名前9","data": {"$dim":"8","$color":"#f00","$height":71,"relation":"<h3>所属9</h3><h4>2012/04/23 10-49</h4><h4>View Pages 2</h4>"},"adjacencies": [{"nodeTo":"44","data": {"weight":"1"}} , {"nodeTo":"43","data": {"weight":"1"}}]}
]



  
  
  
  var json3 = [{
	  "id":"NECSoft",
	  "name":"VALWAYパーク掲示板",
	  "data": {
          "$type": "none"
		},
        "adjacencies": [
            {
              "nodeTo": "11",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "13",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "14",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "12",
              "data": {
                "$type": "none"
              }
            }
        ]},
  		{
			"id":"11",
			"name":"山下　貴史",
			"data": {
          "$angularWidth": 32.26,
				"$color":"#066",
	          "$height": 50,
				},
				"adjacencies": [

					]
			},
		{
			"id":"13",
			"name":"伊藤　雅浩",
			"data": {
          "$angularWidth": 32.26,
				"$color":"#f00",
	          "$height": 50,
			},
			"adjacencies": ["11","14"
				]
		},
		{
			"id":"14",
			"name":"栗山　貴憲",
			"data": {
          "$angularWidth": 32.26,
				"$color":"#0f0",
	          "$height": 50,
			},
			"adjacencies": ["11",
			]
		},
		{
			"id":"12",
			"name":"長田　克彦",
			"data": {
          "$angularWidth": 32.26,
				"$color":"#00f",
	          "$height": 50,
			},
			"adjacencies": [
				"13",
				
			]
		}
		];

  var json2 = [
      //"root" node is invisible
      {
        "id": "node0",
        "name": "",
        "data": {
          "$type": "none"
        },
        "adjacencies": [
            {
              "nodeTo": "node1",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "node2",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "node3",
              "data": {
                '$type': 'none'
              }
            }, {
              "nodeTo": "node4",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node5",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node6",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node7",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node8",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node9",
              "data": {
                "$type": "none"
              }
            }, {
              "nodeTo": "node10",
              "data": {
                "$type": "none"
              }
            }
        ]
      }, {
        "id": "node1",
        "name": "node 1",
        "data": {
          "$angularWidth": 13.00,
          "$color": "#33a",
          "$height": 70
        },
        "adjacencies": [
            {
              "nodeTo": "node3",
              "data": {
                "$color": "#ddaacc",
                "$lineWidth": 4
              }
            }, {
              "nodeTo": "node5",
              "data": {
                "$color": "#ccffdd",
                "$lineWidth": 4
              }
            }, {
              "nodeTo": "node7",
              "data": {
                "$color": "#dd99dd",
                "$lineWidth": 4
              }
            }, {
              "nodeTo": "node8",
              "data": {
                "$color": "#dd99dd",
                "$lineWidth": 4
              }
            }, {
              "nodeTo": "node10",
              "data": {
                "$color": "#ddaacc",
                "$lineWidth": 4
              }
            }
        ]
      }, {
        "id": "node2",
        "name": "node 2",
        "data": {
          "$angularWidth": 24.90,
          "$color": "#55b",
          "$height": 73
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node3",
        "name": "node 3",
        "data": {
          "$angularWidth": 10.50,
          "$color": "#77c",
          "$height": 75
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node4",
        "name": "node 4",
        "data": {
          "$angularWidth": 5.40,
          "$color": "#99d",
          "$height": 75
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node5",
        "name": "node 5",
        "data": {
          "$angularWidth": 32.26,
          "$color": "#aae",
          "$height": 80
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node6",
        "name": "node 6",
        "data": {
          "$angularWidth": 24.90,
          "$color": "#bf0",
          "$height": 85
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node7",
        "name": "node 7",
        "data": {
          "$angularWidth": 14.90,
          "$color": "#cf5",
          "$height": 85
        },
        "adjacencies": [
            "node8", "node9", "node10"
        ]
      }, {
        "id": "node8",
        "name": "node 8",
        "data": {
          "$angularWidth": 34.90,
          "$color": "#dfa",
          "$height": 80
        },
        "adjacencies": [
            "node9", "node10"
        ]
      }, {
        "id": "node9",
        "name": "node 9",
        "data": {
          "$angularWidth": 42.90,
          "$color": "#CCC",
          "$height": 75
        },
        "adjacencies": [
          "node10"
        ]
      }, {
        "id": "node10",
        "name": "node 10",
        "data": {
          "$angularWidth": 100.90,
          "$color": "#C37",
          "$height": 70
        },
        "adjacencies": []
      }
  ];
  //end
  //init Sunburst
  var sb = new $jit.Sunburst({
    //id container for the visualization
    injectInto: 'infovis',
    //Change node and edge styles such as
    //color, width, lineWidth and edge types
    Node: {
      overridable: true,
      type: useGradients? 'gradient-multipie' : 'multipie'
    },
    Edge: {
      overridable: true,
      type: 'hyperline',
      lineWidth: 2,
      color: '#777'
    },
    //Draw canvas text. Can also be
    //'HTML' or 'SVG' to draw DOM labels
    Label: {
      type: nativeTextSupport? 'Native' : 'SVG'
    },
    //Add animations when hovering and clicking nodes
    NodeStyles: {
      enable: true,
      type: 'Native',
      stylesClick: {
        'color': '#33dddd'
      },
      stylesHover: {
        'color': '#dd3333'
      },
      duration: 700
    },
    Events: {
      enable: true,
      type: 'Native',
      //List node connections onClick
      onClick: function(node, eventInfo, e){
        if (!node) return;
        var html = "<h4>" + node.name + " connections</h4><ul><li>", ans = [];
        node.eachAdjacency(function(adj){
          // if on the same level i.e siblings
            if (adj.nodeTo._depth == node._depth) {
              ans.push(adj.nodeTo.name);
            }
          });
        $jit.id('inner-details').innerHTML = html + ans.join("</li><li>") + "</li></ul>";
      }
    },
    levelDistance: 190,
    // Only used when Label type is 'HTML' or 'SVG'
    // Add text to the labels. 
    // This method is only triggered on label creation
    onCreateLabel: function(domElement, node){
      var labels = sb.config.Label.type;
      if (labels === 'HTML') {
        domElement.innerHTML = node.name;
      } else if (labels === 'SVG') {
        domElement.firstChild.appendChild(document.createTextNode(node.name));
      }
    },
    // Only used when Label type is 'HTML' or 'SVG'
    // Change node styles when labels are placed
    // or moved.
    onPlaceLabel: function(domElement, node){
      var labels = sb.config.Label.type;
      if (labels === 'SVG') {
        var fch = domElement.firstChild;
        var style = fch.style;
        style.display = '';
        style.cursor = 'pointer';
        style.fontSize = "0.8em";
        fch.setAttribute('fill', "#fff");
      } else if (labels === 'HTML') {
        var style = domElement.style;
        style.display = '';
        style.cursor = 'pointer';
        if (node._depth <= 1) {
          style.fontSize = "0.8em";
          style.color = "#ddd";
        } 
        var left = parseInt(style.left);
        var w = domElement.offsetWidth;
        style.left = (left - w / 2) + 'px';
      }
    }
  });
  // load JSON data.
  sb.loadJSON(json);
  // compute positions and plot.
  sb.refresh();
  //end
}
