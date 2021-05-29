exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 2618:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-transition-group/cjs/index.js
var cjs = __webpack_require__(1811);
// EXTERNAL MODULE: ./node_modules/@n8tb1t/use-scroll-position/lib/index.js
var lib = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
var framer_motion_cjs = __webpack_require__(9141);
;// CONCATENATED MODULE: ./components/Navbar.tsx








const linksArray = [{
  name: "Página Principal",
  url: "http://www.ameciclo.org"
}, {
  name: "Plataforma de Dados",
  url: "/"
}, {
  name: "Documentos",
  url: "/documentos"
}, {
  name: "Contagens",
  url: "/contagens"
}, {
  name: "Ideciclo",
  url: "/ideciclo"
}, {
  name: "Pesquisa Perfil",
  url: "/perfil"
}];
const ButtonContainer = styled_components_cjs/* default.div */.ZP.div`
  @media (min-width: 820px) {
    display: none;
  }
  height: 32px;
  width: 32px;
  display: flex;
  z-index: 21;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  .line {
    height: 2px;
    width: 20px;
    background: ${props => props.color};
    transition: all 0.2s ease;
  }
  .lineTop {
    transform: ${props => props.open ? "rotate(45deg)" : "none"};
    transform-origin: top left;
    margin-bottom: 5px;
  }
  .lineMiddle {
    opacity: ${props => props.open ? "0" : "1"};
    transform: ${props => props.open ? "translateX(-16px)" : "none"};
  }
  .lineBottom {
    transform: ${props => props.open ? "translateX(-1px) rotate(-45deg)" : "none"};
    transform-origin: top left;
    margin-top: 5px;
  }
`;
const Container = styled_components_cjs/* default.div */.ZP.div`
  @media (min-width: 820px) {
    display: none;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => props.open ? "450px" : "0"};
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #028082;
  opacity: 0.95;
  color: #fafafa;
  transition: height 0.3s ease;
  z-index: 20;
`;
const LinksContainer = styled_components_cjs/* default.div */.ZP.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  letter-spacing: 2px;
`;
const LinkListUl = styled_components_cjs/* default.ul */.ZP.ul`
  padding-top: 60px;
  padding-right: 25px;
  padding-left: 25px;
  li {
    list-style-type: none;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 30px;
    border-bottom: 2px solid white;
    padding: 3px;
    a {
      text-decoration: none;
      color: white;
      transition: color 0.3s ease;
    }
  }
