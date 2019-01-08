import { TouchscreenComponent } from "src/app/content/warmehaus/termostat/descriptions/touchscreen/touchscreen.component";

export interface Termostat {
  id: number;
  name: string;
  nominal: string;
  price: number;
  description: any;
  picPath: string;
  picAlt: string;
}
export var ELEMENT_DATA_TERMOSTATS: Termostat[] = [
  {
    id: 75,
    name: 'Терморегулятор WÄRMEHAUS TouchScreen',
    nominal: 'Сенсорный',
    price: 247.00,
    description: `
    <div>
<hr>
    <h4 align="center">
    Описание
  </h4>
  <div class="container text">

  <style>
  li{
    text-align: left;
  }
  </style>

  <ul>
    <li>
      Программируемый <b>Сенсорный 24/7</b> терморегулятор для систем "Теплый пол".
    </li>
    <li>
      Программирование по дням недели : Рабочий/Выходной день -  5/2 или 6/1 или 7/0.
    </li>
    <li>
      Программирование <b>6-ти</b> временных событий в сутки.
    </li>
    <li>
      Два датчика температуры - встроенный и внешний длинной 3м.
    </li>
    <li>
      Предназначен для основного или комфортного управления обогревом.
    </li>
    <li>
      Режим работы по встроенному датчику - для основного обогрева.
    </li>
    <li>
      Режим работы по внешнему датчику - для комфортного обогрева.
    </li>
    <li>
      Режим работы по двум датчикам - для основного обогрева. Датчик воздуха (встроенный) - основной. Датчик пола (внешний) - ограничитель.
    </li>
    <li>
      Функция экономии энергопотребления.
    </li>
    <li>
      Индикация нагрева, отражение текущей и заданной температуры, дня недели и текущего времени.
    </li>
    <li>
      Сенсорный активный LED экран.
    </li>
    <li>
      Подсветка экрана LED белого цвета.
    </li>
    <li>
      Автоматическая блокировка клавиатуры.
    </li>
    <li>
      Энергонезависимые часы.
    </li>
    <li>
      Функция Антизамерзания.
    </li>
    <li>
      Пределы регулирования... <b>+5...+50C<sup><small>o</small></sup></b>
    </li>
    <li>
      Самодиагностика прибора.
    </li>
    <li>
      Ограничение максимальной и минимальной температуры.
    </li>
    <li>
      Возможность изменения значения гистерезиса.
    </li>
    <li>
      Нагрузка до 16А.
    </li>
    <li>
      Все приборы WÄRMEHAUS PREMIUM обеспеченны полноценной трехлетней гарантией, инструкцией на русском языке и сервисной поддержкой.
    </li>
    <li>
      Гарантия - 3 года.
    </li>
  </ul>
  </div>

    <h4 align="center">
    Цветовая палитра
  </h4>

  <p align="center">
    <i>Чёрный / Слоновая кость / Белый</i>
  </p>

  <style>
  img {
    padding-left: 5%;
    padding-right: 5%;
  }
  </style>
  
  <div id="container" align="center">
  
  <img src="../../assets/images/termostats/touchscreen24to7/25ae2f22e31bdc9ca8194c1ab69f3974.jpg" alt="Терморегулятор теплый пол сенсорный черный">

  <img src="../../assets/images/termostats/touchscreen24to7/29e83460023a1240f5acfc0e2937f120.jpg" alt="Терморегулятор теплый пол сенсорный слоновая кость">

  <img src="../../assets/images/termostats/touchscreen24to7/631ec501a89798a34414e9d98303edc3.jpg" alt="Терморегулятор теплый пол сенсорный белый">

  <img src="../../assets/images/termostats/touchscreen24to7/WH_TS_front_s700.jpg" alt="Терморегулятор теплый пол сенсорный белый">

  </div>

  <hr>
  </div>
    `,
    picPath: "../../assets/images/termostats/touchscreen24to7/02a94d427c05decb935dfa8f0251c059.jpg", 
    picAlt: "ТЕРМОРЕГУЛЯТОР WÄRMEHAUS TOUCHSCREEN"
  },
  { 
    id: 76, 
    name: 'Терморегулятор WÄRMEHAUS WH100', 
    nominal: 'Аналоговый', 
    price: 114.00, description: "",
    picPath: "", 
    picAlt: "Some Alt" },
  { id: 77, name: 'Терморегулятор WÄRMEHAUS WH200', nominal: '17,2м2 - 344W', price: 209.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 78, name: 'Терморегулятор WÄRMEHAUS WH400 PRO', nominal: '22,5м2 - 450W', price: 238.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 79, name: 'Терморегулятор WÄRMEHAUS WH500 PRO', nominal: '27,0м2 - 540W', price: 266.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 80, name: 'Терморегулятор WÄRMEHAUS WH600 PRO', nominal: '32,0м2 - 640W', price: 295.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 81, name: 'Терморегулятор WÄRMEHAUS WH1000 PRO', nominal: '39,0м2 - 780W', price: 342.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 82, name: 'Терморегулятор WÄRMEHAUS WH900 DIGITAL', nominal: '44,0м2 - 880W', price: 380.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 83, name: 'Терморегулятор WÄRMEHAUS WH800 BASIC', nominal: '53,5м2 - 1070W', price: 418.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 84, name: 'ТЕРМОРЕГУЛЯТОР WÄRMEHAUS WH700 CLASSIC', nominal: '64,0м2 - 1280W', price: 494.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 85, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '79,0м2 - 1580W', price: 570.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 86, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '92,0м2 - 1840W', price: 684.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 87, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '116,0м2 - 2320W', price: 798.00, description: "", picPath: "", picAlt: "Some Alt" },
  { id: 89, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '140,0м2 - 2800W', price: 912.00, description: "", picPath: "", picAlt: "Some Alt" },
];