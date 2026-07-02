const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'downloads');

function addCover(doc, title, subtitle, zhTitle, zhSubtitle) {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
  
  doc.save();
  doc.translate(80, 180);
  doc.fillColor('#BD7A2C');
  doc.fontSize(14);
  doc.text('HUAHAO SEALING', 0, 0);
  doc.moveTo(0, 25).lineTo(60, 25).stroke('#BD7A2C');
  doc.restore();

  doc.save();
  doc.translate(80, 250);
  doc.fillColor('#ffffff');
  doc.fontSize(36);
  doc.text(title, 0, 0, { width: 450, lineGap: 10 });
  doc.fontSize(16);
  doc.fillColor('#94a3b8');
  doc.text(subtitle, 0, 80, { width: 450, lineGap: 8 });
  doc.restore();

  if (zhTitle) {
    doc.save();
    doc.translate(80, 380);
    doc.fillColor('#BD7A2C');
    doc.fontSize(20);
    doc.text(zhTitle, 0, 0);
    if (zhSubtitle) {
      doc.fontSize(12);
      doc.fillColor('#64748b');
      doc.text(zhSubtitle, 0, 35);
    }
    doc.restore();
  }

  doc.save();
  doc.translate(80, doc.page.height - 100);
  doc.fillColor('#475569');
  doc.fontSize(10);
  doc.text('Huahao Sealing Co., Ltd.');
  doc.text('Professional Carbon Graphite Sealing Solutions');
  doc.text('V2.0 | 2026');
  doc.restore();

  doc.addPage();
}

function addPageHeader(doc, title, pageNum, totalPages) {
  doc.save();
  doc.fillColor('#0f172a');
  doc.fontSize(14);
  doc.text(title, 60, 40);
  doc.moveTo(60, 60).lineTo(doc.page.width - 60, 60).stroke('#e2e8f0');
  doc.fillColor('#94a3b8');
  doc.fontSize(9);
  doc.text(`${pageNum} / ${totalPages}`, doc.page.width - 100, 40, { width: 80, align: 'right' });
  doc.restore();
}

function addTableOfContents(doc, items) {
  doc.save();
  doc.fillColor('#0f172a');
  doc.fontSize(20);
  doc.text('目录 / Table of Contents', 60, 80);
  doc.moveTo(60, 110).lineTo(doc.page.width - 60, 110).stroke('#e2e8f0');

  let y = 140;
  items.forEach((item, i) => {
    doc.fillColor('#334155');
    doc.fontSize(12);
    doc.text(`${i + 1}. ${item}`, 80, y);
    y += 30;
  });

  doc.restore();
  doc.addPage();
}

function addSectionTitle(doc, title, y) {
  doc.save();
  doc.fillColor('#0f172a');
  doc.fontSize(16);
  doc.text(title, 60, y);
  doc.moveTo(60, y + 24).lineTo(doc.page.width - 60, y + 24).stroke('#BD7A2C');
  doc.lineWidth(2);
  doc.moveTo(60, y + 25).lineTo(120, y + 25).stroke('#BD7A2C');
  doc.lineWidth(1);
  doc.restore();
  return y + 45;
}

function addBulletList(doc, items, x, y, indent = 20) {
  const lineHeight = 22;
  items.forEach(item => {
    doc.save();
    doc.fillColor('#BD7A2C');
    doc.circle(x + 5, y + 7, 3).fill();
    doc.fillColor('#334155');
    doc.fontSize(11);
    doc.text(item, x + indent, y, { width: doc.page.width - x - indent - 60, lineGap: 6 });
    const h = doc.heightOfString(item, { width: doc.page.width - x - indent - 60, lineGap: 6 });
    y += Math.max(lineHeight, h + 10);
    doc.restore();
  });
  return y;
}

