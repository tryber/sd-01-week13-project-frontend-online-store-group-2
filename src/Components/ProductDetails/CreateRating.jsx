// Componentes presentes:
// - Comment.jsx

import React from 'react';
import StarRatings from 'react-star-ratings';
import * as LocalStorageApi from '../../Services/LocalStorageAPI';

class CreateRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmail: '',
      currentOpinionMessage: '',
      update: false,
    };
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderOpinionMessage = this.renderOpinionMessage.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.saveComments = this.saveComments.bind(this);
  }

  componentDidMount(){
    LocalStorageApi.createcommemt();
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { id }= this.props;
    const { currentEmail, currentOpinionMessage, rating } = this.state;
    let comment = { id, currentEmail, currentOpinionMessage, rating };
    this.saveComments(comment);
  }
    
  renderEmailInput() {
    return (
      <label htmlFor="currentEmail">
        <input
          name="currentEmail"
          type="email"
          placeholder="Email"
          value={this.state.currentEmail}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderOpinionMessage() {
    return (
      <label htmlFor="currentOpinionMessage">
        <textarea
          name="currentOpinionMessage"
          cols="30"
          rows="10"
          placeholder="Mensagem (Opcional)"
          value={this.state.currentOpinionMessage}
          onChange={this.onChange}
        />
      </label>
    );
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });
  }

  saveComments(comments) {
    LocalStorageApi.addComment(comments);
  }

  render() {
    return (
      <form >
        <div>
          <StarRatings
            rating={this.state.rating}
            changeRating={this.changeRating}
            numberOfStars={5}
            starRatedColor="black"
            starDimension={'40px'}
            starHoverColor={"black"}
          />
          <button type="button" onClick={this.onSubmit}>Avaliar</button>
        </div>
      </form>
    );
  }
}

export default CreateRating;
