import React, { useState } from "react";
import { GlobalStyle, Container, Content, Header } from "./assets/styles/global";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";
export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Feira no mercado", descricao: "Fazer a feira do mês no mercado", done: false },
    { id: 2, name: "Faculdade", descricao: "Estudar para periodo de AVS na faculdade", done: false },
    { id: 3, name: "Treino", descricao: "Ir para treina nas quartas e sextas", done: false }
  ]);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Content>
          <Header>Lista de Tarefas</Header>
          <AddArea/>
          {list.map((item, index) => (
            <div>
              <ListItem key={index} item={item} />
            </div>
          ))}
        </Content>
      </Container>
    </React.Fragment>
  );
}
