import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  // useEffect com fetch(requisições assincronas)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
    .then((resposta) => resposta.json()) 
    .then(dados => {
      setTarefas(dados); //salva os dados vindos da API no estado tarefas
      setCarregando(false) // altera o estado carregando para false, indicando que os dados foram carregados, desativa a mensagem de carregando
    });
  }, []);// array vázio para executar apenas uma vez, ao abrir a tela, caso contrário, ficaria em loop infinito, pois o estado tarefas é alterado e o useEffect é chamado novamente

  return (
    <>
    <div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Tarefas vindas da API</h2>
        <p>Consumindo dados de JSONPlaceholder via fecth e useEffect</p>
        {carregando ? (
          <div>Carregando...</div>
        ) : (
          <ul>
            {tarefas.map((item) => (
              <li key={item.id}>{item.title}
                {item.completed ? ' (Concluída)' : ' (Pendente)'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  )
}

export default App
