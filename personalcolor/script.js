/* ═══════════════════════════════════════════════════
   CHROMIA — script.js
   12-Type Personal Color AI Diagnosis Engine
═══════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────
   12가지 퍼스널컬러 데이터
   각 타입: 피부톤 기준값(R,G,B), 어울리는/피해야할 색, 스타일
────────────────────────────────────────────────── */
const TYPES = {

  /* ═══ SPRING ═══ */
  spring_light: {
    season:'Spring', seasonKr:'봄', name:'Spring Light', nameKr:'봄 라이트',
    image:'images/spring_light.png',
    /* 기준 피부톤: 밝고 따뜻한 복숭아 */
    skinRef:{ r:225, g:190, b:165 },
    traits:{ warm:true, bright:true, deep:false },
    desc:'밝고 맑은 복숭아빛 피부 톤이 특징입니다. 투명하고 화사한 인상을 주며 봄볕처럼 따뜻하고 생기 넘치는 매력이 있습니다.',
    best:[
      {hex:'#FADADD',name:'피치핑크'}, {hex:'#FFD1A4',name:'살구색'},
      {hex:'#FFFACD',name:'레몬크림'}, {hex:'#98D8C8',name:'민트그린'}
    ],
    avoid:[
      {hex:'#2C2C3E',name:'딥네이비'}, {hex:'#4A0404',name:'버건디'},
      {hex:'#5D4037',name:'다크브라운'}, {hex:'#1B5E20',name:'포레스트그린'}
    ],
    tags:['캐주얼 로맨틱','내추럴 페미닌','스프링 플로럴'],
    tips:[
      {e:'👗',t:'파스텔 플로럴 원피스와 아이보리 니트로 봄 감성을 살려보세요.'},
      {e:'👜',t:'베이지, 라이트 피치 계열 가방이 전체 룩을 은은하게 완성합니다.'},
      {e:'💄',t:'코랄 핑크 립과 오렌지 계열 블러셔로 생기 넘치는 메이크업을 연출하세요.'},
      {e:'💎',t:'골드 주얼리와 모조 진주 액세서리가 피부 톤과 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#FFD1A4,#FADADD)'
  },

  spring_warm: {
    season:'Spring', seasonKr:'봄', name:'Spring Warm', nameKr:'봄 웜',
    image:'images/spring_warm.png',
    skinRef:{ r:220, g:175, b:130 },
    traits:{ warm:true, bright:true, deep:false },
    desc:'따뜻하고 선명한 오렌지빛과 황금빛이 피부를 생동감 있게 밝혀주는 타입입니다. 에너지 넘치고 활기찬 헬시 룩이 특징입니다.',
    best:[
      {hex:'#FF8C42',name:'오렌지'}, {hex:'#FFD700',name:'골든옐로'},
      {hex:'#FFA07A',name:'살몬핑크'}, {hex:'#90EE90',name:'라이트그린'}
    ],
    avoid:[
      {hex:'#483D8B',name:'슬레이트블루'}, {hex:'#800080',name:'퍼플'},
      {hex:'#000000',name:'블랙'}, {hex:'#708090',name:'슬레이트그레이'}
    ],
    tags:['액티브 캐주얼','스포티 내추럴','트로피칼'],
    tips:[
      {e:'👗',t:'오렌지, 옐로, 라임 그린 등 비비드한 컬러로 생기 넘치는 룩을 완성하세요.'},
      {e:'👜',t:'카멜·탄 컬러의 가죽 소재 가방이 웜한 피부 톤과 자연스럽게 어울립니다.'},
      {e:'💄',t:'오렌지-레드 계열 립으로 자신감 넘치는 인상을 연출해보세요.'},
      {e:'💎',t:'옐로우 골드 계열 주얼리가 따뜻한 피부 톤을 더욱 빛나게 합니다.'}
    ],
    grad:'linear-gradient(135deg,#FF8C42,#FFD700)'
  },

  spring_bright: {
    season:'Spring', seasonKr:'봄', name:'Spring Bright', nameKr:'봄 브라이트',
    image:'images/spring_bright.png',
    skinRef:{ r:235, g:195, b:175 },
    traits:{ warm:true, bright:true, deep:false },
    desc:'선명하고 밝은 컬러가 눈부시게 어울리는 타입입니다. 또렷하고 화려한 인상으로 어디서나 주목받으며 맑고 생기 있는 피부가 특징입니다.',
    best:[
      {hex:'#FF6B6B',name:'비비드레드'}, {hex:'#00CFCF',name:'비비드터콰이즈'},
      {hex:'#FFD700',name:'비비드옐로'}, {hex:'#FF69B4',name:'핫핑크'}
    ],
    avoid:[
      {hex:'#8B7355',name:'카키베이지'}, {hex:'#D2B48C',name:'탄'},
      {hex:'#808080',name:'그레이'}, {hex:'#8B4513',name:'새들브라운'}
    ],
    tags:['비비드 컬러블록','팝아트 캐주얼','글램 스포티'],
    tips:[
      {e:'👗',t:'선명한 원색의 컬러블록 코디로 눈에 띄는 스타일을 완성하세요.'},
      {e:'👜',t:'밝고 선명한 컬러의 포인트 백이 룩 전체를 살아있게 만듭니다.'},
      {e:'💄',t:'선명한 레드나 코랄 립으로 존재감 있는 메이크업을 연출하세요.'},
      {e:'💎',t:'골드 주얼리 혹은 컬러 보석 주얼리로 화려함을 더해보세요.'}
    ],
    grad:'linear-gradient(135deg,#FF6B6B,#FFD700)'
  },

  /* ═══ SUMMER ═══ */
  summer_light: {
    season:'Summer', seasonKr:'여름', name:'Summer Light', nameKr:'여름 라이트',
    image:'images/summer_light.png',
    skinRef:{ r:220, g:200, b:200 },
    traits:{ warm:false, bright:true, deep:false },
    desc:'부드럽고 밝은 라벤더와 파우더리한 블루 계열이 잘 어울리는 타입입니다. 청명하고 청순한 인상을 주며 시원하고 우아한 분위기가 특징입니다.',
    best:[
      {hex:'#C9D6E3',name:'파우더블루'}, {hex:'#E6E6FA',name:'라벤더'},
      {hex:'#FFB6C1',name:'라이트핑크'}, {hex:'#D5E8D4',name:'페일그린'}
    ],
    avoid:[
      {hex:'#FF4500',name:'오렌지레드'}, {hex:'#FF8C00',name:'다크오렌지'},
      {hex:'#8B4513',name:'새들브라운'}, {hex:'#B8860B',name:'다크골든로드'}
    ],
    tags:['소프트 로맨틱','클래식 페미닌','라이트 엘레강스'],
    tips:[
      {e:'👗',t:'라벤더, 파우더 블루, 소프트 핑크로 부드럽고 우아한 룩을 완성하세요.'},
      {e:'👜',t:'밝은 아이보리나 라이트 베이지 가방이 전체 무드를 해치지 않습니다.'},
      {e:'💄',t:'로즈핑크 계열 립과 라벤더 빛 쉐도우로 청순한 메이크업을 연출하세요.'},
      {e:'💎',t:'실버 주얼리와 진주 액세서리가 쿨하고 청순한 피부 톤을 돋보이게 합니다.'}
    ],
    grad:'linear-gradient(135deg,#E6E6FA,#B0C4DE)'
  },

  summer_cool: {
    season:'Summer', seasonKr:'여름', name:'Summer Cool', nameKr:'여름 쿨',
    image:'images/summer_cool.png',
    skinRef:{ r:200, g:195, b:210 },
    traits:{ warm:false, bright:false, deep:false },
    desc:'차갑고 선명한 블루와 그레이시한 쿨 톤이 피부를 도시적으로 세련되게 만들어주는 타입입니다. 지적이고 차분한 인상을 주며 모던한 감각이 특징입니다.',
    best:[
      {hex:'#4682B4',name:'스틸블루'}, {hex:'#9370DB',name:'미디엄퍼플'},
      {hex:'#708090',name:'슬레이트그레이'}, {hex:'#5F9EA0',name:'카뎃블루'}
    ],
    avoid:[
      {hex:'#FF8C00',name:'다크오렌지'}, {hex:'#DAA520',name:'골든로드'},
      {hex:'#8B4513',name:'새들브라운'}, {hex:'#CD853F',name:'페루'}
    ],
    tags:['모던 미니멀','쿨 시크','어반 클래식'],
    tips:[
      {e:'👗',t:'네이비, 쿨그레이, 라벤더 계열 아이템으로 세련된 도시 감각을 표현하세요.'},
      {e:'👜',t:'차콜 그레이나 블랙 가죽 가방으로 모던하고 깔끔한 룩을 완성하세요.'},
      {e:'💄',t:'쿨 핑크나 플럼 계열 립으로 차갑고 세련된 인상을 강조하세요.'},
      {e:'💎',t:'실버 혹은 화이트골드 주얼리가 쿨톤 피부의 매력을 극대화합니다.'}
    ],
    grad:'linear-gradient(135deg,#4682B4,#9370DB)'
  },

  summer_mute: {
    season:'Summer', seasonKr:'여름', name:'Summer Mute', nameKr:'여름 뮤트',
    image:'images/summer_mute.png',
    skinRef:{ r:210, g:195, b:195 },
    traits:{ warm:false, bright:false, deep:false },
    desc:'그레이시하고 차분한 뮤트 컬러가 자연스럽게 어울리는 타입입니다. 부드럽고 지적인 아름다움이 특징이며 은은하게 세련된 분위기를 연출합니다.',
    best:[
      {hex:'#BC8F8F',name:'로즈그레이'}, {hex:'#9FB3C8',name:'뮤트블루'},
      {hex:'#C3B1E1',name:'소프트라벤더'}, {hex:'#8FAD88',name:'세이지그린'}
    ],
    avoid:[
      {hex:'#FF0000',name:'브라이트레드'}, {hex:'#FF8C00',name:'브라이트오렌지'},
      {hex:'#FFD700',name:'브라이트옐로'}, {hex:'#00FF00',name:'브라이트그린'}
    ],
    tags:['소프트 내추럴','그레이시 엘레강스','뮤트 시크'],
    tips:[
      {e:'👗',t:'그레이시한 뮤트 컬러로 차분하고 지적인 레이어드 룩을 완성해보세요.'},
      {e:'👜',t:'뮤트 핑크나 그레이 베이지 가방이 소프트한 무드를 유지해줍니다.'},
      {e:'💄',t:'모브나 로즈 베이지 립으로 자연스럽고 세련된 메이크업을 연출하세요.'},
      {e:'💎',t:'화이트골드나 실버 프레임의 섬세한 주얼리가 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#BC8F8F,#9FB3C8)'
  },

  /* ═══ AUTUMN ═══ */
  autumn_warm: {
    season:'Autumn', seasonKr:'가을', name:'Autumn Warm', nameKr:'가을 웜',
    image:'images/autumn_warm.png',
    skinRef:{ r:195, g:155, b:115 },
    traits:{ warm:true, bright:false, deep:false },
    desc:'깊고 따뜻한 테라코타와 버건디 계열이 피부를 윤기 있고 성숙하게 만들어주는 타입입니다. 풍요롭고 클래식한 인상을 주는 것이 특징입니다.',
    best:[
      {hex:'#CC5500',name:'버트오렌지'}, {hex:'#8B0000',name:'다크레드'},
      {hex:'#DAA520',name:'골든로드'}, {hex:'#556B2F',name:'다크올리브'}
    ],
    avoid:[
      {hex:'#E6E6FA',name:'라벤더'}, {hex:'#00FFFF',name:'사이언'},
      {hex:'#FF69B4',name:'핫핑크'}, {hex:'#C0C0C0',name:'실버'}
    ],
    tags:['클래식 엘레강스','리치 오텀','빈티지 글램'],
    tips:[
      {e:'👗',t:'테라코타, 머스타드, 올리브 그린의 가을 컬러로 풍요로운 룩을 완성하세요.'},
      {e:'👜',t:'다크 브라운이나 카멜 컬러의 가죽 가방이 가을 웜 톤과 완벽히 어울립니다.'},
      {e:'💄',t:'벽돌색 레드나 테라코타 립으로 성숙하고 클래식한 매력을 강조하세요.'},
      {e:'💎',t:'앤틱 골드나 로즈골드 주얼리가 따뜻한 가을 톤을 더욱 풍성하게 합니다.'}
    ],
    grad:'linear-gradient(135deg,#CC5500,#DAA520)'
  },

  autumn_deep: {
    season:'Autumn', seasonKr:'가을', name:'Autumn Deep', nameKr:'가을 딥',
    image:'images/autumn_deep.png',
    skinRef:{ r:165, g:120, b:85 },
    traits:{ warm:true, bright:false, deep:true },
    desc:'짙고 깊은 와인과 다크 카키 계열이 피부에 강렬한 카리스마를 더해주는 타입입니다. 고급스럽고 진중한 인상으로 독보적인 존재감을 발휘합니다.',
    best:[
      {hex:'#722F37',name:'와인'}, {hex:'#4A5240',name:'다크카키'},
      {hex:'#8B6914',name:'다크골드'}, {hex:'#3D2B1F',name:'다크초콜릿'}
    ],
    avoid:[
      {hex:'#FFB6C1',name:'라이트핑크'}, {hex:'#E6E6FA',name:'페일라벤더'},
      {hex:'#FFFACD',name:'레몬시폰'}, {hex:'#F0FFF0',name:'허니듀'}
    ],
    tags:['다크 럭셔리','딥 빈티지','파워 엘레강스'],
    tips:[
      {e:'👗',t:'딥 와인, 다크 버건디, 다크 초콜릿 컬러로 강렬하고 고급스러운 룩을 연출하세요.'},
      {e:'👜',t:'딥 브라운이나 버건디 계열의 가죽 백이 전체 룩을 완성시켜줍니다.'},
      {e:'💄',t:'딥 플럼이나 다크 레드 립으로 강렬한 카리스마를 표현하세요.'},
      {e:'💎',t:'앤틱 골드나 빈티지 느낌의 브라운 스톤 주얼리가 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#722F37,#4A5240)'
  },

  autumn_mute: {
    season:'Autumn', seasonKr:'가을', name:'Autumn Mute', nameKr:'가을 뮤트',
    image:'images/autumn_mute.png',
    skinRef:{ r:185, g:150, b:120 },
    traits:{ warm:true, bright:false, deep:false },
    desc:'차분하고 흐릿한 어스 톤이 자연스럽게 어울리는 타입입니다. 내추럴하고 편안한 아름다움을 추구하며 소박하지만 은은한 매력을 발산합니다.',
    best:[
      {hex:'#9E7B5A',name:'카멜브라운'}, {hex:'#7D8471',name:'뮤트카키'},
      {hex:'#B5956A',name:'샌드베이지'}, {hex:'#A0856C',name:'테이프브라운'}
    ],
    avoid:[
      {hex:'#FF0080',name:'네온핑크'}, {hex:'#0000FF',name:'브라이트블루'},
      {hex:'#FF4500',name:'오렌지레드'}, {hex:'#8B008B',name:'다크마젠타'}
    ],
    tags:['내추럴 보헤미안','어스 캐주얼','소박한 빈티지'],
    tips:[
      {e:'👗',t:'베이지, 카멜, 카키 계열의 레이어드 룩으로 내추럴하고 편안한 스타일을 완성하세요.'},
      {e:'👜',t:'탄이나 카멜 컬러의 가방, 캔버스 토트백이 자연스럽게 어울립니다.'},
      {e:'💄',t:'누드 핑크나 테라코타 립으로 자연스럽고 건강한 메이크업을 연출하세요.'},
      {e:'💎',t:'목재나 돌 소재의 핸드메이드 주얼리나 브라운 계열 스톤이 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#9E7B5A,#7D8471)'
  },

  /* ═══ WINTER ═══ */
  winter_cool: {
    season:'Winter', seasonKr:'겨울', name:'Winter Cool', nameKr:'겨울 쿨',
    image:'images/winter_cool.png',
    skinRef:{ r:185, g:175, b:190 },
    traits:{ warm:false, bright:true, deep:false },
    desc:'차갑고 선명한 블루-레드와 깨끗한 화이트가 피부에 강렬한 대비를 만들어주는 타입입니다. 쿨하고 카리스마 있는 인상으로 압도적인 존재감을 발산합니다.',
    best:[
      {hex:'#0047AB',name:'코발트블루'}, {hex:'#C41E3A',name:'카디널레드'},
      {hex:'#E8E8E8',name:'아이스화이트'}, {hex:'#6A0DAD',name:'로열퍼플'}
    ],
    avoid:[
      {hex:'#DAA520',name:'골든로드'}, {hex:'#FF8C00',name:'다크오렌지'},
      {hex:'#D2691E',name:'초콜릿'}, {hex:'#8FBC8F',name:'다크씨그린'}
    ],
    tags:['쿨 파워','아방가르드','다크 럭셔리'],
    tips:[
      {e:'👗',t:'블랙&화이트 강한 대비 코디나 로열 블루, 퍼플 계열로 강렬한 존재감을 드러내세요.'},
      {e:'👜',t:'블랙 레더나 화이트 구조적인 백으로 샤프하고 세련된 룩을 완성하세요.'},
      {e:'💄',t:'트루 레드나 딥 플럼 립으로 선명하고 강렬한 메이크업을 연출하세요.'},
      {e:'💎',t:'실버나 화이트골드 주얼리, 다이아몬드 느낌의 크리스탈 액세서리가 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#0047AB,#800080)'
  },

  winter_deep: {
    season:'Winter', seasonKr:'겨울', name:'Winter Deep', nameKr:'겨울 딥',
    image:'images/winter_deep.png',
    skinRef:{ r:150, g:140, b:155 },
    traits:{ warm:false, bright:false, deep:true },
    desc:'짙고 강렬한 다크 컬러들이 피부의 깊이를 극대화해주는 타입입니다. 신비롭고 강력한 카리스마를 가지며, 어두운 컬러일수록 더 빛납니다.',
    best:[
      {hex:'#1C1C2E',name:'딥다크네이비'}, {hex:'#3D0C11',name:'딥버건디'},
      {hex:'#1A2744',name:'미드나잇블루'}, {hex:'#2E0040',name:'딥퍼플'}
    ],
    avoid:[
      {hex:'#FADADD',name:'페일핑크'}, {hex:'#FFFACD',name:'레몬시폰'},
      {hex:'#90EE90',name:'라이트그린'}, {hex:'#D2B48C',name:'탄'}
    ],
    tags:['다크 로맨틱','고딕 럭셔리','파워 미스터리'],
    tips:[
      {e:'👗',t:'블랙, 딥 네이비, 딥 버건디로 신비롭고 강렬한 다크 룩을 완성하세요.'},
      {e:'👜',t:'블랙이나 딥 와인 컬러의 구조적인 가방으로 파워풀한 인상을 더하세요.'},
      {e:'💄',t:'딥 다크 버건디나 블랙-레드 계열 립으로 신비로운 메이크업을 완성하세요.'},
      {e:'💎',t:'블랙 오닉스나 딥 컬러 스톤 주얼리, 실버 체인 액세서리가 잘 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#1C1C2E,#3D0C11)'
  },

  winter_bright: {
    season:'Winter', seasonKr:'겨울', name:'Winter Bright', nameKr:'겨울 브라이트',
    image:'images/winter_bright.png',
    skinRef:{ r:200, g:190, b:210 },
    traits:{ warm:false, bright:true, deep:false },
    desc:'차갑고 선명하며 쨍한 비비드 컬러들이 피부를 눈부시게 만들어주는 타입입니다. 강렬하고 선명한 색에서 더욱 돋보이며 트렌디하고 임팩트 있는 스타일을 자랑합니다.',
    best:[
      {hex:'#00BFFF',name:'아이시블루'}, {hex:'#FF007F',name:'비비드핑크'},
      {hex:'#FFFF00',name:'브라이트옐로'}, {hex:'#7B00FF',name:'비비드퍼플'}
    ],
    avoid:[
      {hex:'#D2B48C',name:'탄'}, {hex:'#BC8F8F',name:'로지브라운'},
      {hex:'#8B8682',name:'웜그레이'}, {hex:'#A0785A',name:'웜베이지'}
    ],
    tags:['비비드 아방가르드','아이시 스트리트','트렌디 컬러팝'],
    tips:[
      {e:'👗',t:'아이시 블루, 비비드 핑크, 브라이트 옐로의 선명한 컬러 믹스로 트렌디한 룩을 완성하세요.'},
      {e:'👜',t:'투명 PVC 소재나 메탈릭 실버 가방으로 아이시하고 모던한 느낌을 더하세요.'},
      {e:'💄',t:'아이시 핑크나 비비드 퍼플 립으로 강렬한 임팩트를 주세요.'},
      {e:'💎',t:'크리스탈이나 다이아몬드 세팅의 실버 주얼리가 완벽하게 어울립니다.'}
    ],
    grad:'linear-gradient(135deg,#00BFFF,#FF007F)'
  }
};

/* ──────────────────────────────────────────────────
   상태
────────────────────────────────────────────────── */
let videoStream = null;
let capturedCanvas = null;
let diagnosedKey = null;
let skinColor = null;

/* ──────────────────────────────────────────────────
   화면 전환
────────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('active');
}

/* ──────────────────────────────────────────────────
   카메라
────────────────────────────────────────────────── */
async function startCamera() {
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode:'user', width:{ideal:1280}, height:{ideal:960} },
      audio: false
    });
    document.getElementById('video').srcObject = videoStream;
  } catch(e) {
    alert('카메라 접근이 거부되었습니다. 브라우저 카메라 권한을 허용해주세요.');
  }
}
function stopCamera() {
  if (videoStream) { videoStream.getTracks().forEach(t=>t.stop()); videoStream=null; }
}

/* ──────────────────────────────────────────────────
   촬영 + AI 분석
────────────────────────────────────────────────── */
function captureAndAnalyze() {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas-hidden');
  canvas.width  = video.videoWidth  || 640;
  canvas.height = video.videoHeight || 480;

  const ctx = canvas.getContext('2d');
  // Mirror (selfie mode)
  ctx.save();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0);
  ctx.restore();

  capturedCanvas = canvas;

  // Flash
  const flash = document.getElementById('cam-flash');
  flash.classList.add('flash');
  setTimeout(() => flash.classList.remove('flash'), 180);

  // Update badge
  document.getElementById('cam-badge').textContent = 'AI 분석 중…';

  // Show scan overlay
  const scanWrap = document.getElementById('scan-wrap');
  scanWrap.classList.add('active');

  // Slight delay for UX, then analyze
  setTimeout(() => {
    const result = analyzeSkintone(canvas, ctx);
    scanWrap.classList.remove('active');
    showAnalysisStrip(result);
  }, 1800);
}

/* ──────────────────────────────────────────────────
   AI 피부 분석 엔진
   방법: 얼굴 중앙 여러 샘플 포인트에서 평균 RGB 추출
         → 12타입 기준 RGB와 유클리디안 거리 계산
         → 가장 가까운 타입 선정
────────────────────────────────────────────────── */
function analyzeSkintone(canvas, ctx) {
  const W = canvas.width, H = canvas.height;

  // 얼굴 중앙 영역 여러 포인트 샘플
  const samplePoints = [
    { x: W*0.50, y: H*0.33 },  // 이마
    { x: W*0.50, y: H*0.42 },  // 코 위
    { x: W*0.42, y: H*0.45 },  // 왼뺨
    { x: W*0.58, y: H*0.45 },  // 오른뺨
    { x: W*0.50, y: H*0.50 },  // 코
    { x: W*0.46, y: H*0.55 },  // 왼턱
    { x: W*0.54, y: H*0.55 },  // 오른턱
  ];

  const sampleSize = Math.floor(W * 0.04);
  let totalR=0, totalG=0, totalB=0, totalCount=0;

  samplePoints.forEach(pt => {
    const sx = Math.max(0, Math.floor(pt.x - sampleSize/2));
    const sy = Math.max(0, Math.floor(pt.y - sampleSize/2));
    const sw = Math.min(sampleSize, W - sx);
    const sh = Math.min(sampleSize, H - sy);
    if (sw<=0 || sh<=0) return;

    const data = ctx.getImageData(sx, sy, sw, sh).data;
    for (let i=0; i<data.length; i+=4) {
      const a = data[i+3];
      if (a < 100) continue;
      const r = data[i], g = data[i+1], b = data[i+2];
      // 피부톤 범위 필터 (너무 어둡거나 밝은 픽셀 제외)
      const bright = (r+g+b)/3;
      if (bright < 60 || bright > 245) continue;
      // 피부색 범위 필터
      if (r < g || r < b) continue;
      totalR+=r; totalG+=g; totalB+=b; totalCount++;
    }
  });

  let avgR=160, avgG=130, avgB=110; // 기본값
  if (totalCount > 20) {
    avgR = Math.round(totalR/totalCount);
    avgG = Math.round(totalG/totalCount);
    avgB = Math.round(totalB/totalCount);
  }

  skinColor = { r:avgR, g:avgG, b:avgB };

  // 12타입과 거리 계산
  let bestKey = null, bestDist = Infinity;
  Object.entries(TYPES).forEach(([key, t]) => {
    const dr = avgR - t.skinRef.r;
    const dg = avgG - t.skinRef.g;
    const db = avgB - t.skinRef.b;
    // 웜/쿨 방향성 가중치 적용
    const warmScore = avgR - avgB; // 양수=웜, 음수=쿨
    const brightness = (avgR+avgG+avgB)/3;
    const saturation = Math.max(avgR,avgG,avgB) - Math.min(avgR,avgG,avgB);

    let dist = Math.sqrt(dr*dr + dg*dg + db*db);

    // 웜/쿨 보정: 방향이 맞으면 점수 우대
    if (t.traits.warm && warmScore > 15) dist -= 20;
    if (!t.traits.warm && warmScore < 5) dist -= 20;
    if (t.traits.bright && brightness > 170) dist -= 15;
    if (t.traits.deep && brightness < 140) dist -= 15;

    if (dist < bestDist) { bestDist=dist; bestKey=key; }
  });

  diagnosedKey = bestKey;
  return { key:bestKey, type:TYPES[bestKey], skin:skinColor };
}

/* ──────────────────────────────────────────────────
   분석 결과 스트립 표시
────────────────────────────────────────────────── */
function showAnalysisStrip({ key, type, skin }) {
  // 피부톤 도트
  const hex = rgbToHex(skin.r, skin.g, skin.b);
  document.getElementById('strip-skin').style.background = hex;

  // 팔레트 스와치
  const palEl = document.getElementById('strip-palette');
  palEl.innerHTML = type.best.map(c =>
    `<div class="strip-swatch" style="background:${c.hex}" title="${c.name}"></div>`
  ).join('');

  // 타입명
  document.getElementById('strip-type').textContent = type.nameKr;

  // 카메라 배지 업데이트
  document.getElementById('cam-badge').textContent = `✦ ${type.nameKr} 타입으로 진단되었습니다`;

  // 스트립 표시
  document.getElementById('analysis-strip').classList.add('visible');
}

/* ──────────────────────────────────────────────────
   결과 화면 렌더
────────────────────────────────────────────────── */
function renderResult() {
  const key  = diagnosedKey;
  const t    = TYPES[key];
  const skin = skinColor || { r:180, g:150, b:130 };

  /* --- 촬영 사진 → result canvas --- */
  const resultCanvas = document.getElementById('canvas-result');
  if (capturedCanvas) {
    resultCanvas.width  = capturedCanvas.width;
    resultCanvas.height = capturedCanvas.height;
    resultCanvas.getContext('2d').drawImage(capturedCanvas, 0, 0);
  }

  /* --- 배지 --- */
  document.getElementById('rp-badge').textContent = `${t.seasonKr} · ${t.nameKr}`;

  /* --- 피부 분석 카드 --- */
  const hex = rgbToHex(skin.r, skin.g, skin.b);
  document.getElementById('sk-dot').style.background = hex;
  document.getElementById('sk-hex').textContent = hex;

  const warmScore = skin.r - skin.b;
  document.getElementById('sk-tone').textContent =
    warmScore > 20 ? '웜톤 (Warm)' : warmScore < 5 ? '쿨톤 (Cool)' : '뉴트럴 (Neutral)';

  const brightness = Math.round((skin.r+skin.g+skin.b)/3);
  const saturation = Math.max(skin.r,skin.g,skin.b) - Math.min(skin.r,skin.g,skin.b);
  document.getElementById('sk-brightness').style.width = Math.round(brightness/255*100)+'%';
  document.getElementById('sk-saturation').style.width = Math.round(saturation/128*100)+'%';

  /* --- 배경 그라데이션 --- */
  document.getElementById('result-grad').style.background = t.grad;

  /* --- 히어로 카드 --- */
  document.getElementById('hero-eyebrow').textContent = `${t.seasonKr} ${t.season}`;
  document.getElementById('hero-title').textContent   = t.nameKr;
  document.getElementById('hero-sub').textContent     = t.desc;

  // 대표 이미지
  const img = document.getElementById('rep-img');
  img.src = t.image;
  img.alt = t.nameKr + ' 대표 이미지';
  img.onerror = () => {
    // 이미지 없을 경우 그라데이션 배경으로 대체
    img.style.display = 'none';
    img.parentElement.style.background = t.grad;
    img.parentElement.style.minHeight = '180px';
  };

  /* --- 어울리는 색상 --- */
  document.getElementById('res-best').innerHTML = t.best.map(c => `
    <div class="pal-chip">
      <div class="chip-swatch" style="background:${c.hex}"></div>
      <span class="chip-name">${c.name}</span>
    </div>`).join('');

  /* --- 피해야 할 색상 --- */
  document.getElementById('res-avoid').innerHTML = t.avoid.map(c => `
    <div class="pal-chip chip-avoid">
      <div class="chip-swatch" style="background:${c.hex}"></div>
      <span class="chip-name">${c.name}</span>
    </div>`).join('');

  /* --- 스타일 태그 --- */
  document.getElementById('res-tags').innerHTML = t.tags.map(tag =>
    `<span class="style-tag">${tag}</span>`).join('');

  /* --- 스타일 팁 --- */
  document.getElementById('res-tips').innerHTML = t.tips.map(tip => `
    <div class="style-tip">
      <span class="tip-emoji">${tip.e}</span>
      <span>${tip.t}</span>
    </div>`).join('');
}

/* ──────────────────────────────────────────────────
   유틸
────────────────────────────────────────────────── */
function rgbToHex(r, g, b) {
  return '#' + [r,g,b].map(v => Math.max(0,Math.min(255,v)).toString(16).padStart(2,'0')).join('');
}

function resetState() {
  capturedCanvas = null;
  diagnosedKey   = null;
  skinColor      = null;
  document.getElementById('analysis-strip').classList.remove('visible');
  document.getElementById('cam-badge').textContent = '얼굴을 타원 안에 맞춰주세요';
}

/* ──────────────────────────────────────────────────
   이벤트 바인딩
────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Intro → Camera */
  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('screen-camera');
    startCamera();
  });

  /* Camera → Intro */
  document.getElementById('btn-back-intro').addEventListener('click', () => {
    stopCamera();
    resetState();
    showScreen('screen-intro');
  });

  /* 촬영 버튼 */
  document.getElementById('btn-capture').addEventListener('click', captureAndAnalyze);

  /* 결과 보기 버튼 */
  document.getElementById('btn-to-result').addEventListener('click', () => {
    if (!diagnosedKey) return;
    stopCamera();
    renderResult();
    showScreen('screen-result');
  });

  /* 결과 → 다시 촬영 */
  document.getElementById('btn-back-camera').addEventListener('click', () => {
    resetState();
    showScreen('screen-camera');
    startCamera();
  });

  /* 새 진단 (헤더) */
  document.getElementById('btn-retry-hd').addEventListener('click', () => {
    resetState();
    showScreen('screen-camera');
    startCamera();
  });

  /* 다시 진단하기 (하단 버튼) */
  document.getElementById('btn-retry-bot').addEventListener('click', () => {
    resetState();
    showScreen('screen-camera');
    startCamera();
  });

});