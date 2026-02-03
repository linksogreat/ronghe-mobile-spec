// 基础数据
window.RongHeData = {};

window.RongHeData.colors = [
    {
        "name": "品牌色",
        "list": [
            {
                "name": "对内主色",
                "hex": "#0088FF",
                "desc": "EAM/HD等对内系统"
            },
            {
                "name": "对外主色",
                "hex": "#00B972",
                "desc": "WSM/PM等对外系统"
            }
        ]
    },
    {
        "name": "中性色",
        "list": [
            {
                "name": "N1-1 背景",
                "hex": "#F8F8F8",
                "desc": "整体背景色"
            },
            {
                "name": "N1-2 框背",
                "hex": "#F9F9F9",
                "desc": "文本框背景色"
            },
            {
                "name": "N2-1 边框",
                "hex": "#F0F0F0",
                "desc": "边框、线色"
            },
            {
                "name": "N2-2 边框",
                "hex": "#E0E0E0",
                "desc": "边框、线色"
            },
            {
                "name": "N3-1 置灰",
                "hex": "#BEBEBE",
                "desc": "禁用、失效"
            },
            {
                "name": "N3-2 提示",
                "hex": "#999999",
                "desc": "提示文字"
            },
            {
                "name": "N3-3 辅助",
                "hex": "#B6909C",
                "desc": "辅助、说明"
            },
            {
                "name": "N3-4 辅助",
                "hex": "#666666",
                "desc": "辅助、说明"
            },
            {
                "name": "N4-1 正文",
                "hex": "#333333",
                "desc": "主文字2"
            },
            {
                "name": "N4-2 标题",
                "hex": "#101010",
                "desc": "主文字1"
            },
            {
                "name": "B-1 遮罩",
                "hex": "rgba(0,0,0,0.5)",
                "desc": "弹窗遮罩"
            },
            {
                "name": "B-2 黑",
                "hex": "#000000",
                "desc": "黑色"
            },
            {
                "name": "W 白",
                "hex": "#FFFFFF",
                "desc": "白色"
            }
        ]
    },
    {
        "name": "功能色",
        "list": [
            {
                "name": "RG 警示背",
                "hex": "#FFEEAA",
                "desc": "警示/拒绝背景"
            },
            {
                "name": "RC 警示字",
                "hex": "#FF3030",
                "desc": "警示/拒绝文字"
            },
            {
                "name": "GG 成功背",
                "hex": "#E5F9F5",
                "desc": "成功/通过背景"
            },
            {
                "name": "GC 成功字",
                "hex": "#00C797",
                "desc": "成功/通过文字"
            },
            {
                "name": "OG 强调背",
                "hex": "#FFFFE2",
                "desc": "强调/退回背景"
            },
            {
                "name": "OC 强调字",
                "hex": "#FFF8FE",
                "desc": "强调/退回文字"
            },
            {
                "name": "BG 同意背",
                "hex": "#ECF2FE",
                "desc": "同意/审批背景"
            },
            {
                "name": "BC 同意字",
                "hex": "#0088FF",
                "desc": "同意/审批文字"
            }
        ]
    }
];

window.RongHeData.typography = [
    {
        "name": "标题文本",
        "size": "18px ",
        "lineHeight": "-",
        "weight": "Bold",
        "color": "#101010",
        "text": "标题 Text"
    },
    {
        "name": "正文文本",
        "size": "14px ",
        "lineHeight": "-",
        "weight": "Regular",
        "color": "#333333",
        "text": "正文 Text"
    },
    {
        "name": "辅助文本",
        "size": "12px ",
        "lineHeight": "-",
        "weight": "Regular",
        "color": "#666666",
        "text": "辅助 Text"
    },
    {
        "name": "提示文本",
        "size": "12px ",
        "lineHeight": "-",
        "weight": "Regular",
        "color": "#999999",
        "text": "提示 Text"
    },
    {
        "name": "禁用文本",
        "size": "12px ",
        "lineHeight": "-",
        "weight": "Regular",
        "color": "#BEBEBE",
        "text": "禁用 Text"
    }
];

