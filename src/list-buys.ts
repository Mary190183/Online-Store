
const listBuys = [
  // [       
    {
      id: 1,
      name: 'Gyokuro And Ji',
      sort: 'Green tea',
      province: 'Taiwan',
      description: 'First grade Steamed',
      image1: `./assets/img/id1_1.jpg`,
      image2: `./assets/img/id1_2.jpg`,
      amount: 3000,
      price: 2
    },
    {
      id: 2,
      name: 'Zhi Tiao Liu Mao Feng Sichuan',
      sort: 'Green tea',
      province: 'Taiwan',
      description: 'It has a thick velvety floral-fruity, honey aroma with notes of prunes',
      image1: `./assets/img/id2_1.jpg`,
      image2: `./assets/img/id2_2.jpg`,
      amount: 2000,
      price: 1.5 
    },
    {
      id: 3,
      name: 'Tang Ming Yuan',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: 'Snow green tea 2021',
      image1: `./assets/img/id3_1.jpg`,
      image2: `./assets/img/id3_2.jpg`,
      amount: 5000,
      price: 1
    },
    {
      id: 4,
      name: 'Lei Ming Nyao Zuei',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: "(Petrel's Beak grade C1) 2021 Meng Ding Shan",
      image1: `./assets/img/id4_1.jpg`,
      image2: `./assets/img/id4_2.jpg`,
      amount: 4000,
      price: 1
    },
    {
      id: 5,
      name: 'Tai Ping Hou Kui',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: "Monkey King 2021 Bei Huang Shan Anhui Province",
      image1: `./assets/img/id5_1.jpg`,
      image2: `./assets/img/id5_2.jpg`,
      amount: 2500,
      price: 0.5
    },
    {
      id: 6,
      name: 'Yun Wu Liu Cha',
      sort: 'Green tea',
      province: 'Taiwan',
      description: "Cloud green tea 2019",
      image1: `./assets/img/id6_1.jpg`,
      image2: `./assets/img/id6_2.jpg`,
      amount: 4500,
      price: 0.2
    },
  // ],
  // [       
    {
      id: 7,
      name: 'Wishan Niulankeng Zhou Gui',
      sort: 'Oolong',
      province: 'Hong Pao',
      description: 'Da Hong Pao Province',
      image1: `./assets/img/id7_1.jpg`,
      image2: `./assets/img/id7_2.jpg`,
      amount: 4000,
      price: 3
    },
    {
      id: 8,
      name: 'Qi Dan, Wuishan Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: 'Chocolate taste',
      image1: `./assets/img/id8_1.jpg`,
      image2: `./assets/img/id8_2.jpg`,
      amount: 2500,
      price: 1 
    },
    {
      id: 9,
      name: 'Oolong Dong Ding',
      sort: 'Oolong',
      province: 'Taiwan',
      description: 'Spring Taiwan',
      image1: `./assets/img/id9_1.jpg`,
      image2: `./assets/img/id9_2.jpg`,
      amount: 4000,
      price: 1
    },
    {
      id: 10,
      name: 'Ginseng Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "Taiwan 2021",
      image1: `./assets/img/id10_1.jpg`,
      image2: `./assets/img/id10_2.jpg`,
      image3: `./assets/img/id10_3.jpg`,
      amount: 6000,
      price: 2
    },
    {
      id: 11,
      name: 'Jin Xuan Milk Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "Class AAAA",
      image1: `./assets/img/id11_1.jpg`,
      image2: `./assets/img/id11_2.jpg`,
      amount: 3500,
      price: 1.5
    },
    {
      id: 12,
      name: 'Gaba Winter Jade Dong Ding',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "The aroma is high, light, fruity and sweet.",
      image1: `./assets/img/id12_1.jpg`,
      image2: `./assets/img/id12_2.jpg`,
      amount: 4000,
      price: 0.8
    },
  // ],
  // [       
    {
      id: 13,
      name: 'Shen Puer Bai Hao Yin Zhen',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "White Yunnan Shen Pu'er 2022",
      image1: `./assets/img/id13_1.jpg`,
      image2: `./assets/img/id13_2.jpg`,
      amount: 3000,
      price: 3.5
    },
    {
      id: 14,
      name: 'Shen Puer Lung Ji To Cha',
      sort: 'Puer',
      province: 'Huang Shan',
      description: 'Dragon Balls from Da Huang Shan Mountain 2018',
      image1: `./assets/img/id14_1.jpg`,
      image2: `./assets/img/id14_2.jpg`,
      amount: 3500,
      price: 3 
    },
    {
      id: 15,
      name: 'Shen Puer Myung Ku Da Hu Jai',
      sort: 'Puer',
      province: 'Myung Ku',
      description: 'Ancient trees Myung Ku place 2016',
      image1: `./assets/img/id15_1.jpg`,
      image2: `./assets/img/id15_2.jpg`,
      amount: 6000,
      price: 6
    },
    {
      id: 16,
      name: 'Shen Puer Ban Tzu Chan',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Shen Puer Pigtail Tea Mountain Da Huang Shan",
      image1: `./assets/img/id16_1.jpg`,
      image2: `./assets/img/id16_2.jpg`,
      amount: 2000,
      price: 1
    },
    {
      id: 17,
      name: 'Shen Puer Kun Que Shi',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Red Tongues purple buds Yes Huang Shan 2018",
      image2: `./assets/img/id17_1.jpg`,
      image1: `./assets/img/id17_2.jpg`,
      amount: 1500,
      price: 3.5
    },
    {
      id: 18,
      name: 'Shen Puer Ye Shen Bai Ya Bao',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Wild white buds",
      image1: `./assets/img/id18_1.jpg`,
      image2: `./assets/img/id18_2.jpg`,
      amount: 2000,
      price: 0.5
    },
  // ],
  // [       
    {
      id: 19,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With orange peel",
      image1: `./assets/img/id19_1.jpg`,
      image2: `./assets/img/id19_2.jpg`,
      amount: 2000,
      price: 1
    },
    {
      id: 20,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: 'With osmanthus',
      image1: `./assets/img/id20_1.jpg`,
      image2: `./assets/img/id20_2.jpg`,
      amount: 2500,
      price: 2 
    },
    {
      id: 21,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: 'With jasmine',
      image1: `./assets/img/id21_1.jpg`,
      image2: `./assets/img/id21_2.jpg`,
      amount: 1000,
      price: 3.6
    },
    {
      id: 22,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With red peony",
      image1: `./assets/img/id22_1.jpg`,
      image2: `./assets/img/id22_2.jpg`,
      amount: 6000,
      price: 4.5
    },
    {
      id: 23,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With mountain carnation",
      image1: `./assets/img/id23_1.jpg`,
      image2: `./assets/img/id23_2.jpg`,
      amount: 5500,
      price: 3
    },
    {
      id: 24,
      name: 'Dian Hong Hua Long Zhu',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With yellow chrysanthemum",
      image1: `./assets/img/id24_1.jpg`,
      image2: `./assets/img/id24_2.jpg`,
      amount: 1000,
      price: 2.5
    },
  // ]
]

export default listBuys;