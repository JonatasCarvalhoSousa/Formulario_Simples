import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        nome: "",
        email: "",
        senha: "",
        sexo: "Masculino",
      },
    };
    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        Nome: <br></br>
        <input
          type="text"
          name="nome"
          value={this.state.form.nome}
          onChange={this.dadosForm}
        />{" "}
        <br></br>
        Email: <br></br>
        <input
          type="email"
          name="email"
          value={this.state.form.email}
          onChange={this.dadosForm}
        />{" "}
        <br></br>
        Senha: <br></br>
        <input
          type="password"
          name="senha"
          value={this.state.form.senha}
          onChange={this.dadosForm}
        />{" "}
        <br></br>
        Sexo:
        <select
          name="sexo"
          value={this.state.form.sexo}
          onChange={this.dadosForm}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <h2>{this.state.form.email}</h2>
        <h2>{this.state.form.email}</h2>
        <h2>{this.state.form.senha}</h2>
        <h2>{this.state.form.sexo}</h2>
      </div>
    );
  }
}

export default App;
