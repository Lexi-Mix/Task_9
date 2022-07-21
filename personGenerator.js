const personGenerator = {
    
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameJson: `{
        "count": 19,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Марина",
            "id_12": "Агата",
            "id_13": "Анастасия",
            "id_14": "Диана",
            "id_15": "Лидия",
            "id_16": "Татьяна",
            "id_17": "Злата",
            "id_18": "Любовь",
            "id_19": "Вероника",
            "id_20": "Клара"
        }
    }`,
    otchestvoMaleJson: `{  
        "count": 9,
        "list": {
            "id_1": "Павлович",
            "id_2": "Евгеньевич",
            "id_3": "Ильич",
            "id_4": "Даниилович",
            "id_5": "Сергеевич",
            "id_6": "Леонидович",
            "id_7": "Максимович",
            "id_8": "Савельевич",
            "id_9": "Алексеевич",
            "id_10": "Николаевич"
        }
    }`,
    otchestvoFemaleJson: `{  
        "count": 9,
        "list": {
            "id_1": "Игоревна",
            "id_2": "Робертовна",
            "id_3": "Артемьевна",
            "id_4": "Ярославовна",
            "id_5": "Кирилловна",
            "id_6": "Егоровна",
            "id_7": "Иванова",
            "id_8": "Артёмовна",
            "id_9": "Максимовна",
            "id_10": "Александровна"
        }
    }`,
    professionMaleJson: `{
        "count": 9,
        "list": {
            "id_1": "Астроном",
            "id_2": "Шахматист",
            "id_3": "Инженер",
            "id_4": "Бармен",
            "id_5": "Космонавт",
            "id_6": "Шаман",
            "id_7": "Математик",
            "id_8": "Бортмеханик",
            "id_9": "Тележурналист",
            "id_10": "Диджей"
        }
    }`,
    professionFemaleJson: `{
        "count": 9,
        "list": {
            "id_1": "Няня",
            "id_2": "Кинолог",
            "id_3": "Билетный кассир",
            "id_4": "Кардиолог",
            "id_5": "Бренд-дизайнер",
            "id_6": "Педиатр",
            "id_7": "Гид-переводчик",
            "id_8": "Дизайнер",
            "id_9": "Библиотекарь",
            "id_10": "Зоолог"
        }
    }`,
    gender: 0,
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        obj.gender = this.randomIntNumber(obj.count, 1); //переменна для выбора имён/отчества, если больше 10 то женское имя
        this.gender = obj.gender;
        const prop = `id_${obj.gender}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
            return this.randomValue(this.firstNameJson); //имена
    },

     randomSurname: function() {

            if (this.gender <= 10) {        
                
                return [this.randomValue(this.surnameJson), 'Мужской', this.randomValue(this.otchestvoMaleJson), this.randomValue(this.professionMaleJson)]// фамилии мужские
            } else {    
                let sureFemale = this.randomValue(this.surnameJson); 
                
                return [`${sureFemale}a`, 'Женский', this.randomValue(this.otchestvoFemaleJson), this.randomValue(this.professionFemaleJson)]; // фамилии женские
            }
    },

    wasBorn: function () {
        let year = this.randomIntNumber(2022, 1922);
        let mounth = this.randomIntNumber(12, 1);
        let day = 30;
        switch (mounth) {
            case 1: mounth = 'Января';
                break;
            case 2: mounth = 'Февраля';
                break;
            case 3: mounth = 'Марта';
                break;
            case 4: mounth = 'Апреля';
                break;
            case 5: mounth = 'Мая';
                break;
            case 6: mounth = 'Июня';
                break;
            case 7: mounth = 'Июля';
                break;
            case 8: mounth = 'Августа';
                break;
            case 9: mounth = 'Сентября';
                break;
            case 10: mounth = 'Октября';
                break;
            case 11: mounth = 'Ноября';
                break;
            case 12: mounth = 'Декабря';
                break;
        }

        if (mounth === 'Апрель' && mounth ==='Июнь' && mounth ==='Сентябрь' && mounth ==='Ноябрь') {
            day = this.randomIntNumber(30,1);
        } if (mounth === 'Февраль') {
            day = this.randomIntNumber(28,1);
        } else {
            day = this.randomIntNumber(31,1);
        }

        return [` ${day} ${mounth} ${year} года`];

    },

    getPerson: function () {
        this.person = {};          
        this.person.firstName = this.randomFirstName();
        this.person.sureName = this.randomSurname();
        return [this.person.firstName, this.person.sureName];
    },
};


