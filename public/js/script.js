/* ===========================================
   Explore Karnataka - Frontend Logic
   =========================================== */

// ---------- Destination Data ----------
window.DESTINATIONS = {
  hampi: {
    name: 'Hampi',
    tag: 'Heritage',
    subtitle: 'UNESCO World Heritage Site',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Hampi_virupaksha_temple.jpg',
    description: 'Hampi, the former capital of the Vijayanagara Empire, is a surreal landscape of boulders, ruins, and ancient temples spread across 4,100 hectares. Walk through the Virupaksha Temple (7th century), the iconic Stone Chariot at Vittala Temple, and watch sunset from Matanga Hill. The Tungabhadra River flows gently through this archaeological wonderland.',
    bestTime: 'October to March — pleasant weather for exploring ruins',
    reach: 'Nearest airport: Hubballi (150km). Nearest rail: Hospet Junction (13km). Buses from Bengaluru (350km, 7hrs).',
    location: 'Vijayanagara District, Karnataka',
    district: 'Vijayanagara',
    altitude: '467 m',
    famous: 'Ruins, Temples, Boulders',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61568.688!2d76.4185!3d15.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be000%3A0x6e52e3e546f1d3c6!2sHampi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890',
    experiences: ['Virupaksha Temple sunrise', 'Stone Chariot at Vittala', 'Coracle ride on Tungabhadra', 'Sunset at Hemakuta Hill', 'Bazaar street shopping']
  },
  mysuru: {
    name: 'Mysuru',
    tag: 'Royal',
    subtitle: 'City of Palaces',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg',
    description: 'Mysuru, Karnataka’s cultural capital, enchants with its royal heritage, silk sarees, sandalwood, and the world-famous Dasara festival. The illuminated Mysore Palace is a masterpiece of Indo-Saracenic architecture. Climb Chamundi Hill for panoramic views, visit the bustling Devaraja Market, and experience the city’s laid-back charm.',
    bestTime: 'September to February — Dasara in Oct is magical',
    reach: 'Airport: Mysore (Mysuru). Rail: Mysuru Junction. 143km from Bengaluru (3hrs by road/train).',
    location: 'Mysuru District, Southern Karnataka',
    district: 'Mysuru',
    altitude: '770 m',
    famous: 'Palace, Dasara, Silk',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62275!2d76.6394!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567891',
    experiences: ['Mysore Palace illumination', 'Chamundi Hill temple', 'Brindavan Gardens musical fountain', 'Devaraja Market', 'Mysore silk shopping']
  },
  coorg: {
    name: 'Coorg (Kodagu)',
    tag: 'Hills',
    subtitle: 'Scotland of India',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Abbey_Falls%2C_Madikeri.jpg',
    description: 'Coorg is misty hills, endless coffee plantations, and Kodava culture. Wake up to the aroma of coffee, trek to Abbey Falls, visit Dubare Elephant Camp, and drive through pushpagiri wildlife sanctuary. This is Karnataka’s favourite hill station for coffee lovers and nature seekers.',
    bestTime: 'October to May — post-monsoon greenery is stunning',
    reach: 'Nearest airport: Kannur (90km) or Mangalore (135km). 250km from Bengaluru (5.5hrs). No rail — road only.',
    location: 'Kodagu District, Western Ghats',
    district: 'Kodagu',
    altitude: '1,525 m',
    famous: 'Coffee, Mist, Waterfalls',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31157!2d75.7337!3d12.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5de8b7c7b7e2d%3A0x9f475d83cefc5e9e!2sMadikeri%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567892',
    experiences: ['Coffee plantation tour', 'Abbey Falls', 'Dubare Elephant Camp', 'Raja\'s Seat sunset', 'Tadiandamol trek']
  },
  gokarna: {
    name: 'Gokarna',
    tag: 'Beach',
    subtitle: 'Temple town by the sea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Gokarna_Om_Beach.jpg',
    description: 'Gokarna blends spirituality and beach life. Visit the ancient Mahabaleshwar Temple, then trek between pristine beaches — Kudle, Om, Half Moon, Paradise. Unlike Goa, Gokarna retains its laid-back, spiritual vibe with yoga retreats and beach shacks.',
    bestTime: 'October to March — perfect beach weather',
    reach: 'Nearest airport: Goa (140km). Rail: Gokarna Road. 485km from Bengaluru (9hrs).',
    location: 'Uttara Kannada District, Coastal Karnataka',
    district: 'Uttara Kannada',
    altitude: 'Sea level',
    famous: 'Beaches, Temples, Trekking',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30812!2d74.3149!3d14.5479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc6c9a00000001%3A0xea4b8b7a9c6f9b7c!2sGokarna%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567893',
    experiences: ['Om Beach', 'Beach trek Kudle to Paradise', 'Mahabaleshwar Temple', 'Sunset at Gokarna beach', 'Yoga retreat']
  },
  badami: {
    name: 'Badami',
    tag: 'Caves',
    subtitle: 'Chalukya capital',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Badami_cave_3.jpg',
    description: 'Badami’s red sandstone cliffs hide 6th-century cave temples carved by the Chalukyas. Four caves dedicated to Shiva, Vishnu, and Jain Tirthankaras overlook Agastya Lake. Nearby Pattadakal (UNESCO) and Aihole complete the Chalukyan trail.',
    bestTime: 'October to February',
    reach: 'Nearest airport: Hubballi (105km). Rail: Badami station. 460km from Bengaluru.',
    location: 'Bagalkot District',
    district: 'Bagalkot',
    altitude: '586 m',
    famous: 'Cave Temples, Chalukya architecture',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30258!2d75.6820!3d15.9180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8f3d7e0000001%3A0x9ca!2sBadami%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567894',
    experiences: ['Cave Temples 1-4', 'Agastya Lake boating', 'Pattadakal UNESCO site', 'Aihole temple complex', 'Sunset from cliffs']
  },
  chikmagalur: {
    name: 'Chikmagalur',
    tag: 'Hills',
    subtitle: 'Coffee land',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Mullayanagiri%2C_Chikmagalur.jpg',
    description: 'Birthplace of coffee in India, Chikmagalur is all about misty estates, Baba Budangiri peaks, and Mullayanagiri — Karnataka’s highest peak at 1,930m. Trek, sip fresh brews, and chase waterfalls like Hebbe and Jhari.',
    bestTime: 'September to March',
    reach: 'Nearest airport: Mangalore (150km). Rail: Kadur (40km). 245km from Bengaluru.',
    location: 'Chikmagalur District, Western Ghats',
    district: 'Chikmagalur',
    altitude: '1,090 m',
    famous: 'Coffee, Peaks, Homestays',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31188!2d75.7694!3d13.3161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbadbf!2sChikmagalur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567895',
    experiences: ['Mullayanagiri sunrise', 'Coffee estate stay', 'Hebbe Falls jeep safari', 'Baba Budangiri', 'Kudremukh trek']
  },
  jog: {
    name: 'Jog Falls',
    tag: 'Nature',
    subtitle: 'India’s second-highest plunge',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jog_Falls_September_2012.jpg',
    description: 'Jog Falls drops 253 meters in four cascades — Raja, Rani, Roarer, and Rocket — creating a thunderous spectacle during monsoon. Located in Sharavathi valley, it’s Karnataka’s most dramatic waterfall.',
    bestTime: 'July to December — peak flow in monsoon',
    reach: 'Nearest airport: Mangalore (200km). Rail: Talguppa (13km). 400km from Bengaluru.',
    location: 'Shivamogga District',
    district: 'Shivamogga',
    altitude: '488 m',
    famous: 'Waterfall, Monsoon',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15457!2d74.8128!3d14.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbee2d0!2sJog%20Falls%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567896',
    experiences: ['Viewpoint during monsoon', 'Trek to base (seasonal)', 'Sharavathi backwaters', 'Linganamakki dam', 'Photography']
  },
  bengaluru: {
    name: 'Bengaluru',
    tag: 'Urban',
    subtitle: 'Garden City',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Vidhana_Soudha_Bangalore.jpg',
    description: 'Karnataka’s capital blends tech parks with gardens, pubs, and palaces. Visit Lalbagh Botanical Garden, Bangalore Palace, Cubbon Park, and the buzzing Indiranagar and Koramangala food scene. Perfect base for weekend trips.',
    bestTime: 'October to February — best weather',
    reach: 'Kempegowda International Airport (BLR). Major rail hub.',
    location: 'Bengaluru Urban District',
    district: 'Bengaluru Urban',
    altitude: '920 m',
    famous: 'Tech hub, Gardens, Food',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567897',
    experiences: ['Lalbagh Garden', 'Bangalore Palace', 'Commercial Street shopping', 'Craft beer trail', 'Nandi Hills sunrise']
  },
  murudeshwar: {
    name: 'Murudeshwar',
    tag: 'Beach',
    subtitle: 'Shiva towering over sea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Murudeshwar_temple_and_statue.jpg',
    description: 'Home to the world’s second-tallest Shiva statue (123 ft) sitting beside the Arabian Sea. The 20-storey gopuram offers panoramic coastal views. Murudeshwar Temple is a major pilgrimage site with pristine beaches and water sports.',
    bestTime: 'October to May',
    reach: 'Nearest airport: Mangalore (165km). Rail: Murdeshwar station. 510km from Bengaluru.',
    location: 'Uttara Kannada District',
    district: 'Uttara Kannada',
    altitude: 'Sea level',
    famous: 'Shiva statue, Temple, Beach',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30948!2d74.484!3d14.094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc5a!2sMurdeshwar!5e0!3m2!1sen!2sin!4v1234567898',
    experiences: ['123-ft Shiva statue', 'Gopuram viewpoint', 'Netrani Island scuba', 'Beach sunset', 'Water sports']
  },
  udupi: {
    name: 'Udupi',
    tag: 'Coastal',
    subtitle: 'Krishna temple & cuisine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Udupi_Krishna_Temple.jpg',
    description: 'Udupi is famous for the 13th-century Krishna Matha founded by Madhvacharya and its legendary vegetarian cuisine that went global. Visit Malpe Beach, St. Mary’s Island with basalt columns, and Kapu Lighthouse.',
    bestTime: 'October to March',
    reach: 'Nearest airport: Mangalore (60km). Rail: Udupi. 400km from Bengaluru.',
    location: 'Udupi District',
    district: 'Udupi',
    altitude: '27 m',
    famous: 'Krishna Temple, Food, Beaches',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62183!2d74.742!3d13.340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sUdupi!5e0!3m2!1sen!2sin!4v1234567899',
    experiences: ['Krishna Matha darshan', 'Malpe Beach', 'St. Mary\'s Island', 'Udupi cuisine trail', 'Kapu Lighthouse']
  },
  bandipur: {
    name: 'Bandipur National Park',
    tag: 'Wildlife',
    subtitle: 'Tigers & elephants',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Elephants_in_Bandipur_National_Park.jpg',
    description: 'Part of Nilgiri Biosphere Reserve, Bandipur is one of India’s premier tiger reserves with healthy populations of elephants, leopards, and deer. Safari through dry deciduous forests on the Mysore-Ooty highway.',
    bestTime: 'March to May (sightings) & Oct-Feb (weather)',
    reach: 'Nearest airport: Mysore (80km). 220km from Bengaluru via Mysore.',
    location: 'Chamarajanagar District',
    district: 'Chamarajanagar',
    altitude: '780 m',
    famous: 'Tiger reserve, Safari',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62511!2d76.63!3d11.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBandipur!5e0!3m2!1sen!2sin!4v1234567800',
    experiences: ['Jeep safari', 'Elephant spotting', 'Bird watching', 'Himavad Gopalaswamy Betta', 'Night safari']
  },
  dandeli: {
    name: 'Dandeli',
    tag: 'Adventure',
    subtitle: 'White water rafting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Kali_River_Dandeli.jpg',
    description: 'Adventure capital of Karnataka on the Kali River. White water rafting, kayaking, ziplining, and jungle stays. Dense deciduous forests are home to black panthers, hornbills, and Malabar giant squirrels.',
    bestTime: 'October to May — rafting best post-monsoon',
    reach: 'Nearest airport: Hubballi (75km). Rail: Alnavar (32km). 460km from Bengaluru.',
    location: 'Uttara Kannada District',
    district: 'Uttara Kannada',
    altitude: '473 m',
    famous: 'Rafting, Jungle, Hornbills',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30866!2d74.62!3d15.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sDandeli!5e0!3m2!1sen!2sin!4v1234567801',
    experiences: ['Kali River rafting', 'Kayaking', 'Jungle safari', 'Syntheri Rocks', 'Hornbill spotting']
  },
  mangaluru: {
    name: 'Mangaluru',
    tag: 'Coastal',
    subtitle: 'Port city flavors',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Panambur_beach_Mangalore.jpg',
    description: 'Coastal Karnataka’s largest city blends Tulu culture, pristine beaches, and incredible seafood. Visit Panambur Beach, Kadri Manjunath Temple, St. Aloysius Chapel, and feast on Mangalorean fish curry, neer dosa, and ghee roast.',
    bestTime: 'October to February',
    reach: 'Mangaluru International Airport. Rail: Mangalore Junction. 350km from Bengaluru.',
    location: 'Dakshina Kannada',
    district: 'Dakshina Kannada',
    altitude: '22 m',
    famous: 'Beaches, Food, Temples',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62256!2d74.856!3d12.914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sMangaluru!5e0!3m2!1sen!2sin!4v1234567802',
    experiences: ['Panambur Beach', 'Kadri Temple', 'St. Aloysius Chapel', 'Seafood trail', 'Pilgrimage circuit']
  },
  belur: {
    name: 'Belur-Halebidu',
    tag: 'Heritage',
    subtitle: 'Hoysala marvels',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Chennakeshava_Temple%2C_Belur.jpg',
    description: 'Twin capitals of the Hoysala Empire (12th century) featuring the most intricate stone carvings in India. Chennakesava Temple at Belur and Hoysaleswara Temple at Halebidu are UNESCO World Heritage sites showcasing soapstone architecture.',
    bestTime: 'October to March',
    reach: 'Nearest airport: Mangalore (130km). Rail: Hassan (38km). 220km from Bengaluru.',
    location: 'Hassan District',
    district: 'Hassan',
    altitude: '975 m',
    famous: 'Hoysala architecture, Carvings',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31170!2d75.86!3d13.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBelur!5e0!3m2!1sen!2sin!4v1234567803',
    experiences: ['Chennakesava Temple', 'Hoysaleswara Temple', 'Stone carving details', 'Yagachi Dam', 'Coffee nearby']
  }
};

