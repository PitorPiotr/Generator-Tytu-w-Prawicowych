var start = new Array("SZOK!", "Nieprawdopodobne!", "SKANDAL!", "TEGO JUŻ ZA WIELE.", "ZOBACZ!", "Wstrząsające!", 
"Nieoficjalnie:", "TEGO NIE ZOBACZYSZ W MAINSTREAMOWYCH MEDIACH!!!", "PILNE!", "HIT!", "Znów to zrobił!", "Kompromitacja!", 
"Nokaut dla lewactwa!", "Zezwierzęcenie!", "Antychryst!", "Antypolak!", "Zdrada!", "Hańba!", "Zaprzaństwo!", "To woła o pomstę do nieba!", 
"Będzie smażył się w piekle!", "Co robiła policja!?", "Wydalić z Polski!", "Nie podarujemy!", "Hucpa lewactwa!", "Obudź się, Polsko!");
var howevil = new Array ("Pijany", "Agresywny", "Finansowany przez Izrael", "Proniemiecki", "Zdradliwy", 
"Nielegalnie przebywający w Polsce", "Wściekły", "Naćpany", "Prorosyjski", "Stojący ponad prawem", 
"Plugawy", "Finansowany przez Sorosa", "Zwariowany", "Zdegenerowany", "Bezbożny");
var who = new Array ("Żyd", "mason", "Cygan", "lewak", "Ukrainiec", "Muzułmanin", "imigrant", "Tomasz Grodzki", "Leming",
"Piotr Pasieczny", "polityk Platformy", "Murzyn", "sodomita", "działacz LGBT", "poseł lewicy", "Donald Tusk", "pederasta", 
"wykształciuch", "postkomunista", "transwestyta", "wnuk foklsdojcza", "Robert Biedroń", "były partner Biedronia", 
"Członek Antify", "uczeń Jerzego Urbana");
var what = new Array ("rozpętał bójkę", "dokonał kradzieży", "uciekał przed policją", "podpalił krzyż", 
"potrącił młodego patriotę", "szykował zamach", "szokował antypolskimi hasłami","pluł na Polskę", 
"obrażał Polaków", "obrażał św. Jana Pawła II", "kpił z polskich tradycji", "obnażał się", "doniósł na rodaków", 
"onanizował się","oczerniał bohaterów Powstania", "deprawował dzieci", "przyjął łapówkę", "popełnił grzech sodomski", 
"sprofanował święte obrazy", "promował cywilzację śmierci", "zniesławiał Marszałka Piłsudskiego");
var wherewhen= new Array ("w sklepie spożywczym", "w Sejmie", "w czasie adoracji najświętszego sakramentu", "w centrum miasta", "na arenie międzynarodowej", 
"w Wielki Piątek", "w rocznicę katastrofy smoleńskiej", "na ulicach Warszawy", "podczas kiermaszu bożonarodzeniowego", "w niewielkiej miejscowości na Lubelszczyźnie", 
 "pod szkołą podstawową", "na trasie Marszu Niepodległości", "podczas tzw. Marszu Równości", "na marszu pseudoekologów", 
 "pod sądem rejonowym", "w kościele", "pod pomnikiem Żołnierzy Wyklętych", "przy ołtarzu", "w rocznicę objawień fatimskich", "podczas nielegalnego protestu Amnesty International", "na Jasnej Gorze", 
"na Westerplatte");
var end = new Array ("a Piotr Pasieczny o tym milczał...", "oburzając polskich patriotów", "pokazując swoją prawdziwą twarz", 
"kpiąc z Polski i z Polaków", "wbrew prawu Bożemu...", "o czym lewackie media nie mówią", "kompromitując Polskę", 
"wywołując wielkie zgorszenie", "wywołując dziką radość wrogów Polski",
"czym zbulwersował lokalne środowiska patriotyczne", "a według Zachodu tak wygląda postęp...", 
"o czym TVN 'zapomniał' wspomnieć", "a policja odmawia komentarza", "a zachodnie media obwiniły prawdziwych Polaków", 
"a posłowie PO udawali, że nic się nie stało");

const pressed =[];
	const secretCode='pitor'
	window.addEventListener('keyup', (e)=>{console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.length-1, pressed.length-secretCode.length);
	if(pressed.join('').includes(secretCode)) {
		alert ("Ding Ding!");
		cornify_add();
	}
	console.log(pressed);
	});



document.getElementById("button").onclick = function generate()
{let randomStart = Math.floor(Math.random() * start.length);
let randomHowEvil = Math.floor(Math.random() * howevil.length);
let randomWho = Math.floor(Math.random() * who.length);
let randomWhat = Math.floor(Math.random() * what.length);
let randomWhereWhen = Math.floor(Math.random() * wherewhen.length);
let randomEnd = Math.floor(Math.random() * end.length); 
var title= document.getElementById("title").innerHTML= start[randomStart] + " " + howevil[randomHowEvil] +
 " " + who[randomWho]+ " "+ what[randomWhat] + " " + wherewhen[randomWhereWhen]+ " " + end[randomEnd];
document.getElementById("title").classList.add("ramka");
document.getElementById("foto").classList.add("artfoto");
if (end[randomEnd] == "a Piotr Pasieczny o tym milczał..." ) {
	document.getElementById("foto").src= "pasieczny.jpg"
} else if (end[randomEnd] == "oburzając polskich patriotów") {
	document.getElementById("foto").src= "oburzajac.jpg"
}
else {document.getElementById("foto").src= "pol.jpg"}
};

