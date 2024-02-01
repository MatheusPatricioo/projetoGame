


const scriptsInEvents = {

	async Api_end_Event1_Act5(runtime, localVars)
	{
		
		async function EnviaNotaDoUsuario(){
			
			var myHeaders = new Headers();
			myHeaders.append("Authorization", "Bearer "+runtime.globalVars.tonken2);
		
			var formdata = new FormData();
			formdata.append("aula_id", runtime.globalVars.aulaId);
			formdata.append("conteudo_id", runtime.globalVars.conteudoID);
			formdata.append("nota", runtime.globalVars.nota);
		
			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: formdata,
				redirect: 'follow'
			};
		
			var retorno = false;
			await fetch(runtime.globalVars.adress, requestOptions)
				.then(response => response.json())
		  		.then(data => {
		// 			if(debugEnvio)console.log(data);
					console.log(data.success);
					if(data.success == true){
						retorno = true;
					}
				})
		// 		.catch(error => console.log('error', error));
		
			return retorno;
		}
		
		EnviaNotaDoUsuario();
	},

	async Api_end_Event1_Act6(runtime, localVars)
	{
		console.log(runtime.globalVars.nota);
	},

	async Api_start_Event1_Act2(runtime, localVars)
	{
		
		console.log(runtime.globalVars.access_token);
		
		runtime.globalVars.adress = runtime.globalVars.access_token.slice(runtime.globalVars.access_token.indexOf("api"), runtime.globalVars.access_token.indexOf("&user"));
		
		
		runtime.globalVars.aulaId = runtime.globalVars.access_token.slice(runtime.globalVars.access_token.indexOf("aula_id="), runtime.globalVars.access_token.indexOf("&cont"));
		
		
		runtime.globalVars.tonken2 = runtime.globalVars.access_token.slice(runtime.globalVars.access_token.indexOf("user_token="), runtime.globalVars.access_token.indexOf("&origen"));
		
		
		runtime.globalVars.conteudoID = runtime.globalVars.access_token.slice(runtime.globalVars.access_token.indexOf("conteudo"), runtime.globalVars.access_token.indexOf("&api"));
		
		
	},

	async Api_start_Event1_Act12(runtime, localVars)
	{
		var newAdress = decodeURIComponent(runtime.globalVars.adress);
		runtime.globalVars.adress = newAdress;
	},

	async Api_start_Event1_Act13(runtime, localVars)
	{
		console.log(runtime.globalVars.adress);
		console.log(runtime.globalVars.tonken2);
		console.log(runtime.globalVars.tamanho);
		console.log(runtime.globalVars.aulaId);
		console.log(runtime.globalVars.conteudoID);
		console.log(runtime.globalVars.access_token);
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

