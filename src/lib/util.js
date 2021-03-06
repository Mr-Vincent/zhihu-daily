import axios from 'axios';

const Util = {
    imgPath:"http://127.0.0.1:8011/img/",
    apiPath:'http://127.0.0.1:8010/'
    // apiPath:'http://news-at.zhihu.com/api/4/'
};

Util.ajax = axios.create({
    baseURL:Util.apiPath
});

Util.ajax.interceptors.response.use(res=>{
    return res.data;
});


var Time = {
    getUnix: function () {
        var date = new Date();
        return date.getTime();
    },
    getTodayUnix: function () {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getYearUnix: function () {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getLastDate: function (time = (new Date()).getTime()) {
        var date = new Date(time);
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        return date.getFullYear() + month + day;
    },
    getFormatTime: function (timestamp) {
        var now = this.getUnix();
        var today = this.getTodayUnix();
        var year = this.getYearUnix();
        var timer = (now - timestamp) / 1000;
        var tip = '';
        if (timer <= 0) {
            tip = '刚刚';
        }else if(Math.floor(timer/60) <=0){
            tip = '刚刚';
        }else if(timer < 3600){
            tip = Math.floor(timer/60) + '分钟前';
        }else if(timer>=3600 && (timestamp-today >=0)){
            tip = Math.floor(timer/3600) + '小时前';
        }else if(timer/86400 <=31){
            tip = Math.ceil(timer/86400) + '天前';
        }else{
            tip = this.getLastDate(timestamp);
        }
        return tip;
    }
}

Util.getTodayTime = function () {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
};
Util.prevDay = function (time = (new Date()).getTime()) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    return date.getFullYear() + month + day;
};

export default Util;