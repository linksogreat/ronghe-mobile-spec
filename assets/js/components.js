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
    search: {
        name: '3.2 搜索',
        rules: [
            '<strong>基准设备</strong>：375pt 宽度移动端标准逻辑像素设备',
            '<strong>搜索框核心尺寸</strong>：基础宽度 345pt，固定高度 40pt，全圆角 20pt（高度 1/2）',
            '<strong>核心颜色</strong>：搜索框背景色 #F7F8FA，占位符 #C8C9CC，输入文字 #333333，激活态描边品牌蓝色（2pt）',
            '<strong>基础交互</strong>：默认未激活态 → 点击激活聚焦态 → 输入内容编辑态 → 搜索提交 / 清空 / 取消',
            '<strong>自定义样式</strong>：变体1（带前置下拉选择器）、变体2（带右侧固定搜索按钮）'
        ],
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setup: () => {
                    const { ref, computed } = Vue;
                    const value = ref('');
                    const hotTags = ref(['西湖', '灵隐寺', '西溪湿地', '龙井', '运维中心']);
                    const history = ref(['杭州', '巡检', '报修', '联系人']);
                    const baseResults = ref(['杭州', '杭州东站', '杭州西站', '西湖风景区', '灵隐寺', '西溪湿地', '运维中心', '工单列表', '报修进度']);
                    const results = computed(() => {
                        const v = value.value.trim();
                        if (!v) return [];
                        return baseResults.value.filter((x) => x.includes(v)).slice(0, 8);
                    });
                    const onSearch = (val) => vant.showToast('搜索：' + (val || value.value));
                    const onCancel = () => { value.value = ''; vant.showToast('已取消'); };
                    const onTag = (tag) => { value.value = tag; };
                    const onSelect = (text) => { value.value = text; vant.showToast('选择：' + text); };
                    return { value, hotTags, history, results, onSearch, onCancel, onTag, onSelect };
                },
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="bg-white">
                            <van-search
                                v-model="value"
                                show-action
                                placeholder="请输入搜索关键词"
                                @search="onSearch"
                            >
                                <template #action>
                                    <div @click="onCancel">取消</div>
                                </template>
                            </van-search>
                        </div>
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">搜索发现</div>
                            <div class="px-4 flex flex-wrap gap-2">
                                <van-tag v-for="tag in hotTags" :key="tag" plain type="primary" @click="onTag(tag)">{{ tag }}</van-tag>
                            </div>
                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">搜索历史</div>
                            <van-cell-group inset :border="false">
                                <van-cell v-for="item in history" :key="item" :title="item" is-link clickable @click="onTag(item)"></van-cell>
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div v-if="value" class="px-4 text-xs text-[#969799] mb-2">搜索结果</div>
                            <div v-if="value && results.length" class="px-4">
                                <van-cell-group inset :border="false">
                                    <van-cell v-for="r in results" :key="r" :title="r" clickable @click="onSelect(r)"></van-cell>
                                </van-cell-group>
                            </div>
                            <div v-if="value && !results.length" class="px-4">
                                <van-empty description="暂无结果"></van-empty>
                            </div>
                        </div>
                    </div>
                `
            }
            ,
            {
                title: '原交互示例：卡片选择（横向）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const active = ref(0);
                    const cards = ['选择文本', '选择文本', '选择文本', '选择文本'];
                    return { active, cards };
                },
                template: `
                    <div class="flex gap-2 p-4 overflow-x-auto custom-scrollbar">
                        <div
                            v-for="(card, index) in cards"
                            :key="index"
                            @click="active = index"
                            class="flex-shrink-0 w-20 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200"
                        >
                            <div
                                class="w-20 h-20 rounded flex items-center justify-center transition-all duration-200"
                                :class="active === index ? 'bg-[#E6F7FF] border border-[#1890FF]' : 'bg-[#F5F5F5] border border-transparent'"
                            >
                                <van-icon name="photo-o" size="24" :color="active === index ? '#1890FF' : '#999999'"></van-icon>
                            </div>
                            <span class="text-xs transition-colors duration-200" :class="active === index ? 'text-[#1890FF]' : 'text-[#333333]'">{{ card }}</span>
                        </div>
                    </div>
                `
            },
            {
                title: '原交互示例：网格表单（单/复选）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const radioVal = ref('1');
                    const checkboxVal = ref(['1']);
                    return { radioVal, checkboxVal };
                },
                template: `
                    <div class="p-4 bg-white">
                        <div class="mb-4">
                            <div class="text-sm text-gray-500 mb-2">单选区 (Radio)</div>
                            <van-radio-group v-model="radioVal" direction="horizontal" class="grid grid-cols-3 gap-y-3">
                                <van-radio name="1" icon-size="16px">选项1</van-radio>
                                <van-radio name="2" icon-size="16px">选项2</van-radio>
                                <van-radio name="3" disabled icon-size="16px">已禁用</van-radio>
                                <van-radio name="4" icon-size="16px">选项4</van-radio>
                            </van-radio-group>
                        </div>
                        <div>
                            <div class="text-sm text-gray-500 mb-2">复选区 (Checkbox)</div>
                            <van-checkbox-group v-model="checkboxVal" direction="horizontal" class="grid grid-cols-3 gap-y-3">
                                <van-checkbox name="1" shape="square" icon-size="16px">选项1</van-checkbox>
                                <van-checkbox name="2" shape="square" icon-size="16px">选项2</van-checkbox>
                                <van-checkbox name="3" disabled shape="square" icon-size="16px">已禁用</van-checkbox>
                                <van-checkbox name="4" shape="square" icon-size="16px">选项4</van-checkbox>
                            </van-checkbox-group>
                        </div>
                    </div>
                `
            },
            {
                title: '原交互示例：纯文本列表（右侧打勾）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const active = ref(0);
                    const items = ['可选项-未选', '可选项-已选', '可选项-未选'];
                    return { active, items };
                },
                template: `
                    <div class="bg-white flex flex-col">
                        <div
                            v-for="(item, index) in items"
                            :key="index"
                            @click="active = index"
                            class="flex items-center justify-between p-4 border-b border-[#F0F0F0] cursor-pointer active:bg-[#f5f5f5] transition-all duration-200 select-none"
                        >
                            <span class="text-[14px] transition-colors duration-200" :class="active === index ? 'text-[#1890FF]' : 'text-[#333333]'">{{ item }}</span>
                            <van-icon v-show="active === index" name="success" color="#1890FF" size="16"></van-icon>
                        </div>
                    </div>
                `
            },
            {
                title: '原交互示例：带辅助信息的列表',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const checked = ref(false);
                    return { checked };
                },
                template: `
                    <div class="bg-white flex flex-col">
                        <div
                            class="flex items-start gap-3 p-4 border-b border-[#F0F0F0] cursor-pointer active:bg-[#f5f5f5] transition-all duration-200 select-none"
                            @click="checked = !checked"
                        >
                            <div
                                class="w-[18px] h-[18px] rounded-full border flex items-center justify-center transition-all duration-200 mt-[2px]"
                                :class="checked ? 'bg-[#1890FF] border-[#1890FF]' : 'border-[#D9D9D9] bg-white'"
                            >
                                <van-icon v-show="checked" name="success" color="white" size="12"></van-icon>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] leading-[22px] transition-colors duration-200" :class="checked ? 'text-[#1890FF]' : 'text-[#333333]'">可选项-未选</span>
                                <span class="text-[12px] text-[#999999] leading-[18px] mt-[2px]">这是次级说明文本内容</span>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 p-4 border-b border-[#F0F0F0] select-none opacity-50">
                            <div class="w-[18px] h-[18px] rounded-full border border-[#C2C2C2] bg-[#C2C2C2] flex items-center justify-center mt-[2px]">
                                <van-icon name="success" color="white" size="12"></van-icon>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] text-[#C2C2C2] leading-[22px]">已选-不可修改样式</span>
                                <span class="text-[12px] text-[#C2C2C2] leading-[18px] mt-[2px]">这是只读状态的说明文本</span>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    popover: { name: '3.3 气泡弹出', demos: [{ title: '气泡', id: 'popover', type: 'custom', code: '<van-popover v-model:show="showPopover" :actions="actions">\n  <template #reference><van-button>点击</van-button></template>\n</van-popover>' }], rules: ['图片中未包含气泡弹出框的规范内容，待确认。'] },

    // 4. 导航
    tab: { 
        name: '4.1 标签页', 
        demos: [
            {
                title: '基础样式 - 固定数目',
                type: 'vue',
                setupStr: 'return { active2: Vue.ref(0), active3: Vue.ref(0), active4: Vue.ref(0), active5: Vue.ref(0) };',
                template: `<div class="-mx-4 -mb-4">
                    <div class="bg-white">
                        <div class="px-4 pt-3 pb-2 text-xs text-[#969799]">2 个标签</div>
                        <van-tabs v-model:active="active2" color="#1890FF" line-width="20" line-height="3" animated>
                            <van-tab title="选中项目"><div class="py-6 text-center text-sm text-[#666]">内容 1</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 2</div></van-tab>
                        </van-tabs>
                        <div class="h-2 bg-[#f7f8fa]"></div>

                        <div class="px-4 pt-3 pb-2 text-xs text-[#969799]">3 个标签</div>
                        <van-tabs v-model:active="active3" color="#1890FF" line-width="20" line-height="3" animated>
                            <van-tab title="选中项目"><div class="py-6 text-center text-sm text-[#666]">内容 1</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 2</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 3</div></van-tab>
                        </van-tabs>
                        <div class="h-2 bg-[#f7f8fa]"></div>

                        <div class="px-4 pt-3 pb-2 text-xs text-[#969799]">4 个标签</div>
                        <van-tabs v-model:active="active4" color="#1890FF" line-width="20" line-height="3" animated>
                            <van-tab title="选中项目"><div class="py-6 text-center text-sm text-[#666]">内容 1</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 2</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 3</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 4</div></van-tab>
                        </van-tabs>
                        <div class="h-2 bg-[#f7f8fa]"></div>

                        <div class="px-4 pt-3 pb-2 text-xs text-[#969799]">5 个标签</div>
                        <van-tabs v-model:active="active5" color="#1890FF" line-width="20" line-height="3" animated>
                            <van-tab title="选中项目"><div class="py-6 text-center text-sm text-[#666]">内容 1</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 2</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 3</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 4</div></van-tab>
                            <van-tab title="未选中"><div class="py-6 text-center text-sm text-[#666]">内容 5</div></van-tab>
                        </van-tabs>
                    </div>
                </div>`
            },
            {
                title: '标题栏滚动',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(0) };',
                template: `<div class="-mx-4 -mb-4">
                    <van-tabs v-model:active="active" color="#1890FF" line-width="20" line-height="3" animated swipeable :swipe-threshold="4">
                        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
                            <div class="bg-[#f7f8fa] py-3">
                                <van-cell-group>
                                    <van-cell title="列表项" :value="'内容 ' + index" />
                                    <van-cell title="状态" value="可切换" />
                                </van-cell-group>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>`
            },
            {
                title: '锚点Tab',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(0) };',
                template: `<div class="-mx-4 -mb-4">
                    <van-tabs v-model:active="active" scrollspy :sticky="false" color="#1890FF" line-width="20" line-height="3">
                        <van-tab v-for="index in 4" :title="'模块 ' + index" :key="index">
                            <div class="bg-[#f7f8fa]">
                                <div class="px-4 py-3 text-sm font-medium text-[#333]">内容区 {{ index }}</div>
                                <van-cell-group>
                                    <van-cell v-for="i in 3" :key="i" :title="'列表项 ' + i" value="说明文本" />
                                </van-cell-group>
                                <div class="h-2"></div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>`
            },
            {
                title: '下拉选择',
                type: 'vue',
                setupStr: "return { active: Vue.ref(0), showPopover: Vue.ref(false), actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }], onSelect: (action) => vant.showToast(action.text) };",
                template: `<div class="-mx-4 -mb-4">
                    <van-tabs v-model:active="active" color="#1890FF" line-width="20" line-height="3" animated>
                        <van-tab title="标签 1"><div class="py-6 text-center text-sm text-[#666]">内容 1</div></van-tab>
                        <van-tab>
                            <template #title>
                                <van-popover v-model:show="showPopover" :actions="actions" placement="bottom" @select="onSelect">
                                    <template #reference>
                                        <span class="inline-flex items-center gap-1 select-none">下拉筛选<van-icon name="arrow-down" /></span>
                                    </template>
                                </van-popover>
                            </template>
                            <div class="bg-[#f7f8fa] py-3">
                                <van-cell-group>
                                    <van-cell title="当前选项" value="点击标题下拉" />
                                    <van-cell title="提示" value="选择后 Toast" />
                                </van-cell-group>
                            </div>
                        </van-tab>
                        <van-tab title="标签 3"><div class="py-6 text-center text-sm text-[#666]">内容 3</div></van-tab>
                    </van-tabs>
                </div>`
            },
            {
                title: '胶囊Tab',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(0) };',
                template: `<div class="-mx-4 -mb-4 bg-[#f7f8fa] p-4">
                    <van-tabs v-model:active="active" type="card" color="#1890FF">
                        <van-tab title="标签名称"><div class="bg-white rounded-md p-4 text-sm text-[#666]">内容 1</div></van-tab>
                        <van-tab title="标签名称"><div class="bg-white rounded-md p-4 text-sm text-[#666]">内容 2</div></van-tab>
                        <van-tab title="标签名称"><div class="bg-white rounded-md p-4 text-sm text-[#666]">内容 3</div></van-tab>
                    </van-tabs>
                </div>`
            }
        ],
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
        demos: [
            {
                title: '基础用法',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(0) };',
                template: `<div class="h-full min-h-0 bg-white flex overflow-hidden" style="--van-sidebar-width: 112px; --van-sidebar-font-size: 14px; --van-sidebar-selected-text-color: #1890FF; --van-sidebar-selected-border-color: #1890FF; --van-sidebar-selected-background: #F5F7FF;">
                        <van-sidebar v-model="active" class="shrink-0 h-full">
                            <van-sidebar-item title="选项一"></van-sidebar-item>
                            <van-sidebar-item title="选项二" dot></van-sidebar-item>
                            <van-sidebar-item title="选项三" badge="5"></van-sidebar-item>
                            <van-sidebar-item title="禁用项" disabled></van-sidebar-item>
                        </van-sidebar>
                        <div class="flex-1 min-w-0 min-h-0 flex flex-col bg-[#f7f8fa]">
                            <div class="px-4 py-3 text-sm font-medium text-[#333] bg-white border-b border-[#f2f3f5]">内容区</div>
                            <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                                <van-cell-group>
                                    <van-cell title="当前分类" :value="'选项 ' + (active + 1)"></van-cell>
                                    <van-cell title="说明" value="点击左侧切换"></van-cell>
                                    <van-cell title="示例信息" value="更贴近真实页面"></van-cell>
                                </van-cell-group>
                                <div class="px-4 py-4">
                                    <van-button type="primary" block color="#1890FF">主要操作</van-button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ], 
        rules: ['<strong>选中态</strong>：背景色为浅灰色（#F8F8F8），文字色为品牌色（#0088FF）。', '<strong>默认态</strong>：背景色为白色，文字色为深灰色（#333333）。'] 
    },
    tabbar: { 
        name: '4.6 标签栏', 
        demos: [
            {
                title: '页面级示例（对标 Vant4）',
                type: 'vue',
                setupStr: "return (() => { const active = Vue.ref(0); const tabs = [{ text: '首页', icon: 'home-o' }, { text: '搜索', icon: 'search' }, { text: '消息', icon: 'friends-o', badge: 5 }, { text: '设置', icon: 'setting-o', dot: true }]; const current = Vue.computed(() => tabs[active.value]?.text || ''); return { active, tabs, current }; })();",
                template: `<div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                    <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                        <div class="p-4 space-y-3">
                            <div class="text-sm font-medium text-[#333]">当前 Tab：{{ current }}</div>
                            <van-cell-group inset>
                                <van-cell title="提示" value="对标 Vant4 页面级示例"></van-cell>
                                <van-cell title="交互" value="点击底部切换"></van-cell>
                            </van-cell-group>
                            <van-cell-group inset>
                                <van-cell v-for="i in 10" :key="i" :title="'列表项 ' + i" value="内容"></van-cell>
                            </van-cell-group>
                        </div>
                    </div>
                    <van-tabbar
                        v-model="active"
                        fixed
                        placeholder
                        safe-area-inset-bottom
                        active-color="#1890FF"
                        inactive-color="#969799"
                    >
                        <van-tabbar-item
                            v-for="(t, i) in tabs"
                            :key="t.text"
                            :icon="t.icon"
                            :badge="t.badge"
                            :dot="t.dot"
                        >
                            {{ t.text }}
                        </van-tabbar-item>
                    </van-tabbar>
                </div>`
            }
        ] 
    },
    'grid-nav': {
        name: '4.7 宫格',
        demos: [
            {
                title: '基础用法',
                type: 'vue',
                setupStr: "return { items: [{ icon: 'home-o', text: '首页' }, { icon: 'points', text: '积分' }, { icon: 'gift-o', text: '礼包' }, { icon: 'photo-o', text: '相册' }, { icon: 'location-o', text: '位置' }, { icon: 'service-o', text: '客服' }, { icon: 'todo-list-o', text: '待办' }, { icon: 'setting-o', text: '设置' }], onClick: (item) => vant.showToast(item.text) };",
                template: `<div class="-mx-4 -mb-4 bg-[#f7f8fa] p-4">
                    <van-grid :column-num="4" :gutter="8" square clickable>
                        <van-grid-item v-for="item in items" :key="item.text" :icon="item.icon" :text="item.text" @click="onClick(item)" />
                    </van-grid>
                </div>`
            },
            {
                title: '内容横向滚动',
                type: 'vue',
                setupStr: "return { items: Array.from({ length: 10 }).map((_, i) => ({ icon: 'photo-o', text: '功能 ' + (i + 1) })), onClick: (item) => vant.showToast(item.text) };",
                template: `<div class="-mx-4 -mb-4 bg-[#f7f8fa] p-4">
                    <div class="bg-white rounded-md overflow-hidden border border-[#ebedf0]">
                        <div class="px-4 pt-3 pb-2 text-xs text-[#969799]">左右滑动查看更多</div>
                        <van-grid direction="horizontal" :column-num="3" :gutter="8" clickable>
                            <van-grid-item v-for="item in items" :key="item.text" :icon="item.icon" :text="item.text" @click="onClick(item)" />
                        </van-grid>
                    </div>
                </div>`
            }
        ],
        rules: ['宫格项支持2列/3列/4列/5列布局，宫格项间距 8px。']
    },
    steps: { 
        name: '4.8 步骤条', 
        demos: [
            {
                title: '基础用法',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(1) };',
                template: `<div class="-mx-4 -mb-4 bg-[#f7f8fa] p-4">
                    <div class="bg-white rounded-md p-4 border border-[#ebedf0]">
                        <van-steps :active="active" active-color="#1890FF" inactive-color="#C8C9CC">
                            <van-step>买家下单</van-step>
                            <van-step>商家接单</van-step>
                            <van-step>买家提货</van-step>
                            <van-step>交易完成</van-step>
                        </van-steps>
                        <div class="mt-4">
                            <van-button type="primary" size="small" block color="#1890FF" @click="active = (active + 1) % 4">下一步</van-button>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '竖向步骤条',
                type: 'vue',
                setupStr: 'return { active: Vue.ref(0) };',
                template: `<div class="-mx-4 -mb-4 bg-[#f7f8fa] p-4">
                    <div class="bg-white rounded-md p-4 border border-[#ebedf0]">
                        <van-steps direction="vertical" :active="active" active-color="#1890FF" inactive-color="#C8C9CC">
                            <van-step><h3 class="text-sm font-medium text-[#333]">【杭州】已揽件</h3><p class="text-xs text-[#969799]">2026-05-18 10:00</p></van-step>
                            <van-step><h3 class="text-sm font-medium text-[#333]">【宁波】运输中</h3><p class="text-xs text-[#969799]">2026-05-18 12:30</p></van-step>
                            <van-step><h3 class="text-sm font-medium text-[#333]">【上海】派送中</h3><p class="text-xs text-[#969799]">2026-05-18 15:10</p></van-step>
                        </van-steps>
                    </div>
                </div>`
            }
        ], 
        rules: [
            '<strong>已完成态</strong>：步骤点背景色#0088FF，显示对勾图标。',
            '<strong>进行中态</strong>：步骤点背景色#0088FF，显示数字。',
            '<strong>未完成态</strong>：步骤点背景色#E0E0E0，显示数字。'
        ] 
    },

    // 5. 数据录入
    field: { 
        name: '5.1 输入框', 
        rules: [
            '<strong>排版</strong>：页面背景 #F7F8FA；推荐使用 CellGroup inset 形成卡片分组；区块标题使用灰色小字号并与卡片保持 8px 间距。',
            '<strong>输入类型</strong>：支持文本、手机号、验证码、整数/数字、密码、多行文本等；按场景选择 type 与键盘。',
            '<strong>状态</strong>：禁用 disabled、只读 readonly、可清空 clearable、错误提示 error-message、字数统计 show-word-limit。',
            '<strong>标题与必填</strong>：标题超过 3 字时允许换行；必填用 required 显示红色 *；选填可在 label 右侧用灰色“选填”提示。',
            '<strong>交互</strong>：表单类建议在 blur 或提交时校验；长文本建议提供字数计数与超限报错；提交按钮使用主色 #1890FF。'
        ],
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setup: () => {
                    const { ref, computed } = Vue;

                    const nameVal = ref('');
                    const phoneVal = ref('');
                    const idVal = ref('');

                    const remarkVal = ref('');
                    const remarkCount = computed(() => String(remarkVal.value || '').length);

                    const customTitleVal = ref('');
                    const twoLineVal = ref('');
                    const longTextVal = ref(
                        '这是一段很长的内容示例，用于展示“填入文本最多 4 行，超出折行 + 展开查看全部”的交互表现。你可以继续输入更多内容来观察换行与展开/收起。'
                    );
                    const longTextExpanded = ref(false);

                    const pickerVal = ref('请选择');
                    const switchVal = ref(true);
                    const stepVal = ref(1);
                    const amountVal = ref('');

                    const emptyVal = ref('');
                    const emptyTouched = ref(false);
                    const emptyError = computed(() => (emptyTouched.value && !String(emptyVal.value || '').trim() ? '请输入姓名' : ''));

                    const limitVal = ref('');
                    const limit = 500;
                    const limitCount = computed(() => String(limitVal.value || '').length);
                    const limitError = computed(() => (limitCount.value > limit ? `最多可输入 ${limit} 字` : ''));

                    const clampLabelStyle = {
                        display: '-webkit-box',
                        '-webkit-line-clamp': 2,
                        '-webkit-box-orient': 'vertical',
                        overflow: 'hidden'
                    };

                    const clampValueStyle = computed(() =>
                        longTextExpanded.value
                            ? {}
                            : {
                                  display: '-webkit-box',
                                  '-webkit-line-clamp': 4,
                                  '-webkit-box-orient': 'vertical',
                                  overflow: 'hidden'
                              }
                    );

                    const autoResize = (e) => {
                        const el = e && e.target;
                        if (!el) return;
                        el.style.height = 'auto';
                        const max = 20 * 4;
                        el.style.height = `${Math.min(el.scrollHeight, max)}px`;
                        el.style.overflowY = el.scrollHeight > max ? 'auto' : 'hidden';
                    };

                    const onSubmit = () => {
                        emptyTouched.value = true;
                        if (emptyError.value || limitError.value) {
                            vant.showToast('请完善输入');
                            return;
                        }
                        vant.showToast('提交成功');
                    };

                    const onEmptyBlur = () => {
                        emptyTouched.value = true;
                    };

                    const clearAmount = () => {
                        amountVal.value = '';
                    };

                    return {
                        nameVal,
                        phoneVal,
                        idVal,
                        remarkVal,
                        remarkCount,
                        customTitleVal,
                        twoLineVal,
                        longTextVal,
                        longTextExpanded,
                        pickerVal,
                        switchVal,
                        stepVal,
                        amountVal,
                        emptyVal,
                        emptyError,
                        limitVal,
                        limit,
                        limitCount,
                        limitError,
                        clampLabelStyle,
                        clampValueStyle,
                        autoResize,
                        onSubmit,
                        onEmptyBlur,
                        clearAmount
                    };
                },
                template: `
                    <div class="h-full min-h-0 flex flex-col overflow-hidden bg-[#f7f8fa] text-[14px]">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar bg-white">
                            <div class="px-4 py-3 text-[#999999]">常规单行文本输入框（基础通用场景）</div>
                            <div class="px-4">
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">
                                            姓名<span class="text-[#ee0a24] ml-[2px]">*</span>
                                        </div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <input v-model="nameVal" class="w-full bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入姓名" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">手机号</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <input v-model="phoneVal" class="w-full bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入手机号" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">身份证号</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <input v-model="idVal" class="w-full bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入身份证号" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-4 py-3 text-[#999999]">多行文本输入框（含独立备注栏）</div>
                            <div class="px-4">
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-start">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">备注</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <textarea v-model="remarkVal" rows="2" class="w-full resize-none bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入" @input="autoResize"></textarea>
                                            <div class="mt-1 text-right text-[12px]" :class="remarkCount > limit ? 'text-[#ee0a24]' : 'text-[#999999]'">{{ remarkCount }}/{{ limit }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-4 py-3 text-[#999999]">自定义扩展输入框（全业务场景适配）</div>
                            <div class="px-4">
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-start">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">
                                            标题文本超过三个字<span class="text-[#ee0a24] ml-[2px]">*</span>
                                        </div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <input v-model="customTitleVal" class="w-full bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入内容" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-start">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">输入内容两行</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <textarea v-model="twoLineVal" rows="2" class="w-full resize-none bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入内容"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-start">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">长文本字段</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <div class="whitespace-normal break-words text-[#101010] leading-[20px]" :style="clampValueStyle">{{ longTextVal }}</div>
                                            <div class="mt-1 flex justify-end">
                                                <span class="text-[#1890FF] leading-[20px]" @click="longTextExpanded = !longTextExpanded">{{ longTextExpanded ? '收起' : '展开' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">下拉选择器</div>
                                        <div class="flex-1 min-w-0 max-w-[250px] flex items-center justify-between">
                                            <span class="text-[#101010] whitespace-normal break-words leading-[20px]">{{ pickerVal }}</span>
                                            <van-icon name="arrow" color="#999999" size="14" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">开关组件</div>
                                        <div class="flex-1 min-w-0 max-w-[250px] flex justify-end">
                                            <van-switch v-model="switchVal" size="20" active-color="#1890FF" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">步进器</div>
                                        <div class="flex-1 min-w-0 max-w-[250px] flex justify-end">
                                            <van-stepper v-model="stepVal" min="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-[#F7F7F7] py-2">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">金额</div>
                                        <div class="flex-1 min-w-0 max-w-[250px] flex items-center gap-2">
                                            <input v-model="amountVal" class="flex-1 min-w-0 bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入金额" />
                                            <span class="text-[#999999] leading-[20px]">元</span>
                                            <van-icon v-if="amountVal" name="clear" color="#999999" size="14" @click="clearAmount" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-4 py-3 text-[#999999]">输入框报错状态（空提示 + 字数超限提示）</div>
                            <div class="px-4 pb-3">
                                <div class="border-b py-2" :class="emptyError ? 'border-[#ee0a24]' : 'border-[#F7F7F7]'">
                                    <div class="flex gap-[20px] items-center">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">
                                            活动名称<span class="text-[#ee0a24] ml-[2px]">*</span>
                                        </div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <input v-model="emptyVal" class="w-full bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入活动名称" @blur="onEmptyBlur" />
                                        </div>
                                    </div>
                                    <div v-if="emptyError" class="mt-1 pl-[104px] text-[12px] text-[#ee0a24] leading-[18px]">{{ emptyError }}</div>
                                </div>

                                <div class="border-b py-2" :class="limitError ? 'border-[#ee0a24]' : 'border-[#F7F7F7]'">
                                    <div class="flex gap-[20px] items-start">
                                        <div class="w-[84px] text-[#999999] leading-[20px]" :style="clampLabelStyle">内容描述</div>
                                        <div class="flex-1 min-w-0 max-w-[250px]">
                                            <textarea v-model="limitVal" rows="2" class="w-full resize-none bg-transparent outline-none text-[#101010] leading-[20px] placeholder:text-[#999999]" placeholder="请输入（最多 500 字）" @input="autoResize"></textarea>
                                            <div class="mt-1 flex items-start justify-between gap-2">
                                                <div class="text-[12px] text-[#ee0a24] leading-[18px] min-h-[18px]">{{ limitError }}</div>
                                                <div class="text-[12px] leading-[18px]" :class="limitError ? 'text-[#ee0a24]' : 'text-[#999999]'">{{ limitCount }}/{{ limit }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-3 bg-white border-t border-[#F7F7F7]">
                            <van-button type="primary" block color="#1890FF" @click="onSubmit">提交</van-button>
                        </div>
                    </div>
                `
            }
        ] 
    },
    radio: {
        name: '5.2 选择框',
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const cardVal = ref('a');
                    const listVal = ref('wechat');
                    const checkVal = ref(['push']);
                    const toggleCheck = (name) => {
                        checkVal.value = checkVal.value.includes(name)
                            ? checkVal.value.filter((x) => x !== name)
                            : checkVal.value.concat(name);
                    };
                    const onSubmit = () => vant.showToast('已保存');
                    return { cardVal, listVal, checkVal, toggleCheck, onSubmit };
                },
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">卡片选择</div>
                            <div class="px-4">
                                <van-radio-group v-model="cardVal" class="grid grid-cols-2 gap-3">
                                    <van-radio name="a" class="w-full">
                                        <template #default>
                                            <div class="w-full rounded-xl border px-3 py-3 bg-white" :class="cardVal === 'a' ? 'border-[#1890FF]' : 'border-[#ebedf0]'">
                                                <div class="text-sm font-medium text-[#333]">方案 A</div>
                                                <div class="text-xs text-[#969799] mt-1">推荐配置</div>
                                            </div>
                                        </template>
                                    </van-radio>
                                    <van-radio name="b" class="w-full">
                                        <template #default>
                                            <div class="w-full rounded-xl border px-3 py-3 bg-white" :class="cardVal === 'b' ? 'border-[#1890FF]' : 'border-[#ebedf0]'">
                                                <div class="text-sm font-medium text-[#333]">方案 B</div>
                                                <div class="text-xs text-[#969799] mt-1">标准配置</div>
                                            </div>
                                        </template>
                                    </van-radio>
                                    <van-radio name="c" class="w-full">
                                        <template #default>
                                            <div class="w-full rounded-xl border px-3 py-3 bg-white" :class="cardVal === 'c' ? 'border-[#1890FF]' : 'border-[#ebedf0]'">
                                                <div class="text-sm font-medium text-[#333]">方案 C</div>
                                                <div class="text-xs text-[#969799] mt-1">自定义</div>
                                            </div>
                                        </template>
                                    </van-radio>
                                    <van-radio name="d" class="w-full">
                                        <template #default>
                                            <div class="w-full rounded-xl border px-3 py-3 bg-white opacity-40" :class="cardVal === 'd' ? 'border-[#1890FF]' : 'border-[#ebedf0]'">
                                                <div class="text-sm font-medium text-[#333]">方案 D</div>
                                                <div class="text-xs text-[#969799] mt-1">禁用态</div>
                                            </div>
                                        </template>
                                    </van-radio>
                                </van-radio-group>
                            </div>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">列表选择（Cell + Radio）</div>
                            <van-radio-group v-model="listVal">
                                <van-cell-group inset :border="false">
                                    <van-cell title="微信支付" clickable @click="listVal = 'wechat'">
                                        <template #right-icon>
                                            <van-radio name="wechat"></van-radio>
                                        </template>
                                    </van-cell>
                                    <van-cell title="支付宝" clickable @click="listVal = 'alipay'">
                                        <template #right-icon>
                                            <van-radio name="alipay"></van-radio>
                                        </template>
                                    </van-cell>
                                    <van-cell title="银行卡" clickable @click="listVal = 'bank'">
                                        <template #right-icon>
                                            <van-radio name="bank"></van-radio>
                                        </template>
                                    </van-cell>
                                </van-cell-group>
                            </van-radio-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">多选（Checkbox）</div>
                            <van-checkbox-group v-model="checkVal">
                                <van-cell-group inset :border="false">
                                    <van-cell title="消息推送" clickable @click="toggleCheck('push')">
                                        <template #right-icon>
                                            <van-checkbox name="push"></van-checkbox>
                                        </template>
                                    </van-cell>
                                    <van-cell title="系统更新" clickable @click="toggleCheck('update')">
                                        <template #right-icon>
                                            <van-checkbox name="update"></van-checkbox>
                                        </template>
                                    </van-cell>
                                </van-cell-group>
                            </van-checkbox-group>
                        </div>

                        <div class="p-3 bg-white border-t border-[#ebedf0]">
                            <van-button type="primary" block color="#1890FF" @click="onSubmit">保存</van-button>
                        </div>
                    </div>
                `
            },
            {
                title: '网格表单（单/复选框）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    return { radioVal: ref('1'), checkboxVal: ref(['1']) };
                },
                template: `
                    <div class="p-4">
                        <div class="text-xs text-[#969799] mb-2">单选区</div>
                        <van-radio-group v-model="radioVal" direction="horizontal" class="grid grid-cols-3 gap-y-3">
                            <van-radio name="1" icon-size="16px">选项1</van-radio>
                            <van-radio name="2" icon-size="16px">选项2</van-radio>
                            <van-radio name="3" disabled icon-size="16px">已禁用</van-radio>
                            <van-radio name="4" icon-size="16px">选项4</van-radio>
                        </van-radio-group>

                        <div class="mt-4 text-xs text-[#969799] mb-2">复选区</div>
                        <van-checkbox-group v-model="checkboxVal" direction="horizontal" class="grid grid-cols-3 gap-y-3">
                            <van-checkbox name="1" shape="square" icon-size="16px">选项1</van-checkbox>
                            <van-checkbox name="2" shape="square" icon-size="16px">选项2</van-checkbox>
                            <van-checkbox name="3" disabled shape="square" icon-size="16px">已禁用</van-checkbox>
                            <van-checkbox name="4" shape="square" icon-size="16px">选项4</van-checkbox>
                        </van-checkbox-group>
                    </div>
                `
            },
            {
                title: '纯文本列表（右侧打勾）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    return { active: ref(0), items: ['可选项-未选', '可选项-已选', '可选项-未选'] };
                },
                template: `
                    <div class="flex flex-col">
                        <div
                            v-for="(item, index) in items"
                            :key="index"
                            @click="active = index"
                            class="flex items-center justify-between px-4 py-3 border-b border-[#f2f3f5] cursor-pointer active:bg-[#f5f5f5] select-none"
                        >
                            <span class="text-[14px]" :class="active === index ? 'text-[#1890FF]' : 'text-[#333333]'">{{ item }}</span>
                            <van-icon v-show="active === index" name="success" color="#1890FF" size="16" />
                        </div>
                    </div>
                `
            },
            {
                title: '带辅助信息列表（样式二）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    return { checked: ref(false) };
                },
                template: `
                    <div class="flex flex-col">
                        <div class="flex items-start gap-3 px-4 py-3 border-b border-[#f2f3f5] cursor-pointer active:bg-[#f5f5f5] select-none" @click="checked = !checked">
                            <div class="w-[18px] h-[18px] rounded-full border flex items-center justify-center transition-all duration-200 mt-[2px]" :class="checked ? 'bg-[#1890FF] border-[#1890FF]' : 'border-[#D9D9D9] bg-white'">
                                <van-icon v-show="checked" name="success" color="white" size="12" />
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] leading-[22px]" :class="checked ? 'text-[#1890FF]' : 'text-[#333333]'">可选项-未选</span>
                                <span class="text-[12px] text-[#999999] leading-[18px] mt-[2px]">这是次级说明文本内容</span>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 px-4 py-3 border-b border-[#f2f3f5] select-none opacity-60">
                            <div class="w-[18px] h-[18px] rounded-full border border-[#C2C2C2] bg-[#C2C2C2] flex items-center justify-center mt-[2px]">
                                <van-icon name="success" color="white" size="12" />
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[14px] text-[#C2C2C2] leading-[22px]">已选-不可修改样式</span>
                                <span class="text-[12px] text-[#C2C2C2] leading-[18px] mt-[2px]">这是只读状态的说明文本</span>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    picker: { name: '5.3 选择器', demos: [{ title: '选择器', type: 'static', html: '<div class="van-picker"><div class="van-picker__toolbar"><button class="van-picker__cancel">取消</button><button class="van-picker__confirm" style="color:#0088FF">确认</button></div><div class="van-picker__columns" style="height:150px"><div class="van-picker-column"><ul style="transform:translate3d(0, 50px, 0)"><li class="van-picker-column__item van-picker-column__item--selected">杭州</li><li>宁波</li></ul></div></div></div>', code: '<van-picker :columns="columns" />' }] },
    cascader: { 
        name: '5.4 级联选择器', 
        demos: [{ title: '级联选择', id: 'cascader', type: 'custom', code: '<van-cascader v-model="value" :options="options" />' }], 
        rules: ['<strong>单选模式</strong>：仅支持左右两列布局；选中项右侧显示对勾图标，底部为蓝色主按钮。', '<strong>多选模式</strong>：左右两列布局，左侧为一级分类，右侧为二级选项，支持勾选多个。'] 
    },
    datetime: { 
        name: '5.5 时间选择器', 
        demos: [
            {
                title: '输入框唤起与回填',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const showTime = ref(false);
                    const showDate = ref(false);
                    const timePickerValue = ref(['12', '00']);
                    const datePickerValue = ref(['2026', '04', '01']);
                    const timeValue = ref('12:00');
                    const dateValue = ref('2026-04-01');

                    const onConfirmTime = ({ selectedValues }) => {
                        timePickerValue.value = selectedValues;
                        timeValue.value = selectedValues.join(':');
                        showTime.value = false;
                    };

                    const onConfirmDate = ({ selectedValues }) => {
                        datePickerValue.value = selectedValues;
                        dateValue.value = selectedValues.join('-');
                        showDate.value = false;
                    };

                    return {
                        showTime,
                        showDate,
                        timePickerValue,
                        datePickerValue,
                        timeValue,
                        dateValue,
                        onConfirmTime,
                        onConfirmDate
                    };
                },
                template: `
                    <div class="w-full">
                        <van-cell-group inset>
                            <van-field
                                v-model="timeValue"
                                label="时间"
                                placeholder="请选择时间"
                                readonly
                                is-link
                                @click="showTime = true"
                            ></van-field>
                            <van-field
                                v-model="dateValue"
                                label="日期"
                                placeholder="请选择日期"
                                readonly
                                is-link
                                @click="showDate = true"
                            ></van-field>
                            <van-field label="禁用态" model-value="不可选择" readonly disabled></van-field>
                        </van-cell-group>

                        <van-popup v-model:show="showTime" position="bottom">
                            <van-time-picker
                                v-model="timePickerValue"
                                title="选择时间"
                                @confirm="onConfirmTime"
                                @cancel="showTime = false"
                            ></van-time-picker>
                        </van-popup>

                        <van-popup v-model:show="showDate" position="bottom">
                            <van-date-picker
                                v-model="datePickerValue"
                                title="选择日期"
                                @confirm="onConfirmDate"
                                @cancel="showDate = false"
                            ></van-date-picker>
                        </van-popup>
                    </div>
                `
            }
        ],
        rules: [
            '展示形态建议使用输入框/表单项作为触发器，点击后从底部弹出选择器。',
            '选择完成后需回填到触发输入框中，形成可见的结果态。',
            '支持年月日、年月、时间、日期时间、日期区间选择。'
        ]
    },
    calendar: { 
        name: '5.6 日历选择器', 
        demos: [
            {
                title: '单选日期回显（输入框触发）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const show = ref(false);
                    const dateValue = ref('');

                    const formatDate = (d) => {
                        const y = d.getFullYear();
                        const m = String(d.getMonth() + 1).padStart(2, '0');
                        const day = String(d.getDate()).padStart(2, '0');
                        return `${y}-${m}-${day}`;
                    };

                    const onConfirm = (val) => {
                        dateValue.value = formatDate(val);
                        show.value = false;
                    };

                    const formatter = (day) => {
                        const d = day.date;
                        const t = new Date();
                        if (d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth() && d.getDate() === t.getDate()) {
                            day.bottomInfo = '今天';
                        }
                        return day;
                    };

                    return { show, dateValue, onConfirm, formatter };
                },
                template: `
                    <div class="w-full">
                        <van-cell-group inset>
                            <van-field
                                v-model="dateValue"
                                label="日期"
                                placeholder="请选择日期"
                                readonly
                                is-link
                                @click="show = true"
                            ></van-field>
                            <van-field label="禁用态" model-value="不可选择" readonly disabled></van-field>
                        </van-cell-group>

                        <van-calendar
                            v-model:show="show"
                            color="#1890FF"
                            show-mark
                            :formatter="formatter"
                            @confirm="onConfirm"
                        ></van-calendar>
                    </div>
                `
            },
            {
                title: '日期区间回显（开始/结束联动）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const show = ref(false);
                    const startValue = ref('');
                    const endValue = ref('');

                    const formatDate = (d) => {
                        const y = d.getFullYear();
                        const m = String(d.getMonth() + 1).padStart(2, '0');
                        const day = String(d.getDate()).padStart(2, '0');
                        return `${y}-${m}-${day}`;
                    };

                    const defaultDate = (() => {
                        const start = new Date();
                        const end = new Date(Date.now() + 24 * 60 * 60 * 1000);
                        return [start, end];
                    })();

                    const onConfirm = (values) => {
                        const [start, end] = values;
                        startValue.value = formatDate(start);
                        endValue.value = formatDate(end);
                        show.value = false;
                    };

                    const formatter = (day) => {
                        const d = day.date;
                        const t = new Date();
                        if (d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth() && d.getDate() === t.getDate()) {
                            day.bottomInfo = '今天';
                        }
                        return day;
                    };

                    return { show, startValue, endValue, defaultDate, onConfirm, formatter };
                },
                template: `
                    <div class="w-full">
                        <van-cell-group inset>
                            <van-field
                                v-model="startValue"
                                label="开始日期"
                                placeholder="请选择开始日期"
                                readonly
                                is-link
                                @click="show = true"
                            ></van-field>
                            <van-field
                                v-model="endValue"
                                label="结束日期"
                                placeholder="请选择结束日期"
                                readonly
                                is-link
                                @click="show = true"
                            ></van-field>
                            <van-field label="禁用态" model-value="不可选择" readonly disabled></van-field>
                        </van-cell-group>

                        <van-calendar
                            v-model:show="show"
                            type="range"
                            allow-same-day
                            color="#1890FF"
                            show-mark
                            :default-date="defaultDate"
                            :formatter="formatter"
                            @confirm="onConfirm"
                        ></van-calendar>
                    </div>
                `
            },
            {
                title: '日期区间 + 时间段（复合筛选）',
                type: 'vue',
                setup: () => {
                    const { ref, computed } = Vue;
                    const showCalendar = ref(false);
                    const showStartTime = ref(false);
                    const showEndTime = ref(false);

                    const startDateValue = ref('');
                    const endDateValue = ref('');
                    const startTimeValue = ref('08:00');
                    const endTimeValue = ref('18:00');

                    const startTimePicker = ref(['08', '00']);
                    const endTimePicker = ref(['18', '00']);

                    const formatDate = (d) => {
                        const y = d.getFullYear();
                        const m = String(d.getMonth() + 1).padStart(2, '0');
                        const day = String(d.getDate()).padStart(2, '0');
                        return `${y}-${m}-${day}`;
                    };

                    const onConfirmRange = (values) => {
                        const [start, end] = values;
                        startDateValue.value = formatDate(start);
                        endDateValue.value = formatDate(end);
                        showCalendar.value = false;
                    };

                    const onConfirmStartTime = ({ selectedValues }) => {
                        startTimePicker.value = selectedValues;
                        startTimeValue.value = selectedValues.join(':');
                        showStartTime.value = false;
                    };

                    const onConfirmEndTime = ({ selectedValues }) => {
                        endTimePicker.value = selectedValues;
                        endTimeValue.value = selectedValues.join(':');
                        showEndTime.value = false;
                    };

                    const result = computed(() => {
                        if (!startDateValue.value || !endDateValue.value) return '';
                        return `${startDateValue.value} 至 ${endDateValue.value} ${startTimeValue.value}-${endTimeValue.value}`;
                    });

                    const formatter = (day) => {
                        const d = day.date;
                        const t = new Date();
                        if (d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth() && d.getDate() === t.getDate()) {
                            day.bottomInfo = '今天';
                        }
                        return day;
                    };

                    return {
                        showCalendar,
                        showStartTime,
                        showEndTime,
                        startDateValue,
                        endDateValue,
                        startTimeValue,
                        endTimeValue,
                        startTimePicker,
                        endTimePicker,
                        onConfirmRange,
                        onConfirmStartTime,
                        onConfirmEndTime,
                        result,
                        formatter
                    };
                },
                template: `
                    <div class="w-full">
                        <van-cell-group inset>
                            <van-field
                                v-model="startDateValue"
                                label="开始日期"
                                placeholder="请选择开始日期"
                                readonly
                                is-link
                                @click="showCalendar = true"
                            ></van-field>
                            <van-field
                                v-model="endDateValue"
                                label="结束日期"
                                placeholder="请选择结束日期"
                                readonly
                                is-link
                                @click="showCalendar = true"
                            ></van-field>
                            <van-field
                                v-model="startTimeValue"
                                label="开始时间"
                                placeholder="请选择开始时间"
                                readonly
                                is-link
                                @click="showStartTime = true"
                            ></van-field>
                            <van-field
                                v-model="endTimeValue"
                                label="结束时间"
                                placeholder="请选择结束时间"
                                readonly
                                is-link
                                @click="showEndTime = true"
                            ></van-field>
                            <van-field label="结果回显" :model-value="result || '未完成选择'" readonly></van-field>
                            <van-field label="禁用态" model-value="不可选择" readonly disabled></van-field>
                        </van-cell-group>

                        <van-calendar
                            v-model:show="showCalendar"
                            type="range"
                            allow-same-day
                            color="#1890FF"
                            show-mark
                            :formatter="formatter"
                            @confirm="onConfirmRange"
                        ></van-calendar>

                        <van-popup v-model:show="showStartTime" position="bottom">
                            <van-time-picker
                                v-model="startTimePicker"
                                title="选择开始时间"
                                @confirm="onConfirmStartTime"
                                @cancel="showStartTime = false"
                            ></van-time-picker>
                        </van-popup>

                        <van-popup v-model:show="showEndTime" position="bottom">
                            <van-time-picker
                                v-model="endTimePicker"
                                title="选择结束时间"
                                @confirm="onConfirmEndTime"
                                @cancel="showEndTime = false"
                            ></van-time-picker>
                        </van-popup>
                    </div>
                `
            }
        ],
        rules: [
            '<strong>单选回显</strong>：使用输入框触发日历，选择后回填到输入框中。',
            '<strong>区间选择</strong>：支持开始/结束日期联动选择，选择后分别回填到起始与结束输入框。',
            '<strong>复合筛选</strong>：支持日期区间 + 时间段双重筛选，结果需形成可见回显态。',
            '<strong>状态与反馈</strong>：需包含今日标记、选中高亮、禁用灰显、禁用态输入框展示。'
        ] 
    },
    treeselect: { name: '5.7 分类选择', demos: [{ title: '分类选择', id: 'tree-select', type: 'custom', code: '<van-tree-select v-model:active-id="activeId" :items="items" />' }] },
    actionsheet: { 
        name: '5.8 上拉菜单', 
        demos: [{ title: '上拉菜单', type: 'action', actions: [{text:'弹出菜单', action:'actionsheet'}], code: '<van-action-sheet v-model:show="show" :actions="actions" />' }],
        rules: ['一般存在2-6个操作项推荐使用。', '<strong>分享面板</strong>：当图标数大于5个时，渠道与形式单排展示，可滑动。']
    },
    dropdown: { 
        name: '5.9 下拉菜单', 
        demos: [
            {
                title: '基础用法',
                type: 'vue',
                setup: () => {
                    const value1 = Vue.ref(0);
                    const value2 = Vue.ref('a');
                    const option1 = [
                        { text: '全部商品', value: 0 },
                        { text: '新款商品', value: 1 },
                        { text: '活动商品', value: 2 },
                    ];
                    const option2 = [
                        { text: '默认排序', value: 'a' },
                        { text: '好评排序', value: 'b' },
                        { text: '销量排序', value: 'c' },
                    ];
                    return { value1, value2, option1, option2 };
                },
                template: '<div class="w-full"><van-dropdown-menu><van-dropdown-item v-model="value1" :options="option1" /><van-dropdown-item v-model="value2" :options="option2" /></van-dropdown-menu></div>'
            },
            {
                title: '自定义内容',
                type: 'vue',
                setup: () => {
                    const value = Vue.ref(0);
                    const switch1 = Vue.ref(true);
                    const switch2 = Vue.ref(false);
                    const option = [
                        { text: '全部商品', value: 0 },
                        { text: '新款商品', value: 1 },
                        { text: '活动商品', value: 2 },
                    ];
                    const itemRef = Vue.ref(null);
                    const onConfirm = () => {
                        if(itemRef.value) itemRef.value.toggle();
                    };
                    return { value, switch1, switch2, option, itemRef, onConfirm };
                },
                template: '<div class="w-full"><van-dropdown-menu><van-dropdown-item v-model="value" :options="option" /><van-dropdown-item title="筛选" ref="itemRef"><van-cell center title="包邮"><template #right-icon><van-switch v-model="switch1" size="24" active-color="#1890FF" /></template></van-cell><van-cell center title="团购"><template #right-icon><van-switch v-model="switch2" size="24" active-color="#1890FF" /></template></van-cell><div style="padding: 5px 16px;"><van-button type="primary" block round color="#1890FF" @click="onConfirm">确认</van-button></div></van-dropdown-item></van-dropdown-menu></div>'
            },
            {
                title: '自定义选中态颜色',
                type: 'vue',
                setup: () => {
                    const value1 = Vue.ref(0);
                    const value2 = Vue.ref('a');
                    const option1 = [
                        { text: '全部商品', value: 0 },
                        { text: '新款商品', value: 1 },
                        { text: '活动商品', value: 2 },
                    ];
                    const option2 = [
                        { text: '默认排序', value: 'a' },
                        { text: '好评排序', value: 'b' },
                        { text: '销量排序', value: 'c' },
                    ];
                    return { value1, value2, option1, option2 };
                },
                template: '<div class="w-full"><van-dropdown-menu active-color="#1890FF"><van-dropdown-item v-model="value1" :options="option1" /><van-dropdown-item v-model="value2" :options="option2" /></van-dropdown-menu></div>'
            },
            {
                title: '向上展开',
                type: 'vue',
                setup: () => {
                    const value1 = Vue.ref(0);
                    const value2 = Vue.ref('a');
                    const option1 = [
                        { text: '全部商品', value: 0 },
                        { text: '新款商品', value: 1 },
                        { text: '活动商品', value: 2 },
                    ];
                    const option2 = [
                        { text: '默认排序', value: 'a' },
                        { text: '好评排序', value: 'b' },
                        { text: '销量排序', value: 'c' },
                    ];
                    return { value1, value2, option1, option2 };
                },
                template: '<div class="w-full"><van-dropdown-menu direction="up"><van-dropdown-item v-model="value1" :options="option1" /><van-dropdown-item v-model="value2" :options="option2" /></van-dropdown-menu></div>'
            }
        ],
        rules: ['菜单栏最好不超过4个选项。', '可自定义字体颜色、字体大小、cell高度等内容。', '支持自定义下拉面板中的内容，如加入开关、按钮等进行复杂筛选。']
    },
    stepper: { 
        name: '5.10 步进器', 
        demos: [{ title: '步进器', type: 'input', component: 'van-stepper', model: 'stepperVal', code: '<van-stepper v-model="value" />' }],
        rules: ['<strong>禁用状态</strong>：所有元素置灰，不可点击。', '<strong>异常提示</strong>：已达最小/最大值时，点击给出 Toast 提示。']
    },
    keyboard: { 
        name: '5.12 数字键盘', 
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setup: () => {
                    const { ref, computed, watch } = Vue;
                    const active = ref(0);
                    const show = ref(false);
                    const codeVal = ref('');
                    const amountVal = ref('');
                    const codeDisplay = computed(() => codeVal.value ? codeVal.value.replace(/./g, '•') : '');
                    const onOpenBasic = () => { show.value = true; };
                    const onOpenCustom = () => { show.value = true; };
                    const onBasicInput = (key) => {
                        if (codeVal.value.length >= 6) return;
                        codeVal.value += String(key);
                        if (codeVal.value.length >= 6) show.value = false;
                    };
                    const onBasicDelete = () => { codeVal.value = codeVal.value.slice(0, -1); };
                    const onCustomInput = (key) => {
                        const k = String(key);
                        if (k === '.' && amountVal.value.includes('.')) return;
                        if (amountVal.value.includes('.')) {
                            const parts = amountVal.value.split('.');
                            if (parts[1] && parts[1].length >= 2) return;
                        }
                        amountVal.value += k;
                    };
                    const onCustomDelete = () => { amountVal.value = amountVal.value.slice(0, -1); };
                    const onSubmit = () => vant.showToast('已完成输入');
                    watch(active, () => { show.value = false; });
                    return {
                        active,
                        show,
                        codeVal,
                        amountVal,
                        codeDisplay,
                        onOpenBasic,
                        onOpenCustom,
                        onBasicInput,
                        onBasicDelete,
                        onCustomInput,
                        onCustomDelete,
                        onSubmit
                    };
                },
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <van-tabs v-model:active="active" class="shrink-0" color="#1890FF">
                            <van-tab title="基础"></van-tab>
                            <van-tab title="自定义"></van-tab>
                        </van-tabs>

                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div v-if="active === 0">
                                <div class="px-4 text-xs text-[#969799] mb-2">验证码输入（6 位）</div>
                                <van-cell-group inset :border="false">
                                    <van-field
                                        label="验证码"
                                        readonly
                                        clickable
                                        :model-value="codeDisplay"
                                        placeholder="点击输入"
                                        @click="onOpenBasic"
                                        @touchstart.stop="onOpenBasic"
                                    ></van-field>
                                </van-cell-group>

                                <div class="px-4 py-3">
                                    <div class="h-px bg-[#ebedf0]"></div>
                                </div>

                                <div class="px-4 text-xs text-[#969799] mb-2">说明</div>
                                <van-cell-group inset :border="false">
                                    <van-cell title="交互" value="点击输入框唤起，失焦自动收起" />
                                    <van-cell title="场景" value="验证码/密码等纯数字输入" />
                                </van-cell-group>
                            </div>

                            <div v-else>
                                <div class="px-4 text-xs text-[#969799] mb-2">金额输入（带小数点 + 完成键）</div>
                                <van-cell-group inset :border="false">
                                    <van-field
                                        label="金额"
                                        readonly
                                        clickable
                                        :model-value="amountVal"
                                        placeholder="0.00"
                                        @click="onOpenCustom"
                                        @touchstart.stop="onOpenCustom"
                                    >
                                        <template #right-icon>
                                            <span class="text-xs text-[#969799]">元</span>
                                        </template>
                                    </van-field>
                                </van-cell-group>

                                <div class="px-4 py-3">
                                    <div class="h-px bg-[#ebedf0]"></div>
                                </div>

                                <div class="px-4 text-xs text-[#969799] mb-2">操作</div>
                                <div class="px-4">
                                    <van-button type="primary" block color="#1890FF" @click="onSubmit">提交</van-button>
                                </div>
                            </div>
                        </div>

                        <van-number-keyboard
                            v-if="active === 0"
                            :show="show"
                            :maxlength="6"
                            @blur="show = false"
                            @input="onBasicInput"
                            @delete="onBasicDelete"
                        />
                        <van-number-keyboard
                            v-else
                            :show="show"
                            theme="custom"
                            extra-key="."
                            close-button-text="完成"
                            @blur="show = false"
                            @input="onCustomInput"
                            @delete="onCustomDelete"
                        />
                    </div>
                `,
                code: `<van-field readonly clickable :model-value="value" @click="show = true" />\n<van-number-keyboard :show="show" @input="onInput" @delete="onDelete" @blur="show = false" />\n\n<van-number-keyboard\n  :show="show"\n  theme="custom"\n  extra-key=\".\"\n  close-button-text=\"完成\"\n  @input=\"onInput\"\n  @delete=\"onDelete\"\n  @blur=\"show = false\"\n/>`
            }
        ],
        rules: [
            '<strong>唤起方式</strong>：通过输入框点击触发；输入框建议只读（readonly）避免系统键盘与数字键盘冲突。',
            '<strong>收起方式</strong>：失焦自动收起；自定义键盘可提供“完成”关闭按钮。',
            '<strong>键盘类型</strong>：基础模式适用于验证码/纯数字；自定义模式支持 extra-key（如小数点）与 close-button-text。',
            '<strong>视觉</strong>：页面背景 #F7F8FA；输入区域建议使用 CellGroup inset；主要按钮色 #1890FF。',
            '<strong>长度限制</strong>：验证码类建议 maxlength=6；金额输入建议结合业务做小数位校验与格式化。'
        ]
    },
    form: { name: '5.13 表单', demos: [{ title: '表单', type: 'static', html: '<div class="van-cell-group van-cell-group--inset"><div class="van-cell van-field"><div class="van-cell__title"><span>账号</span></div><div class="van-field__value"><input class="van-field__control" placeholder="请输入"></div></div></div><div style="margin:16px"><button class="van-button van-button--primary van-button--block van-button--round" style="background:#0088FF;border-color:#0088FF"><span>提交</span></button></div>', code: '<van-form>...</van-form>' }] },

    // 6. 数据展示
    cell: { 
        name: '6.1 单元格', 
        demos: [
            {
                title: '完整演示',
                type: 'vue',
                setupStr: "return { onClick: (text) => vant.showToast(text) };",
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">基础用法</div>
                            <van-cell-group :border="false">
                                <van-cell title="单元格" value="内容" clickable @click="onClick('点击：基础单元格')" />
                                <van-cell title="展示箭头" is-link clickable @click="onClick('点击：箭头单元格')" />
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">个人资料（页面级示例）</div>
                            <van-cell-group inset :border="false">
                                <van-cell is-link size="large" clickable @click="onClick('点击：个人资料')">
                                    <template #title>
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                                                <van-icon name="user-o" color="#1890FF" size="22" />
                                            </div>
                                            <div class="min-w-0">
                                                <div class="text-sm font-medium text-[#333] leading-5">张三</div>
                                                <div class="text-xs text-[#969799] leading-4">ID：RH-1024</div>
                                            </div>
                                        </div>
                                    </template>
                                    <template #value>
                                        <span class="text-xs text-[#969799]">未认证</span>
                                    </template>
                                </van-cell>
                                <van-cell title="昵称" value="张三" is-link clickable @click="onClick('点击：修改昵称')" />
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">联系方式（图标 + 右侧内容）</div>
                            <van-cell-group inset :border="false">
                                <van-cell title="手机号" value="138****8000" icon="phone-o" is-link clickable @click="onClick('点击：手机号')" />
                                <van-cell title="邮箱" value="zhangsan@ronghe.com" icon="envelop-o" is-link clickable @click="onClick('点击：邮箱')" />
                                <van-cell title="地址" value="浙江省 杭州市" icon="location-o" is-link arrow-direction="down" clickable @click="onClick('点击：地址')" />
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <van-cell-group inset :border="false">
                                <van-cell center clickable @click="onClick('点击：退出登录')">
                                    <template #title>
                                        <div class="w-full text-center text-[#ee0a24] font-medium">退出登录</div>
                                    </template>
                                </van-cell>
                            </van-cell-group>
                        </div>
                    </div>
                `
            }
        ] 
    },
    popup: { name: '6.3 弹出层', demos: [{ title: '位置', type: 'action', actions: [{text:'顶部弹出', action:'popup-top'}, {text:'居中弹出', action:'popup-center'}], code: '<van-popup v-model:show="show" position="top" />' }] },
    'dialog-modal': {
        name: '6.1 对话弹窗',
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setupStr: "return (() => { const promptShow = Vue.ref(false); const promptVal = Vue.ref(''); const promptInput = Vue.ref(''); const asyncShow = Vue.ref(false); const asyncLoading = Vue.ref(false); const onAlert = () => vant.showDialog({ title: '提示', message: '这是一个对话弹窗示例' }); const onConfirm = () => vant.showConfirmDialog({ title: '确认', message: '是否确认提交？' }).then(() => vant.showToast('已确认')).catch(() => {}); const openPrompt = () => { promptInput.value = promptVal.value; promptShow.value = true; }; const onPromptConfirm = () => { promptVal.value = String(promptInput.value || ''); promptShow.value = false; vant.showToast('已保存'); }; const openAsync = () => { asyncShow.value = true; asyncLoading.value = false; }; const onAsyncConfirm = () => { asyncLoading.value = true; setTimeout(() => { asyncLoading.value = false; asyncShow.value = false; vant.showToast('已完成'); }, 800); }; return { promptShow, promptVal, promptInput, asyncShow, asyncLoading, onAlert, onConfirm, openPrompt, onPromptConfirm, openAsync, onAsyncConfirm }; })();",
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">基础用法</div>
                            <van-cell-group inset :border="false">
                                <van-cell title="提示弹窗" is-link clickable @click="onAlert" />
                                <van-cell title="确认弹窗" is-link clickable @click="onConfirm" />
                                <van-cell title="带输入弹窗" :value="promptVal || '未填写'" is-link clickable @click="openPrompt" />
                                <van-cell title="异步确认" is-link clickable @click="openAsync" />
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">页面级说明</div>
                            <div class="px-4 text-sm text-[#323233] leading-6">
                                对话弹窗用于二次确认、风险告知或补充信息输入等场景；建议文案明确、按钮动词化，避免连续弹出影响操作。
                            </div>
                        </div>

                        <van-dialog v-model:show="promptShow" title="补充信息" show-cancel-button confirm-button-text="保存" @confirm="onPromptConfirm">
                            <div class="px-4 pt-2">
                                <van-field v-model="promptInput" label="备注" placeholder="请输入" />
                            </div>
                        </van-dialog>

                        <van-dialog v-model:show="asyncShow" title="异步确认" show-cancel-button confirm-button-text="确认" :confirm-button-loading="asyncLoading" @confirm="onAsyncConfirm">
                            <div class="px-4 pt-2 text-sm text-[#323233] leading-6">点击“确认”后模拟请求，完成后自动关闭。</div>
                        </van-dialog>
                    </div>
                `,
                code: `// API 方式\nvant.showDialog({ title: '提示', message: '内容' });\nvant.showConfirmDialog({ title: '确认', message: '内容' }).then(() => {}).catch(() => {});\n\n// 组件方式（适合自定义内容/输入）\n<van-dialog v-model:show=\"show\" title=\"标题\" show-cancel-button @confirm=\"onConfirm\">\n  <van-field v-model=\"value\" label=\"备注\" placeholder=\"请输入\" />\n</van-dialog>`
            }
        ],
        rules: [
            '<strong>使用场景</strong>：二次确认、风险告知、重要操作前提示；避免用于高频轻量操作。',
            '<strong>文案</strong>：标题简短清晰；正文说明原因与后果；确认按钮使用动词（如“删除/提交/同意”）。',
            '<strong>交互</strong>：支持确认/取消；必要时支持输入补充信息；异步操作建议提供 loading 与结果反馈；支持遮罩关闭与返回手势关闭需谨慎（避免误触）。'
        ]
    },
    'business-popup': {
        name: '6.2 业务弹窗',
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setupStr: "return (() => { const showBottom = Vue.ref(false); const showCenter = Vue.ref(false); const dontShow = Vue.ref(false); const openBottom = () => (showBottom.value = true); const openCenter = () => (showCenter.value = true); const onPrimary = () => { vant.showToast('已确认'); showBottom.value = false; showCenter.value = false; }; return { showBottom, showCenter, dontShow, openBottom, openCenter, onPrimary }; })();",
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">触发入口（页面级示例）</div>
                            <van-cell-group inset :border="false">
                                <van-cell title="底部业务弹窗" value="协议确认/引导" is-link clickable @click="openBottom" />
                                <van-cell title="居中业务弹窗" value="营销/提醒" is-link clickable @click="openCenter" />
                            </van-cell-group>

                            <div class="px-4 py-3">
                                <div class="h-px bg-[#ebedf0]"></div>
                            </div>

                            <div class="px-4 text-xs text-[#969799] mb-2">页面级说明</div>
                            <div class="px-4 text-sm text-[#323233] leading-6">
                                业务弹窗通常承载信息说明、用户确认、活动引导等内容；建议使用圆角卡片、主次按钮清晰，并提供关闭/遮罩点击关闭能力。
                            </div>
                        </div>

                        <van-popup v-model:show="showBottom" position="bottom" round>
                            <div class="px-4 pt-4 pb-3" style="padding-bottom: calc(12px + env(safe-area-inset-bottom));">
                                <div class="text-base font-medium text-[#323233]">服务协议</div>
                                <div class="mt-2 text-sm text-[#646566] leading-6">
                                    请阅读并同意服务协议后继续使用。你也可以勾选“不再提示”减少打扰。
                                </div>
                                <van-checkbox v-model="dontShow" class="mt-3" icon-size="16">不再提示</van-checkbox>
                                <div class="mt-4 flex gap-3">
                                    <van-button block plain @click="showBottom = false">取消</van-button>
                                    <van-button block type="primary" color="#1890FF" @click="onPrimary">同意</van-button>
                                </div>
                            </div>
                        </van-popup>

                        <van-popup v-model:show="showCenter" round>
                            <div class="w-[280px] px-5 pt-5 pb-4">
                                <div class="flex items-center justify-center mb-3">
                                    <div class="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center">
                                        <van-icon name="gift-o" color="#1890FF" size="26" />
                                    </div>
                                </div>
                                <div class="text-base font-medium text-center text-[#323233]">新人礼包已到账</div>
                                <div class="mt-2 text-sm text-center text-[#646566] leading-6">完成一次下单即可使用，优惠将自动抵扣。</div>
                                <div class="mt-4">
                                    <van-button type="primary" block color="#1890FF" @click="onPrimary">去使用</van-button>
                                    <div class="mt-2 text-center text-sm text-[#969799]" @click="showCenter = false">稍后再说</div>
                                </div>
                            </div>
                        </van-popup>
                    </div>
                `,
                code: `<van-popup v-model:show=\"show\" position=\"bottom\" round>\n  <div class=\"px-4 pt-4 pb-3\">\n    <div class=\"text-base font-medium\">标题</div>\n    <div class=\"mt-2 text-sm text-[#646566]\">说明内容</div>\n    <div class=\"mt-4 flex gap-3\">\n      <van-button block plain @click=\"show = false\">取消</van-button>\n      <van-button block type=\"primary\" color=\"#1890FF\" @click=\"onConfirm\">确定</van-button>\n    </div>\n  </div>\n</van-popup>`
            }
        ],
        rules: [
            '<strong>结构</strong>：标题 + 说明 + 操作；可包含插图/图标增强表达；主次按钮层级清晰。',
            '<strong>关闭</strong>：支持遮罩点击关闭与关闭按钮（或“稍后再说”）；避免强制打断用户主流程。',
            '<strong>状态</strong>：异步提交建议提供 loading；操作完成给出 toast/状态回显。'
        ]
    },
    'drawer-popup': {
        name: '6.3 抽屉弹窗',
        demos: [
            {
                title: '页面级示例',
                type: 'vue',
                setupStr: "return (() => { const showDrawer = Vue.ref(false); const periods = ['今日','本周','本月','全部']; const period = Vue.ref('本周'); const status = Vue.ref(['进行中']); const channel = Vue.ref('全部'); const minAmount = Vue.ref(''); const maxAmount = Vue.ref(''); const onlyAvailable = Vue.ref(false); const sorts = ['最新','最早','金额最高','金额最低']; const sort = Vue.ref('最新'); const openDrawer = () => (showDrawer.value = true); const onPickDate = () => vant.showToast('日期选择器示例'); const onReset = () => { period.value = '本周'; status.value = []; channel.value = '全部'; minAmount.value = ''; maxAmount.value = ''; onlyAvailable.value = false; sort.value = '最新'; }; const onApply = () => { showDrawer.value = false; vant.showToast('已应用筛选'); }; return { showDrawer, periods, period, status, channel, minAmount, maxAmount, onlyAvailable, sorts, sort, openDrawer, onPickDate, onReset, onApply }; })();",
                template: `
                    <div class="h-full min-h-0 bg-[#f7f8fa] flex flex-col overflow-hidden">
                        <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-3">
                            <div class="px-4 text-xs text-[#969799] mb-2">筛选抽屉（页面级示例）</div>
                            <van-cell-group inset :border="false">
                                <van-cell title="打开筛选抽屉" value="右侧抽屉" is-link clickable @click="openDrawer" />
                            </van-cell-group>
                        </div>

                        <van-popup v-model:show="showDrawer" position="right" :style="{ width: '86vw', maxWidth: '340px', height: '100%' }">
                            <div class="h-full flex flex-col bg-white">
                                <div class="px-4 h-12 flex items-center justify-between border-b border-[#ebedf0]">
                                    <div class="text-base font-medium text-[#323233]">筛选</div>
                                    <van-icon name="cross" size="18" color="#969799" @click="showDrawer = false" />
                                </div>
                                <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                                    <div class="px-4 py-4">
                                        <div class="text-sm text-[#323233] font-medium">快捷筛选</div>
                                        <div class="mt-3 flex flex-wrap gap-2">
                                            <button
                                                v-for="opt in periods"
                                                :key="opt"
                                                class="px-3 h-8 rounded-full text-sm border"
                                                :class="period === opt ? 'bg-[#1890FF] text-white border-[#1890FF]' : 'bg-white text-[#323233] border-[#ebedf0]'"
                                                @click="period = opt"
                                            >{{ opt }}</button>
                                        </div>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="text-sm text-[#323233] font-medium mb-3">状态（多选）</div>
                                        <van-checkbox-group v-model="status" direction="horizontal">
                                            <van-checkbox name="进行中">进行中</van-checkbox>
                                            <van-checkbox name="已完成">已完成</van-checkbox>
                                            <van-checkbox name="已取消">已取消</van-checkbox>
                                            <van-checkbox name="待处理">待处理</van-checkbox>
                                        </van-checkbox-group>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="text-sm text-[#323233] font-medium mb-3">来源渠道（单选）</div>
                                        <van-radio-group v-model="channel">
                                            <van-radio name="全部">全部</van-radio>
                                            <van-radio name="线上">线上</van-radio>
                                            <van-radio name="线下">线下</van-radio>
                                            <van-radio name="线索导入">线索导入</van-radio>
                                        </van-radio-group>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="text-sm text-[#323233] font-medium">金额区间</div>
                                        <div class="mt-3 flex items-center gap-2">
                                            <input v-model="minAmount" inputmode="decimal" class="flex-1 h-9 px-3 rounded-lg bg-[#f7f8fa] text-sm text-[#323233] outline-none" placeholder="最低金额" />
                                            <span class="text-xs text-[#969799]">—</span>
                                            <input v-model="maxAmount" inputmode="decimal" class="flex-1 h-9 px-3 rounded-lg bg-[#f7f8fa] text-sm text-[#323233] outline-none" placeholder="最高金额" />
                                        </div>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="text-sm text-[#323233] font-medium">日期范围</div>
                                        <div class="mt-3 flex items-center gap-2">
                                            <button class="flex-1 h-9 px-3 rounded-lg bg-[#f7f8fa] text-left text-sm text-[#323233]" @click="onPickDate">开始日期</button>
                                            <span class="text-xs text-[#969799]">—</span>
                                            <button class="flex-1 h-9 px-3 rounded-lg bg-[#f7f8fa] text-left text-sm text-[#323233]" @click="onPickDate">结束日期</button>
                                        </div>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm text-[#323233] font-medium">仅看可用</div>
                                            <van-switch v-model="onlyAvailable" size="20" active-color="#1890FF" />
                                        </div>
                                    </div>

                                    <div class="px-4 py-4 border-t border-[#f7f7f7]">
                                        <div class="text-sm text-[#323233] font-medium">排序</div>
                                        <div class="mt-3 flex flex-wrap gap-2">
                                            <button
                                                v-for="opt in sorts"
                                                :key="opt"
                                                class="px-3 h-8 rounded-full text-sm border"
                                                :class="sort === opt ? 'bg-[#1890FF] text-white border-[#1890FF]' : 'bg-white text-[#323233] border-[#ebedf0]'"
                                                @click="sort = opt"
                                            >{{ opt }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 border-t border-[#ebedf0] flex gap-3">
                                    <van-button block plain @click="onReset">重置</van-button>
                                    <van-button block type="primary" color="#1890FF" @click="onApply">确定</van-button>
                                </div>
                            </div>
                        </van-popup>
                    </div>
                `,
                code: `<van-popup v-model:show=\"show\" position=\"right\" :style=\"{ width: '86vw', maxWidth: '340px', height: '100%' }\">\n  <div class=\"h-full flex flex-col bg-white\">\n    <div class=\"px-4 h-12 flex items-center justify-between border-b\">筛选</div>\n    <div class=\"flex-1 overflow-y-auto\">\n      <!-- 多种筛选样式：标签/多选/单选/区间/日期/开关/排序 -->\n    </div>\n    <div class=\"p-3 border-t flex gap-3\">\n      <van-button block plain @click=\"onReset\">重置</van-button>\n      <van-button block type=\"primary\" color=\"#1890FF\" @click=\"onApply\">确定</van-button>\n    </div>\n  </div>\n</van-popup>`
            }
        ],
        rules: [
            '<strong>使用场景</strong>：筛选/编辑等“在当前页面完成”的操作；抽屉不跳转页面，便于快速返回。',
            '<strong>布局</strong>：头部标题 + 关闭；内容区可滚动；底部固定操作栏（重置/确定）。',
            '<strong>筛选样式</strong>：支持标签（单选/多选）、checkbox 多选、radio 单选、区间输入、日期范围、开关、排序等多种组合。',
            '<strong>交互</strong>：支持遮罩关闭；提交后关闭并回显筛选结果；内容超出时内部滚动而非页面滚动。'
        ]
    },
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
    uploader: {
        name: '5.14 文件/图片上传',
        rules: [
            '<strong>全局视觉属性</strong>：主色 #1890FF，主要文本 #333333，提示文字 #999999，占位/禁用图标 #C2C2C2，背景色 #F7F8FA/#F5F5F5，必填星号 #EE0A24。',
            '<strong>附件上传</strong>：支持 docx, xlsx, pdf, jpg 等格式，单文件 ≤ 20MB。未上传显示灰色提示与蓝色实心按钮；已上传呈块状列表，带蓝色回形针图标和灰色删除图标。',
            '<strong>图片上传</strong>：建议 ≤ 1200px，最多 8 张，单图 ≤ 20MB，单行展示 4 张（约 80px）。支持上传中遮罩、失败重试、数量上限后隐藏上传入口。'
        ],
        demos: [
            {
                title: '附件上传（排版优化）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const fileList = ref([
                        { url: '#', name: '文件名称文本内容文件...文件名.docx' },
                        { url: '#', name: '文件名称文本内容文件...文件名.pdf' }
                    ]);
                    const onOversize = () => vant.showToast('文件大小不能超过 20MB');
                    const removeFile = (index) => { fileList.value.splice(index, 1); };
                    return { fileList, onOversize, removeFile };
                },
                template: `
                    <div class="-mx-4 -my-4 bg-[#f7f8fa] p-4">
                        <div class="text-xs text-[#969799] mb-2">附件上传</div>
                        <div class="bg-white rounded-xl border border-[#ebedf0] p-4">
                            <div class="text-[13px] text-[#646566] leading-5">
                                单个文件大小不超过 20MB，支持格式 docx、xlsx、pdf、jpg 等。
                            </div>
                            <div class="mt-3">
                                <van-uploader v-model="fileList" accept="*" :max-size="20 * 1024 * 1024" @oversize="onOversize">
                                    <van-button type="primary" size="small" class="!bg-[#1890FF] !border-none !rounded-lg">点击上传</van-button>
                                </van-uploader>
                            </div>
                        </div>

                        <div v-if="fileList.length > 0" class="mt-4 bg-white rounded-xl border border-[#ebedf0] overflow-hidden">
                            <div
                                v-for="(file, index) in fileList"
                                :key="index"
                                class="flex items-center justify-between px-4 py-3"
                                :class="index ? 'border-t border-[#f2f3f5]' : ''"
                            >
                                <div class="flex items-center gap-2 overflow-hidden flex-1 mr-4">
                                    <van-icon name="link-o" class="text-[#1890FF] text-base flex-shrink-0" />
                                    <span class="text-[#1890FF] text-sm truncate">{{ file.name || file.url }}</span>
                                </div>
                                <van-icon name="cross" class="text-[#c8c9cc] text-lg flex-shrink-0 cursor-pointer" @click="removeFile(index)" />
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: '图片上传（排版优化）',
                type: 'vue',
                setup: () => {
                    const { ref } = Vue;
                    const imageList = ref([
                        { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg', status: 'done' },
                        { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg', status: 'uploading', message: '上传中' },
                        { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg', status: 'failed', message: '上传失败\n重新上传' }
                    ]);
                    const onOversize = () => vant.showToast('文件大小不能超过 20MB');
                    return { imageList, onOversize };
                },
                template: `
                    <div class="-mx-4 -my-4 bg-[#f7f8fa] p-4">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-1">
                                <div class="text-xs text-[#969799]">上传图片</div>
                                <span class="text-[#EE0A24]">*</span>
                            </div>
                            <div class="text-xs text-[#969799]">最多 8 张</div>
                        </div>

                        <div class="bg-white rounded-xl border border-[#ebedf0] p-4">
                            <div class="text-[13px] text-[#646566] leading-5 mb-3">
                                建议宽高尺寸不超过 1200px，单个图片不超过 20MB。
                            </div>
                            <van-uploader
                                v-model="imageList"
                                multiple
                                :max-count="8"
                                :max-size="20 * 1024 * 1024"
                                upload-text="上传图片"
                                upload-icon="photograph"
                                :preview-size="'calc((100vw - 32px - 24px) / 4)'"
                                @oversize="onOversize"
                            />
                        </div>
                    </div>
                `
            }
        ]
    },
    badge: { name: '6.17 徽标', demos: [{ title: '徽标', type: 'static', html: '<div style="margin-top:10px;margin-left:20px;"><div class="van-badge__wrapper"><div class="van-icon van-icon-child" style="font-size:20px"></div><div class="van-badge van-badge--top-right van-badge--fixed">5</div></div></div>', code: '<van-badge :content="5">...</van-badge>' }] },
    swipe: { name: '6.18 轮播', demos: [{ title: '基础轮播', id: 'swipe', type: 'custom', code: '<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">...</van-swipe>' }] },
    progress: { name: '6.19 进度条', demos: [{ title: '进度条', type: 'simple', component: 'van-progress', props: { percentage: 50 }, code: '<van-progress :percentage="50" />' }] },
    skeleton: { name: '6.20 骨架屏', demos: [{ title: '骨架屏', id: 'skeleton', type: 'custom', code: '<van-skeleton title avatar :row="3" />' }] },
    card: { name: '6.21 卡片', demos: [{ title: '商品卡片', type: 'static', html: '<div class="van-card"><div class="van-card__header"><a class="van-card__thumb"><div class="van-image" style="width:100%;height:100%"><img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23eeeeee%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20fill%3D%22%23999%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%3C%2Ftext%3E%3C%2Fsvg%3E" class="van-image__img"></div></a><div class="van-card__content"><div><div class="van-card__title van-multi-ellipsis--l2">商品标题</div><div class="van-card__desc van-ellipsis">描述信息</div></div><div class="van-card__bottom"><div class="van-card__price"><div><span class="van-card__price-currency">¥</span><span class="van-card__price-integer">2</span>.<span class="van-card__price-decimal">00</span></div></div><div class="van-card__num">x2</div></div></div></div></div>', code: '<van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="..." />' }] },
    'action-bar': { name: '4.9 动作栏', demos: [{ title: '动作栏', id: 'action-bar', type: 'custom', code: '<van-action-bar>...</van-action-bar>' }] },
    'submit-bar': { name: '4.10 提交订单栏', demos: [{ title: '提交订单栏', id: 'submit-bar', type: 'custom', code: '<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />' }] }
};
