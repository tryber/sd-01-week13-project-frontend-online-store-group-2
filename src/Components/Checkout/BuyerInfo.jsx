import React, { Component } from 'react';

const estados = [
  <option value="AC">Acre</option>,
  <option value="AL">Alagoas</option>,
  <option value="AP">Amapá</option>,
  <option value="AM">Amazonas</option>,
  <option value="BA">Bahia</option>,
  <option value="CE">Ceará</option>,
  <option value="DF">Distrito Federal</option>,
  <option value="ES">Espírito Santo</option>,
  <option value="GO">Goiás</option>,
  <option value="MA">Maranhão</option>,
  <option value="MT">Mato Grosso</option>,
  <option value="MS">Mato Grosso do Sul</option>,
  <option value="MG">Minas Gerais</option>,
  <option value="PA">Pará</option>,
  <option value="PB">Paraíba</option>,
  <option value="PR">Paraná</option>,
  <option value="PE">Pernambuco</option>,
  <option value="PI">Piauí</option>,
  <option value="RJ">Rio de Janeiro</option>,
  <option value="RN">Rio Grande do Norte</option>,
  <option value="RS">Rio Grande do Sul</option>,
  <option value="RO">Rondônia</option>,
  <option value="RR">Roraima</option>,
  <option value="SC">Santa Catarina</option>,
  <option value="SP">São Paulo</option>,
  <option value="SE">Sergipe</option>,
  <option value="TO">Tocantins</option>,
  <option value="EX">Estrangeiro</option>
];
export class BuyerInfo extends Component {
  static estadosBrasileiros() {
    return (
      <select id="estado" name="Estado">
        {estados.map(select => select)}
      </select>
    );
  }
  static createInput(type, place, id) {
    return <input id={id} type={type} placeholder={place} />;
  }

  static createInputSelect() {
    return <div>{BuyerInfo.estadosBrasileiros}</div>;
  }
  constructor(props) {
    super(props);

    this.createeInput = this.createInput.bind(this);
    this.createInputSelect = this.createInputSelect.bind(this);
    this.estadosBrasileiros = this.estadosBrasileiros.bind(this);
  }

  render() {
    return (
      <div className="input-data-cliente">
        <span>Informações do Comprador</span>
        <div>
          {BuyerInfo.createInput("text", "Nome Completo", "nome-usuário")}
        </div>
        <div>{BuyerInfo.createInput('number', 'CPF', 'CPF')}</div>
        <div>{BuyerInfo.createInput('email', 'Email', 'email')}</div>
        <div>{BuyerInfo.createInput('number', 'Telefone', 'Telefone')}</div>
        <div>{BuyerInfo.createInput('number', 'CEP', 'CEP')}</div>
        <div>{BuyerInfo.createInput('text', 'Endereço', 'endereco')}</div>
        <div>{BuyerInfo.createInput('text', 'Complemento', 'Complemento')}</div>
        <div>{BuyerInfo.createInput('number', 'Número', 'numero-casa')}</div>
        <div>{BuyerInfo.createInput('text', 'Cidade', 'Cidade')}</div>
        <div>{BuyerInfo.createInputSelect()}</div>
      </div>
    );
  }
}
export default BuyerInfo;
