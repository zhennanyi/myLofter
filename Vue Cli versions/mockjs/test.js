 Mock.mock('http://g.cn', {
     'name': '@name',
     'age|1-100': 100,
     'color': '@color'
 });

 var data = Mock.mock({
     'list|1-10': [{
         'id|+1': 1
     }]
 });