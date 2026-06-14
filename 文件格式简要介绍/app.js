const formats = [
  { ext: ".txt", type: "文本文档", desc: "纯文本文件，不包含复杂样式，适合记录日志、说明和简单数据。" },
  { ext: ".md", type: "文本文档", desc: "Markdown 文档，使用轻量标记语法编写标题、列表、链接和代码块。" },
  { ext: ".rtf", type: "文本文档", desc: "富文本格式，可保存字体、字号、颜色等基本排版信息。" },
  { ext: ".doc", type: "办公文档", desc: "旧版 Microsoft Word 文档格式，常见于早期办公文件。" },
  { ext: ".docx", type: "办公文档", desc: "新版 Word 文档格式，基于 Office Open XML，适合文字排版和协作。" },
  { ext: ".odt", type: "办公文档", desc: "OpenDocument 文本文档，常见于 LibreOffice、OpenOffice 等办公套件。" },
  { ext: ".pdf", type: "版式文档", desc: "便携式文档格式，强调跨平台显示一致性，常用于论文、合同和报告。" },
  { ext: ".epub", type: "电子书", desc: "开放电子书格式，支持可重排文本，常用于电子阅读器。" },
  { ext: ".mobi", type: "电子书", desc: "早期 Kindle 常用电子书格式，现已逐渐被 EPUB 等格式替代。" },
  { ext: ".azw3", type: "电子书", desc: "Kindle 电子书格式，支持较复杂的排版和元数据。" },
  { ext: ".xls", type: "电子表格", desc: "旧版 Excel 表格格式，常用于存储表格数据和公式。" },
  { ext: ".xlsx", type: "电子表格", desc: "新版 Excel 表格格式，基于 Office Open XML，支持工作表、公式和图表。" },
  { ext: ".ods", type: "电子表格", desc: "OpenDocument 表格格式，常见于 LibreOffice Calc。" },
  { ext: ".csv", type: "数据表格", desc: "逗号分隔值文件，结构简单，适合跨软件交换表格数据。" },
  { ext: ".tsv", type: "数据表格", desc: "制表符分隔值文件，适合字段中可能包含逗号的数据表。" },
  { ext: ".ppt", type: "演示文稿", desc: "旧版 PowerPoint 演示文稿格式。" },
  { ext: ".pptx", type: "演示文稿", desc: "新版 PowerPoint 演示文稿格式，支持幻灯片、动画、图表和多媒体。" },
  { ext: ".odp", type: "演示文稿", desc: "OpenDocument 演示文稿格式，常见于 LibreOffice Impress。" },
  { ext: ".jpg / .jpeg", type: "图片", desc: "有损压缩图片格式，适合照片和网页图片。" },
  { ext: ".png", type: "图片", desc: "无损压缩图片格式，支持透明背景，适合图标、截图和界面素材。" },
  { ext: ".gif", type: "图片", desc: "支持简单动画和有限颜色，常用于短循环动画。" },
  { ext: ".bmp", type: "图片", desc: "位图格式，通常不压缩，文件体积较大。" },
  { ext: ".webp", type: "图片", desc: "Web 图片格式，支持有损、无损和透明通道，压缩效率较高。" },
  { ext: ".tif / .tiff", type: "图片", desc: "高质量图像格式，常用于扫描、出版和影像归档。" },
  { ext: ".svg", type: "矢量图", desc: "基于 XML 的矢量图格式，适合图标、标志和可缩放图形。" },
  { ext: ".ico", type: "图标", desc: "Windows 图标格式，可包含多种尺寸和颜色深度的图标图像。" },
  { ext: ".heic", type: "图片", desc: "高效率图像格式，常见于 iPhone 拍摄照片。" },
  { ext: ".raw", type: "图片", desc: "相机原始图像数据，保留较多传感器信息，适合后期处理。" },
  { ext: ".psd", type: "图像工程", desc: "Adobe Photoshop 工程文件，保存图层、蒙版和编辑信息。" },
  { ext: ".ai", type: "图像工程", desc: "Adobe Illustrator 矢量设计文件，常用于插画、标志和印刷设计。" },
  { ext: ".mp3", type: "音频", desc: "常见有损压缩音频格式，兼容性高，适合音乐和播客。" },
  { ext: ".wav", type: "音频", desc: "无压缩或低压缩音频格式，音质高但文件较大。" },
  { ext: ".flac", type: "音频", desc: "无损压缩音频格式，能保留原始音质并减少体积。" },
  { ext: ".aac", type: "音频", desc: "高效有损音频格式，常用于流媒体和移动设备。" },
  { ext: ".ogg", type: "音频", desc: "开放容器格式，常与 Vorbis 或 Opus 音频编码搭配使用。" },
  { ext: ".m4a", type: "音频", desc: "MPEG-4 音频容器，常用于 AAC 或 Apple Lossless 音频。" },
  { ext: ".wma", type: "音频", desc: "Windows Media Audio 格式，常见于早期 Windows 媒体生态。" },
  { ext: ".opus", type: "音频", desc: "低延迟高压缩效率音频格式，适合语音、会议和流媒体。" },
  { ext: ".mid / .midi", type: "音乐数据", desc: "MIDI 乐器指令数据，不直接保存真实录音。" },
  { ext: ".mp4", type: "视频", desc: "常见视频容器格式，兼容性强，常用于 H.264/H.265 视频。" },
  { ext: ".mkv", type: "视频", desc: "Matroska 视频容器，支持多音轨、多字幕和多编码格式。" },
  { ext: ".avi", type: "视频", desc: "较早的视频容器格式，兼容性广但结构较旧。" },
  { ext: ".mov", type: "视频", desc: "Apple QuickTime 视频格式，常见于视频编辑和苹果设备。" },
  { ext: ".wmv", type: "视频", desc: "Windows Media Video 格式，常见于早期 Windows 平台视频。" },
  { ext: ".flv", type: "视频", desc: "Flash 视频格式，曾广泛用于网页视频播放。" },
  { ext: ".webm", type: "视频", desc: "面向 Web 的开放视频格式，常用于浏览器播放。" },
  { ext: ".m4v", type: "视频", desc: "MPEG-4 视频格式，常见于 Apple 生态。" },
  { ext: ".3gp", type: "视频", desc: "移动设备早期常用视频格式，适合低带宽场景。" },
  { ext: ".srt", type: "字幕", desc: "纯文本字幕格式，记录字幕序号、时间轴和字幕内容。" },
  { ext: ".ass", type: "字幕", desc: "高级字幕格式，支持样式、定位和特效。" },
  { ext: ".zip", type: "压缩归档", desc: "常见压缩包格式，支持多个文件打包和压缩。" },
  { ext: ".rar", type: "压缩归档", desc: "RAR 压缩格式，支持较高压缩率和分卷压缩。" },
  { ext: ".7z", type: "压缩归档", desc: "7-Zip 压缩格式，通常压缩率较高。" },
  { ext: ".tar", type: "归档", desc: "Unix/Linux 常用打包格式，本身通常只打包不压缩。" },
  { ext: ".gz", type: "压缩", desc: "Gzip 压缩格式，常用于压缩单个文件或与 tar 组合。" },
  { ext: ".bz2", type: "压缩", desc: "Bzip2 压缩格式，压缩率通常较 gzip 高但速度较慢。" },
  { ext: ".xz", type: "压缩", desc: "XZ 压缩格式，压缩率高，常见于 Linux 软件包。" },
  { ext: ".iso", type: "光盘镜像", desc: "光盘映像文件，可保存光盘完整结构和内容。" },
  { ext: ".dmg", type: "磁盘镜像", desc: "macOS 常用磁盘镜像格式，常用于软件分发。" },
  { ext: ".vhd / .vhdx", type: "虚拟磁盘", desc: "Microsoft 虚拟硬盘格式，常用于虚拟机和系统镜像。" },
  { ext: ".vmdk", type: "虚拟磁盘", desc: "VMware 虚拟磁盘格式，保存虚拟机硬盘数据。" },
  { ext: ".json", type: "数据交换", desc: "JavaScript Object Notation，常用于配置、接口传输和结构化数据。" },
  { ext: ".xml", type: "数据交换", desc: "可扩展标记语言，适合层级结构数据和文档描述。" },
  { ext: ".yaml / .yml", type: "配置数据", desc: "易读的数据序列化格式，常用于配置文件和自动化脚本。" },
  { ext: ".toml", type: "配置数据", desc: "强调清晰配置语义的文本格式，常见于 Rust、Python 工具配置。" },
  { ext: ".ini", type: "配置数据", desc: "简单键值对配置格式，常用于 Windows 程序和旧式软件配置。" },
  { ext: ".env", type: "配置数据", desc: "环境变量配置文件，常用于保存应用运行参数。" },
  { ext: ".sql", type: "数据库脚本", desc: "SQL 脚本文件，保存建表、查询、插入或迁移语句。" },
  { ext: ".db / .sqlite", type: "数据库", desc: "SQLite 数据库文件，适合本地轻量级数据存储。" },
  { ext: ".mdb", type: "数据库", desc: "旧版 Microsoft Access 数据库格式。" },
  { ext: ".accdb", type: "数据库", desc: "新版 Microsoft Access 数据库格式。" },
  { ext: ".parquet", type: "数据存储", desc: "列式存储格式，常用于大数据分析和数据湖。" },
  { ext: ".avro", type: "数据存储", desc: "支持模式定义的数据序列化格式，常用于数据管道。" },
  { ext: ".orc", type: "数据存储", desc: "面向 Hadoop 生态的列式存储格式。" },
  { ext: ".html", type: "网页", desc: "超文本标记语言文件，定义网页结构。" },
  { ext: ".css", type: "网页", desc: "层叠样式表文件，定义网页视觉样式和布局。" },
  { ext: ".js", type: "程序代码", desc: "JavaScript 脚本文件，常用于网页交互、服务端程序和自动化。" },
  { ext: ".ts", type: "程序代码", desc: "TypeScript 源码文件，在 JavaScript 基础上增加静态类型。" },
  { ext: ".py", type: "程序代码", desc: "Python 源码文件，常用于脚本、数据分析、Web 后端和自动化。" },
  { ext: ".java", type: "程序代码", desc: "Java 源码文件，常用于企业应用、Android 和后端系统。" },
  { ext: ".c", type: "程序代码", desc: "C 语言源码文件，常用于系统编程、嵌入式和高性能组件。" },
  { ext: ".cpp", type: "程序代码", desc: "C++ 源码文件，常用于游戏、图形、系统和性能敏感应用。" },
  { ext: ".cs", type: "程序代码", desc: "C# 源码文件，常用于 .NET 应用、Unity 游戏和企业系统。" },
  { ext: ".go", type: "程序代码", desc: "Go 源码文件，常用于云服务、网络程序和命令行工具。" },
  { ext: ".rs", type: "程序代码", desc: "Rust 源码文件，强调内存安全和高性能。" },
  { ext: ".php", type: "程序代码", desc: "PHP 源码文件，常用于 Web 服务端开发。" },
  { ext: ".rb", type: "程序代码", desc: "Ruby 源码文件，常见于脚本和 Ruby on Rails 应用。" },
  { ext: ".swift", type: "程序代码", desc: "Swift 源码文件，常用于 iOS、macOS 等 Apple 平台应用。" },
  { ext: ".kt", type: "程序代码", desc: "Kotlin 源码文件，常用于 Android 和 JVM 应用。" },
  { ext: ".sh", type: "脚本", desc: "Shell 脚本文件，常用于 Linux/macOS 命令自动化。" },
  { ext: ".bat", type: "脚本", desc: "Windows 批处理脚本文件，用于执行命令序列。" },
  { ext: ".ps1", type: "脚本", desc: "PowerShell 脚本文件，常用于 Windows 管理和自动化。" },
  { ext: ".exe", type: "可执行文件", desc: "Windows 可执行程序文件，包含可直接运行的机器代码或程序入口。" },
  { ext: ".dll", type: "动态库", desc: "Windows 动态链接库，供程序在运行时加载调用。" },
  { ext: ".so", type: "动态库", desc: "Linux/Unix 共享对象库，类似 Windows 的 DLL。" },
  { ext: ".apk", type: "应用包", desc: "Android 应用安装包，包含程序代码、资源和清单。" },
  { ext: ".ipa", type: "应用包", desc: "iOS 应用归档包，通常用于 Apple 设备应用分发。" },
  { ext: ".ttf", type: "字体", desc: "TrueType 字体格式，广泛用于操作系统和设计软件。" },
  { ext: ".otf", type: "字体", desc: "OpenType 字体格式，支持更丰富的字体特性。" },
  { ext: ".pem", type: "证书密钥", desc: "文本编码的证书或密钥格式，常用于 TLS、SSH 和加密场景。" },
  { ext: ".crt", type: "证书", desc: "证书文件格式，通常保存公钥证书。" },
  { ext: ".key", type: "密钥", desc: "私钥文件格式，常用于服务器证书、SSH 或加密系统。" },
  { ext: ".p12 / .pfx", type: "证书密钥", desc: "可包含证书和私钥的二进制容器，常用于证书导入导出。" },
  { ext: ".log", type: "日志", desc: "日志文件，记录程序运行状态、错误和审计信息。" },
  { ext: ".bak", type: "备份", desc: "备份文件扩展名，通常表示原文件的备份副本。" }
];

