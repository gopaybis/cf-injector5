import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "CF Worker VLESS Setup",
          apiKeyDescription:
            "You need to provide the email and Global API Key of your CloudFlare account",
          howToGetApiKey: "How to get Global API Key",
          Towatchvideo: "Watch Video",
          email: "Email",
          emailTooltip: "Email of your CloudFlare account",
          globalAPIKey: "Global API Key",
          globalAPIKeyTooltip: "Global API Key of your CloudFlare account",
          additionalParams: "Additional Parameters",
          workerName: "Worker Name",
          workerNameTooltip: "Name of the CloudFlare Worker",
          uuid: "UUID",
          uuidTooltip: "UUID of the node",
          nodeName: "Node Name",
          nodeNameTooltip: "Name of the node",
          createWorkerNode: "Create Worker VLESS Node",
          clearSavedData: "Clear Saved Data",
          workerNodeAddress: "VLESS URL:",
          importToClash: "Import to Clash",
          importToShadowrocket: "Import to Shadowrocket",
          manageNode: "Manage Node",
          nodeInfoPlaceholder: "Node information will be displayed here",
          copiedSuccess: "Copied successfully",
          workerCreationSuccess: "Worker node created successfully!",
          workerCreationFail:
            "Failed to create Worker node. Please check your input and try again.",
          dataClearedSuccess: "Saved data has been cleared",
          close: "Close",
          shareDescription: "Thank you for using our service! Please share this tool with others who might find it helpful.",
          apiKeyInstructions1:
            '1. Log in to your CloudFlare account and go to the <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener noreferrer">API Tokens</a> page.',
          apiKeyInstructions2: "2. Find the <b>Global API Key</b> and copy it.",
          apiKeyInstructions3:
            "3. Paste the <b>Global API Key</b> into the input box below.",
          metaDescription:
            "Create and manage Cloudflare Worker VLESS nodes easily with our user-friendly interface. Optimize your network performance and security.",
          proxyIp: "Proxy IP",
          proxyIpTooltip:
            "Optional proxy IP address (default: cdn.xn--b6gac.eu.org:443)",
          getProxyIp: "Get IPs",
          selectProxyIpCountry: "Select Country for Proxy IPs",
          selectProxyIpDescription: "Please select a country/region to fetch proxy IPs",
          fetchedIpsSuccess: "Successfully fetched {{count}} proxy IPs from {{country}}",
          fetchedIpsFail: "Failed to fetch proxy IPs: {{error}}",
          maxIpsInfo: "Maximum {{count}} IPs will be fetched",
          refreshCountryList: "Refresh Country List",
          loadingCountries: "Loading country/region data...",
          inferringCountries: "Intelligently inferring available countries based on city data from API",
          noCountriesFound: "No available country/region data found, please click refresh to try again",
          showAllCountries: "Show All ({{count}} countries/regions)",
          collapseCountries: "Collapse",
          cancel: "Cancel",
          customDomain: "Custom Domain",
          customDomainTooltip: "Optional custom domain for the worker",
          socks5Relay: "Enable SOCKS5 Relay",
          socks5RelayTooltip: "Enable SOCKS5 relay (optional)",
          socks5Proxy: "SOCKS5 Proxy",
          socks5ProxyTooltip: "Optional SOCKS5 proxy address",
          shareTexts: [
            "🚀 Discovered an amazing CF Worker node deployment tool! Deploy your own node with ease!",
            "💫 One-click CF Worker node setup, no more complex configurations! Check out this useful tool~",
            "⚡️ Want to quickly set up a CF Worker node? This tool makes it easy!",
            "🔥 CF Worker node setup wizard - even beginners can use it! Try it now~",
            "✨ Sharing a great tool: CF Worker node one-click deployment, saves time and effort!"
          ],
          countries: {
            germany: "Germany",
            netherlands: "Netherlands",
            france: "France",
            sweden: "Sweden",
            finland: "Finland",
            poland: "Poland",
            uk: "United Kingdom",
            lithuania: "Lithuania",
            turkey: "Turkey",
            spain: "Spain",
            switzerland: "Switzerland",
            latvia: "Latvia",
            denmark: "Denmark",
            romania: "Romania",
            austria: "Austria",
            italy: "Italy",
            norway: "Norway",
            bulgaria: "Bulgaria",
            estonia: "Estonia",
            russia: "Russia",
            moldova: "Moldova",
            hungary: "Hungary",
            ireland: "Ireland",
            ukraine: "Ukraine",
            czechia: "Czech Republic",
            cyprus: "Cyprus",
            slovakia: "Slovakia",
            southKorea: "South Korea",
            singapore: "Singapore",
            japan: "Japan",
            hongKong: "Hong Kong",
            india: "India",
            taiwan: "Taiwan",
            armenia: "Armenia",
            thailand: "Thailand",
            indonesia: "Indonesia",
            kazakhstan: "Kazakhstan",
            oman: "Oman",
            israel: "Israel",
            usa: "United States",
            canada: "Canada",
            australia: "Australia",
            newZealand: "New Zealand",
            brazil: "Brazil",
            colombia: "Colombia",
            argentina: "Argentina"
          },
          // Account Management
          selectAccount: "Select Account",
          addAccount: "Add Account",
          manage: "Manage",
          addFirstAccount: "Add First Account",
          accountManagement: "Account Management",
          editAccount: "Edit Account",
          accountName: "Account Name",
          accountNameRequired: "Please enter account name",
          accountNamePlaceholder: "Enter a friendly name for this account",
          emailRequired: "Please enter email",
          emailInvalid: "Please enter a valid email",
          emailPlaceholder: "Cloudflare account email",
          globalAPIKeyRequired: "Please enter Global API Key",
          globalAPIKeyPlaceholder: "Your Cloudflare Global API Key",
          accountId: "Account ID (Optional)",
          accountIdPlaceholder: "Cloudflare Account ID",
          tags: "Tags",
          tagsPlaceholder: "Add tags to organize accounts",
          notes: "Notes",
          notesPlaceholder: "Additional notes about this account",
          account: "Account",
          status: "Status",
          created: "Created",
          actions: "Actions",
          current: "Current",
          active: "Active",
          inactive: "Inactive",
          setCurrent: "Set Current",
          edit: "Edit",
          delete: "Delete",
          deleteAccountConfirm: "Are you sure you want to delete this account?",
          yes: "Yes",
          no: "No",
          totalAccounts: "Total {{count}} accounts",
          accountSetAsCurrent: "Account set as current",
          pleaseSelectAccount: "Please select an account first",
          currentAccountDescription: "Using account:",
          accountManagementDescription: "You can manage your accounts using the selector above.",
          noAccountSelected: "No account selected. Please add and select an account to continue.",
          // Bulk Deployment
          bulkDeploy: "Bulk Deploy",
          bulkWorkerDeployment: "Bulk Worker Deployment",
          workerScript: "Worker Script",
          workerScriptRequired: "Please enter worker script",
          workerScriptPlaceholder: "Enter your worker script here...",
          targetAccounts: "Target Accounts",
          targetAccountsRequired: "Please select target accounts",
          selectTargetAccounts: "Select accounts to deploy to",
          deploymentTargets: "Deployment Targets",
          deploymentProgress: "Deployment Progress",
          currentlyDeploying: "Currently deploying to",
          pending: "Pending",
          deploying: "Deploying",
          startDeployment: "Start Deployment",
          viewWorker: "View Worker",
          deploymentTime: "Deployment time",
          result: "Result",
          total: "Total",
          // Configuration Management
          configManagement: "Configuration Management",
          exportConfig: "Export Configuration",
          exportConfigDescription: "Export your accounts and settings to a JSON file for backup or migration.",
          exportSecurityNote: "Security Note",
          exportSecurityDescription: "Sensitive data (API keys) will be marked as [ENCRYPTED] in the export file for security reasons.",
          exportNow: "Export Now",
          noAccountsToExport: "No accounts to export",
          configExportSuccess: "Configuration exported successfully",
          configExportFailed: "Failed to export configuration",
          importConfig: "Import Configuration",
          importConfigDescription: "Import accounts and settings from a previously exported JSON file.",
          clickOrDragToUpload: "Click or drag configuration file to this area to upload",
          supportJsonFiles: "Support for JSON configuration files only",
          configFileLoaded: "Configuration file loaded successfully",
          configFileInvalid: "Invalid configuration file",
          importPreview: "Import Preview",
          configVersion: "Version",
          exportDate: "Export Date",
          accountsCount: "Accounts",
          importable: "importable",
          settings: "Settings",
          theme: "Theme",
          language: "Language",
          formData: "Form Data",
          importWarning: "Import Warning",
          importWarningDescription: "Importing will add new accounts and overwrite current settings. This action cannot be undone.",
          confirmImport: "Confirm Import",
          noValidAccountsToImport: "No valid accounts to import. Please ensure sensitive data is included.",
          configImportSuccess: "Configuration imported successfully",
          configImportFailed: "Failed to import configuration",
          refreshPageTitle: "Refresh Page",
          refreshPageContent: "To apply all imported settings, please refresh the page.",
          refresh: "Refresh",
          later: "Later",

          // Virtual Scrolling & UI
          viewMode: "View Mode",
          table: "Table",
          virtualList: "Virtual List",
          noAccountsFound: "No accounts found",

          // Keyboard Shortcuts
          openAccountManagement: "Open Account Management",
          openAccountManagementDesc: "Manage your Cloudflare accounts",
          openBulkDeployment: "Open Bulk Deployment",
          openBulkDeploymentDesc: "Deploy workers to multiple accounts",
          openConfigManagement: "Open Configuration",
          openConfigManagementDesc: "Import/export settings",
          toggleTheme: "Toggle Theme",
          toggleThemeDesc: "Switch between light and dark theme",
          toggleLanguage: "Toggle Language",
          toggleLanguageDesc: "Switch between English and Chinese",
          showShortcuts: "Show Shortcuts",
          showShortcutsDesc: "Display all available shortcuts",
          commandPalette: "Command Palette",
          commandPaletteDesc: "Quick access to all actions",
          navigation: "Navigation",
          ui: "UI",
          help: "Help",
          searchCommands: "Search commands...",
          commandPaletteHint: "Press Esc to close, Enter to execute selected command",
          keyboardShortcuts: "Keyboard Shortcuts"
        },
      },
      zh: {
        translation: {
          title: "CF Worker 节点搭建",
          apiKeyDescription:
            "需要提供 CloudFlare 账号的 邮箱 和 Global API Key",
          howToGetApiKey: "如何获取 Global API Key",
          Towatchvideo: "观看视频",
          email: "邮箱",
          emailTooltip: "CloudFlare 账号的邮箱",
          globalAPIKey: "Global API Key",
          globalAPIKeyTooltip: "CloudFlare 账号的 Global API Key",
          additionalParams: "额外参数",
          workerName: "Worker名称",
          workerNameTooltip: "CloudFlare Worker 的名字",
          uuid: "UUID",
          uuidTooltip: "节点的uuid",
          nodeName: "节点名",
          nodeNameTooltip: "节点的名字",
          createWorkerNode: "创建 Worker 节点",
          clearSavedData: "清除保存的数据",
          workerNodeAddress: "Worker 节点地址:",
          importToClash: "导入到 Clash",
          importToShadowrocket: "导入到小火箭",
          manageNode: "管理节点",
          nodeInfoPlaceholder: "节点信息将在这里显示",
          copiedSuccess: "复制成功",
          workerCreationSuccess: "Worker 节点创建成功！",
          workerCreationFail: "创建 Worker 节点失败，请检查您的输入并重试。",
          dataClearedSuccess: "已清除保存的数据",
          close: "关闭",
          shareDescription: "感谢使用我们的服务！如果您觉得这个工具有用，请分享给其他可能需要的人。",
          apiKeyInstructions1:
            '1. 登录 CloudFlare 账号，进入 <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener noreferrer">API Tokens</a> 页面。',
          apiKeyInstructions2: "2. 找到 <b>Global API Key</b> 并复制。",
          apiKeyInstructions3:
            "3. 将 <b>Global API Key</b> 粘贴到下面的输入框中。",
          metaDescription:
            "轻松创建和管理 Cloudflare Worker VLESS 节点。优化您的网络性能和安全性。",
          proxyIp: "PROXYIP",
          proxyIpTooltip: "代理 Cloudflare CDN IP 地址（可选）",
          getProxyIp: "获取IP",
          selectProxyIpCountry: "选择代理IP所在国家/地区",
          selectProxyIpDescription: "请选择一个国家/地区获取代理IP",
          fetchedIpsSuccess: "成功获取 {{count}} 个 {{country}} 代理IP",
          fetchedIpsFail: "获取代理IP失败: {{error}}",
          maxIpsInfo: "最多获取 {{count}} 个IP",
          refreshCountryList: "刷新国家列表",
          loadingCountries: "加载国家/地区数据中...",
          inferringCountries: "根据API提供的城市信息正在智能推断可用的国家与地区",
          noCountriesFound: "没有找到可用的国家/地区数据，请点击刷新按钮重试",
          showAllCountries: "显示全部 ({{count}}个国家/地区)",
          collapseCountries: "收起",
          cancel: "取消",
          customDomain: "自定义域名",
          customDomainTooltip: "设置 Workers 的自定义域名（可选）",
          socks5Relay: "启用 SOCKS5 中继",
          socks5RelayTooltip: "使用 Workers 中继 socks5 代理（可选）",
          socks5Proxy: "SOCKS5 代理",
          socks5ProxyTooltip:
            "SOCKS5 代理地址 用于代理 workers 访问 cloudflare cdn 网站（可选）",
          shareTexts: [
            "🚀 发现了一个超好用的 CF Worker 节点搭建工具！轻松部署你的专属节点，快来试试吧！",
            "💫 一键搭建 CF Worker 节点，再也不用复杂配置了！推荐给大家这个实用工具~",
            "⚡️ 想要快速搭建 CF Worker 节点？这个工具帮你轻松搞定！",
            "🔥 CF Worker 节点搭建神器，小白也能轻松上手！快来体验吧~",
            "✨ 分享一个超赞的工具：CF Worker 节点一键部署，省时又省力！"
          ],
          countries: {
            germany: "德国",
            netherlands: "荷兰",
            france: "法国",
            sweden: "瑞典",
            finland: "芬兰",
            poland: "波兰",
            uk: "英国",
            lithuania: "立陶宛",
            turkey: "土耳其",
            spain: "西班牙",
            switzerland: "瑞士",
            latvia: "拉脱维亚",
            denmark: "丹麦",
            romania: "罗马尼亚",
            austria: "奥地利",
            italy: "意大利",
            norway: "挪威",
            bulgaria: "保加利亚",
            estonia: "爱沙尼亚",
            russia: "俄罗斯",
            moldova: "摩尔多瓦",
            hungary: "匈牙利",
            ireland: "爱尔兰",
            ukraine: "乌克兰",
            czechia: "捷克",
            cyprus: "塞浦路斯",
            slovakia: "斯洛伐克",
            southKorea: "韩国",
            singapore: "新加坡",
            japan: "日本",
            hongKong: "香港",
            india: "印度",
            taiwan: "台湾",
            armenia: "亚美尼亚",
            thailand: "泰国",
            indonesia: "印度尼西亚",
            kazakhstan: "哈萨克斯坦",
            oman: "阿曼",
            israel: "以色列",
            usa: "美国",
            canada: "加拿大",
            australia: "澳大利亚",
            newZealand: "新西兰",
            brazil: "巴西",
            colombia: "哥伦比亚",
            argentina: "阿根廷"
          },
          // 账号管理
          selectAccount: "选择账号",
          addAccount: "添加账号",
          manage: "管理",
          addFirstAccount: "添加第一个账号",
          accountManagement: "账号管理",
          editAccount: "编辑账号",
          accountName: "账号名称",
          accountNameRequired: "请输入账号名称",
          accountNamePlaceholder: "为此账号输入一个友好的名称",
          emailRequired: "请输入邮箱",
          emailInvalid: "请输入有效的邮箱地址",
          emailPlaceholder: "Cloudflare 账号邮箱",
          globalAPIKeyRequired: "请输入 Global API Key",
          globalAPIKeyPlaceholder: "您的 Cloudflare Global API Key",
          accountId: "账号 ID（可选）",
          accountIdPlaceholder: "Cloudflare 账号 ID",
          tags: "标签",
          tagsPlaceholder: "添加标签来组织账号",
          notes: "备注",
          notesPlaceholder: "关于此账号的额外备注",
          account: "账号",
          status: "状态",
          created: "创建时间",
          actions: "操作",
          current: "当前",
          active: "活跃",
          inactive: "非活跃",
          setCurrent: "设为当前",
          edit: "编辑",
          delete: "删除",
          deleteAccountConfirm: "确定要删除此账号吗？",
          yes: "是",
          no: "否",
          totalAccounts: "共 {{count}} 个账号",
          accountSetAsCurrent: "账号已设为当前",
          pleaseSelectAccount: "请先选择一个账号",
          currentAccountDescription: "正在使用账号：",
          accountManagementDescription: "您可以使用上方的选择器管理您的账号。",
          noAccountSelected: "未选择账号。请添加并选择一个账号以继续。",
          // 批量部署
          bulkDeploy: "批量部署",
          bulkWorkerDeployment: "批量 Worker 部署",
          workerScript: "Worker 脚本",
          workerScriptRequired: "请输入 Worker 脚本",
          workerScriptPlaceholder: "在此输入您的 Worker 脚本...",
          targetAccounts: "目标账号",
          targetAccountsRequired: "请选择目标账号",
          selectTargetAccounts: "选择要部署到的账号",
          deploymentTargets: "部署目标",
          deploymentProgress: "部署进度",
          currentlyDeploying: "正在部署到",
          pending: "等待中",
          deploying: "部署中",
          startDeployment: "开始部署",
          viewWorker: "查看 Worker",
          deploymentTime: "部署时间",
          result: "结果",
          total: "总计",
          // 配置管理
          configManagement: "配置管理",
          exportConfig: "导出配置",
          exportConfigDescription: "将您的账号和设置导出为 JSON 文件，用于备份或迁移。",
          exportSecurityNote: "安全提示",
          exportSecurityDescription: "出于安全考虑，敏感数据（API 密钥）在导出文件中将标记为 [ENCRYPTED]。",
          exportNow: "立即导出",
          noAccountsToExport: "没有账号可导出",
          configExportSuccess: "配置导出成功",
          configExportFailed: "配置导出失败",
          importConfig: "导入配置",
          importConfigDescription: "从之前导出的 JSON 文件导入账号和设置。",
          clickOrDragToUpload: "点击或拖拽配置文件到此区域上传",
          supportJsonFiles: "仅支持 JSON 配置文件",
          configFileLoaded: "配置文件加载成功",
          configFileInvalid: "无效的配置文件",
          importPreview: "导入预览",
          configVersion: "版本",
          exportDate: "导出日期",
          accountsCount: "账号",
          importable: "可导入",
          settings: "设置",
          theme: "主题",
          language: "语言",
          formData: "表单数据",
          importWarning: "导入警告",
          importWarningDescription: "导入将添加新账号并覆盖当前设置。此操作无法撤销。",
          confirmImport: "确认导入",
          noValidAccountsToImport: "没有有效的账号可导入。请确保包含敏感数据。",
          configImportSuccess: "配置导入成功",
          configImportFailed: "配置导入失败",
          refreshPageTitle: "刷新页面",
          refreshPageContent: "要应用所有导入的设置，请刷新页面。",
          refresh: "刷新",
          later: "稍后",

          // 虚拟滚动和界面
          viewMode: "查看模式",
          table: "表格",
          virtualList: "虚拟列表",
          noAccountsFound: "未找到账号",

          // 快捷键
          openAccountManagement: "打开账号管理",
          openAccountManagementDesc: "管理您的 Cloudflare 账号",
          openBulkDeployment: "打开批量部署",
          openBulkDeploymentDesc: "将 Worker 部署到多个账号",
          openConfigManagement: "打开配置管理",
          openConfigManagementDesc: "导入/导出设置",
          toggleTheme: "切换主题",
          toggleThemeDesc: "在明亮和暗黑主题之间切换",
          toggleLanguage: "切换语言",
          toggleLanguageDesc: "在中英文之间切换",
          showShortcuts: "显示快捷键",
          showShortcutsDesc: "显示所有可用的快捷键",
          commandPalette: "命令面板",
          commandPaletteDesc: "快速访问所有操作",
          navigation: "导航",
          ui: "界面",
          help: "帮助",
          searchCommands: "搜索命令...",
          commandPaletteHint: "按 Esc 关闭，按 Enter 执行选中的命令",
          keyboardShortcuts: "键盘快捷键"
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
