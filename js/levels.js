function getLevel(number, updateInterval) {
    let s = 1000 / updateInterval;
    switch (number) {
        case 1:
            return (new CreepSequence()
                .send(20, Ninja).over(15 * s));
        case 2:
            return (new CreepSequence()
                .send(30, Ninja).over(15 * s)
                .wait(2 * s)
                .send(20, Ninja).over(10 * s));
        case 3:
            return (new CreepSequence()
                .send(30, Ninja).over(10 * s)
                .wait(2 * s)
                .send(10, Red).over(10 * s));
        case 4:
            return (new CreepSequence()
                .wait(10 * s).send(40, Ninja).over(10 * s)
                .interleave(new CreepSequence().send(20, Red).over(20 * s)));
        case 5:
            return (new CreepSequence()
                .send(30, Red).over(20 * s)
                .wait(1 * s)
                .send(20, Ninja).over(2 * s)
                .wait(4 * s)
                .send(5, Blue).over(3 * s));
        case 6:
            return (new CreepSequence()
                .send(1, Blue).immediately()
                .wait(2 * s)
                .send(40, Red).over(20 * s)
                .interleave(new CreepSequence()
                    .wait(13 * s)
                    .send(10, Blue).over(7 * s)));
        case 7:
            return (new CreepSequence()
                .send(40, Red).over(20 * s)
                .interleave(new CreepSequence().send(20, Blue).over(20 * s)));
        case 8:
            return (new CreepSequence()
                .send(1, TF_1).immediately());

        case 9:
            return (new CreepSequence()
                .send(40, Red).over(20 * s)
                .interleave(new CreepSequence().send(30, Blue).over(20 * s))
                .wait(8 * s)
                .send(10, Pink).over(5 * s));

        case 10:
            return (new CreepSequence()
                .send(30, Blue).over(15 * s)
                .interleave(new CreepSequence().send(10, Red).over(10 * s))
                .wait(4 * s)
                .send(20, Pink).over(12 * s)
                .wait(3 * s)
                .send(10, Blue).over(4 * s));

        case 11:
            return (new CreepSequence() 
                .send(1,SF_1).immediately());

        case 12:
            return (new CreepSequence()
                .send(50, Blue).over(20 * s)
                .wait(1 * s)
                .send(10, Pink).over(10 * s));

        case 13:
            return (new CreepSequence()
                .send(20, Pink).over(15 * s)
                .interleave(new CreepSequence().send(20, Blue).over(15 * s))
                .send(20, Pink).over(8 * s)
                );

        case 14:
            return (new CreepSequence()
                .send(15, Green).over(15 * s)
                .wait(1 * s)
                .send(50, Pink).over(20 * s)
                .interleave(new CreepSequence().send(50, Blue).over(20 * s)));
        
        case 15:
            return (new CreepSequence()
                .send(1, OF_1).immediately());

        case 16:
            return (new CreepSequence()
                .send(1, TF_2).immediately()
                .wait(1.5 * s)
                .send(1, OF_2).immediately()
                .wait(1.5 * s)
                .send(1, SF_2).immediately());

        case 17:
            return (new CreepSequence()
                .send(1, Violet).immediately()
                .wait(3 * s)
                .send(30, Green).over(15 * s)
                .interleave(new CreepSequence().send(43, Pink).over(15 * s))
                );
        case 18:
            return (new CreepSequence()
                .send(25, Violet).over(14 * s));

        case 19:
            return (new CreepSequence()
                .send(1, Orange).immediately()
                .wait(1 * s)
                .send(50, Blue).over(11 * s)
                .send(3, Orange).over(3 * s));

        // Ta bort Föhseriet från denna level så de inte kommer så ofta?
        case 20:
            return (new CreepSequence()
                .send(20, Blue).over(10 * s)
                .send(8, Pink).over(4 * s)
                .interleave(new CreepSequence()
                    .wait(10 * s)
                    .send(1, TF_2).immediately()
                    .wait(1.4 * s)
                    .send(1, OF_2).immediately()
                    .wait(1.4 * s)
                    .send(1, SF_2).immediately())
                .send(10, Blue).over(10 * s));

        case 21:
            return (new CreepSequence()
                .send(150, Red).over(20 * s)
                .interleave(new CreepSequence().wait(5 * s)
                    .send(25, Green).over(15 * s))
                .send(10, Violet).over(5 * s));

        case 22:
            return (new CreepSequence()
                .send(20, Violet).over(20 * s)
                .send(20, Violet).over(8 * s));

        case 23:
            return (new CreepSequence()
                .send(30, Violet).over(25 * s)
                .interleave(new CreepSequence()
                    .wait(10 * s)
                    .send(1, TF_2).immediately()
                    .wait(1.5 * s)
                    .send(1, OF_2).immediately()
                    .wait(1.5 * s)
                    .send(1, SF_2).immediately())
                );

        case 24:
            return (new CreepSequence()
                .send(5, Orange).over(2 * s)
                .wait(6 * s)
                .send(5, Orange).over(2 * s)
                .wait(9 * s)
                .send(14, Orange).over(7 * s)
                );

        case 25:
            return (new CreepSequence()
                .send(100, Pink).over(20 * s)
                .interleave(new CreepSequence()
                    .send(25, Green).over(10 * s)
                    .send(15, Violet).over(10 * s))
                .wait(5 * s)
                .send(2, Orange).over(2 * s)
                );

        case 26:
            return (new CreepSequence()
                .send(9, Orange).over(2 * s)
                .wait(6 * s)
                .send(9, Orange).over(2 * s)
                .wait(6 * s)
                .send(12, Orange).over(2.7 * s));

        case 27:
            return (new CreepSequence()
                .send(3, Ninja).over(2 * s)
                .send(5, Red).over(3 * s)
                .send(7, Blue).over(5 * s)
                .send(11, Pink).over(7 * s)
                .send(13, Green).over(11 * s)
                .send(17, Violet).over(13 * s)
                .send(23, Orange).over(17 * s));

        case 28:
            return (new CreepSequence()
                .send(20, Violet).over(10 * s)
                .interleave(new CreepSequence()
                    .send(5, Pink).over(5 * s)
                    .send(10, Orange).over(5 * s)));

        case 29:
            return (new CreepSequence()
                .send(25, Orange).over(7 * s)
                .send(150, Red).over(10 * s));

        case 30:
            return (new CreepSequence()
                .send(60, Violet).over(15 * s)
                .interleave(new CreepSequence().send(25, Pink).over(15 * s))
                .interleave(new CreepSequence().send(25, Green).over(15 * s))
                .wait(2 * s)
                .send(15, Orange).over(5 * s)
                .send(25, Pink).over(5 * s)
                .wait(2 * s)
                .send(50, Blue).over(10 * s)
                .interleave(new CreepSequence()
                    .wait(30 * s)
                    .send(1, TF_3).immediately()
                    .wait(1.75 * s)
                    .send(1, OF_3).immediately()
                    .wait(1.75 * s)
                    .send(1, SF_3).immediately())
                .send(80, Pink).over(25 * s)
                );

        default:
        	return autolevel(number, updateInterval);
    }
}

