YUI.add("anim-color",function(B){var A=Number;B.Anim.behaviors.color={set:function(F,D,I,H,C,G,E){I=B.Color.re_RGB.exec(B.Color.toRGB(I));H=B.Color.re_RGB.exec(B.Color.toRGB(H));if(!I||!H){B.fail("invalid from or to passed to color behavior");}F._node.setStyle(D,"rgb("+[Math.floor(E(C,A(I[1]),A(H[1])-A(I[1]),G)),Math.floor(E(C,A(I[2]),A(H[2])-A(I[2]),G)),Math.floor(E(C,A(I[3]),A(H[3])-A(I[3]),G))].join(", ")+")");},get:function(D,C){var E=D._node.getComputedStyle(C);E=(E==="transparent")?"rgb(255, 255, 255)":E;return E;}};B.each(["backgroundColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],function(C,D){B.Anim.behaviors[C]=B.Anim.behaviors.color;});},"@VERSION@",{requires:["anim-base","node-style"]});