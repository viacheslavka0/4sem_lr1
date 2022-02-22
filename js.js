 
    console.log("Задача 1");
    console.log(typeof(9));
// Предположение:number
// Фактический:number

console.log(typeof(1.2));
// Предположение:nunber
// Фактический:number

console.log(typeof(NaN));
// Предположение:undefinded
// Фактический:number

console.log(typeof("Hello World"));
// Предположение:string
// Фактический:string

console.log(typeof(true));
// Предположение:boolean
// Фактический:boolean

console.log(typeof(2 != 1));
// Предположение:boolean
// Фактический:boolean


console.log("сыр" + "ы");
// Предположение:сыры
// Фактический:сыры

console.log("сыр" - "ы");
// Предположение:
// Фактический:NaN

console.log("2" + "4");
// Предположение:24
// Фактический:24

console.log("2" - "4");
// Предположение:-2
// Фактический:-2

console.log("Сэм" + 5);
// Предположение:Сэм5
// Фактический:Сэм5

console.log("Сэм" - 5);
// Предположение:NaN
// Фактический:NaN

console.log(99 * "шары");
// Предположение:NaN
// Фактический:NaN

console.log("Задача 2");
let a = 10, b1=4, P=(a+b1)/2, S=a*b1;
    
console.log(a,b1);
console.log(P);
console.log(S);
console.log(P/S);

console.log("Задача 3");
let C=prompt("Введите градусы в Цельсиях",24); F=prompt("Введите градусы в Фаренгейтах",98.6);

console.log(C + '\xB0' + "C " +"соответсвует " + ((C*9/5)+32)+"F\xB0");
console.log(F + '\xB0' + "F " +"соответсвует " + ((F-32)*5/9)+"C\xB0");

console.log("Задача 4");
let year=prompt("Введите год",2022);
if (year % 4 == 0 && year % 100 != 0)
{
    alert ("True");
} else{
    alert ("False");
}

console.log("Задача 5");
let t1=prompt(" Введите первое число"), t2=prompt(" Введите второе число");
console.log(t1,t2);
if (t1==10 || t2==10 || t1+t2==10)
{
    console.log("Истина");
}

console.log("Задача 6");
let  ship=prompt("Введите кол-во овец",1);
let t=1, v="";

console.log(ship);

while (t <= ship) {
    v+= t+" овечка..."
    t++;
}
console.log(v);

console.log("Задача 7");
let row=0;

while (row !==16){
    if (row % 2 == 0){
        console.log(row+ " четное");
    } else{
        console.log(row+ " нечетное");
    }
    row++;
}

console.log("Задача 8");
let star = "*", sharp= "##",tree="",i=1;

tree+=star+'\n'+sharp+'\n';
while (i<=12){
if (i % 2 !==0){
    
    star += "**";
    
    tree+= star+ '\n';
    
}else{
    
        sharp+= "##";
    
    tree+= sharp+ '\n';
}

i++;
}
console.log(tree);

console.log("Задача 9");
let n1=prompt(" Введите первое число"),n2=prompt(" Введите второе число"),n3=prompt(" Введите третье число"),b=0;

if (n1>n2){
    b=n1;
    n1=n2;
    n2=b;
}
if (n2>n3){
    b=n2;
    n2=n3;
    n3=b;
}
if (n1>n2){
    b=n1;
    n1=n2;
    n2=b;
}
console.log(n1,n2,n3);

console.log("Задача 10");
let m1=prompt(" Введите первое число"),m2=prompt(" Введите второе число"),m3=prompt(" Введите третье число"),m4=prompt(" Введите четвертое число"),m5=prompt(" Введите пятое число");
console.log(m1,m2,m3,m4,m5);
if (m1>m2 && m1>m3 && m1>m4 && m1>m5){
    console.log(m1);
}

if (m2>m1 && m2>m3 && m2>m4 && m2>m5){
    console.log(m2);
}

if (m3>m1 && m3>m2 && m3>m4 && m3>m5){
    console.log(m3);
}

if (m4>m1 && m4>m3 && m4>m2 && m4>m5){
    console.log(m4);
}

if (m5>m1 && m5>m3 && m5>m4 && m5>m2){
    console.log(m5);
}
