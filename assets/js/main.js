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

	const mWSt = Number(((EurBetrag / 100) * mwstSatz).toFixed(2));
	console.log(mWSt);

	if (bruOrNet == "n-zu-b") {
		outputMwstBetrag.innerHTML = `${mWSt} Euro`;
		total.innerHTML = `${EurBetrag + mWSt} Euro`;
	} else {
		outputMwstBetrag.innerHTML = `${mWSt} Euro`;
		total.innerHTML = `${EurBetrag - mWSt} Euro`;
	}
};

const changeText = () => {
	const bruOrNet = document.querySelector(
		'input[name="bru-nett"]:checked',
	).value;

	textAenderDich.innerHTML =
		bruOrNet == "n-zu-b"
			? "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
			: "Bruttobetrag (Preis inkl. Mehrwertsteuer) in Euro";

	textAenderDich2.innerHTML =
		bruOrNet == "n-zu-b" ? "Bruttobetrag (Endpreis)" : "Nettobetrag";
};
