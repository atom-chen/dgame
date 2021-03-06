//如果有自定义的类型 必须添加在Data.ts中 禁止在其他地方定义数据类型 数据命名可以不加类型标识
export class MapData
{
    //地图id
    id: number;
    //地图所在层
    floor: number;
    //格子大小 正方形,长宽相同
    gridSize: number;
    //地图宽
    width: number;
    //地图高
    height: number;
    //格子数组
    grid: Array<Array<GridData>>;
}

export class GridData
{
    //格子消耗
    cost: number;
    //格子地图坐标x
    x: number;
    //格子地图坐标y
    y: number;
    //格子类型
    type: eGridType;
    //临时消耗
    temp: number;
}

//格子类型 地形
export enum eGridType
{
    Flat = 0,//平地
}

//人物信息(包括人物基本信息)
export class PlayerData
{
    //人物位置信息
    //横坐标
    x: number;
    //纵坐标
    y: number;
    //层信息 0层默认home 1-99特殊场景层 100-199战斗场景层 200-299战斗场景层......
    cell: number;
    //行动力
    power: number;
    //气势 非常重要的属性 决定旗子先后顺序 决定玩家是否存亡 气势亡, 则人亡
    morale: number;
    //侍者
    servant: Array<ServantData> = [];
}


//侍者信息
export class ServantData
{
    //统御
    leadership: number;
    //攻击
    attack: number;
    //防御
    defense: number;
    //智力
    intelligence: number;
    //政治
    politics: number;
    //魅力
    charm: number;
    //埋伏
    ambush: number;
    //侦查
    spy: number;
    //军师
    counsellor: boolean;
}







































































