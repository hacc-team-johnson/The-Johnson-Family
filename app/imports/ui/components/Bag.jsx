import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Bags } from '/imports/api/bag/bag';

/** Renders a single row in the List Bag table. See pages/ListBag.jsx. */
class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  deleteCallback(error) {
    if(error) {
      Bert.alert({type: 'danger', message: 'Delete failed: ${error.message}' });
    } else {
      Bert.alert({type: 'success', message: 'Delete succeeded' });
    }
  }
  onClick() {
    Bags.remove(this.props.bag._id, this.deleteCallback);
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>
              ID: {this.props.bag.id}
            </Card.Header>
            <Card.Meta>
              Type: {this.props.bag.type}
            </Card.Meta>
            <Card.Description>
              Weight: {this.props.bag.weight}
            </Card.Description>
            <Card.Description>
              Volume: {this.props.bag.volume}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.bag._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Bag.propTypes = {
  bag: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Bag);
