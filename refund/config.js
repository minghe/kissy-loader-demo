(function(S) {
    window.Package = {
        init:function(){
            var debug = KISSY.Config.debug;
            var path = debug && './src' || './build';
            //∞¸≈‰÷√
            S.config({packages: [{
                name: 'refund',
                path: path,
                charset: 'gbk'
            }]});
        }
    }
})(KISSY);