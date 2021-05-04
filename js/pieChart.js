window.onload = function() 
		{
			var chart = new CanvasJS.Chart("chartIncomesContainer", 
				{
					animationEnabled: true,
					title: 
					{
						text: "Zestawienie przychodów"
					},
					data: [
					{
						type: "pie",
						startAngle: 270,
						yValueFormatString: "##0.00\"%\"",
						indexLabel: "{label} {y}",
						dataPoints: 
						[
							{y: 1.23, label: "Wynagrodzenie"},
							{y: 2.34, label: "Odsetki bankowe"},
							{y: 3.45, label: "Sprzedaż"},
							{y: 6.56, label: "Inne"}
						]
					}]
				});
				
			chart.render();
			
			var chart = new CanvasJS.Chart("chartExpensesContainer", 
				{
					animationEnabled: true,
					title: 
					{
						text: "Zestawienie wydatków"
					},
					data: [
					{
						type: "pie",
						startAngle: 270,
						yValueFormatString: "##0.00\"%\"",
						indexLabel: "{label} {y}",
						dataPoints: 
						[
							{y: 12.31, label: "Jedzenie"},
							{y: 12.31, label: "Mieszkanie"},
							{y: 12.31, label: "Transport"},
							{y: 12.31, label: "Telekomunikacja"},
							{y: 12.31, label: "Opieka zdrowotna"},
							{y: 12.31, label: "Ubranie"},
							{y: 12.31, label: "Higiena"},
							{y: 12.31, label: "Dzieci"},
							{y: 12.31, label: "Rozrywka"},
							{y: 12.31, label: "Wycieczka"},
							{y: 12.31, label: "Szkolenia"},
							{y: 12.31, label: "Książki"},
							{y: 12.31, label: "Oszczędności"},
							{y: 12.31, label: "Emerytura"},
							{y: 12.31, label: "Spłata długów"},
							{y: 12.31, label: "Darowizna"},
							{y: 12.31, label: "Inne"}
						]
					}]
				});
			chart.render();
		}