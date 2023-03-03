import Style from "./lista.module.scss";
import Item from "./item";
import { ITarefa } from "../../tyoes/tarefas";

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void

}


function Lista ({tarefas, selecionaTarefa}: Props){
    
    return(
        <aside className={Style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item) =>(
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista