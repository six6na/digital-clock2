$(function(){

    setInterval(function(){

        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let D = d.getDate();
        let y = d.getFullYear();
        let M = d.getMonth() + 1;
        let w = d.getDay();

        if(s < 10) {
            s = '0' + s;
        }
        if(m < 10) {
            m = '0' + m;
        } 
        if(h < 10) {
            h = '0' + h;
        }
        
        $('.day').html(D);
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);
        $('.year').html(y);
        $('.month').html(M);
        $('.week').html(w);

    // 오전 / 오후
        if(h < 12) {
        $('.ampm').html('am');
    } else {
        $('.ampm').html('pm');
    }

    // 요일
    if(w == 5) {
        $('.week').html('fri')
    }
    if(w == 6) {
        $('.week').html('sat')
    }
    if(w == 7) {
        $('.week').html('sun')
    }
    if(w == 1) {
        $('.week').html('mon')
    }
    if(w == 2) {
        $('.week').html('tue')
    }
    if(w == 3) {
        $('.week').html('wed')
    }
    if(w == 4) {
        $('.week').html('thu')
    }

    // 월
    if(M == 6) {
        $('.month').html('jun')
    }
    if(M == 7) {
        $('.month').html('jul')
    }
    if(M == 8) {
        $('.month').html('aug')
    }
    if(M == 9) {
        $('.month').html('sep')
    }
    if(M == 10) {
        $('.month').html('oct')
    }
    if(M == 11) {
        $('.month').html('nov')
    }
    if(M == 12) {
        $('.month').html('dec')
    }
    if(M == 1) {
        $('.month').html('jan')
    }
    if(M == 2) {
        $('.month').html('feb')
    }
    if(M == 3) {
        $('.month').html('mar')
    }
    if(M == 4) {
        $('.month').html('apr')
    }
    if(M == 5) {
        $('.month').html('may')
    }


    // 알람 
    if(m == 50) {
        if(s == 00){
            /*alert('휴식시간');*/
            $(function(){
                $('.container').addClass('on')
            })
        };
    }

    $('.container').click(function(){
        $('.container').removeClass('on')
    })

    });
    

});

