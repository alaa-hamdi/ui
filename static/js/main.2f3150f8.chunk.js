(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"buttonbase",function(){return g}),t.d(r,"primary",function(){return v}),t.d(r,"secondary",function(){return h}),t.d(r,"link",function(){return k}),t.d(r,"text",function(){return B}),t.d(r,"split",function(){return E}),t.d(r,"small",function(){return j}),t.d(r,"medium",function(){return S}),t.d(r,"large",function(){return w}),t.d(r,"disabled",function(){return O});var i=t(1),o=t(0),a=t.n(o),u=t(2);function l(){var n=Object(i.a)(["\n  background-color: ",";\n  cursor: not-allowed;\n"]);return l=function(){return n},n}function c(){var n=Object(i.a)(["\n  padding-right: 16px;\n  padding-left: 16px;\n  height: 48px;\n"]);return c=function(){return n},n}function p(){var n=Object(i.a)(["\n  padding-right: 16px;\n  padding-left: 16px;\n  height: 40px;\n"]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  padding-left: 8px;\n  padding-right: 8px;\n  height: 32px;\n"]);return d=function(){return n},n}function s(){var n=Object(i.a)(["\n  padding-left: 32px;\n  :before {\n    background-color: ",';\n    content: "";\n    height: 24px;\n    position: absolute;\n    right: 38px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 1px;\n  }\n']);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n  background-color: transparent;\n  :hover {\n    color: ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(i.a)(["\n  background-color: transparent;\n  color:",";\n  :hover {\n    color: ",";\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(i.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n \n  :hover {\n    color: ",";\n    border-color: ",";\n  }\n  \n  :focus {\n      border-color: ",";\n      color: ",";\n    }\n"]);return b=function(){return n},n}function x(){var n=Object(i.a)(["\n  background-color: ",";\n  color: ",";\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n"]);return x=function(){return n},n}function y(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  border-radius: ",";\n  cursor: pointer;\n  user-select: none;\n  border: 0;\n  -webkit-appearance: none;\n  position: relative;\n  transition-property: background-color, border-color, color;\n  transition-duration: 0.1s;\n  transition-timing-function: ease-in;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  flex: 0 0 auto;\n  font-family: ",";\n  background-color: ",";\n  color:",";\n    :hover {\n      transition-property: background-color, border-color, color;\n      transition-duration: 0.1s;\n      transition-timing-function: ease-in;\n  }\n  :active {\n    top: 1px;\n  }\n  :focus {\n      box-shadow: 0 0 0 3px ",";\n      outline: 0;\n  }  \n"]);return y=function(){return n},n}var g=Object(u.a)(y(),"1rem",1.5,500,"4px",'"Roboto", sans-serif',"#FFFFFF","#77797a","#ABB7FF"),v=Object(u.a)(x(),"#2c4bff","#FFFFFF","#1F35B3","#FFFFFF"),h=Object(u.a)(b(),"#FFFFFF","#636363","#B8B8B8","#3D3D3D","#636363","#2c4bff","#3D3D3D"),k=Object(u.a)(m(),"#2c4bff","#1F35B3"),B=Object(u.a)(f(),"#3D3D3D"),E=Object(u.a)(s(),function(n){return n.primary?"#6B81FF":"#B8B8B8"}),j=Object(u.a)(d()),S=Object(u.a)(p()),w=Object(u.a)(c()),O=Object(u.a)(l(),"#E0E0E0");function C(){var n=Object(i.a)(["\n  width: 24px;\n  padding-left: 10px;\n"]);return C=function(){return n},n}function T(){var n=Object(i.a)(["\n  ",";\n"]);return T=function(){return n},n}function z(){var n=Object(i.a)(["  \n  ",";\n  ",";\n  ",";\n"]);return z=function(){return n},n}var F=u.b.div(z(),g,function(n){return r[n.size]},function(n){return r[n.disabled?"disabled":n.type]}),L=u.b.div(T(),E),M=u.b.img(C()),D=function(n){var e=n.children,t=n.disabled,r=n.onClick,i=n.type,o=n.size,u=n.label,l=n.isSplit,c=n.loading;return a.a.createElement(F,{onClick:!t&&r,disabled:t,size:o,type:i,isSplit:l,"aria-label":u||null},e,l&&a.a.createElement(L,null,"\u25be"),c&&a.a.createElement(M,{src:"./images/loading-gray.svg",alt:"loading"}))};D.defaultProps={disabled:!1,isSplit:!1,loading:!1,size:"medium"};var P=D;t.d(e,"a",function(){return P})},,,,,,,,function(n,e){n.exports=[{name:"Button",description:"All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.\nCombined with simple modifiers, they can be changed in size and appearance.",props:{children:{type:{name:"node"},required:!0,description:"Children node"},disabled:{type:{name:"bool"},required:!1,description:"Is the button disabled",defaultValue:{value:"false",computed:!1}},size:{type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'large'",computed:!1},{value:"'medium'",computed:!1}]},required:!1,description:"Size of the Button",defaultValue:{value:"'medium'",computed:!1}},onClick:{type:{name:"func"},required:!0,description:"OnClick handler"},label:{type:{name:"string"},required:!0,description:"Button label for accessibility"},type:{type:{name:"enum",value:[{value:"'link'",computed:!1},{value:"'primarySplit'",computed:!1},{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'text'",computed:!1}]},required:!0,description:"Type of button"},isSplit:{type:{name:"bool"},required:!1,description:"Is the Button Split",defaultValue:{value:"false",computed:!1}},loading:{type:{name:"bool"},required:!1,description:"Is the Button Loading",defaultValue:{value:"false",computed:!1}}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\nimport style from 'styled-components';\nimport * as Styles from './style';\n\nconst ButtonStyled = style.div`  \n  ${Styles.buttonbase};\n  ${props => Styles[props.size]};\n  ${props => Styles[props.disabled ? 'disabled' : props.type]};\n`;\n\nconst ButtonArrow = style.div`\n  ${Styles.split};\n`;\n\nconst Loading = style.img`\n  width: 24px;\n  padding-left: 10px;\n`;\n\n/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.\n * Combined with simple modifiers, they can be changed in size and appearance.  */\nconst Button = ({\n  children,\n  disabled,\n  onClick,\n  type,\n  size,\n  label,\n  isSplit,\n  loading,\n}) => (\n  <ButtonStyled\n    onClick={!disabled && onClick}\n    disabled={disabled}\n    size={size}\n    type={type}\n    isSplit={isSplit}\n    aria-label={label || null}\n  >\n    {children}\n    {isSplit && <ButtonArrow>\u25be</ButtonArrow>}\n    {loading && <Loading src=\"./images/loading-gray.svg\" alt=\"loading\" />}\n  </ButtonStyled>\n);\n\n\nButton.propTypes = {\n  /** Children node */\n  children: PropTypes.node.isRequired,\n\n  /** Is the button disabled */\n  disabled: PropTypes.bool,\n\n  /** Size of the Button */\n  size: PropTypes.oneOf(['small', 'large', 'medium']),\n\n  /** OnClick handler */\n  onClick: PropTypes.func.isRequired,\n\n  /** Button label for accessibility */\n  label: PropTypes.string.isRequired,\n\n  /** Type of button */\n  type: PropTypes.oneOf(['link', 'primarySplit', 'primary', 'secondary', 'text']).isRequired,\n\n  /** Is the Button Split  */\n  isSplit: PropTypes.bool,\n\n  /** Is the Button Loading  */\n  loading: PropTypes.bool,\n};\n\n\nButton.defaultProps = {\n  disabled: false,\n  isSplit: false,\n  loading: false,\n  size: 'medium',\n};\n\n\nexport default Button;\n",examples:[[{name:"SizeLarge",description:"Large",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Large */\nexport default function ExampleSizeLarge() {\n  return (\n    <Button type=\"primary\" size=\"large\" onClick={() => {}}>\n      Click Me\n    </Button>\n  );\n}\n",title:"Size"},{name:"SizeMedium",description:"Normal",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Normal */\nexport default function ExampleSizeNormal() {\n  return (\n    <Button type=\"primary\" onClick={() => {}}>\n      Click Me\n    </Button>\n  );\n}\n",title:"Size"},{name:"SizeSmall",description:"Small",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Small */\nexport default function ExampleSizeSmall() {\n  return (\n    <Button type=\"primary\" size=\"small\" onClick={() => {}}>\n      Click Me\n    </Button>\n  );\n}\n",title:"Size"}],[{name:"StateDisabled",description:"Disabled",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Disabled */\nexport default function ExampleDisabled() {\n  return (\n    <Button\n      type=\"primary\"\n      disabled\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"State"},{name:"StateLoading",description:"Loading",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Loading */\nexport default function ExamplePrimaryLoading() {\n  return (\n    <Button\n      type=\"primary\"\n      loading\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"State"}],[{name:"TypeLink",description:"Link Button",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Link Button */\nexport default function ExampleTypeLink() {\n  return (\n    <Button\n      type=\"link\"\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"Type"},{name:"TypePrimary",description:"Primary Button",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Primary Button */\nexport default function ExampleTypePrimary() {\n  return (\n    <Button\n      type=\"primary\"\n      size=\"large\"\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"Type"},{name:"TypeSecondary",description:"Secondary Button",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Secondary Button */\nexport default function ExampleTypeSecondary() {\n  return (\n    <Button\n      type=\"secondary\"\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"Type"},{name:"TypeSplit",description:"Split Button",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Split Button */\nexport default function ExampleTypeSplit() {\n  return (\n    <Button\n      type=\"primary\"\n      isSplit\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"Type"},{name:"TypeText",description:"Text Button",code:"import React from 'react';\nimport Button from '@bufferapp/components-new/Button';\n\n/** Text Button */\nexport default function ExampleTypeText() {\n  return (\n    <Button\n      type=\"text\"\n      onClick={() => {}}\n    >\n      Click Me\n    </Button>\n  );\n}\n",title:"Type"}]]}]},,,,,function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",size:"large",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",size:"small",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",disabled:!0,onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",loading:!0,onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"link",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",size:"large",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"secondary",onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"primary",isSplit:!0,onClick:function(){}},"Click Me")}},function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return a});var r=t(0),i=t.n(r),o=t(3);function a(){return i.a.createElement(o.a,{type:"text",onClick:function(){}},"Click Me")}},,,,,function(n,e,t){n.exports=t(46)},,,,,function(n,e,t){},,,,,,,,,,function(n,e,t){var r={"./Button/Size/SizeLarge":16,"./Button/Size/SizeLarge.jsx":16,"./Button/Size/SizeMedium":17,"./Button/Size/SizeMedium.jsx":17,"./Button/Size/SizeSmall":18,"./Button/Size/SizeSmall.jsx":18,"./Button/State/StateDisabled":19,"./Button/State/StateDisabled.jsx":19,"./Button/State/StateLoading":20,"./Button/State/StateLoading.jsx":20,"./Button/Type/TypeLink":21,"./Button/Type/TypeLink.jsx":21,"./Button/Type/TypePrimary":22,"./Button/Type/TypePrimary.jsx":22,"./Button/Type/TypeSecondary":23,"./Button/Type/TypeSecondary.jsx":23,"./Button/Type/TypeSplit":24,"./Button/Type/TypeSplit.jsx":24,"./Button/Type/TypeText":25,"./Button/Type/TypeText.jsx":25};function i(n){var e=o(n);return t(e)}function o(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=45},function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(9),a=t.n(o),u=(t(35),t(37),t(4)),l=t(5),c=t(7),p=t(6),d=t(8),s=t(1),f=t(2);function m(){var n=Object(s.a)(["\n    text-decoration: none;\n    position: relative;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: inherit;\n    padding: 7px 24px 7px 16px;\n    border: 1px solid transparent;\n    border-right: 0px;\n    cursor: pointer;\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n    text-decoration: none;\n    color: #5C6975;\n    margin-left: 0px;\n    border-left-color: transparent;\n    display: block;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    border-left: 1px solid transparent;\n"]);return b=function(){return n},n}function x(){var n=Object(s.a)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    display: block;\n    margin: 0px;\n    padding: 0px;\n    width: 100%;\n    flex: 1 1 auto;\n    overflow-y: auto;\n    padding-bottom: 24px;\n    font-size: 15px;\n    margin-top: 32px;\n"]);return x=function(){return n},n}function y(){var n=Object(s.a)(["\n    z-index: 15;\n    flex: 0 0 auto;\n    background: #F5F7F9;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: calc((100% - 1448px) / 2 );\n    padding-left: calc((100% - 1448px) / 2);\n    border-right: 1px solid #E6ECF1;\n"]);return y=function(){return n},n}var g=f.b.div(y()),v=f.b.ul(x()),h=f.b.li(b()),k=f.b.a(m()),B=function(n){var e=n.components;return i.a.createElement(g,null,i.a.createElement(v,null,e.map(function(n){return i.a.createElement(h,{key:n},i.a.createElement(k,{href:"#".concat(n)},n))})))},E=t(14),j=t.n(E),S=t(28),w=t.n(S),O=function(n){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){j.a.registerLanguage("javascript",w.a),j.a.highlightBlock(this.element)}},{key:"render",value:function(){var n=this,e=this.props.children;return i.a.createElement("pre",{ref:function(e){n.element=e}},i.a.createElement("code",null,e))}}]),e}(i.a.Component);function C(){var n=Object(s.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    text-align: center;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n"]);return C=function(){return n},n}function T(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]);return T=function(){return n},n}function z(){var n=Object(s.a)(["\n  color: #828485;\n  padding-top: 10px;\n  font-size: 12px;\n  display: flex;\n  justify-content: end;\n  cursor: pointer;\n"]);return z=function(){return n},n}function F(){var n=Object(s.a)(["\n  padding: 5px 25px;\n  background: #f6f7f9;\n  border: 1px solid #e6ecf1;\n  border-radius: 2px;\n  margin-bottom: 20px;\n  min-width: 42%;\n  max-width: 42%;\n  margin-right: 20px;\n  min-height: 100px;\n"]);return F=function(){return n},n}var L=f.b.div(F()),M=f.b.a(z()),D=f.b.div(T()),P=f.b.div(C()),R=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(c.a)(this,Object(p.a)(e).call(this,n))).toggleCode=function(n){n.preventDefault();var e=t.state.showCode;t.setState({showCode:!e})},t.state={showCode:!1},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.state.showCode,e=this.props,r=e.example,o=e.componentName,a=r.code,u=r.description,l=r.name,c=r.title,p=t(45)("./".concat(o,"/").concat(c,"/").concat(l)).default;return i.a.createElement(L,null,i.a.createElement(D,null,u&&i.a.createElement(P,null,u),i.a.createElement(p,null)),i.a.createElement(M,{onClick:this.toggleCode},n?"Hide ":"Show ","Code"),n&&i.a.createElement(O,null,a))}}]),e}(i.a.Component);function q(){var n=Object(s.a)(["\n    padding: 10px 0px;\n    padding-right: 25px;\n    font-size: 14px;\n"]);return q=function(){return n},n}function N(){var n=Object(s.a)(["\n    padding: 10px 0px;\n"]);return N=function(){return n},n}function A(){var n=Object(s.a)(["\n    text-align: left;\n    padding: 10px 0px;\n    padding-right: 25px;\n"]);return A=function(){return n},n}function I(){var n=Object(s.a)(["\n    width: 100%;\n"]);return I=function(){return n},n}var V=f.b.table(I()),W=f.b.th(A()),$=f.b.tr(N()),J=f.b.td(q()),U=function(n){var e=n.props;return i.a.createElement(V,null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement(W,null,"Name"),i.a.createElement(W,null,"Description"),i.a.createElement(W,null,"Type"),i.a.createElement(W,null,"Default"),i.a.createElement(W,null,"Required"))),i.a.createElement("tbody",null,Object.keys(e).map(function(n){return i.a.createElement($,{key:n},i.a.createElement(J,null,n),i.a.createElement(J,null,e[n].description),i.a.createElement(J,null,e[n].type.name),i.a.createElement(J,null,e[n].defaultValue&&e[n].defaultValue.value),i.a.createElement(J,null,e[n].required&&"X"))})))};function _(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: end;\n"]);return _=function(){return n},n}function H(){var n=Object(s.a)(["\n    margin-top: 50px;\n"]);return H=function(){return n},n}function K(){var n=Object(s.a)(["\n    font-size: 14px;\n    line-height: 24px;\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n    display: block;\n    margin: 0px;\n    flex: 1 1 auto;\n    border-left: 2px solid #E6ECF1;\n    padding: 0 16px;\n    border-left-color: #2E5DF8;\n"]);return Q=function(){return n},n}function X(){var n=Object(s.a)(["\n    margin: 0px;\n    padding: 40px 0px;\n    flex: auto;\n    display: flex;\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n    display: block;\n    margin: 0px;\n    padding: 0px;\n    border-bottom: 1px solid #E6ECF1;\n    margin-bottom: 32px;\n"]);return Y=function(){return n},n}function G(){var n=Object(s.a)(["\n    display: block;\n    padding: 0px;\n    flex: 1 1 auto;\n    min-width: 0px;\n    max-width: 980px;\n    margin: 0px 88px;\n"]);return G=function(){return n},n}function Z(){var n=Object(s.a)(["\n    flex: 1 1 auto;\n    min-width: 0px;\n    display: flex;\n    position: relative;\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n    margin: 0px;\n    padding: 0px;\n    flex: 1 1 auto;\n    min-width: 0px;\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    max-width: 100%;\n    padding-bottom: 64px;\n"]);return nn=function(){return n},n}var en=f.b.div(nn()),tn=f.b.div(Z()),rn=f.b.div(G()),on=f.b.div(Y()),an=f.b.div(X()),un=f.b.h2(Q()),ln=f.b.p(K()),cn=f.b.h3(H()),pn=f.b.div(_()),dn=function(n){var e=n.component,t=e.name,r=e.description,o=e.props,a=e.examples;return i.a.createElement(en,null,i.a.createElement(tn,null,i.a.createElement(rn,null,i.a.createElement(on,null,i.a.createElement(an,null,i.a.createElement(un,null,t))),i.a.createElement(ln,null,r),i.a.createElement("h3",null,"Example",a.length>1&&"s"),a.map(function(n){return[i.a.createElement("h4",null,t+" "+n[0].title+"s"),i.a.createElement(pn,null,n.length>0?n.map(function(n){return i.a.createElement(R,{key:n.code,example:n,componentName:t})}):"No examples exist.")]}),i.a.createElement(cn,null," Props"),o?i.a.createElement(U,{props:o}):"This component accepts no props.")))},sn=t(11),fn=t.n(sn);function mn(){var n=Object(s.a)(["\n     font-size: 28px;\n    line-height: 1.5;\n    font-weight: 500;\n"]);return mn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    display: block;\n    margin: 0px;\n    padding: 0px;\n    padding-left: 16px;\n    color: #242A31;\n"]);return bn=function(){return n},n}function xn(){var n=Object(s.a)(["\n    max-width: 100%;\n    border-radius: 3px;\n    overflow: hidden;\n    width: 40px;\n    height: 40px;\n    font-size: 24px;\n    line-height: 1.5;\n    font-weight: 500;\n"]);return xn=function(){return n},n}function yn(){var n=Object(s.a)(["\n    display: block;\n    margin: 0px;\n    padding: 0px;\n"]);return yn=function(){return n},n}function gn(){var n=Object(s.a)(["\n    cursor: pointer;\n    display: flex;\n    text-decoration: none;\n    align-items: center;\n"]);return gn=function(){return n},n}function vn(){var n=Object(s.a)(["\n    max-width: 1400px;\n    width: 100%;\n    margin: 0px auto;\n    display: flex;\n    align-items: center;\n    padding: 0;\n    flex: auto;\n"]);return vn=function(){return n},n}function hn(){var n=Object(s.a)(["\n    background: #fff;\n    border-bottom: 1px solid #d4dadf;\n    box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);\n    z-index: 20;\n    display: flex;\n    align-items: stretch;\n    position: relative;\n    flex: 0 80px;\n    min-height: 80px;\n    padding-left: 24px;\n    padding-right: 24px;\n"]);return hn=function(){return n},n}function kn(){var n=Object(s.a)(["\n    display: block;\n    margin: 0px;\n    padding: 0px;\n"]);return kn=function(){return n},n}var Bn=f.b.div(kn()),En=f.b.div(hn()),jn=f.b.div(vn()),Sn=f.b.a(gn()),wn=f.b.div(yn()),On=f.b.img(xn()),Cn=f.b.div(bn()),Tn=f.b.h1(mn()),zn=function(n){var e=n.title;return i.a.createElement(Bn,null,i.a.createElement(En,null,i.a.createElement(jn,null,i.a.createElement(Sn,null,i.a.createElement(wn,null,i.a.createElement(On,{src:"https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LFNym8ScnaWKWBQFWTw%2Favatar.png?generation=1529427935328806&alt=media"})),i.a.createElement(Cn,null,i.a.createElement(Tn,null,e))))))};function Fn(){var n=Object(s.a)(["\n  display: flex;\n"]);return Fn=function(){return n},n}function Ln(){var n=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  color: #242A31;\n  background: #F5F7F9;\n  display: flex;\n  flex-direction: column;\n"]);return Ln=function(){return n},n}var Mn=f.b.div(Ln()),Dn=f.b.div(Fn()),Pn=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(c.a)(this,Object(p.a)(e).call(this,n))).state={route:window.location.hash.substr(1)},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("hashchange",function(){return n.setState({route:window.location.hash.substr(1)})})}},{key:"render",value:function(){var n=this.state.route,e=n?fn.a.filter(function(e){return e.name===n})[0]:fn.a[0];return i.a.createElement(Mn,null,i.a.createElement(zn,{title:"Buffer Components Documentation"}),i.a.createElement(Dn,null,i.a.createElement(B,{components:fn.a.map(function(n){return n.name})}),i.a.createElement(dn,{component:e})))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(Pn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}],[[30,2,1]]]);
//# sourceMappingURL=main.2f3150f8.chunk.js.map