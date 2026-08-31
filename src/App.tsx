import { useState, type FormEvent, useEffect } from 'react';

type Page = 'home' | 'destinations' | 'gallery' | 'contact' | 'login' | 'register' | 'admin' | 'saved';

interface User { name: string; email: string; role: 'admin' | 'user'; }

interface Destination {
  id: string; name: string; tag: string; subtitle: string; img: string;
  desc: string; description: string; bestTime: string; reach: string;
  location: string; district: string; altitude: string; famous: string;
  mapEmbed: string; experiences: string[];
}

const ADMIN_EMAIL = 'admin@karnataka.com';

const destinations: Destination[] = [
  {
    id: 'hampi', name: 'Hampi', tag: 'Heritage', subtitle: 'UNESCO World Heritage Site',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Hampi_virupaksha_temple.jpg',
    desc: 'UNESCO ruins of Vijayanagara Empire — boulders, temples and timeless beauty.',
    description: 'Hampi, the former capital of the Vijayanagara Empire, is a surreal landscape of boulders, ruins, and ancient temples spread across 4,100 hectares. Walk through Virupaksha Temple (7th century), the iconic Stone Chariot at Vittala Temple, and watch sunset from Matanga Hill.',
    bestTime: 'October to March — pleasant weather for exploring ruins',
    reach: 'Nearest airport: Hubballi (150km). Rail: Hospet (13km). Buses from Bengaluru (350km).',
    location: 'Vijayanagara District', district: 'Vijayanagara', altitude: '467 m', famous: 'Ruins, Temples',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122831!2d76.35!3d15.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be4c1%3A0x0!2sHampi!5e0!3m2!1sen!2sin!4v1',
    experiences: ['Virupaksha Temple sunrise', 'Stone Chariot', 'Coracle ride', 'Hemakuta Hill sunset', 'Bazaar shopping']
  },
  {
    id: 'mysuru', name: 'Mysuru', tag: 'Royal', subtitle: 'City of Palaces',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg',
    desc: 'Dazzling Mysore Palace, Chamundi Hills and silk traditions.',
    description: 'Mysuru enchants with royal heritage, silk sarees, sandalwood, and world-famous Dasara. The illuminated Mysore Palace is Indo-Saracenic masterpiece. Climb Chamundi Hill, visit Devaraja Market.',
    bestTime: 'September to February — Dasara in Oct', reach: 'Mysore Airport. 143km from Bengaluru.',
    location: 'Mysuru District', district: 'Mysuru', altitude: '770 m', famous: 'Palace, Dasara',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31158!2d76.6394!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMysuru!5e0',
    experiences: ['Palace illumination', 'Chamundi Hill', 'Brindavan Gardens', 'Silk shopping', 'Devaraja Market']
  },
  {
    id: 'coorg', name: 'Coorg (Kodagu)', tag: 'Hills', subtitle: 'Scotland of India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Abbey_Falls%2C_Madikeri.jpg',
    desc: 'Coffee plantations, misty hills and Abbey Falls.',
    description: 'Coorg is misty hills, endless coffee plantations, and Kodava culture. Trek to Abbey Falls, visit Dubare Elephant Camp, drive through Pushpagiri.',
    bestTime: 'October to May', reach: 'Kannur Airport (90km). 250km from Bengaluru.',
    location: 'Kodagu District', district: 'Kodagu', altitude: '1,525 m', famous: 'Coffee, Mist',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31144!2d75.7337!3d12.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMadikeri!5e0',
    experiences: ['Coffee tour', 'Abbey Falls', 'Dubare Camp', 'Raja\'s Seat', 'Tadiandamol trek']
  },
  {
    id: 'gokarna', name: 'Gokarna', tag: 'Beach', subtitle: 'Temple town by sea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Gokarna_Om_Beach.jpg',
    desc: 'Pristine Om Beach, hidden coves, spiritual vibes.',
    description: 'Gokarna blends spirituality and beach life. Visit Mahabaleshwar Temple, trek Kudle, Om, Half Moon, Paradise beaches. Laid-back yoga vibe.',
    bestTime: 'October to March', reach: 'Goa Airport (140km). Rail: Gokarna Road.',
    location: 'Uttara Kannada', district: 'Uttara Kannada', altitude: 'Sea level', famous: 'Beaches, Temples',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30825!2d74.3149!3d14.5479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGokarna!5e0',
    experiences: ['Om Beach', 'Beach trek', 'Mahabaleshwar Temple', 'Sunset', 'Yoga']
  },
  {
    id: 'badami', name: 'Badami', tag: 'Caves', subtitle: 'Chalukya capital',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Badami_cave_3.jpg',
    desc: 'Cave temples carved into red sandstone.',
    description: 'Badami’s cliffs hide 6th-century cave temples. Four caves overlook Agastya Lake. Nearby Pattadakal (UNESCO) and Aihole.',
    bestTime: 'October to February', reach: 'Hubballi (105km). 460km from Bengaluru.',
    location: 'Bagalkot', district: 'Bagalkot', altitude: '586 m', famous: 'Cave Temples',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30598!2d75.682!3d15.918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBadami!5e0',
    experiences: ['Cave 1-4', 'Agastya Lake', 'Pattadakal', 'Aihole', 'Cliff sunset']
  },
  {
    id: 'chikmagalur', name: 'Chikmagalur', tag: 'Hills', subtitle: 'Coffee land',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Mullayanagiri%2C_Chikmagalur.jpg',
    desc: 'Birthplace of Indian coffee — Mullayanagiri peak.',
    description: 'Birthplace of coffee, Chikmagalur has Baba Budangiri peaks and Mullayanagiri (1,930m). Trek, sip brews, chase Hebbe Falls.',
    bestTime: 'September to March', reach: 'Mangalore (150km). 245km from Bengaluru.',
    location: 'Chikmagalur', district: 'Chikmagalur', altitude: '1,090 m', famous: 'Coffee, Peaks',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31400!2d75.7694!3d13.3161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChikmagalur!5e0',
    experiences: ['Mullayanagiri', 'Coffee estate', 'Hebbe Falls', 'Baba Budan', 'Kudremukh']
  },
  {
    id: 'jog', name: 'Jog Falls', tag: 'Nature', subtitle: 'Second-highest plunge',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jog_Falls_September_2012.jpg',
    desc: "India's second highest waterfall in full flow.",
    description: 'Jog Falls drops 253m in four cascades — Raja, Rani, Roarer, Rocket — thunderous in monsoon. Sharavathi valley.',
    bestTime: 'July to December', reach: 'Mangalore (200km). 400km from Bengaluru.',
    location: 'Shivamogga', district: 'Shivamogga', altitude: '488 m', famous: 'Waterfall',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15480!2d74.8128!3d14.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJog+Falls!5e0',
    experiences: ['Monsoon viewpoint', 'Base trek', 'Sharavathi backwaters', 'Photography']
  },
  {
    id: 'bengaluru', name: 'Bengaluru', tag: 'Urban', subtitle: 'Garden City',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Vidhana_Soudha_Bangalore.jpg',
    desc: 'Vidhana Soudha, gardens and tech capital.',
    description: 'Blend of tech parks, gardens, pubs, palaces. Lalbagh, Bangalore Palace, Cubbon Park, Indiranagar food.',
    bestTime: 'October to February', reach: 'Kempegowda Airport. Major rail hub.',
    location: 'Bengaluru Urban', district: 'Bengaluru Urban', altitude: '920 m', famous: 'Tech hub',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBengaluru!5e0',
    experiences: ['Lalbagh', 'Palace', 'Commercial Street', 'Craft beer', 'Nandi Hills']
  },
  {
    id: 'murudeshwar', name: 'Murudeshwar', tag: 'Beach', subtitle: 'Shiva over sea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Murudeshwar_temple_and_statue.jpg',
    desc: '123-ft Shiva statue beside Arabian Sea.',
    description: 'World’s second-tallest Shiva (123 ft) sitting by sea. 20-storey gopuram offers coastal views. Water sports, Netrani scuba.',
    bestTime: 'October to May', reach: 'Mangalore (165km). Rail: Murdeshwar.',
    location: 'Uttara Kannada', district: 'Uttara Kannada', altitude: '0 m', famous: 'Shiva statue',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30948!2d74.484!3d14.094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMurudeshwar!5e0',
    experiences: ['Shiva statue', 'Gopuram', 'Netrani scuba', 'Beach sunset', 'Water sports']
  },
  {
    id: 'udupi', name: 'Udupi', tag: 'Coastal', subtitle: 'Krishna temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Udupi_Krishna_Temple.jpg',
    desc: 'Krishna Matha and legendary cuisine.',
    description: '13th-century Krishna Matha founded by Madhvacharya. Home of Udupi cuisine. Malpe Beach, St. Mary’s Island basalt columns.',
    bestTime: 'October to March', reach: 'Mangalore (60km). 400km from Bengaluru.',
    location: 'Udupi', district: 'Udupi', altitude: '27 m', famous: 'Temple, Food',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62183!2d74.742!3d13.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUdupi!5e0',
    experiences: ['Krishna Matha', 'Malpe Beach', 'St Mary\'s Island', 'Cuisine trail', 'Kapu Lighthouse']
  },
  {
    id: 'bandipur', name: 'Bandipur', tag: 'Wildlife', subtitle: 'Tigers & elephants',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Elephants_in_Bandipur_National_Park.jpg',
    desc: 'Wild elephants in Bandipur Tiger Reserve.',
    description: 'Part of Nilgiri Biosphere, Bandipur is premier tiger reserve with elephants, leopards. Safari through dry deciduous forests.',
    bestTime: 'Mar-May & Oct-Feb', reach: 'Mysore (80km). 220km from Bengaluru.',
    location: 'Chamarajanagar', district: 'Chamarajanagar', altitude: '780 m', famous: 'Tigers',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62511!2d76.63!3d11.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBandipur!5e0',
    experiences: ['Jeep safari', 'Elephants', 'Bird watching', 'Himavad Betta', 'Night safari']
  },
  {
    id: 'dandeli', name: 'Dandeli', tag: 'Adventure', subtitle: 'White water rafting',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Kali_River_Dandeli.jpg',
    desc: 'Kali River rafting adventure capital.',
    description: 'Adventure capital on Kali River. White water rafting, kayaking, ziplining. Home to black panthers, hornbills.',
    bestTime: 'October to May', reach: 'Hubballi (75km). 460km from Bengaluru.',
    location: 'Uttara Kannada', district: 'Uttara Kannada', altitude: '473 m', famous: 'Rafting',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30866!2d74.62!3d15.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDandeli!5e0',
    experiences: ['Kali rafting', 'Kayaking', 'Jungle safari', 'Syntheri Rocks', 'Hornbills']
  },
  {
    id: 'mangaluru', name: 'Mangaluru', tag: 'Coastal', subtitle: 'Port city flavors',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Panambur_beach_Mangalore.jpg',
    desc: 'Panambur Beach and coastal cuisine.',
    description: 'Coastal Karnataka’s largest city. Panambur Beach, Kadri Temple, St. Aloysius Chapel. Feast on fish curry, neer dosa, ghee roast.',
    bestTime: 'October to February', reach: 'Mangaluru Airport. 350km from Bengaluru.',
    location: 'Dakshina Kannada', district: 'Dakshina Kannada', altitude: '22 m', famous: 'Food, Beaches',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62256!2d74.856!3d12.914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMangaluru!5e0',
    experiences: ['Panambur Beach', 'Kadri Temple', 'St Aloysius', 'Seafood trail', 'Pilgrimage']
  },
  {
    id: 'belur', name: 'Belur-Halebidu', tag: 'Heritage', subtitle: 'Hoysala marvels',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Chennakeshava_Temple%2C_Belur.jpg',
    desc: 'Chennakeshava Temple UNESCO carvings.',
    description: 'Twin Hoysala capitals (12th century). Chennakesava Temple Belur and Hoysaleswara Halebidu are UNESCO sites with intricate soapstone carvings.',
    bestTime: 'October to March', reach: 'Mangalore (130km). Hassan (38km).',
    location: 'Hassan', district: 'Hassan', altitude: '975 m', famous: 'Hoysala architecture',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31170!2d75.86!3d13.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBelur!5e0',
    experiences: ['Chennakesava', 'Hoysaleswara', 'Stone carvings', 'Yagachi Dam', 'Coffee']
  },
];

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<{name:string;email:string;password:string;role:'admin'|'user'}[]>([]);
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [saved, setSaved] = useState<string[]>(() => JSON.parse(localStorage.getItem('ek_saved_ids') || '[]'));

  useEffect(() => { localStorage.setItem('ek_saved_ids', JSON.stringify(saved)); }, [saved]);

  const navigate = (p: Page) => { setPage(p); setMenuOpen(false); window.scrollTo({top:0,behavior:'smooth'}); };
  const toggleSave = (id: string) => {
    if (!user) { alert('Login to save'); navigate('login'); return; }
    setSaved(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  };

  const navLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Destinations', page: 'destinations' as Page },
    { label: 'Gallery', page: 'gallery' as Page },
    { label: 'Contact', page: 'contact' as Page },
    ...(user ? [{ label: 'My Trips', page: 'saved' as Page }] : []),
    { label: user ? 'Logout' : 'Login', page: user ? 'home' as Page : 'login' as Page, action: user ? () => setUser(null) : undefined },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f0] font-[Outfit]">
      <nav className="sticky top-0 z-40 bg-[#0B3D2E] text-white shadow-lg">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto w-full">
          <button onClick={() => navigate('home')} className="text-2xl font-bold tracking-tight">
            <span className="text-[#D4AF37]">🌴 Explore</span> Karnataka
          </button>
          <button className="md:hidden text-[#D4AF37] text-3xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className="hidden md:flex gap-7 items-center">
            {navLinks.map(l => (
              <li key={l.label}>
                <button onClick={() => l.action ? l.action() : navigate(l.page)}
                  className={`py-1 border-b-2 transition ${page===l.page?'text-[#D4AF37] border-[#D4AF37]':'border-transparent hover:text-[#D4AF37]'}`}>
                  {l.label} {l.label==='My Trips' && saved.length>0 && <span className="ml-1 bg-[#D4AF37] text-[#0B3D2E] text-xs px-1.5 py-0.5 rounded-full">{saved.length}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`md:hidden bg-[#062418] transition-all overflow-hidden ${menuOpen?'max-h-96':'max-h-0'}`}>
          <ul>{navLinks.map(l=> <li key={l.label} className="border-t border-white/10"><button onClick={()=>l.action?l.action():navigate(l.page)} className="w-full py-3 px-6 text-left hover:text-[#D4AF37]">{l.label}</button></li>)}</ul>
        </div>
      </nav>

      <main className="flex-1">
        {page==='home' && (
          <>
            <header className="min-h-[90vh] flex items-center justify-center text-center text-white px-6 relative"
              style={{backgroundImage:`linear-gradient(rgba(11,61,46,0.75), rgba(6,36,24,0.85)), url(https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1920)`, backgroundSize:'cover', backgroundPosition:'center'}}>
              <div className="max-w-4xl relative z-10">
                {user && <p className="text-[#D4AF37] mb-3 animate-pulse">Welcome back, {user.name} 👋</p>}
                <h1 className="text-5xl md:text-7xl font-black text-[#D4AF37] leading-tight drop-shadow-2xl">Discover Hampi & Beyond</h1>
                <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">14 destinations across Karnataka — from UNESCO Hampi ruins to Coorg coffee hills. Click any card for details, map & save to your trips.</p>
                <div className="mt-10 flex gap-4 justify-center flex-wrap">
                  <button onClick={()=>navigate('destinations')} className="bg-[#D4AF37] hover:bg-[#f1c75a] text-[#062418] font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition hover:-translate-y-0.5">Explore 14 Places</button>
                  {!user && <button onClick={()=>navigate('register')} className="bg-white/10 backdrop-blur border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full">Create Free Account</button>}
                </div>
              </div>
            </header>

            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#0B3D2E]">Featured Destinations</h2>
                <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3"/>
                <p className="text-gray-600 mt-3">Click to explore & save</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {destinations.slice(0,8).map(d=>(
                  <div key={d.id} className="group cursor-pointer" onClick={()=>setSelectedDest(d)}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                      <div className="h-56 overflow-hidden relative">
                        <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                        <button onClick={(e)=>{e.stopPropagation(); toggleSave(d.id);}} className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur flex items-center justify-center transition ${saved.includes(d.id)?'bg-[#D4AF37] text-[#0B3D2E]':'bg-black/40 text-white hover:bg-black/60'}`}>♥</button>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-xl text-[#0B3D2E] group-hover:text-[#D4AF37]">{d.name}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{d.desc}</p>
                        <span className="inline-block mt-3 bg-[#D4AF37]/20 text-[#0B3D2E] px-3 py-1 rounded-full text-xs font-bold">{d.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {page==='destinations' && (
          <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0B3D2E]">All 14 Destinations</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinations.map(d=>(
                <div key={d.id} className="group cursor-pointer" onClick={()=>setSelectedDest(d)}>
                  <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                        <span className="text-white font-semibold">View Details →</span>
                      </div>
                      <button onClick={(e)=>{e.stopPropagation(); toggleSave(d.id);}} className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${saved.includes(d.id)?'bg-[#D4AF37]':'bg-white/90'}`}>♥</button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#0B3D2E]">{d.name}</h3>
                      <p className="text-xs text-gray-500">{d.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {page==='saved' && (
          <section className="py-16 px-6 max-w-6xl mx-auto min-h-[70vh]">
            <h2 className="text-3xl font-bold text-[#0B3D2E] mb-2">My Trips</h2>
            <p className="text-gray-600 mb-8">Your saved Karnataka destinations ({saved.length})</p>
            {saved.length===0 ? (
              <div className="text-center py-20 bg-white rounded-2xl">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-[#0B3D2E]">No trips saved</h3>
                <p className="text-gray-600 mt-2">Login and click ♥ on any destination</p>
                <button onClick={()=>navigate('destinations')} className="mt-6 bg-[#D4AF37] text-[#0B3D2E] px-6 py-2 rounded-full font-semibold">Browse Destinations</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.filter(d=>saved.includes(d.id)).map(d=>(
                  <div key={d.id} className="bg-white rounded-xl overflow-hidden shadow">
                    <img src={d.img} className="h-44 w-full object-cover" alt=""/>
                    <div className="p-4">
                      <h3 className="font-bold text-[#0B3D2E]">{d.name}</h3>
                      <div className="flex gap-2 mt-3">
                        <button onClick={()=>setSelectedDest(d)} className="text-sm bg-[#0B3D2E] text-white px-3 py-1.5 rounded-full">View</button>
                        <button onClick={()=>toggleSave(d.id)} className="text-sm text-red-600 ml-auto">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {page==='gallery' && (
          <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B3D2E] text-center mb-10">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {destinations.slice(0,8).map(d=>(
                <div key={d.id} className="aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer" onClick={()=>setSelectedDest(d)}>
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                </div>
              ))}
            </div>
          </section>
        )}

        {page==='contact' && (
          <section className="py-16 px-6">
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#0B3D2E] text-center mb-6">Plan Your Trip</h2>
              <form onSubmit={(e:FormEvent)=>{e.preventDefault(); alert('Thanks! We\'ll contact you.'); (e.target as HTMLFormElement).reset();}} className="space-y-4">
                <input placeholder="Name" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37]/30 outline-none"/>
                <input type="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37]/30 outline-none"/>
                <textarea placeholder="Destinations & dates" rows={4} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#D4AF37]/30 outline-none"/>
                <button className="w-full bg-[#D4AF37] text-[#0B3D2E] font-bold py-3 rounded-full">Send Enquiry</button>
              </form>
            </div>
          </section>
        )}

        {page==='login' && (
          <section className="py-16 px-6">
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form onSubmit={(e:FormEvent)=>{e.preventDefault(); const f=new FormData(e.target as HTMLFormElement); const email=String(f.get('email')); const pw=String(f.get('password')); const found=users.find(u=>u.email===email&&u.password===pw); if(!found){alert('Invalid');return;} setUser({name:found.name,email,role:found.role}); navigate(found.role==='admin'?'admin':'home');}} className="space-y-4">
                <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-lg"/>
                <input name="password" type="password" placeholder="Password" required className="w-full px-4 py-3 border rounded-lg"/>
                <button className="w-full bg-[#D4AF37] font-bold py-3 rounded-full">Login</button>
                <p className="text-center text-sm">No account? <button type="button" onClick={()=>navigate('register')} className="text-[#0B3D2E] font-semibold">Register</button></p>
                <p className="text-xs text-center text-gray-500">Test admin: admin@karnataka.com / any password after register</p>
              </form>
            </div>
          </section>
        )}

        {page==='register' && (
          <section className="py-16 px-6">
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
              <form onSubmit={(e:FormEvent)=>{e.preventDefault(); const f=new FormData(e.target as HTMLFormElement); const name=String(f.get('name')); const email=String(f.get('email')).toLowerCase(); const pw=String(f.get('password')); if(users.some(u=>u.email===email)){alert('Exists');return;} const role=email===ADMIN_EMAIL?'admin':'user'; setUsers([...users,{name,email,password:pw,role}]); alert('Registered! Please login.'); navigate('login');}} className="space-y-4">
                <input name="name" placeholder="Full name" required className="w-full px-4 py-3 border rounded-lg"/>
                <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-lg"/>
                <input name="password" type="password" placeholder="Password (6+ chars)" required minLength={6} className="w-full px-4 py-3 border rounded-lg"/>
                <button className="w-full bg-[#0B3D2E] text-white font-bold py-3 rounded-full">Register & Save Trips</button>
              </form>
            </div>
          </section>
        )}

        {page==='admin' && (
          <section className="py-20 px-6">
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl text-center">
              <span className="bg-[#D4AF37] px-4 py-1 rounded-full text-sm font-bold">ADMIN</span>
              <h1 className="text-3xl font-bold mt-4 text-[#0B3D2E]">Welcome {user?.name}</h1>
              <p className="text-gray-600 mt-3">Manage 14 destinations. Users can save trips after login.</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-[#f7f5f0] p-4 rounded-xl"><div className="text-2xl font-bold text-[#0B3D2E]">14</div><div className="text-sm">Places</div></div>
                <div className="bg-[#f7f5f0] p-4 rounded-xl"><div className="text-2xl font-bold text-[#0B3D2E]">{users.length}</div><div className="text-sm">Users</div></div>
                <div className="bg-[#f7f5f0] p-4 rounded-xl"><div className="text-2xl font-bold text-[#0B3D2E]">{saved.length}</div><div className="text-sm">Saved</div></div>
              </div>
            </div>
          </section>
        )}
      </main>

      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4 overflow-y-auto" onClick={()=>setSelectedDest(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden my-8" onClick={e=>e.stopPropagation()}>
            <div className="relative h-80">
              <img src={selectedDest.img} alt="" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/60 to-transparent"/>
              <button onClick={()=>setSelectedDest(null)} className="absolute top-4 right-4 w-10 h-10 bg-black/60 text-white rounded-full text-2xl">×</button>
              <div className="absolute bottom-0 p-8 text-white">
                <span className="bg-[#D4AF37] text-[#0B3D2E] px-3 py-1 rounded-full text-xs font-bold">{selectedDest.tag}</span>
                <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#D4AF37]">{selectedDest.name}</h1>
                <p className="text-lg opacity-90">{selectedDest.subtitle}</p>
              </div>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(92vh-20rem)]">
              <div className="grid md:grid-cols-[1fr_340px] gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed">{selectedDest.description}</p>
                  <h3 className="font-bold text-[#0B3D2E] mt-6 mb-2">Best Time</h3>
                  <p className="text-gray-600">{selectedDest.bestTime}</p>
                  <h3 className="font-bold text-[#0B3D2E] mt-4 mb-2">Top Experiences</h3>
                  <ul className="space-y-1">{selectedDest.experiences.map((e,i)=><li key={i} className="flex gap-2"><span className="text-[#D4AF37]">•</span>{e}</li>)}</ul>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#f7f5f0] rounded-xl p-4">
                    <h4 className="font-bold mb-2">📍 Map</h4>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <iframe src={selectedDest.mapEmbed} className="w-full h-full border-0" loading="lazy"/>
                    </div>
                  </div>
                  <button onClick={()=>toggleSave(selectedDest.id)} className={`w-full py-3 rounded-full font-bold transition ${saved.includes(selectedDest.id)?'bg-green-600 text-white':'bg-[#D4AF37] text-[#0B3D2E] hover:bg-[#f1c75a]'}`}>
                    {saved.includes(selectedDest.id)?'✓ Saved to My Trips':'♥ Save to My Trips'}
                  </button>
                  <button onClick={()=>{setSelectedDest(null); navigate('contact');}} className="w-full py-3 rounded-full border-2 border-[#0B3D2E] font-semibold">Plan Trip</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#062418] text-gray-300 text-center py-6 mt-auto">
        © 2026 <span className="text-[#D4AF37] font-semibold">Explore Karnataka</span> · Hampi hero · 14 destinations · Login to save trips
      </footer>
    </div>
  );
}