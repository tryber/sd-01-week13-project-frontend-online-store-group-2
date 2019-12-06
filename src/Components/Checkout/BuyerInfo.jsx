import React, { Component } from 'react';

export class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createeInput = this.createInput.bind(this);
    this.createInputSelect = this.createInputSelect.bind(this);
  }
  estados = () => (
    <select id="estado" name="Estado">
      <option value="AC">Acre</option>
      <option value="AL">Alagoas</option>
      <option value="AP">Amapá</option>
      <option value="AM">Amazonas</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceará</option>
      <option value="DF">Distrito Federal</option>
      <option value="ES">Espírito Santo</option>
      <option value="GO">Goiás</option>
      <option value="MA">Maranhão</option>
      <option value="MT">Mato Grosso</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MG">Minas Gerais</option>
      <option value="PA">Pará</option>
      <option value="PB">Paraíba</option>
      <option value="PR">Paraná</option>
      <option value="PE">Pernambuco</option>
      <option value="PI">Piauí</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="RO">Rondônia</option>
      <option value="RR">Roraima</option>
      <option value="SC">Santa Catarina</option>
      <option value="SP">São Paulo</option>
      <option value="SE">Sergipe</option>
      <option value="TO">Tocantins</option>
      <option value="EX">Estrangeiro</option>
    </select>
  );
  createInput(type, place, id) {
    return <input id={id} type={type} placeholder={place} />;
  }

  createInputSelect() {
    return <div>{this.estados}</div>;
  }

  render() {
    return (
      <div className="input-data-cliente">
        <span>Informações do Comprador</span>
        <div>{this.createInput("text", "Nome Completo", "nome-usuário")}</div>
        <div>{this.createInput("number", "CPF", "CPF")}</div>
        <div>{this.createInput("email", "Email", "email")}</div>
        <div>{this.createInput("number", "Telefone", "Telefone")}</div>
        <div>{this.createInput("number", "CEP", "CEP")}</div>
        <div>{this.createInput("text", "Endereço", "endereco")}</div>
        <div>{this.createInput("text", "Complemento", "Complemento")}</div>
        <div>{this.createInput("number", "Número", "numero-casa")}</div>
        <div>{this.createInput("text", "Cidade", "Cidade")}</div>
        <div>{this.createInputSelect()}</div>
      </div>
    );
  }
}
export default BuyerInfo;
