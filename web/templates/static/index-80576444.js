import{_ as e,s as t,a,v as o}from"./index-6a1593c4.js";import{u}from"./user-12ebbc1d.js";const d={data:()=>({timer:null,trojanVersion:"",trojanUptime:"",keyOffset:0,valueOffset:0,userList:[],downloadData:0,uploadData:0,totalData:0,cpu:{percentage:0,color:""},memory:{percentage:0,used:0,total:0,color:""},swap:{percentage:0,used:0,total:0,color:""},disk:{percentage:0,used:0,total:0,color:""},load:"",netSpeed:{up:"",down:""},netCount:""}),computed:{...Vuex.mapState(["isAdmin"])},created(){this.$store.commit("SET_NPROGRESS",!1),this.setOffset(),this.getVersion(),this.getUserList()},mounted(){this.isAdmin&&this.getServerInfo(),this.timer=setInterval((()=>{this.isAdmin&&this.getServerInfo(),this.getVersion(),this.getUserList()}),6e3),window.onresize=()=>(()=>{this.setOffset()})()},unmounted(){this.$store.commit("SET_NPROGRESS",!0),clearInterval(this.timer)},methods:{setOffset(){document.body.clientWidth<1e3?(this.keyOffset=1,this.valueOffset=2,this.iconShow=!1):(this.keyOffset=0,this.valueOffset=0,this.iconShow=!0)},navigate(e){this.$router.push({path:e})},getServerInfo(){t().then((e=>{const t=e.Data;this.cpu.percentage=parseFloat(t.cpu[0].toFixed(2)),this.cpu.color=this.computeColor(this.cpu.percentage),this.memory=this.computePercent(t.memory),this.swap=this.computePercent(t.swap),this.disk=this.computePercent(t.disk),this.netSpeed.up=a(t.speed.Up)+"/s",this.netSpeed.down=a(t.speed.Down)+"/s",this.netCount=t.netCount.tcp+" / "+t.netCount.udp,this.load=t.load.load1+", "+t.load.load5+", "+t.load.load15}))},computePercent(e){const t=parseFloat(e.usedPercent.toFixed(2));return{percentage:t,used:a(e.used),total:a(e.total),color:this.computeColor(t)}},computeColor:e=>e<80?"#67C23A":e<90?"#E6A23C":"#F56C6C",async getUserList(){const e=await u();if("success"===e.Msg){const t=e.Data;this.userList=t.userList;let o=0,u=0;for(let e=0;e<this.userList.length;e++)o+=this.userList[e].Download,u+=this.userList[e].Upload;this.downloadData=a(o),this.uploadData=a(u),this.totalData=a(o+u)}else this.$message.error(e.Msg)},async getVersion(){const e=(await o()).Data;this.trojanVersion=e.trojanVersion,this.trojanUptime=this.parseUptime(e.trojanUptime)},parseUptime(e){let t="";if(-1!==e.indexOf("-")){const a=e.split("-");t+=a[0]+`${this.$t("dashboard.day")} `;const o=a[1].split(":");t+=o[0]+`${this.$t("dashboard.hour")} `,t+=o[1]+`${this.$t("dashboard.minute")} `,t+=o[2]+`${this.$t("dashboard.second")} `}else{const a=e.split(":");3===a.length?(t+=a[0]+`${this.$t("dashboard.hour")} `,t+=a[1]+`${this.$t("dashboard.minute")} `,t+=a[2]+`${this.$t("dashboard.second")} `):2===a.length&&(t+=a[0]+`${this.$t("dashboard.minute")} `,t+=a[1]+`${this.$t("dashboard.second")} `)}return t}}},s=(e=>(Vue.pushScopeId("data-v-17a80800"),e=e(),Vue.popScopeId(),e))((()=>Vue.createElementVNode("div",null,"CPU",-1))),r={class:"el-icon-top",style:{"margin-right":"8px"}},l={class:"el-icon-bottom"};const V=e(d,[["render",function(e,t,a,o,u,d){const V=Vue.resolveComponent("el-progress"),i=Vue.resolveComponent("el-col"),n=Vue.resolveComponent("el-row"),c=Vue.resolveComponent("el-card"),p=Vue.resolveComponent("el-link"),h=Vue.resolveComponent("el-tooltip"),m=Vue.resolveComponent("el-tag");return Vue.openBlock(),Vue.createElementBlock("div",null,[e.isAdmin?(Vue.openBlock(),Vue.createBlock(n,{key:0},{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:24},{default:Vue.withCtx((()=>[Vue.createVNode(c,{shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:12,style:{"text-align":"center"}},{default:Vue.withCtx((()=>[Vue.createVNode(V,{type:"dashboard",percentage:u.cpu.percentage,color:u.cpu.color},null,8,["percentage","color"]),s])),_:1}),Vue.createVNode(i,{span:12,style:{"text-align":"center"}},{default:Vue.withCtx((()=>[Vue.createVNode(V,{type:"dashboard",percentage:u.memory.percentage,color:u.memory.color},null,8,["percentage","color"]),Vue.createElementVNode("div",null,Vue.toDisplayString(e.$t("dashboard.memory"))+": "+Vue.toDisplayString(u.memory.used)+"/"+Vue.toDisplayString(u.memory.total),1)])),_:1})])),_:1})])),_:1}),Vue.createVNode(i,{sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:12,style:{"text-align":"center"}},{default:Vue.withCtx((()=>[Vue.createVNode(V,{type:"dashboard",percentage:u.swap.percentage,color:u.swap.color},null,8,["percentage","color"]),Vue.createElementVNode("div",null,"swap: "+Vue.toDisplayString(u.swap.used)+"/"+Vue.toDisplayString(u.swap.total),1)])),_:1}),Vue.createVNode(i,{span:12,style:{"text-align":"center"}},{default:Vue.withCtx((()=>[Vue.createVNode(V,{type:"dashboard",percentage:u.disk.percentage,color:u.disk.color},null,8,["percentage","color"]),Vue.createElementVNode("div",null,Vue.toDisplayString(e.$t("dashboard.disk"))+": "+Vue.toDisplayString(u.disk.used)+"/"+Vue.toDisplayString(u.disk.total),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):Vue.createCommentVNode("",!0),Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.trojanVersion"))+": ",1)])),_:1}),Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.trojanVersion),1)])),_:1})])),_:1})])),_:1})])),_:1}),Vue.createVNode(i,{sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.trojanUser"))+":",1)])),_:1}),Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createVNode(p,{type:"primary",onClick:t[0]||(t[0]=e=>d.navigate("/user"))},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.userList.length),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.trojanUptime"))+":",1)])),_:1}),Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.trojanUptime),1)])),_:1})])),_:1})])),_:1})])),_:1}),e.isAdmin?(Vue.openBlock(),Vue.createBlock(i,{key:0,sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.load"))+":",1)])),_:1}),Vue.createVNode(h,{class:"item",effect:"dark",content:"load1, load5, load15",placement:"top-start"},{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.load),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):Vue.createCommentVNode("",!0)])),_:1}),Vue.createVNode(n,null,{default:Vue.withCtx((()=>[e.isAdmin?(Vue.openBlock(),Vue.createBlock(i,{key:0,sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.netSpeed"))+":",1)])),_:1}),Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createElementVNode("i",r,Vue.toDisplayString(u.netSpeed.up),1),Vue.createElementVNode("i",l,Vue.toDisplayString(u.netSpeed.down),1)])),_:1})])),_:1})])),_:1})])),_:1})):Vue.createCommentVNode("",!0),e.isAdmin?(Vue.openBlock(),Vue.createBlock(i,{key:1,sm:24,md:12},{default:Vue.withCtx((()=>[Vue.createVNode(c,{class:"home-card",shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createVNode(n,null,{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:10},{default:Vue.withCtx((()=>[Vue.createElementVNode("b",null,Vue.toDisplayString(e.$t("dashboard.netCount"))+":",1)])),_:1}),Vue.createVNode(h,{class:"item",effect:"dark",content:"tcp / udp",placement:"top-start"},{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:12,style:{"padding-top":"1px"}},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.netCount),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):Vue.createCommentVNode("",!0)])),_:1}),Vue.createVNode(n,{style:{"margin-top":"10px"}},{default:Vue.withCtx((()=>[Vue.createVNode(i,{span:7},{default:Vue.withCtx((()=>[Vue.createVNode(c,{shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("dashboard.upload"))+": ",1),Vue.createVNode(m,{effect:"dark",type:"success"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.uploadData),1)])),_:1})])),_:1})])),_:1}),Vue.createVNode(i,{span:7,offset:1},{default:Vue.withCtx((()=>[Vue.createVNode(c,{shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("dashboard.download"))+": ",1),Vue.createVNode(m,{effect:"dark",type:"success"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.downloadData),1)])),_:1})])),_:1})])),_:1}),Vue.createVNode(i,{span:7,offset:1},{default:Vue.withCtx((()=>[Vue.createVNode(c,{shadow:"hover"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("dashboard.total"))+": ",1),Vue.createVNode(m,{effect:"dark",type:"success"},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(u.totalData),1)])),_:1})])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-17a80800"]]);export{V as default};