const accents = ["#37f4ff", "#64ff9d", "#ffca57", "#ff5fd2", "#ff6b6b"];
const state = { category: "全部", query: "", selected: 6 };

const grid = document.querySelector("#formatGrid");
const strip = document.querySelector("#categoryStrip");
const orbitMap = document.querySelector("#orbitMap");
const searchInput = document.querySelector("#searchInput");
const fileNameInput = document.querySelector("#fileNameInput");
const filePicker = document.querySelector("#filePicker");
const quickLookupButton = document.querySelector("#quickLookupButton");
const quickResult = document.querySelector("#quickResult");
const resultTitle = document.querySelector("#resultTitle");
const visibleCount = document.querySelector("#visibleCount");

const categories = ["全部", ...new Set(formats.map((item) => item.type))];

function colorFor(type) {
  const index = categories.indexOf(type);
  return accents[Math.max(0, index) % accents.length];
}

function extensionTokens(item) {
  return item.ext
    .toLowerCase()
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

function extensionCandidates(value) {
  const cleaned = value
    .trim()
    .replace(/^["']|["']$/g, "")
    .split(/[?#]/)[0]
    .split(/[\\/]/)
    .pop()
    .toLowerCase();

  if (!cleaned) return [];
  if (cleaned.startsWith(".") && !cleaned.includes(" ")) return [cleaned];
  if (/^[a-z0-9]+$/.test(cleaned)) return [`.${cleaned}`];

  const pieces = cleaned.split(".");
  if (pieces.length < 2) return [];
  return pieces
    .slice(1)
    .map((_, index) => `.${pieces.slice(index + 1).join(".")}`)
    .sort((a, b) => b.length - a.length);
}

function findFormatByExtension(value) {
  const candidates = extensionCandidates(value);
  for (const candidate of candidates) {
    const exact = formats.find((item) => extensionTokens(item).includes(candidate));
    if (exact) return { item: exact, extension: candidate, exact: true };
  }

  const fallback = candidates[candidates.length - 1] || value.trim().toLowerCase();
  const loose = formats.find((item) => item.ext.toLowerCase().includes(fallback.replace(/^\./, "")));
  return loose ? { item: loose, extension: fallback, exact: false } : { item: null, extension: fallback, exact: false };
}

function filteredFormats() {
  const query = state.query.trim().toLowerCase();
  return formats.filter((item) => {
    const inCategory = state.category === "全部" || item.type === state.category;
    const haystack = `${item.ext} ${item.type} ${item.desc}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });
}

function renderCategories() {
  strip.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `chip${category === state.category ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.addEventListener("click", () => {
      state.category = category;
      state.selected = 0;
      render();
    });
    strip.appendChild(button);
  });
}

function renderOrbit() {
  orbitMap.querySelectorAll(".orbit-node").forEach((node) => node.remove());
  const usable = categories.filter((category) => category !== "全部");
  usable.forEach((category, index) => {
    const angle = (Math.PI * 2 * index) / usable.length - Math.PI / 2;
    const radius = index % 2 === 0 ? 112 : 76;
    const node = document.createElement("span");
    node.className = `orbit-node${category === state.category ? " hot" : ""}`;
    node.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
    node.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
    node.style.background = colorFor(category);
    node.style.boxShadow = `0 0 18px ${colorFor(category)}`;
    orbitMap.appendChild(node);
  });
}

function updateDetail(item, originalIndex) {
  document.querySelector("#detailExt").textContent = item.ext;
  document.querySelector("#detailName").textContent = item.type;
  document.querySelector("#detailDesc").textContent = item.desc;
  document.querySelector("#detailIndex").textContent = `#${String(originalIndex + 1).padStart(3, "0")}`;
  document.querySelector("#detailType").textContent = item.type;
}

function renderGrid(items) {
  grid.innerHTML = "";
  items.forEach((item) => {
    const originalIndex = formats.indexOf(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `format-card${originalIndex === state.selected ? " active" : ""}`;
    button.style.setProperty("--accent", colorFor(item.type));
    button.innerHTML = `<strong>${item.ext}</strong><span>${item.type}</span><p>${item.desc}</p>`;
    button.addEventListener("click", () => {
      state.selected = originalIndex;
      updateDetail(item, originalIndex);
      renderGrid(filteredFormats());
    });
    grid.appendChild(button);
  });
}

function render() {
  renderCategories();
  renderOrbit();
  const items = filteredFormats();
  visibleCount.textContent = items.length;
  resultTitle.textContent = state.category === "全部" ? "全部格式" : state.category;
  const selectedItem = formats[state.selected] && items.includes(formats[state.selected]) ? formats[state.selected] : items[0];
  if (selectedItem) {
    state.selected = formats.indexOf(selectedItem);
    updateDetail(selectedItem, state.selected);
  }
  renderGrid(items);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

function runQuickLookup(value) {
  const rawValue = value.trim();
  if (!rawValue) {
    quickResult.textContent = "请输入文件名，或先选择一个本地文件。";
    return;
  }

  const match = findFormatByExtension(rawValue);
  if (!match.item) {
    const extensionText = match.extension ? `“${match.extension}”` : "该文件名";
    state.category = "全部";
    state.query = match.extension.replace(/^\./, "");
    searchInput.value = state.query;
    render();
    quickResult.innerHTML = `未找到 ${extensionText} 的精确说明。已尝试用扩展名进行普通检索。`;
    return;
  }

  state.category = match.item.type;
  state.query = match.extension;
  state.selected = formats.indexOf(match.item);
  searchInput.value = match.extension;
  render();
  quickResult.innerHTML = `已识别 <strong>${rawValue}</strong>：扩展名 <strong>${match.extension}</strong>，类型为 <strong>${match.item.type}</strong>。`;
}

quickLookupButton.addEventListener("click", () => runQuickLookup(fileNameInput.value));

fileNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runQuickLookup(fileNameInput.value);
});

filePicker.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  fileNameInput.value = file.name;
  runQuickLookup(file.name);
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    grid.classList.toggle("compact", button.dataset.density === "compact");
  });
});

function startStarfield() {
  const canvas = document.querySelector("#starfield");
  const ctx = canvas.getContext("2d");
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.0008 + Math.random() * 0.002,
    size: 0.8 + Math.random() * 1.8,
    tint: accents[Math.floor(Math.random() * accents.length)]
  }));

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > 1) star.y = 0;
      ctx.fillStyle = star.tint;
      ctx.globalAlpha = 0.25 + star.size / 4;
      ctx.fillRect(star.x * canvas.width, star.y * canvas.height, star.size, star.size);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
}

document.querySelector("#totalCount").textContent = formats.length;
document.querySelector("#categoryCount").textContent = categories.length - 1;
render();
startStarfield();
