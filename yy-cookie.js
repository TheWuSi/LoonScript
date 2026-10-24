// yy.swgongshui.com MITM 注入 Cookie
// 用法：Loon http-request 脚本，匹配 ^https?://yy\.swgongshui\.com/
// 逻辑：完整替换请求头，不保留之前的请求头，只发下面这 5 个头

const headers = {
  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
  'cookie': 'enter_site_ok=Y; ctcms_winduser=TRJBX1wWCEYDAglQCldRG0kWQ0NRRFZVXwEVDRIZQQJWDV0MFBwWRUxVRgEVDRJSG01BVgtRRlFHRRoOEAJUBQdWD1IHDlZVBgQMBAtQAgdWAFFRCgBUCVQBVQZWFEU%3D',
  'accept-encoding': 'gzip',
  'referer': 'https://yy.swgongshui.com/',
  'host': 'yy.swgongshui.com'
};

$done({ headers });
