import{j as a,T as v,D as s}from"./Task.stories-da8ab088.js";import"./index-f1f749bf.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";function L({loading:n,tasks:o,onPinTask:N,onArchiveTask:y}){const _={onPinTask:N,onArchiveTask:y};return n?a("div",{className:"list-items",children:"loading"}):o.length===0?a("div",{className:"list-items",children:"empty"}):a("div",{className:"list-items",children:o.map(d=>a(v,{task:d,..._},d.id))})}L.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const j={component:L,title:"TaskList",decorators:[n=>a("div",{style:{padding:"3rem"},children:n()})],tags:["autodocs"]},t={args:{tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]}},r={args:{tasks:[...t.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},e={args:{tasks:[],loading:!0}},i={args:{...e.args,loading:!1}};var l,c,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [{
      ...TaskStories.Default.args.task,
      id: "1",
      title: "Task 1"
    }, {
      ...TaskStories.Default.args.task,
      id: "2",
      title: "Task 2"
    }, {
      ...TaskStories.Default.args.task,
      id: "3",
      title: "Task 3"
    }, {
      ...TaskStories.Default.args.task,
      id: "4",
      title: "Task 4"
    }, {
      ...TaskStories.Default.args.task,
      id: "5",
      title: "Task 5"
    }, {
      ...TaskStories.Default.args.task,
      id: "6",
      title: "Task 6"
    }]
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var k,m,p;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }]
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,T,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(f=(T=e.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var h,D,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const A=["Default","WithPinnedTasks","Loading","Empty"];export{t as Default,i as Empty,e as Loading,r as WithPinnedTasks,A as __namedExportsOrder,j as default};
//# sourceMappingURL=TaskList.stories-5720b8e5.js.map
