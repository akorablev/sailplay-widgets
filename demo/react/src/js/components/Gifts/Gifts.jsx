import React from 'react';

import GiftsStore from '../../stores/GiftsStore.js';
import Gift from './Gift.jsx';

export default class Gifts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: GiftsStore.gifts
    }
  }

  componentDidMount() {
    GiftsStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    GiftsStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let gifts = this.state.gifts.map(gift =>
      <Gift
        key={gift.id}
        id={gift.id}
        title={gift.name}
        text="Купон на скидку 500 руб. при оформлении покупки на сумму от 700 руб."
        points={gift.points}
        userPoints={this.props.user ? this.props.user.user_points.total : 1e6}
        image={gift.thumbs.url_250x250}
        isAuth={this.props.isAuth}
      />
    );

    return (
      <div className="ppsp-deal-list">
        {gifts}
      </div>
    );
  }

  _onChange() {
    this.setState({ gifts: GiftsStore.gifts });
  }
}