//Basically instant death
function autolevel(levelnumber, updateInterval){

	let s = 1000 / updateInterval;

	let cs = new CreepSequence()
		.send(30, Pink).over(10 * s)
		.interleave(new CreepSequence().send(30, Green).over(10 * s))
		.wait(2 * s)
		.send(2*levelnumber, Violet).over(levelnumber/4 * s)
		.wait(2 * s)
		.send(2*levelnumber, Green).over(levelnumber/4 * s)
		.interleave(new CreepSequence().send(2*levelnumber, Pink).over(12/levelnumber * s))
		.wait(2 * s);

	if(levelnumber >= 40){
		cs.send(Math.floor(0.1*levelnumber*levelnumber), Orange).over(levelnumber * s)
		.interleave(new CreepSequence().send(levelnumber, Pink).over(10 * s));
	}

	if(levelnumber % 4 == 0 || levelnumber % 6 == 0){
		cs.send(1, TF_inf).immediately()
		.wait(1.2 * s)
		.send(1, OF_inf).immediately()
		.wait(1.2 * s)
		.send(1, SF_inf).immediately()
	}

	if(levelnumber > 20){
		cs.send(2*levelnumber, Orange).over(10 * s);
	}

	cs.send(levelnumber, Blue).over(10 * s)
		.interleave(new CreepSequence().send(40, Violet).over(10 * s))
		.interleave(new CreepSequence().send(40, Pink).over(10 * s))
        .interleave(new CreepSequence().send(levelnumber, Green).over(10 * s));


	return cs.do(() => console.log("All creeps sent"));

}

