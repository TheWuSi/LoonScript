// yy.swgongshui.com MITM 注入 Cookie
// 用法：Loon http-request 脚本，匹配 ^https?://yy\.swgongshui\.com/
// 逻辑：不保留浏览器原本的 Cookie，只发下面这一串注入的 Cookie
// 注意：必须把 $request.headers 里大写 Cookie 和小写 cookie 两条都删掉，再交回完整 headers，
// 只交回一个 {Cookie} 对象时，Loon 会把新头和原本小写的旧头合并，导致还是两条 Cookie 头

const INJECT = 'enter_site_ok=Y; ctcms_winduser=TRJBX1wWCEYDAglQCldRG0kWQ0NRRFZVXwEVDRIZQQJWDV0MFBwWRUxVRgEVDRJSG01BVgtRRlFHRRoOEAJUBQdWD1IHDlZVBgQMBAtQAgdWAFFRCgBUCVQBVQZWFEU%3D';

const headers = $request.headers || {};
delete headers['Cookie'];
delete headers['cookie'];
headers['Cookie'] = INJECT;

// 如果 Cookie 注入后仍未登录（疑似 UA 绑定），取消下面一行的注释，同时改请求头 UA：
// headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';

$done({ headers });