window.RongHeData.shadows = [
    {
        "name": "默认投影",
        "value": "0 1px 2px rgba(0,0,0,0.06)",
        "class": "shadow-sm"
    }
];

window.RongHeData.corners = [
    {
        "name": "2px",
        "value": "2px",
        "class": "rounded-sm"
    },
    {
        "name": "4px (默认)",
        "value": "4px",
        "class": "rounded"
    },
    {
        "name": "8px",
        "value": "8px",
        "class": "rounded-md"
    },
    {
        "name": "12px",
        "value": "12px",
        "class": "rounded-lg"
    },
    {
        "name": "16px",
        "value": "16px",
        "class": "rounded-xl"
    },
    {
        "name": "32px",
        "value": "32px",
        "class": "rounded-2xl"
    },
    {
        "name": "椭圆",
        "value": "9999px",
        "class": "rounded-full"
    }
];

window.RongHeData.spacings = [
    {
        "name": "Base 4",
        "value": "4px"
    },
    {
        "name": "Base 8",
        "value": "8px"
    },
    {
        "name": "Base 12",
        "value": "12px"
    },
    {
        "name": "Base 16",
        "value": "16px"
    },
    {
        "name": "Base 20",
        "value": "20px"
    },
    {
        "name": "Base 24",
        "value": "24px"
    },
    {
        "name": "Base 32",
        "value": "32px"
    }
];

window.RongHeData.commonIcons = [
    "arrow",
    "arrow-left",
    "success",
    "cross",
    "plus",
    "minus",
    "fail",
    "circle",
    "play-circle-o",
    "search",
    "like-o",
    "star-o",
    "setting-o",
    "user-o",
    "home-o",
    "cart-o",
    "chat-o",
    "shop-o",
    "apps-o",
    "scan",
    "qr"
];

