/**
 * @fileoverview �˿�����ҳ��ű���ʼ��
 * @author: ���ӣ���ƽ��<minghe36@126.com>
 *
 **/
KISSY.add(function(S, Header) {

    return function(){
        Header();
        return 'refund apply';
    }

}, {requires:['../mods/header']});
