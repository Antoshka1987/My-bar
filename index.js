
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises

const parse = async () => {
  const getHtml = async (url) => {
    const { data } = await axios.get(url);
    return cheerio.load(data)
  }
  const $ = await getHtml('https://alcomarket.ru/catalog/krepkiy-alkogol/viski/');
  // fs.writeFileSync('./html.txt',$('ul[class=list-description]').html())
  const pageNumber = $('a.page-link').eq(-3).text();


  const arr = [];

  async function test(array) {
    for (let i of array) {
      await fs.appendFile('./Viski.txt',
        JSON.stringify(arr))
    }
  }

  for (let i = 1; i <= 10; i++) {
    const pause = await new Promise((res, rej) => {
      setTimeout(() => res(), 400)
    });
    const selector = await getHtml(
      `https://alcomarket.ru/catalog/krepkiy-alkogol/viski/?PAGEN_3=${i}`
    )
    selector('.product-card').each((i, element) => {
      const name = selector(element).find('div.product-card__name').text();
      const head = selector(element).find('div.product-card__info-head').text().split("\n").map(el => el.trim());
      const text = selector(element).find('div.product-card__info-text').text().split("\n").map(el => el.trim());
      // const long = selector(element).find("a.long").text().split("\n").map(el => el.trim())

      let rext = [];
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '') {
          rext.push(text[i])
        }
      }
      const hh = head.shift()

      const obj = {
        title: name
      }
      head.forEach((el, i) => obj[el] = rext[i])

      arr.push(obj)
    })
    // console.log(arr);
    test(arr)
  }
}
// parse()
module.exports = { parse }
