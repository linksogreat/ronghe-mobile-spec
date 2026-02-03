// 组件配置数据
window.RongHeComponents = {
    // 1. 样式补充 (Moved to static sections in mobile_preview.html)
    // spacing: { name: '1.5 间距', desc: 'Spacing System' },
    // icons: { name: '1.6 图标', desc: 'Icon System' },

    // 2. 布局
    grid: { name: '2.1 栅格', demos: [{ title: '基础用法', type: 'static', html: '<div class="van-row"><div class="van-col van-col--8" style="background:#39a9ed;color:white;text-align:center;">span:8</div><div class="van-col van-col--8" style="background:#66c6f2;color:white;text-align:center;">span:8</div><div class="van-col van-col--8" style="background:#39a9ed;color:white;text-align:center;">span:8</div></div>', code: '<van-row><van-col span="8">span:8</van-col>...</van-row>' }], rules: ['图片中未标注栅格列数、间距等基础参数', '待确认项：是否存在统一栅格规范'] },
    layout: { 
        name: '2.2 布局', 
        demos: [], 
        rules: [
            '<strong>间距规范</strong>：所有模块、功能、组件之间的间距严格遵守“4的倍数关系”，基础间距为4/8/12/16/20/24/32px。',
            '<strong>页面通用结构尺寸</strong>：状态栏高度 88px, Tab高度 88px, 数据强调区高度 82px, 按钮行高 36px, 操作栏高度 60px, 卡片间距 8px。',
            '<strong>适配规则</strong>：以375×812px屏幕尺寸为设计基准。'
        ] 
    },

    // 3. 常规
    button: { 
        name: '3.1 按钮', 
        demos: [
            {
                title: '完整演示',
                type: 'vue',
                template: `
                    <div>
                        <div class="van-doc-demo-block__title">按钮类型</div>
                        <div class="demo-button-row">
                            <van-button type="primary">主要按钮</van-button>
                            <van-button type="success">成功按钮</van-button>
                            <van-button type="default">默认按钮</van-button>
                        </div>
                        <div class="demo-button-row">
                            <van-button type="danger">危险按钮</van-button>
                            <van-button type="warning">警告按钮</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">朴素按钮</div>
                        <div class="demo-button-row">
                            <van-button plain type="primary">朴素按钮</van-button>
                            <van-button plain type="success">朴素按钮</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">细边框</div>
                        <div class="demo-button-row">
                            <van-button plain hairline type="primary">细边框按钮</van-button>
                            <van-button plain hairline type="success">细边框按钮</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">禁用状态</div>
                        <div class="demo-button-row">
                            <van-button disabled type="primary">禁用状态</van-button>
                            <van-button disabled type="success">禁用状态</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">加载状态</div>
                        <div class="demo-button-row">
                            <van-button loading type="primary" />
                            <van-button loading type="primary" loading-type="spinner" />
                            <van-button loading loading-text="加载中..." type="success" />
                        </div>

                        <div class="van-doc-demo-block__title">按钮形状</div>
                        <div class="demo-button-row">
                            <van-button square type="primary">方形按钮</van-button>
                            <van-button round type="success">圆形按钮</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">图标按钮</div>
                        <div class="demo-button-row">
                            <van-button icon="plus" type="primary" />
                            <van-button icon="plus" type="primary">按钮</van-button>
                            <van-button icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png" plain type="primary">按钮</van-button>
                        </div>

                        <div class="van-doc-demo-block__title">按钮尺寸</div>
                        <div class="demo-button-row">
                            <van-button size="large" type="primary">大号按钮</van-button>
                            <van-button size="normal" type="primary">普通按钮</van-button>
                            <van-button size="small" type="primary">小型按钮</van-button>
                            <van-button size="mini" type="primary">迷你按钮</van-button>
                        </div>
                        
                        <div class="van-doc-demo-block__title">自定义颜色</div>
                        <div class="demo-button-row">
                            <van-button color="#7232dd">单色按钮</van-button>
                            <van-button color="#7232dd" plain>单色按钮</van-button>
                            <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
                        </div>
                    </div>
                `
            }
        ],
        rules: [
            '<strong>主按钮</strong>：背景色#0088FF（对内）/#00B972（对外），文字色#FFFFFF',
            '<strong>次按钮</strong>：背景色#FFFFFF，边框色#0088FF，文字色#0088FF',
            '<strong>禁用态</strong>：背景色#BEBEBE，文字色#FFFFFF'
        ]
    },
    search: { name: '3.2 搜索', demos: [{ title: '搜索栏', id: 'search', type: 'custom', code: '<van-search v-model="value" placeholder="请输入" />' }], rules: ['图片中未包含搜索组件的规范内容，待确认。'] },
    popover: { name: '3.3 气泡弹出', demos: [{ title: '气泡', id: 'popover', type: 'custom', code: '<van-popover v-model:show="showPopover" :actions="actions">\n  <template #reference><van-button>点击</van-button></template>\n</van-popover>' }], rules: ['图片中未包含气泡弹出框的规范内容，待确认。'] },

    // 4. 导航
    tab: { 
        name: '4.1 标签页', 
        demos: [{ title: '基础用法', id: 'tabs', type: 'custom', code: '<van-tabs v-model:active="active">...</van-tabs>' }], 
        rules: [
            '<strong>基础样式</strong>：建议固定标签栏最多5个，选中态底部显示蓝色下划线，未选中态文字为灰色。',
            '<strong>标题栏滚动</strong>：标题栏可左右滑动；每个标题之间固定间距24px，两端固定间距20px。',
            '<strong>胶囊Tab</strong>：点击胶囊切换选中态，背景色变为品牌色，文字色变为白色。'
        ] 
    },
    indexbar: { 
        name: '4.2 索引栏', 
        demos: [{ title: '索引', type: 'static', html: '<div style="height:200px;overflow:auto;position:relative;border:1px solid #eee"><div class="van-index-bar"><div class="van-index-anchor">A</div><div class="van-cell">文本</div><div class="van-index-anchor">B</div><div class="van-cell">文本</div><div class="van-index-bar__sidebar"><span class="van-index-bar__index" style="color:#FF3030">A</span><span class="van-index-bar__index">B</span></div></div></div>', code: '<van-index-bar>...</van-index-bar>' }], 
        rules: ['<strong>当前索引标识</strong>：右侧索引标红（#FF3030）指明当前索引位置。', '交互规则：用户向上滑动时，索引标题栏吸顶。'] 
    },
    navbar: { 
        name: '4.3 导航栏', 
        demos: [{ title: '导航栏', type: 'static', html: '<div class="van-nav-bar van-hairline--bottom" style="background:#0088FF"><div class="van-nav-bar__content"><div class="van-nav-bar__left"><i class="van-icon van-icon-arrow-left van-nav-bar__arrow" style="color:white;font-size:24px"></i><span class="van-nav-bar__text" style="color:white">返回</span></div><div class="van-nav-bar__title van-ellipsis" style="color:white;font-size:18px">标题</div><div class="van-nav-bar__right"><i class="van-icon van-icon-ellipsis" style="color:white;font-size:24px"></i></div></div></div>', code: '<van-nav-bar title="标题" left-text="返回" left-arrow style="--van-nav-bar-background:#0088FF;--van-nav-bar-title-text-color:white;--van-nav-bar-icon-color:white;--van-nav-bar-text-color:white" />' }], 
        rules: ['<strong>尺寸参数</strong>：导航栏高度 88px，标题文字字号 18px。', '<strong>视觉样式</strong>：背景色 #0088FF（对内），文字色 #FFFFFF。'] 
    },
    pagination: { name: '4.4 分页', demos: [{ title: '分页', type: 'input', component: 'van-pagination', model: 'pageNum', props: { totalItems: 24, itemsPerPage: 5 }, code: '<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />' }] },
    sidebar: { 
        name: '4.5 侧边导航', 
        demos: [{ title: '侧边导航', id: 'sidebar', type: 'custom', code: '<van-sidebar v-model="active">...</van-sidebar>' }], 
        rules: ['<strong>选中态</strong>：背景色为浅灰色（#F8F8F8），文字色为品牌色（#0088FF）。', '<strong>默认态</strong>：背景色为白色，文字色为深灰色（#333333）。'] 
    },
    tabbar: { name: '4.6 标签栏', demos: [{ title: '底部标签', id: 'tabbar', type: 'custom', code: '<van-tabbar v-model="active">...</van-tabbar>' }] },
    'grid-nav': {
        name: '4.7 宫格',
        demos: [{ title: '宫格', type: 'static', html: '<div class="van-grid van-hairline--top"><div class="van-grid-item" style="flex-basis: 25%;"><div class="van-grid-item__content van-grid-item__content--center"><i class="van-icon van-icon-photo-o" style="font-size: 28px;"></i><span class="van-grid-item__text">文字</span></div></div><div class="van-grid-item" style="flex-basis: 25%;"><div class="van-grid-item__content van-grid-item__content--center"><i class="van-icon van-icon-photo-o" style="font-size: 28px;"></i><span class="van-grid-item__text">文字</span></div></div></div>', code: '<van-grid :column-num="4">...</van-grid>' }],
        rules: ['宫格项支持2列/3列/4列/5列布局，宫格项间距 8px。']
    },
    steps: { 
        name: '4.8 步骤条', 
        demos: [{ title: '步骤条', id: 'steps', type: 'custom', code: '<van-steps :active="active">\n  <van-step>买家下单</van-step>\n  <van-step>商家接单</van-step>\n</van-steps>' }], 
        rules: [
            '<strong>已完成态</strong>：步骤点背景色#0088FF，显示对勾图标。',
            '<strong>进行中态</strong>：步骤点背景色#0088FF，显示数字。',
            '<strong>未完成态</strong>：步骤点背景色#E0E0E0，显示数字。'
        ] 
    },

    // 5. 数据录入
    field: { 
        name: '5.1 输入框', 
        demos: [
            {
                title: '完整演示',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    return {
                        text: ref(''),
                        phone: ref(''),
                        digit: ref(''),
                        number: ref(''),
                        password: ref('')
                    };
                },
                template: `
                    <div>
                        <div class="van-doc-demo-block__title">基础用法</div>
                        <van-cell-group inset>
                            <van-field v-model="text" label="文本" placeholder="请输入文本" />
                        </van-cell-group>

                        <div class="van-doc-demo-block__title">自定义类型</div>
                        <van-cell-group inset>
                            <van-field v-model="text" label="文本" placeholder="请输入文本" />
                            <van-field v-model="phone" type="tel" label="手机号" placeholder="请输入手机号" />
                            <van-field v-model="digit" type="digit" label="整数" placeholder="请输入整数" />
                            <van-field v-model="number" type="number" label="数字" placeholder="请输入数字（支持小数）" />
                            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
                        </van-cell-group>
                    </div>
                `
            }
        ] 
    },
    radio: { name: '5.2 选框', demos: [{ title: '单选与多选', id: 'radio', type: 'custom', code: '<van-radio-group v-model="checked">...</van-radio-group>' }] },
    picker: { name: '5.3 选择器', demos: [{ title: '选择器', type: 'static', html: '<div class="van-picker"><div class="van-picker__toolbar"><button class="van-picker__cancel">取消</button><button class="van-picker__confirm" style="color:#0088FF">确认</button></div><div class="van-picker__columns" style="height:150px"><div class="van-picker-column"><ul style="transform:translate3d(0, 50px, 0)"><li class="van-picker-column__item van-picker-column__item--selected">杭州</li><li>宁波</li></ul></div></div></div>', code: '<van-picker :columns="columns" />' }] },
    cascader: { 
        name: '5.4 级联选择器', 
        demos: [{ title: '级联选择', id: 'cascader', type: 'custom', code: '<van-cascader v-model="value" :options="options" />' }], 
        rules: ['<strong>单选模式</strong>：仅支持左右两列布局；选中项右侧显示对勾图标，底部为蓝色主按钮。', '<strong>多选模式</strong>：左右两列布局，左侧为一级分类，右侧为二级选项，支持勾选多个。'] 
    },
    datetime: { 
        name: '5.5 时间选择器', 
        demos: [{ title: '时间选择', type: 'action', actions: [{text:'选择时间', action:'time-picker'}, {text:'选择日期', action:'date-picker'}], code: '<van-time-picker v-model="currentTime" />\n<van-date-picker v-model="currentDate" />' }],
        rules: ['支持年月日、年月、时间、日期时间、日期区间选择。']
    },
    calendar: { 
        name: '5.6 日历选择器', 
        demos: [{ title: '日历', type: 'action', actions: [{text:'选择日期', action:'calendar'}], code: '<van-calendar v-model:show="show" />' }],
        rules: ['<strong>基础样式</strong>：日期不可选时，字体颜色置灰。', '<strong>日期区间</strong>：弹层弹出后，默认选择最近的两天。'] 
    },
    treeselect: { name: '5.7 分类选择', demos: [{ title: '分类选择', id: 'tree-select', type: 'custom', code: '<van-tree-select v-model:active-id="activeId" :items="items" />' }] },
    actionsheet: { 
        name: '5.8 上拉菜单', 
        demos: [{ title: '上拉菜单', type: 'action', actions: [{text:'弹出菜单', action:'actionsheet'}], code: '<van-action-sheet v-model:show="show" :actions="actions" />' }],
        rules: ['一般存在2-6个操作项推荐使用。', '<strong>分享面板</strong>：当图标数大于5个时，渠道与形式单排展示，可滑动。']
    },
    dropdown: { 
        name: '5.9 下拉菜单', 
        demos: [{ title: '下拉菜单', id: 'dropdown', type: 'custom', code: '<van-dropdown-menu>\n  <van-dropdown-item v-model="value1" :options="option1" />\n</van-dropdown-menu>' }],
        rules: ['菜单栏最好不超过4个选项。', '可自定义字体颜色、字体大小、cell高度等内容。']
    },
    stepper: { 
        name: '5.10 步进器', 
        demos: [{ title: '步进器', type: 'input', component: 'van-stepper', model: 'stepperVal', code: '<van-stepper v-model="value" />' }],
        rules: ['<strong>禁用状态</strong>：所有元素置灰，不可点击。', '<strong>异常提示</strong>：已达最小/最大值时，点击给出 Toast 提示。']
    },
    keyboard: { 
        name: '5.12 数字键盘', 
        demos: [{ title: '数字键盘', id: 'number-keyboard', type: 'custom', code: '<van-number-keyboard :show="show" />' }],
        rules: ['<strong>自定义键盘</strong>：支持带小数点+清空键+完成键；完成键为蓝色主按钮。']
    },
    form: { name: '5.13 表单', demos: [{ title: '表单', type: 'static', html: '<div class="van-cell-group van-cell-group--inset"><div class="van-cell van-field"><div class="van-cell__title"><span>账号</span></div><div class="van-field__value"><input class="van-field__control" placeholder="请输入"></div></div></div><div style="margin:16px"><button class="van-button van-button--primary van-button--block van-button--round" style="background:#0088FF;border-color:#0088FF"><span>提交</span></button></div>', code: '<van-form>...</van-form>' }] },

    // 6. 数据展示
    cell: { 
        name: '6.1 单元格', 
        demos: [
            {
                title: '完整演示',
                type: 'vue',
                template: `
                    <div>
                        <div class="van-doc-demo-block__title">基础用法</div>
                        <van-cell-group>
                            <van-cell title="单元格" value="内容" />
                            <van-cell title="单元格" value="内容" label="描述信息" />
                        </van-cell-group>

                        <div class="van-doc-demo-block__title">卡片风格</div>
                        <van-cell-group inset>
                            <van-cell title="单元格" value="内容" />
                            <van-cell title="单元格" value="内容" label="描述信息" />
                        </van-cell-group>

                        <div class="van-doc-demo-block__title">单元格大小</div>
                        <van-cell title="单元格" value="内容" size="large" />
                        <van-cell title="单元格" value="内容" size="large" label="描述信息" />

                        <div class="van-doc-demo-block__title">展示图标</div>
                        <van-cell title="单元格" value="内容" icon="location-o" />

                        <div class="van-doc-demo-block__title">展示箭头</div>
                        <van-cell title="单元格" is-link />
                        <van-cell title="单元格" is-link value="内容" />
                        <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
                        
                        <div class="van-doc-demo-block__title">分组标题</div>
                        <van-cell-group title="分组 1">
                            <van-cell title="单元格" value="内容" />
                        </van-cell-group>
                        <van-cell-group title="分组 2">
                            <van-cell title="单元格" value="内容" />
                        </van-cell-group>
                        
                        <div class="van-doc-demo-block__title">使用插槽</div>
                        <van-cell value="内容" is-link>
                            <template #title>
                                <span class="custom-title" style="margin-right: 4px; vertical-align: middle;">单元格</span>
                                <van-tag type="primary">标签</van-tag>
                            </template>
                        </van-cell>
                    </div>
                `
            }
        ] 
    },
    popup: { name: '6.3 弹出层', demos: [{ title: '位置', type: 'action', actions: [{text:'顶部弹出', action:'popup-top'}, {text:'居中弹出', action:'popup-center'}], code: '<van-popup v-model:show="show" position="top" />' }] },
    slider: { name: '6.4 滑块', demos: [{ title: '滑块', type: 'input', component: 'van-slider', model: 'sliderVal', code: '<van-slider v-model="value" />' }] },
    switch: { name: '6.5 开关', demos: [{ title: '开关', type: 'input', component: 'van-switch', model: 'switchVal', code: '<van-switch v-model="checked" />' }] },
    rate: { name: '6.6 评分', demos: [{ title: '评分', type: 'input', component: 'van-rate', model: 'rateVal', code: '<van-rate v-model="value" />' }] },
    collapse: { name: '6.7 折叠面板', demos: [{ title: '折叠面板', id: 'collapse', type: 'custom', code: '<van-collapse v-model="activeNames">\n  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>\n</van-collapse>' }] },
    tag: { 
        name: '6.9 标签', 
        demos: [{ title: '标签样式', type: 'static', html: '<span class="van-tag" style="background:#ECF2FE;color:#0088FF">同意</span> <span class="van-tag" style="background:#FFEEAA;color:#FF3030">拒绝</span> <span class="van-tag" style="background:#E5F9F5;color:#00C797">成功</span>', code: '<van-tag color="#ECF2FE" text-color="#0088FF">同意</van-tag>' }],
        rules: ['同意/审批中：背景 #ECF2FE 文字 #0088FF', '警示/拒绝：背景 #FFEEAA 文字 #FF3030', '成功/通过：背景 #E5F9F5 文字 #00C797'] 
    },
    divider: { name: '6.13 分割线', demos: [{ title: '分割线', type: 'simple', component: 'van-divider', text: '文本', code: '<van-divider>文本</van-divider>' }] },
    empty: { name: '6.15 空状态', demos: [{ title: '空状态', type: 'simple', component: 'van-empty', props: { description: '描述文字' }, code: '<van-empty description="描述文字" />' }] },

    // 7. 反馈
    dialog: { 
        name: '7.1 对话框', 
        demos: [{ title: '对话框', type: 'action', actions: [{text:'提示弹窗', action:'dialog-alert'}, {text:'确认弹窗', action:'dialog-confirm'}], code: 'showConfirmDialog({ title: "标题", message: "内容" })' }],
        rules: ['<strong>尺寸参数</strong>：宽度约80%，圆角8px，遮罩层50%透明度。']
    },
    toast: { name: '7.2 轻提示', demos: [{ title: 'Toast', type: 'action', actions: [{text:'成功', action:'toast-success'}, {text:'加载', action:'toast-loading'}], code: 'showToast("内容")' }] },
    noticebar: { name: '7.3 通知栏', demos: [{ title: '通知栏', type: 'simple', component: 'van-notice-bar', props: { text: '通知内容，通知内容，通知内容', leftIcon: 'volume-o' }, code: '<van-notice-bar text="内容" />' }] },
    loading: { name: '7.5 加载', demos: [{ title: '加载', type: 'simple', component: 'van-loading', props: { type: 'spinner' }, code: '<van-loading />' }] },

    // 8. 业务模版
    'login-template': { 
        name: '8.1 登陆样式', 
        demos: [{ 
            title: '标准登陆页', 
            type: 'static', 
            html: '<div style="background:white;padding:30px 20px;border-radius:12px;"><h2 style="font-size:24px;font-weight:bold;margin-bottom:8px;">欢迎登录</h2><p style="color:#999;margin-bottom:30px;font-size:14px;">Ronghe Mobile System</p><div class="van-cell-group van-cell-group--inset" style="margin:0 -16px 24px;"><div class="van-cell van-field"><div class="van-cell__title" style="width:3em"><span>账号</span></div><div class="van-field__value"><input class="van-field__control" placeholder="请输入手机号/邮箱"></div></div><div class="van-cell van-field"><div class="van-cell__title" style="width:3em"><span>密码</span></div><div class="van-field__value"><input type="password" class="van-field__control" placeholder="请输入密码"></div></div></div><button class="van-button van-button--primary van-button--large van-button--block van-button--round" style="background:#0088FF;border-color:#0088FF">登录</button><div style="text-align:center;margin-top:16px;color:#0088FF;font-size:14px;">忘记密码？</div></div>', 
            code: '<!-- 登陆页模版代码 -->' 
        }] 
    },
    'approval-template': { 
        name: '8.2 审批样式', 
        demos: [{ 
            title: '审批流程卡片', 
            type: 'static', 
            html: '<div style="background:white;padding:16px;border-radius:8px;position:relative;"><div style="display:flex;justify-content:space-between;margin-bottom:12px;"><span style="font-weight:bold;font-size:16px;">请假申请</span><span class="van-tag" style="background:#ECF2FE;color:#0088FF">审批中</span></div><div style="font-size:14px;color:#666;line-height:1.6;"><p>申请人：王小明</p><p>部门：技术部</p><p>时间：2023-10-01 ~ 2023-10-03</p></div><div style="margin-top:16px;padding-top:12px;border-top:1px solid #eee;display:flex;justify-content:flex-end;gap:8px;"><button class="van-button van-button--default van-button--small van-button--round">拒绝</button><button class="van-button van-button--primary van-button--small van-button--round" style="background:#0088FF;border-color:#0088FF">同意</button></div></div>', 
            code: '<!-- 审批卡片模版代码 -->' 
        }] 
    },

    // 9. 新增组件 (Vant 4 补充)
    'van-icon': {
        name: '6.2 图标组件',
        demos: [
            {
                title: '完整演示',
                type: 'vue',
                template: `
                    <div>
                        <div class="van-doc-demo-block__title">基础用法</div>
                        <van-row>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" size="32" /></van-col>
                            <van-col span="6" style="text-align:center"><van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" size="32" /></van-col>
                        </van-row>

                        <div class="van-doc-demo-block__title">徽标提示</div>
                        <van-row>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" dot size="32" /></van-col>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" badge="9" size="32" /></van-col>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" badge="99+" size="32" /></van-col>
                        </van-row>

                        <div class="van-doc-demo-block__title">图标颜色</div>
                        <van-row>
                            <van-col span="6" style="text-align:center"><van-icon name="cart-o" color="#1989fa" size="32" /></van-col>
                            <van-col span="6" style="text-align:center"><van-icon name="fire-o" color="#ee0a24" size="32" /></van-col>
                        </van-row>

                        <div class="van-doc-demo-block__title">图标大小</div>
                        <van-row>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" size="40" /></van-col>
                            <van-col span="6" style="text-align:center"><van-icon name="chat-o" size="3rem" /></van-col>
                        </van-row>
                    </div>
                `
            }
        ]
    },
    image: { name: '6.16 图片', demos: [{ title: '基础用法', type: 'simple', component: 'van-image', props: { width: '100', height: '100', src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23eeeeee%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23999%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%3C%2Ftext%3E%3C%2Fsvg%3E' }, code: '<van-image width="100" height="100" src="..." />' }] },
    uploader: { name: '5.14 文件上传', demos: [{ title: '文件上传', id: 'uploader', type: 'custom', code: '<van-uploader v-model="fileList" multiple />' }] },
    badge: { name: '6.17 徽标', demos: [{ title: '徽标', type: 'static', html: '<div style="margin-top:10px;margin-left:20px;"><div class="van-badge__wrapper"><div class="van-icon van-icon-child" style="font-size:20px"></div><div class="van-badge van-badge--top-right van-badge--fixed">5</div></div></div>', code: '<van-badge :content="5">...</van-badge>' }] },
    swipe: { name: '6.18 轮播', demos: [{ title: '基础轮播', id: 'swipe', type: 'custom', code: '<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">...</van-swipe>' }] },
    progress: { name: '6.19 进度条', demos: [{ title: '进度条', type: 'simple', component: 'van-progress', props: { percentage: 50 }, code: '<van-progress :percentage="50" />' }] },
    skeleton: { name: '6.20 骨架屏', demos: [{ title: '骨架屏', id: 'skeleton', type: 'custom', code: '<van-skeleton title avatar :row="3" />' }] },
    card: { name: '6.21 卡片', demos: [{ title: '商品卡片', type: 'static', html: '<div class="van-card"><div class="van-card__header"><a class="van-card__thumb"><div class="van-image" style="width:100%;height:100%"><img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23eeeeee%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23999%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%3C%2Ftext%3E%3C%2Fsvg%3E" class="van-image__img"></div></a><div class="van-card__content"><div><div class="van-card__title van-multi-ellipsis--l2">商品标题</div><div class="van-card__desc van-ellipsis">描述信息</div></div><div class="van-card__bottom"><div class="van-card__price"><div><span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span></div></div><div class="van-card__num">x2</div></div></div></div></div>', code: '<van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="..." />' }] },
    'action-bar': { name: '4.9 动作栏', demos: [{ title: '动作栏', id: 'action-bar', type: 'custom', code: '<van-action-bar>...</van-action-bar>' }] },
    'submit-bar': { name: '4.10 提交订单栏', demos: [{ title: '提交订单栏', id: 'submit-bar', type: 'custom', code: '<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />' }] }
};
