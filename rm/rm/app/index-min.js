KISSY.add('app/index',function(S,Node)
{
    return {
        on:function () {
           console.log('$libs',$libs);
           console.log('$libs.browser',$libs.browser);
        }
    }
},{requires:['node']});