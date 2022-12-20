const listBuys = [
  // [       
    {
      id: 1,
      name: 'Gyokuro And Ji',
      sort: 'Green tea',
      province: 'Taiwan',
      description: 'First grade Steamed',
      image1: 'https://taplink.st/p/d/4/d/b/30656601.jpg',
      image2: 'https://taplink.st/p/8/8/4/9/30656604.jpg',
      amount: 3000,
      price: 2
    },
    {
      id: 2,
      name: 'Zhi Tiao Liu Mao Feng Sichuan',
      sort: 'Green tea',
      province: 'Taiwan',
      description: 'It has a thick velvety floral-fruity, honey aroma with notes of prunes',
      image1: 'https://taplink.st/p/0/8/c/b/30656670.jpg',
      image2: 'https://taplink.st/p/c/8/f/e/30656667.jpg',
      amount: 2000,
      price: 1.5 
    },
    {
      id: 3,
      name: 'Tang Ming Yuan',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: 'Snow green tea 2021',
      image1: 'https://taplink.st/p/0/5/6/4/27322651.jpg',
      image2: 'https://taplink.st/p/6/5/4/f/27322657.jpg',
      amount: 5000,
      price: 1
    },
    {
      id: 4,
      name: 'Lei Ming Nyao Zuei',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: "(Petrel's Beak grade C1) 2021 Meng Ding Shan",
      image1: 'https://taplink.st/p/3/c/2/7/27322198.jpg',
      image2: 'https://taplink.st/p/7/d/5/2/27322189.jpg',
      amount: 4000,
      price: 1
    },
    {
      id: 5,
      name: 'Tai Ping Hou Kui',
      sort: 'Green tea',
      province: 'Huang Shan',
      description: "Monkey King 2021 Bei Huang Shan Anhui Province",
      image1: 'https://taplink.st/p/0/3/f/5/27321772.jpg',
      image2: 'https://taplink.st/p/5/9/5/b/27321778.jpg',
      amount: 2500,
      price: 0.5
    },
    {
      id: 6,
      name: 'Yun Wu Liu Cha',
      sort: 'Green tea',
      province: 'Taiwan',
      description: "Cloud green tea 2019",
      image1: 'https://taplink.st/p/4/4/8/a/27202026.jpg',
      image2: 'https://taplink.st/p/7/f/a/9/27202035.jpg',
      amount: 4500,
      price: 0.2
    },
  // ],
  // [       
    {
      id: 7,
      name: 'Wishan Oolong Niulankeng Zhou Gui',
      sort: 'Oolong',
      province: 'Hong Pao',
      description: 'Da Hong Pao Province',
      image1: 'https://taplink.st/p/6/b/d/8/49318314.jpg',
      image2: 'https://taplink.st/p/4/a/8/5/49318311.jpg',
      amount: 4000,
      price: 3
    },
    {
      id: 8,
      name: 'Qi Dan, Wuishan Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: 'Chocolate taste',
      image1: 'https://taplink.st/p/d/2/d/e/46806024.jpg',
      image2: 'https://taplink.st/p/c/2/6/a/46806027.jpg',
      amount: 2500,
      price: 1 
    },
    {
      id: 9,
      name: 'Oolong Dong Ding',
      sort: 'Oolong',
      province: 'Taiwan',
      description: 'Spring Taiwan',
      image1: 'https://taplink.st/p/c/1/8/f/42653700.jpg',
      image2: 'https://taplink.st/p/d/9/9/2/42653701.jpg',
      amount: 4000,
      price: 1
    },
    {
      id: 10,
      name: 'Ginseng Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "Taiwan 2021",
      image1: 'https://taplink.st/p/6/9/9/0/36400758.jpg',
      image2: 'https://taplink.st/p/7/d/e/2/36400761.jpg',
      image3: 'https://taplink.st/p/3/6/9/5/36400764.jpg',
      amount: 6000,
      price: 2
    },
    {
      id: 11,
      name: 'Jin Xuan Milk Oolong',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "Class AAAA",
      image1: 'https://taplink.st/p/7/7/1/3/27481287.jpg',
      image2: 'https://taplink.st/p/4/d/8/e/27481290.jpg',
      amount: 3500,
      price: 1.5
    },
    {
      id: 12,
      name: 'Gaba Winter Jade Dong Ding',
      sort: 'Oolong',
      province: 'Taiwan',
      description: "The aroma is high, light, fruity and sweet. The taste is delicate, sweet and soft, buttery, with a fruity sourness, nuances of spices and a long, refreshing aftertaste.",
      image1: 'https://taplink.st/p/5/0/7/4/34065672.jpg',
      image2: 'https://taplink.st/p/8/4/5/7/34065671.jpg',
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
      image1: 'https://taplink.st/p/a/b/5/e/27201289.jpg',
      image2: 'https://taplink.st/p/2/d/a/2/27201292.jpg',
      amount: 3000,
      price: 3.5
    },
    {
      id: 14,
      name: 'Shen Puer Lung Ji To Cha',
      sort: 'Puer',
      province: 'Huang Shan',
      description: 'Dragon Balls from Da Huang Shan Mountain 2018',
      image1: 'https://taplink.st/p/4/1/8/1/27201543.jpg',
      image2: 'https://taplink.st/p/1/6/c/a/27201549.jpg',
      amount: 3500,
      price: 3 
    },
    {
      id: 15,
      name: 'Shen Puer Myung Ku Da Hu Jai',
      sort: 'Puer',
      province: 'Myung Ku',
      description: 'Ancient trees Myung Ku place 2016',
      image1: 'https://taplink.st/p/d/2/1/1/27201178.jpg',
      image2: 'https://taplink.st/p/3/f/1/4/27201181.jpg',
      amount: 6000,
      price: 6
    },
    {
      id: 16,
      name: 'Shen Puer Ban Tzu Chan',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Shen Puer Pigtail Tea Mountain Da Huang Shan",
      image1: 'https://taplink.st/p/2/3/6/b/27200941.jpg',
      image2: 'https://taplink.st/p/9/6/f/6/27200944.jpg',
      amount: 2000,
      price: 1
    },
    {
      id: 17,
      name: 'Shen Puer Kun Que Shi',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Red Tongues purple buds Yes Huang Shan 2018",
      image1: 'https://taplink.st/p/4/2/6/3/27201232.jpg',
      image2: 'https://taplink.st/p/b/a/7/7/27201235.jpg',
      amount: 1500,
      price: 3.5
    },
    {
      id: 18,
      name: 'Shen Puer Ye Shen Bai Ya Bao',
      sort: 'Puer',
      province: 'Huang Shan',
      description: "Wild white buds",
      image1: 'https://taplink.st/p/1/8/1/4/27201370.jpg',
      image2: 'https://taplink.st/p/0/c/5/3/27201373.jpg',
      amount: 2000,
      price: 0.5
    },
  // ],
  // [       
    {
      id: 19,
      name: 'Dian Hong Hua Long Zhu with orange peel',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With orange peel",
      image1: 'https://taplink.st/p/0/1/b/5/43917248.jpg',
      image2: 'https://taplink.st/p/3/6/f/1/43917245.jpg',
      amount: 2000,
      price: 1
    },
    {
      id: 20,
      name: 'Dian Hong Hua Long Zhu with osmanthus',
      sort: 'Red tea',
      province: 'Taiwan',
      description: 'With osmanthus',
      image1: 'https://taplink.st/p/5/d/d/b/43917218.jpg',
      image2: 'https://taplink.st/p/4/b/2/8/43917263.jpg',
      amount: 2500,
      price: 2 
    },
    {
      id: 21,
      name: 'Dian Hong Hua Long Zhu with jasmine',
      sort: 'Red tea',
      province: 'Taiwan',
      description: 'With jasmine',
      image1: 'https://taplink.st/p/5/e/0/6/43917206.jpg',
      image2: 'https://taplink.st/p/4/d/a/b/43917191.jpg',
      amount: 1000,
      price: 3.6
    },
    {
      id: 22,
      name: 'Dian Hong Hua Long Zhu with red peony',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With red peony",
      image1: 'https://taplink.st/p/e/1/f/8/43917092.jpg',
      image2: 'https://taplink.st/p/3/9/9/5/43917089.jpg',
      amount: 6000,
      price: 4.5
    },
    {
      id: 23,
      name: 'Dian Hong Hua Long Zhu with mountain carnation',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With mountain carnation",
      image1: 'https://taplink.st/p/2/8/d/8/43917065.jpg',
      image2: 'https://taplink.st/p/f/f/3/c/43917062.jpg',
      amount: 5500,
      price: 3
    },
    {
      id: 24,
      name: 'Dian Hong Hua Long Zhu with yellow chrysanthemum',
      sort: 'Red tea',
      province: 'Taiwan',
      description: "With yellow chrysanthemum",
      image1: 'https://taplink.st/p/4/0/5/b/43917113.jpg',
      image2: 'https://taplink.st/p/b/3/d/3/43917104.jpg',
      amount: 1000,
      price: 2.5
    },
  // ]
]

export default listBuys;