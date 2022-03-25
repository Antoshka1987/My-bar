'use strict';

    const countryes = [
  "Страна производитель",
	"Афганистан" ,
	"Албания" ,
	"Алжир" ,
	"Американское Самоа" ,
	"Андорра" ,
	"Ангола" ,
	"Ангилья" ,
	"Антарктида" ,
	"Антигуа и Барбуда" ,
	"Аргентина" ,
	"Армения" ,
	"Аруба" ,
	"Австралия" ,
	"Австрия" ,
	"Азербайджан" ,
	"Багамы" ,
	"Бахрейн" ,
	"Бангладеш" ,
	"Барбадос" ,
	"Беларусь" ,
	"Бельгия" ,
	"Белиз" ,
	"Бенин" ,
	"Бермуды" ,
	"Бутан" ,
	"Боливия" ,
	"Бонайре, Синт-Эстатиус и Саба" ,
	"Босния и Герцеговина" ,
	"Ботсвана" ,
	"Остров Буве" ,
	"Бразилия" ,
	"Британская территория в Индийском океане" ,
	"Бруней-Даруссалам" ,
	"Болгария" ,
	"Буркина-Фасо" ,
	"Бурунди" ,
	"Кабо Верде" ,
	"Камбоджа" ,
	"Камерун" ,
	"Канада" ,
	"Каймановы острова" ,
	"Центральноафриканская Республика" ,
	"Чад" ,
	"Чили" ,
	"Китай" ,
	"Остров Рождества" ,
	"Кокосовые острова (Килинг)" ,
	"Колумбия" ,
	"Коморские острова" ,
	"Конго (Демократическая Республика)" ,
	"Конго" ,
	"Острова Кука" ,
	"Коста-Рика" ,
	"Хорватия" ,
	"Куба" ,
	"Кюрасао" ,
	"Кипр" ,
	"Чехия" ,
	"Кот-д'Ивуар" ,
	"Дания" ,
	"Джибути" ,
	"Доминика" ,
	"Доминиканская Республика" ,
	"Эквадор" ,
	"Египет" ,
	"Сальвадор" ,
	"Экваториальная Гвинея" ,
	"Эритрея" ,
	"Эстония" ,
	"Эсватини" ,
	"Эфиопия" ,
	"Фолклендские острова [Мальвинские]" ,
	"Фарерские острова" ,
	"Фиджи" ,
	"Финляндия" ,
	"Франция" ,
	"Французская Гвиана" ,
	"Французская Полинезия" ,
	"Французские Южные Территории" ,
	"Габон" ,
	"Гамбия" ,
	"Грузия" ,
	"Германия" ,
	"Гана" ,
	"Гибралтар" ,
	"Греция" ,
	"Гренландия" ,
	"Гренада" ,
	"Гваделупа" ,
	"Гуам" ,
	"Гватемала" ,
	"Гернси" ,
	"Гвинея" ,
	"Гвинея-Бисау" ,
	"Гайана" ,
	"Гаити" ,
	"Остров Херд и острова Макдональдс" ,
	"Святой Престол" ,
	"Гондурас" ,
	"Гонконг" ,
	"Венгрия" ,
	"Исландия" ,
	"Индия" ,
	"Индонезия" ,
	"Иран (Исламская Республика)" ,
	"Ирак" ,
	"Ирландия" ,
	"Остров Мэн" ,
	"Израиль" ,
	"Италия" ,
	"Ямайка" ,
	"Япония" ,
	"Джерси" ,
	"Джордан" ,
	"Казахстан" ,
	"Кения" ,
	"Кирибати" ,
	"Корея (Народно-Демократическая Республика)" ,
	"Корея (Республика)" ,
	"Кувейт" ,
	"Кыргызстан" ,
	"Лаосская Народно-Демократическая Республика" ,
	"Латвия" ,
	"Ливан" ,
	"Лесото" ,
	"Либерия" ,
	"Ливия" ,
	"Лихтенштейн" ,
	"Литва" ,
	"Люксембург" ,
	"Макао" ,
	"Мадагаскар" ,
	"Малави" ,
	"Малайзия" ,
	"Мальдивы" ,
	"Мали" ,
	"Мальта" ,
	"Маршалловы Острова" ,
	"Мартиника" ,
	"Мавритания" ,
	"Маврикий" ,
	"Майотта" ,
	"Мексика" ,
	"Микронезия (Федеративные Штаты)" ,
	"Молдова (Республика)" ,
	"Монако" ,
	"Монголия" ,
	"Черногория" ,
	"Монтсеррат" ,
	"Марокко" ,
	"Мозамбик" ,
	"Мьянма" ,
	"Намибия" ,
	"Науру" ,
	"Непал" ,
	"Нидерланды" ,
	"Новая Каледония" ,
	"Новая Зеландия" ,
	"Никарагуа" ,
	"Нигер" ,
	"Нигерия" ,
	"Ниуэ" ,
	"Остров Норфолк" ,
	"Северные Марианские острова" ,
	"Норвегия" ,
	"Оман" ,
	"Пакистан" ,
	"Палау" ,
	"Палестина, Государство" ,
	"Панама" ,
	"Папуа-Новая Гвинея" ,
	"Парагвай" ,
	"Перу" ,
	"Филиппины" ,
	"Питкэрн" ,
	"Польша" ,
	"Португалия" ,
	"Пуэрто-Рико" ,
	"Катар" ,
	"Республика Северная Македония" ,
	"Румыния" ,
	"Российская Федерация" ,
	"Руанда" ,
	"Реюньон" ,
	"Сен-Бартелеми" ,
	"Святая Елена, Вознесение и Тристан-да-Кунья" ,
	"Сент-Китс и Невис" ,
	"Святая Люсия" ,
	"Сен-Мартен (французская часть)" ,
	"Сен-Пьер и Микелон" ,
	"Сент-Винсент и Гренадины" ,
	"Самоа" ,
	"Сан-Марино" ,
	"Сан-Томе и Принсипи" ,
	"Саудовская Аравия" ,
	"Сенегал" ,
	"Сербия" ,
	"Сейшельские острова" ,
	"Сьерра-Леоне" ,
	"Сингапур" ,
	"Синт-Мартен (голландская часть)" ,
	"Словакия" ,
	"Словения" ,
	"Соломоновы острова" ,
	"Сомали" ,
	"Южная Африка" ,
	"Южная Георгия и Южные Сандвичевы острова" ,
	"Южный Судан" ,
	"Испания" ,
	"Шри-Ланка" ,
	"Судан" ,
	"Суринам" ,
	"Шпицберген и Ян-Майен" ,
	"Швеция" ,
	"Швейцария" ,
	"Сирийская Арабская Республика" ,
	"Тайвань" ,
	"Таджикистан" ,
	"Танзания, Объединенная Республика" ,
	"Таиланд" ,
	"Тимор-Лешти" ,
	"Того" ,
	"Токелау" ,
	"Тонга" ,
	"Тринидад и Тобаго" ,
	"Тунис" ,
	"Турция" ,
	"Туркменистан" ,
	"Острова Теркс и Кайкос" ,
	"Тувалу" ,
	"Уганда" ,
	"Украина" ,
	"Объединенные Арабские Эмираты" ,
	"Соединенное Королевство Великобритании и Северной Ирландии" ,
	"Отдаленные малые острова (the) Соединенных Штатов" ,
	"Соединенные Штаты Америки" ,
	"Уругвай" ,
	"Узбекистан" ,
	"Вануату" ,
	"Венесуэла" ,
	"Вьетнам" ,
	"Виргинские острова (Британские)" ,
	"Виргинские острова (США)" ,
	"Уоллис и Футуна" ,
	"Западная Сахара" ,
	"Йемен" ,
	"Замбия" ,
	"Зимбабве" ,
	"Аландские острова"
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', countryes.map(country => ({ name: country, createdAt: new Date(), updatedAt: new Date() })), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //  await queryInterface.bulkDelete('Countries', null, {});
  }
};

