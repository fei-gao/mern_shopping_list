import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      {
        id: uuid(),
        name: 'Eggs'
      },
      {
        id: uuid(),
        name: 'Milk'
      },
      {
        id: uuid(),
        name: 'Steak'
      },
      {
        id: uuid(),
        name: 'Water'
      }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item')
            if (name) {
              const items = [...this.state.items, { id: uuid(), name }];
              this.setState({
                items
              })
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      const items = this.state.items.filter(item => {
                        return item.id !== id
                      })
                      this.setState({
                        items
                      })
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>

      </Container>
    )
  }
}

export default ShoppingList;