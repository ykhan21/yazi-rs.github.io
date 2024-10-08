"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{9079:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(1527),n=t(6225);const r={sidebar_position:4,description:"How to preview images in Yazi."},l="Image Preview",o={id:"image-preview",title:"Image Preview",description:"How to preview images in Yazi.",source:"@site/docs/image-preview.md",sourceDirName:".",slug:"/image-preview",permalink:"/docs/image-preview",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/image-preview.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to preview images in Yazi."},sidebar:"docsSidebar",previous:{title:"theme.toml",permalink:"/docs/configuration/theme"},next:{title:"Plugins (BETA)",permalink:"/docs/plugins/overview"}},h={},d=[{value:"tmux users",id:"tmux",level:2},{value:"Zellij users",id:"zellij",level:2},{value:"Windows users",id:"windows",level:2},{value:"Windows with WSL users",id:"wsl",level:2},{value:"Neovim users",id:"neovim",level:2},{value:"Why can&#39;t I preview images via \xdcberzug++?",id:"debug-ueberzug",level:2},{value:"Why won&#39;t my images adapt to terminal size?",id:"size",level:2}];function a(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"image-preview",children:"Image Preview"})}),"\n",(0,s.jsx)(i.p,{children:"Yazi has done a lot of work to adapt to different terminals and multiplexers, trying their best to make it out-of-the-box for users."}),"\n",(0,s.jsxs)(i.p,{children:["This is by no means a simple task, to reduce maintenance costs, we only guarantee it is available in the ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.em,{children:"latest version"})})," of terminals and multiplexers (tmux, Zellij):"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Platform"}),(0,s.jsx)(i.th,{children:"Protocol"}),(0,s.jsx)(i.th,{children:"Support"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/kovidgoyal/kitty",children:"kitty"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://sw.kovidgoyal.net/kitty/graphics-protocol/#unicode-placeholders",children:"Kitty unicode placeholders"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://invent.kde.org/utilities/konsole",children:"Konsole"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxyazi/yazi/blob/main/yazi-adapter/src/kgp_old.rs",children:"Kitty old protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com",children:"iTerm2"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/wez/wezterm",children:"WezTerm"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.a,{href:"https://github.com/mintty/mintty",children:"Mintty"})," (Git Bash)"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://codeberg.org/dnkl/foot",children:"foot"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.vt100.net/docs/vt3xx-gp/chapter14.html",children:"Sixel graphics format"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://mitchellh.com/ghostty",children:"Ghostty"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://sw.kovidgoyal.net/kitty/graphics-protocol/#unicode-placeholders",children:"Kitty unicode placeholders"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.a,{href:"https://github.com/microsoft/terminal",children:"Windows Terminal"})," (>= v1.22.2702.0)"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.vt100.net/docs/vt3xx-gp/chapter14.html",children:"Sixel graphics format"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://gitlab.gnome.org/raggesilver/blackbox",children:"Black Box"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.vt100.net/docs/vt3xx-gp/chapter14.html",children:"Sixel graphics format"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/microsoft/vscode",children:"VSCode"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/Eugeny/tabby",children:"Tabby"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/vercel/hyper",children:"Hyper"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://iterm2.com/documentation-images.html",children:"Inline images protocol"})}),(0,s.jsx)(i.td,{children:"\u2705 Built-in"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"X11 / Wayland"}),(0,s.jsx)(i.td,{children:"Window system protocol"}),(0,s.jsxs)(i.td,{children:["\u2611\ufe0f ",(0,s.jsx)(i.a,{href:"https://github.com/jstkdng/ueberzugpp",children:"\xdcberzug++"})," required"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Fallback"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ASCII_art",children:"ASCII art (Unicode block)"})}),(0,s.jsxs)(i.td,{children:["\u2611\ufe0f ",(0,s.jsx)(i.a,{href:"https://hpjansson.org/chafa/",children:"Chafa"})," required"]})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Yazi automatically selects the appropriate preview method for you, based on the priority from top to bottom.\nThat's relying on the ",(0,s.jsx)(i.code,{children:"$TERM"}),", ",(0,s.jsx)(i.code,{children:"$TERM_PROGRAM"}),", and ",(0,s.jsx)(i.code,{children:"$XDG_SESSION_TYPE"})," variables, make sure you don't overwrite them by mistake!"]}),"\n",(0,s.jsx)(i.p,{children:'For instance, if your terminal is Alacritty, which doesn\'t support displaying images itself, but you are running on an X11/Wayland environment,\nit will automatically use the "Window system protocol" to display images - this requires you to have \xdcberzug++ installed.'}),"\n",(0,s.jsx)(i.h2,{id:"tmux",children:"tmux users"}),"\n",(0,s.jsxs)(i.p,{children:["To enable Yazi's image preview to work correctly in tmux, add the following 3 options to your ",(0,s.jsx)(i.code,{children:"tmux.conf"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"set -g allow-passthrough all\nset -ga update-environment TERM\nset -ga update-environment TERM_PROGRAM\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then restart tmux (important):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"tmux kill-server && tmux || tmux\n"})}),"\n",(0,s.jsx)(i.p,{children:"Now you should be able to enjoy with the image preview."}),"\n",(0,s.jsx)(i.h2,{id:"zellij",children:"Zellij users"}),"\n",(0,s.jsx)(i.p,{children:"Zellij currently only supports the Sixel graphics format, so you will need a terminal that also supports Sixel."}),"\n",(0,s.jsxs)(i.p,{children:["Note that, Zellij's Sixel implementation is quite buggy and has serious performance issues at the moment,\ncausing noticeable lagginess when quickly switching between images, and sometimes even ",(0,s.jsx)(i.a,{href:"https://github.com/zellij-org/zellij/issues/2576#issuecomment-1707107473",children:"image tearing"})," or ",(0,s.jsx)(i.a,{href:"https://github.com/zellij-org/zellij/issues/2814#issuecomment-2318473921",children:"not working at all"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["These issues won't be improved until Zellij enhances it's Sixel implementation or ",(0,s.jsx)(i.a,{href:"https://github.com/zellij-org/zellij/issues/775",children:"provides a passthrough mode"}),". If the image is a stronger need to you, consider running Yazi outside of Zellij or using \xdcberzug++:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"# Deceive Yazi into thinking you're running in Neovim,\n# forcing it fallback to \xdcberzug++ or Chafa\nNVIM=1 NVIM_LOG_FILE=1 yazi\n"})}),"\n",(0,s.jsx)(i.h2,{id:"windows",children:"Windows users"}),"\n",(0,s.jsx)(i.p,{children:"Currently, only the following 3 terminals support displaying images on Windows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"WezTerm"}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/microsoft/terminal/releases/tag/v1.22.2702.0",children:"Windows Terminal Preview v1.22.2702.0"})}),"\n",(0,s.jsx)(i.li,{children:"Mintty (Git Bash, which comes with Git for Windows)"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"wsl",children:"Windows with WSL users"}),"\n",(0,s.jsx)(i.p,{children:"Limited by ConPTY, the Windows edition has had to implement many workarounds, which are not perfect."}),"\n",(0,s.jsxs)(i.p,{children:["However, if you run Yazi in WSL, you can experience perfect image previews using ",(0,s.jsx)(i.code,{children:"wezterm ssh"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.a,{href:"https://wezfurlong.org/wezterm/",children:"WezTerm"})," is an excellent terminal that can bypass the limitations of ConPTY through its SSH feature, and it's currently the only terminal that allows this approach."]}),"\n",(0,s.jsxs)(i.p,{children:["You need to install ",(0,s.jsx)(i.code,{children:"sshd"})," in WSL and start it:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"sudo apt install openssh-server\nsudo service ssh restart\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then, on the host machine, connect to WSL over SSH:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"wezterm ssh 127.0.0.1\n"})}),"\n",(0,s.jsx)(i.p,{children:"That's it! you can now get Yazi's image preview working properly."}),"\n",(0,s.jsx)(i.h2,{id:"neovim",children:"Neovim users"}),"\n",(0,s.jsxs)(i.p,{children:["The builtin terminal emulator (",(0,s.jsx)(i.code,{children:":term"}),") in Neovim ",(0,s.jsx)(i.a,{href:"https://github.com/neovim/neovim/issues/4349",children:"doesn't support any graphic protocols"}),", so Yazi will try to fallback to X11/Wayland/Chafa in sequence."]}),"\n",(0,s.jsxs)(i.p,{children:["Note that \xdcberzug++ might display images in the wrong position; in that case, please adjust it manually using ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi/#preview.ueberzug_scale",children:(0,s.jsx)(i.code,{children:"ueberzug_offset"})}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"debug-ueberzug",children:"Why can't I preview images via \xdcberzug++?"}),"\n",(0,s.jsxs)(i.p,{children:["This may be a problem with \xdcberzug++ itself. Please build Yazi in debug mode ",(0,s.jsx)(i.a,{href:"/docs/installation#build-from-source",children:"as per this"})," but ",(0,s.jsx)(i.code,{children:"cargo build"})," without ",(0,s.jsx)(i.code,{children:"--release"})," flag - you can run ",(0,s.jsx)(i.code,{children:"yazi --debug"})," to verify it, and you will see the output includes ",(0,s.jsx)(i.code,{children:"Debug : true"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["And hover on some images, then find the last \xdcberzug++ command in your ",(0,s.jsx)(i.code,{children:"~/.local/state/yazi/yazi.log"})," sorted by time. It is usually at the very end of the file and looks like:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'ueberzugpp command: {"action":"add","identifier":"yazi","x":96,"y":1,"max_width":400,"max_height":150,"path":"/root/test.jpg"}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Finally, run ",(0,s.jsx)(i.code,{children:"ueberzugpp layer"})," directly in the terminal without and outside Yazi, and paste the command:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:'{"action":"add","identifier":"yazi","x":96,"y":1,"max_width":400,"max_height":150,"path":"/root/test.jpg"}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["into it, press ",(0,s.jsx)(i.code,{children:"Enter"}),", and to see if any image is shown, without exiting the \xdcberzug++."]}),"\n",(0,s.jsx)(i.p,{children:"If the image shows properly when using \xdcberzug++ independently, but not when used with Yazi, please create a bug report with:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The contents of ",(0,s.jsx)(i.code,{children:"~/.local/state/yazi/yazi.log"})]}),"\n",(0,s.jsxs)(i.li,{children:["The contents of ",(0,s.jsx)(i.code,{children:"/tmp/ueberzugpp-$USER.log"})]}),"\n",(0,s.jsx)(i.li,{children:"A GIF demonstration of the above steps"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"size",children:"Why won't my images adapt to terminal size?"}),"\n",(0,s.jsx)(i.p,{children:"The size of the image depends on two factors:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi#preview.max_width",children:"max_width"})," and ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi#preview.max_height",children:"max_height"})," config options, which need to be adjusted by the user as needed."]}),"\n",(0,s.jsx)(i.li,{children:"The pixel size of the terminal."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Yazi will use the smaller of these two factors as the image preview size."}),"\n",(0,s.jsxs)(i.p,{children:["However, some terminals (such as VSCode, Tabby, and all Windows terminals) don't implement the ",(0,s.jsx)(i.code,{children:"ioctl"})," system call, before ",(0,s.jsxs)(i.a,{href:"https://github.com/crossterm-rs/crossterm/pull/810",children:["Add ",(0,s.jsx)(i.code,{children:"CSI 14 t"})," sequence support"]})," is merged, it's not possible to obtain the actual pixel width and height of the terminal."]}),"\n",(0,s.jsxs)(i.p,{children:["Hence, only ",(0,s.jsx)(i.code,{children:"max_width"})," and ",(0,s.jsx)(i.code,{children:"max_height"})," will be used in this case."]})]})}function c(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6225:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>l});var s=t(959);const n={},r=s.createContext(n);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);