// ---------- Mobile Menu Toggle ----------
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// ---------- API Helper ----------
const API = ''; // same origin
async function api(endpoint, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API}${endpoint}`, {
    method, headers, body: body ? JSON.stringify(body) : null
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// ---------- Show form message ----------
function showMsg(el, text, type = 'success') {
  if (!el) return;
  el.textContent = text;
  el.className = `form-msg ${type}`;
}

// ---------- Register ----------
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const name = registerForm.name.value.trim();
    const email = registerForm.email.value.trim();
    const password = registerForm.password.value;

    if (!name || !email || !password) return showMsg(msg, 'All fields required', 'error');
    if (!/^\S+@\S+\.\S+$/.test(email)) return showMsg(msg, 'Invalid email format', 'error');
    if (password.length < 6) return showMsg(msg, 'Password must be 6+ characters', 'error');

    const { ok, data } = await api('/api/register', 'POST', { name, email, password });
    if (!ok) return showMsg(msg, data.message || 'Registration failed', 'error');
    showMsg(msg, 'Registered! Redirecting to login…', 'success');
    setTimeout(() => (window.location.href = 'login.html'), 1200);
  });
}

// ---------- Login ----------
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!email || !password) return showMsg(msg, 'Email & password required', 'error');

    const { ok, data } = await api('/api/login', 'POST', { email, password });
    if (!ok) return showMsg(msg, data.message || 'Login failed', 'error');

    localStorage.setItem('ek_token', data.token);
    localStorage.setItem('ek_user', JSON.stringify(data.user));
    showMsg(msg, 'Login successful! Redirecting…', 'success');

    setTimeout(() => {
      window.location.href = data.user.role === 'admin' ? 'admin.html' : 'index.html';
    }, 900);
  });
}

// ---------- Contact form ----------
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const { name, email, message } = contactForm;
    if (!name.value.trim() || !email.value.trim() || !message.value.trim())
      return showMsg(msg, 'All fields are required', 'error');
    if (!/^\S+@\S+\.\S+$/.test(email.value))
      return showMsg(msg, 'Invalid email', 'error');

    showMsg(msg, 'Thanks! We\'ll get back to you soon.', 'success');
    contactForm.reset();
  });
}

// ---------- Admin Page Guard ----------
if (window.location.pathname.endsWith('admin.html')) {
  const token = localStorage.getItem('ek_token');
  const user = JSON.parse(localStorage.getItem('ek_user') || 'null');
  if (!token || !user || user.role !== 'admin') {
    alert('Admin access only. Please login as admin.');
    window.location.href = 'login.html';
  } else {
    const nameEl = document.getElementById('admin-name');
    if (nameEl) nameEl.textContent = user.name;
  }
}

// ---------- Logout ----------
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('ek_token');
    localStorage.removeItem('ek_user');
    window.location.href = 'login.html';
  });
}

// ---------- Save Destination ----------
async function saveDestination(id) {
  const token = localStorage.getItem('ek_token');
  const user = JSON.parse(localStorage.getItem('ek_user') || 'null');
  
  if (!token || !user) {
    alert('Please login to save destinations');
    window.location.href = 'login.html';
    return;
  }
  
  const dest = window.DESTINATIONS[id];
  if (!dest) return;
  
  const btn = document.getElementById('save-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Saving…';
  }
  
  try {
    const { ok, data } = await api('/api/destinations/save', 'POST', 
      { id, name: dest.name, image: dest.image }, token);
    
    if (ok) {
      if (btn) {
        btn.textContent = '✓ Saved to My Trips';
        btn.style.background = '#22c55e';
      }
      // Update local storage
      const saved = JSON.parse(localStorage.getItem('ek_saved') || '[]');
      if (!saved.find(d => d.id === id)) {
        saved.push({ id, name: dest.name, image: dest.image });
        localStorage.setItem('ek_saved', JSON.stringify(saved));
      }
    } else {
      alert(data.message || 'Failed to save');
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Save to My Trips';
      }
    }
  } catch (e) {
    // Fallback to localStorage if API fails
    const saved = JSON.parse(localStorage.getItem('ek_saved') || '[]');
    if (!saved.find(d => d.id === id)) {
      saved.push({ id, name: dest.name, image: dest.image });
      localStorage.setItem('ek_saved', JSON.stringify(saved));
    }
    if (btn) {
      btn.textContent = '✓ Saved to My Trips';
      btn.style.background = '#22c55e';
    }
  }
}

// Make save function global
window.saveDestination = saveDestination;

// ---------- Update Navbar for Logged-in User ----------
function updateNavbar() {
  const user = JSON.parse(localStorage.getItem('ek_user') || 'null');
  const navLinks = document.getElementById('nav-links');
  if (!navLinks || !user) return;
  
  // Check if My Trips link exists
  if (!document.getElementById('my-trips-link')) {
    const loginLink = navLinks.querySelector('a[href="login.html"]');
    if (loginLink && loginLink.parentElement) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="saved.html" id="my-trips-link">My Trips</a>`;
      navLinks.insertBefore(li, loginLink.parentElement);
      
      // Change login to logout
      loginLink.textContent = 'Logout';
      loginLink.href = '#';
      loginLink.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem('ek_token');
        localStorage.removeItem('ek_user');
        window.location.href = 'index.html';
      };
    }
  }
}

// Run on load
document.addEventListener('DOMContentLoaded', updateNavbar);
