import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import ImageResults from '../ImageResults/ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    amount: 5,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '17969656-fcfb7cc804173738bef46c172',
    images: []
  };

  handleFetchImages = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
        this.state.searchText
        }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      .then(res => this.setState({ images: res.data.hits }))
      .catch(err => console.log(err));
  }

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        this.handleFetchImages()
      }
    });
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: e.target.value }, () =>{
      this.handleFetchImages()
    });
  }

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Search For Images"
          fullWidth={true}
        />
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Amount
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          name="amount"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;