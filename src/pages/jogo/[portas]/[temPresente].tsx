import styles from '../../../styles/Jogo.module.css'
import Porta from '../../../components/Porta'
import { useEffect, useState } from 'react'
import { AtualizarPortas, CriarPortas } from '../../../functions/portas'
import Link  from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {
  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(CriarPortas(portas, temPresente))
  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValida && temPresenteValido)
  }, [portas])

  function RenderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
        onChange= {novaPorta => setPortas(AtualizarPortas(portas, novaPorta))}
      />
    })
  }
  
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? RenderizarPortas() : <h1>Valores inválidos!</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
            <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  )
}