`;

const linkList = () => {
  return linksArray.map(link => {
    return /*#__PURE__*/jsx_runtime.jsx("li", {
      children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: link.url,
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: "lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-500 ease-in-out hover:border-white",
          children: link.name
        })
      })
    }, link.name);
  });
};

const responsiveLinkList = () => {
  return linksArray.map(link => {
    return /*#__PURE__*/jsx_runtime.jsx("li", {
      className: "link",
      children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: link.url,
        children: link.name
      })
    }, link.name);
  });
};

const Navbar = () => {
  const {
    0: isMenuOpen,
    1: toggleMenu
  } = (0,react.useState)(false);
  const {
    0: isHeaderScrolled,
    1: toggleHeaderScrolled
  } = (0,react.useState)(false);
  (0,lib/* useScrollPosition */.R)(({
    prevPos,
    currPos
  }) => {
    Math.abs(currPos.y) > 125 ? toggleHeaderScrolled(true) : toggleHeaderScrolled(false);
  });
  return /*#__PURE__*/jsx_runtime.jsx("nav", {
    className: "lg:px-16 px-6 bg-ameciclo text-white flex flex-wrap items-center lg:py-0 py-2 fixed z-10 w-full",
    style: {
      zIndex: 501
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex-1 flex justify-between items-center container mx-auto",
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          children: /*#__PURE__*/jsx_runtime.jsx(framer_motion_cjs/* AnimatePresence */.M_, {
            children: isHeaderScrolled ? /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                className: "w-32 h-8 text-ameciclo",
                fill: "currentColor",
                viewBox: "0 0 100.00014 29.999868",
                children: [/*#__PURE__*/jsx_runtime.jsx("defs", {}), /*#__PURE__*/jsx_runtime.jsx("path", {
                  fill: "teal",
                  d: "M0 0h100.000146v29.999869H0z"
                }), /*#__PURE__*/jsx_runtime.jsx("path", {
                  fill: "#fff",
                  d: "M11.75738 21.146205c.54292 0 1.02411-.01235 1.44427-.0374.42016-.02469.77047-.0702 1.04987-.135113V17.1457c-.1651-.0829-.43251-.153106-.80328-.210961-.37077-.05645-.81844-.08537-1.34479-.08537-.34607 0-.71261.02469-1.09996.07444-.38558.04833-.73977.151694-1.0608.307269-.32138.156986-.58984.37077-.80363.642056-.21343.271639-.32103.630061-.32103 1.074914 0 .824088.26318 1.395941.79093 1.716969.5267.321381 1.24319.481189 2.14842.481188zM11.55912 9.63683c.92181 0 1.70039.119945 2.33433.35807.63394.238477 1.1437.576086 1.53105 1.012825.387.437091.66287.954969.82797 1.556102.16404.600781.24695 1.26365.24695 1.988256v8.027105c-.19862.03316-.47414.07867-.82832.135114-.35419.05786-.75248.111478-1.19769.16122-.44344.04974-.92604.09384-1.44391.135113-.51824.04127-1.03364.06209-1.54341.06209-.72496 0-1.39206-.07444-2.00095-.221897-.60925-.148873-1.13701-.383118-1.5808-.704145-.44485-.321381-.78952-.745773-1.03752-1.272117-.24659-.526344-.36936-1.160286-.36936-1.901472 0-.708378.14323-1.317625.43145-1.827389.28787-.511175.6791-.923219 1.17263-1.236133.4946-.312914 1.07068-.542925 1.72932-.690386.65864-.148873 1.35043-.223309 2.07398-.223309.23142 0 .4699.01235.71649.0374.24836.02469.4826.05785.70415.09913.22189.04127.41486.07832.58032.111478.16545.03316.27975.05786.34572.07302v-.642055c0-.377473-.0413-.752475-.12383-1.123245-.0815-.370417-.23001-.699911-.44379-.987778-.21484-.288219-.50694-.51823-.8763-.691797-.37077-.172508-.85302-.259291-1.44568-.259291-.75636 0-1.41923.05398-1.98861.159808-.56762.107597-.99201.219075-1.27177.333728L7.8299 10.20445c.29634-.130881.79128-.258939 1.48167-.381706.6918-.124178 1.44145-.185914 2.24755-.185914zM23.92151 9.68763c-1.137 0-2.13466.07161-2.99861.220486-.86431.147461-1.56281.286809-2.09056.4191v12.473869h2.29729V11.958814c.066-.01658.19967-.04269.39687-.07585.19826-.03316.41451-.05927.65299-.08396.23848-.02363.49072-.0441.75389-.06068.26317-.01658.50976-.02752.74118-.02752.54293 0 .99096.08819 1.34515.26035.35419.173566.63676.440972.84208.803275.20531.362655.34995.814564.43109 1.357489.0829.544336.12418 1.192036.12418 1.949802v6.719358h2.29729v-7.213952c0-.559506-.036-1.094317-.1009-1.605492-.066-.509764-.16369-.978253-.29598-1.405466.18027-.165453.5207-.349956 1.02376-.556684.50165-.205316 1.14371-.30868 1.91806-.30868.5595 0 1.01317.08819 1.36701.26035.35419.173566.63535.440972.84208.803275.20532.362655.34467.814564.4191 1.357489.0744.544336.11007 1.192036.11007 1.949802v3.760611h-.004v2.884311c0 1.218142.29351 2.113845.88618 2.689931.59266.576086 1.59984.884767 3.016598.917928l.321026-1.927931c-.362301-.04974-.66957-.11183-.916516-.184855-.248002-.07408-.443438-.187325-.590898-.334787-.14888-.148872-.25647-.344311-.32244-.591255-.0497-.185914-.0801-.4064-.0924-.665339v-7.043208c0-.855839-.0621-1.642533-.18486-2.367492-.12385-.724951-.36092-1.351837-.71511-1.878182-.35419-.527755-.84737-.934508-1.4732-1.222375-.62547-.288219-1.42769-.431447-2.41547-.431447-.51153 0-.98954.05115-1.43333.158397-.44521.106187-.8502.230364-1.2125.37077-.36266.139347-.66569.283986-.9137.431447-.24659.148872-.4258.265995-.54151.348545-.37924-.428625-.84773-.756356-1.40723-.978253-.55951-.223309-1.25377-.330906-2.07645-.330906zM37.934546 16.404166c0-1.135239.165455-2.127603.494949-2.976386.327731-.847725.764823-1.551869 1.307748-2.111375.544335-.559505 1.16981-.979664 1.878187-1.259416.706966-.279753 1.431573-.420159 2.173113-.420159 1.727903 0 3.053643.540103 3.975803 1.617839.921809 1.078795 1.383242 2.720269 1.383242 4.9276v.381705c0 .157339-.0081.300567-.02469.432859h-8.791934c.09807 1.333853.485068 2.346678 1.160285 3.038475.675217.690386 1.729668 1.036461 3.161242 1.036461.807508 0 1.485548-.0702 2.03835-.20955.551039-.140406.967316-.27552 1.247068-.407811l.32103 1.926519c-.279755.148872-.770467.304447-1.47038.4699-.69991.164042-1.49366.246592-2.38266.246592-1.11901 0-2.086327-.169686-2.902302-.505884-.814209-.337608-1.485192-.803275-2.011888-1.395941-.527756-.592314-.918988-1.296459-1.174046-2.112433-.254704-.814564-.383117-1.707445-.383117-2.678995zm8.818034-1.259416c.01659-1.03752-.243769-1.889125-.778579-2.556228-.534458-.667103-1.271765-1.000478-2.210155-1.000478-.527753 0-.992362.103364-1.395941.308681-.402519.206727-.74436.474133-1.024112.803275-.279755.329494-.49883.706966-.654405 1.135591-.156985.428625-.26035.863953-.308679 1.309159zM56.573913 23.097419c-1.037518 0-1.948392-.165453-2.729793-.494595-.782815-.329494-1.44145-.789869-1.976261-1.382183-.534458-.592667-.934156-1.296811-1.197329-2.112786-.263171-.814211-.395462-1.715558-.395462-2.703689 0-.987778.144637-1.893358.432503-2.717447.288222-.822678.696032-1.534936 1.222375-2.136069.527757-.600781 1.172634-1.06927 1.938867-1.406878.764823-.337608 1.61784-.506942 2.556227-.506942.576088 0 1.152173.04939 1.729671.148872.576085.09913 1.127125.254706 1.653469.468489l-.518232 1.951214c-.34572-.164041-.745418-.296333-1.197327-.394053-.453318-.09913-.934508-.148872-1.445683-.148872-1.28411 0-2.268008.403578-2.951692 1.210028-.682273.807508-1.02376 1.984375-1.02376 3.531658 0 .691797.07691 1.325739.234244 1.901825.156985.576086.403577 1.070681.741185 1.481314.336198.412044.769056.729192 1.2954.950736.527756.223308 1.170165.333728 1.927931.333728.609249 0 1.160286-.05786 1.653824-.172509.494593-.115711.880533-.239536 1.160285-.370416l.321027 1.926519c-.130879.08255-.319617.159809-.567971.234245-.246591.07444-.526346.140405-.838906.198261-.312915.05644-.646642.106186-1.000477.147461-.35419.04128-.696032.06209-1.024115.06209zM63.312673 22.801085h-2.295877V9.957858h2.295877zm-1.160285-15.16521c-.412043 0-.762-.135114-1.050218-.406753-.287867-.271286-.431097-.637822-.431097-1.099608 0-.460023.14323-.826559.431097-1.098197.288218-.271639.638175-.407812 1.050218-.407812.412044 0 .762.136173 1.049867.407812.288218.271638.431448.638174.431448 1.098197 0 .461786-.14323.828322-.431448 1.099608-.287867.271639-.637823.406753-1.049867.406753zM71.414216 23.097419c-1.037871 0-1.948745-.165453-2.730146-.494595-.782463-.329494-1.44145-.789869-1.975909-1.382183-.534813-.592667-.934508-1.296811-1.197681-2.112786-.263173-.814211-.395465-1.715558-.395465-2.703689 0-.987778.14464-1.893358.432858-2.717447.287867-.822678.69568-1.534936 1.222375-2.136069.526347-.600781 1.172634-1.06927 1.938867-1.406878.764823-.337608 1.61784-.506942 2.556231-.506942.57608 0 1.15182.04939 1.72931.148872.57609.09913 1.12713.254706 1.65383.468489l-.51823 1.951214c-.34608-.164041-.74542-.296333-1.19769-.394053-.45331-.09913-.93415-.148872-1.44533-.148872-1.284458 0-2.268356.403578-2.95204 1.210028-.683331.807508-1.02376 1.984375-1.02376 3.531658 0 .691797.07726 1.325739.234244 1.901825.155927.576086.403931 1.070681.74154 1.481314.336195.412044.768701.729192 1.2954.950736.527753.223308 1.169806.333728 1.927576.333728.60925 0 1.16064-.05786 1.65382-.172509.4946-.115711.88054-.239536 1.16029-.370416l.32103 1.926519c-.13088.08255-.31962.159809-.56762.234245-.2466.07444-.52635.140405-.83926.198261-.31292.05644-.64629.106186-1.00048.147461-.35419.04128-.69603.06209-1.02376.06209zM79.709786 23.047677c-1.4164-.03281-2.42112-.337608-3.01378-.913694-.59232-.575734-.88865-1.472848-.88865-2.690989V4.030839l2.29694-.395464v15.436849c0 .378884.0332.691798.0981.938389.066.246592.17357.443795.32103.592667.14887.148872.34572.258939.59266.333375.24801.07303.55245.135114.91476.184503zM91.916596 17.644533c-.41345 1.524 1.38501.839258.55951 2.185458-.8255 1.346553-1.03082-.566208-2.20204.492125-1.17157 1.059744.71085 1.455208-.7112 2.141361-1.42205.686153-.5595-1.03505-2.11808-.777169-1.55857.257527-.18873 1.609372-1.75577 1.416755-1.5681-.191558.0871-1.172986-1.36278-1.798461-1.44957-.625828-1.028 1.251303-2.24332.242358-1.21426-1.008591.70838-.938388-.17356-2.248958-.88054-1.310216-1.54094.49777-2.01754-1.008591-.47695-1.506009 1.10384-.407812 1.07068-1.985787-.0332-1.579033-1.56527-.416277-1.15323-1.940277.4131-1.524 1.149.253647 1.9745-1.092906.8255-1.344789-1.09255-1.194505.0787-2.25425 1.17122-1.058333.82938.835025 2.25178.148873 1.42205-.686506-.27305-1.597378 1.28552-1.854906 1.55857-.256469.24518 1.150761 1.81363 1.342319 1.5681.191559.63394-1.48978 2.08351-.864305 1.44956.625828-.41487 1.099961.8008 2.108553 1.21532 1.010002 1.33915-.910873 2.22003.399697.88195 1.310569-.94403.701322-.46743 2.207683.47696 1.506008 1.61925-.04304 1.65241 1.536347.0332 1.579386-1.17263.08008-1.58609 1.604081z"
                }), /*#__PURE__*/jsx_runtime.jsx("path", {
                  fill: "red",
                  d: "M86.073546 19.700522c-.23143-.274109-.8502-.920398-1.37513-1.438628-1.38924-1.369836-1.651-1.718381-1.79564-2.393597-.15699-.730603.0275-1.606903.43815-2.081036.37641-.431095 1.21285-.751064 1.74061-.665339.33337.05362.8957.345722 1.14088.590903.26317.264583.29069.260702.76905-.112889.5581-.435328 1.06786-.563739 1.67852-.422981.89853.205317 1.58891 1.119011 1.55293 2.054578-.0261.716491-.34043 1.445683-.86254 2.007658-.13794.147461-.63536.636764-1.10667 1.086203-.47131.449086-1.05022 1.051278-1.28693 1.336675-.23566.286455-.4385.523522-.44944.529166-.0124.0039-.21096-.216605-.44379-.490713z"
                })]
              })
            }) : /*#__PURE__*/jsx_runtime.jsx(framer_motion_cjs/* motion.div */.ww.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
              className: "flex items-center flex-shrink-0 mr-6 absolute z-10 border-white border-4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                className: "w-32 h-32 text-ameciclo bg-white",
                fill: "currentColor",
                viewBox: "0 0 400 400",
                children: [/*#__PURE__*/jsx_runtime.jsx("defs", {}), /*#__PURE__*/jsx_runtime.jsx("path", {
                  d: "M1 1L0 201v199h400V0H200L1 1zm86 127c8 3 12 8 15 16 2 5 3 7 3 45v40h-3c-9 2-24 3-34 3-25 0-38-8-40-27-3-20 8-33 30-37 6-1 22-1 27 1 2 0 2 0 2-6 0-10-4-18-12-21-6-2-19-2-28 0-7 2-8 2-8-3l-1-6v-5l5-1c8-3 10-3 24-3 13 1 14 1 20 4zm91-1l8 4 3 3 4-2 13-6c8-2 10-2 17-2 19 1 28 9 33 26l2 107c0 98 1 102 2 104l6 3 6 2-1 8-1 8-7-1c-15-2-21-8-23-21l-1-102-1-101c-2-8-4-10-9-13-3-2-5-3-12-2-8 0-10 0-15 3-3 1-5 3-5 4 2 8 2 16 2 46v36h-7c-13 0-12 4-12-36 0-36 0-40-4-46s-8-7-19-7h-12l-4 1v44l-1 44h-18V129l11-2 14-2a121 121 0 0131 2zm157 1c14 7 21 21 21 46l1 10h-68v2c0 4 3 13 6 18 6 10 24 14 43 9l9-1c1 0 3 14 2 15s-11 4-21 5c-30 3-50-10-57-36-2-9-2-28 0-36 5-17 15-28 29-34 5-2 7-2 17-2 11 1 12 1 18 4zM137 241c2 0 4 2 4 3 2 3 3 11 1 14-2 4-6 6-11 6-4 0-5-1-8-4-2-3-3-4-3-8 0-10 8-16 17-12zm182 32c3 8 11 9 15 2 2-4 5-4 10-1 3 2 4 3 2 8s6 13 11 9c2-2 5-2 7 1 4 3 4 8 1 11-6 3-2 14 5 14 2 0 3 1 4 3 2 6 0 11-5 11-3 0-6 3-7 7l3 7c4 4 4 4 3 7l-3 5c-3 2-3 2-6 0-5-2-8-1-11 4v6c1 5 0 6-4 9-4 2-6 1-8-2-3-6-12-6-14 1-2 5-3 6-6 6-5 0-8-2-8-7s-3-8-8-8c-3 0-4 1-5 2-2 3-5 3-8 1-4-3-5-6-3-9 3-3 2-7-1-11-2-3-3-3-6-2-5 1-7-1-8-6s-1-5 3-8c4-2 5-3 5-7s-1-6-5-8-5-5-3-10c1-3 2-3 8-3l5-2c3-4 4-7 1-11l-2-4c0-2 6-8 8-8l4 3c6 5 13 1 13-8 0-5 2-6 8-6 4 0 4 0 5 4zm-225 2l7 3-2 8c-2 8-1 8-12 6-13-4-27 0-33 8s-7 14-7 27c-1 19 4 29 16 35 5 2 6 3 17 2l15-1 5-1c1 0 3 14 2 15-3 3-28 6-38 4-23-5-37-25-37-53 0-27 13-47 35-54 7-1 23-1 32 1zm125 1l6 2c1 1-2 15-3 16l-6-2c-7-2-22-2-27 0-12 5-18 18-18 35 0 20 7 32 21 36 6 3 20 2 27 0l6-2c1 1 2 15 1 16-2 2-12 4-22 5-26 1-44-12-50-37-3-8-2-27 0-36 5-18 17-31 34-35 7-1 22-1 31 2zm-78 52v52h-18l-1-51v-52l10-1h9v52z"
                }), /*#__PURE__*/jsx_runtime.jsx("path", {
                  d: "M58 185c-3 0-6 3-8 5-3 3-3 4-3 9s0 7 2 10c4 5 9 7 22 7 18 0 16 2 16-16v-16h-3c-6-2-22-1-26 0zM306 142c-8 3-15 13-16 22l-1 4h48v-3c0-5-3-13-6-17-6-8-17-10-25-6z"
                }), /*#__PURE__*/jsx_runtime.jsx("path", {
                  fill: "#f40000",
                  d: "M301 302c-6 4-8 8-8 17 0 6 1 7 5 12l13 15 10 10 4-5 13-13c10-12 13-20 9-29-4-8-14-11-22-6-4 3-4 3-6 2l-12-5-6 2z"
                })]
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonContainer, {
        open: isMenuOpen,
        color: "white",
        onClick: () => toggleMenu(!isMenuOpen),
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "line lineTop"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "line lineMiddle"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "line lineBottom"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(Container, {
        open: isMenuOpen,
        children: isMenuOpen && /*#__PURE__*/jsx_runtime.jsx(cjs/* CSSTransition */.Kv, {
          appear: true,
          in: isMenuOpen,
          timeout: 1000,
          classNames: "fade",
          children: /*#__PURE__*/jsx_runtime.jsx(LinksContainer, {
            children: /*#__PURE__*/jsx_runtime.jsx(LinkListUl, {
              children: responsiveLinkList()
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "hidden md:flex lg:items-center lg:w-auto w-full",
        id: "menu",
        children: /*#__PURE__*/jsx_runtime.jsx("nav", {
          children: /*#__PURE__*/jsx_runtime.jsx("ul", {
            className: "lg:flex items-center justify-between text-base pt-4 lg:pt-0 uppercase",
            children: linkList()
          })
        })
      })]
    })
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.tsx






const Footer = () => {
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx("footer", {
      className: "bg-gray-100",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "container mx-auto px-6 pt-10 pb-6",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-wrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "w-full md:w-1/3 text-center md:text-left",
            children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
              className: "uppercase mb-6 font-bold",
              children: "Ameciclo"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
              className: "mb-4",
              children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Ameciclo - Associa\xE7\xE3o de Metropolitana de Ciclistas do Recife"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://api.whatsapp.com/send?phone=5581994586830",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "+55 (81) 9 9458-6830"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  href: "https://bit.ly/2C01AhY",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "R. da Aurora, 529, loja 2 - Santo Amaro, Recife/PE, 50050-145"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "mailto:contato@ameciclo.org",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "contato@ameciclo.org"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "w-full md:w-1/3 text-center",
            children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
              className: "uppercase mb-6 font-bold",
              children: "Links"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
              className: "mb-4",
              children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "/contagens",
                  children: /*#__PURE__*/jsx_runtime.jsx("a", {
                    className: "hover:underline text-gray-600 hover:text-red-600",
                    children: "Contagens"
                  })
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "/contato",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Contato"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "w-full md:w-1/3 text-center",
            children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
              className: "uppercase mb-6 font-bold",
              children: "Social"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
              className: "mb-4",
              children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://facebook.com/ameciclo",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Facebook"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://instagram.com/ameciclo",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Instagram"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://twitter.com/ameciclo",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Twitter"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://www.youtube.com/user/ameciclo",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Youtube"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                className: "mt-2",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "https://t.me/s/ameciclo",
                  className: "hover:underline text-gray-600 hover:text-red-600",
                  children: "Telegram"
                })
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.tsx







const Layout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex flex-col min-h-screen",
      children: [/*#__PURE__*/jsx_runtime.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime.jsx("main", {
        className: "flex-1 w-full mx-auto main-padding-top",
        children: children
      }), /*#__PURE__*/jsx_runtime.jsx(components_Footer, {})]
    })
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ })

};
;