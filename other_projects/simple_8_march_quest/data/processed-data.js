var characters = 
{
  "default":{
    "poses":{
    },
    "name":""
  },

}; 
 var places = 
{
	"caban" : {
		"name":"Клинок рассекающий демона",
    	"image":"img/caban.png"
    },
	"march" : {
		"name":"8 марта",
    	"image":"img/march.png"
    },
	"maslo" : {
		"name":"Дима Масленников",
    	"image":"img/maslo.png"
    },
	"shastun" : {
		"name":"Антон Шастун",
    	"image":"img/shastun.png"
    },
	"popov" : {
		"name":"Арсений Попов",
    	"image":"img/popov.png"
    },
	"sekan" : {
		"name":"Серкан Болат",
    	"image":"img/sekan.png"
    },
	"smile-1" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-1.png"
    },
	"smile-2" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-2.png"
    },
	"smile-3" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-3.png"
    },
	"smile-down" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-down.png"
    },
	"smile-normal" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-normal.png"
    },
	"smile-what" : {
		"name":"Типо голова в телике",
    	"image":"img/smile-what.png"
    },
	"the-game" : {
		"name":"Игрушочка",
    	"image":"img/the-game.png"
    },
	"tokyo" : {
		"name":"Токийские мстители",
    	"image":"img/tokyo.png"
    },
	"what" : {
		"name":"Вопросик",
    	"image":"img/what.png"
    },
}; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place the-game>>\n Привет :) \n Я хочу сыграть с тобой в игру \n Ты готова? \n[[Да|start_yes]]\n[[Нет|start_yes]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "start_yes",
		"tags": "",
		"body": "<<place smile-normal>>\n Ну не буду же я тебя мучать в этот день? \n Никаких этих ваших пил \n [[Вместо этого я предлагаю другую игру|game_1]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "game_1",
		"tags": "",
		"body": "<<place smile-1>>\n Но нужно будет соблюдать два правила  \n [[Первое - устройся поудобнее|game_2]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "game_2",
		"tags": "",
		"body": "<<place smile-2>>\n И второе - не подсматривай в интернете \n[[Если ты готова - тогда начнем!|game_3]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "game_3",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Готова!|ready_game]]\n[[Я просто хочу получить поздравление...|well_next]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ready_game",
		"tags": "",
		"body": "<<place smile-1>>\n [[Отлично, начинаем!|ask_1]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "well_next",
		"tags": "",
		"body": "<<place smile-normal>> \n [[Хорошо, надеюсь ты еще пробежишься по игре, когда будет время )|final_1]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_1",
		"tags": "",
		"body": "<<place what>> \n Этот человек известен, у него есть разные увлечения \n И он любит спрашивать, есть ли кто-то в местах, где есть он. \n Кто это? \n [[Николай Басков|ask_1_no]] \n [[Дима Масленников|ask_1_yes]] \n [[Сергей Петраченко|ask_1_no]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_1_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Немножко не так. Давай еще разок :)|ask_1]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_1_yes",
		"tags": "",
		"body": "<<place maslo>>\n [[Ты абсолютно права!|ask_2]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_2",
		"tags": "",
		"body": "<<place what>>\n У него определенно есть свой стиль \n И этим стилем он способен импровизировать. \n Кто это? \n [[Антон Шастун|ask_2_yes]] \n [[Евгений Петросян|ask_2_no]] \n [[Поллитровая мышь|ask_2_no]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_2_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Попробуй другой ответ :) |ask_2]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_2_yes",
		"tags": "",
		"body": "<<place shastun>>\n [[Иии это правильный ответ!|ask_3]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},

	{
		"title": "ask_3",
		"tags": "",
		"body": "<<place what>>\n Актер, комик и дизайнер. \n Он просит УбратьРыбу \n Кто это? \n [[Глад Валакас|ask_3_no]] \n [[Сергей Нартунов|ask_3_no]] \n [[Арсений Попов|ask_3_yes]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_3_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Давай-ка еще разок :) |ask_3]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_3_yes",
		"tags": "",
		"body": "<<place popov>>\n [[+100 баллов Гриффиндору!|ask_3_5]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_3_5",
		"tags": "",
		"body": "<<place smile-what>>\n  [[Жееееесть как же мощно она отвечает|ask_4]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},


	{
		"title": "ask_4",
		"tags": "",
		"body": "<<place what>>\n Тук-тук, тук-тук \n Кто-то стучится к нему в дверь \n К кому нему? \n [[Радмиру Кириду|ask_4_no]] \n [[Серкану Болату|ask_4_yes]] \n [[Стопару Валенту|ask_4_no]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_4_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Не-а, еще разочек :) |ask_4]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_4_yes",
		"tags": "",
		"body": "<<place sekan>>\n [[Иии... Это правильно!|ask_5]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},

	{
		"title": "ask_5",
		"tags": "",
		"body": "<<place what>>\n Эти ребята появились благодаря одному случаю \n Попав в прошлое, они могут повлиять на будущее \n Кто они? \n [[Итальянцы в России|ask_5_no]] \n [[Токийские мстители|ask_5_yes]] \n [[Японские ганстеры|ask_5_no]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_5_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Это не тот вариант ответа :) |ask_5]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_5_yes",
		"tags": "",
		"body": "<<place tokyo>>\n [[Да, молодец!|ask_6]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},


	{
		"title": "ask_6",
		"tags": "",
		"body": "<<place what>>\n Клинок, что рассечет демона - опасен \n Но опасен и тот, кто носит клыки \n Кто это? \n [[КАБААААН|ask_6_yes]] \n [[Многоликий демон|ask_6_no]] \n [[Клыкастая тварь|ask_6_no]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "ask_6_no",
		"tags": "",
		"body": "<<place smile-normal>>\n [[Не-а, не угадала :) |ask_6]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "ask_6_yes",
		"tags": "",
		"body": "<<place caban>>\n [[ЖЕЕЕСТЬ ЭТО ЖЕ КАБАН, ДАА!|ask_6_5]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},


	{
		"title": "ask_6_5",
		"tags": "",
		"body": "<<place smile-what>>\n  [[Капец ваще жесть, ты как все угадала?|ask_6_5_1]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},

	{
		"title": "ask_6_5_1",
		"tags": "",
		"body": "<<place smile-normal>>\n  [[По такому случаю, переходим к поздравлениям!|final_1]]",
		"position": {
			"x": 815,
			"y": 109
		},
		"colorID": 0
	},



	{
		"title": "final_1",
		"tags": "",
		"body": "<<place march>>\n [[Солнце, я поздравляю тебя с праздником, который по праву - твой!|final_2]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "final_2",
		"tags": "",
		"body": "<<place march>>\n [[С 8 марта, милая!|final_3]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "final_3",
		"tags": "",
		"body": "<<place march>>\n [[Пусть в этот прекрасный день твоя улыбка сияет еще ярче|final_4]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},

	{
		"title": "final_4",
		"tags": "",
		"body": "<<place march>>\n [[Желаю тебе здоровья и успехов в учебе|final_5]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},


	{
		"title": "final_5",
		"tags": "",
		"body": "<<place march>>\n [[Ты самая великолепная, самая красивая и неповторимая на свете!|final_6]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},


	{
		"title": "final_6",
		"tags": "",
		"body": "<<place march>>\n [[С 8 марта, солнце!|end]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},



]; 
