/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
https://github.com/joethei/obsidian-key-promoter
*/

var b=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var N=(a,o)=>{for(var t in o)b(a,t,{get:o[t],enumerable:!0})},A=(a,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of H(o))!M.call(a,e)&&e!==t&&b(a,e,{get:()=>o[e],enumerable:!(s=O(o,e))||s.enumerable});return a};var D=a=>A(b({},"__esModule",{value:!0}),a);var F={};N(F,{default:()=>S});module.exports=D(F);var r=require("obsidian");var d=require("obsidian"),f={showUnassigned:!0,showAssigned:!0,threshold:0,notificationTimeout:5,template:"`{{commandId}}` - {{commandName}} - `{{hotkey}}`\n",descriptionOfActions:!1,mouseStatistics:{},keyboardStatistics:{}},k=class extends d.PluginSettingTab{constructor(t){super(t.app,t);this.plugin=t}display(){let{containerEl:t}=this;t.empty(),new d.Setting(t).setName("Show for assigned commands").setDesc("show a notification for commands that do have a hotkey assigned").addToggle(e=>{e.setValue(this.plugin.settings.showAssigned).onChange(async n=>{this.plugin.settings.showAssigned=n,await this.plugin.saveSettings()})}),new d.Setting(t).setName("Show for unassigned commands").setDesc("show a notification for commands that do not have a hotkey assigned").addToggle(e=>{e.setValue(this.plugin.settings.showUnassigned).onChange(async n=>{this.plugin.settings.showUnassigned=n,await this.plugin.saveSettings()})}),new d.Setting(t).setName("Threshold").setDesc("Only show notification if there are less than X possible commands (use 0 to disable)").addText(e=>{e.setValue(String(this.plugin.settings.threshold)).onChange(async n=>{if(isNaN(Number(n))||n===void 0){new d.Notice("please specify a valid number");return}this.plugin.settings.threshold=Number(n),await this.plugin.saveSettings()})});let s=new DocumentFragment;s.createDiv().setText("Show name and Win/Mac shortcuts of any command you invoke"),new d.Setting(t).setName("Description of actions").setDesc(s).addToggle(e=>{e.setValue(this.plugin.settings.descriptionOfActions).onChange(async n=>{this.plugin.settings.descriptionOfActions=n,await this.plugin.saveSettings()})}),new d.Setting(t).setName("Notification timeout").setDesc("show notifications for x seconds").addText(e=>{e.setValue(String(this.plugin.settings.notificationTimeout)).onChange(async n=>{if(isNaN(Number(n))||n===void 0){new d.Notice("please specify a valid number");return}this.plugin.settings.notificationTimeout=Number(n),await this.plugin.saveSettings()})}).addExtraButton(e=>{e.setIcon("rotate-ccw").setTooltip("Reset to default").onClick(async()=>{this.plugin.settings.notificationTimeout=f.notificationTimeout,await this.plugin.saveSettings(),this.display()})}),new d.Setting(t).setName("Export template").setDesc("Available variables are: {{commandId}}, {{commandName}}, {{hotkey}}").addTextArea(e=>{e.setValue(this.plugin.settings.template).setPlaceholder(f.template).onChange(async n=>{this.plugin.settings.template=n,await this.plugin.saveSettings()}),e.inputEl.setAttr("rows",8),e.inputEl.setAttr("cols",50)}).addExtraButton(e=>{e.setIcon("rotate-ccw").setTooltip("Reset to default").onClick(async()=>{this.plugin.settings.template=f.template,await this.plugin.saveSettings(),this.display()})})}};function x(a,o){let t=Object.keys(o).map(s=>K(a,s,o[s]));return t.length===1?t[0]:function(){t.forEach(s=>s())}}function K(a,o,t){let s=a[o],e=a.hasOwnProperty(o),n=e?s:function(){return Object.getPrototypeOf(a)[o].apply(this,arguments)},i=t(n);return s&&Object.setPrototypeOf(i,s),Object.setPrototypeOf(c,i),a[o]=c,m;function c(...l){return i===n&&a[o]===c&&m(),i.apply(this,l)}function m(){a[o]===c&&(e?a[o]=n:delete a[o]),i!==n&&(i=n,Object.setPrototypeOf(c,s||Function))}}function T(a,o,t){return s[a]=a,s;function s(...e){return(o[a]===a?o:t).apply(this,e)}}var v=require("obsidian"),w=class extends v.Modal{constructor(t){super(t.app);this.plugin=t}onOpen(){this.modalEl.addClass("key-promoter-modal");let{contentEl:t}=this;t.empty(),t.createEl("h1",{text:"Most used commands"});let s=t.createDiv("mouse");s.createEl("h2",{text:"Mouse"});let e=s.createEl("table"),n=e.createTHead();n.createEl("th",{text:"Usage Count"}),n.createEl("th",{text:"Command"}),n.createEl("th",{text:"Hotkey"});let i=e.createTBody(),c=new Map;Object.each(this.plugin.settings.mouseStatistics,(g,u)=>{c.set(u,g)}),c.forEach((g,u)=>{let h=this.plugin.app.commands.findCommand(u);if(!h)return;let p=i.createEl("tr");p.createEl("td",{text:String(g)}),p.createEl("td",{text:h.name});let C=this.plugin.getHotkeysForCommand(h);p.createEl("td",{text:C.join()})});let m=t.createDiv("keyboard");m.createEl("h2",{text:"Keyboard"});let l=m.createEl("table"),y=l.createTHead();y.createEl("th",{text:"Usage count"}),y.createEl("th",{text:"Command"}),y.createEl("th",{text:"Hotkey"});let P=l.createTBody(),E=new Map;Object.each(this.plugin.settings.keyboardStatistics,(g,u)=>{E.set(u,g)}),E.forEach((g,u)=>{let h=this.plugin.app.commands.findCommand(u),p=P.createEl("tr");p.createEl("td",{text:String(g)}),p.createEl("td",{text:h.name});let C=this.plugin.getHotkeysForCommand(h);p.createEl("td",{text:C.join()})})}};var S=class extends r.Plugin{hasParentSelector(t,s){return Boolean(t.closest(s))}async onload(){console.log("loading plugin Key Promoter "+this.manifest.version),await this.loadSettings(),this.uninstallCommand=x(this.app.commands,{executeCommandById(t){return T("key-promoter",t,function(...s){console.log("testing");let e=t&&t.apply(this,s),n=this.app.commands.findCommand(s[0]);if(!n)return e;let i=this.app.plugins.plugins["key-promoter"];if(i.settings.keyboardStatistics[n.id]?i.settings.keyboardStatistics[n.id]++:i.settings.keyboardStatistics[n.id]=1,i.saveSettings(),!i.settings.descriptionOfActions)return e;let c=i.settings.notificationTimeout;return new r.Notice(n.name+" via "+this.app.plugins.plugins["key-promoter"].getHotkeysForCommand(n).join(),c*1e3),e})}}),this.addSettingTab(new k(this)),this.addCommand({id:"statistics",name:"Statistics",callback:async()=>{new w(this).open()}}),this.addCommand({id:"key-promoter",name:"Export hotkeys",callback:async()=>{if(this.app.vault.getAbstractFileByPath("hotkeys-export.md")instanceof r.TFile){new r.Notice("There is already a exported file");return}let t="";for(let e of this.getCommands()){let n=this.getHotkeysForCommand(e),i=this.settings.template.replace("{{commandId}}",e.id).replace("{{commandName}}",e.name).replace("{{hotkey}}",n.join());t=t.concat(i)}let s=await this.app.vault.create((0,r.normalizePath)("hotkeys-export.md"),t);await this.app.workspace.getLeaf().openFile(s,{state:{mode:"edit"}}),new r.Notice("Exported hotkeys")}}),this.registerDomEvent(document,"click",t=>{if(t.target==null)return;let s=t.target.ariaLabel;if(s||(s=t.target.innerText),!s)return;let e=[".mod-settings",".nav-files-container",".markdown-preview-view",".markdown-source-view",".cm-editor",".CodeMirror-line",".modal",".rss-feeds-folders"];for(let i of e)if(this.hasParentSelector(t.target,i))return;let n=Object.values(this.app.commands.commands);n=n.filter(i=>i.name.toLowerCase().contains(s.toLowerCase())),!(this.settings.threshold!=0&&n.length>this.settings.threshold)&&n.forEach(i=>{this.settings.mouseStatistics[i.id]?this.settings.mouseStatistics[i.id]++:this.settings.mouseStatistics[i.id]=1,this.saveSettings();let c=this.getHotkeysForCommand(i);if(c.length==0){if(!this.settings.showUnassigned)return;let m=new r.Notice("",this.settings.notificationTimeout*1e3);m.noticeEl.createEl("span",{text:"Hotkey for "}),m.noticeEl.createEl("b",{text:i.name}),m.noticeEl.createEl("span",{text:" is not set"}),m.noticeEl.onClickEvent(async()=>{this.app.setting.open(),this.app.setting.openTabById("hotkeys").setQuery(i.id)})}else for(let m of c){let l=new r.Notice("",this.settings.notificationTimeout*1e3);l.noticeEl.createEl("span",{text:"Hotkey for "}),l.noticeEl.createEl("b",{text:i.name}),l.noticeEl.createEl("span",{text:" is "}),l.noticeEl.createEl("code",{text:m}),l.noticeEl.onClickEvent(async()=>{this.app.setting.open(),this.app.setting.openTabById("hotkeys").setQuery(i.id)})}})})}onunload(){this.uninstallCommand&&this.uninstallCommand(),console.log("unloading plugin key promoter")}getCommands(){let t=new Set;for(let s of Object.values(this.app.commands.commands))t.add(s);for(let s of Object.values(this.app.commands.editorCommands))t.add(s);return t}getHotkeysForCommand(t){let s=[];return this.app.hotkeyManager.customKeys[t.id]?this.app.hotkeyManager.customKeys[t.id].forEach(e=>{if(e.modifiers){let n=e.modifiers.join("+").replace("Mod",r.Platform.isMacOS?"Cmd":"Ctrl");s=s.concat(n+" + "+e.key)}else s=s.concat(e.key)}):t.hotkeys&&t.hotkeys.forEach(e=>{if(e.modifiers){let n=e.modifiers.join("+").replace("Mod",r.Platform.isMacOS?"Cmd":"Ctrl");s=s.concat(n+" + "+e.key)}}),s}async loadSettings(){this.settings=Object.assign({},f,await this.loadData()),this.settings.keyboardStatistics||(this.settings.keyboardStatistics={}),this.settings.mouseStatistics||(this.settings.mouseStatistics={}),await this.saveSettings()}async saveSettings(){await this.saveData(this.settings)}};

/* nosourcemap */