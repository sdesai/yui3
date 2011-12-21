YUI.add("widget-htmlrenderer",function(a){var i="content",g="id",e="destroyed",c="body",f=a.Node,b=a.Handlebars,d=a.ClassNameManager.getClassName,h=a.Widget.getClassName;a.WidgetHTMLRenderer=function(){};a.WidgetHTMLRenderer.prototype={renderHTML:function(m){var n,k,j,l;if(!this.get(e)){j={};k=[];this.renderUI(k,j);j.content=k.join("");n=[];this._renderUI(n,j);l=n.join("");if(m){if(f&&m instanceof f){m.append(l);}else{m.push(l);}}this._renderedUI=true;}return l;},_renderHTML:function(){var l=this.DEF_PARENT_NODE,j=this._parentNode||(l&&f.one(l)),k=j||[],m;this.renderHTML(k);if(!j){m=k.join();f.one(c).insert(m,0);}},_renderUI:function(j,k){this._renderBox(j,k);},_renderBox:function(j,k){k.id=this.get(g);this._renderBoxClassNames(k);if(this.CONTENT_TEMPLATE){k.contentBox=b.render(this.CONTENT_TEMPLATE,k);}else{k.contentBox=k.content;}j.push(b.render(this.BOUNDING_TEMPLATE,k));this._mapInstance(k.id);},_renderBoxClassNames:function(n){var m=this._getClasses(),j,l,k=this.getClassName(i),o=[];o[o.length]=h();for(l=m.length-3;l>=0;l--){j=m[l];o[o.length]=j.CSS_PREFIX||d(j.NAME.toLowerCase());}if(this.CONTENT_TEMPLATE===null){o.push(k);}else{n.contentClasses=k;}n.boundingClasses=o.join(" ");},syncRenderedBoxes:function(){var k=a.Node.one("#"+this.get(g)),j=(this.CONTENT_TEMPLATE===null)?k:k.one("."+this.getClassName(i));this._set("boundingBox",k);this._set("contentBox",j);},renderer:function(){if(!this._renderedUI){this._renderHTML();}this.syncRenderedBoxes();this._bindUI();this.bindUI();this._syncUI();this.syncUI();},BOUNDING_TEMPLATE:'<div id="{{id}}" class="{{boundingClasses}}">{{{contentBox}}}</div>',CONTENT_TEMPLATE:'<div class="{{contentClasses}}">{{{content}}}</div>',_setBox:function(k,j){j=f.one(j);if(j&&!j.get(g)){j.set(g,k||a.guid());}return j;}};},"@VERSION@",{requires:["handlebars","classnamemanager"]});