function addTable(doc, headers, rows, x, y, colWidths) {
  const rowHeight = 28;
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);

  doc.save();
  doc.fillColor('#0f172a');
  let cx = x;
  headers.forEach((h, i) => {
    doc.rect(cx, y, colWidths[i], rowHeight).fill('#0f172a');
    doc.fillColor('#ffffff');
    doc.fontSize(10);
    doc.text(h, cx + 10, y + 9, { width: colWidths[i] - 20, align: 'left' });
    cx += colWidths[i];
  });

  rows.forEach((row, ri) => {
    const yPos = y + rowHeight * (ri + 1);
    doc.fillColor(ri % 2 === 0 ? '#f8fafc' : '#ffffff');
    let cx2 = x;
    headers.forEach((_, hi) => {
      doc.rect(cx2, yPos, colWidths[hi], rowHeight).stroke('#e2e8f0');
      cx2 += colWidths[hi];
    });
    doc.fillColor('#334155');
    let cx3 = x;
    row.forEach((cell, ci) => {
      doc.fontSize(9.5);
      doc.text(cell, cx3 + 10, yPos + 9, { width: colWidths[ci] - 20, align: 'left' });
      cx3 += colWidths[ci];
    });
  });
  doc.restore();

  return y + rowHeight * (rows.length + 1) + 15;
}

