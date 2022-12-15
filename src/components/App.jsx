import React, {Component} from 'react';
import {Container} from './App.styled'



export default class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    largeImageURL: '',
    isLoading: false,
    error: null,
    totalPages: 0,
  }


onOpenModal = largeImageURL => {
  this.setState({ largeImageURL });
};

onCloseModal = () => {
  this.setState({ largeImageURL: '' });
};
}