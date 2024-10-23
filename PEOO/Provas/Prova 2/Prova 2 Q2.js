function feriados() {
    let ano = document.getElementById('ano').value;
    let apiFeriados = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
    
    fetch(apiFeriados)
        .then(response => response.json())
        .then(feriados => mostrarFeriados(feriados))
    
        function mostrarFeriados(feriados) {
            const lista_de_feriados = document.getElementById("lista_de_feriados");
            lista_de_feriados.innerHTML = "";

            const ano_utilizado = document.createElement('div');
            ano_utilizado.innerHTML = `<h2>Feriados Nacionais de ${ano}</h2>`;
            lista_de_feriados.appendChild(ano_utilizado);

            const FeriadosTotais = feriados.length;
            const totalElement = document.createElement('div');
            totalElement.innerHTML = `<p>Total de feriados: ${FeriadosTotais}</p>`;
            lista_de_feriados.appendChild(totalElement);
    
            // Agrupando feriados por mês
            const feriadosPorMes = [];
    
            feriados.forEach(feriado => {
                const mesMinusculo = new Date(feriado.date).toLocaleString('pt-BR', { month: 'long' });
                const mes = mesMinusculo.charAt(0).toUpperCase() + mesMinusculo.slice(1);
                if (!feriadosPorMes[mes]) {
                    feriadosPorMes[mes] = [];
                }
                feriadosPorMes[mes].push(feriado);
            });
    
            for (const mes in feriadosPorMes) {
                const feriadosDoMes = feriadosPorMes[mes];
                const totalFeriadosNoMes = feriadosDoMes.length;
    
                const mesElement = document.createElement('div');
                mesElement.innerHTML = `<h2>${mes} (${totalFeriadosNoMes} feriado(s))</h2>`;
                lista_de_feriados.appendChild(mesElement);
    
                feriadosDoMes.forEach(feriado => {
                    const dia = new Date(feriado.date).getDate()
                    const feriadoElement = document.createElement('div');
                    feriadoElement.innerHTML = `
                        <div>
                            &bull; ${dia} - ${feriado.name}
                        </div>
                    `;
                    lista_de_feriados.appendChild(feriadoElement);
                });
    
                lista_de_feriados.appendChild(document.createElement('hr'));
            }
        }
    }
