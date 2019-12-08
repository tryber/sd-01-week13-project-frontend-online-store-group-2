import React, { Component } from 'react';

const estadosBrasileiros = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  'Estrangeiro',
]

export class BuyerInfo extends Component {
  static createInput(type, place, id) {
    return <input id={id} type={type} placeholder={place} />;
  }
  static createInputSelect() {
    return (
      <div>
        <select name="Estados" id="estados-brasileiros">
          {estadosBrasileiros.map((select) => <option value={select}>{select}</option>)}
        </select>
      </div >
    );
  }
  render() {
    return (
      <div className="input-data-cliente">
        <h1>Informações do Comprador</h1>
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
