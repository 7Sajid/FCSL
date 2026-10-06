export type Office = {
  id: string;
  name: string;
  address: string;
  tel?: string;
  cell?: string;
};

export type Division = {
  name: string;
  offices: Office[];
};

export const officesData: Division[] = [
  {
    name: "Dhaka Division",
    offices: [
      { id: "01", name: "Head Office", address: "Room # 422, DSE Annex Building (3rd Floor), 9/E Motijheel- C/A, Dhaka-1000.", tel: "88 0222 3352096", cell: "01730486007" },
      { id: "02", name: "Corporate Office", address: "Samabay Bank Bhaban (9th floor), 9/D Motijheel- C/A, Dhaka-1000.", tel: "88 0222 3352096, 88 0247123120", cell: "01332553283, 01332553284, 01754543953, 01764610730" },
      { id: "03", name: "Head Office Extension", address: "DSE Annex Building 11th Floor (North Side) 9/E Motijheel C/A, Dhaka-1000.", cell: "01332553283" },
      { id: "04", name: "Dhanmondi Branch", address: "Keari Plaza (4th Floor, Middle Portion of South Side), House # 83, Road # 8/A, Dhanmondi, Dhaka-1209.", tel: "88 02 222242598", cell: "01730486008" },
      { id: "05", name: "Kawranbazar Branch", address: "Room#19, Kabbokosh Super market (7th Floor), Plot#3/D, Kawranbazar, Dhaka-1215.", cell: "01711614614" },
      { id: "06", name: "Elephant Road Branch", address: "Room#4/A, Sahera Tropical Centre (12th Floor), 218 Elephant Road, Dhaka-1205.", tel: "88 02 9611423", cell: "01727855919" },
      { id: "07", name: "Badda Branch", address: "Sung M Tower, (Opposite of Holland Tower) Ga-134/A, Middle Badda, Pragati Sarani, Dhaka-1212.", cell: "01730486009" },
      { id: "08", name: "Shantinagar Branch", address: "Suit # 8/9 A, Eastern Plus Commercial Complex (8th floor), 145 Shantinagar, Dhaka-1212.", tel: "88 02 48316776", cell: "01332553288, 01758492406" },
      { id: "09", name: "Uttara Branch", address: "Wind Flower (5th Floor) Suite#5/D, House#30 Sonargaon Janapath Road, Sector#11, Uttara, Dhaka.", cell: "01878026025" },
      { id: "10", name: "Gazipur Branch", address: "Room#505 (4th Floor) Prokousholi Bhaban G-113/3, Rajbari Road, Joydebpur, Gazipur.", cell: "01325067074" },
      { id: "11", name: "Narayangonj Branch", address: "Room # B-1 (1st Floor West Side), Habib Ullah Tower, Chittagong road, Sidhirgonj, Narayongonj.", cell: "01973970152" },
      { id: "12", name: "Mirpur 1 Branch", address: "Room#3 (4rth Floor), Fair Plaza, Plot#C/3, Block#D, Street#1, Section#1, Mirpur, Dhaka-1216.", cell: "01325067072" },
      { id: "13", name: "Uttara 2", address: "House #58 (1st Floor, 2B), Road #03, Sector-12, Uttara (West), Dhaka.", cell: "01710466440" }
    ]
  },
  {
    name: "Chattogram Division",
    offices: [
      { id: "14", name: "Agrabad Branch", address: "Pine View (2nd Floor),Ward #28, 100, Agrabad C/A, P.S. Double Mooring, Chattogram.", cell: "" },
      { id: "15", name: "Khatungonj Branch", address: "Yunusco Building, (2nd Floor north side), 33 Ramjoy Mohajon Lane, Khatungonj, Kotowatoli, Chattogram.", cell: "01332-553294" },
      { id: "16", name: "Agrabad DBooth", address: "Mostafa Centre (2nd floor South side) 1102/A, Agrabad C/A, P.S: Doublemuring, Chattogram-4100.", cell: "01976564884" },
      { id: "17", name: "Hathajari Branch", address: "Idrise Tower, Room#1 (3rd Floor south side) Ramgor road Hathazari, Chattogram.", cell: "+880 1772-232647" },
      { id: "18", name: "Jubilee Road Booth", address: "Room#14, Kader Tower (5th Floor), Tin Puler Matha, Jubilee Road, Kotowali, Chattagram.", cell: "01332553293, 01886543953" },
      { id: "19", name: "Chagalnaiya Booth", address: "Hazi Ahsan Ullah Sowdagar Market (2nd Floor), College Road, Chagalnaiya, Feni.", cell: "01754703450" },
      { id: "20", name: "Brahmanbaria Branch", address: "Mawla Bhaban (3rd Floor) TA Road, Brahmanbaria.", cell: "01325067073" },
      { id: "21", name: "Sonaimuri Branch", address: "Nur Plaza, Room #303 (2nd Floor North Side), Chatarpaia Road, Sonaimuri, Noakhali.", cell: "01812078860" },
      { id: "22", name: "Shahrasti Branch", address: "Mohin Uddin Tower, 1st floor, Mehar Kalibari Dokkhin Bazar, Upazila & Shahrasti Thana Road Mor, Shahrasti Pawrosovha, Chandpur.", cell: "01332553290" },
      { id: "23", name: "Laksmipur Branch", address: "Nodee Bangla Shopping Complex (2nd Floor), Thana Road, Lakkhipur-3700.", cell: "01773432771" },
      { id: "24", name: "Comilla Branch", address: "Room No#6/6, B B Samatat Center (6th Floor) Laksam Road, Kandirpar, Comilla.", cell: "01707074040" },
      { id: "25", name: "Chandpur Sadar Booth", address: "Shop# 9&10 (1st Floor), Priyangon Shopping Centre, Holding#64/63 Cumilla Road, Chandpur Sadar, Chandpur.", cell: "01332553288" }
    ]
  },
  {
    name: "Barishal Division",
    offices: [
      { id: "26", name: "Barishal Digital Booth", address: "15 Perera Road (1st floor east side), Holding # 403, Ward # 9, Barishal City Corporation, P.S: Kotowali, Dist: Barishal.", cell: "01335-103875" }
    ]
  },
  {
    name: "Khulna Division",
    offices: [
      { id: "27", name: "Jhinaidah Booth", address: "Malita plaza (3rd floor south side), 17 Sher-e-Bangla Sadak (Payera Chottor), Sadar, Jhinaidah.", cell: "01325067071" },
      { id: "28", name: "Khulna Branch", address: "Hotel Golden King(3rd Floor, South-West Side), 25 Sir Iqbal Road (Picture Palace More), Khulna Sadar, Khulna.", cell: "01318378258" },
      { id: "29", name: "Jashore Booth", address: "Room#01, Mahi plaza(3rd Floor)16 Shahid sadak Maikpatti, jashore.", cell: "01751941010" },
      { id: "30", name: "Kustia Booth", address: "Sharif Plaza, 1st Floor North Side, Holding#64/2, Ward#3, Amlapara, Sadar, Kustia.", cell: "01717406380" }
    ]
  },
  {
    name: "Sylhet Division",
    offices: [
      { id: "31", name: "Sylhet Branch", address: "Shayesta Complex (3rd Floor), Waves C/12, Ambarkhana, Sylhet-3100.", cell: "01332553289" },
      { id: "32", name: "Habigonj Booth", address: "Alif Shah Centre (2nd Floor North Side)3840 Old Munsefi Road, Hobigonj.", cell: "01717732896" }
    ]
  },
  {
    name: "Rangpur Division",
    offices: [
      { id: "33", name: "Dinajpur Branch", address: "Room # 202 (1st Floor), Beside Agrani Bank, 104/1004 Station road, Bahadur Bazar, Sadar, Dinajpur.", cell: "01712222999" }
    ]
  }
];
