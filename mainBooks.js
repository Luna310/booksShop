var app = new Vue({
	el: '#app',
	data: {
		varPrincipal: [],
		arrayDescripcion: [],
		arrayDetalle: [],
		arrayPortada: [],
		arrayIdioma: [],
		arrayTitulo: [],
		varInput: "",
	},
	created: function () {
		this.getData();
		this.insertDates();
		this.insertImg();
	},
	methods: {

		getData: function () {
			fetch("https://api.myjson.com/bins/1h3vb3", {
				method: "GET",

			}).then(function (response) {
				if (response.ok) {


					return response.json();
				}

			}).then(function (json) {

				app.varPrincipal = json.books;

				app.insertDates();
				app.insertImg();
				app.varInput;
				console.log(app.varPrincipal)
				console.log(app.arrayTitulo)

			}).catch(function (error) {
				console.log("Request failed:" + error.message);
			});
		},
		insertDates: function () {

			for (i = 0; i < this.varPrincipal.length; i++) {
				this.arrayDescripcion.push(app.varPrincipal[i].descripcion);
				this.arrayDetalle.push(app.varPrincipal[i].detalle);
				this.arrayPortada.push(app.varPrincipal[i].portada);
				this.arrayIdioma.push(app.varPrincipal[i].idioma);
				this.arrayTitulo.push(app.varPrincipal[i].titulo);
			}

		},
		insertImg: function () {
			for (i = 0; i < this.arrayPortada.length; i++) {


				var div4 = document.createElement("DIV");
				div4.setAttribute("class", "flip-card-back");


				var div3 = document.createElement("DIV");
				div3.setAttribute("class", "flip-card-front");

				var div2 = document.createElement("DIV");
				div2.setAttribute("class", "flip-card-inner");

				var div1 = document.createElement("DIV");
				div1.setAttribute("id", "imgPortada");
				div1.setAttribute("class", "col-lg-2 flip-card");
				//				div1.setAttribute("class", "");


				div1.appendChild(div2);
				div2.appendChild(div3);
				div2.appendChild(div4);

				var urlPortada = document.createElement("IMG");
				urlPortada.setAttribute("src", this.arrayPortada[i]);
				urlPortada.setAttribute("class", "classImg");
				div3.appendChild(urlPortada);

				var varTitle = document.createElement("h3");
				varTitle.textContent = this.arrayTitulo[i];
				div4.appendChild(varTitle);

				var varDescription = document.createElement("p");
				varDescription.textContent = this.arrayDescripcion[i];
				div4.appendChild(varDescription);



				document.getElementById("divPortada").appendChild(div1);

			}
		},
		filterBooks: function () {
			document.getElementById("divPortada").innerHTML = "";
			console.log();
			var cont = 0;
			var varInput = document.getElementById("mySearch");
			var filter = varInput.value.toUpperCase();
			for (i = 0; i < this.varPrincipal.length; i++) {
				console.log(this.varPrincipal[i].titulo.toUpperCase().indexOf(filter) > -1)

				if (this.varPrincipal[i].titulo.toUpperCase().indexOf(filter) > -1) {

					this.arrayDescripcion.push(app.varPrincipal[i].descripcion);
					this.arrayDetalle.push(app.varPrincipal[i].detalle);
					this.arrayPortada.push(app.varPrincipal[i].portada);
					this.arrayIdioma.push(app.varPrincipal[i].idioma);
					this.arrayTitulo.push(app.varPrincipal[i].titulo);


					var div4 = document.createElement("DIV");
					div4.setAttribute("class", "flip-card-back");


					var div3 = document.createElement("DIV");
					div3.setAttribute("class", "flip-card-front");

					var div2 = document.createElement("DIV");
					div2.setAttribute("class", "flip-card-inner");

					var div1 = document.createElement("DIV");
					div1.setAttribute("id", "imgPortada");
					div1.setAttribute("class", "col-lg-2 flip-card");
					//				div1.setAttribute("class", "");


					div1.appendChild(div2);
					div2.appendChild(div3);
					div2.appendChild(div4);

					var urlPortada = document.createElement("IMG");
					urlPortada.setAttribute("src", this.arrayPortada[i]);
					urlPortada.setAttribute("class", "classImg");
					div3.appendChild(urlPortada);

					var varTitle = document.createElement("h3");
					varTitle.textContent = this.arrayTitulo[i];
					div4.appendChild(varTitle);

					var varDescription = document.createElement("p");
					varDescription.textContent = this.arrayDescripcion[i];
					div4.appendChild(varDescription);

					document.getElementById("divPortada").appendChild(div1);
					cont++
				}
			}
			if (cont < 1) {
				var x = document.createElement("H2");
				x.setAttribute("class","h2Sorry")
				x.textContent = "Sorry,his search did not obtain result.";
				document.getElementById("divPortada").appendChild(x);
				var y = document.createElement("IMG");
				y.setAttribute("src", "imgBooks/try2.gif");
				document.getElementById("divPortada").appendChild(y);
			}
		}
	}
});