// Här kan man koda in specialhändelser efter vissa nivåer också (typ att man får ett gratis maskottorn efter lvl 10 eller nåt)
function levelClearReward(number) {
    let cash = 0;
    switch (number) {

        case 8:
        case 11:
        case 15:
            cash = 300;
            break;
        case 16:
            cash = 500;
            break;
        default:
            cash = 100;
            break;
    }
    controller.money += cash;
}

// Skrivs ut innan respektive nivå
function levelMessage(number) {
    switch (number) {
        case 1: return "Välkommen! Välj en fadder i menyn och placera ut det nära vägen. Ringen och prickarna visar hur långt faddern ser.<br /><br /><i>nØllan sitter glatt och tuggar pastasallad i Konsulatet när plötsligt ninjorna från Föhsarkrocketen visar sig igen, denna gång med ännu ondare avsikter. Nu är det upp till faddrarna att stoppa dem!</i>";

        case 2:
            if (controller.hp === controller.initialHP)
                return "Bra jobbat! Du kan klicka på faddrarna du placerat ut för att uppgradera eller sälja dem.<br /><br/><i>Den första attacken avstyrdes enkelt, men ninjorna kommer att återvända i större antal.</i>";
            else
                return "Aj då, nu slank det igenom " + (controller.initialHP - controller.hp == 1 ? "en" : "ett par") + ". Prova att placera ut fler faddrar, eller att sätta dem mer strategiskt! Du kan sälja eller uppgradera dina faddrar genom att klicka på dem.<br /><br /><i>Någon nØllan strök med, men lite svinn får man räkna med. Det är dock än fler ninjor på väg...</i>";
            
        case 3: return "Det finns olika typer av ninjor, vilket man kan se på deras färg. De med röd huva har två stycken med svart huva i sig.<br /><br /><i>Föhseriet inser att faddrarna utgör ett starkare försvar än väntat - som väntat. Taktikföhs sätter in de specialtränade trojanska ninjorna.</i>";
        
        case 4: return "Du har nu låst upp två nya sorters faddrar! I menyn kan du se hur mycket varje fadder kostar samt en vag beskrivning av vad de gör.<br /><br /><i>Fjädrande Fadderiet har har fått nys om Föhseriets planer och sällar sig till fadderförsvaret.</i>";

        case 5: return "Fadderisterna har lite olika förmågor - testa dig fram och se vilka du föredrar!<br /><br /><i>Att fadderisterna skulle ansluta sig var väntat - Föhseriet står redo att skicka ut de nästlade trojanska ninjorna.</i>";

        case 6: return "Blåa ninjor har två röda ninjor i sig - mycket att hantera men det klirrar dödsskönt i kassakistan. Varje ninja du kramar ger en peng, förutom extrapengarna du får efter varje nivå.<br /><br /><i>Trots ninjornas upprepade anfall finns inte minsta antydan till tvekan hos faddrarna - ingen ninja kommer fram okramad.</i>"

        case 7: return "Förhoppningsvis har du redan hittat informationslisten ovanför spelplanen - där kan du pausa, snabbspola och återställa spelet samt se din fikabudget och hur många nØllan som finns kvar. Du kan också se vad nästa nivå har att bjuda på.<br /><br /><i>Föhseriet gör sig redo att ta i med hårdhanskarna.</i>"

        case 8: return "ÖF, $F och TF kräver många kramar innan de ger med sig. De har dessutom olika förmågor som gör dem ännu svårare att besegra!<br /><br /><i>\"Ska det bli bra får man göra det själv. JUBLA, nØLLAN!\"</i>"

        case 9: return "Glöm inte att uppgradera dina torn. Ett väl uppgraderat torn är ofta starkare än flera svaga.";

        case 10: return "Några torn har specialattacker som måste aktiveras manuellt. Dessa är ofta väldigt dyra, och varje gång du använder den behöver du betala igen. Men nöden har ingen lag, och ibland kan de vara räddningen från säker förlust.";

        case 11: return "$nålföhs största svaghet är kramar. Hon verkligen avskyr de. Förutom det är det inte mycket som kan få henne att ändra sig när hon väl satt ett mål för sig själv.<br/><br/><i>$nålföhs kramas inte!</i>";

        // case 12: return "";

        case 15: return "Överföhs accepterar inte några motgångar, och om någon försöker hindra honom ger han de sin oändliga mördarblick vilket kan få vem som helst att frysa av rädsla.<br/><br/><i>ÖF måste själv se vad för oväsen faddrarna har ställt till med. \"Hälsa på Överföhs, nØllan\"</i>";

        case 16: return "Föhseriets olika förmågor kompletterar varandra och de är som starkast när de är tillsammans. Lycka till!<br /><br /><i>Efter att ÖF själv har sett med vilken beslutsamhet faddrarna försvarar nØllan beslutar föhseriet att göra gemensam sak. \"Nu får det vara nog med larvigheter. JUBLA nØLLAN!\"</i>";
        
        case 17: return "<br/><br/><i>Föhseriet drar sig tillbaka och observerar faddrarnas kamp från behörigt avstånd. Deras beslutsamhet är, liksom deras tålamod, oändlig.</i>";

        case 30: return "<i>Föhseriet har tröttnat på Fadderisternas dumheter, och bestämmer sig för att ta sig förbi deras försvar en gång för alla.</i>";

        case 31: return "Du har lyckats försvara nØllan från Föhseriet förvånansvärt länge, bra gjort. Härifrån kommer nivåerna snabbt bli svårare och tunga för datorn att köra. Ha så kul! <br/><br/> <i>Föhseriet är nedslagna, men långtifrån besegrade. \"Brute Force\" säger TF, \"Vi blir tvugna att överväldiga de\"</i>";

        case 32: return "Campus Tornförsvar ett spel av Pyro och Cryo.";

        case 40: return "Du har inte gett upp än alltså? Låt oss skruva upp svårighetsgraden lite";

        case 50: return "Hur mår datorn? Svettigt?";

        case 55: return "Det finns ett liv utanför campus också.";

        case 100: return "<i>Psst. På <a href=\"f.kth.se/arcade\">f.kth.se/arcade</a> finns det andra spel att prokrastinera med.</i>"; 

        case 420: return "";

        case 1337: return "LEET";

        default:
            return "_";
    }
}

