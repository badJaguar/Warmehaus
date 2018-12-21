import { TouchscreenComponent } from "src/app/content/warmehaus/termostat/descriptions/touchscreen/touchscreen.component";

export interface Termosrat {
  id: number;
  name: string;
  nominal: string;
  price: number;
  description: any;
  picPath: string;
  picAlt: string;
}
export var ELEMENT_DATA_TERMOSTATS: Termosrat[] = [
  {
    id: 75,
    name: 'Терморегулятор WÄRMEHAUS TouchScreen',
    nominal: 'Сенсорный',
    price: 247.00,
    description: `
    <div>
    <p> Works </p>
    
    </div>
    `,
    picPath: "../../assets/images/WH_TS_front_s700.jpg", picAlt: "ТЕРМОРЕГУЛЯТОР WÄRMEHAUS TOUCHSCREEN"
  },
  { id: 76, name: 'Терморегулятор WÄRMEHAUS WH100', nominal: '13,7м2 - 274W', price: 181.00, description: "", picPath: "", picAlt: "Some Alt" },
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