function generateProductCatalog() {
  const doc = new PDFDocument({ size: 'A4', margin: 0 });
  const stream = fs.createWriteStream(path.join(OUTPUT_DIR, 'huahao-product-catalog.pdf'));
  doc.pipe(stream);

  const totalPages = 8;

  addCover(doc, 'Product Catalog', 'Carbon Graphite Sealing Solutions', '产品电子样本', '碳石墨密封产品目录');

  addPageHeader(doc, '目录 / Contents', 2, totalPages);
  addTableOfContents(doc, [
    '公司简介 / Company Introduction',
    '产品分类 / Product Categories',
    '碳石墨密封环 / Carbon Graphite Seal Rings',
    '碳石墨轴套/轴承 / Carbon Graphite Bushings',
    '碳石墨三瓣环 / Segmented Split Rings',
    '应用领域 / Applications',
    '技术参数 / Technical Specifications',
    '联系方式 / Contact Information',
  ]);

  let y;

  addPageHeader(doc, '公司简介 / Company Introduction', 3, totalPages);
  y = addSectionTitle(doc, '关于华豪密封 / About Huahao Sealing', 80);
  doc.fillColor('#334155');
  doc.fontSize(11);
  doc.text(
    '霍邱县华豪密封件有限公司是一家专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环的制造企业。公司拥有20多年的行业经验，采用先进的CNC加工中心和精密检测设备，为全球客户提供高品质的碳石墨密封解决方案。',
    60, y, { width: 470, lineGap: 8 }
  );
  y += 80;

  y = addSectionTitle(doc, '企业实力 / Company Strength', y);
  addBulletList(doc, [
    '20+ 年行业经验',
    '20+ 专业技术团队',
    '10+ 出口国家，产品远销欧美、东南亚',
    '4丝高精度加工能力',
    'ISO9001质量管理体系认证',
    '24小时技术响应支持',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '产品分类 / Product Categories', 4, totalPages);
  y = addSectionTitle(doc, '主要产品 / Main Products', 80);

  doc.fontSize(12);
  doc.fillColor('#0f172a');
  doc.text('01 碳石墨密封环 / Carbon Graphite Seal Rings', 60, y);
  doc.fillColor('#64748b');
  doc.fontSize(10);
  doc.text('适用于离心泵、化工泵、海水泵和通用机械密封，具备自润滑、耐高温、耐腐蚀特性。', 60, y + 20, { width: 470 });
  y += 55;

  doc.fontSize(12);
  doc.fillColor('#0f172a');
  doc.text('02 碳石墨轴套/轴承 / Carbon Graphite Bushings', 60, y);
  doc.fillColor('#64748b');
  doc.fontSize(10);
  doc.text('自润滑、耐腐蚀，适用于潜水泵、船舶、搅拌器和重载旋转设备，显著降低轴磨损。', 60, y + 20, { width: 470 });
  y += 55;

  doc.fontSize(12);
  doc.fillColor('#0f172a');
  doc.text('03 碳石墨三瓣环 / Segmented Split Rings', 60, y);
  doc.fillColor('#64748b');
  doc.fontSize(10);
  doc.text('适合封闭腔体安装，可在不拆轴条件下维护和替换，大大降低维护成本。', 60, y + 20, { width: 470 });
  y += 55;

  doc.fontSize(12);
  doc.fillColor('#0f172a');
  doc.text('04 定制加工 / Custom Machining', 60, y);
  doc.fillColor('#64748b');
  doc.fontSize(10);
  doc.text('提供图纸定制服务，支持非标产品开发，满足特殊工况需求。', 60, y + 20, { width: 470 });

  doc.addPage();
  addPageHeader(doc, '碳石墨密封环 / Seal Rings', 5, totalPages);
  y = addSectionTitle(doc, '产品规格表 / Specifications', 80);

  const sealHeaders = ['型号 / Model', '材质 / Material', '密度 (g/cm³)', '硬度 / Shore', '应用 / Application'];
  const sealRows = [
    ['HS-S100', '浸渍石墨', '1.75-1.85', '85-90', '离心泵、清水泵'],
    ['HS-S200', '树脂浸渍', '1.80-1.90', '88-92', '化工泵、耐腐蚀'],
    ['HS-S300', '金属浸渍', '2.00-2.10', '90-95', '高温工况'],
    ['HS-S400', '抗氧化石墨', '1.70-1.80', '82-88', '高温冶金'],
    ['HS-S500', '高纯石墨', '1.65-1.75', '80-85', '半导体、真空'],
  ];
  y = addTable(doc, sealHeaders, sealRows, 60, y, [70, 75, 80, 75, 170]);

  y += 10;
  y = addSectionTitle(doc, '特点与优势 / Features & Advantages', y);
  addBulletList(doc, [
    '优异的自润滑性能，无需外部润滑',
    '耐温范围广，长期使用可达300°C',
    '化学稳定性好，耐酸碱腐蚀',
    '摩擦系数低，减少轴套磨损',
    '尺寸精度高，可达±0.02mm',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '碳石墨轴套/轴承 / Bushings', 6, totalPages);
  y = addSectionTitle(doc, '产品规格表 / Specifications', 80);

  const bushHeaders = ['型号 / Model', '内径范围 (mm)', '长度范围 (mm)', '适用线速度', '应用 / Application'];
  const bushRows = [
    ['HS-B100', '10 - 200', '10 - 300', '≤ 15 m/s', '潜水泵、船舶'],
    ['HS-B200', '20 - 400', '20 - 400', '≤ 20 m/s', '化工流程泵'],
    ['HS-B300', '50 - 500', '30 - 500', '≤ 25 m/s', '重载旋转设备'],
    ['HS-B400', '30 - 300', '20 - 350', '≤ 10 m/s', '食品制药机械'],
  ];
  y = addTable(doc, bushHeaders, bushRows, 60, y, [70, 90, 90, 80, 140]);

  y += 10;
  y = addSectionTitle(doc, '技术特点 / Technical Features', y);
  addBulletList(doc, [
    '自润滑运行，免维护设计',
    '优异的耐磨损性能',
    '适用于无油润滑工况',
    '抗热冲击性能良好',
    '可根据工况定制材料配方',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '应用领域 / Applications', 7, totalPages);
  y = addSectionTitle(doc, '主要应用行业 / Major Industries', 80);

  const apps = [
    { name: '泵行业 / Pumps', desc: '离心泵、化工泵、潜水泵、污水泵、油泵' },
    { name: '船舶海洋 / Marine', desc: '艉轴密封、海水泵、舵轴承、侧推器' },
    { name: '化工制药 / Chemical & Pharma', desc: '反应釜、工艺泵、酸液泵、搅拌器' },
    { name: '电力能源 / Power & Energy', desc: '循环水泵、汽轮机、供热泵、核电辅泵' },
    { name: '食品制药 / Food & Pharma', desc: '搅拌设备、输送泵、灌装机、均质机' },
    { name: '冶金矿山 / Metallurgy', desc: '渣浆泵、轧机、除尘风机、选矿设备' },
  ];

  apps.forEach((app, i) => {
    doc.save();
    doc.fillColor('#BD7A2C');
    doc.rect(60, y, 4, 20).fill();
    doc.fillColor('#0f172a');
    doc.fontSize(12);
    doc.text(app.name, 75, y + 2);
    doc.fillColor('#64748b');
    doc.fontSize(10);
    doc.text(app.desc, 75, y + 20, { width: 400 });
    doc.restore();
    y += 45;
  });

  doc.addPage();
  addPageHeader(doc, '联系方式 / Contact', 8, totalPages);

  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#f8fafc');
  doc.restore();

  doc.save();
  doc.translate(60, 100);
  doc.fillColor('#0f172a');
  doc.fontSize(24);
  doc.text('联系我们 / Contact Us');
  doc.moveTo(0, 35).lineTo(80, 35).stroke('#BD7A2C');
  doc.restore();

  y = 180;
  const contacts = [
    { label: '公司名称', value: '霍邱县华豪密封件有限公司' },
    { label: 'Company Name', value: 'Huahao Sealing Co., Ltd.' },
    { label: '地址', value: '安徽省六安市霍邱县' },
    { label: 'Address', value: 'Huoqiu, Lu\'an, Anhui, China' },
    { label: '邮箱 / Email', value: 'info@huahao-sealing.com' },
    { label: '电话 / Tel', value: '+86 xxx xxxx xxxx' },
    { label: 'WhatsApp', value: '+86 xxx xxxx xxxx' },
    { label: '网站 / Website', value: 'www.huahao-sealing.com' },
  ];

  contacts.forEach(c => {
    doc.save();
    doc.fillColor('#64748b');
    doc.fontSize(10);
    doc.text(c.label, 60, y);
    doc.fillColor('#0f172a');
    doc.fontSize(12);
    doc.text(c.value, 160, y - 1);
    doc.restore();
    y += 28;
  });

  doc.save();
  doc.translate(60, y + 40);
  doc.fillColor('#BD7A2C');
  doc.fontSize(14);
  doc.text('专业 · 精密 · 可靠');
  doc.fontSize(12);
  doc.fillColor('#64748b');
  doc.text('Professional · Precision · Reliable', 0, 22);
  doc.restore();

  doc.end();
  return new Promise(resolve => stream.on('finish', resolve));
}

function generateTechnicalManual() {
  const doc = new PDFDocument({ size: 'A4', margin: 0 });
  const stream = fs.createWriteStream(path.join(OUTPUT_DIR, 'huahao-technical-manual.pdf'));
  doc.pipe(stream);

  const totalPages = 10;

  addCover(doc, 'Technical Manual', 'Carbon Graphite Sealing Solutions', '技术参数手册', '规格参数 · 安装指南 · 维护说明');

  addPageHeader(doc, '目录 / Contents', 2, totalPages);
  addTableOfContents(doc, [
    '材料规格 / Material Specifications',
    '材料牌号对照表 / Material Grade Comparison',
    '材料选型指南 / Material Selection Guide',
    '设计标准 / Design Standards',
    '安装指南 / Installation Guide',
    '密封环安装步骤 / Seal Ring Installation',
    '维护保养 / Maintenance',
    '常见故障诊断 / Troubleshooting',
    '图纸规范 / Drawing Standards',
    '定制需求说明 / Custom Requirements',
  ]);

  let y;

  addPageHeader(doc, '材料规格 / Material Specifications', 3, totalPages);
  y = addSectionTitle(doc, '碳石墨材料特性 / Carbon Graphite Properties', 80);

  const matHeaders = ['性能 / Property', '单位 / Unit', 'HS-100', 'HS-200', 'HS-300'];
  const matRows = [
    ['密度 / Density', 'g/cm³', '1.75-1.85', '1.80-1.90', '2.00-2.10'],
    ['硬度 / Hardness', 'Shore', '85-90', '88-92', '90-95'],
    ['抗压强度 / Compressive', 'MPa', '80-100', '100-130', '150-180'],
    ['抗弯强度 / Flexural', 'MPa', '30-40', '40-55', '60-75'],
    ['热膨胀系数 / CTE', '10⁻⁶/°C', '2.5-3.5', '3.0-4.0', '4.0-5.0'],
    ['最高使用温度', '°C', '300', '350', '500'],
    ['摩擦系数 / Friction', '-', '0.08-0.15', '0.05-0.12', '0.04-0.10'],
  ];
  y = addTable(doc, matHeaders, matRows, 60, y, [120, 70, 75, 75, 75]);

  y += 10;
  y = addSectionTitle(doc, '化学兼容性 / Chemical Compatibility', y);
  addBulletList(doc, [
    '优异耐酸性能（除强氧化性酸外）',
    '良好耐碱性能',
    '耐大多数有机溶剂',
    '适用于海水、盐水环境',
    '不耐强氧化性介质（如浓硝酸、浓硫酸高温）',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '材料选型指南 / Material Selection', 4, totalPages);
  y = addSectionTitle(doc, '选型决策流程 / Selection Process', 80);
  addBulletList(doc, [
    '1. 确定工作温度范围',
    '2. 分析接触介质的腐蚀性',
    '3. 计算PV值（压力×线速度）',
    '4. 考虑环境条件（干湿、有无润滑）',
    '5. 匹配材料牌号并验证',
  ], 60, y);

  y += 40;
  y = addSectionTitle(doc, '工况与材料推荐 / Recommendations', y);
  const selHeaders = ['工况类型', '温度', '压力', '推荐材料'];
  const selRows = [
    ['清水/一般介质', '<100°C', '<5 MPa', 'HS-100 树脂浸渍'],
    ['化工腐蚀介质', '<150°C', '<10 MPa', 'HS-200 树脂浸渍'],
    ['高温工况', '<500°C', '<8 MPa', 'HS-300 金属浸渍'],
    ['干摩擦/无润滑', '<300°C', '<3 MPa', 'HS-100 自润滑'],
    ['食品/制药', '<150°C', '<5 MPa', 'HS-200 食品级'],
  ];
  y = addTable(doc, selHeaders, selRows, 60, y, [110, 80, 80, 150]);

  doc.addPage();
  addPageHeader(doc, '安装指南 / Installation Guide', 5, totalPages);
  y = addSectionTitle(doc, '安装前准备 / Preparation', 80);
  addBulletList(doc, [
    '检查产品规格型号是否与图纸一致',
    '检查密封件表面有无损伤、裂纹',
    '准备安装工具（压套、导向套等）',
    '清洁安装腔体，去除毛刺和杂质',
    '检查轴或腔体的尺寸公差',
  ], 60, y);

  y += 50;
  y = addSectionTitle(doc, '密封环安装步骤 / Seal Ring Installation', y);
  const steps = [
    '将密封环放入烘箱预热至80-100°C（视材质而定）',
    '用酒精或丙酮清洁安装配合面',
    '使用导向套和压套将密封环平稳压入座孔',
    '确保安装到位，无倾斜和偏载',
    '冷却至室温后检查内径尺寸和端面跳动',
    '注意：禁止直接敲击密封面',
  ];
  addBulletList(doc, steps, 60, y);

  doc.addPage();
  addPageHeader(doc, '轴套安装 / Bushing Installation', 6, totalPages);
  y = addSectionTitle(doc, '轴套安装步骤 / Bushing Installation Steps', 80);
  const bushSteps = [
    '测量轴径和轴套内孔，确认过盈量',
    '选择热装或冷装方式（推荐热装）',
    '热装温度：120-180°C，根据过盈量调整',
    '加热后快速、平稳地将轴套装入指定位置',
    '冷却后检查轴套内径和位置',
    '确保轴套端面与轴肩贴合',
  ];
  addBulletList(doc, bushSteps, 60, y);

  y += 50;
  y = addSectionTitle(doc, '安装注意事项 / Cautions', y);
  addBulletList(doc, [
    '禁止使用铁锤直接敲击碳石墨件',
    '安装时应使用铜锤或压套、导向套',
    '热装温度不可超过材料允许的最高温度',
    '确保配合面清洁无杂质',
    '安装后进行跑合运转，逐步加载',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '维护保养 / Maintenance', 7, totalPages);
  y = addSectionTitle(doc, '日常检查项目 / Daily Inspection', 80);
  addBulletList(doc, [
    '检查密封泄漏量是否正常',
    '监测介质温度和压力',
    '检查振动和噪音情况',
    '检查润滑系统（如有）',
    '记录运行参数变化',
  ], 60, y);

  y += 50;
  y = addSectionTitle(doc, '常见故障诊断 / Troubleshooting', y);
  const faultHeaders = ['故障现象', '可能原因', '解决方法'];
  const faultRows = [
    ['泄漏量大', '安装不当', '重新安装，检查对中'],
    ['泄漏量大', '密封面磨损', '更换密封件'],
    ['异常噪音', '干摩擦', '改善润滑条件'],
    ['振动大', '轴套磨损', '更换轴套，检查对中'],
    ['寿命短', '选型不当', '重新选型，升级材质'],
  ];
  y = addTable(doc, faultHeaders, faultRows, 60, y, [100, 120, 200]);

  doc.addPage();
  addPageHeader(doc, '更换周期建议 / Replacement', 8, totalPages);
  y = addSectionTitle(doc, '更换周期参考 / Replacement Schedule', 80);
  const repHeaders = ['应用场景', '建议更换周期', '检查频率'];
  const repRows = [
    ['一般清水泵', '2-3年', '每6个月'],
    ['化工腐蚀性介质', '1-2年', '每3个月'],
    ['高温工况', '1年', '每2个月'],
    ['干摩擦工况', '6-12个月', '每月'],
    ['食品/制药', '1.5-2年', '每6个月'],
  ];
  y = addTable(doc, repHeaders, repRows, 60, y, [120, 120, 180]);

  y += 10;
  y = addSectionTitle(doc, '使用寿命影响因素 / Life Factors', y);
  addBulletList(doc, [
    'PV值（压力×线速度）越高，寿命越短',
    '介质腐蚀性越强，寿命越短',
    '有润滑工况寿命显著长于干摩擦',
    '对中精度直接影响密封寿命',
    '定期维护可延长使用寿命',
  ], 60, y);

  doc.addPage();
  addPageHeader(doc, '图纸规范 / Drawing Standards', 9, totalPages);
  y = addSectionTitle(doc, '必需标注信息 / Required Annotations', 80);
  addBulletList(doc, [
    '内径（ID）及公差',
    '外径（OD）及公差',
    '总长度（L）及公差',
    '端面垂直度要求',
    '表面粗糙度要求',
    '材料牌号',
    '技术要求（如浸渍类型）',
  ], 60, y);

  y += 60;
  y = addSectionTitle(doc, '公差标准 / Tolerance Standards', y);
  const tolHeaders = ['尺寸范围 (mm)', '一般公差', '精密级', '高精度级'];
  const tolRows = [
    ['≤ 50', '±0.05', '±0.03', '±0.02'],
    ['50 - 100', '±0.08', '±0.05', '±0.03'],
    ['100 - 200', '±0.12', '±0.08', '±0.05'],
    ['200 - 300', '±0.15', '±0.10', '±0.06'],
    ['> 300', '±0.20', '±0.15', '±0.10'],
  ];
  y = addTable(doc, tolHeaders, tolRows, 60, y, [110, 90, 90, 110]);

  doc.addPage();
  addPageHeader(doc, '定制需求 / Custom Requirements', 10, totalPages);

  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#f8fafc');
  doc.restore();

  doc.save();
  doc.translate(60, 100);
  doc.fillColor('#0f172a');
  doc.fontSize(22);
  doc.text('定制服务 / Custom Service');
  doc.moveTo(0, 35).lineTo(80, 35).stroke('#BD7A2C');
  doc.restore();

  y = 170;
  doc.save();
  doc.fillColor('#334155');
  doc.fontSize(11);
  doc.text('我们提供全面的定制服务，支持按图加工、按样加工和按需求开发。', 60, y, { width: 470, lineGap: 8 });
  doc.restore();

  y += 50;
  y = addSectionTitle(doc, '定制流程 / Customization Process', y);
  const processSteps = [
    '客户提供图纸或样品及工况信息',
    '工程师评审方案和报价',
    '确认技术协议和商务条款',
    '样品制作与测试（如需）',
    '批量生产与质量检测',
    '包装出货与售后支持',
  ];
  addBulletList(doc, processSteps, 60, y);

  y += 80;
  doc.save();
  doc.fillColor('#64748b');
  doc.fontSize(10);
  doc.text('技术支持邮箱 / Technical Support:', 60, y);
  doc.fillColor('#0f172a');
  doc.fontSize(12);
  doc.text('engineer@huahao-sealing.com', 220, y - 1);
  doc.restore();

  doc.end();
  return new Promise(resolve => stream.on('finish', resolve));
}

function generateDrawingTemplate() {
  const doc = new PDFDocument({ size: 'A4', margin: 0 });
  const stream = fs.createWriteStream(path.join(OUTPUT_DIR, 'huahao-drawing-template.pdf'));
  doc.pipe(stream);

  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#ffffff');

  doc.save();
  doc.translate(60, 40);
  doc.fillColor('#0f172a');
  doc.fontSize(18);
  doc.text('碳石墨密封件定制图纸模板');
  doc.fontSize(10);
  doc.fillColor('#64748b');
  doc.text('Carbon Graphite Seal Custom Drawing Template', 0, 25);
  doc.restore();

  doc.save();
  doc.strokeColor('#334155');
  doc.lineWidth(0.5);
  doc.rect(50, 70, 495, 650).stroke();
  doc.rect(50, 690, 495, 80).stroke();
  doc.restore();

  doc.save();
  doc.translate(70, 90);
  doc.fillColor('#0f172a');
  doc.fontSize(12);
  doc.text('零件名称 / Part Name: ___________________________');
  doc.text('图号 / Drawing No.: ___________________________', 270, 0);
  doc.text('数量 / Quantity: __________', 0, 25);
  doc.text('材料 / Material: __________', 270, 25);
  doc.restore();

  doc.save();
  doc.strokeColor('#94a3b8');
  doc.lineWidth(0.3);
  doc.dash(2, 2);
  doc.rect(70, 140, 250, 200).stroke();
  doc.undash();
  doc.fillColor('#94a3b8');
  doc.fontSize(10);
  doc.text('主视图 / Front View', 160, 350, { width: 100, align: 'center' });
  doc.restore();

  doc.save();
  doc.strokeColor('#94a3b8');
  doc.lineWidth(0.3);
  doc.dash(2, 2);
  doc.rect(350, 140, 170, 200).stroke();
  doc.undash();
  doc.fillColor('#94a3b8');
  doc.fontSize(10);
  doc.text('侧视图 / Side View', 400, 350, { width: 100, align: 'center' });
  doc.restore();

  doc.save();
  doc.translate(70, 380);
  doc.fillColor('#0f172a');
  doc.fontSize(11);
  doc.text('主要尺寸 / Key Dimensions:');
  doc.fontSize(10);
  doc.fillColor('#334155');
  const dims = [
    '内径 ID (d): ______ mm  公差: ______',
    '外径 OD (D): ______ mm  公差: ______',
    '长度 L: ______ mm  公差: ______',
    '壁厚: ______ mm',
    '端面跳动: ______ mm',
    '表面粗糙度 Ra: ______ μm',
  ];
  dims.forEach((d, i) => {
    doc.text(d, 10, 25 + i * 22);
  });
  doc.restore();

  doc.save();
  doc.translate(70, 550);
  doc.fillColor('#0f172a');
  doc.fontSize(11);
  doc.text('技术要求 / Technical Requirements:');
  doc.fontSize(10);
  doc.fillColor('#334155');
  const reqs = [
    '1. 材料牌号: _________________',
    '2. 浸渍类型: □ 树脂  □ 金属  □ 抗氧化  □ 其他______',
    '3. 最高使用温度: ______ °C',
    '4. 工作介质: _________________',
    '5. 其他要求: _________________',
  ];
  reqs.forEach((r, i) => {
    doc.text(r, 10, 25 + i * 22);
  });
  doc.restore();

  doc.save();
  doc.translate(60, 700);
  doc.fontSize(9);
  doc.fillColor('#64748b');
  doc.text('设计 / Designed: ____________', 20, 15);
  doc.text('审核 / Checked: ____________', 180, 15);
  doc.text('批准 / Approved: ____________', 340, 15);
  doc.text('日期 / Date: ____________', 480, 15);
  doc.restore();

  doc.save();
  doc.translate(60, 745);
  doc.fillColor('#BD7A2C');
  doc.fontSize(9);
  doc.text('华豪密封 · 专业碳石墨密封件制造商');
  doc.fillColor('#94a3b8');
  doc.text('Huahao Sealing · Carbon Graphite Seal Expert', 0, 12);
  doc.restore();

  doc.end();
  return new Promise(resolve => stream.on('finish', resolve));
}

async function main() {
  console.log('Generating product catalog...');
  await generateProductCatalog();
  console.log('✓ Product catalog generated');

  console.log('Generating technical manual...');
  await generateTechnicalManual();
  console.log('✓ Technical manual generated');

  console.log('Generating drawing template...');
  await generateDrawingTemplate();
  console.log('✓ Drawing template generated');

  console.log('\nAll files generated successfully in:', OUTPUT_DIR);
  const files = fs.readdirSync(OUTPUT_DIR);
  files.forEach(f => {
    const size = fs.statSync(path.join(OUTPUT_DIR, f)).size;
    console.log(`  - ${f} (${(size / 1024).toFixed(1)} KB)`);
  });
}

main().catch(console.error);