class CreepSequence {
    constructor() {
        this.iterating = false;
        this.currentSequence = [];
        this.totalSequence = [];
        this._sent = {};
        this._creepSummary = null;
    }

    _checks(shouldBeZero) {
        if (shouldBeZero !== undefined && shouldBeZero ^ (this.currentSequence.length === 0)) {
            console.log(this);
            throw new Error("Invalid state for that operation");
        }
        if (this.iterating)
            throw new Error("Cannot modify sequence once iteration has begun");
    }

    totalTime() {
        return this.totalSequence.concat(this.currentSequence).reduce((tot, ins) => ins[0] === "wait" ? tot + ins[1] : tot, 0);
    }

    totalExplicitCreeps() {
        return this.totalSequence.concat(this.currentSequence).reduce((tot, ins) => {
            if (ins[0] === "spawn") {
                if (ins[1] instanceof Array)
                    return tot + ins[1].length;
                else
                    return tot + 1;
            } else
                return tot;
        }, 0);
    }

    creepSummary() {
        if (!this.iterating || !this._creepSummary)
            this._creepSummary = this.totalSequence.concat(this.currentSequence).reduce((tot, ins) => {
                if (ins[0] === "spawn") {
                    if (ins[1] instanceof Array)
                        for (let i = 0; i < ins[1].length; i++)
                            tot[ins[1][i].name] = (tot[ins[1][i].name] || 0) + 1;
                    else
                        tot[ins[1].name] = (tot[ins[1].name] || 0) + 1;
                }

                return tot;
            }, {});

        return this._creepSummary;
    }

    sent() {
        return this._sent;
    }

    remaining() {
        let cs = this.creepSummary();
        if (!this.iterating)
            return cs;
        let sent = this.sent();
        let rem = {};

        for (let t in cs)
            rem[t] = cs[t] - (sent[t] || 0);

        return rem;
    }

    codebook() {
        return this.totalSequence.concat(this.currentSequence).reduce((tot, ins) => {
            if (ins[0] === "spawn") {
                if (ins[1] instanceof Array)
                {
                    for (let i = 0; i < ins[1].length; i++)
                        if (!tot[ins[1][i].name])
                            tot[ins[1][i].name] = ins[1][i];
                }
                else
                    if (!tot[ins[1].name])
                        tot[ins[1].name] = ins[1];
            }

            return tot;
        }, {});
    }

