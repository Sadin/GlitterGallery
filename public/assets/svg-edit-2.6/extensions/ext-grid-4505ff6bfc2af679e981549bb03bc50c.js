svgEditor.addExtension("view_grid",function(e){function t(e){for(var t=(+d.attr("width"),+d.attr("height"),svgedit.units.getTypeMap()),i=t[svgEditor.curConfig.baseUnit],n=[.01,.1,1,10,100,1e3],a=0,r=0===a,o=r?"x":"y",v=svgCanvas.getContentElem(),l=(v.getAttribute(o)-0,s),h=i*e,p=100/h,c=1,u=0;u<n.length;u++){var m=n[u];if(c=m,m>=p)break}var w=c*h;l.width=w,l.height=w;var b=l.getContext("2d"),C=.5,y=w/10;b.globalAlpha=.2,b.strokeStyle="#000";for(var u=1;10>u;u++){var _=Math.round(y*u)+.5,f=0;b.moveTo(_,w),b.lineTo(_,f),b.moveTo(w,_),b.lineTo(f,_)}b.stroke(),b.beginPath(),b.globalAlpha=.5,b.moveTo(C,w),b.lineTo(C,0),b.moveTo(w,C),b.lineTo(0,C),b.stroke();var E=l.toDataURL("image/png");g.setAttribute("width",w),g.setAttribute("height",w),g.parentNode.setAttribute("width",w),g.parentNode.setAttribute("height",w),svgCanvas.setHref(g,E)}var i=document.getElementById("svgcanvas").ownerDocument,n="http://www.w3.org/2000/svg",a=(svgEditor.curConfig.dimensions,e.svgroot,!1),r=svgCanvas.assignAttributes,s=document.createElement("canvas");$(s).hide().appendTo("body");var o=i.createElementNS(n,"svg");r(o,{id:"canvasGrid",width:"100%",height:"100%",x:0,y:0,overflow:"visible",display:"none"});var d=$("#canvasBackground");d.append(o);var v=i.createElementNS(n,"pattern");r(v,{id:"gridpattern",patternUnits:"userSpaceOnUse",x:0,y:0,width:100,height:100});var g=i.createElementNS(n,"image");r(g,{x:0,y:0,width:100,height:100}),v.appendChild(g),$("#canvasGrid").append(v);var l=i.createElementNS(n,"rect");return r(l,{width:"100%",height:"100%",x:0,y:0,"stroke-width":0,stroke:"none",fill:"url(#gridpattern)",style:"pointer-events: none; display:visible;"}),$("#canvasGrid").append(l),{name:"view_grid",svgicons:"/assets/svg-edit-2.6/extensions/grid-icon.xml",zoomChanged:function(e){a&&t(e)},buttons:[{id:"view_grid",type:"context",panel:"editor_panel",title:"Show/Hide Grid",events:{click:function(){var e=!$("#view_grid").hasClass("push_button_pressed");e?(svgEditor.curConfig.showGrid=a=!0,$("#view_grid").addClass("push_button_pressed").removeClass("tool_button"),$("#canvasGrid").attr("display","normal"),t(svgCanvas.getZoom())):(svgEditor.curConfig.showGrid=a=!1,$("#view_grid").removeClass("push_button_pressed").addClass("tool_button"),$("#canvasGrid").attr("display","none"))}}}]}});