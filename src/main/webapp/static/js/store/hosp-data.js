/**
 * Created by Administrator on 2017/6/20.
 */

class Hospital{
    constructor(amountAll,
                type_healthy,type_ACLbefore,type_ACLafter,type_Arthritis,type_Ligament,
                type_Glutealmuscle,
                age_10to20,age_21to30,age_31to40,age_41to50,age_51to60,age_61to70,age_71to80,age_81to90,age_91to100,
                gender_male,gender_female,
                operation_before,operation_after){
        this.amountAll = amountAll;
        this.type_healthy = type_healthy;
        this.type_ACLbefore = type_ACLbefore;
        this.type_ACLafter = type_ACLafter;
        this.type_Arthritis = type_Arthritis;
        this.type_Ligament = type_Ligament;
        this.type_Glutealmuscle = type_Glutealmuscle;
        this.age_10to20  = age_10to20;
        this.age_21to30  = age_21to30;
        this.age_31to40  = age_31to40;
        this.age_41to50  = age_41to50;
        this.age_51to60  = age_51to60;
        this.age_61to70  = age_61to70;
        this.age_71to80  = age_71to80;
        this.age_81to90  = age_81to90;
        this.age_91to100  = age_91to100;
        this.gender_male = gender_male;
        this.gender_female = gender_female;
        this.operation_before = operation_before;
        this.operation_after = operation_after;
    }
    getAmountAll(){
        return this.amountAll;
    }
    getType(){
        return [
            {value:this.type_healthy, name:'健康'},
            {value:this.type_ACLbefore, name:'ACL术前'},
            {value:this.type_ACLafter, name:'ACL术后'},
            {value:this.type_Arthritis, name:'关节炎'},
            {value:this.type_Ligament, name:'多发韧带损伤'},
            {value:this.type_Glutealmuscle, name:'臀肌挛缩'}

        ]
    }
    getGender(){
        return [
            {value:this.gender_male,name:'男性'},
            {value:this.gender_female,name:'女性'}
        ]
    }
    getAge(){
        return [
            {value:this.age_10to20,name:'10-20岁'},
            {value:this.age_21to30,name:'21-30岁'},
            {value:this.age_31to40,name:'31-40岁'},
            {value:this.age_41to50,name:'41-50岁'},
            {value:this.age_51to60,name:'51-60岁'},
            {value:this.age_61to70,name:'61-70岁'},
            {value:this.age_71to80,name:'71-80岁'},
            {value:this.age_81to90,name:'81-90岁'},
            {value:this.age_91to100,name:'91-100岁'},
        ]
    }
    getOperation(){
        return [
            {value:this.operation_before,name:'术前'},
            {value:this.operation_after,name:'术后'}
        ]
    }
}
let SHHS = new Hospital();
SHHS.amountAll =1000;

SHHS.type_healthy=100;
SHHS.type_ACLbefore =200;
SHHS.type_ACLafter =200;
SHHS.type_Arthritis =300;
SHHS.type_Ligament =100;
SHHS.type_Glutealmuscle = 200;

SHHS.age_10to20 = 200;
SHHS.age_21to30 = 100;
SHHS.age_31to40 = 100;
SHHS.age_41to50 = 100;
SHHS.age_51to60 = 100;
SHHS.age_61to70 = 100;
SHHS.age_71to80 = 100;
SHHS.age_81to90 = 100;
SHHS.age_91to100 = 100;

SHHS.gender_female=550;
SHHS.gender_male =450;

SHHS.operation_before =362;
SHHS.operation_after = 638;

let D9RM = new Hospital();
D9RM.amountAll =1000;

D9RM.type_healthy=150;
D9RM.type_ACLbefore =226;
D9RM.type_ACLafter =281;
D9RM.type_Arthritis =218;
D9RM.type_Ligament =100;
D9RM.type_Glutealmuscle = 25;