    wait(totalTime) {
        this._checks(true);
        if (totalTime < 0)
            throw new Error("Invalid totalTime " + totalTime);

        this.totalSequence.push(["wait", totalTime]);

        return this;
    }

    send(number, creepType) {
        this._checks();
        if (number < 0)
            throw new Error("Invalid number " + number);
        this.currentSequence = this.currentSequence.concat(new Array(number).fill(creepType));

        return this;
    }

    immediately() {
        this._checks(false);

        this.totalSequence.push(["spawn", this.currentSequence]);
        this.currentSequence = [];

        return this;
    }

    over(totalTime) {
        this._checks(false);
        if (totalTime < 0)
            throw new Error("Invalid totalTime " + totalTime);

        let nDelays = this.currentSequence.length - 1;
        let delays = new Array(nDelays).fill(0).map(
            (_, i) => Math.floor(totalTime * (i + 1) / nDelays)
                - Math.floor(totalTime * i / nDelays)
        );
        for (let i = 0; i < this.currentSequence.length; i++) {
            if (i !== 0)
                this.totalSequence.push(["wait", delays[i - 1]]);
            this.totalSequence.push(["spawn", this.currentSequence[i]]);
        }
        this.currentSequence = [];

        return this;
    }

    spaced(deltaTime) {
        this._checks(false);
        if (deltaTime < 0)
            throw new Error("Invalid deltaTime " + deltaTime);

        for (let i = 0; i < this.currentSequence.length; i++) {
            if (i !== 0)
                this.totalSequence.push(["wait", deltaTime]);
            this.totalSequence.push(["spawn", this.currentSequence[i]]);
        }
        this.currentSequence = [];

        return this;
    }

    do(func) {
        this._checks(true);

        this.totalSequence.push(["call", func]);

        return this;
    }

    interleave(other) {
        this._checks(true);
        other._checks(true);

        let this_ind = 0;
        let other_ind = 0;

        while (this_ind < this.totalSequence.length && other_ind < other.totalSequence.length) {
            let t = this.totalSequence[this_ind];
            let o = other.totalSequence[other_ind];
            if (t[0] === "wait" && o[0] === "wait") {
                if (t[1] === o[1]) {
                    this.currentSequence.push(t);
                    this_ind++;
                    other_ind++;
                }
                else {
                    this.currentSequence.push(["wait", Math.min(t[1], o[1])]);
                    if (t[1] > o[1]) {
                        t[1] = t[1] - o[1];
                        other_ind++;
                    } else {
                        o[1] = o[1] - t[1];
                        this_ind++;
                    }
                }
            } else {
                if (t[0] !== "wait") {
                    this.currentSequence.push(t);
                    this_ind++;
                }
                if (o[0] !== "wait") {
                    this.currentSequence.push(o);
                    other_ind++;
                }
            }
        }
        if (this_ind !== this.totalSequence.length)
            this.currentSequence = this.currentSequence.concat(this.totalSequence.slice(this_ind));
        if (other_ind !== other.totalSequence.length)
            this.currentSequence = this.currentSequence.concat(other.totalSequence.slice(other_ind));

        this.totalSequence = this.currentSequence;
        this.currentSequence = [];
        other.totalSequence = [];

        return this;
    }

    next() {
        if (!this.iterating) {
            this.iterating = true;
            this.index = 0;
        }
        while (this.index < this.totalSequence.length && this.totalSequence[this.index][0] !== "wait") {
            let instruction = this.totalSequence[this.index];
            switch (instruction[0]) {
                case "call":
                    instruction[1]();
                    break;

                case "spawn":
                    if (instruction[1] instanceof Array)
                    {
                        instruction[1].forEach(creepType => new creepType());
                        for (let i = 0; i < instruction[1].length; i++)
                            this.sent[instruction[1][i].name] = (this.sent[instruction[1][i].name] || 0) + 1;
                    }
                    else
                    {
                        new instruction[1]();
                        this.sent[instruction[1].name] = (this.sent[instruction[1].name] || 0) + 1;
                    }
                    break;
            }

            this.index++;
        }
        if (this.index >= this.totalSequence.length)
            return { done: true };
        else {
            if (--this.totalSequence[this.index][1] <= 0)
                this.index++;
            return { done: false };
        }
    }
}