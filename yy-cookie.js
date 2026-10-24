// yy.swgongshui.com MITM 注入 Cookie
// 用法：在 Loon 里新建一个 http-request 脚本，匹配 ^(http|https)://yy\.swgongshui\.com/，http 和 https 都匹配，粘贴本文件
// 优点：保留浏览器原有 Cookie，只替换掉同名的 enter_site_ok / ctcms_winduser，避免发两份

const INJECT = 'enter_site_ok=Y; ctcms_winduser=TRJBX1wWCEYDAglQCldRG0kWQ0NRRFZVXwEVDRIZQQJWDV0MFBwWRUxVRgEVDRJSG01BVgtRRlFHRRoOEAJUBQdWD1IHDlZVBgQMBAtQAgdWAFFRCgBUCVQBVQZWFEU%3D';

let headers = $request.headers || {};
let cookie = headers['Cookie'] || headers['cookie'] || '';
cookie = cookie.split(';')
    .map(s => s.trim())
    .filter(s => s && !/^enter_site_ok=/.test(s) && !/^ctcms_winduser=/.test(s))
    .join('; ');
headers['Cookie'] = cookie ? cookie + '; ' + INJECT : INJECT;

// 如果 Cookie 注入后仍未登录（疑似 UA 绑定），取消下面一行的注释，同时改请求头 UA：
// headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

$done({ headers });