D9RM.age_10to20 = 8;
D9RM.age_21to30 = 100;
D9RM.age_31to40 = 200;
D9RM.age_41to50 = 340;
D9RM.age_51to60 = 100;
D9RM.age_61to70 = 100;
D9RM.age_71to80 = 100;
D9RM.age_81to90 = 40;
D9RM.age_91to100 = 10;

D9RM.gender_female=550;
D9RM.gender_male =450;

D9RM.operation_before =362;
D9RM.operation_after = 638;

let D6RM = new Hospital();
D6RM.amountAll =1000;

D6RM.type_healthy=200;
D6RM.type_ACLbefore =100;
D6RM.type_ACLafter =150;
D6RM.type_Arthritis =350;
D6RM.type_Ligament =80;
D6RM.type_Glutealmuscle = 220;

D6RM.age_10to20 = 190;
D6RM.age_21to30 = 110;
D6RM.age_31to40 = 120;
D6RM.age_41to50 = 80;
D6RM.age_51to60 = 30;
D6RM.age_61to70 = 70;
D6RM.age_71to80 = 56;
D6RM.age_81to90 = 154;
D6RM.age_91to100 = 100;

D6RM.gender_female=520;
D6RM.gender_male =480;

D6RM.operation_before =360;
D6RM.operation_after = 640;


let SHTY = new Hospital();
SHTY.amountAll =1000;

SHTY.type_healthy=100;
SHTY.type_ACLbefore =200;
SHTY.type_ACLafter =200;
SHTY.type_Arthritis =300;
SHTY.type_Ligament =100;
SHTY.type_Glutealmuscle = 200;

SHTY.age_10to20 = 200;
SHTY.age_21to30 = 100;
SHTY.age_31to40 = 100;
SHTY.age_41to50 = 100;
SHTY.age_51to60 = 100;
SHTY.age_61to70 = 100;
SHTY.age_71to80 = 100;
SHTY.age_81to90 = 100;
SHTY.age_91to100 = 100;

SHTY.gender_female=550;
SHTY.gender_male =450;

SHTY.operation_before =362;
SHTY.operation_after = 638;

let SHJT = new Hospital();
SHJT.amountAll =1000;

SHJT.type_healthy=100;
SHJT.type_ACLbefore =200;
SHJT.type_ACLafter =200;
SHJT.type_Arthritis =300;
SHJT.type_Ligament =100;
SHJT.type_Glutealmuscle = 200;

SHJT.age_10to20 = 200;
SHJT.age_21to30 = 100;
SHJT.age_31to40 = 100;
SHJT.age_41to50 = 100;
SHJT.age_51to60 = 100;
SHJT.age_61to70 = 100;
SHJT.age_71to80 = 100;
SHJT.age_81to90 = 100;
SHJT.age_91to100 = 100;

SHJT.gender_female=550;
SHJT.gender_male =450;

SHJT.operation_before =362;
SHJT.operation_after = 638;

let GZJQ = new Hospital();
GZJQ.amountAll =1000;

GZJQ.type_healthy=100;
GZJQ.type_ACLbefore =200;
GZJQ.type_ACLafter =200;
GZJQ.type_Arthritis =300;
GZJQ.type_Ligament =100;
GZJQ.type_Glutealmuscle = 200;

GZJQ.age_10to20 = 200;
GZJQ.age_21to30 = 100;
GZJQ.age_31to40 = 100;
GZJQ.age_41to50 = 100;
GZJQ.age_51to60 = 100;
GZJQ.age_61to70 = 100;
GZJQ.age_71to80 = 100;
GZJQ.age_81to90 = 100;
GZJQ.age_91to100 = 100;

GZJQ.gender_female=550;
GZJQ.gender_male =450;

GZJQ.operation_before =362;
GZJQ.operation_after = 638;

let HNLG = new Hospital();
HNLG.amountAll =1000;

