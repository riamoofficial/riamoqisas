const LANGS={ar:'ar-SA',fr:'fr-FR',en:'en-US'};
const I18N={
fr:{home:'Accueil',explore:'Explorer',tv:'TV Enfants',about:'À propos',all:'Tous',a1:'3–6 ans',a2:'6–12+ ans',seeall:'Tout voir',search:'Rechercher une histoire…',prophets:'Prophètes',cats:'Catégories',narrs:'Narrateurs',narr:'Voix automatique',listen:'Écouter',min:'min',speed:'Vitesse',sleep:'Minuterie',off:'Arrêt',novoice:"Voix indisponible sur cet appareil. Installez une voix dans les réglages de synthèse vocale.",ended:'Histoire terminée',back:'Retour',chan:'Chaînes',demo:'Mode démo : ajoutez des URL vidéo dans data.js',social:'Nos réseaux',priv:'Confidentialité et sécurité',noRes:'Aucun résultat',
privText:["Riamo Qisas ne collecte aucune donnée personnelle : pas de compte, pas de publicité, pas de traceur.","Seule votre langue choisie est mémorisée sur votre appareil (stockage local).","La lecture vocale est faite par votre appareil. Les vidéos TV Enfants peuvent venir de services externes soumis à leurs propres règles.","Nous recommandons aux parents d'accompagner les enfants. Contenu éducatif, sans achat intégré."],
aboutText:"Riamo Qisas raconte aux enfants les histoires des prophètes, en arabe, français et anglais."},
en:{home:'Home',explore:'Explore',tv:'Kids TV',about:'About',all:'All',a1:'3–6 yrs',a2:'6–12+ yrs',seeall:'See all',search:'Search a story…',prophets:'Prophets',cats:'Categories',narrs:'Narrators',narr:'Automatic voice',listen:'Listen',min:'min',speed:'Speed',sleep:'Sleep timer',off:'Off',novoice:'Voice unavailable on this device. Install a voice in your text-to-speech settings.',ended:'Story finished',back:'Back',chan:'Channels',demo:'Demo mode: add video URLs in data.js',social:'Our social media',priv:'Privacy and security',noRes:'No results',
privText:["Riamo Qisas collects no personal data: no account, no ads, no trackers.","Only your chosen language is saved on your device (local storage).","Voice reading is done by your device. Kids TV videos may come from external services with their own rules.","Parents are encouraged to accompany children. Educational content, no in-app purchases."],
aboutText:"Riamo Qisas tells children the stories of the prophets in Arabic, French and English."},
ar:{home:'الرئيسية',explore:'استكشاف',tv:'تلفاز الأطفال',about:'من نحن',all:'الكل',a1:'٣ - ٦ سنوات',a2:'٦ - ١٢+ سنة',seeall:'عرض الكل',search:'ابحث عن قصة…',prophets:'الأنبياء',cats:'الفئات',narrs:'الرواة',narr:'الصوت الآلي',listen:'استمع',min:'د',speed:'السرعة',sleep:'مؤقت النوم',off:'إيقاف',novoice:'الصوت غير متوفر على هذا الجهاز. ثبّت صوتًا من إعدادات تحويل النص إلى كلام.',ended:'انتهت القصة',back:'رجوع',chan:'القنوات',demo:'وضع تجريبي: أضف روابط الفيديو في data.js',social:'حساباتنا',priv:'الخصوصية والأمان',noRes:'لا نتائج',
privText:["لا يجمع Riamo Qisas أي بيانات شخصية: لا حساب ولا إعلانات ولا متتبعات.","يُحفظ على جهازك اللغة التي اخترتها فقط (التخزين المحلي).","القراءة الصوتية يقوم بها جهازك. قد تأتي فيديوهات تلفاز الأطفال من خدمات خارجية لها قواعدها.","ننصح الآباء بمرافقة أطفالهم. محتوى تعليمي دون مشتريات."],
aboutText:"يروي Riamo Qisas للأطفال قصص الأنبياء بالعربية والفرنسية والإنجليزية."}
};
// id, ar, fr, en, emoji, age
const RAW=[
['adam','آدَمُ','Adam','Adam','🌱','3-6'],['idris','إِدْرِيسُ','Idris','Idris','✏️','6-12'],['nuh','نُوحٌ','Nuh','Noah','🚢','3-6'],['hud','هُودٌ','Hud','Hud','🌪️','6-12'],['salih','صَالِحٌ','Salih','Salih','🐪','6-12'],['ibrahim','إِبْرَاهِيمُ','Ibrahim','Abraham','⭐','3-6'],['lut','لُوطٌ','Lut','Lot','🏜️','6-12'],['ismail','إِسْمَاعِيلُ','Ismaïl','Ishmael','💧','6-12'],['ishaq','إِسْحَاقُ','Ishaq','Isaac','🌙','6-12'],['yaqub','يَعْقُوبُ','Yaqub','Jacob','🌾','6-12'],['yusuf','يُوسُفُ','Yusuf','Joseph','🌟','3-6'],['ayyub','أَيُّوبُ','Ayyub','Job','🌿','6-12'],['shuayb','شُعَيْبٌ','Shuayb','Shu\'ayb','⚖️','6-12'],['musa','مُوسَى','Musa','Moses','🌊','3-6'],['harun','هَارُونُ','Harun','Aaron','🕊️','6-12'],['dhulkifl','ذُو الكِفْلِ','Dhul-Kifl','Dhul-Kifl','🛡️','6-12'],['dawud','دَاوُودُ','Dawud','David','🎶','6-12'],['sulayman','سُلَيْمَانُ','Sulayman','Solomon','🐜','3-6'],['ilyas','إِلْيَاسُ','Ilyas','Elijah','🌤️','6-12'],['alyasa','اليَسَعُ','Al-Yasa','Elisha','🌱','6-12'],['yunus','يُونُسُ','Yunus','Jonah','🐋','3-6'],['zakariya','زَكَرِيَّا','Zakariya','Zechariah','🤲','6-12'],['yahya','يَحْيَى','Yahya','John','📖','6-12'],['isa','عِيسَى','Issa','Jesus','🕊️','6-12'],['muhammad','مُحَمَّدٌ','Muhammad ﷺ','Muhammad ﷺ','🌙','6-12']
];
const TXT={
adam:{ar:"خَلَقَ اللهُ آدَمَ مِنْ طِينٍ وَعَلَّمَهُ أَسْمَاءَ الأَشْيَاءِ كُلِّهَا. سَجَدَتِ المَلَائِكَةُ لِآدَمَ، أَمَّا إِبْلِيسُ فَرَفَضَ تَكَبُّرًا. أَكَلَ آدَمُ وَحَوَّاءُ مِنَ الشَّجَرَةِ، ثُمَّ طَلَبَا المَغْفِرَةَ فَغَفَرَ اللهُ لَهُمَا. نَتَعَلَّمُ: إِذَا أَخْطَأْنَا نَعْتَذِرُ وَنَرْجِعُ إِلَى اللهِ.",
fr:"Allah a créé Adam avec de la terre et lui a appris le nom de toutes choses. Les anges se sont inclinés devant lui, mais Iblis a refusé par orgueil. Adam et Hawa ont goûté à l'arbre interdit, puis ils ont demandé pardon à Allah, et Allah leur a pardonné. Nous apprenons : quand on se trompe, on s'excuse et on revient vers Allah.",
en:"Allah created Adam from clay and taught him the names of all things. The angels bowed to Adam, but Iblis refused out of pride. Adam and Hawwa tasted the forbidden tree, then asked Allah for forgiveness, and Allah forgave them. We learn: when we make a mistake, we say sorry and return to Allah."},
nuh:{ar:"دَعَا نُوحٌ قَوْمَهُ إِلَى اللهِ زَمَنًا طَوِيلًا، لَكِنَّ أَكْثَرَهُمْ رَفَضُوا. أَمَرَهُ اللهُ أَنْ يَبْنِيَ سَفِينَةً كَبِيرَةً. وَلَمَّا جَاءَ الطُّوفَانُ رَكِبَ المُؤْمِنُونَ وَمِنْ كُلِّ حَيَوَانٍ زَوْجَانِ فَنَجَوْا. نَتَعَلَّمُ الصَّبْرَ.",
fr:"Nuh a appelé son peuple à Allah pendant très longtemps, mais presque tous ont refusé. Allah lui a ordonné de construire un grand bateau. Quand le déluge est venu, les croyants et un couple de chaque animal sont montés à bord et ont été sauvés. Nous apprenons la patience.",
en:"Nuh called his people to Allah for a very long time, but almost all refused. Allah told him to build a great ship. When the flood came, the believers and a pair of every animal boarded and were saved. We learn patience."},
ibrahim:{ar:"كَانَ إِبْرَاهِيمُ يَبْحَثُ عَنِ الحَقِّ، فَفَهِمَ أَنَّ النُّجُومَ وَالقَمَرَ وَالشَّمْسَ لَيْسَتْ آلِهَةً لِأَنَّهَا تَغِيبُ. كَسَرَ الأَصْنَامَ لِيُبَيِّنَ أَنَّهَا لَا تَنْفَعُ وَلَا تَضُرُّ. أَلْقَاهُ قَوْمُهُ فِي النَّارِ، فَقَالَ اللهُ: يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَى إِبْرَاهِيمَ.",
fr:"Ibrahim cherchait la vérité : il a compris que ni les étoiles, ni la lune, ni le soleil ne sont des dieux, car ils disparaissent. Il a brisé les idoles pour montrer qu'elles ne peuvent ni aider ni nuire. Son peuple l'a jeté dans le feu, et Allah a dit : « Ô feu, sois fraîcheur et paix pour Ibrahim ».",
en:"Ibrahim searched for the truth: he understood that the stars, the moon and the sun are not gods, because they disappear. He broke the idols to show they can neither help nor harm. His people threw him into the fire, and Allah said: \"O fire, be cool and safe for Ibrahim.\""},
yusuf:{ar:"رَأَى يُوسُفُ فِي المَنَامِ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالقَمَرَ لَهُ سَاجِدِينَ. غَارَ إِخْوَتُهُ فَأَلْقَوْهُ فِي البِئْرِ، ثُمَّ بِيعَ فِي مِصْرَ. صَبَرَ فِي السِّجْنِ ثُمَّ صَارَ أَمِينًا عِنْدَ المَلِكِ. وَبَعْدَ سِنِينَ سَامَحَ إِخْوَتَهُ وَرَأَى أَبَاهُ يَعْقُوبَ.",
fr:"Yusuf a rêvé de onze étoiles, du soleil et de la lune qui se prosternaient devant lui. Ses frères, jaloux, l'ont jeté dans un puits, puis il a été vendu en Égypte. Il a été patient en prison, puis il est devenu un homme de confiance du roi. Des années plus tard, il a pardonné à ses frères et retrouvé son père Yaqub.",
en:"Yusuf dreamed of eleven stars, the sun and the moon bowing to him. His jealous brothers threw him into a well, and he was sold in Egypt. He was patient in prison, then became a trusted man of the king. Years later he forgave his brothers and was reunited with his father Yaqub."},
musa:{ar:"نَشَأَ مُوسَى فِي قَصْرِ فِرْعَوْنَ المَلِكِ الظَّالِمِ. اخْتَارَهُ اللهُ رَسُولًا وَأَمَرَهُ أَنْ يَدْعُوَ فِرْعَوْنَ إِلَى العَدْلِ. قَادَ مَعَ أَخِيهِ هَارُونَ بَنِي إِسْرَائِيلَ، وَشَقَّ اللهُ لَهُ البَحْرَ بِعَصَاهُ فَعَبَرُوا وَغَرِقَ فِرْعَوْنُ.",
fr:"Musa a grandi dans le palais de Pharaon, un roi injuste. Allah l'a choisi comme messager et lui a ordonné d'appeler Pharaon à la justice. Avec son frère Harun, il a guidé les Bani Israël. Allah a ouvert la mer avec son bâton : ils ont traversé, et Pharaon a été englouti.",
en:"Musa grew up in the palace of Pharaoh, an unjust king. Allah chose him as a messenger and told him to call Pharaoh to justice. With his brother Harun he led the Children of Israel. Allah split the sea with his staff: they crossed, and Pharaoh was drowned."},
yunus:{ar:"غَادَرَ يُونُسُ قَوْمَهُ غَاضِبًا وَرَكِبَ سَفِينَةً، فَابْتَلَعَهُ حُوتٌ كَبِيرٌ. فِي الظُّلُمَاتِ قَالَ: لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ. فَنَجَّاهُ اللهُ وَآمَنَ قَوْمُهُ.",
fr:"Yunus a quitté son peuple en colère et est monté sur un bateau. Une grande baleine l'a avalé. Dans l'obscurité, il a dit : « Il n'y a de dieu que Toi, gloire à Toi, j'étais injuste ». Allah l'a sauvé, et son peuple a cru.",
en:"Yunus left his people in anger and boarded a ship. A great whale swallowed him. In the darkness he said: \"There is no god but You, glory to You, I was unjust.\" Allah saved him, and his people believed."},
sulayman:{ar:"أَعْطَى اللهُ سُلَيْمَانَ فَهْمَ لُغَةِ الطَّيْرِ وَالنَّمْلِ. سَمِعَ نَمْلَةً تُحَذِّرُ قَوْمَهَا مِنْ جَيْشِهِ فَابْتَسَمَ وَشَكَرَ اللهِ. كَانَ مَلِكًا عَادِلًا مُتَوَاضِعًا.",
fr:"Allah a donné à Sulayman le pouvoir de comprendre les oiseaux et les fourmis. Il a entendu une fourmi avertir les siennes de son armée, il a souri et remercié Allah. C'était un roi juste et humble.",
en:"Allah gave Sulayman the ability to understand birds and ants. He heard an ant warn her people about his army, smiled, and thanked Allah. He was a just and humble king."}
};
function fallback(n,l){return l==='ar'?n+" عَلَيْهِ السَّلَامُ رَسُولٌ مِنْ رُسُلِ اللهِ. دَعَا قَوْمَهُ إِلَى عِبَادَةِ اللهِ وَحْدَهُ وَإِلَى الصِّدْقِ وَالإِحْسَانِ. صَبَرَ وَنَصَرَهُ اللهُ.":l==='fr'?n+" (paix sur lui) est l'un des messagers d'Allah. Il a appelé son peuple à adorer Allah seul, à dire la vérité et à être bon. Il a été patient, et Allah l'a aidé.":n+" (peace be upon him) is one of Allah's messengers. He called his people to worship Allah alone, to be truthful and kind. He was patient, and Allah helped him."}
const STORIES=RAW.map(r=>({id:r[0],n:{ar:r[1],fr:r[2],en:r[3]},emoji:r[4],age:r[5],narr:'Riamo Qisas',audioUrl:'',text:TXT[r[0]]||null}));
const CATS=[
{id:'ulul',c:'#5b3fd0',n:{ar:'أُولُو العَزْمِ',fr:'Les grands messagers',en:'The great messengers'},ids:['nuh','ibrahim','musa','isa','muhammad']},
{id:'patience',c:'#2a8f8a',n:{ar:'قِصَصُ الصَّبْرِ',fr:'Histoires de patience',en:'Stories of patience'},ids:['ayyub','yaqub','yusuf','yunus','nuh']},
{id:'kings',c:'#d68a2b',n:{ar:'أَنْبِيَاءُ مُلُوكٌ',fr:'Prophètes et rois',en:'Prophets and kings'},ids:['dawud','sulayman','yusuf']},
{id:'family',c:'#d2578b',n:{ar:'عَائِلَةُ إِبْرَاهِيمَ',fr:'La famille d\'Ibrahim',en:'Ibrahim\'s family'},ids:['ibrahim','ismail','ishaq','yaqub','lut']}
];
// TV Enfants: put your URLs in url (type: 'video' for mp4, 'iframe' for YouTube embed)
const CHANNELS=[
{id:'c1',type:'iframe',url:'',n:{ar:'قصص الأنبياء',fr:'Histoires des prophètes',en:'Prophet stories'}},
{id:'c2',type:'video',url:'',n:{ar:'أناشيد',fr:'Chants',en:'Songs'}},
{id:'c3',type:'video',url:'',n:{ar:'تعلّم وتسلّ',fr:'Apprendre en s\'amusant',en:'Learn and play'}}
];
const LINKS=[
['YouTube','https://www.youtube.com/@RiamoQisas'],
['Instagram','https://www.instagram.com/riamoqisas?dmpr=a3gydmFidGl4NHpn'],
['Facebook','https://www.facebook.com/share/1J579MLLXZ/'],
['TikTok','https://www.tiktok.com/@riamo.qisas'],
['Snapchat','https://www.snapchat.com/add/riamoqisas?share_id=c3Bhhyjj8HI&locale=fr-FR']
];
