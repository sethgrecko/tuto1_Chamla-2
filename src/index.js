import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
/*
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/
class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "gaetan Berchtold" },
      { id: 2, nom: "gaetan Ber 2" },
      { id: 3, nom: "gaetan 3" }
    ]
  };

  handleDelete = id => {
    const clientsDuplicated = this.state.clients.slice();
    const index = clientsDuplicated.findIndex(function(client) {
      return client.id === id;
    });
    clientsDuplicated.splice(index, 1);
    this.setState({ clients: clientsDuplicated });
  };

  //Methode render pour le rendu dans la vue
  render() {
    // liste des variables simples
    const title = "liste des clients";

    //rendu
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(objet => (
            <li>
              {objet.nom}{" "}
              <button onClick={() => this.handleDelete(objet.id)}>X</button>
            </li>
          ))}
        </ul>
        <br />
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
