export default {
  bannerTitle: 'BeyondBlock Taipei 2017',
  bannerDate: 'Nov. 25',
  bannerBtn: 'Register Now',

  navLink1: 'Speakers',
  navLink2: 'Agenda',
  navLink3: 'Venue',
  navLink4: 'Sponsors',

  zhMobileLang: '繁體中文',
  enMobileLang: 'English',
  langDropdown: 'Language',
  zhWording: '繁體中文',
  enWording: 'English',

  confTitle: 'Intro',
  confDescription: 'BeyondBlock Taipei is an 1-day conference focusing on blockchain technology.',

  meetupTitle: 'About Us',
  meetupDescription: 'Taipei Ethereum Meetup is an active community focusing on technical issues of Ethereum and other blockchain applications. Every month we have at least a meetup where voluntary speakers can share their research findings.',

  newsTitle: 'News',
  newsDescription: 'Follow our Facebook fan page or join our Facebook group to get the latest news!',
  moreBtn: 'FB Fan Page',

  speakerTitle: 'Speakers',
  speakers: [
    {
      name: 'Vitalik Buterin',
      title: 'Founder and Chief Scientist of Ethereum',
      image: require('../assets/speaker1.jpg'),
      url: 'http://vitalik.ca'
    },
    {
      name: 'Vlad Zamfir',
      title: 'Ethereum Research Lead',
      image: require('../assets/vlad.jpg'),
      url: 'https://twitter.com/VladZamfir'
    },
    {
      name: 'Loi Luu',
      title: 'Kyber Network CEO',
      image: require('../assets/speaker2.jpg'),
      url: 'https://www.comp.nus.edu.sg/%7Eloiluu/'
    },
    {
      name: 'Karl Floersch',
      title: 'Ethereum Researcher',
      image: require('../assets/speaker3.jpg'),
      url: 'https://karl.tech'
    },
    {
      name: 'Ben Ho',
      title: 'imToken CEO',
      image: require('../assets/speaker4.jpg'),
      url: 'https://token.im'
    },
    {
      name: 'Lane Rettig',
      title: 'Founder of CryptoNYC',
      image: require('../assets/speaker5.jpg'),
      url: 'https://twitter.com/lrettig'
    },
    {
      name: 'Philipp Seifert',
      title: 'Asia Business Lead at brainbot technologies AG',
      image: require('../assets/speaker7.jpg'),
      url: 'https://raiden.network/'
    },
    {
      name: 'Thomas Greco',
      title: 'OmiseGo Special Advisor',
      image: require('../assets/speaker8.jpg'),
      url: 'https://omisego.network'
    }
  ],

  sessionTitle: 'Agenda',
  sessions: [
    {
      start: '09:00',
      end: '09:30',
      speaker: null,
      title: 'Registration'
    },
    {
      start: '09:30',
      end: '09:40',
      speaker: null,
      title: 'Opening'
    },
    {
      start: '09:40',
      end: '10:10',
      speaker: 'Lane Rettig',
      title: 'Blockchain in NYC'
    },
    {
      start: '10:10',
      end: '11:10',
      speaker: 'Karl Floersch',
      title: 'Smart Contract Tutorial'
    },
    {
      start: '11:10',
      end: '11:30',
      speaker: null,
      title: 'Coffee & Networking Break'
    },
    {
      start: '11:30',
      end: '12:00',
      speaker: 'Ben Ho',
      title: 'imToken 2.0'
    },
    {
      start: '12:00',
      end: '12:20',
      speaker: null,
      title: 'Our Sponsors'
    },
    {
      start: '12:20',
      end: '13:30',
      speaker: null,
      title: 'Lunch'
    },
    {
      start: '13:30',
      end: '14:00',
      speaker: 'Philipp Seifert',
      title: 'Raiden Network'
    },
    {
      start: '14:00',
      end: '14:30',
      speaker: 'Loi Luu',
      title: 'Kyber Network'
    },
    {
      start: '14:30',
      end: '15:00',
      speaker: null,
      title: 'Our Sponsors'
    },
    {
      start: '15:00',
      end: '15:30',
      speaker: null,
      title: 'Coffee & Networking Break'
    },
    {
      start: '15:30',
      end: '16:00',
      speaker: 'Thomas Greco',
      title: 'The Value of Open Financial Networks (OMG!)'
    },
    {
      start: '16:00',
      end: '16:30',
      speaker: 'Vlad Zamfir',
      title: 'Blockchain Governance'
    },
    {
      start: '16:30',
      end: '17:00',
      speaker: 'Vitalik Buterin',
      title: 'Ethereum 2.0'
    },
    {
      start: '17:00',
      end: '17:20',
      speaker: null,
      title: 'Q & A'
    },
    {
      start: '17:20',
      end: '17:30',
      speaker: null,
      title: 'Group Photo'
    }
  ],

  transportTitle: 'Venue',
  location: 'Location: ',
  venueLocation: 'FutureWard – Central',
  address: 'Address: ',
  venueAddress: 'B1F., No.343, Changchun Rd., Songshan Dist., Taipei City 105, Taiwan',
  venueUrl: 'http://futureward.com/central/',

  sponsorTitle: 'Sponsors',
  platinumSponsorTitle: 'Platinum Sponsor',
  goldSponsorTitle: 'Gold Sponsor',
  silverSponsorTitle: 'Silver Sponsor',

  staffTitle: 'Staff',
  staff: [
    {
      name: 'juinc',
      duty: '總召',
      img: require('../assets/staff_juinc.jpg'),
      url: null
    },
    {
      name: 'yurenju',
      duty: '行銷',
      img: require('../assets/staff_yurenju.jpg'),
      url: null
    },
    {
      name: '呂峻豪',
      duty: '網站',
      img: require('../assets/staff_ben.jpg'),
      url: null
    },
    {
      name: 'paul',
      duty: '場務',
      img: require('../assets/staff_paul.jpg'),
      url: null
    },
    {
      name: 'Ken',
      duty: '攝影',
      img: require('../assets/staff_ken.jpg'),
      url: null
    }
  ]
}
