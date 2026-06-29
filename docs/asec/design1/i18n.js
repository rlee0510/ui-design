const site = (document.currentScript && document.currentScript.dataset.site) || 'design1';
const cookieName = 'site_lang_' + site;
const defaultLang = 'zh_HK';

function mapLangParam(p){
  if(p === 'zh_HK') return 'zh_HK';
  if(p === 'zh_CN') return 'zh_CN';
  if(p === 'en') return 'en';
  return 'zh_HK';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

const translations = {
  'zh_HK': {
    // Navigation & Hero
    'nav.home': '主頁',
    'nav.about': '公司簡介',
    'nav.services': '服務範圍',
    'nav.contact': '聯繫我們',
    'hero.eyebrow': '香港企業一站式服務',
    'hero.title': '專業。可信賴。<br />全方位企業支援。',
    'hero.desc': 'A Secretarial Services Limited 為香港及離岸企業提供全面的商業支援服務，助您專注業務增長。',
    'btn.browse': '瀏覽服務',
    'btn.contact': '立即聯繫',

    // About
    'about.badge': '公司簡介',
    'about.title': '一站式企業服務，助力您的業務',
    'about.text': 'A Secretarial Services Limited 於香港提供一站式企業服務，服務範圍涵括會計、薪資、稅務、香港及離岸公司成立、公司秘書、證監會牌照申請、合規支援、盡職審查及企業技術支援方案。',
    'about.stats.services': '服務類別',
    'about.stats.hk': '香港本地專業',
    'about.stats.comprehensive': '全方位企業支援',

    // Services Section & General Layout Labels
    'services.badge': '服務範圍',
    'services.title': '我們提供的專業服務',
    'services.desc': '從公司成立到日常營運，我們為您的企業提供全面支援',
    'services.cta.text': '歡迎查詢各項服務詳情',
    'sidebar.cta-text': '歡迎查詢各項服務詳情',
    'cta.title': '準備好開始了嗎？',
    'cta.desc': '立即聯絡我們，了解最適合您企業的服務方案。',
    'cta.banner.title': '準備好開始了嗎？',
    'cta.banner.desc': '立即聯絡我們，了解最適合您企業的服務方案。',
    'cta.banner.btn': '立即查詢',

    // Service Badges
    'service.accounting.badge': '財務支援',
    'service.payroll.badge': '人力資源',
    'service.taxation.badge': '稅務規劃',
    'service.hk-incorporation.badge': '公司成立',
    'service.offshore-incorporation.badge': '公司成立',
    'service.registered-office.badge': '地址服務',
    'service.company-secretary.badge': '公司治理',
    'service.sfc-licensing.badge': '監管合規',
    'service.compliance.badge': '監管合規',
    'service.due-diligence.badge': '風險管理',
    'service.it-solutions.badge': '企業科技',

    // Service Cards & Titles
    'service.accounting.title': '會計',
    'service.accounting.desc': '我們為客戶提供全面的會計記賬服務，編制準確而及時的報告，以遵從財務報告規定。',
    'service.payroll.title': '薪資',
    'service.payroll.desc': '我們提供全面的人力資源管理服務，以確保能遵守相關法律及法規。',
    'service.taxation.title': '稅務',
    'service.taxation.desc': '我們為個人及公司客戶提供全面的稅務諮詢、稅務規劃及稅務申報。',
    'service.hk-incorporation.title': '香港公司成立',
    'service.hk-incorporation.desc': '我們提供全方位的在岸公司成立服務。',
    'service.offshore-incorporation.title': '離岸公司成立',
    'service.offshore-incorporation.desc': '我們提供全方位的離岸公司成立服務，協助客戶在海外司法管轄區建立業務架構。',
    'service.company-secretary.title': '公司秘書',
    'service.company-secretary.desc': '我們提供全方位的公司秘書服務，以簡化客戶的營運，讓客戶能夠專注於業務的發展及利潤。',
    'service.registered-office.title': '註冊辦事處',
    'service.registered-office.desc': '我們提供註冊辦事處服務，幫助客戶以最便捷的方式成功進駐當地市場。',
    'service.sfc-licensing.title': '證監會牌照申請',
    'service.sfc-licensing.desc': '我們成功為不少證監會持牌機構及其員工申請相關證監會牌照，提供專業的全程支援。',
    'service.compliance.title': '合規支援',
    'service.compliance.desc': '我們提供合規支援協助持牌機構及持牌人識別風險事項，以確保合規功能有效地運作。',
    'service.due-diligence.title': '盡職審查',
    'service.due-diligence.desc': '我們的專業團隊會為客戶提供盡職審查報告及建議，符合客戶的需要及期望，有效降低商業交易風險。',
    'service.it-solutions.title': '企業技術支援方案',
    'service.it-solutions.desc': '我們提供企業技術支援方案轉介服務，為客戶提供包括電腦硬件及軟件、檔案分享、資料轉移、備份、還原、移除、系統優化、網絡設計等服務。',
    'service.link': '了解更多 →',

    // Service Content Titles
    'service.accounting.content-title': '服務內容',
    'service.payroll.content-title': '服務內容',
    'service.hk-incorporation.content-title': '服務內容',
    'service.offshore-incorporation.content-title': '提供離岸公司成立的服務及文件',
    'service.registered-office.content-title': '服務內容',
    'service.company-secretary.content-title': '服務內容',
    'service.sfc-licensing.content-title': '服務內容',
    'service.compliance.content-title': '服務內容',
    'service.taxation.section1-title': '擬備及提交報稅表',
    'service.taxation.section2-title': '其他稅務服務',

    // Accounting Bullets
    'service.accounting.bullet1': '設計會計系統',
    'service.accounting.bullet2': '處理會計賬目及記錄',
    'service.accounting.bullet3': '定期編制管理賬目',
    'service.accounting.bullet4': '編制財務預算及現金流預測報告',
    'service.accounting.bullet5': '編制法定財務報表及相關科目明細',

    // Payroll Bullets
    'service.payroll.bullet1': '僱員薪酬計算',
    'service.payroll.bullet2': '僱員薪酬及退休金支薪及處理',
    'service.payroll.bullet3': '向僱員擬備工資單',
    'service.payroll.bullet4': '設置及維護工資數據庫及福利檔案',
    'service.payroll.bullet5': '填報顧主及顧員薪俸稅表',
    'service.payroll.bullet6': '顧主的強制性公積金（強積金）計劃登記',
    'service.payroll.bullet7': '員工費用報銷處理',

    // Taxation Section 1 Bullets
    'service.taxation.section1.bullet1': '薪俸稅',
    'service.taxation.section1.bullet2': '利得稅',
    'service.taxation.section1.bullet3': '物業稅',
    'service.taxation.section1.bullet4': '僱主報稅表',

    // Taxation Section 2 Bullets
    'service.taxation.section2.bullet1': '出任稅務代表',
    'service.taxation.section2.bullet2': '擬備利得稅計算表',
    'service.taxation.section2.bullet3': '申請報稅延期',
    'service.taxation.section2.bullet4': '處理稅務調查、實地審計',
    'service.taxation.section2.bullet5': '提供稅務計劃及諮詢',
    'service.taxation.section2.bullet6': '回覆稅務局提問',

    // HK Incorporation Bullets
    'service.hk-incorporation.bullet1': '成立有限公司',
    'service.hk-incorporation.bullet2': '成立海外附屬公司（分行、子公司、代表辦事處）',
    'service.hk-incorporation.bullet3': '成立合夥業務',
    'service.hk-incorporation.bullet4': '成立獨資經營業務',
    'service.hk-incorporation.bullet5': '成立香港公司辦事處',
    'service.hk-incorporation.bullet6': '協助開立銀行戶口',

    // Offshore Incorporation Bullets
    'service.offshore-incorporation.bullet1': '成立離岸公司',
    'service.offshore-incorporation.bullet2': '公司名稱查冊',
    'service.offshore-incorporation.bullet3': '準備及遞交文件',
    'service.offshore-incorporation.bullet4': '公司董事、股東及要員名冊',
    'service.offshore-incorporation.bullet5': '公司章程',
    'service.offshore-incorporation.bullet6': '公司股票簿',
    'service.offshore-incorporation.bullet7': '金屬鋼印及公司簽名章',
    'service.offshore-incorporation.bullet8': '公司註冊證書',
    'service.offshore-incorporation.bullet9': '公司文件盒 (綠盒)',

    // Registered Office Bullets
    'service.registered-office.bullet1': '提供香港商業地址以供客戶作為公司註冊辦事處',
    'service.registered-office.bullet2': '代收郵件',
    'service.registered-office.bullet3': '及時以電郵形式通知客戶收取郵件',
    'service.registered-office.bullet4': '快遞安排',

    // Company Secretary Bullets
    'service.company-secretary.bullet1': '出任公司秘書',
    'service.company-secretary.bullet2': '準備及提交周年申報表',
    'service.company-secretary.bullet3': '準備公司周年大會的會議紀錄',
    'service.company-secretary.bullet4': '為海外公司提供 "公司狀況良好證明書"',
    'service.company-secretary.bullet5': '為海外公司提供 "國際認證" 文件',
    'service.company-secretary.bullet6': '提供公司查冊',
    'service.company-secretary.bullet7': '提供更改 "公司詳情" 服務',
    'service.company-secretary.bullet7.nested1': '更改董事、股東或公司秘書',
    'service.company-secretary.bullet7.nested2': '更改／轉讓公司股份',
    'service.company-secretary.bullet7.nested3': '更改公司名稱',
    'service.company-secretary.bullet7.nested4': '更改公司註冊辦事處地址',
    'service.company-secretary.bullet7.nested5': '更改董事細節',
    'service.company-secretary.bullet8': '確保公司符合相關法律及法規',

    // SFC Licensing Bullets
    'service.sfc-licensing.bullet1': '評估持牌負責人員和代表的能力，及是否一個適當、適合的人選',
    'service.sfc-licensing.bullet2': '提供關於公司結構及商業計劃的意見',
    'service.sfc-licensing.bullet3': '準備及提交牌照申請表格',
    'service.sfc-licensing.bullet4': '與監管機構聯絡',
    'service.sfc-licensing.bullet5': '處理及回覆證監會書信提問',
    'service.sfc-licensing.bullet6': '牌照條件的談判',
    'service.sfc-licensing.bullet7': '編制牌照申請文件，其中包括審查和修改申請表格，協助準備申請牌照的合規手冊和其他所有必要的文件',
    'service.sfc-licensing.bullet8': '有需要時，負責與其他顧問聯絡，確保與牌照申請相關的法律、稅務和會計方面的問題都得到解決，擔任客戶與監管機構的中間聯繫人',

    // Compliance Bullets
    'service.compliance.bullet1': '為客戶設立公司合規系統',
    'service.compliance.bullet2': '審閱合規政策及程序',
    'service.compliance.bullet3': '處理監管機構的書信提問及向監管機構提交文件',
    'service.compliance.bullet4': '進行年度證監會現場模擬檢查報告及建議',
    'service.compliance.bullet5': '提供合規培訓',
    'service.compliance.bullet6': '特別合規咨詢及協助',

    // HTML Bodies for Panels (Traditional Chinese)
    'service.accounting.body': '<h3 class="svc-panel__section-title">服務內容</h3><ul class="svc-list"><li>設計會計系統</li><li>處理會計賬目及記錄</li><li>定期編制管理賬目</li><li>編制財務預算及現金流預測報告</li><li>編制法定財務報表及相關科目明細</li></ul>',
    'service.payroll.body': '<ul class="svc-list"><li>僱員薪酬計算</li><li>僱員薪酬及退休金支薪及處理</li><li>向僱員擬備工資單</li><li>設置及維護工資數據庫及福利檔案</li><li>填報僱主及僱員薪俸稅表</li><li>僱主的強制性公積金（強積金）計劃登記</li><li>員工費用報銷處理</li></ul>',
    'service.taxation.body': '<h3 class="svc-panel__section-title">擬備及提交報稅表</h3><ul class="svc-list"><li>薪俸稅</li><li>利得稅</li><li>物業稅</li><li>僱主報稅表</li></ul><h3 class="svc-panel__section-title">其他稅務服務</h3><ul class="svc-list"><li>出任稅務代表</li><li>擬備利得稅計算表</li><li>申請報稅延期</li><li>處理稅務調查、實地審計</li><li>提供稅務計劃及諮詢</li><li>回覆稅務局提問</li></ul>',
    'service.hk-incorporation.body': '<ul class="svc-list"><li>成立有限公司</li><li>成立海外附屬公司（分行、子公司、代表辦事處）</li><li>成立合夥業務</li><li>成立獨資經營業務</li><li>成立香港公司辦事處</li><li>協助開立銀行戶口</li></ul>',
    'service.offshore-incorporation.body': '<h3 class="svc-panel__section-title">提供離岸公司成立的服務及文件</h3><ul class="svc-list"><li>成立離岸公司</li><li>公司名稱查冊</li><li>準備及遞交文件</li><li>公司董事、股東及要員名冊</li><li>公司章程</li><li>公司股票簿</li><li>金屬鋼印及公司簽名章</li><li>公司註冊證書</li><li>公司文件盒 (綠盒)</li></ul>',
    'service.registered-office.body': '<ul class="svc-list"><li>提供香港商業地址以供客戶作為公司註冊辦事處</li><li>代收郵件</li><li>及時以電郵形式通知客戶收取郵件</li><li>快遞安排</li></ul>',
    'service.company-secretary.body': '<ul class="svc-list"><li>出任公司秘書</li><li>準備及提交周年申報表</li><li>準備公司周年大會的會議紀錄</li><li>為海外公司提供 "公司狀況良好證明書"</li><li>為海外公司提供 "國際認證" 文件</li><li>提供公司查冊</li><li>提供更改 "公司詳情" 服務<ul class="svc-list svc-list--nested"><li>更改董事、股東或公司秘書</li><li>更改／轉讓公司股份</li><li>更改公司名稱</li><li>更改公司註冊辦事處地址</li><li>更改董事細節</li></ul></li><li>確保公司符合相關法律及法規</li></ul>',
    'service.sfc-licensing.body': '<h3 class="svc-panel__section-title">服務內容</h3><ul class="svc-list"><li>評估持牌負責人員和代表的能力，及是否一個適當、適合的人選</li><li>提供關於公司結構及商業計劃的意見</li><li>準備及提交牌照申請表格</li><li>與監管機構聯絡</li><li>處理及回覆證監會書信提問</li><li>牌照條件的談判</li><li>編制牌照申請文件，其中包括審查和修改申請表格，協助準備申請牌照的合規手冊和其他所有必要的文件</li><li>有需要時，負責與其他顧問聯絡，確保與牌照申請相關的法律、稅務和會計方面的問題都得到解決，擔任客戶與監管機構的中間聯繫人</li></ul>',
    'service.compliance.body': '<h3 class="svc-panel__section-title">服務內容</h3><ul class="svc-list"><li>為客戶設立公司合規系統</li><li>審閱合規政策及程序</li><li>處理監管機構的書信提問及向監管機構提交文件</li><li>進行年度證監會現場模擬檢查報告及建議</li><li>提供合規培訓</li><li>特別合規咨詢及協助</li></ul>',

    // Contact
    'contact.badge': '聯繫我們',
    'contact.title': '與我們取得聯繫',
    'contact.desc': '我們的專業團隊隨時為您服務',
    'contact.company-name-label': '公司名稱',
    'contact.company-name': 'A Secretarial Services Limited',
    'contact.phone-label': '電話',
    'contact.fax-label': '傳真',
    'contact.fax': '(852) 3622 1488',
    'contact.email-label': '電郵',
    'contact.address-label': '地址',
    'contact.address': '香港灣仔晏頓街1號安定大廈7樓701室',

    // Map & Form
    'map.location': '我們的位置',
    'form.title': '發送查詢',
    'form.name': '姓名',
    'form.phone': '電話',
    'form.email': '電郵',
    'form.message': '查詢內容',
    'form.submit': '提交查詢',
    'form.name-placeholder': '您的姓名',
    'form.phone-placeholder': '(852) xxxx xxxx',
    'form.email-placeholder': 'your@email.com',
    'form.message-placeholder': '請簡述您的查詢或需求...',

    // Service navigation
    'service.inquire': '查詢此服務',
    'service.next-accounting': '會計服務 →',
    'service.next-payroll': '薪資服務 →',
    'service.next-taxation': '稅務服務 →',
    'service.next-hk-incorporation': '香港公司成立 →',
    'service.next-offshore-incorporation': '離岸公司成立 →',
    'service.next-company-secretary': '公司秘書 →',
    'service.next-registered-office': '註冊辦事處 →',
    'service.next-sfc-licensing': '證監會牌照申請 →',
    'service.next-compliance': '合規支援 →',
    'service.next-due-diligence': '盡職審查 →',
    'service.next-it-solutions': '企業技術支援 →',
    'service.next-return': '返回會計服務 →',

    // Footer
    'footer.tagline': '香港企業一站式服務',
    'footer.quick-links': '快速導覽',
    'footer.contact': '聯絡資料',
    'footer.copyright': 'Copyright 2023 A Secretarial Services Limited. All rights reserved.'
  },
  'zh_CN': {
    // Navigation & Hero
    'nav.home': '主页',
    'nav.about': '公司简介',
    'nav.services': '服务范围',
    'nav.contact': '联系我们',
    'hero.eyebrow': '香港企业一站式服务',
    'hero.title': '专业。可信赖。<br />全方位企业支援。',
    'hero.desc': 'A Secretarial Services Limited 为香港及离岸企业提供全面的商业支援服务，助您专注业务增长。',
    'btn.browse': '浏览服务',
    'btn.contact': '立即联系',

    // About
    'about.badge': '公司简介',
    'about.title': '一站式企业服务，助力您的业务',
    'about.text': 'A Secretarial Services Limited 在香港提供一站式企业服务，服务范围涵盖会计、薪资、税务、香港及离岸公司成立、公司秘书、证监会牌照申请、合规支援、尽职审查及企业技术支援方案。',
    'about.stats.services': '服务类别',
    'about.stats.hk': '香港本地专业',
    'about.stats.comprehensive': '全方位企业支援',

    // Services Section & General Layout Labels
    'services.badge': '服务范围',
    'services.title': '我们提供的专业服务',
    'services.desc': '从公司成立到日常营运，我们为您的企业提供全面支援',
    'services.cta.text': '欢迎查询各项服务详情',
    'sidebar.cta-text': '欢迎查询各项服务详情',
    'cta.title': '准备好开始了吗？',
    'cta.desc': '立即联络我们，了解最适合您企业的服务方案。',
    'cta.banner.title': '准备好开始了吗？',
    'cta.banner.desc': '立即联络我们，了解最适合您企业的服务方案。',
    'cta.banner.btn': '立即查询',

    // Service Badges
    'service.accounting.badge': '财务支援',
    'service.payroll.badge': '人力资源',
    'service.taxation.badge': '税务规划',
    'service.hk-incorporation.badge': '公司成立',
    'service.offshore-incorporation.badge': '公司成立',
    'service.registered-office.badge': '地址服务',
    'service.company-secretary.badge': '公司治理',
    'service.sfc-licensing.badge': '监管合规',
    'service.compliance.badge': '监管合规',
    'service.due-diligence.badge': '风险管理',
    'service.it-solutions.badge': '企业科技',

    // Service Cards & Titles
    'service.accounting.title': '会计',
    'service.accounting.desc': '我们为客户提供全面的会计记账服务，编制准确而及时的报告，以遵从财务报告规定。',
    'service.payroll.title': '薪资',
    'service.payroll.desc': '我们提供全面的人力资源管理服务，以确保能遵守相关法律及法规。',
    'service.taxation.title': '税务',
    'service.taxation.desc': '我们为个人及公司客户提供全面的税务咨询、税务规划及税务申报。',
    'service.hk-incorporation.title': '香港公司成立',
    'service.hk-incorporation.desc': '我们提供全方位的在岸公司成立服务。',
    'service.offshore-incorporation.title': '离岸公司成立',
    'service.offshore-incorporation.desc': '我们提供全方位的离岸公司成立服务，协助客户在海外司法管辖区建立业务架构。',
    'service.company-secretary.title': '公司秘书',
    'service.company-secretary.desc': '我们提供全方位的公司秘书服务，以简化客户的营运，让客户能够专注于业务的发展及利润。',
    'service.registered-office.title': '注册办事处',
    'service.registered-office.desc': '我们提供注册办事处服务，帮助客户以最便捷的方式成功进驻当地市场。',
    'service.sfc-licensing.title': '证监会牌照申请',
    'service.sfc-licensing.desc': '我们成功为不少证监会持牌机构及其员工申请相关证监会牌照，提供专业的全程支援。',
    'service.compliance.title': '合规支援',
    'service.compliance.desc': '我们提供合规支援协助持牌机构及持牌人识别风险事项，以确保合规功能有效地运作。',
    'service.due-diligence.title': '尽职审查',
    'service.due-diligence.desc': '我们的专业团队会为客户提供尽职审查报告及建议，符合客户的需要及期望，有效降低商业交易风险。',
    'service.it-solutions.title': '企业技术支援方案',
    'service.it-solutions.desc': '我们提供企业技术支援方案转介服务，为客户提供包括电脑硬件及软件、档案分享、资料转移、备份、还原、移除、系统优化、网络设计等服务。',
    'service.link': '了解更多 →',

    // Service Content Titles
    'service.accounting.content-title': '服务内容',
    'service.payroll.content-title': '服务内容',
    'service.hk-incorporation.content-title': '服务内容',
    'service.offshore-incorporation.content-title': '提供离岸公司成立的服务及文件',
    'service.registered-office.content-title': '服务内容',
    'service.company-secretary.content-title': '服务内容',
    'service.sfc-licensing.content-title': '服务内容',
    'service.compliance.content-title': '服务内容',
    'service.taxation.section1-title': '拟备及提交报税表',
    'service.taxation.section2-title': '其他税务服务',

    // Accounting Bullets
    'service.accounting.bullet1': '设计会计系统',
    'service.accounting.bullet2': '处理会计账目及记录',
    'service.accounting.bullet3': '定期编制管理账目',
    'service.accounting.bullet4': '编制财务预算及现金流预测报告',
    'service.accounting.bullet5': '编制法定财务报表及相关科目明细',

    // Payroll Bullets
    'service.payroll.bullet1': '雇员薪酬计算',
    'service.payroll.bullet2': '雇员薪酬及退休金支薪及处理',
    'service.payroll.bullet3': '向雇员拟备工资单',
    'service.payroll.bullet4': '设置及维护工资数据库及福利档案',
    'service.payroll.bullet5': '填报雇主及雇员薪俸税表',
    'service.payroll.bullet6': '雇主的强制性公积金（强积金）计划登记',
    'service.payroll.bullet7': '员工费用报销处理',

    // Taxation Section 1 Bullets
    'service.taxation.section1.bullet1': '薪俸税',
    'service.taxation.section1.bullet2': '利得税',
    'service.taxation.section1.bullet3': '物业税',
    'service.taxation.section1.bullet4': '雇主报税表',

    // Taxation Section 2 Bullets
    'service.taxation.section2.bullet1': '出任税务代表',
    'service.taxation.section2.bullet2': '拟备利得税计算表',
    'service.taxation.section2.bullet3': '申请报税延期',
    'service.taxation.section2.bullet4': '处理税务调查、实地审计',
    'service.taxation.section2.bullet5': '提供税务计划及咨询',
    'service.taxation.section2.bullet6': '回复税务局提问',

    // HK Incorporation Bullets
    'service.hk-incorporation.bullet1': '成立有限公司',
    'service.hk-incorporation.bullet2': '成立海外附属公司（分行、子公司、代表办事处）',
    'service.hk-incorporation.bullet3': '成立合伙业务',
    'service.hk-incorporation.bullet4': '成立独资经营业务',
    'service.hk-incorporation.bullet5': '成立香港公司办事处',
    'service.hk-incorporation.bullet6': '协助开立银行户口',

    // Offshore Incorporation Bullets
    'service.offshore-incorporation.bullet1': '成立离岸公司',
    'service.offshore-incorporation.bullet2': '公司名称查册',
    'service.offshore-incorporation.bullet3': '准备及递交文件',
    'service.offshore-incorporation.bullet4': '公司董事、股东及要员名册',
    'service.offshore-incorporation.bullet5': '公司章程',
    'service.offshore-incorporation.bullet6': '公司股票簿',
    'service.offshore-incorporation.bullet7': '金属钢印及公司签名章',
    'service.offshore-incorporation.bullet8': '公司注册证书',
    'service.offshore-incorporation.bullet9': '公司文件盒 (绿盒)',

    // Registered Office Bullets
    'service.registered-office.bullet1': '提供香港商业地址以供客户作为公司注册办事处',
    'service.registered-office.bullet2': '代收邮件',
    'service.registered-office.bullet3': '及时以电邮形式通知客户收取邮件',
    'service.registered-office.bullet4': '快递安排',

    // Company Secretary Bullets
    'service.company-secretary.bullet1': '出任公司秘书',
    'service.company-secretary.bullet2': '准备及提交周年申报表',
    'service.company-secretary.bullet3': '准备公司周年大会的会议纪录',
    'service.company-secretary.bullet4': '为海外公司提供 "公司状况良好证书"',
    'service.company-secretary.bullet5': '为海外公司提供 "国际认证" 文件',
    'service.company-secretary.bullet6': '提供公司查册',
    'service.company-secretary.bullet7': '提供更改 "公司详情" 服务',
    'service.company-secretary.bullet7.nested1': '更改董事、股东或公司秘书',
    'service.company-secretary.bullet7.nested2': '更改／转让公司股份',
    'service.company-secretary.bullet7.nested3': '更改公司名称',
    'service.company-secretary.bullet7.nested4': '更改公司注册办事处地址',
    'service.company-secretary.bullet7.nested5': '更改董事细节',
    'service.company-secretary.bullet8': '确保公司符合相关法律及法规',

    // SFC Licensing Bullets
    'service.sfc-licensing.bullet1': '评估持牌负责人员和代表的能力，及是否一个适当、适合的人选',
    'service.sfc-licensing.bullet2': '提供关于公司结构及商业计划的意见',
    'service.sfc-licensing.bullet3': '准备及提交牌照申请表格',
    'service.sfc-licensing.bullet4': '与监管机构联络',
    'service.sfc-licensing.bullet5': '处理及回复证监会书信提问',
    'service.sfc-licensing.bullet6': '牌照条件的谈判',
    'service.sfc-licensing.bullet7': '编制牌照申请文件，其中包括审查和修改申请表格，协助准备申请牌照的合规手册和其他所有必要的文件',
    'service.sfc-licensing.bullet8': '有需要时，负责与其他顾问联络，确保与牌照申请相关的法律、税务和会计方面的问题都得到解决，担任客户与监管机构中间的联系人',

    // Compliance Bullets
    'service.compliance.bullet1': '为客户设立公司合规系统',
    'service.compliance.bullet2': '审阅合规政策及程序',
    'service.compliance.bullet3': '处理监管机构的书信提问及向监管机构提交文件',
    'service.compliance.bullet4': '进行年度证监会现场模拟检查报告及建议',
    'service.compliance.bullet5': '提供合规培训',
    'service.compliance.bullet6': '特别合规咨询及协助',

    // HTML Bodies for Panels (Simplified Chinese)
    'service.accounting.body': '<h3 class="svc-panel__section-title">服务内容</h3><ul class="svc-list"><li>设计会计系统</li><li>处理会计账目及记录</li><li>定期编制管理账目</li><li>编制财务预算及现金流预测报告</li><li>编制法定财务报表及相关科目明细</li></ul>',
    'service.payroll.body': '<ul class="svc-list"><li>雇员薪酬计算</li><li>雇员薪酬及退休金支薪及处理</li><li>向雇员拟备工资单</li><li>设置及维护工资数据库及福利档案</li><li>填报雇主及雇员薪俸税表</li><li>雇主的强制性公积金（强积金）计划登记</li><li>员工费用报销处理</li></ul>',
    'service.taxation.body': '<h3 class="svc-panel__section-title">拟备及提交报税表</h3><ul class="svc-list"><li>薪俸税</li><li>利得税</li><li>物业税</li><li>雇主报税表</li></ul><h3 class="svc-panel__section-title">其他税务服务</h3><ul class="svc-list"><li>出任税务代表</li><li>拟备利得税计算表</li><li>申请报税延期</li><li>处理税务调查、实地审计</li><li>提供税务计划及咨询</li><li>回复税务局提问</li></ul>',
    'service.hk-incorporation.body': '<ul class="svc-list"><li>成立有限公司</li><li>成立海外附属公司（分行、子公司、代表办事处）</li><li>成立合伙业务</li><li>成立独资经营业务</li><li>成立香港公司办事处</li><li>协助开立银行户口</li></ul>',
    'service.offshore-incorporation.body': '<h3 class="svc-panel__section-title">提供离岸公司成立的服务及文件</h3><ul class="svc-list"><li>成立离岸公司</li><li>公司名称查册</li><li>准备及递交文件</li><li>公司董事、股东及要员名册</li><li>公司章程</li><li>公司股票簿</li><li>金属钢印及公司签名章</li><li>公司注册证书</li><li>公司文件盒 (绿盒)</li></ul>',
    'service.registered-office.body': '<ul class="svc-list"><li>提供香港商业地址以供客户作为公司注册办事处</li><li>代收邮件</li><li>及时以电邮形式通知客户收取邮件</li><li>快递安排</li></ul>',
    'service.company-secretary.body': '<ul class="svc-list"><li>出任公司秘书</li><li>准备及提交周年申报表</li><li>准备公司周年大会的会议纪录</li><li>为海外公司提供 "公司状况良好证书"</li><li>为海外公司提供 "国际认证" 文件</li><li>提供公司查册</li><li>提供更改 "公司详情" 服务<ul class="svc-list svc-list--nested"><li>更改董事、股东或公司秘书</li><li>更改／转让公司股份</li><li>更改公司名称</li><li>更改公司注册办事处地址</li><li>更改董事细节</li></ul></li><li>确保公司符合相关法律及法规</li></ul>',
    'service.sfc-licensing.body': '<h3 class="svc-panel__section-title">服务内容</h3><ul class="svc-list"><li>评估持牌负责人员和代表的能力，及是否一个适当、适合的人选</li><li>提供关于公司结构及商业计划的意见</li><li>准备及提交牌照申请表格</li><li>与监管机构联络</li><li>处理及回复证监会书信提问</li><li>牌照条件的谈判</li><li>编制牌照申请文件，其中包括审查和修改申请表格，协助准备申请牌照的合规手册和其他所有必要的文件</li><li>有需要时，负责与其他顾问联络，确保与牌照申请相关的法律、税务和会计方面的问题都得到解决，担任客户与监管机构中间的联系人</li></ul>',
    'service.compliance.body': '<h3 class="svc-panel__section-title">服务内容</h3><ul class="svc-list"><li>为客户设立公司合规系统</li><li>审阅合规政策及程序</li><li>处理监管机构的书信提问及向监管机构提交文件</li><li>进行年度证监会现场模拟检查报告及建议</li><li>提供合规培训</li><li>特别合规咨询及协助</li></ul>',

    // Contact
    'contact.badge': '联系我们',
    'contact.title': '与我们取得联系',
    'contact.desc': '我们的专业团队随时为您服务',
    'contact.company-name-label': '公司名称',
    'contact.company-name': 'A Secretarial Services Limited',
    'contact.phone-label': '电话',
    'contact.fax-label': '传真',
    'contact.fax': '(852) 3622 1488',
    'contact.email-label': '电邮',
    'contact.address-label': '地址',
    'contact.address': '香港湾仔晏顿街1号安定大厦7楼701室',

    // Map & Form
    'map.location': '我们的位置',
    'form.title': '发送查询',
    'form.name': '姓名',
    'form.phone': '电话',
    'form.email': '电邮',
    'form.message': '查询内容',
    'form.submit': '提交查询',
    'form.name-placeholder': '您的姓名',
    'form.phone-placeholder': '(852) xxxx xxxx',
    'form.email-placeholder': 'your@email.com',
    'form.message-placeholder': '请简述您的查询或需求...',

    // Service navigation
    'service.inquire': '查询此服务',
    'service.next-accounting': '会计服务 →',
    'service.next-payroll': '薪资服务 →',
    'service.next-taxation': '税务服务 →',
    'service.next-hk-incorporation': '香港公司成立 →',
    'service.next-offshore-incorporation': '离岸公司成立 →',
    'service.next-company-secretary': '公司秘书 →',
    'service.next-registered-office': '注册办事处 →',
    'service.next-sfc-licensing': '证监会牌照申请 →',
    'service.next-compliance': '合规支援 →',
    'service.next-due-diligence': '尽职审查 →',
    'service.next-it-solutions': '企业技术支援 →',
    'service.next-return': '返回会计服务 →',

    // Footer
    'footer.tagline': '香港企业一站式服务',
    'footer.quick-links': '快速导航',
    'footer.contact': '联络资料',
    'footer.copyright': 'Copyright 2023 A Secretarial Services Limited. All rights reserved.'
  },
  'en': {
    // Navigation & Hero
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'One-stop corporate services in Hong Kong',
    'hero.title': 'Professional. Trustworthy.<br />Comprehensive corporate support.',
    'hero.desc': 'A Secretarial Services Limited provides full business support for Hong Kong and offshore companies so you can focus on growth.',
    'btn.browse': 'Browse services',
    'btn.contact': 'Contact us',

    // About
    'about.badge': 'About',
    'about.title': 'One-stop corporate services to power your business',
    'about.text': 'A Secretarial Services Limited offers a wide range of corporate services in Hong Kong. Our services including Accounting, Payroll, Taxation, Hong Kong Company Incorporation, Offshore Company Incorporation, Company Secretary, Registered Office, SFC Licensing, Compliance Support, Due Diligence and Corporate IT Solutions.',
    'about.stats.services': 'Service Categories',
    'about.stats.hk': 'Hong Kong Local Services',
    'about.stats.comprehensive': 'Comprehensive Business Support',

    // Services Section & General Layout Labels
    'services.badge': 'Services',
    'services.title': 'Our professional services',
    'services.desc': 'From incorporation to daily operations, we provide comprehensive support for your business',
    'services.cta.text': 'Welcome to inquire about our services details',
    'sidebar.cta-text': 'Welcome to inquire about our services details',
    'cta.title': 'Ready to get started?',
    'cta.desc': 'Contact us today to find the best solutions for your business.',
    'cta.banner.title': 'Ready to get started?',
    'cta.banner.desc': 'Contact us today to find the best solutions for your business.',
    'cta.banner.btn': 'Inquire Now',

    // Service Badges
    'service.accounting.badge': 'Financial Support',
    'service.payroll.badge': 'Human Resources',
    'service.taxation.badge': 'Tax Planning',
    'service.hk-incorporation.badge': 'Company Incorporation',
    'service.offshore-incorporation.badge': 'Company Incorporation',
    'service.registered-office.badge': 'Address Services',
    'service.company-secretary.badge': 'Corporate Governance',
    'service.sfc-licensing.badge': 'Regulatory Compliance',
    'service.compliance.badge': 'Regulatory Compliance',
    'service.due-diligence.badge': 'Risk Management',
    'service.it-solutions.badge': 'Corporate Technology',

    // Service Cards & Titles
    'service.accounting.title': 'Accounting',
    'service.accounting.desc': 'We offer comprehensive accounting and bookkeeping services to companies who wish to outsource their accounting function. We assist you in preparing accurate and timely reports to comply with the reporting requirements.',
    'service.payroll.title': 'Payroll',
    'service.payroll.desc': 'We offer comprehensive HR services to meet compliance requirements under relevant laws and regulations.',
    'service.taxation.title': 'Taxation',
    'service.taxation.desc': 'We provide comprehensive tax consulting, tax planning and tax filing services for individual and corporate clients.',
    'service.hk-incorporation.title': 'Hong Kong Company Incorporation',
    'service.hk-incorporation.desc': 'We provide a full spectrum of onshore company formation services.',
    'service.offshore-incorporation.title': 'Offshore Company Incorporation',
    'service.offshore-incorporation.desc': 'We provide a full spectrum of offshore company formation services.',
    'service.company-secretary.title': 'Company Secretary',
    'service.company-secretary.desc': 'We provide a full range of company secretary services to simplify your operations and give you more time to grow your business and your profits.',
    'service.registered-office.title': 'Registered Office',
    'service.registered-office.desc': 'We offer registered address services to provide your business with local presence, and with total convenience for you.',
    'service.sfc-licensing.title': 'SFC Licensing',
    'service.sfc-licensing.desc': 'We have handled numerous license applications for SFC licensed corporations and their employees to obtain necessary SFC license.',
    'service.compliance.title': 'Compliance Support',
    'service.compliance.desc': 'We provide compliance support to assist licensed firms and licensed individuals to identify risk matters to ensure compliance function is effective.',
    'service.due-diligence.title': 'Due Diligence',
    'service.due-diligence.desc': 'Our team of professionals will provide you with due diligence report and advice focusing on the specific needs of clients.',
    'service.it-solutions.title': 'Corporate IT Solutions',
    'service.it-solutions.desc': 'We provide corporate IT solutions referral services, including Hardware & Software, File Sharing, IT Applications Downtime, Data Migration, Data Backup, Data Recovery, Data Erasure, System Enhancement, Network Design and etc.',
    'service.link': 'Learn more →',

    // Service Content Titles
    'service.accounting.content-title': 'Scope of Services',
    'service.payroll.content-title': 'Scope of Services',
    'service.hk-incorporation.content-title': 'Scope of Services',
    'service.offshore-incorporation.content-title': 'Services and Documents Provided for Offshore Company Incorporation',
    'service.registered-office.content-title': 'Scope of Services',
    'service.company-secretary.content-title': 'Scope of Services',
    'service.sfc-licensing.content-title': 'Scope of Services',
    'service.compliance.content-title': 'Scope of Services',
    'service.taxation.section1-title': 'Preparation and Filing Tax Return with IRD',
    'service.taxation.section2-title': 'Other Tax Services',

    // Accounting Bullets
    'service.accounting.bullet1': 'Design of accounting system',
    'service.accounting.bullet2': 'Maintaining accounting books and records',
    'service.accounting.bullet3': 'Preparing periodic management accounts',
    'service.accounting.bullet4': 'Preparing budgets and cashflow projections for management purpose',
    'service.accounting.bullet5': 'Preparing statutory financial statements and relevant supporting schedules',

    // Payroll Bullets
    'service.payroll.bullet1': 'Payroll calculation',
    'service.payroll.bullet2': 'Salary and provident fund contribution payment processing',
    'service.payroll.bullet3': 'Preparation of employees\' pay slips',
    'service.payroll.bullet4': 'Maintenance of payroll database and benefit files',
    'service.payroll.bullet5': 'Preparation of employers and employees salaries tax returns',
    'service.payroll.bullet6': 'Employer registration for mandatory provident fund (MPF) scheme',
    'service.payroll.bullet7': 'Processing of employee expense reimbursements',

    // Taxation Section 1 Bullets
    'service.taxation.section1.bullet1': 'Salaries Tax',
    'service.taxation.section1.bullet2': 'Profits Tax',
    'service.taxation.section1.bullet3': 'Property Tax',
    'service.taxation.section1.bullet4': 'Employer\'s Annual Return',

    // Taxation Section 2 Bullets
    'service.taxation.section2.bullet1': 'Acting as tax representative',
    'service.taxation.section2.bullet2': 'Preparation of profits tax computation',
    'service.taxation.section2.bullet3': 'Applying extension for tax returns filing',
    'service.taxation.section2.bullet4': 'Assisting in tax investigation and field audit',
    'service.taxation.section2.bullet5': 'Provision of tax planning and consultation',
    'service.taxation.section2.bullet6': 'Handling IRD enquiries',

    // HK Incorporation Bullets
    'service.hk-incorporation.bullet1': 'Registration of private limited companies',
    'service.hk-incorporation.bullet2': 'Registration of a foreign company (branch office, subsidiary, representative office)',
    'service.hk-incorporation.bullet3': 'Registration of partnerships',
    'service.hk-incorporation.bullet4': 'Registration of sole proprietorships',
    'service.hk-incorporation.bullet5': 'Establishment of Hong Kong office',
    'service.hk-incorporation.bullet6': 'Assisting in the opening of bank accounts',

    // Offshore Incorporation Bullets
    'service.offshore-incorporation.bullet1': 'Setting up offshore company',
    'service.offshore-incorporation.bullet2': 'Company names search',
    'service.offshore-incorporation.bullet3': 'Document preparation',
    'service.offshore-incorporation.bullet4': 'Register of shareholders, directors and members',
    'service.offshore-incorporation.bullet5': 'Memorandum & Articles of Association',
    'service.offshore-incorporation.bullet6': 'Share certificates book',
    'service.offshore-incorporation.bullet7': 'One common seal and rubber chop',
    'service.offshore-incorporation.bullet8': 'Certificate of incorporation',
    'service.offshore-incorporation.bullet9': 'Company kit box',

    // Company Secretary Bullets
    'service.company-secretary.bullet1': 'Acting as Company Secretary',
    'service.company-secretary.bullet2': 'Preparing and filing Annual Return',
    'service.company-secretary.bullet3': 'Preparing minutes for Annual General Meeting',
    'service.company-secretary.bullet4': 'Preparing Certificate of Goodstanding',
    'service.company-secretary.bullet5': 'Preparing Apostille of Documents',
    'service.company-secretary.bullet6': 'Providing company searches',
    'service.company-secretary.bullet7': 'Available to below "Change of Company Particulars" services:',
    'service.company-secretary.bullet7.nested1': 'Change of Director, Shareholder or Company Secretary',
    'service.company-secretary.bullet7.nested2': 'Transfer and Allotment of Shares',
    'service.company-secretary.bullet7.nested3': 'Change of Company Name',
    'service.company-secretary.bullet7.nested4': 'Change of Registered Office Address',
    'service.company-secretary.bullet7.nested5': 'Change of Director Particulars',
    'service.company-secretary.bullet8': 'Ensuring companies comply with relevant laws and regulations',

    // Registered Office Bullets
    'service.registered-office.bullet1': 'Providing Hong Kong commercial address for registration purpose',
    'service.registered-office.bullet2': 'Receiving of mails and parcels',
    'service.registered-office.bullet3': 'Notifying by email',
    'service.registered-office.bullet4': 'Courier arrangement',

    // SFC Licensing Bullets
    'service.sfc-licensing.bullet1': 'Assessing competence, fit and proper criteria of responsible offices and representative',
    'service.sfc-licensing.bullet2': 'Advising on corporate structure and business plan',
    'service.sfc-licensing.bullet3': 'Preparing and submitting licensing applications',
    'service.sfc-licensing.bullet4': 'Liaising with SFC case officers',
    'service.sfc-licensing.bullet5': 'Handling SFC correspondences and requisitions',
    'service.sfc-licensing.bullet6': 'Negotiating licensing conditions',
    'service.sfc-licensing.bullet7': 'Preparing compliance manuals and other necessary documents for license application',
    'service.sfc-licensing.bullet8': 'Liaising with other advisers if necessary to ensure that the important legal, tax and accounting issues related to the applications are addressed',

    // Compliance Bullets
    'service.compliance.bullet1': 'Setting up the compliance system',
    'service.compliance.bullet2': 'Reviewing compliance policies and procedures',
    'service.compliance.bullet3': 'Handling correspondence and filings with regulator',
    'service.compliance.bullet4': 'Conducting annually on-site SFC mock inspection with report and recommendations',
    'service.compliance.bullet5': 'Providing compliance training',
    'service.compliance.bullet6': 'Ad hoc compliance advice and assistance',

    // HTML Bodies for Panels (English)
    'service.accounting.body': '<h3 class="svc-panel__section-title">Scope of Services</h3><ul class="svc-list"><li>Design of accounting system</li><li>Maintaining accounting books and records</li><li>Preparing periodic management accounts</li><li>Preparing budgets and cashflow projections for management purpose</li><li>Preparing statutory financial statements and relevant supporting schedules</li></ul>',
    'service.payroll.body': '<ul class="svc-list"><li>Payroll calculation</li><li>Salary and provident fund contribution payment processing</li><li>Preparation of employees\' pay slips</li><li>Maintenance of payroll database and benefit files</li><li>Preparation of employers and employees salaries tax returns</li><li>Employer registration for mandatory provident fund (MPF) scheme</li><li>Processing of employee expense reimbursements</li></ul>',
    'service.taxation.body': '<h3 class="svc-panel__section-title">Preparation and Filing Tax Return with IRD</h3><ul class="svc-list"><li>Salaries Tax</li><li>Profits Tax</li><li>Property Tax</li><li>Employer\'s Annual Return</li></ul><h3 class="svc-panel__section-title">Other Tax Services</h3><ul class="svc-list"><li>Acting as tax representative</li><li>Preparation of profits tax computation</li><li>Applying extension for tax returns filing</li><li>Assisting in tax investigation and field audit</li><li>Provision of tax planning and consultation</li><li>Handling IRD enquiries</li></ul>',
    'service.hk-incorporation.body': '<ul class="svc-list"><li>Registration of private limited companies</li><li>Registration of a foreign company (branch office, subsidiary, representative office)</li><li>Registration of partnerships</li><li>Registration of sole proprietorships</li><li>Establishment of Hong Kong office</li><li>Assisting in the opening of bank accounts</li></ul>',
    'service.offshore-incorporation.body': '<h3 class="svc-panel__section-title">Services and Documents Provided for Offshore Company Incorporation</h3><ul class="svc-list"><li>Setting up offshore company</li><li>Company names search</li><li>Document preparation</li><li>Register of shareholders, directors and members</li><li>Memorandum & Articles of Association</li><li>Share certificates book</li><li>One common seal and rubber chop</li><li>Certificate of incorporation</li><li>Company kit box</li></ul>',
    'service.registered-office.body': '<ul class="svc-list"><li>Providing Hong Kong commercial address for registration purpose</li><li>Receiving of mails and parcels</li><li>Notifying by email</li><li>Courier arrangement</li></ul>',
    'service.company-secretary.body': '<ul class="svc-list"><li>Acting as company secretary</li><li>Preparation and submission of Annual Returns</li><li>Preparation of minutes for Annual General Meetings</li><li>Providing "Certificate of Good Standing" for offshore companies</li><li>Providing "Apostille/Notarization" documents for offshore companies</li><li>Provision of company searches</li><li>Provision of services for changing "Company Particulars"<ul class="svc-list svc-list--nested"><li>Change of directors, shareholders, or company secretary</li><li>Change / Transfer of company shares</li><li>Change of company name</li><li>Change of company registered office address</li><li>Change of directors\' particulars</li></ul></li><li>Ensuring company compliance with relevant laws and regulations</li></ul>',
    'service.sfc-licensing.body': '<h3 class="svc-panel__section-title">Scope of Services</h3><ul class="svc-list"><li>Assessing the competence of Responsible Officers and Representatives, and whether they are fit and proper persons</li><li>Providing advice on corporate structure and business plans</li><li>Preparation and submission of licensing application forms</li><li>Liaising with regulatory bodies</li><li>Handling and responding to SFC correspondence and enquiries</li><li>Negotiation of licensing conditions</li><li>Compiling licensing application documents, including reviewing and amending application forms, assisting in the preparation of compliance manuals and all other necessary documents for the license application</li><li>When necessary, liaising with other consultants to ensure that legal, tax, and accounting matters related to the license application are resolved, acting as an intermediary contact between the client and the regulatory body</li></ul>',
    'service.compliance.body': '<h3 class="svc-panel__section-title">Scope of Services</h3><ul class="svc-list"><li>Establishing corporate compliance systems for clients</li><li>Reviewing compliance policies and procedures</li><li>Handling regulatory correspondence, enquiries, and submitting documents to regulatory authorities</li><li>Conducting annual mock SFC on-site inspections, providing reports and recommendations</li><li>Providing compliance training</li><li>Special compliance advisory and assistance</li></ul>',

    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'Get in touch with us',
    'contact.desc': 'Our professional team is ready to serve you',
    'contact.company-name-label': 'Company Name',
    'contact.company-name': 'A Secretarial Services Limited',
    'contact.phone-label': 'Phone',
    'contact.fax-label': 'Fax',
    'contact.fax': '(852) 3622 1488',
    'contact.email-label': 'Email',
    'contact.address-label': 'Address',
    'contact.address': 'Room 701, 7/F, Anton Building, 1 Anton Street, Wan Chai, Hong Kong',

    // Map & Form
    'map.location': 'Our Location',
    'form.title': 'Send Inquiry',
    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Submit Inquiry',
    'form.name-placeholder': 'Your Name',
    'form.phone-placeholder': '(852) xxxx xxxx',
    'form.email-placeholder': 'your@email.com',
    'form.message-placeholder': 'Please briefly describe your inquiry or requirements...',

    // Service navigation
    'service.inquire': 'Inquire about this service',
    'service.next-accounting': 'Accounting Services →',
    'service.next-payroll': 'Payroll Services →',
    'service.next-taxation': 'Taxation Services →',
    'service.next-hk-incorporation': 'HK Company Incorporation →',
    'service.next-offshore-incorporation': 'Offshore Company Incorporation →',
    'service.next-company-secretary': 'Company Secretary →',
    'service.next-registered-office': 'Registered Office →',
    'service.next-sfc-licensing': 'SFC Licensing →',
    'service.next-compliance': 'Compliance Support →',
    'service.next-due-diligence': 'Due Diligence →',
    'service.next-it-solutions': 'Corporate IT Solutions →',
    'service.next-return': 'Return to Accounting →',

    // Footer
    'footer.tagline': 'One-stop corporate services in Hong Kong',
    'footer.quick-links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': 'Copyright 2023 A Secretarial Services Limited. All rights reserved.'
  }
};

document.addEventListener('languageChange', (e)=>{
  applyTranslations(getLanguage());
});

function applyTranslations(lang){
  const dict = translations[lang] || translations[defaultLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
  document.documentElement.lang = lang;

  const googleMapIframe = document.querySelector('#map');
  if (googleMapIframe != null) {
    const url = new URL(googleMapIframe.src);
    if (lang === 'zh_HK') {
      url.searchParams.set('hl', 'zh-HK');
    }
    else if (lang === 'zh_CN') {
      url.searchParams.set('hl', 'zh-CN');
    }
    else{
      url.searchParams.set('hl', 'en');
    }
    googleMapIframe.src = url.toString();
  }
}

function getLanguage() {
  const urlParams = new URLSearchParams(location.search);
  return mapLangParam(urlParams.get('lang'));
}

function getLabel(key) {
  return translations[getLanguage()][key];
}

function init(){
  const toggle = document.getElementById('langToggle');
  const menu = document.getElementById('langMenu');
  const menuItems = menu ? menu.querySelectorAll('a') : [];
  const langSelect = document.getElementById('langSelect');
  const lang = getLanguage();
  const saved = lang || getCookie(cookieName) || defaultLang;

  function setLanguage(langCode, urlParam){
    if (langCode){
      setCookie(cookieName, langCode, 365); // Store for 1 year
      const url = new URL(location.href);
      url.searchParams.set('lang', urlParam || langCode);
      history.replaceState({}, '', url.toString());
      applyTranslations(langCode);

      // Dispatch custom event to let other internal layout scripts sync dynamically
      window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: langCode } }));
    }
  }

  if (toggle){
    toggle.addEventListener('click', ()=>{
      const isOpen = !menu.hasAttribute('hidden');
      if (isOpen){
        menu.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        menu.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  if (menu){
    menuItems.forEach(item => {
      item.addEventListener('click', (e)=>{
        e.preventDefault();
        const href = item.getAttribute('href');
        const langMatch = href.match(/lang=([^&]+)/);
        if (langMatch){
          const langCode = mapLangParam(langMatch[1]);
          setLanguage(langCode, langMatch[1]);
          if (toggle) toggle.click();
        }
      });
    });

    document.addEventListener('click', (e)=>{
      if (toggle && menu && !toggle.contains(e.target) && !menu.contains(e.target)){
        menu.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (langSelect) {
    langSelect.addEventListener('change', ()=>{
      const langCode = langSelect.value;
      const urlParam = langCode === 'en' ? 'en' : langCode === 'zh_CN' ? 'zh_CN' : 'zh_HK';
      setLanguage(langCode, urlParam);
    });
  }

  applyTranslations(saved);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