window.RongHeData.customIcons = [
    "stLine-wrench-l1",
    "antOutline-alert",
    "antOutline-disconnect",
    "loading-v",
    "a-md-trending_down1",
    "a-md-trending_up1",
    "shouqi2",
    "shouqi1",
    "shouqi",
    "guanbi1",
    "riLine-customer-service-line",
    "a-tubiao3",
    "a-tubiao22",
    "a-tubiao41",
    "bianzubeifen1",
    "a--0991",
    "a--099",
    "bianzubeifen",
    "a-iconPark-curve-adjustment1",
    "delete",
    "edit",
    "more",
    "shaixuan",
    "biaozhu",
    "zhanghaodenglu",
    "a-tubiao12",
    "a-tubiao11",
    "fenxijuece",
    "stLine-wrench-l",
    "zhongzuo",
    "chehui",
    "xiaoliangyuce",
    "a-wenduVF03KMX",
    "a-shuidiIVBtvWK",
    "a-lieriGOcELvN",
    "a-fengsufengxiangY5G3Dre",
    "a-fengxiangbiao9IqgYFO",
    "a-yunxiayuyushuixiaoyu",
    "a-antOutline-user-add1",
    "chulilianghao",
    "chulibuliang",
    "antOutline-control",
    "LOGOtubiaoshiliang1",
    "LOGOtubiaoshiliang",
    "shoudiangongsi",
    "fengdian",
    "moren",
    "dulichuneng",
    "huandian",
    "guangfu1",
    "a-1231-011",
    "butie2-01",
    "butie2-02",
    "a-1231-01",
    "a-111-01",
    "zaixianjishujiaoyixitong",
    "jiaoyi-jiaoyianquan",
    "a-231-01",
    "guangfu",
    "a-iconPark-connection",
    "a-tubiao1",
    "a-tubiao21",
    "a-antOutline-pushpin2",
    "antOutline-pushpin",
    "a-tubiao2",
    "a-question",
    "baojingjilu",
    "fenxi",
    "dianzhan",
    "a-ziyuan2",
    "shipin",
    "shebei",
    "jiankongdaping",
    "xiandianyunhang",
    "xiandianguanji",
    "yejian",
    "zhengchangyunhang",
    "daiji",
    "guzhangtingji",
    "weishibietingji",
    "shoudong",
    "zijiange",
    "tongxunzhongduan",
    "xianzhiliusu",
    "fujian",
    "juece",
    "shujuyuce",
    "yanzhengma",
    "mianjituhui",
    "guanbi",
    "duihao",
    "c187tuozhuai",
    "a-404dingwei",
    "zuzhiguanxiguanli",
    "jiangxu",
    "mianxingxiajiantou",
    "mianxingshangjiantou",
    "shengxu",
    "xianxing-_bodong",
    "dianlisheshi",
    "dianwanggongsi",
    "shebeitongji",
    "a-dianchi1",
    "shouji",
    "suanfashouquan",
    "jiaoyirili",
    "zhongchangqijiaoyi",
    "loading",
    "riqiandianjia",
    "dianjiayucepinggu",
    "gongyoushuju-01-01",
    "shujuguanli-01-01",
    "siyoushuju-01-01",
    "qixiangyujing",
    "fanhuiquanping-01-01",
    "fanhui-01-01",
    "biaoge-01-01",
    "tubiao-01",
    "quanping-01-01",
    "xiazai-01",
    "a-yincang1",
    "a-zhanghao1",
    "a-yanzhengma1Copy5",
    "a-54xianshi1",
    "a-tubiao4Copy1",
    "a-tubiao421",
    "a-tubiao4",
    "a-tubiao7",
    "a-mima1",
    "a-riLine-calendar-line1",
    "xianhuochuqing",
    "dianwangyunhang",
    "yonghuguanli",
    "xianhuofupan",
    "jiaoseguanli",
    "fenxipinggu",
    "wangjiafenxi",
    "zhutiguanli",
    "chuqingjieguo",
    "shichanggongxu",
    "shouye",
    "a-shichanggongxu2",
    "ziliaoku",
    "hangqingkanban",
    "qixiangmianban",
    "xitongshezhi",
    "ludianwendu",
    "fuzhao-01",
    "jiangshui-01",
    "jiangxue-01",
    "qiwen-01",
    "fengsu-01",
    "fengxiang-01",
    "qiya-01",
    "yunliang-01",
    "xiangduishidu-01"
];

window.RongHeData.ipMascots = [
    { "name": "任务排队中", "file": "任务排队中.png" },
    { "name": "光伏资产", "file": "光伏资产.png" },
    { "name": "努力工作", "file": "努力工作.png" },
    { "name": "合同会签", "file": "合同会签.png" },
    { "name": "图片加载失败", "file": "图片加载失败.png" },
    { "name": "审批", "file": "审批.png" },
    { "name": "投资回款", "file": "投资回款.png" },
    { "name": "操作预警", "file": "操作预警.png" },
    { "name": "数据分析", "file": "数据分析.png" },
    { "name": "无收藏内容", "file": "无收藏内容.png" },
    { "name": "暂无任务", "file": "暂无任务.png" },
    { "name": "暂无消息", "file": "暂无消息.png" },
    { "name": "暂无系统权限", "file": "暂无系统权限.png" },
    { "name": "暂无系统通知", "file": "暂无系统通知.png" },
    { "name": "欢迎", "file": "欢迎.png" },
    { "name": "正在开发", "file": "正在开发.png" },
    { "name": "正在查询", "file": "正在查询.png" },
    { "name": "等待审核", "file": "等待审核.png" },
    { "name": "系统升级中", "file": "系统升级中.png" },
    { "name": "系统维护中", "file": "系统维护中.png" },
    { "name": "网络异常:中断", "file": "网络异常:中断.png" },
    { "name": "财务计算", "file": "财务计算.png" },
    { "name": "页面内容为空", "file": "页面内容为空.png" },
    { "name": "风电资产", "file": "风电资产.png" }
];
