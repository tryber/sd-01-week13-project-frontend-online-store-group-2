import React, { Component } from 'react';

const estadosBrasileiros = {
  Acre: 'AC',
  Alagoas: 'AL',
  Amapá: 'AP',
  Amazonas: 'AM',
  Bahia: 'BA',
  Ceará: 'CE',
  'Distrito Federal': 'DF',
  'Espírito Santo': 'ES',
  Goiás: 'GO',
  Maranhão: 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  Pará: 'PA',
  Paraíba: 'PB',
  Paraná: 'PR',
  Pernambuco: 'PE',
  Piauí: 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  Rondônia: 'RO',
  Roraima: 'RR',
  'Santa Catarina': 'SC',
  'São Paulo': 'SP',
  Sergipe: 'SE',
  Tocantins: 'TO',
  Estrangeiro: 'EX',
};
export class BuyerInfo extends Component {
  static createInput(type, place, id) {
    return <input id={id} type={type} placeholder={place} />;
  }

  static createInputSelect() {
    return (
      <div>
        <select name="Estados" id="estados-brasileiros">
          {Object.keys(estadosBrasileiros).forEach((key) =>
            <option value={estadosBrasileiros[key]}>{key}</option>
          )}
        </select>
      </div>
    );
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
          {BuyerInfo.createInput('text', 'Nome Completo', 'nome-usuário')}
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