HNLG.type_healthy=100;
HNLG.type_ACLbefore =200;
HNLG.type_ACLafter =200;
HNLG.type_Arthritis =300;
HNLG.type_Ligament =100;
HNLG.type_Glutealmuscle = 200;

HNLG.age_10to20 = 200;
HNLG.age_21to30 = 100;
HNLG.age_31to40 = 100;
HNLG.age_41to50 = 100;
HNLG.age_51to60 = 100;
HNLG.age_61to70 = 100;
HNLG.age_71to80 = 100;
HNLG.age_81to90 = 100;
HNLG.age_91to100 = 100;

HNLG.gender_female=550;
HNLG.gender_male =450;

HNLG.operation_before =362;
HNLG.operation_after = 638;

let XGZW = new Hospital();
XGZW.amountAll =1000;

XGZW.type_healthy=100;
XGZW.type_ACLbefore =200;
XGZW.type_ACLafter =200;
XGZW.type_Arthritis =300;
XGZW.type_Ligament =100;
XGZW.type_Glutealmuscle = 200;

XGZW.age_10to20 = 200;
XGZW.age_21to30 = 100;
XGZW.age_31to40 = 100;
XGZW.age_41to50 = 100;
XGZW.age_51to60 = 100;
XGZW.age_61to70 = 100;
XGZW.age_71to80 = 100;
XGZW.age_81to90 = 100;
XGZW.age_91to100 = 100;

XGZW.gender_female=550;
XGZW.gender_male =450;

XGZW.operation_before =362;
XGZW.operation_after = 638;

let H301 = new Hospital();
H301.amountAll =1000;

H301.type_healthy=100;
H301.type_ACLbefore =200;
H301.type_ACLafter =200;
H301.type_Arthritis =300;
H301.type_Ligament =100;
H301.type_Glutealmuscle = 200;

H301.age_10to20 = 200;
H301.age_21to30 = 100;
H301.age_31to40 = 100;
H301.age_41to50 = 100;
H301.age_51to60 = 100;
H301.age_61to70 = 100;
H301.age_71to80 = 100;
H301.age_81to90 = 100;
H301.age_91to100 = 100;

H301.gender_female=550;
H301.gender_male =450;

H301.operation_before =362;
H301.operation_after = 638;

let JST = new Hospital();
JST.amountAll =1000;

JST.type_healthy=100;
JST.type_ACLbefore =200;
JST.type_ACLafter =200;
JST.type_Arthritis =300;
JST.type_Ligament =100;
JST.type_Glutealmuscle = 200;

JST.age_10to20 = 200;
JST.age_21to30 = 100;
JST.age_31to40 = 100;
JST.age_41to50 = 100;
JST.age_51to60 = 100;
JST.age_61to70 = 100;
JST.age_71to80 = 100;
JST.age_81to90 = 100;
JST.age_91to100 = 100;

JST.gender_female=550;
JST.gender_male =450;

JST.operation_before =362;
JST.operation_after = 638;

let GJTY = new Hospital();
GJTY.amountAll =1000;

GJTY.type_healthy=100;
GJTY.type_ACLbefore =200;
GJTY.type_ACLafter =200;
GJTY.type_Arthritis =300;
GJTY.type_Ligament =100;
GJTY.type_Glutealmuscle = 200;

GJTY.age_10to20 = 200;
GJTY.age_21to30 = 100;
GJTY.age_31to40 = 100;
GJTY.age_41to50 = 100;
GJTY.age_51to60 = 100;
GJTY.age_61to70 = 100;
GJTY.age_71to80 = 100;
GJTY.age_81to90 = 100;
GJTY.age_91to100 = 100;

GJTY.gender_female=550;
GJTY.gender_male =450;

GJTY.operation_before =362;
GJTY.operation_after = 638;

export {SHHS,D9RM,D6RM,SHTY,SHJT,GZJQ,HNLG,XGZW,H301,JST,GJTY};

