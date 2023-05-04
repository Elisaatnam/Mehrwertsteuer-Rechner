const outputMwstBetrag = document.querySelector(".output-mwst-betrag");
const total = document.querySelector(".output-endpreis");

const textAenderDich = document.querySelector(".betrag-in-euro");

const textAenderDich2 = document.querySelector(".bru-nett-output");

const calcMwSt = () => {
	//von den Radiobuttons mit d Namen "bru-nett" welcher angewaehlt ist, bekomme ich die value zurueck
	const bruOrNet = document.querySelector(
		'input[name="bru-nett"]:checked',
	).value;
	console.log(bruOrNet);

	//von den Radiobuttons mit d Namen "mwst-satz" welcher angewaehlt ist, bekomme ich die value zurueck als Number
	const mwstSatz = Number(
		document.querySelector('input[name="mwst-satz"]:checked').value,
	);
	console.log(mwstSatz);

	//Euro Betrag auslesen - kommt als Number zurueck
	const EurBetrag = Number(document.querySelector("#betrag").value);
	console.log(EurBetrag);

	//rechnet d Mehrwertsteuerbetrag aus
	const mWSt = Number(((EurBetrag / 100) * mwstSatz).toFixed(2));
	console.log(mWSt);

	// wenn Netto zu Brutto ausgewaehlt
	if (bruOrNet == "n-zu-b") {
		outputMwstBetrag.innerHTML = `${mWSt} €`;
		total.innerHTML = `${EurBetrag + mWSt} €`;
	}
	//wenn Brutto zu Netto ausgewaehlt
	else {
		outputMwstBetrag.innerHTML = `${mWSt} €`;
		total.innerHTML = `${EurBetrag - mWSt} €`;
	}
};

// der Text muss sich aendern, wenn Brutto zu Netto ausgewaehlt ist
const changeText = () => {
	//same as in function calcMwSt, brauche ich um zu schauen welcher Radiobutton ausgewaehlt ist
	const bruOrNet = document.querySelector(
		'input[name="bru-nett"]:checked',
	).value;

	textAenderDich.innerHTML =
		// ternary operator
		bruOrNet == "n-zu-b"
			? //wenn true dann das
			  "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
			: //wenn false dann das
			  "Bruttobetrag (Preis inkl. Mehrwertsteuer) in Euro";

	textAenderDich2.innerHTML =
		// nochmal ternary
		bruOrNet == "n-zu-b" ? "Bruttobetrag (Endpreis)" : "Nettobetrag";
};
